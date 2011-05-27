describe('Component Model', function() {

    describe('is event driven', function() {
        it('should  be inherited from goog.events.EventTarget', function() {
            var model = new tart.components.Model();
            expect(model instanceof goog.events.EventTarget).toBeTruthy();
        });


        it("should supply events to it's sub classes", function() {
            var SubModelClass = function() {
                goog.base(this);
            };
            goog.inherits(SubModelClass, tart.components.Model);

            var subModel = new SubModelClass();

            var text;

            subModel.addEventListener('foo', function(e) {
                text = 'foo triggered';
            });

            subModel.dispatchEvent({type: 'foo'});

            expect(text).toEqual('foo triggered');
        });
    });
});
