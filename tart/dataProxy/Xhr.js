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

goog.require('tart.XhrManager');
goog.require('tart.dataProxy.Abstract');



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
 * @param {function(Object)=} callback function to call with returned data.
 */
tart.dataProxy.Xhr.prototype.fetch = function(callback) {
    var url = this.params.get('url_');
    this.params.remove('url_');
    url = '' + url; //cast to string to make it type safe for XhrManager.get

    var method = this.params.get('method_');
    var methodFn;
    this.params.remove('method_');

    switch (method) {
        case 'post' :
            methodFn = tart.XhrManager.post;
            break;
        default:
            methodFn = tart.XhrManager.get;
    }

    /**
     * get plain objects from Maps from given plugins
     */
    var pluginParams = this.params.getKeys();

    for (var i = 0, ii = pluginParams.length; i < ii; i++) {
        var param = this.params.get(pluginParams[i]);
        if (param && param.constructor == goog.structs.Map) {
            this.params.set(pluginParams[i], param.toObject());
        }
        else {
            this.params.set(pluginParams[i], param);
        }
    }

    methodFn(url, this.params.toObject(), callback);
};
