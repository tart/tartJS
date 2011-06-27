describe('MVC', function() {
    var app = new tart.mvc.Application(),
        basePath = '/',
        defaultRoute = new tart.mvc.uri.Route({
            name: 'default',
            format: '/',
            controller: tart.mvc.Controller,
            action: function() {
                return 'action1'
            }
        });

    describe('MVC Application', function() {
        it('should instantiate', function() {
            expect(app instanceof tart.mvc.Application).toBeTruthy();
        });
    });

    describe('URI Router', function() {
        var router;
        var controller1, controller2, action1, action2, action3, action4, route1, route2, route3;
        controller1 = tart.mvc.Controller;
        action1 = function() {
            return 'action1'
        };
        action2 = function() {
            return 'action2'
        };
        action3 = function() {
            return 'action3'
        };
        action4 = function() {
            return 'action4'
        };

        beforeEach(function() {
            router = new tart.mvc.uri.Router(basePath, defaultRoute);
            router.setBasePath('/');
            route1 = new tart.mvc.uri.Route({
                name: 'controller1',
                format: 'controller1/action1',
                controller: controller1,
                action: action1
            });
            route2 = new tart.mvc.uri.Route({
                name: 'controller1.2',
                format: 'controller1/action2',
                controller: controller1,
                action: action2
            });

            route3 = new tart.mvc.uri.Route({
                name: 'controller2',
                format: 'controller1/action2/*',
                controller: controller2,
                action: action3
            });
        });

        it('should set a default basePath', function() {
            router.setBasePath('');
            expect(router.getBasePath()).toEqual('/');
        });

        it('should set a basePath', function() {
            router.setBasePath('/test');
            expect(router.getBasePath()).toEqual('/test');
        });

        it('should resolve the default route if no appropriate route is found', function() {
            router.route('/test');

            expect(router.getCurrentRoute()).toEqual(defaultRoute);
        });
        describe('Route logic', function() {

            beforeEach(function() {
                router = new tart.mvc.uri.Router('/', defaultRoute);
            });

            it('should add a new route', function() {
                router.addRoute(route1);
                expect(router.getRoutes().length).toEqual(1);
            });

            it('should add more routes', function() {
                router.addRoute(route1);
                router.addRoute(route2);
                expect(router.getRoutes().length).toEqual(2);
            });

            it('should set the controller of the route', function() {
                router.addRoute(route1);
                router.addRoute(route2);
                router.route('/#!/controller1/action1/');
                expect(router.getController()).toEqual(controller1);
            });

            it('should set the action of the route too', function() {
                router.addRoute(route1);
                router.addRoute(route2);
                router.route('/#!/controller1/action1/');
                expect(router.getAction()).toEqual(action1);
            });

            it('should set some params too', function() {
                router.addRoute(route1);
                router.addRoute(route2);
                router.addRoute(route3);
                router.route('/#!/controller1/action2/key1/value1/key2/value2/');
                expect(router.getParams()).toEqual({ 'key1': 'value1', 'key2': 'value2' });
            });

        });
    });

    describe('Request', function() {

    })
});
