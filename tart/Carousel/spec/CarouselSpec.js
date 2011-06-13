describe('Carousel', function() {
    var carousel;

    var items = [
        {name : 'one'},
        {name : 'two'},
        {name : 'three'},
        {name : 'four'},
        {name : 'five'},
        {name : 'six'},
        {name : 'seven'}
    ];


    beforeEach(function() {
        carousel = new tart.Carousel(items);
    });

    describe('some parameters should be set and get', function () {
        it('should set itemPerViewport', function () {
            carousel.setItemPerViewport(10);
            expect(carousel.getItemPerViewport()).toEqual(10);
        });


        it('should return visible items', function () {
            carousel.setItemPerViewport(2);
            var visibleItems = carousel.getVisibleItems();

            expect(visibleItems[0].name == 'one' && visibleItems[1].name == 'two').toBeTruthy();
        });
    });

    describe('will navigate through items', function () {

        it('should move one item next', function () {
            carousel.setItemPerViewport(3);

            var previousItems = carousel.getVisibleItems(),
                visibleItems;


            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function(e) {
                visibleItems = carousel.getVisibleItems();
            });

            carousel.next(1);

            expect(visibleItems[0].name == 'two' && visibleItems[1].name == 'three').toBeTruthy();

        });



        it('should move more than item next', function () {
            carousel.setItemPerViewport(3);

            var visibleItems;

            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function (e) {
                visibleItems = carousel.getVisibleItems();
            });

            carousel.next(3);

            expect(visibleItems[0].name == 'four' && visibleItems[1].name == 'five').toBeTruthy();
        });

        it('should not move more than item count', function () {
            carousel.setItemPerViewport(2);

            var visibleItems;

            goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function (e) {
                visibleItems = carousel.getVisibleItems();
            });

            carousel.next(99999);
            expect(visibleItems[0].name == 'six' && visibleItems[1].name == 'seven').toBeTruthy();
        });
    });
});
