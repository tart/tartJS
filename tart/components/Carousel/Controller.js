// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

/**
 * @fileoverview tart.components.Carousel.Controller is a base class for all carousel Controller's.
 */


goog.require('goog.events.EventTarget');
goog.require('goog.events.EventTarget');
goog.require('tart.Pagination');
goog.require('tart.base.plugin.Pager');
goog.require('tart.components.Carousel.Model');
goog.require('tart.components.Carousel.Template');
goog.require('tart.components.Carousel.View');
goog.require('tart.components.Controller');

goog.provide('tart.components.Carousel.Controller');



/**
 * Example controller class
 *
 * @extends {tart.components.Controller}
 *
 * @constructor
 */
tart.components.Carousel.Controller = function() {
    this.model = this.model || new this.modelClass();
    this.modelPager = new tart.base.plugin.Pager(this.model, new this.paginationClass());
    this.modelPager.setOffset(0);
    this.modelPager.setLimit(this.itemCount);
    this.view = new this.viewClass();
    this.buildDOM();
    this.bindEvents();
};
goog.inherits(tart.components.Carousel.Controller, tart.components.Controller);

/**
 * Carousel's View Class
 */
tart.components.Carousel.Controller.prototype.viewClass = tart.components.Carousel.View;

/**
 * Carousel's Model Class
 */
tart.components.Carousel.Controller.prototype.modelClass = tart.components.Carousel.Model;

/**
 * Carousel's Pagination Class
 */
tart.components.Carousel.Controller.prototype.paginationClass = tart.Pagination;

/**
 * Number of carousel items
 */
tart.components.Carousel.Controller.prototype.itemCount = 5;


/**
 * Build carousel after items' loaded
 * @param {Object} visibleItems visible items.
 * @param {number} totalItemCount total item count.
 */
tart.components.Carousel.Controller.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    if (visibleItems.length == 0)
		this.view.noResults();
	else {
	    //build carousel
	    this.view.buildCarouselItems(visibleItems);
	    //build pagination
	    this.modelPager.setTotalItems(totalItemCount);
	    if (totalItemCount > this.itemCount) {
	        this.view.buildPager(this.modelPager);
	    }
	}
    
	this.view.handleNavigationButtons(this.modelPager.hasNext(), this.modelPager.hasPrev());
};


/**
 * Go to page in given direction
 * @param {String} direction move direction.
 * @param {Number} pageNumber page number to go.
 */
tart.components.Carousel.Controller.prototype.goToPageAction = function(direction, pageNumber) {
    var items = this.model.getItems();
    this.view.move(direction, items, this.modelPager.getLimit());
    this.view.setPageSelected(pageNumber);
};


/**
 * move next page
 */
tart.components.Carousel.Controller.prototype.nextAction = function() {
    this.modelPager.next();
};


/**
 * move previous page
 *
 */
tart.components.Carousel.Controller.prototype.prevAction = function() {
    this.modelPager.prev();
};


/**
 * Bind controller events
 * @protected
 */
tart.components.Carousel.Controller.prototype.bindEvents = function() {
    var that = this;

    //triggered when model.getItems() called
    goog.events.listen(that.model, tart.components.Carousel.Model.EventTypes.ITEMS_LOADED, function(e) {
        that.buildCarouselAction(e.visibleItems, e.totalItemCount);
        if (e.visibleItems.length > 0) {
            that.view.getDOM().css('display', 'block');
        }
    });

    //Triggered when page changed
    goog.events.listen(that.modelPager, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {

        //dont do anything if page not changed

        if (e.oldValue != e.newValue) {
            var direction;
            if (e.newValue > e.oldValue) {
                direction = 'next';
            }
            else {
                direction = 'prev';
            }
            that.goToPageAction(direction, e.newValue);
        }
        that.view.handleNavigationButtons(that.modelPager.hasNext(), that.modelPager.hasPrev());
    });

    goog.events.listen(that.view.get(that.view.domMappings.NEXT)[0], goog.events.EventType.CLICK,
	        this.nextAction, false, this);
    goog.events.listen(that.view.get(that.view.domMappings.PREV)[0], goog.events.EventType.CLICK,
	        this.prevAction, false, this);
};
