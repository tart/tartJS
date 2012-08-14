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
 * @fileoverview Delegated Component class offers a component architecture that is an improved version of
 * tart.ui.Component. Like tart.ui.Component, it carries Controller, View and Template in classical MVC role separation.
 *
 * Now, this class is not listening to any of dom events itself. Additionally, it uses ComponentManager
 * which keeps components and controls user interactions of these components.  For this
 * reason templates of all components have to include a unique id attribute.
 */

goog.provide('tart.ui.DlgComponent');
goog.require('goog.dom.query');
goog.require('tart.ui.ComponentManager');
goog.reqiure('goog.events.EventTarget');


/**
 * Base class for all tuttur components.
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.ui.DlgComponent = function() {
    this.id = tart.getUid();

    tart.ui.ComponentManager.set(this);
    this.bindModelEvents();
};
goog.inherits(tart.ui.DlgComponent, goog.events.EventTarget);


/**
 * Returns the dom element attached with the Component instance.
 * @return {?Node}
 */
tart.ui.DlgComponent.prototype.getElement = function() {
    var rv = this.element;
    if (!rv) rv = this.element = goog.dom.getElement(this.id);
    return rv;
};


/**
 * Returns base template of component
 * @return {string}
 */
tart.ui.DlgComponent.prototype.getPlaceholder = function() {
    return this.templates_base();
};


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
tart.ui.DlgComponent.prototype.bindModelEvents = function() {

};


/**
 * Returns children of component's element
 * @param {string} selector Expression which is searching in component element. This is kind of $ for selecting
 * dom element.
 * @return ({length: number})
 */
tart.ui.DlgComponent.prototype.getChild = function (selector) {
    var rv = null, el = this.getElement();

    if (el)
        rv = goog.dom.query(selector, el);

    return rv;
};


/**
 * Template of the root element. This method can be overridden if necessary. Other templates should be named with the
 * templates_ prefix as necessary. Also this template carries related component's id.
 * @return {string}
 */
tart.ui.DlgComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '"></div>';
};


/**
 * @override
 */
tart.ui.DlgComponent.prototype.disposeInternal = function() {
    tart.ui.ComponentManager.remove(this);
};