// Copyright 2011 Tart. All Rights Reserved.
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

/**
 * @fileoverview tart.components.Widget is a base class for all components Widget's.
 */

goog.require('tart');
goog.provide('tart.components.Widget');



/**
 * Base widget
 * @constructor
 */
tart.components.Widget = function() {
    /** @private */
    this.componentId_ = tart.getUid();
};

/**
 * Renders the component in a given element or in its placeholder that should already be in the DOM.
 *
 * @param {Element=} rootEl If provided, the widget will render into this rootEl.
 *                              Otherwise, it will look for its placeholder in DOM.
 */
tart.components.Widget.prototype.render = function (rootEl) {
    rootEl = rootEl || goog.dom.getElement(this.componentId_);
    rootEl.appendChild(this.controller.getDOM());
};

/**
 * Get placeholder template
 * @return {string} placeholder markup.
 */
tart.components.Widget.prototype.getPlaceholder = function () {
    return this.templates_placeholder();
};

/**
 * Component's placeholder template
 * @return {string} placeholder markup.
 */
tart.components.Widget.prototype.templates_placeholder = function () {
    return '<div class="widgetPlaceholder" id="' + this.componentId_ + '"></div>';
};

/**
 * Get component id
 * @return {Number} component id.
 */
tart.components.Widget.prototype.getId = function () {
    return this.componentId_;
};

