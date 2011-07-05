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
 * @fileoverview tart.component.XhrModel a base model to handle xhr requests.
 */

goog.provide('tart.component.XhrModel');

goog.require('tart.XhrManager');
goog.require('tart.component.Model');



/**
 * Base model to handle xhr requests
 *
 * @extends {tart.component.Model}
 * @constructor
 */
tart.component.XhrModel = function() {
    goog.base(this);

    /** @private **/
    this.url_ = '';

    /** @private **/
    this.fethedData_ = null;

};
goog.inherits(tart.component.XhrModel, tart.component.Model);


/**
 * Set url to fetch data
 *
 * @param {string} url url to fetch data.
 */
tart.component.XhrModel.prototype.setUrl = function(url) {
    //TODO: valid url check???
    this.url_ = url;
};


/**
 * Fetch data using xhr
 *
 * @param {function(string,string,XMLHttpRequest)=} callback method after xhr request.
 * @protected
 */
tart.component.XhrModel.prototype.fetchDataWithXhr = function(callback) {
    tart.XhrManager.get(this.url_, this.params.toObject(), callback);
};
