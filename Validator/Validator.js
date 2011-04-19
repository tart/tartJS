goog.provide('tart.Validator');
goog.require('tart.Validator_');



/**
 * Tart validator to check if string or number is valid for a specified format
 *
 * @constructor
 */
tart.Validator = function() {
};

/**
 * @type {Object}
 *
 * Validator methods, which related to check for input's format
 */
tart.Validator.prototype.is = tart.Validator_.is;

/**
 * @type {Object}
 *
 * Validator methods, which related to check for input's attributes ie. char length
 */
tart.Validator.prototype.has = tart.Validator_.has;
