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
 * @fileoverview tart.dataProxy.Abstract base abstract class for local and xhr data proxies.
 */

goog.provide('tart.dataProxy.Abstract');

goog.require('goog.structs.Map');

/**
 * Base model to handle xhr requests
 *
 * @constructor
 */
tart.dataProxy.Abstract = function() {
    /** @protected **/
    this.params = new goog.structs.Map();
};


/**
 * Set params as hash map.
 * @param {goog.structs.Map} params hash map to hold fetch params
 */
tart.dataProxy.Abstract.prototype.setParams = function (params) {
    this.params = new goog.structs.Map(params);
};

/**
 * Abstract method, which all inherited classes should implement
 * @param {Function} callback callback method after fetch.
 */
tart.dataProxy.Abstract.prototype.fetch = function(callback) {
    goog.abstractMethod();
};
