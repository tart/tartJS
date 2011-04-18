describe("Validator", function() {
    var validator;
        
    beforeEach(function() {
        validator = new Validator();
    });

    it("validator should be object", function () {
        expect(typeof validator).toEqual("object");
    });

    describe("Validator.is", function () {

        describe("Validator.is.email", function () {

            it("regular email like alnum1@alnum2.tld should pass", function () {
                var result = validator.is.email("alnum1@alnum2.tld");
                expect(result).toBeTruthy();
            });


            it("should not validate an email which has alnum1@alnum2.tldmorethan4chars", function () {
                var result = validator.is.email("alnum1@alnum2.tldmorethan4chars");
                expect(result).toBeFalsy();
            });


            it("should not validate an email which containts non@alhanümeric.çars ", function () {
                var result = validator.is.email("non@alhanümeric.çars");
                expect(result).toBeFalsy();
            });

            it("should validate an email which belongs@to.a.sub.dom.ain", function () {
                var result = validator.is.email("belongs@to.a.sub.dom.ain");
                expect(result).toBeTruthy();
            });

            it("should not validate email which contains@space.com", function () {
                var result = validator.is.email("which contains@space.com");
                expect(result).toBeFalsy();
            });




        });
    });

});
