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

goog.require('tart.Pagination');
goog.require('tart.base.plugin.BasePlugin');


/**
 * @param {tart.base.Model} model tart.base.Model instance to set pager params.
 * @param {tart.Pagination=} pagination optional tart.Pagination instance to handle pagination.
 *
 * @extends {tart.base.plugin.BasePlugin}
 * @constructor
 */
tart.base.plugin.Pager = function(model, pagination) {
    goog.base(this, model);

    var that = this;

    /** @private */
    that.pagination_ = pagination || new tart.Pagination();
    that.pagination_.setParentEventTarget(this);

    /**
     * Change offset on page change events
     */
    goog.events.listen(that.pagination_, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {
        var limit = that.map.get('limit');
        var newOffset = (e.newValue - 1) * limit;
        that.map.set('offset', newOffset);
    });
};
goog.inherits(tart.base.plugin.Pager, tart.base.plugin.BasePlugin);

/**
 * Plugin's parameter key which is inherited from BasePlugin and should be defined
 */
tart.base.plugin.Pager.prototype.key = 'pager_';


/**
 * @param {number} pageCount number of pages.
 */
tart.base.plugin.Pager.prototype.setTotalPageCount = function(pageCount) {
    this.map.set('pageCount', pageCount);
};

/**
 * @param {number} offset cursor start point for paging.
 */
tart.base.plugin.Pager.prototype.setOffset = function(offset) {
    this.map.set('offset', offset);
};


/**
 *
 * @param {number} limit item count to fetch.
 */
tart.base.plugin.Pager.prototype.setLimit = function(limit) {
    this.map.set('limit', limit);
    this.pagination_.setItemPerPage(limit);
};

/**
 *
 * @return {number} current limit.
 */
tart.base.plugin.Pager.prototype.getLimit = function() {
    return this.pagination_.getItemPerPage();
};


/**
 * @param {number} totalItemCount set total item count for paginator.
 */
tart.base.plugin.Pager.prototype.setTotalItems = function(totalItemCount) {
    this.pagination_.setTotalItems(totalItemCount);
};

/**
 * Next wrapper for paginator.
 */
tart.base.plugin.Pager.prototype.next = function() {
    this.pagination_.next();
};

/**
 * Prev wrapper for paginator.
 */
tart.base.plugin.Pager.prototype.prev = function() {
    this.pagination_.prev();
};

/**
 * setCurrentPage wrapper for paginator.
 * @param {number} currentPageNum current page number.
 */
tart.base.plugin.Pager.prototype.setCurrentPage = function(currentPageNum) {
    this.pagination_.setCurrentPage(currentPageNum);
};

/**
 * @return {number} number of pages.
 */
tart.base.plugin.Pager.prototype.getTotalPage = function() {
    return this.pagination_.getTotalPage();
};

/**
 * @return {number} current page number.
 */
tart.base.plugin.Pager.prototype.getCurrentPage = function() {
    return this.pagination_.getCurrentPage();
};
