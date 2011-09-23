goog.require('tart.Validation');

goog.provide('tart.Validation.SpecRunner');

describe('Validation', function() {
    var validator;

    beforeEach(function() {
        validator = tart.Validation;
    });

    it('validator should be object', function() {
        expect(typeof validator).toEqual('object');
    });

    describe('Validation.is', function() {

        describe('Validation.is.email', function() {

            it('regular email like alnum1@alnum2.tld should pass', function() {
                var result = validator.is.email('alnum1@alnum2.tld');
                expect(result).toBeTruthy();
            });


            it('should not validate an email which has alnum1@alnum2.tldmorethan4chars', function() {
                var result = validator.is.email('alnum1@alnum2.tldmorethan4chars');
                expect(result).toBeFalsy();
            });


            it('should not validate an email which containts non@alhanümeric.çars ', function() {
                var result = validator.is.email('non@alhanümeric.çars');
                expect(result).toBeFalsy();
            });

            it('should validate an email which belongs@to.a.sub.dom.ain', function() {
                var result = validator.is.email('belongs@to.a.sub.dom.ain');
                expect(result).toBeTruthy();
            });

            it('should not validate email which contains@space.com', function() {
                var result = validator.is.email('which contains@space.com');
                expect(result).toBeFalsy();
            });

        });

        describe('Validation.is.notOnlySpace', function() {
            it('should not validate an input which has only white space', function() {
                var result = validator.is.notOnlySpace('   ');
                expect(result).toBeFalsy();
            });

            it('should validate an input which starts with whitespace but has other chars', function() {
                var result = validator.is.notOnlySpace('   foobar');
                expect(result).toBeTruthy();
            });

            it('should validate an input which starts and ends with whitespace but has other chars', function() {
                var result = validator.is.notOnlySpace('   foobar    ');
                expect(result).toBeTruthy();
            });
        });


        describe('Validation.is.numeric', function() {
            it('should not validate text which has non numeric chars', function() {
                var result = validator.is.numeric('foo123bar');
                expect(result).toBeFalsy();
            });

            it('should not validate text which starts with numeric but has non numeric chars', function() {
                var result = validator.is.numeric('123bar');
                expect(result).toBeFalsy();
            });


            it('should not validate text which starts with space but has only numeric chars', function() {
                var result = validator.is.numeric('   123');
                expect(result).toBeFalsy();
            });


            it('should validate text which has only numeric chars', function() {
                var result = validator.is.numeric('123');
                expect(result).toBeTruthy();
            });

        });


        describe('Validation.is.equalPrimitives', function() {
            it('should validate same strings', function () {
                var result = validator.is.equal("osman", "osman");
                expect(result).toBeTruthy();
            });

            it('should validate same numbers', function () {
                var result = validator.is.equal(1453, 1453);
                expect(result).toBeTruthy();
            });

            it('should validate empty strings', function () {
                var result = validator.is.equal("", "");
                expect(result).toBeTruthy();
            });

            it('should validate falsy values', function () {
                var result = validator.is.equal("", false);
                expect(result).toBeTruthy();
            });

            it('should not validate falsy values with null', function () {
                var result = validator.is.equalPrimitives(null, false);
                expect(result).toBeFalsy();
            });


        });


        describe('Validation.is.digitAndNonDigit', function() {
            it('should not validate text which has chars but numbers', function() {
                var result = validator.is.digitAndNonDigit('foobar');
                expect(result).toBeFalsy();
            });

            it('should not validate text which has chars only numbers', function() {
                var result = validator.is.digitAndNonDigit('1234');
                expect(result).toBeFalsy();
            });

            it('should not validate text which has only whitespaces', function() {
                var result = validator.is.digitAndNonDigit('   ');
                expect(result).toBeFalsy();
            });


            it('should validate text which contains both numbers and chars', function() {
                var result = validator.is.digitAndNonDigit('foo123bar');
                expect(result).toBeTruthy();
            });

            it('should validate text which contains both numbers, chars and whitespaces', function() {
                var result = validator.is.digitAndNonDigit('foo 123 bar');
                expect(result).toBeTruthy();
            });

        });

    });


    describe('Validation.has', function() {
        describe('Validation.has.minLength', function() {
            it("should validate 'abc' has minLength 3", function() {
                var result = validator.has.minLength('abc', 3);
                expect(result).toBeTruthy();
            });

            it("should validate 'abc' has minLength 2", function() {
                var result = validator.has.minLength('abc', 2);
                expect(result).toBeTruthy();
            });


            it("should not validate 'abc' has minLength 4", function() {
                var result = validator.has.minLength('abc', 4);
                expect(result).toBeFalsy();
            });

            it("should validate ' ' has minLength 1", function() {
                var result = validator.has.minLength(' ', 1);
                expect(result).toBeTruthy();
            });

            it("should not validate '' has minLength 1", function() {
                var result = validator.has.minLength('', 1);
                expect(result).toBeFalsy();
            });

        });


        describe('Validation.has.maxLength', function() {
            it("should not validate 'abc' has max length 2", function() {
                var result = validator.has.maxLength('abc', 2);
                expect(result).toBeFalsy();
            });

            it("should validate 'ab' has max length 2", function() {
                var result = validator.has.maxLength('ab', 2);
                expect(result).toBeTruthy();
            });

            it("should not validate '   ' has max length 2", function() {
                var result = validator.has.maxLength('   ', 2);
                expect(result).toBeFalsy();
            });

            it("should validate '' has max length 0", function() {
                var result = validator.has.maxLength('', 0);
                expect(result).toBeTruthy();
            });
        });


        describe('Validation.has.minValue', function() {
            it('should validate 3 has min value 1', function() {
                var result = validator.has.minValue(3, 1);
                expect(result).toBeTruthy();
            });

            it('should not validate 3 has min value 4', function() {
                var result = validator.has.minValue(3, 4);
                expect(result).toBeFalsy();
            });
        });

        describe('Validation.has.maxValue', function() {
            it('should validate 3 has max value 4', function() {
                var result = validator.has.maxValue(3, 4);
                expect(result).toBeTruthy();
            });

            it('should not validate 3 has max value 2', function() {
                var result = validator.has.maxValue(3, 2);
                expect(result).toBeFalsy();
            });
        });

    });

});


/**
 * Run jasmine spec
 */
tart.Validation.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
