// Copyright 2014 Startup Kitchen. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('tart.ui.P2RComponent');
goog.require('goog.async.Throttle');
goog.require('tart.ui.P2RComponentModel');
goog.require('tart.ui.DlgComponent');



/**
 * P2RComponent is a small component which checks the scroll position of a given DOM element, and if it's in
 * an appropriate position, fires a REFRESH event for the parent component to act upon. When the parent component is
 * done with refreshing, it should reset this P2RComponent with the reset() method.
 *
 * @constructor
 * @extends {tart.ui.DlgComponent}
 *
 * @param {Element=} opt_el Optional element to track its scroll.
 */
tart.ui.P2RComponent = function(opt_el) {
    this.model = new tart.ui.P2RComponentModel();
    this.model.setParentEventTarget(this);
    goog.base(this);

    this.EventType = this.model.EventType;

    if (opt_el) this.register(opt_el);
};
goog.inherits(tart.ui.P2RComponent, tart.ui.DlgComponent);


/**
 * Threshold value for the release action. Releases after this threshold will trigger a refresh.
 *
 * @type {number}
 */
tart.ui.P2RComponent.prototype.threshold = 135;


/**
 * Height of this component. This setting is used to offset the scroll view while refreshing.
 *
 * @type {number}
 */
tart.ui.P2RComponent.prototype.height = 96;


/**
 * Start position of the arrow. This is adjusted for a spring-like effect.
 *
 * @type {number}
 */
tart.ui.P2RComponent.prototype.arrowOffset = -40;


/**
 * @override
 */
tart.ui.P2RComponent.prototype.bindModelEvents = function() {
    goog.events.listen(this.model, this.model.EventType.SHOULD_REFRESH, this.onShouldRefresh,
        false, this);
};


/**
 * Triggered when the components decides a refresh action. This method should be overridden
 * to, for example, display a spinner animation during refresh.
 */
tart.ui.P2RComponent.prototype.onShouldRefresh = function() {
    this.el.style.webkitTransform = 'translateY(' + this.height + 'px)';
    this.el.style.webkitTransition = '300ms ease-out';

    this.getChild(this.mappings.SPINNER)[0].style.visibility = 'visible';
    this.getChild(this.mappings.ARROW)[0].style.visibility = 'hidden';
};


/**
 * @override
 */
tart.ui.P2RComponent.prototype.render = function(opt_base, opt_index) {
    goog.base(this, 'render', opt_base, opt_index);

    this.rendered = true;

    if (!this.el) this.register(this.getElement().parentNode);
};


/**
 * Resets the component state to default. This should be used to signal the end of refreshing so that this component
 * can again check for pull to refresh.
 */
tart.ui.P2RComponent.prototype.reset = function() {
    if (this.el) this.el.style.webkitTransform = 'translateY(0)';

    var spinner = this.getChild(this.mappings.SPINNER);
    var arrow = this.getChild(this.mappings.ARROW);

    if (spinner) spinner[0].style.visibility = 'hidden';

    setTimeout(function() {
        if (arrow) arrow[0].style.visibility = 'visible';
    }, 500);

    this.model.reset();
};


/**
 * Registers an element to track its scroll. This can be used for lazily introducing an element to track.
 *
 * @param {Node} el Element to track.
 */
tart.ui.P2RComponent.prototype.register = function(el) {
    this.reset();

    this.el = el;

    goog.events.unlistenByKey(this.scrollListener);
    goog.events.unlistenByKey(this.releaseListener);

    this.scrollListener = goog.events.listen(el, goog.events.EventType.SCROLL, this.onScroll, false, this);
    this.releaseListener = goog.events.listen(document.body, goog.events.EventType.TOUCHEND,
        this.onRelease_, false, this);
};


/**
 * Scroll event handler for pull to refresh.
 *
 * @param {goog.events.BrowserEvent} e Scroll event object.
 */
tart.ui.P2RComponent.prototype.onScroll = function(e) {
    this.checkShouldRefresh(e);

    var rot = 0,
        scroll = -e.target.scrollTop,
        pos = this.arrowOffset + Math.pow(scroll, 0.75),
        rotationThreshold = this.threshold - 60;

    if (scroll >= rotationThreshold)
        rot = Math.min(180, (scroll - rotationThreshold) * 3);

    this.getChild(this.mappings.ARROW)[0].style.webkitTransform = 'translateY(' + pos + 'px) rotate(' + rot + 'deg)';
};


/**
 * Fires when the user lifts her finger to finish the scroll.
 * If the user scrolled enough, inform the model to refresh
 *
 * @private
 */
tart.ui.P2RComponent.prototype.onRelease_ = function() {
    if (this.el.scrollTop < -this.threshold)
        this.model.refresh();
};


/**
 * If in an appropriate state, checks if the scroll position is right and if so triggers a refresh event.
 *
 * @param {goog.events.BrowserEvent} e Scroll event object.
 */
tart.ui.P2RComponent.prototype.checkShouldRefresh = function(e) {
    this.model.triggerShouldCheckState();
};


/**
 * @override
 */
tart.ui.P2RComponent.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '" class="pull-to-refresh">' +
            '<div class="pull-to-refresh-arrow"></div>' +
            '<div class="pull-to-refresh-spinner"></div>' +
        '</div>';
};


/**
 * @override
 */
tart.ui.P2RComponent.prototype.disposeInternal = function() {
    this.model.dispose();
    goog.events.unlistenByKey(this.scrollListener);

    goog.dom.removeNode(this.getElement());
    goog.base(this, 'disposeInternal');
};


/**
 * @enum {string}
 */
tart.ui.P2RComponent.prototype.mappings = {
    ARROW: '.pull-to-refresh-arrow',
    SPINNER: '.pull-to-refresh-spinner'
};
