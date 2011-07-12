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
 * @fileoverview tart.component.plugin.Pager model pager plugin to handle pagination.
 */

goog.provide('tart.component.plugin.Pager');

goog.require('goog.structs.Map');


/**
 * @param {tart.component.Model} model
 * @constructor
 */
tart.component.plugin.Pager = function (model) {
    /** @private */
    this.model_ = model;

    this.pager_ = new goog.structs.Map();
    this.model_.params.set("pager_", this.pager_);
};

/**
 * @param {number} pageCount number of pages.
 */
tart.component.plugin.Pager.prototype.setTotalPageCount = function (pageCount) {
    this.pager_.set("pageCount", pageCount);
};

/**
 * @param {number} offset cursor start point for paging.
 */
tart.component.plugin.Pager.prototype.setOffset = function (offset) {
    this.pager_.set("offset", offset);
};


/**
 *
 * @param {number} limit item count to fetch.
 */
tart.component.plugin.Pager.prototype.setLimit = function (limit) {
    this.pager_.set("limit", limit);
};
