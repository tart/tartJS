/**
 * Copyright (c) 2011 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author armagan.amcalar@tart.com.tr (Armagan Amcalar)
 */

/**
 * @fileoverview tartJS error library and utility functions.
 */

goog.provide('tart.Err');
goog.require('tart');



/**
 * Constructor.
 *
 * @constructor
 */
tart.Err = function() {
    return this;
};


/**
 * Returns a new Error object which contains a custom error message.
 *
 * @param {string} message Message to set as the error message.
 * @return {Error} Error object containing the details.
 */
tart.Err.get = function(message) {
    var err = new Error();
    err.name = 'Problem';
    err.message = message;
    return err;
};


/**
 * Returns a new Error object which contains a implementation error message.
 *
 * @param {string} methodName Name of the unimplemented method. This will be set as the error message.
 * @throws {Error} Error object containing the details.
 */
tart.Err.unimplementedMethod = function(methodName) {
    var err = new Error();
    err.name = 'Wrong implementation';
    err.message = 'You should implement your own ' + methodName + ' method in child class which you want to use.';
    throw err;
};
