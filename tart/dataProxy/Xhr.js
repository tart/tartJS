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
 * @fileoverview tart.dataProxy.Xhr XHR data proxy.
 */

goog.provide('tart.dataProxy.Xhr');

goog.require('tart.dataProxy.Abstract');
goog.require('tart.XhrManager');

/**
 * Base model to handle xhr requests
 *
 * @extends {tart.dataProxy.Abstract}
 * @constructor
 */
tart.dataProxy.Xhr = function() {
    goog.base(this);
};
goog.inherits(tart.dataProxy.Xhr, tart.dataProxy.Abstract);

/**
 * Fetch data from xhr and call a function with returned data
 * @param {function(string,string,XMLHttpRequest)=} callback function to call with returned data.
 */
tart.dataProxy.Xhr.prototype.fetch = function(callback) {

    var url = this.params.get("url_");
    this.params.remove("url_");

    var pluginParams = ['filterBy_', 'sortBy_', 'pager_'];

    for (var i = 0, ii = pluginParams.length; i < ii; i++) {
        if (this.params.get(pluginParams[i])) {
            this.params.set(pluginParams[i], this.params.get(pluginParams[i]).toObject());
        }
    }

    url = "" + url; //cast to string to make it type safe for XhrManager.get

    tart.XhrManager.get(url, this.params.toObject(), callback);
};

