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
 * @fileoverview tart.component.plugin.Sorter model sorter plugin.
 */

goog.provide('tart.component.plugin.Sorter');

goog.require('goog.structs.Map');


/**
 * @param {tart.component.Model} model
 * @constructor
 */
tart.component.plugin.Sorter = function (model) {
    /** @private */
    this.model_ = model;

    this.sortBy_ = new goog.structs.Map();
    this.model_.params.set("sortBy_", this.sortBy_);
};

/**
 * @param {string} field field to be sorted.
 * @param {string} order order by directive, which is asc or desc.
 */
tart.component.plugin.Sorter.prototype.addSort = function (field, order) {
    this.sortBy_.set(field, order);
};
