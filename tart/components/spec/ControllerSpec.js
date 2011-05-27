describe('ComponentController', function() {
    describe('has model and view objects in it', function() {
        it('should have model object', function() {
            var controller = new tart.components.Controller();
            expect(controller.model instanceof tart.components.Model).toBeTruthy();
        });

        it('should have view object', function() {
            var controller = new tart.components.Controller();
            expect(controller.view instanceof tart.components.View).toBeTruthy();
        });
    });

    describe('will get components DOM with buildDOM method', function() {
        var ViewClass = function() {
            goog.base(this);
        };
        goog.inherits(ViewClass, tart.components.View);

        ViewClass.prototype.render = function() {
            return '<h1>Foo</h1>';
        };

        var view = new ViewClass();
        var controller = new tart.components.Controller(undefined, view);
        var dom = controller.buildDOM();

        expect(dom).toBeTruthy();
    });
});
