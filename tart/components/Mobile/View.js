// Copyright 2014 Tart. All Rights Reserved.
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

goog.require('tart.components.View');
goog.require('tart.components.mobile.Template');
goog.require('tart.dom');
goog.provide('tart.components.mobile.View');



/**
 * Mobile view.
 *
 * @constructor
 * @extends {tart.components.View}
 * @param {tart.components.mobile.Template=} opt_template Template instance.
 */
tart.components.mobile.View = function(opt_template) {
    goog.base(this);
    this.subviews = [];
    this.template = opt_template || new this.templateClass();
};
goog.inherits(tart.components.mobile.View, tart.components.View);


/** @type {boolean} active If view is active or not. */
tart.components.mobile.View.prototype.active = false;

/**
 * Currently active view.
 */
tart.components.mobile.View.prototype.activeView;


/**
 * Width of a view that spans the entire screen. Reflects (or caches) window's innerWidth property.
 *
 * @type {number}
 */
tart.components.mobile.View.WIDTH = parseInt(window.getComputedStyle(document.body, null).width, 10);


/**
 * Currently active view's width.
 */
tart.components.mobile.View.prototype.viewWidth = tart.components.mobile.View.WIDTH;


/**
 * Currently active sub view's index.
 *
 * @type {number}
 */
tart.components.mobile.View.prototype.activeSubViewIndex = null;


/**
 * View's index in parent view.
 */
tart.components.mobile.View.prototype.index = 0;


/**
 * Active view transform animation's transition time.
 */
tart.components.mobile.View.prototype.transitionDuration = 800;


/**
 * Template class of mobile component.
 */
tart.components.mobile.View.prototype.templateClass;


/**
 * Activates current view.
 */
tart.components.mobile.View.prototype.activate = function() {
    if (!this.active) {
        goog.dom.classes.add(this.getDOM(), 'active');
        this.active = true;
    }
};


/**
 * Deactivates current view.
 */
tart.components.mobile.View.prototype.deactivate = function() {
    if (this.active) {
        var that = this;
        setTimeout(function() {
            goog.dom.classes.remove(that.getDOM(), 'active');
        }, this.transitionDuration);
        this.active = false;
    }
};


/**
 * @override
 * @return {Element} Current DOM reference.
 */
tart.components.mobile.View.prototype.getDOM = function() {
    return /** @type {Element} */(goog.base(this, 'getDOM'));
};


/**
 * @param {tart.components.mobile.View} view View that is set to active.
 * @param {Object=} options View options.
 */
tart.components.mobile.View.prototype.setActiveView = function(view, options) {
    if (this.activeView == view) return;

    options = options || {};
    var disableAnimate = !!options.disableAnimate;

    var animate = false;
    if (this.activeView) {
        this.activeView.deactivate();
        animate = !disableAnimate;
    }

    view.activate();
    this.activeView = view;
    this.goToActiveView(animate);
    this.fromClick = false;
};


/**
 * @param {Array} subviews subviews array.
 */
tart.components.mobile.View.prototype.setSubViews = function(subviews) {
    goog.array.forEach(subviews, function(subview) {
        this.subviews.push(subview);

        if (!subview.getDOM())
            subview.setDOM(tart.dom.createElement(subview.render()));

        goog.dom.append(/** @type {!Node} */(this.getDOM()), /** @type {!Node} */(subview.getDOM()));
    }, this);
};


/**
 * @return {string} Returns base template.
 */
tart.components.mobile.View.prototype.render = function() {
    return this.template.base();
};


/**
 * @param {boolean} animate Ensures to show active view on screen.
 */
tart.components.mobile.View.prototype.goToActiveView = function(animate) {
    var that = this,
        dom = this.getDOM();

    goog.dom.classes.enable(dom, 'transition', animate);

    var viewIndex = this.activeView.index;

    if (this.activeSubViewIndex == viewIndex)
        return;
    this.activeSubViewIndex = viewIndex;

    setTimeout(function() {
        dom.style.webkitTransform = 'translate3d(' + (- viewIndex * that.viewWidth) + 'px, 0, 0)';
    }, 1);
};


/**
 * Sets scroll top value to zero of current view's dom.
 */
tart.components.mobile.View.prototype.scrollToTop = function() {
    this.getDOM().scrollTop = 0;
};
