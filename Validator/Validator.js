var Validator = function() {
};

/**
 * Validator which looks for given text's format
 * like is email, is phoneNumber etc
 */
Validator.prototype.is = {};

/**
 * Checks if given text is valid email
 *
 * @param {string} text email text to be validated.
 * @return {bool} true if its valid email.
 */
Validator.prototype.is.email = function(text) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(text);
};
