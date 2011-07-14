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
 * @fileoverview tart.base.plugin.Pager model pager plugin to handle pagination.
 */

goog.provide('tart.base.plugin.Pager');

goog.require('tart.base.plugin.BasePlugin');


/**
 * @param {tart.base.Model} model
 * 
 * @extends {tart.base.plugin.BasePlugin}
 * @constructor
 */
tart.base.plugin.Pager = function (model) {
    goog.base(this, model);
};
goog.inherits(tart.base.plugin.Pager, tart.base.plugin.BasePlugin);

/**
 * Set plugin's param
 */
tart.base.plugin.Pager.prototype.key = "pager_";


/**
 * @param {number} pageCount number of pages.
 */
tart.base.plugin.Pager.prototype.setTotalPageCount = function (pageCount) {
    this.map.set("pageCount", pageCount);
};

/**
 * @param {number} offset cursor start point for paging.
 */
tart.base.plugin.Pager.prototype.setOffset = function (offset) {
    this.map.set("offset", offset);
};


/**
 *
 * @param {number} limit item count to fetch.
 */
tart.base.plugin.Pager.prototype.setLimit = function (limit) {
    this.map.set("limit", limit);
};
