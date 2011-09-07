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
 * @fileoverview tart.XhrManager static class to handle XHR requests.
 */

goog.provide('tart.XhrManager');


/**
 * jQuery GET's wrapper
 *
 * @param {string} url url to send request.
 * @param {?Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @return {Object} .
 */
tart.XhrManager.get = function(url, params, success, opt_fail) {
    return tart.XhrManager.ajax('GET', url, params, success, opt_fail);
};


/**
 * jQuery POST's wrapper
 *
 * @param {string} url url to send request.
 * @param {?Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @return {Object} .
 */
tart.XhrManager.post = function(url, params, success, opt_fail) {
    return tart.XhrManager.ajax('POST', url, params, success, opt_fail);
};


/**
 * jQuery POST's wrapper
 *
 * @param {string} type request type.
 * @param {string} url url to send request.
 * @param {?Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @return {Object} .
 */
tart.XhrManager.ajax = function(type, url, params, success, opt_fail) {
    return $.ajax({
        'type': type,
        'url': url,
        'data': params,
        'dataType': 'json',
        'success': function(response) {
            success && success(response);
        },
        'error': function(response) {
            opt_fail && opt_fail(response);
        }
    });
};
