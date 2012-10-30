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

goog.provide('tart.mvc.MobileAction');



/**
 * @constructor
 * @param {Object} params Params.
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 * @param {tart.mvc.View} view View.
 * @param {tart.mvc.Controller} controller Controller.
 * @extends {tart.mvc.Action}
 */
tart.mvc.MobileAction = function(params, layout, view, controller) {
    goog.base(this, params, layout, view, controller);
    this.refresh = true;
};
goog.inherits(tart.mvc.MobileAction, tart.mvc.Action);
