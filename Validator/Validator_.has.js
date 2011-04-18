goog.provide("tart.Validator_.has");


tart.Validator_.has.minLength = function(text, value) {
    return (text.length >= value);
};


tart.Validator_.has.maxLength = function(text, value) {
    return (text.length <= value);
};


tart.Validator_.has.minValue = function(num, value) {
    return num >= value;
};

tart.Validator_.has.maxValue = function(num, value) {
    return num <= value;
};


