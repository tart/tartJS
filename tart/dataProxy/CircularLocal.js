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
 * @fileoverview tart.dataProxy.CircularLocal XHR data proxy.
 */

goog.provide('tart.dataProxy.CircularLocal');
goog.require('tart.dataProxy.Local');



/**
 *
 * Base model to handle xhr requests
 *
 * @extends {tart.dataProxy.Local}
 * @constructor
 */
tart.dataProxy.CircularLocal = function() {
    goog.base(this);
};
goog.inherits(tart.dataProxy.CircularLocal, tart.dataProxy.Local);


/**
 * Fetch data from xhr and call a function with returned data
 * @param {Function=} callback function to call with returned data.
 */
tart.dataProxy.CircularLocal.prototype.fetch = function(callback) {
    var fetchedData = this.getData();
    var pagerParam = this.params.get('paginationParams');

    if (!fetchedData || !pagerParam)
        callback.call(this);

    var offset = ((pagerParam.get('offset') % fetchedData.length) + fetchedData.length) % fetchedData.length,
        limit = pagerParam.get('limit'),
        length = fetchedData.length,
        tmp = [],
        pos;

    for (var i = offset; i < offset + limit; i++) {
        pos = i;
        if (i >= length)
            pos = i % length;

        tmp.push(fetchedData[pos]);
    }

    fetchedData = tmp;
    
    callback.call(this, fetchedData);
};
