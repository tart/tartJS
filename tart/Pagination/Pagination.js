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


goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');

goog.provide('tart.Pagination');



/**
 * Pagination class to handle all paging events
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 */
tart.Pagination = function() {

    goog.events.EventTarget.call(this);

    /** @private */
    this.totalPage_ = 1;

    /** @protected */
    this.currentPage = 1;

    /** @private */
    this.itemPerPage_ = 1;

    /** @private */
    this.totalItems_ = 1;
};
goog.inherits(tart.Pagination, goog.events.EventTarget);


/**
 * Event types enumaration
 *
 * @enum {string}
 */
tart.Pagination.EventTypes = {
    PAGE_CHANGED: 'pageChanged'
};


/**
 * Trigger page change event
 *
 * @param {string|number} oldValue old page value.
 * @param {string|number} newValue new page value.
 * @protected
 */
tart.Pagination.prototype.triggerPageChange_ = function(oldValue, newValue) {
    //TODO: this event object should be '@typedef'ed
    this.dispatchEvent({type: tart.Pagination.EventTypes.PAGE_CHANGED, oldValue: oldValue, newValue: newValue});
};


/**
 * Get total page count
 *
 * @return {number} page count.
 */
tart.Pagination.prototype.getTotalPage = function() {
    return this.totalPage_;
};


/**
 * Set total page count
 *
 * @param {number} page page count.
 * @return {tart.Pagination} .
 */
tart.Pagination.prototype.setTotalPage = function(page) {
    this.totalPage_ = page;
    this.totalItems_ = page * this.itemPerPage_;
    return this;
};


/**
 * Get current page
 *
 * @return {number} current page.
 */
tart.Pagination.prototype.getCurrentPage = function() {
    return this.currentPage;
};


/**
 * Set current page
 *
 * @param {number} page current page.
 * @return {tart.Pagination} .
 */
tart.Pagination.prototype.setCurrentPage = function(page) {
    var oldValue = this.currentPage;

    //if page > totalPage
    page = (page > this.totalPage_) ? this.totalPage_ : page;

    //if page < 1
    page = (page < 1) ? 1 : page;

    this.currentPage = page;

    this.triggerPageChange_(oldValue, page);

    return this;
};


/**
 * Get total item count
 *
 * @return {number} number of items.
 */
tart.Pagination.prototype.getTotalItems = function() {
    return this.totalItems_;
};


/**
 * Set number of items
 *
 * @param {number} itemCount number of items.
 * @return {tart.Pagination} .
 */
tart.Pagination.prototype.setTotalItems = function(itemCount) {
    this.totalItems_ = itemCount;
    this.totalPage_ = Math.ceil(itemCount / this.itemPerPage_);
    return this;
};


/**
 * Get number of items to be listed in a page
 *
 * @return {number} number of items in a page.
 */
tart.Pagination.prototype.getItemPerPage = function() {
    return this.itemPerPage_;
};


/**
 * set number of items to be listed in a page
 *
 * @param {number} itemPerPage number of items in a page.
 * @return {tart.Pagination} .
 */
tart.Pagination.prototype.setItemPerPage = function(itemPerPage) {
    this.itemPerPage_ = itemPerPage;
    return this;
};


/**
 * Determine if next page is available
 *
 * @return {boolean} is next page available.
 */
tart.Pagination.prototype.hasNext = function() {
    return this.currentPage + 1 <= this.totalPage_;
};


/**
 * Get next page
 *
 * @return {number} next page number.
 */
tart.Pagination.prototype.getNext = function() {
    return this.hasNext() ? this.currentPage + 1 : this.currentPage;
};


/**
 * Determine if previous page is available
 *
 * @return {boolean} is previous page available.
 */
tart.Pagination.prototype.hasPrev = function() {
    return this.currentPage - 1 >= 1;
};


/**
 * Get previous page
 *
 * @return {number} previous page number.
 */
tart.Pagination.prototype.getPrev = function() {
    return this.hasPrev() ? this.currentPage - 1 : this.currentPage;
};


/**
 * Change page to next page
 */
tart.Pagination.prototype.next = function() {
    var oldValue = this.currentPage;
    this.currentPage = this.getNext();
    this.triggerPageChange_(oldValue, this.currentPage);
};


/**
 * Change page to previous page
 */
tart.Pagination.prototype.prev = function() {
    var oldValue = this.currentPage;
    this.currentPage = this.getPrev();
    this.triggerPageChange_(oldValue, this.currentPage);
};
