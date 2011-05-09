# Tart FormValidator

A JavaScript validation library which validates form elements using tart.Validation

## Testing specs

You need [jasmine](http://pivotal.github.com/jasmine/) to run the specs
You better have [qasmine](https://github.com/tart/qasmine) to automatize the testing process

### How to run qasmine

Simlpy, run
    
    qasmine spec/SpecRunner.html


## Validation checks

<code>
var form = $("form");

var validationForSubmit = function (errors) {
    //do some stuff with 'errors' object
};


var validationForBlur = function (errors) {
    //do some stuff with 'errors' object
};

tart.FormValidator(form).validateOnSubmit(validationForSubmit);
tart.FormValidator(form).validateOnBlur(validateOnBlur);
</code>
