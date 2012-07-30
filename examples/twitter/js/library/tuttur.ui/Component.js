// Copyright (c) 2009-2012 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan.amcalar@tart.com.tr>


/**
 * @fileoverview This class offers a component architecture that is an improved version of tart.ui.Component. Like
 * tart.ui.Component, it carries Controller, View and Template in classical MVC role separation.
 *
 * Now, this class is not listening to any of dom events before user interactions like click, hover etc. Additionally,
 * class uses componentManager which keeping components and controls user interactions of these components.  For this
 * reason componentManager has to be called in bootstrapper (i.e., before any components are initialized) and templates
 * of all components have to include a unique id attribute.
 */

goog.provide('tuttur.ui.Component');
goog.require('goog.dom.query');

/**
 * Base class for all tuttur components.
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tuttur.ui.Component = function() {
    this.id = tart.getUid();
    this.bindModelEvents();
};
goog.inherits(tuttur.ui.Component, goog.events.EventTarget);


/**
 * Returns the dom element attached with the Component instance.
 * @return {?Node}
 */
tuttur.ui.Component.prototype.getElement = function() {
    var rv = this.element;
    if (!rv) rv = this.element = goog.dom.getElement(this.id);
    return rv;
};


/**
 * Returns base template of component
 * @return {string}
 */
tuttur.ui.Component.prototype.getPlaceholder = function() {
    return this.templates_base();
};


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
tuttur.ui.Component.prototype.bindModelEvents = function() {

};


/**
 * Returns children of component's element
 * @param {string} selector Expression which is searching in component element. This is kind of $ for selecting dom element.
 * @return ({length: number})
 */
tuttur.ui.Component.prototype.getChild = function (selector) {
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
tuttur.ui.Component.prototype.templates_base = function() {
    return '<div id="' + this.id + '"></div>';
};


/**
 * @override
 */
tuttur.ui.Component.prototype.disposeInternal = function() {
    tuttur.Registry.get('componentManager').remove(this);
};