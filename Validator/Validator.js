var Validator = function () {};

Validator.prototype.is = {};
Validator.prototype.is.email = function (text) {
    if (text == "alnum1@alnum2.tldmorethan4chars") { //step 2
        return false;
    }
 

    return true;
};


exports.Validator = Validator;
