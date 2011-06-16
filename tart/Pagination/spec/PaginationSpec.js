goog.require('tart.Pagination');

goog.provide('tart.Pagination.SpecRunner');

describe('Pagination', function() {
    var paginator;

    beforeEach(function() {
        paginator = new tart.Pagination();
    });


    describe('should contain required parameters', function()  {

        it('should have totalPage', function() {
            expect(paginator.getTotalPage()).toBeGreaterThan(0);
        });

        it('should have currentPage', function() {
            expect(paginator.getCurrentPage()).toBeGreaterThan(0);
        });

        it('should have itemPerPage', function() {
            expect(paginator.getItemPerPage()).toBeGreaterThan(0);
        });

        it('should have totalItems', function() {
            expect(paginator.getTotalItems()).toBeGreaterThan(0);
        });



        it('should set totalPage', function() {
            paginator.setTotalPage(5);
            expect(paginator.getTotalPage()).toEqual(5);
        });

        it('should set currentPage', function() {
            paginator.setTotalPage(5);
            paginator.setCurrentPage(5);
            expect(paginator.getCurrentPage()).toEqual(5);
        });

        it('should set itemPerPage', function() {
            paginator.setItemPerPage(2);
            expect(paginator.getItemPerPage()).toEqual(2);
        });

        it('should set totalItems', function() {
            paginator.setTotalItems(2);
            expect(paginator.getTotalItems()).toEqual(2);
        });


        it('should change page count when totalItem count set', function() {
            paginator.setItemPerPage(2);
            paginator.setTotalItems(5);
            expect(paginator.getTotalPage()).toEqual(3);
        });


        it('should change item count when totalPage count set', function() {
            paginator.setItemPerPage(2);
            paginator.setTotalPage(4);
            expect(paginator.getTotalItems()).toEqual(8);
        });

        it('should set page count to totalPageCount if page > totalPageCount', function() {
            paginator.setTotalPage(5);
            paginator.setCurrentPage(6);
            expect(paginator.getCurrentPage()).toEqual(5);
        });

        it('should set page count to 1 if page < 1', function() {
            paginator.setTotalPage(5);
            paginator.setCurrentPage(0);
            expect(paginator.getCurrentPage()).toEqual(1);
        });



    });

    describe('controls navigation', function() {
        it('should have a next element if currentPage < totalPage', function() {
            paginator.setCurrentPage(3);
            paginator.setTotalPage(4);
            expect(paginator.hasNext()).toBeTruthy();
        });

        it('should not have a next element if currentPage >= totalPage', function() {
            paginator.setTotalPage(4).setCurrentPage(4);
            paginator.setTotalPage(4);
            expect(paginator.hasNext()).toBeFalsy();
        });

        it('should have a previous element if currentPage > 1', function() {
            paginator.setTotalPage(4).setCurrentPage(2);
            expect(paginator.hasPrev()).toBeTruthy();
        });

        it('should not have a next element if currentPage <= 1', function() {
            paginator.setCurrentPage(1);
            paginator.setTotalPage(4);
            expect(paginator.hasPrev()).toBeFalsy();
        });

    });

    describe('triggers pageChanged event on some conditions', function() {
        it('should trigger event on setCurrentPage', function() {

            var triggeredObject = {};

            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {
               triggeredObject = e;
            });

            paginator.setCurrentPage(10);

            //check if newValue and oldValue exists
            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();

        });


        it('should trigger event on next()', function() {
            paginator.setTotalPage(12);
            paginator.setCurrentPage(10);

            var triggeredObject = {};

            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {
               triggeredObject = e;
            });

            paginator.next();

            //check if newValue and oldValue exists
            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();

        });

        it('should trigger event on prev()', function() {
            paginator.setTotalPage(12);
            paginator.setCurrentPage(10);

            var triggeredObject = {};

            goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {
               triggeredObject = e;
            });

            paginator.prev();

            //check if newValue and oldValue exists
            expect(triggeredObject.oldValue && triggeredObject.newValue).toBeTruthy();

        });
    });
});

/**
 * Run jasmine spec
 */
tart.Pagination.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
