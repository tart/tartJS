goog.require('tart.FormValidator');

goog.provide('tart.FormValidator.SpecRunner');

describe('Form Validator', function() {
    var validator,
        form,
        formFields = [];

    beforeEach(function() {
        //create mock form object
        form = $('<form>');
        formFields[0] = $('<input>').attr('name', 'testInput1').appendTo(form);
        formFields[1] = $('<input>').attr('name', 'testInput2').appendTo(form);

        validator = new tart.FormValidator(form);
    });

    it('validator should be object', function() {
        expect(typeof validator).toEqual('object');
    });

    describe('Form validator for email', function() {
        var ruleErrorText = 'Not a valid email';

        var rules = {
            testInput1: {
                isEmail: {
                    text: ruleErrorText
                }
            }
        };


        it("should validate an input which has 'foo@bar.com' as valid email", function() {
            formFields[0].val('foo@bar.com');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should not validate in input which has 'foo@bar.xxxxx' as valid email", function() {
            formFields[0].val('foo@bar.xxxxx');
            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate in input which has 'foo@bar.xxxxx' with text 'Not a valid email'", function() {
            formFields[0].val('foo@bar.xxxxx');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });

        it("should not validate in input which has '' an errr text should be 'Not a valid email'", function() {
            formFields[0].val(' ');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });

    });


    describe('Form validator for not only space', function() {
        var ruleErrorText = 'You have ve to write at least one char or digit';

        var rules = {
            testInput1: {
                isNotOnlySpace: {
                    text: ruleErrorText
                }
            }
        };

        it("should validate an input which starts with space but has some chars like '  foo   bar   '", function() {
            formFields[0].val('   foo   bar    ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should not validate an input which has only spaces like '    '", function() {
            formFields[0].val('   ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an empty string ''", function() {
            formFields[0].val('');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should return error text 'You have ve to write at least one char or digit' on error", function() {
            formFields[0].val('');

            validator.setRules(rules).validate();
            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });



    });

    describe('Form validator for numeric control', function() {
        var ruleErrorText = 'You can type only numbers between 0-9';

        var rules = {
            testInput1: {
                isNumeric: {
                    text: ruleErrorText
                }
            }
        };

        it("should validate an input which has only numbers like '12345'", function() {
            formFields[0].val('12345');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should not validate an input which has numbers and space like ' 1234 5'", function() {
            formFields[0].val(' 1234 5');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an input which has numbers and chars  like '12345foo'", function() {
            formFields[0].val('12345foo');


            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("should not validate input with text 'You can type only numbers between 0-9' for 'foo12345bar'", function() {
            formFields[0].val('foo12345foo');

            validator.setRules(rules).validate();
            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });

    });




    describe('Form validator for input which contains both digit and non digit char', function() {
        var ruleErrorText = 'Your input must contain both digit and non digit char';

        var rules = {
            testInput1: {
                isDigitAndNonDigit: {
                    text: ruleErrorText
                }
            }
        };

        it("should not validate an input which has only numbers like '12345'", function() {
            formFields[0].val('12345');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an input which has only alpha chars 'foobar'", function() {
            formFields[0].val('foobar');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an input which has only spaces '    '", function() {
            formFields[0].val('    ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("should validate an input which has both digit and alpha chars 'foo12345bar'", function() {
            formFields[0].val('foo12345foo');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should validate an input which has both digit, alpha chars,no nalpha chars 'foo12345bar-_`'", function() {
            formFields[0].val('foo12345foo-_`');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should validate an input which has both digit and space chars like '12345 '", function() {
            formFields[0].val('12345 ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should  not validate an input which has both alpha and space chars like 'foobar '", function() {
            formFields[0].val('foobar ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("should not validate an input which has non alpha chars and space chars like '~-? '", function() {
            formFields[0].val('~-? ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should return text 'Your input must contain both digit and non digit char' for invalid input", function() {
            formFields[0].val('~-? ');

            validator.setRules(rules).validate();
            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });

    });


    describe('Form validator to check inputs max length', function() {
        var ruleErrorText = 'Your inputs lenght is more than 7';

        var rules = {
            testInput1: {
                hasMaxLength: {
                    text: ruleErrorText,
                    value: 7
                }
            }
        };

        it("should validate an input like '12345'", function() {
            formFields[0].val('12345');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should not validate an input like '12345   '", function() {
            formFields[0].val('12345   ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an input like '        '", function() {
            formFields[0].val('        ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should validate an input like '123 5 7'", function() {
            formFields[0].val('123 5 7');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should return 'Your inputs lenght is more than 7' text on error", function() {
            formFields[0].val('123 5 7 foo bar');

            validator.setRules(rules).validate();
            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);

        });
    });


    describe('Form validator to check inputs min length', function() {
        var ruleErrorText = 'Your inputs lenght is less than 3';

        var rules = {
            testInput1: {
                hasMinLength: {
                    text: ruleErrorText,
                    value: 3
                }
            }
        };

        it("should validate an input like '12345'", function() {
            formFields[0].val('12345');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should not validate an input like '12'", function() {
            formFields[0].val('12');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate an input like '  '", function() {
            formFields[0].val('  ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should validate an input like '1  '", function() {
            formFields[0].val('1  ');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should return 'Your inputs lenght is less than 3' text on error", function() {
            formFields[0].val('12');

            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });
    });


    describe("Form validator to check input's numeric value", function() {
        var ruleErrorText = 'Your inputs value is more than 10';

        var rules = {
            testInput1: {
                hasMaxValue: {
                    text: ruleErrorText,
                    value: 10
                }
            }
        };


        it("should validate an input like '1'", function() {
            formFields[0].val('1');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });

        it("should not validate an input like '12'", function() {
            formFields[0].val('12');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("should return 'Your inputs value is more than 10' text on error", function() {
            formFields[0].val('12');

            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });
    });

    describe("Form validator to check input's numeric value", function() {
        var ruleErrorText = 'Your inputs value is less than 10';

        var rules = {
            testInput1: {
                hasMinValue: {
                    text: ruleErrorText,
                    value: 10
                }
            }
        };


        it("should not validate an input like '1'", function() {
            formFields[0].val('1');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should validate an input like '12'", function() {
            formFields[0].val('12');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should return 'Your inputs value is less than 10' text on error", function() {
            formFields[0].val('1');

            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(ruleErrorText);
        });
    });


    describe('Form validator for multiple rules', function() {
        var rules = {
            testInput1: {
                isNumeric: {
                    text: 'Input is not numeric'
                },
                hasMaxLength: {
                    text: "Input's length is more than 9",
                    value: 9
                },
                hasMinLength: {
                    text: "Input's length is less than 6",
                    value: 6
                }
            }
        };


        it("should not validate an input like 'fooobar'", function() {
            formFields[0].val('fooobar');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should validate an input like '123456'", function() {
            formFields[0].val('123456');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should not validate an input like '12345'", function() {
            formFields[0].val('12345');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("should not validate an input like '12345678910'", function() {
            formFields[0].val('12345678910');

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });


        it("error text should be 'Input is not numeric' for 'foobar'", function() {
            formFields[0].val('foobar');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual('Input is not numeric');
        });


        it("error text should be 'Input\'s length is more than 9' for '1234567890'", function() {
            formFields[0].val('1234567890');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual("Input's length is more than 9");
        });

        it("error text should be 'Input\'s length is less than 6' for '12345'", function() {
            formFields[0].val('12345');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual("Input's length is less than 6");
        });

    });


    describe("Form validate validates form before form's submit", function() {
        var rules = {
            testInput1: {
                isNumeric: {
                    text: 'Input is not numeric'
                },
                hasMaxLength: {
                    text: "Input's length is more than 9",
                    value: 9
                },
                hasMinLength: {
                    text: "Input's length is less than 6",
                    value: 6
                }
            }
        };


        it('should validate form on submit and return generated errors in callback', function() {
            formFields[0].val('foobar');

            var errorObjects;

            validator.setRules(rules).validateOnSubmit(function(errors) {
                errorObjects = errors;
            });

            form.trigger('submit');

            expect(errorObjects[0].el.get(0)).toEqual(formFields[0].get(0));
            expect(errorObjects[0].text).toEqual('Input is not numeric');
        });



    });



});

/**
 * Run jasmine spec
 */
tart.FormValidator.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
