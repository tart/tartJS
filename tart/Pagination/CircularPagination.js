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

goog.require('tart.Pagination');
goog.provide('tart.CircularPagination');



/**
 * CircularPagination class to handle circular paging events
 *
 * @constructor
 * @extends {tart.Pagination}
 */
tart.CircularPagination = function() {

    goog.base(this);
};
goog.inherits(tart.CircularPagination, tart.Pagination);


/**
 * Overriding tart.Pagination's hasPrev method, to return true for all conditions to make circular pages.
 *
 * @override
 * @return {boolean} Whether previous page is available .
 */
tart.CircularPagination.prototype.hasPrev = function() {
    return true;
};


/**
 * Overriding tart.Pagination's hasNext method, to return true for all conditions to make circular pages.
 *
 * @override
 * @return {boolean} Whether next page is available .
 */
tart.CircularPagination.prototype.hasNext = function() {
    return true;
};


/**
 * Overriding tart.Pagination's getTotalPage method, so that the pages never end :).
 *
 * @override
 * @return {number} previous page is available .
 */
tart.CircularPagination.prototype.getTotalPage = function() {
    return Infinity;
};


/**
 * @override
 */
tart.CircularPagination.prototype.setCurrentPage = function(page) {
    if (this.getTotalItems() > this.getItemPerPage()) {
        var oldValue = this.currentPage;
        this.currentPage = page;

        this.triggerPageChange_(oldValue, page);
    }

    return this;
};
