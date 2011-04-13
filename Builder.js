/**
 * Copyright (c) 2011 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author armagan.amcalar@tart.com.tr (Armagan Amcalar)
 */

/**
 * @fileoverview Generic builder class to build and modify DOM elements.
 */

goog.provide('tart.Builder');
goog.require('tart.Err');



/**
 * Constructor method
 *
 * @constructor
 * @param {string} id id for the builder. Can be used as the id of the DOM element this builder will build.
 * @return {tart.Builder} A builder object.
 */
tart.Builder = function(id) {
    this.id_ = id || '';
    return this;
};


/**
 * @type {jQueryObject}
 * @private
 */
tart.Builder.prototype.$dom_ = null;


/**
 * @type {Object} Templates holder object.
 */
tart.Builder.templates = {};


/**
 * Builds the DOM element.
 * @param {*} owner Owner class for the builder.
 */
tart.Builder.prototype.buildDOM = goog.abstractMethod;


/**
 * Returns built ready-to-use DOM part in jQuery object format.
 *
 * @return {?jQueryObject} the DOM object built by the builder.
 */
tart.Builder.prototype.getDOM = function() {
    return this.$dom_;
};


/**
 * Removes the DOM part from document.
 * @return {boolean} Whether the remove operation was successful.
 */
tart.Builder.prototype.removeDOM = goog.abstractMethod;
