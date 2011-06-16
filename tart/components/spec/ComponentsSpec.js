goog.require('tart.components.Controller');
goog.require('tart.components.Model');
goog.require('tart.components.View');

goog.provide('tart.components.SpecRunner');

describe('Component', function() {

    var opt_model = new tart.components.Model();
    var opt_view = new tart.components.View();

    describe('ComponentController', function() {
        describe('has model and view objects in it', function() {
            it('should have model object', function() {
                var controller = new tart.components.Controller(opt_model, opt_view);
                expect(controller.model instanceof tart.components.Model).toBeTruthy();
            });

            it('should have view object', function() {
                var controller = new tart.components.Controller(opt_model, opt_view);
                expect(controller.view instanceof tart.components.View).toBeTruthy();
            });
        });

        describe('will get components DOM with buildDOM method', function() {
            /**
             * @constructor
             * @extends {tart.components.View}
             */
            var ViewClass = function() {
                goog.base(this);
            };
            goog.inherits(ViewClass, tart.components.View);

            /**
             * @return {string} markup string .
             */
            ViewClass.prototype.render = function() {
                return '<h1>Foo</h1>';
            };

            var view = new ViewClass();
            var controller = new tart.components.Controller(opt_model, view);
            var dom = controller.buildDOM();

            expect(dom).toBeTruthy();
        });
    });


    describe('Component Model', function() {
        describe('is event driven', function() {
            it('should  be inherited from goog.events.EventTarget', function() {
                var model = new tart.components.Model();
                expect(model instanceof goog.events.EventTarget).toBeTruthy();
            });


            it("should supply events to it's sub classes", function() {

                /**
                 * @constructor
                 * @extends {tart.components.Model}
                 * */
                var SubModelClass = function() {
                    goog.base(this);
                };
                goog.inherits(SubModelClass, tart.components.Model);


                SubModelClass.EventTypes = {
                    SOMETHING_HAPPENED: 'foo'
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


    describe('ComponentView', function() {
        describe('is an abstract class which sub classes should implement thier own "render" method', function() {
            it('should throw en exception when "render" method called from own instance', function() {
                var view = new tart.components.View();
                var fn = function() {
                    view.render();
                };

                expect(fn).toThrow();
            });

            it('should render markup if sub class implemented its own "render" method', function() {

                /**
                 * @constructor
                 * @extends {tart.components.View}
                 */
                var SubViewClass = function() {
                    goog.base(this);
                };
                goog.inherits(SubViewClass, tart.components.View);

                /**
                 * @return {string} markup .
                 */
                SubViewClass.prototype.render = function() {
                    return '<b>this is rendered</b';
                };

                var subView = new SubViewClass();
                expect(subView.render()).toBeTruthy();
            });
        });


        describe('supplies dom traverse with "get" method', function() {
            var SubViewClass;

            beforeEach(function() {
                /**
                 * @constructor
                 * @extends {tart.components.View}
                 */
                SubViewClass = function() {
                    goog.base(this);

                    this.domMappings = {
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
            });


            it('should find related element on DOM', function() {
                var subView = new SubViewClass();

                //TODO: make it work with closure
                var dummyDiv = $('<div>').append(subView.render());

                subView.setDOM(dummyDiv);
                expect(subView.get(subView.domMappings.HEADER)[0]).toBe(dummyDiv.find('h1')[0]);
            });


            it('should throw a "DOM not set yet" exception if DOM not set yet', function() {

                var fn = function() {
                    var subView = new SubViewClass();
                    subView.get(subView.domMappings.HEADER);
                };

                expect(fn).toThrow('DOM not set yet');
            });

        });
    });


});


/**
 * Run jasmine specs
 */
tart.components.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
