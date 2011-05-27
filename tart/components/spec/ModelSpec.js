describe('Component Model', function() {
    describe('is event driven', function() {
        it('should  be inherited from goog.events.EventTarget', function() {
            var model = new tart.components.Model();
            expect(model instanceof goog.events.EventTarget).toBeTruthy();
        });
    });
});
