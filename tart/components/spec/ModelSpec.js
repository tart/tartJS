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


            SubModelClass.EventTypes = {
                SOMETHING_HAPPENED : 'foo'
            };


            var subModel = new SubModelClass();

            var text;

            goog.events.listen(subModel, SubModelClass.EventTypes.SOMETHING_HAPPENED, function(e) {
                text = 'something triggered from model';
            });

            subModel.dispatchEvent({type: SubModelClass.EventTypes.SOMETHING_HAPPENED });

            expect(text).toEqual('something triggered from model');
        });
    });
});
