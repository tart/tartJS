describe('ComponentView', function() {
    describe('is an abstract class which sub classes should implement thier own "render" method', function() {
        it('should throw en exception when "render" method called from own instance', function() {
            var view = new tart.components.View();
            expect(function() { view.render()}).toThrow();
        });

        it('should render markup if sub class implemented its own "render" method', function() {

            var SubViewClass = function() {
                goog.base(this);
            };
            goog.inherits(SubViewClass, tart.components.View);

            SubViewClass.prototype.render = function() {
                return '<b>this is rendered</b';
            };

            var subView = new SubViewClass();
            expect(subView.render()).toBeTruthy();
        });
    });


    describe('supplies dom traverse with "get" method', function() {

        it('should find related element on DOM', function() {
            var SubViewClass = function() {
                goog.base(this);

                this.$domMappings = {
                    HEADER: 'h1'
                };
            };
            goog.inherits(SubViewClass, tart.components.View);

            SubViewClass.prototype.templates_header = function(text) {
                text = text || '';
                return '<h1>' + text + '</h1>';
            };

            SubViewClass.prototype.render = function() {
               return this.templates_header();
            };

            var subView = new SubViewClass();

            //TODO: make it work with closure
            var dummyDiv = $('<div>').append(subView.render());

            subView.setDOM(dummyDiv);
            expect(subView.get(subView.$domMappings.HEADER)[0]).toBe(dummyDiv.find('h1')[0]);
        });
    });
});
