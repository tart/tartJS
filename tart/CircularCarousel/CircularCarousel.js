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
 * @fileoverview tart.CircularCarousel is an event driven Carousel/Image Slider class which
 * handles next and previous events and gets visible items on viewport.
 *
 * Example usage:
 *
 *     var items = [
 *         {name : 'one'},
 *         {name : 'two'},
 *         {name : 'three'},
 *         {name : 'four'},
 *         {name : 'five'},
 *         {name : 'six'},
 *         {name : 'seven'}
 *     ]; //seven items
 *
 *     var carousel = new tart.CircularCarousel(items);
 *
 *     carousel.setItemPerViewport(2); //only 2 items is visibile
 *
 *     goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function (e) {
 *         console.info('items moved next');
 *         console.log (e.itemsToBeRemoved);
 *         console.log (e.itemsToBeInserted);
 *         console.info(carousel.getVisibleItems());
 *     });
 *
 *     goog.events.listen(carousel, tart.Carousel.EventTypes.PREV, function (e) {
 *         console.info('items moved prev');
 *         console.log (e.itemsToBeRemoved);
 *         console.log (e.itemsToBeInserted);
 *         console.info(carousel.getVisibleItems());
 *     });
 *
 *     carousel.prev(3);
 *     carousel.next(1);
 */

goog.provide('tart.CircularCarousel');

goog.require('goog.events.EventTarget');
goog.require('tart.Carousel');



/**
 * Pagination class to handle all paging events
 *
 * @param {Array.<*>=} items array of items.
 * @extends {tart.Carousel}
 * @constructor
 */
tart.CircularCarousel = function(items) {
    goog.base(this, items);
};
goog.inherits(tart.CircularCarousel, tart.Carousel);


/**
 * Find which items to be removed and inserted after move
 *
 * @param {number} moveCount item move count.
 * @return {Object} object literal which has itemsToBeInserted and itemsToBeRemoved nodes.
 */
tart.CircularCarousel.prototype.getItemsToBeInsertedAndRemoved = function(moveCount) {
    var i,
        previousItemsIndex = [],
        nextItemsIndex = [],
        start = this.firstVisible + moveCount;


    for (i = 0; i < this.lastVisible; i++) {
        previousItemsIndex.push(i);
    }

    for (i = start; i < start + this.itemPerViewport; i++) {
        nextItemsIndex.push(i);
    }

    var moveDiff = this.getMoveDiff(previousItemsIndex, nextItemsIndex, moveCount);

    return moveDiff;
};


/**
 * low level move which handles next and prev methods
 *
 * @param {string} direction 'next' or 'prev' direction of movement.
 * @param {*} moveCount item move count.
 * @override
 * @protected
 */
tart.CircularCarousel.prototype.move = function(direction, moveCount) {
    moveCount = moveCount || 1;
    moveCount = Math.abs(moveCount);
    moveCount = moveCount % this.itemCount;

    var tmpCursor = 0;

    //default event dispatched
    var eventToDispatch = tart.Carousel.EventTypes.NEXT;

    if (direction == 'prev') {
        moveCount = moveCount * -1;
        tmpCursor = this.itemCount;
        eventToDispatch = tart.Carousel.EventTypes.PREV;
    }

    var tmp = [].concat(this.items).concat(this.items);

    var moveDiff = this.getItemsToBeInsertedAndRemoved(moveCount);

    this.firstVisible = this.firstVisible + tmpCursor + moveCount;
    this.lastVisible = this.lastVisible + tmpCursor + moveCount;

    this.items = tmp.slice(this.firstVisible, this.firstVisible + this.itemCount);

    this.firstVisible = 0;
    this.lastVisible = this.itemPerViewport;

    var eventObj = {type: eventToDispatch,
        itemsToBeRemoved: moveDiff.itemsToBeRemoved,
        itemsToBeInserted: moveDiff.itemsToBeInserted};

    this.dispatchEvent(eventObj);
};
