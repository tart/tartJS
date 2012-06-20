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
        uri = new goog.Uri(uriString),
        requestPath;

    var fragment = uri.getFragment();
    //@TODO We should implement pushing extra parameters to the request parameters, as supporting both 
    //"url?key=value" and "url/key/value"
    var parameters = fragment.split('?');
    if (parameters.length > 0) {
        fragment = parameters[0];
        this.customQuery = parameters[1];
    }

    if (uri.hasFragment() && !goog.string.endsWith(basePath, '#!/'))
        basePath = basePath + '#!/';

    requestPath = uri.getPath() + (uri.hasFragment() ? '#' + fragment : '');

    if (goog.string.startsWith(requestPath, basePath))
        this.path = requestPath.substr(basePath.length);
    else
        throw new tart.Err('Request cannot be handled by application.', 'Request Error');

    if (!goog.string.endsWith(this.path, '/'))
        this.path += '/';

    this.fragments = this.path.split('/');
    this.fragments = goog.array.filter(this.fragments, function(el) {
        return (el != '');
    });
};


/**
 * @type {?string} Custom query field of Request object. This field holds extra parameter which followed by "?".
 */
tart.mvc.uri.Request.prototype.customQuery = null;

