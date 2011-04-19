goog.provide('tart.Validator_.has');


/**
 * Checks for strings' min length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length > value.
 */
tart.Validator_.has.minLength = function(text, value) {
    return (text.length >= value);
};

/**
 * Checks for string's max length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length < value.
 */
tart.Validator_.has.maxLength = function(text, value) {
    return (text.length <= value);
};


/**
 * Checks for string or number's min numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num < value.
 */
tart.Validator_.has.minValue = function(num, value) {
    return num >= value;
};

/**
 * Checks for string or number's max numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num > value.
 */
tart.Validator_.has.maxValue = function(num, value) {
    return num <= value;
};


