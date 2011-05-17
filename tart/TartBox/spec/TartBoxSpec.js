describe("TartBox", function () {

    describe("is singleton", function () {
        it("should throw an exception if instantiated with 'new'", function () {
            expect(function() {new tart.TartBox()}).toThrow();
        });
    }); 

});
