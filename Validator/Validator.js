var Validator = function () {};

Validator.prototype.is = {};
Validator.prototype.is.email = function (text) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(text);
};
