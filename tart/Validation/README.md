# Tart Validator

A JavaScript validation library

## Testing specs

You need [jasmine](http://pivotal.github.com/jasmine/) to run the specs
You better have [qasmine](https://github.com/tart/qasmine) to automatize the testing process

### How to run qasmine

Simlpy, run
    
    qasmine spec/SpecRunner.html


## Validation checks

* is.email(string) : Checks string as a valid email
* is.notOnlySpace(string) : Checks string that it doesnt contains only from whitespaces
* is.numeric(string) : Checks string that only contains numeric values
* is.digitAndNonDigit(string) : Checks string which contains both digits and non-digit chars, can be useful to check passwords' strength
* has.maxLength(string, value) : Checks string for max length
* has.minlength(string, value) : Checks string for min length
* has.minValue(number, value) : Cheks number for its min value
* has.maxValue(number, value) : Cheks number for its max value
