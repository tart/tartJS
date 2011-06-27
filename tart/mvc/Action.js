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
 */
tart.mvc.Action = function(params, layout, view) {
    this.params = params;
    this.view = view;
    this.layout_ = layout;
}

/**
 *
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 */
tart.mvc.Action.prototype.setLayout = function(layout) {
    this.layout_ = layout;
}

/** @nosideeffects */
tart.mvc.Action.prototype.params;
/** @nosideeffects */
tart.mvc.Action.prototype.layout;
/** @nosideeffects */
tart.mvc.Action.prototype.view;

tart.mvc.Action.prototype.getLayout = function() {
    return this.layout_;
}

tart.mvc.Action.prototype.getViewScript = function() {
    return this.viewScript_;
}

/**
 *
 * @param tart.mvc.View viewScript view script.
 */
tart.mvc.Action.prototype.setViewScript = function(viewScript) {
    this.viewScript_ = viewScript
}