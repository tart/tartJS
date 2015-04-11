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
 * @fileoverview tartJS base.
 */
goog.provide('tart');



/** @typedef {Object} */
tart.JSON;

(function() {
    var counter = Math.floor(Math.random() * 2147483648);
    tart.getUid = function() {
        return (counter++).toString(36);
    }
})();


/**
 * @typedef {{method, headers, url, data}}
 */
tart.XhrOptions;


/**
 * Makes XHR requests with given options. This is
 *
 * @param {tart.XhrOptions|string} options Options for this method. This can also be a simple string denoting the URL.
 * @param {function(boolean, Object, number)=} opt_callback Callback to execute when the request ends.
 *                                                          It will be invoked with errors, data and status code.
 * @param {Object=} opt_context The context of the callback to be applied.
 */
tart.xhr = function(options, opt_callback, opt_context) {
    var req = new XMLHttpRequest(),
        opts = options;

    if (typeof options == 'string')
        opts = {
            url: options
        };

    opts.method = opts.method || 'GET';
    opts.headers = opts.headers || {};

    if ((opts.method == 'PUT' || opts.method == 'POST') &&
        !opts.headers['Content-Type'] &&
        typeof opts.data == 'object')
        opts.headers['Content-Type'] = 'application/json';

    req.open(opts.method, opts.url, true);

    Object.keys(opts.headers).forEach(function(key) {
        req.setRequestHeader(key, opts.headers[key]);
    });

    req.onreadystatechange = function(e) {
        if (req.readyState != 4) return;

        var data,
            err = false;

        if ([200, 304].indexOf(req.status) == -1)
            err = true;

        try {
            data = JSON.parse(e.target.response);
        } catch (ex) {
            data = e.target.response;
        }

        opt_callback && opt_callback.call(opt_context || goog.global, err, /** @type {Object} */(data), req.status);
    };
    req.withCredentials = true;
    req.send(JSON.stringify(opts.data));
};
