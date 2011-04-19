goog.provide('tart.Validator_.is');

/**
 * Checks if given text is valid email
 *
 * @param {string} text email text to be validated.
 * @return {bool} true if its valid email.
 */
tart.Validator_.is.email = function(text) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(text);
};


/**
 * Checks if given text doesnt contains only white spaces but some chars or numbers
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains any char or number.
 */
tart.Validator_.is.notOnlySpace = function(text) {
    var result = $.trim(text).length > 0;
    return result;
};


/**
 * Checks if given text contains only numeric chars
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains only numbers.
 */
tart.Validator_.is.numeric = function(text) {
    var pattern = /^[0-9]+$/;
    return pattern.test(text);
};


/**
 * Checks if given text contains both digit and non-digit chars
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains both digit and non-digit chars.
 */
tart.Validator_.is.digitAndNonDigit = function(text) {
    var pattern = /(\d\D)|(\D\d)/;
    return pattern.test(text);
};


