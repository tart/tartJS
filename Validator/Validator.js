var Validator = function () {};

Validator.prototype.is = {};
Validator.prototype.is.email = function (text) {
    return true;
};


exports.Validator = Validator;
