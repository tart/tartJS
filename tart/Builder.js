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
 * @fileoverview Generic builder class to build and modify DOM elements.
 */

goog.provide('tart.Builder');
goog.require('tart.Err');



/**
 * Constructor method
 *
 * @constructor
 * @param {string} id id for the builder. Can be used as the id of the DOM element this builder will build.
 * @return {tart.Builder} A builder object.
 */
tart.Builder = function(id) {
    this.id_ = id || '';
    return this;
};


/**
 * @type {jQueryObject}
 * @protected
 */
tart.Builder.prototype.$dom = null;


/**
 * @type {Object} Templates holder object.
 */
tart.Builder.templates = {};


/**
 * Builds the DOM element.
 * @param {*} owner Owner class for the builder.
 */
tart.Builder.prototype.buildDOM = goog.abstractMethod;


/**
 * Returns built ready-to-use DOM part in jQuery object format.
 *
 * @return {?jQueryObject} the DOM object built by the builder.
 */
tart.Builder.prototype.getDOM = function() {
    return this.$dom;
};


/**
 * Removes the DOM part from document.
 */
tart.Builder.prototype.removeDOM = goog.abstractMethod;
