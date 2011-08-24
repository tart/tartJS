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
 * @fileoverview tart.dataProxy.Local XHR data proxy.
 */

goog.provide('tart.dataProxy.Local');

goog.require('tart.dataProxy.Abstract');
goog.require('goog.array');

/**
 * Base model to handle xhr requests
 *
 * @extends {tart.dataProxy.Abstract}
 * @constructor
 */
tart.dataProxy.Local = function() {
    goog.base(this);
    /** @private **/
    this.data_ = undefined;
};
goog.inherits(tart.dataProxy.Local, tart.dataProxy.Abstract);

/**
 * Fetch data from xhr and call a function with returned data
 * @param {Function=} callback function to call with returned data.
 */
tart.dataProxy.Local.prototype.fetch = function(callback) {

    var fetchedData = this.data_;

    var pagerParam = this.params.get("paginationParams");

    if (pagerParam) {
        var offset = pagerParam.get("offset");
        var limit = pagerParam.get("limit");
        var tmp = [];

        for(var i = offset; i < offset + limit; i++) {
            if (fetchedData && fetchedData[i]) {
                tmp.push(fetchedData[i]);
            }
        }

        fetchedData = tmp;
    }

    callback.call(this, fetchedData);
};

tart.dataProxy.Local.prototype.setData = function(data) {
    this.data_ = data;
};

tart.dataProxy.Local.prototype.getData = function() {
    return this.data_;
};

