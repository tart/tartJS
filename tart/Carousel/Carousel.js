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
 *   var items = [
 *       {name : 'one'},
 *       {name : 'two'},
 *       {name : 'three'},
 *       {name : 'four'},
 *       {name : 'five'},
 *       {name : 'six'},
 *       {name : 'seven'}
 *   ];
 * 
 *  var carousel = new tart.Carousel(items);
 * 
 *  carousel.setItemPerViewport(2); //only 2 items is visibile
 *  goog.events.listen(carousel, tart.Carousel.EventTypes.NEXT, function (e) {
 *      console.log (carousel.getVisibleItems());
 *  });
 *
 *  //visible items are 'one' and 'two'
 *  carousel.next(2); //after moving cursor to next 2
 *  //visible items are 'three' and 'four'
 */

goog.provide('tart.Carousel');

goog.require('goog.events.EventTarget');
goog.require('tart.Carousel');


/**
 * Pagination class to handle all paging events
 *
 * @param {Array.<*>=} items array of items.
 * @constructor
 */
tart.Carousel = function (items) {
    goog.events.EventTarget.call(this);

    /** @private */
    this.items_ = items;

    /** @private */
    this.itemCount_ = this.items_.length;

    /** @private */
    this.itemPerViewport_ = 1;

    /** 
     * First visible item index in viewport
     *
     * @private 
     * */
    this.firstVisible_ = 0;

    /**
     * Last visible item index in viewport
     *
     * @private 
     * */
    this.lastVisible_ = this.firstVisible_  + this.itemPerViewport_;

    /** @private */
    this.totalItems_ = 1;


    /** @private */
    this.circular_ = false;

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
 * @return {tart.Carousel} .
 * @this
 */
tart.Carousel.prototype.setItemPerViewport = function (itemPerViewport) {
    this.itemPerViewport_ = itemPerViewport;
    this.lastVisible_ = this.firstVisible_ + this.itemPerViewport_;
    return this;
};


/**
 * Get number of visible items in viewport
 *
 * @return {number} number of visible items.
 */
tart.Carousel.prototype.getItemPerViewport = function () {
    return this.itemPerViewport_;
};

/**
 * Get visible items
 *
 * @return {Array.<*>} visible items array.
 */
tart.Carousel.prototype.getVisibleItems = function () {
    return this.items_.slice(this.firstVisible_, this.lastVisible_);
};


/**
 * Get visible items indexes
 *
 * @return {object} visible items array.
 */
tart.Carousel.prototype.getVisibleItemIndexes = function () {
    var indexes = {
        first : this.firstVisible_,
        last  : this.lastVisible_
    };

    return indexes;
};




/**
 * Move cursor to next or previous item
 * 
 * @private
 * @param {number|*} moveCount cursor move count, positive numbers move next, negative numbers move previous.
 * @param {object} eventType type of event should be triggered.
 * @return {tart.Carousel} .
 * @this
 */ 
tart.Carousel.prototype.move_ = function (moveCount, eventType) {
    moveCount = moveCount || 1;
    eventType = eventType || tart.Carousel.EventTypes.MOVED;


    var maxLastItem = this.itemCount_;
    var maxFirstItem = this.itemCount_ - this.itemPerViewport_;
    var minFirstItem = 0;
    var minLastItem = this.itemPerViewport_;


    this.firstVisible_ = this.firstVisible_ + moveCount;
    this.lastVisible_ = this.firstVisible_ + this.itemPerViewport_;



    //defensive check for valid intervals
    //TODO: check/fix cyclomatic complexity of this code block
    if (this.firstVisible_ < 0) {
        this.firstVisible_ = 0;
    }
    else if (this.firstVisible_ > maxLastItem) {
        this.firstVisible_ = maxFirstItem;
    }

    if (this.lastVisible_ > maxLastItem) {
        this.lastVisible_ = maxLastItem;
    }
    else if (this.lastVisible_ < 0) {
        this.lastVisible_ = maxLastItem;
    }


    if (this.firstVisible_ > maxFirstItem) {
        this.firstVisible_ = maxFirstItem;
    }

    if (this.lastVisible_ > maxLastItem) {
        this.lastVisible_ = maxLastItem;
    }

    if (this.firstVisible_ < minFirstItem) {
        this.firstVisible_ = minFirstItem;
    }

    if (this.lastVisible_ < minLastItem) {
        this.lastVisible_ = minLastItem;
    }


    this.dispatchEvent({type : eventType});

    return this;
};


/**
 * Move cursor to next
 *
 * @param {number|*} moveCount cursor move count.
 * @return {tart.Carousel} .
 * @this
 */ 
tart.Carousel.prototype.next = function (moveCount) {
    moveCount = moveCount || 1;
    moveCount = Math.abs(moveCount);
    return this.move_(moveCount, tart.Carousel.EventTypes.NEXT);
};


/**
 * Move cursor to previous
 *
 * @param {number|*} moveCount cursor move count.
 * @return {tart.Carousel} .
 * @this
 */ 
tart.Carousel.prototype.prev = function (moveCount) {
    moveCount = moveCount || 1;
    moveCount = -1 * Math.abs(moveCount);
    return this.move_(moveCount, tart.Carousel.EventTypes.PREV);
};
