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
 * @fileoverview This is a special return value that is used to identify a redirection. If a redirection is in place
 * the tart.mvc.Router returns an instance of this class, so that the redirector won't resume after the redirection
 * takes place.
 */

goog.provide('tart.mvc.uri.Redirection');



/**
 * Special return value for a redirection in tart.mvc.Router.
 * @constructor
 */
tart.mvc.uri.Redirection = function() {
};
