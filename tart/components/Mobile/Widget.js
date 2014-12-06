// Copyright 2014 Tart. All Rights Reserved.
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

goog.provide('tart.components.mobile.Widget');

goog.require('tart.components.Widget');
goog.require('tart.components.mobile.Controller');



/**
 * Mobile widget.
 *
 * @constructor
 * @extends {tart.components.Widget}
 */
tart.components.mobile.Widget = function() {
    this.controller = new this.controllerClass();
    goog.base(this);
};
goog.inherits(tart.components.mobile.Widget, tart.components.Widget);


/** @override */
tart.components.mobile.Widget.prototype.render = function(rootEl) {
    goog.base(this, 'render', rootEl);
    this.rendered = true;
};


/** Widget's render flag. */
tart.components.mobile.Widget.prototype.rendered = false;


/** Controller class of the component. */
tart.components.mobile.Widget.prototype.controllerClass = tart.components.mobile.Controller;
