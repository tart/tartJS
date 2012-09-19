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
 * @fileoverview This class offers a component architecture for projects that include highly interactive user
 * interfaces. Unlike tart.Component which features a classical MVC role seperation - with 5 or 6 classes, which is
 * also a heavy implementation - tart.ui.Component uses 3 classes and joins the roles of the Template, View and
 * Controller into one Component class.
 *
 * The other roles help responsibility seperation that is necessary enough for a UI component.
 *
 * The Component class is useful for event management; it listens to DOM events, map these to related functions in the
 * model and vice versa.
 *
 * The model is responsible for all the states of the component and the business logic.
 * The component shouldn't keep state and should be as dummy as possible; any state change on the model is dispatched
 * via an event to the Component class to update itself. This decoupled architecture makes it possible that business
 * critical unit tests of the component can run fully functionally without a DOM. The model may also be responsible for
 * dealing with the data in any way (remote requests, other events to other modules in the system, etc).
 *
 * Finally, the third, optional class is a value class, which is like a POJO. It keeps all the related data in an
 * instance. This allows one to exchange data in the application with very lightweight data objects - make it through a
 * constructor class and you get to keep object oriented design.
 *
 * So, the data the component displays or deals with resides in a value class. The model keeps its state and business
 * logic, and the Component class makes the representation.
 */

goog.provide('tart.ui.Component');
goog.require('goog.events.EventTarget');
goog.require('tart');
goog.require('tart.dom');



/**
 * The component class useful for building small and single responsible UI components.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
tart.ui.Component = function() {
    this.id = tart.getUid();
    this.element = tart.dom.createElement(this.templates_base());

    this.createElements();
    this.bindModelEvents();
    this.bindDomEvents();
};
goog.inherits(tart.ui.Component, goog.events.EventTarget);


/**
 * Returns the dom element attached with the Component instance.
 * @return {Element} Returns the root DOM element.
 */
tart.ui.Component.prototype.getElement = function() {
    return /** @type {Element} */(this.element);
};


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
tart.ui.Component.prototype.bindModelEvents = function() {

};


/**
 * Listens to DOM events. This method should be overriden by the implementer, and should keep the component's DOM
 * event bindings.
 * @protected
 */
tart.ui.Component.prototype.bindDomEvents = function() {

};


/**
 * Creates the necessary DOM elements and appends them to the root element. This method should be overriden by the
 * implementer.
 */
tart.ui.Component.prototype.createElements = function() {

};


/**
 * Template of the root element. This method can be overridden if necessary. Other templates should be named with the
 * templates_ prefix as necessary.
 * @return {string} Root element's tempalte.
 */
tart.ui.Component.prototype.templates_base = function() {
    return '<div id="' + this.id + '"></div>';
};
