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
goog.require('mvcapp.controllers.GamesController');
goog.require('mvcapp.controllers.IndexController');
goog.require('mvcapp.views.layouts.common');
goog.require('tart.mvc');
goog.provide('mvcapp.Application');



/**
 * @constructor
 * @extends {tart.mvc.Application}
 */
mvcapp.Application = function() {
    this.defaultRoute = new tart.mvc.uri.Route({
        name: 'default',
        format: '',
        controller: mvcapp.controllers.IndexController,
        action: mvcapp.controllers.IndexController.listAction
    });
    goog.base(this);
};
goog.inherits(mvcapp.Application, tart.mvc.Application);


/**
 * @inheritDoc
 */
mvcapp.Application.prototype.basePath = '/tart/mvc/test/#!/';


/**
 * @inheritDoc
 */
mvcapp.Application.prototype.defaultLayout = mvcapp.views.layouts.common;


/**
 * @inheritDoc
 */
mvcapp.Application.prototype.initRouting = function() {
    var router = this.getRouter();
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeshow',
        format: 'home/show/',
        controller: mvcapp.controllers.GamesController,
        action: mvcapp.controllers.GamesController.showAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeList',
        format: 'home/list/:param1/:param2/',
        controller: mvcapp.controllers.GamesController,
        action: mvcapp.controllers.GamesController.listAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeList',
        format: 'home/list/',
        controller: mvcapp.controllers.GamesController,
        action: mvcapp.controllers.GamesController.listAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'home anything',
        format: 'home/list/:p1/:p2/*',
        controller: mvcapp.controllers.GamesController,
        action: mvcapp.controllers.GamesController.indexAction
    }));
};
