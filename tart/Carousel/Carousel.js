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
 * @fileoverview tart.Carousel is an event driven Carousel/Image Slider class
 * which handles next and previous events and gets visible items on viewport.
 *
 * Example usage:
 *  var items = [
 *     {name : 'one'},
 *     {name : 'two'},
 *     {name : 'three'},
 *     {name : 'four'},
 *     {name : 'five'},
 *     {name : 'six'},
 *     {name : 'seven'}
 *  ]; //seven items
 *
 *  var carousel = new tart.Carousel(items);
 *
 *  carousel.setItemPerViewport(2); //only 2 items is visibile
 *
 *  goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function (e) {
 *      console.info('items moved next');
 *      console.log (e.itemsToBeRemoved);
 *      console.log (e.itemsToBeInserted);
 *      console.info(carousel.getVisibleItems());
 *  });
 *
 *  goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function (e) {
 *      console.info('items moved prev');
 *      console.log (e.itemsToBeRemoved);
 *      console.log (e.itemsToBeInserted);
 *      console.info(carousel.getVisibleItems());
 *  });
 *
 *  //items : 'one', 'two'
 *  carousel.next(1);
 *  //items : 'two', 'three'
 *  carousel.next(4);
 *  //items : 'six', 'seven'
 *  carousel.next(1);
 *  //items : 'six', 'seven' which is end of items, for circular navigation use tart.CircularCarousel instead
 *  carousel.prev(1);
 *  //items : 'five', 'six'
 *  carousel.prev(99999);
 *  //items : 'one', 'two'
 */

goog.provide('tart.Carousel');
goog.provide('tart.Carousel.EventTypes');

goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');



/**
 * Pagination class to handle all paging events
 *
 * @param {Array.<*>=} items array of items.
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.Carousel = function(items) {
    goog.events.EventTarget.call(this);

    /** @protected */
    this.items = items;

    /** @protected */
    this.itemCount = this.items.length;

    /** @protected */
    this.itemPerViewport = 1;

    /**
     * First visible item index in viewport
     *
     * @protected
     * */
    this.firstVisible = 0;

    /**
     * Last visible item index in viewport
     *
     * @protected
     * */
    this.lastVisible = this.firstVisible + this.itemPerViewport;


};
goog.inherits(tart.Carousel, goog.events.EventTarget);


/**
 * Event types enumaration
 *
 * @enum {string}
 */
tart.Carousel.EventTypes = {
    MOVED: 'moved',
    PREV: 'prev',
    NEXT: 'next'
};


/**
 * Item per visible viewport
 *
 * @param {number} itemPerViewport number of visible items.
 * @return {tart.Carousel} itself for chaining.
 */
tart.Carousel.prototype.setItemPerViewport = function(itemPerViewport) {
    this.itemPerViewport = itemPerViewport;
    this.lastVisible = this.firstVisible + itemPerViewport;
    return this;
};


/**
 * Get number of visible items in viewport
 *
 * @return {number} number of visible items.
 */
tart.Carousel.prototype.getItemPerViewport = function() {
    return this.itemPerViewport;
};


/**
 * Get visible items
 *
 * @return {Array.<*>} visible items array.
 */
tart.Carousel.prototype.getVisibleItems = function() {
    return this.items.slice(this.firstVisible, this.lastVisible);
};


/**
 * Get visible items indexes
 *
 * @return {Object} visible items array.
 */
tart.Carousel.prototype.getVisibleItemIndexes = function() {
    var indexes = {
        first: this.firstVisible,
        last: this.lastVisible
    };

    return indexes;
};


/**
 * Calculate max move count
 *
 * @param {string} direction 'next' or 'prev' direction.
 * @param {number} moveCount number of movement.
 * @return {number}  max move count.
 * @private
 */
tart.Carousel.prototype.getMaxMoveCount_ = function(direction, moveCount) {
    var maxMoveCount;

    if (direction == 'next') {
        maxMoveCount = this.itemCount - this.lastVisible;
    }
    else {
        maxMoveCount = this.firstVisible;
    }

    return maxMoveCount;
};


/**
 * Find which items to be removed and inserted after move
 *
 * @param {number} moveCount item move count.
 * @return {Object} object literal which has itemsToBeInserted and itemsToBeRemoved nodes.
 */
tart.Carousel.prototype.getItemsToBeInsertedAndRemoved = function(moveCount) {
    var i,
        previousItemsIndex = [],
        nextItemsIndex = [];

    for (i = this.firstVisible; i < this.lastVisible; i++) {
        previousItemsIndex.push(i);
        nextItemsIndex.push(i + moveCount);
    }

    var moveDiff = this.getMoveDiff(previousItemsIndex, nextItemsIndex, moveCount);

    return moveDiff;
};


/**
 * Get difference between visible items, after move and before move
 *
 * @param {Array.<number>} a1 first array.
 * @param {Array.<number>} a2 second array.
 * @param {number} moveCount item move count.
 * @return {Object} generated diff.
 * @protected
 */
tart.Carousel.prototype.getMoveDiff = function(a1, a2, moveCount) {
    moveCount = Math.abs(moveCount);

    var i = 0,
        index = 0,
        itemsToBeInserted = [],
        itemsToBeRemoved = [],
        itemCount = this.itemCount;

    var tmpItems = {
        toBeInserted: a2.slice(-1 * a2.length, moveCount),
        toBeRemoved: a1.slice(a1.length - moveCount, a1.length)
    };

    for (i = 0; i < tmpItems.toBeInserted.length; i++) {
        index = (tmpItems.toBeInserted[i] + itemCount) % itemCount;
        itemsToBeInserted.push(this.items[index]);
    }

    for (i = 0; i < tmpItems.toBeRemoved.length; i++) {
        index = (tmpItems.toBeRemoved[i] + itemCount) % itemCount;
        itemsToBeRemoved.push(this.items[index]);
    }

    return {
        itemsToBeInserted: itemsToBeInserted,
        itemsToBeRemoved: itemsToBeRemoved
    };
};


/**
 * Move cursor to next or previous item
 *
 * @param {string} direction 'next' or 'prev' movement direction.
 * @param {*} moveCount cursor move count.
 * @protected
 */
tart.Carousel.prototype.move = function(direction, moveCount) {
    moveCount = moveCount || 1;
    moveCount = Math.abs(moveCount);

    var maxMoveCount = this.getMaxMoveCount_(direction, moveCount);
    moveCount = moveCount <= maxMoveCount ? moveCount : maxMoveCount;

    var eventToDispatch = tart.Carousel.EventTypes.NEXT;

    if (direction == 'prev') {
        moveCount = moveCount * -1;
        eventToDispatch = tart.Carousel.EventTypes.PREV;
    }

    var moveDiff = this.getItemsToBeInsertedAndRemoved(moveCount);

    this.firstVisible = this.firstVisible + moveCount;
    this.lastVisible = this.lastVisible + moveCount;


    var eventObj = {type: eventToDispatch,
        itemsToBeRemoved: moveDiff.itemsToBeRemoved,
        itemsToBeInserted: moveDiff.itemsToBeInserted};

    this.dispatchEvent(eventObj);
};


/**
 * Move cursor to next
 *
 * @param {number|*} moveCount cursor move count.
 */
tart.Carousel.prototype.next = function(moveCount) {
    this.move('next', moveCount);
};


/**
 * Move cursor to previous
 *
 * @param {number|*} moveCount cursor move count.
 */
tart.Carousel.prototype.prev = function(moveCount) {
    this.move('prev', moveCount);
};
