// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview URI Router class that takes a given URI and resolves the necessary controller / action.
 */

goog.provide('tart.mvc.uri.Router');
goog.require('goog.array');
goog.require('goog.object');
goog.require('tart.mvc.uri.Request');



/**
 * Router class that is responsible for routing the incoming request to appropriate controller and actions
 * with appropriate parameters.
 * The application routes are added to the Router instance and every time the URI
 * changes, it routes the request to the appropriate controller/action.
 * @param {string} basePath The URI to parse.
 * @param {tart.mvc.uri.Route} defaultRoute Default URI route that is used as fallback when no appropriate
 * controller/action is found.
 * @param {tart.mvc.Renderer} renderer Renderer instance to actually execute the routing and draw the layout and view.
 * @constructor
 */
tart.mvc.uri.Router = function(basePath, defaultRoute, renderer) {
    this.setBasePath(basePath);

    /**
     * @type {Array.<tart.mvc.uri.Route>}
     * @private
     */
    this.routes_ = [];
    this.defaultRoute = defaultRoute;
    this.addRoute(this.defaultRoute);
    this.renderer_ = renderer;
};


/**
 * Responsible for routing the incoming request to appropriate controller and actions with appropriate parameters.
 * The application routes are added to the uri.Router instance.
 * @param {string} uri The URI to parse.
 */
tart.mvc.uri.Router.prototype.route = function(uri) {
    var route;
    this.request = new tart.mvc.uri.Request(uri || window.location, this);

    route = this.resolve_(this.request);
    this.setCurrentRoute_(route);
    this.process_(this.request.params);
    this.renderer_.render(this);
};


/**
 * Set base path
 *
 * @param {string} path uri base path.
 */
tart.mvc.uri.Router.prototype.setBasePath = function(path) {
    this.basePath = path || '/';
};


/**
 * Return uri base path
 *
 * @return {string} uri base path.
 */
tart.mvc.uri.Router.prototype.getBasePath = function() {
    return this.basePath;
};


/**
 * Resolves routes.
 * If the request matches any route, this function resolves it. Or else, it will resolve to the default route.
 * @private
 * @param {tart.mvc.uri.Request} request Request to look for a route match.
 * @return {tart.mvc.uri.Route} Resolved route that holds the details of handling the request.
 */
tart.mvc.uri.Router.prototype.resolve_ = function(request) {
    var response, route, responseValue, responseArray, that = this;

    // Find a matching route in our routes list
    route = goog.array.find(this.routes_, function(/** @type {tart.mvc.uri.Route} */ route) {
        if (response = request.path.match(route.format)) { // response holds the parameters if the format matches
            var fragments = [];

            for (var i = 0; i < response.length - 1; i++) {
                responseValue = response[i + 1]; // the first item will be the full uri so skip it.
                responseArray = responseValue.split('/');
                /*
                 if the parameter contains a slash, this means a wildchar was used; so we have to turn each of them
                 into real parameters.
                 */
                if (responseArray.length > 1) {
                    that.fixOddParams_(responseArray); // there can be an odd number of parameters so let's fix them
                    fragments = fragments.concat(responseArray);
                }
                else
                    /*
                 no slashes, this is a valid parameter, so we should add it (responseValue)
                 with its respective owner that was given as :name (route.params[i])
                 */
                    fragments.push(route.params[i], responseValue);
            }
            request.params = fragments;
            return true;
        }
        return false;
    });
    return route || that.getDefaultRoute();
};


/**
 * This function sets the current route and the related controllers, actions and parameters.
 * @private
 * @param {Array} params Request to be processed.
 */
tart.mvc.uri.Router.prototype.process_ = function(params) {
    var route = this.getCurrentRoute();
    this.setController_(route.controller);
    this.setAction_(route.action);
    this.setParams_(params);
};


/**
 * Sets a URL route as the current route.
 * @param {tart.mvc.uri.Route} route Route to set as the current one.
 * @private
 */
tart.mvc.uri.Router.prototype.setCurrentRoute_ = function(route) {
    this.currentRoute_ = route;
};


/**
 * @return {tart.mvc.uri.Route} the active URI route.
 */
tart.mvc.uri.Router.prototype.getCurrentRoute = function() {
    return this.currentRoute_;
};


/**
 * Sets the current controller required by the request. If there are no such controllers, default controller is set.
 * @private
 * @param {tart.mvc.ControllerTemplate} controller Controller present on the route.
 */
tart.mvc.uri.Router.prototype.setController_ = function(controller) {
    this.controller_ = controller;
};


/**
 * Sets the current action required by the request. If there are no such actions, default action is set.
 * @private
 * @param {tart.mvc.ActionTemplate} action Action present on the route.
 */
tart.mvc.uri.Router.prototype.setAction_ = function(action) {
    this.action_ = action;
};


/**
 * Sets the parameters. Notice that if there are odd number of parameters, an empty value is added to the end of
 * the array for convenient operation of sending only the keys (where values are unimportant to the backend)
 * @private
 * @param {Array.<string>} paramsArray Array of parameters.
 */
tart.mvc.uri.Router.prototype.setParams_ = function(paramsArray) {
    var params = {};

    if (this.getCurrentRoute() == this.getDefaultRoute()) {
        this.params_ = {};
        return;
    }

    if (paramsArray && paramsArray.length > 0) {
        this.fixOddParams_(paramsArray);
        params = goog.object.create(paramsArray);
    }

    this.params_ = params;
};


/**
 * This little function fixes parameters in case there are odd number of elements so that it's impossible to construct
 * a valid key value pair. It adds an empty item at the end; making the last item a key with empty value. This is
 * quite handy when you only want the key present and no value is necessary.
 * @param {Array} params Request parameters.
 * @private
 */
tart.mvc.uri.Router.prototype.fixOddParams_ = function(params) {
    if (params.length % 2 == 1)
        params.push(true);
};


/**
 * Returns the active controller.
 * @return {tart.mvc.Controller} Active controller.
 */
tart.mvc.uri.Router.prototype.getController = function() {
    return this.controller_;
};


/**
 * Returns the active action.
 * @return {Function} Active action.
 */
tart.mvc.uri.Router.prototype.getAction = function() {
    return this.action_;
};


/**
 * @return {Object} The active parameters.
 */
tart.mvc.uri.Router.prototype.getParams = function() {
    return this.params_;
};


/**
 * Adds a route to the router.
 * @param {tart.mvc.uri.Route} route Route to be added.
 */
tart.mvc.uri.Router.prototype.addRoute = function(route) {
    this.routes_.push(route);
};


/**
 * @return {Array.<tart.mvc.uri.Route>} The array of routes in this router.
 */
tart.mvc.uri.Router.prototype.getRoutes = function() {
    return this.routes_;
};


/**
 * Returns a route with a given name. If no matching route is found, this method throws a tart.Err.
 * @param {string} name Route name to look up.
 * @return {tart.mvc.Route} Route with the given name.
 */
tart.mvc.uri.Router.prototype.getRoute = function(name) {
    var route = goog.array.find(this.getRoutes(), function(route) {
        return route.name == name;
    });
    if (!route)
        throw new tart.Err('Route name "' + name + '" cannot be found', 'Routing Error');

    return route;
};


/**
 * Returns the default route associated with this router.
 * @return {tart.mvc.Route} Default route.
 */
tart.mvc.uri.Router.prototype.getDefaultRoute = function() {
    return this.defaultRoute;
};
