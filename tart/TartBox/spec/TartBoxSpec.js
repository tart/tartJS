describe("TartBox", function () {

    describe("is singleton", function () {
        it("should throw an exception if instantiated with 'new'", function () {
            expect(function() {new tart.TartBox()}).toThrow();
        });
    }); 


    describe("construction of  an object", function () {
        var params = {
            title: "foo",
            body : "bar",
            type : "info"
        };

        beforeEach(function () {
            tart.TartBox.init(params.title, params.body, params.type);
        });

        it("should construct with a title", function () {
            expect(tart.TartBox.title).toEqual(params.title);
        });

        it("should construct with a body", function () {
            expect(tart.TartBox.body).toEqual(params.body);
        });

        it("should construct with a type", function () {
            expect(tart.TartBox.type).toEqual(params.type);
        });
    });

    describe("keep state on called with another scope", function () {
        var params = {
            title: "fooxxx",
            body : "barxxx",
            type : "infoxxx"
        };

        var dummyObject = {};

        beforeEach(function () {
            tart.TartBox.init.call(dummyObject, params.title, params.body, params.type);
        });


        it("should construct with a title again", function () {
            expect(tart.TartBox.title).toEqual(params.title);
        });

    });
});
