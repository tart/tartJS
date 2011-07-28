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
goog.provide('mvcapp.controllers.IndexController');
goog.require('mvcapp.views.scripts.index.list');
goog.require('tart.mvc.Controller');



/**
 * @constructor
 * @extends {tart.mvc.Controller}
 */
mvcapp.controllers.IndexController = function() {
    goog.base(this);
};
goog.inherits(mvcapp.controllers.IndexController, tart.mvc.Controller);


/**
 * @this {tart.mvc.Action}
 */
mvcapp.controllers.IndexController.indexAction = function() {
    console.log('Index');
    console.log(this);
};


/**
 * @this {tart.mvc.Action}
 */
mvcapp.controllers.IndexController.listAction = function() {
    this.setViewScript(mvcapp.views.scripts.index.list);
    console.log('list');
    this.view.id = 'id: 3';
    console.log(this);

};


/**
 * @this {tart.mvc.Action}
 */
mvcapp.controllers.IndexController.showAction = function() {
    console.log('show');
};
