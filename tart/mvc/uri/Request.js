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

goog.provide('tart.mvc.uri.Request');
goog.require('goog.Uri');



/**
 * Represents a request made to the application, storing its controller, action and parameters.
 * @constructor
 * @param {Location|string} uriString uri to be routed. This can either be a string of the uri or a Location such as
 *                                    window.location.
 * @param {tart.mvc.uri.Router} router uri router.
 */
tart.mvc.uri.Request = function(uriString, router) {
    var basePath = router.getBasePath(),
        uri = new goog.Uri(uriString);

    this.path = uri.getPath();
    this.fragment = uri.getFragment();

    if (this.fragment.length > 1) {
        this.path = this.fragment.substr(2);
    }
    else if (this.path.indexOf(basePath) == 0) {
        this.path = this.path.substr(basePath.length);
    }

    if (goog.string.endsWith(this.path, '/') == false)
        this.path += '/';

    this.fragments = this.path.split('/');
    this.fragments = goog.array.filter(this.fragments, function(el, i, arr) {
        return (el != '');
    });
};
