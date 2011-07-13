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
 * @fileoverview tart.component.plugin.BasePlugin to get common properties for a plugin in one class.
 */

goog.provide('tart.component.plugin.BasePlugin');

goog.require('goog.structs.Map');


/**
 * @param {tart.component.Model} model
 * @constructor
 */
tart.component.plugin.BasePlugin = function (model) {
    /** @protected */
    this.model = model;

    /** @protected **/
    this.map = new goog.structs.Map();
    
    this.model.params.set(this.key, this.map);
};

/**
 * Model's param key
 * @protected
 */
tart.component.plugin.BasePlugin.prototype.key = undefined;
