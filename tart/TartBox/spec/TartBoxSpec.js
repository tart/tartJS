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

    describe("body can be set from a DOM element's content", function () {
        var dummyEl = $("<div>").html("this is dummy text");

        beforeEach(function () {
            tart.TartBox.init();
        });

        it("should set tartBox's body attribute to elements content if element exists", function () {
           tart.TartBox.setBodyFromEl(dummyEl);
           expect(tart.TartBox.body).toEqual("this is dummy text");
        });

        it("should throw an exception if element not exists", function () {
           var elementNotExists;
           expect(function () {tart.TartBox.setBodyFromEl(elementNotExists)}).toThrow("Element not exists");
        });

        it("should throw an exception if element not a jQuery object exists", function () {
           var elementNotExists = "foobar";
           expect(function () {tart.TartBox.setBodyFromEl(elementNotExists)}).toThrow("Element not exists");
        });

        it("should throw an exception if element not a jQuery object which contains a DOM element", function () {
           var elementNotExists = $(".whichIsNotExists");
           expect(function () {tart.TartBox.setBodyFromEl(elementNotExists)}).toThrow("Element not exists");
        });

    });

});
