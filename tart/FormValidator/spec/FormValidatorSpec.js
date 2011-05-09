describe("Form Validator", function() {
    var validator,
        form,
        input;

    beforeEach(function() {
        //create mock form object
        form = $("<form>");
        input = $("<input>").attr("name", "testInput");
        input.appendTo(form);

        validator = new tart.FormValidator(form);
    });

    it("validator should be object", function () {
        expect(typeof validator).toEqual("object");
    });

    describe("Form validator for email", function () {
        var emailErrorText = "Not a valid email";

        var rules = {
            testInput : {
                isEmail : {
                    text : emailErrorText
                }
            }
        };


        it("should validate an input which has 'foo@bar.com' as valid email", function () {
            input.val("foo@bar.com");

            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeTruthy();
        });


        it("should not validate in input which has 'foo@bar.xxxxx' as valid email", function () {
            input.val('foo@bar.xxxxx');
            validator.setRules(rules).validate();
            expect(validator.isValid()).toBeFalsy();
        });

        it("should not validate in input which has 'foo@bar.xxxxx' an errr text should be 'Not a valid email'", function () {
            input.val('foo@bar.xxxxx');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(emailErrorText);
        });

        it("should not validate in input which has '' an errr text should be 'Not a valid email'", function () {
            input.val(' ');
            validator.setRules(rules).validate();

            var errorText = validator.getErrors()[0].text;
            expect(errorText).toEqual(emailErrorText);
        });

    });

});
