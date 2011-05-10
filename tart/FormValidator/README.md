# Tart FormValidator

A JavaScript validation library which validates form elements using tart.Validation

## Testing specs

You need [jasmine](http://pivotal.github.com/jasmine/) to run the specs
You better have [qasmine](https://github.com/tart/qasmine) to automatize the testing process

### How to run qasmine

Simlpy, run
    
    qasmine spec/SpecRunner.html


## Validation checks

<pre>
var form = $("form");

var rules = {
    testInput1 : {
        isNumeric : {
            text : "Input is not numeric"
        },
        hasMaxLength : {
            text : "Input's length is more than 9",
            value : 9
        },
        hasMinLength : {
            text : "Input's length is less than 6",
            value : 6
        }
    }
};


var validator = new tart.FormValidator(form);

validator.setRules(rules).validate();

if(validator.isValid()) {
    //its valid
}
else {
    //its not valid, do some stuff with error object
    var errors = validator.getErrors();
}
</pre>
