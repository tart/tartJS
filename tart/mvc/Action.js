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

goog.provide('tart.mvc.Action');



/**
 * @constructor
 * @param {Object} params Params.
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 * @param {tart.mvc.View} view View.
 * @param {tart.mvc.Controller} controller Controller.
 */
tart.mvc.Action = function(params, layout, view, controller) {
    this.params = params;
    this.view = view;
    this.layout_ = layout;
    this.controller = controller;
};


/**
 *
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 */
tart.mvc.Action.prototype.setLayout = function(layout) {
    this.layout_ = layout;
};


/** @nosideeffects */
tart.mvc.Action.prototype.params;


/** @nosideeffects */
tart.mvc.Action.prototype.layout;


/** @nosideeffects */
tart.mvc.Action.prototype.view;


/**
 * @return {tart.mvc.LayoutTemplate} The layout template (whether custom or default) that belongs to the action.
 */
tart.mvc.Action.prototype.getLayout = function() {
    return this.layout_;
};


/**
 * Deconstructor method of this action. Developers should override this property in an action function like;
 *
 * this.deconstructor = function() {}
 *
 * and should deallocate the memory they have used in the action. This is also helpful for resolving issues that arise
 * because of tartMVC's statefullness; such as removed but dangling DOM nodes, etc.
 */
tart.mvc.Action.prototype.deconstructor = null;


/**
 * @return {tart.mvc.ViewTemplate} The view script that belongs to the action.
 */
tart.mvc.Action.prototype.getViewScript = function() {
    if (!this.viewScript_)
        throw new tart.Err('No view script set for the action', 'tartMVC Action Exception');

    return this.viewScript_;
};


/**
 * Sets the action's view script.
 * @param {tart.mvc.ViewTemplate} viewScript view script.
 */
tart.mvc.Action.prototype.setViewScript = function(viewScript) {
    this.viewScript_ = viewScript;
};
