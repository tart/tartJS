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
 * @fileoverview tart.Carousel is an event driven Carousel/Image Slider class which handles next and previous events and gets visible items on viewport.
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

goog.require('goog.events.EventTarget');


/**
 * Pagination class to handle all paging events
 *
 * @param {Array.<*>=} items array of items.
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.Carousel = function (items) {
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
    this.lastVisible = this.firstVisible  + this.itemPerViewport;


};
goog.inherits(tart.Carousel, goog.events.EventTarget);


/**
 * Event types enumaration
 *
 * @enum
 */
tart.Carousel.EventTypes = {
    MOVED : 'moved',
    NEXT : 'next',
    PREV : 'prev'
};


/**
 * Item per visible viewport
 *
 * @param {number} itemPerViewport number of visible items.
 * @return {tart.Carousel} itself for chaining.
 */
tart.Carousel.prototype.setItemPerViewport = function (itemPerViewport) {
    this.itemPerViewport = itemPerViewport;
    this.lastVisible = this.firstVisible + itemPerViewport;
    return this;
};


/**
 * Get number of visible items in viewport
 *
 * @return {number} number of visible items.
 */
tart.Carousel.prototype.getItemPerViewport = function () {
    return this.itemPerViewport;
};

/**
 * Get visible items
 *
 * @return {Array.<*>} visible items array.
 */
tart.Carousel.prototype.getVisibleItems = function () {
    return this.items.slice(this.firstVisible, this.lastVisible);
};


/**
 * Get visible items indexes
 *
 * @return {Object} visible items array.
 */
tart.Carousel.prototype.getVisibleItemIndexes = function () {
    var indexes = {
        first : this.firstVisible,
        last  : this.lastVisible
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
tart.Carousel.prototype.getMaxMoveCount_ = function (direction, moveCount) {
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
        itemsToBeRemoved = [],
        itemsToBeInserted = [],
        previousItemsIndex = [],
        nextItemsIndex = [];

    for (i = this.firstVisible; i < this.lastVisible; i++) {
        previousItemsIndex.push(i);
        nextItemsIndex.push(i + moveCount);
    }

    var moveDiff = this.getArrayDiff(previousItemsIndex, nextItemsIndex, moveCount);

    return moveDiff;
};

/**
 * Get difference between visible items, after move and before move
 *
 * @param {Array.<number>} a1 first array.
 * @param {Array.<number>} a2 second array.
 * @param {number} moveCount item move count.
 * @return {Array.<number>} generated diff.
 * @protected
 */
tart.Carousel.prototype.getArrayDiff = function(a1, a2, moveCount) {
    var itemCount = this.itemCount;
    //TODO: there should be a method in goog library to get array diff
    var items = {
        toBeRemoved : a1.filter(function(i) {return !(a2.indexOf(i) > -1);}),
        toBeInserted  : a2.filter(function(i) {return !(a1.indexOf(i) > -1);})
    };


    var i = 0,
        index = 0;

    var itemsToBeInserted = [];
    var itemsToBeRemoved = [];

    for (i = 0; i < items.toBeInserted.length; i++) {
        index = (items.toBeInserted[i] + itemCount) % itemCount;
        itemsToBeInserted.push(this.items[index]);
    }

    for (i = 0; i < items.toBeRemoved.length; i++) {
        index = (items.toBeRemoved[i] + itemCount) % itemCount;
        itemsToBeRemoved.push(this.items[index]);
    }

    return {
        itemsToBeInserted : itemsToBeInserted,
        itemsToBeRemoved : itemsToBeRemoved
    };
};





/**
 * Move cursor to next or previous item
 * 
 * @private
 * @param {string} direction 'next' or 'prev' movement direction.
 * @param {number|*} moveCount cursor move count, positive numbers move next, negative numbers move previous.
 * @return {tart.Carousel} return itself for chaining.
 */ 
tart.Carousel.prototype.move_ = function (direction, moveCount) {
    moveCount = moveCount || 1;
    moveCount = Math.abs(moveCount);

    var maxMoveCount = this.getMaxMoveCount_(direction, moveCount);
    var eventToDispatch = tart.Carousel.EventTypes.NEXT;

    moveCount = moveCount <= maxMoveCount ? moveCount : maxMoveCount;

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

    return this;
};


/**
 * Move cursor to next
 *
 * @param {number|*} moveCount cursor move count.
 */ 
tart.Carousel.prototype.next = function (moveCount) {
    this.move_('next', moveCount);
};


/**
 * Move cursor to previous
 *
 * @param {number|*} moveCount cursor move count.
 */ 
tart.Carousel.prototype.prev = function (moveCount) {
    this.move_('prev', moveCount);
};
