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
 * @fileoverview This class implements the base application. The users of tart.mvc should extend this class
 * in order to create their own MVC application.
 */

goog.require('goog.History');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events');
goog.require('tart.mvc.Action');
goog.require('tart.mvc.Controller');
goog.require('tart.mvc.IApplication');
goog.require('tart.mvc.Layout');
goog.require('tart.mvc.Model');
goog.require('tart.mvc.Renderer');
goog.require('tart.mvc.uri.Route');
goog.require('tart.mvc.uri.Router');
goog.provide('tart.mvc.Application');



/**
 * Base application class for tart.mvc.
 * @constructor
 * @implements {tart.mvc.IApplication}
 * @param {HTMLElement=} dom Optional DOM element to render the application in.
 */
tart.mvc.Application = function(dom) {
    var uri = new goog.Uri(window.location),
        uriString = uri.toString(),
        uriPath = uri.getPath(),
        myPath = '';

    this.id = tart.getUid();

    if (dom)
        this.dom = dom;
    else {
        this.dom = /** @type {Element} */(tart.dom.createElement(this.template_container()));
        goog.dom.appendChild(document.body, this.dom);
    }

    if (goog.string.startsWith(uriPath, this.basePath)) {
        myPath = uriPath.substr(this.basePath.length - 1);
        if (myPath.length > 1 && !goog.string.endsWith(myPath, '/')) {
            myPath = myPath + '/';
        }
        uri.setPath(myPath);
    }

    if (myPath.length > 1 &&
        (!uri.hasFragment() || uriString.indexOf(myPath) < uriString.indexOf(uri.getFragment())))
        window.location = this.basePath + '#!' + myPath;
    else {
        if (!this.defaultRoute)
            throw new tart.Err('No default route is set.', 'tartMVC Application Exception');

        var historyCallback, that = this;
        var hiddenInput = /** @type {HTMLInputElement} */(tart.dom.createElement('input'));

        /** @private */
        this.history_ = new goog.History(false, undefined, hiddenInput);
        this.initRouting();

        /**
         * every time the URI changes, this.router_ routes the request to the appropriate controller/action.
         */
        goog.events.listen(this.history_, goog.history.EventType.NAVIGATE, this.onNavigate, false, this);

        this.history_.setEnabled(true);
    }
};


/**
 * @protected
 */
tart.mvc.Application.prototype.onNavigate = function() {
    this.getRouter().route();
};


/**
 * @return {tart.mvc.Renderer} The renderer instance. This method creates a single renderer instance if it's not
 * already been created.
 */
tart.mvc.Application.prototype.getRenderer = function() {
    if (!this.renderer_)
        this.renderer_ = new tart.mvc.Renderer(this.defaultLayout, this.dom);

    return this.renderer_;
};


/**
 * @return {string} Container template for the application. Developers may override this method for their own likes;
 * or not use it at all if they provide a dom object to this class's constructor.
 */
tart.mvc.Application.prototype.template_container = function() {
    return '<div id="' + this.id + '"></div>';
};


/**
 * @return {tart.mvc.uri.Router} The router of the application.
 */
tart.mvc.Application.prototype.getRouter = function() {
    if (!this.router_)
        this.router_ = new tart.mvc.uri.Router(this.basePath,
                                                   this.defaultRoute,
                                                   this.getRenderer(),
                                                   this.redirectionType);

    return this.router_;
};


/**
 * Users of tartMVC should implement this method. It should include all the routing jobs (adding routes to the router)
 */
tart.mvc.Application.prototype.initRouting = goog.abstractMethod;


/**
 * The base path for the application. If your application will run in the root domain (such as http://www.foo.com)
 * your application doesn't need to override this property. On the other hand, if it will run in a subdirectory
 * (such as http://www.foo.com/bar/) you need to override and set this property to the subdirectory (such as '/bar/').
 * @type {string}
 * @protected
 */
tart.mvc.Application.prototype.basePath = '/';


/**
 * The default route fallback, which will be used if there are no matching routes found for a given url.
 * @type {tart.mvc.uri.Route}
 * @protected
 */
tart.mvc.Application.prototype.defaultRoute = null;


/**
 * The default layout view of the application.
 * @protected
 * @type {tart.mvc.LayoutTemplate}
 */
tart.mvc.Application.prototype.defaultLayout = function() {
};


/**
 * The default redirection type for an MVC application.
 * @type {tart.mvc.uri.Router.RedirectionType}
 * @protected
 */
tart.mvc.Application.prototype.redirectionType = tart.mvc.uri.Router.RedirectionType.CLASSICAL;
