
//TODO: replace with jQuery.trim()
var $ = {};
$.trim = trim = function(text) {
    return text.replace(/^\s+|\s+$/g,"");
}





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


Validator.prototype.is.notOnlySpace = function(text) {
    var result = $.trim(text).length > 0;
    return result;
};


Validator.prototype.is.numeric = function(text) {
    var pattern = /^[0-9]+$/;
    return pattern.test(text);
};


Validator.prototype.is.digitAndNonDigit = function(text) {
    var pattern = /(\d\D)|(\D\d)/;
    return pattern.test(text);
};



Validator.prototype.has = {};

Validator.prototype.has.minLength = function(text, value) {
    return (text.length >= value);
};


Validator.prototype.has.maxLength = function(text, value) {
    return (text.length <= value);
};


Validator.prototype.has.minValue = function(num, value) {
    return num >= value;
};

Validator.prototype.has.maxValue = function(num, value) {
    return num <= value;
};


