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
 * @fileoverview tart.base.plugin.BasePlugin to get common properties for a plugin in one class.
 */

goog.provide('tart.base.plugin.BasePlugin');

goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');
goog.require('goog.structs.Map');


/**
 * @param {tart.base.Model} model
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.base.plugin.BasePlugin = function (model) {
    goog.events.EventTarget.call(this);

    /** @protected */
    this.model = model;

    /** @protected **/
    this.map = new goog.structs.Map();
    
    this.model.params.set(this.key, this.map);
};
goog.inherits(tart.base.plugin.BasePlugin, goog.events.EventTarget);

/**
 * models key
 */
tart.base.plugin.BasePlugin.prototype.key = undefined;
