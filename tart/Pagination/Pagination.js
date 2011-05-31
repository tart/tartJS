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
 * @fileoverview tart.Pagination is an event driven Pagination object.
 *
 * Example usage:
 *
 *  var paginator = new tart.Pagination();
 *
 *  paginator.setTotalPage(5);
 *  paginator.setCurrentPage(2);
 *
 *  goog.events.listen(paginator, tart.Pagination.EventTypes.PAGE_CHANGED, function (e) {
 *      console.log("page changed");
 *      console.log("old page : " + e.oldValue);
 *      console.log("new page : " + e.newValue);
 *  });
 *
 *  paginator.setCurrentPage(4); // oldPage : 2, newPage : 4
 *  paginator.setCurrentPage(7); // oldPage : 4, newpage : 5 (totalPage)
 *  paginator.prev(); // oldPage : 5, newPage: 4
 *  paginator.setCurrentPage(0); // oldPage : 4, newpage : 1 (at least 1)
 *  paginator.next(); // oldPage : 1, newPage : 2
 *
 */

goog.provide('tart.Pagination');

goog.require('goog.events.EventTarget');

/**
 * Pagination class to handle all paging events
 *
 * @constructor
 */
tart.Pagination = function () {

    goog.events.EventTarget.call(this);

    /** @private */
    this.data_ = {
        totalPage : 1,
        currentPage : 1,
        itemPerPage : 1,
        totalItems : 1
    };
};
goog.inherits(tart.Pagination, goog.events.EventTarget);


/**
 * Event types enumaration
 *
 * @enum
 */
tart.Pagination.EventTypes = {
    PAGE_CHANGED : 'pageChanged'
};


/**
 * Trigger page change event
 *
 * @param {string|number} oldValue old page value.
 * @param {string|number} newValue new page value.
 * @private
 */
tart.Pagination.prototype.triggerPageChange_ = function (oldValue, newValue) {
    //TODO: this event object should be '@typedef'ed
    this.dispatchEvent({type : tart.Pagination.EventTypes.PAGE_CHANGED, oldValue : oldValue, newValue : newValue});
};


/**
 * Get total page count
 *
 * @return {number} page count.
 */
tart.Pagination.prototype.getTotalPage = function () {
    return this.data_.totalPage;
};

/**
 * Set total page count
 *
 * @param {number} page page count.
 * @return {tart.Pagination} .
 * @this
 */
tart.Pagination.prototype.setTotalPage = function (page) {
    this.data_.totalPage = page;
    this.data_.totalItems = page * this.data_.itemPerPage;
    return this;
};

/**
 * Get current page
 *
 * @return {number} current page.
 */
tart.Pagination.prototype.getCurrentPage = function () {
    return this.data_.currentPage;
};

/**
 * Set current page
 *
 * @param {number} page current page.
 * @return {tart.Pagination} .
 * @this
 */
tart.Pagination.prototype.setCurrentPage = function (page) {
    var oldValue = this.data_.currentPage;

    //if page > totalPage
    page = (page > this.data_.totalPage) ? this.data_.totalPage : page;
  
    //if page < 1
    page = (page < 1) ? 1 : page;

    this.data_.currentPage = page;

    this.triggerPageChange_(oldValue, page);

    return this;
};


/**
 * Get total item count
 *
 * @return {number} number of items.
 */
tart.Pagination.prototype.getTotalItems = function () {
    return this.data_.totalItems;
};

/**
 * Set number of items
 *
 * @param {number} itemCount number of items.
 * @return {tart.Pagination} .
 * @this
 */
tart.Pagination.prototype.setTotalItems = function (itemCount) {
    this.data_.totalItems = itemCount;
    this.data_.totalPage = Math.ceil(itemCount / this.data_.itemPerPage);
    return this;
};


/**
 * Get number of items to be listed in a page
 *
 * @return {number} number of items in a page.
 */
tart.Pagination.prototype.getItemPerPage = function () {
    return this.data_.itemPerPage;
};

/**
 * set number of items to be listed in a page
 *
 * @param {number} itemPerPage number of items in a page.
 * @return {tart.Pagination} .
 * @this
 */
tart.Pagination.prototype.setItemPerPage = function (itemPerPage) {
    this.data_.itemPerPage = itemPerPage;
    return this;
};



/**
 * Determine if next page is available
 *
 * @return {Boolean} is next page available.
 */
tart.Pagination.prototype.hasNext = function () {
    return this.data_.currentPage + 1 <= this.data_.totalPage;
};

/**
 * Get next page
 *
 * @return {number} next page number.
 */
tart.Pagination.prototype.getNext = function () {
    return this.hasNext() ? this.data_.currentPage + 1 : this.data_.currentPage;
};


/**
 * Determine if previous page is available
 *
 * @return {Boolean} is previous page available.
 */
tart.Pagination.prototype.hasPrev = function () {
    return this.data_.currentPage - 1 >= 1;
};


/**
 * Get previous page
 *
 * @return {number} previous page number.
 */
tart.Pagination.prototype.getPrev = function () {
    return this.hasPrev() ? this.data_.currentPage - 1 : this.data_.currentPage;
};


/**
 * Change page to next page
 */
tart.Pagination.prototype.next = function () {
    var newValue = this.getNext();
    this.triggerPageChange_(this.data_.currentPage, newValue);
    this.data_.currentPage = newValue;
};

/**
 * Change page to previous page
 */
tart.Pagination.prototype.prev = function () {
    var newValue = this.getPrev();
    this.triggerPageChange_(this.data_.currentPage, newValue);
    this.data_.currentPage = newValue;
};
