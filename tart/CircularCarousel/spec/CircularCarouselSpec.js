goog.require('tart.CircularCarousel');

goog.provide('tart.CircularCarousel.SpecRunner');

describe('CircularCarousel', function() {
    var carousel;

    var items = [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'},
        {name: 'four'},
        {name: 'five'},
        {name: 'six'},
        {name: 'seven'}
    ];

    beforeEach(function() {
        carousel = new tart.CircularCarousel(items);
    });

    describe('extends from tart.Carousel', function() {
        it('is an isstance of tart.Carousel', function() {
            expect(carousel instanceof tart.Carousel).toBeTruthy();
        });
    });

    describe('has circular navigation', function() {

        it('will navigate to seventh element after prev if current item is first item', function() {
            carousel.setItemPerViewport(2);

            var previousItems = carousel.getVisibleItems(),
                nextItems;


            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {
                nextItems = carousel.getVisibleItems();
            });

            carousel.prev(1);

            expect(previousItems[0].name == 'one' && nextItems[0].name == 'seven').toBeTruthy();
        });


        it('will navigate to second element after 6 previous steps', function() {
            carousel.setItemPerViewport(2);

            var previousItems = carousel.getVisibleItems(),
                nextItems;


            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {
                nextItems = carousel.getVisibleItems();
            });

            carousel.prev(6);

            expect(previousItems[0].name == 'one' && nextItems[0].name == 'two').toBeTruthy();
        });


        it('will navigate to seventh element after 8 previous steps which it means circular', function() {
            carousel.setItemPerViewport(2);

            var previousItems = carousel.getVisibleItems(),
                nextItems;


            goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function(e) {
                nextItems = carousel.getVisibleItems();
            });

            carousel.prev(8);

            expect(previousItems[0].name == 'one' && nextItems[0].name == 'seven').toBeTruthy();
        });


        it('will navigate to second element after 8 next steps which it means circular', function() {
            carousel.setItemPerViewport(2);

            var previousItems = carousel.getVisibleItems(),
                nextItems;

            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function(e) {
                nextItems = carousel.getVisibleItems();
            });

            carousel.next(8);

            expect(previousItems[0].name == 'one' && nextItems[0].name == 'two').toBeTruthy();
        });

        it('will navigate to third element after 2 next steps', function() {
            carousel.setItemPerViewport(2);

            var previousItems = carousel.getVisibleItems(),
                nextItems;

            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function(e) {
                nextItems = carousel.getVisibleItems();
            });

            carousel.next(2);

            expect(previousItems[0].name == 'one' && nextItems[0].name == 'three').toBeTruthy();
        });

    });

});

/**
 * Run jasmine spec
 */
tart.CircularCarousel.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
