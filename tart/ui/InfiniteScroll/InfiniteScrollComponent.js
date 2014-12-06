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

goog.provide('tart.ui.InfiniteScrollComponent');
goog.require('goog.async.Throttle');
goog.require('tart.ui.InfiniteScrollComponentModel');
goog.require('tart.ui.DlgComponent');



/**
 * InfiniteScrollComponent is a small component which checks the scroll position of a given DOM element, and if it's in
 * an appropriate position, fires a LOAD event for the parent component to act upon. When the parent component is
 * done loading new items, it should reset this InfiniteScrollComponent with the reset() method.
 *
 * @constructor
 * @extends {tart.ui.DlgComponent}
 *
 * @param {Element=} opt_el Optional element to track its scroll.
 */
tart.ui.InfiniteScrollComponent = function(opt_el) {
    this.model = new tart.ui.InfiniteScrollComponentModel();
    this.model.setParentEventTarget(this);
    goog.base(this);

    this.EventType = this.model.EventType;
    this.throttle = new goog.async.Throttle(this.checkShouldLoadMore_, 100, this);

    if (opt_el) this.register(opt_el);
};
goog.inherits(tart.ui.InfiniteScrollComponent, tart.ui.DlgComponent);


/**
 * Message to show when no more items are available to load.
 *
 * @type {string}
 */
tart.ui.InfiniteScrollComponent.prototype.endOfListText = '';


/**
 * @override
 */
tart.ui.InfiniteScrollComponent.prototype.render = function(opt_base, opt_index) {
    goog.base(this, 'render', opt_base, opt_index);

    if (!this.el) this.register(this.getElement().parentNode);
};


/**
 * Resets the component state to default. This should be used to signal the end of loading so that this component
 * can again check for loading.
 */
tart.ui.InfiniteScrollComponent.prototype.reset = function() {
    this.model.reset();
};


/**
 * Registers an element to track its scroll. This can be used for lazily introducing an element to track.
 *
 * @param {Node} el Element to track.
 */
tart.ui.InfiniteScrollComponent.prototype.register = function(el) {
    this.reset();

    this.el = el;

    goog.events.unlistenByKey(this.scrollListener);
    this.scrollListener = goog.events.listen(el, goog.events.EventType.SCROLL, this.onScroll_, false, this);
};


/**
 * Scroll event handler for infinite scroll. Fires the throttle to check for the correct load more position.
 *
 * @private
 */
tart.ui.InfiniteScrollComponent.prototype.onScroll_ = function() {
    this.throttle.fire();
};


/**
 * If in an appropriate state, checks if the scroll position is right and if so triggers a load more event.
 *
 * @private
 */
tart.ui.InfiniteScrollComponent.prototype.checkShouldLoadMore_ = function() {
    this.model.triggerShouldCheckState();
    if (!this.model.shouldCheck()) return;

    var el = this.el;
    if (!el) return;

    if (el.scrollHeight > el.offsetHeight && // the element can actually scroll
        el.scrollTop > el.scrollHeight - el.offsetHeight - 400) // and we're in a good position to load more
        this.model.load();
};


/**
 * Shows spinner during load.
 */
tart.ui.InfiniteScrollComponent.prototype.showSpinner = function() {
    this.getElement().classList.add('spinner');
    this.getElement().innerText = '';
    this.reset();
};


/**
 * Shows end of list message if no more items are available.
 */
tart.ui.InfiniteScrollComponent.prototype.showEndOfList = function() {
    this.getElement().innerText = this.endOfListText;
    this.getElement().classList.remove('spinner');
};


/**
 * @override
 */
tart.ui.InfiniteScrollComponent.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '" class="inf-scroll"></div>';
};


/**
 * @override
 */
tart.ui.InfiniteScrollComponent.prototype.disposeInternal = function() {
    this.model.dispose();
    this.throttle.dispose();
    goog.events.unlistenByKey(this.scrollListener);

    goog.dom.removeNode(this.getElement());
    goog.base(this, 'disposeInternal');
};
