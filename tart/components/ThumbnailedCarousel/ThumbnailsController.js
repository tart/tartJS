// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr


goog.require('tart.CircularPagination');
goog.require('tart.components.Carousel.Controller');
goog.require('tart.components.ThumbnailedCarousel.ThumbnailsView');

goog.provide('tart.components.ThumbnailedCarousel.ThumbnailsController');


/**
 * @constructor
 * @extends {tart.components.Carousel.Controller}
 */
tart.components.ThumbnailedCarousel.ThumbnailsController = function(model) {
    this.pagination = new this.paginationClass();
    this.model = model || new this.modelClass();
    this.modelPager = new tart.base.plugin.Pager(this.model, new this.paginationClass());
    this.modelPager.setOffset(0);
    this.modelPager.setLimit(this.itemCount);
    this.view = new this.viewClass();
    this.buildDOM();
    this.bindEvents();
    var items = this.model.getItems(); // true = trigger load event after items loaded
    this.buildCarouselAction(items, this.model.getTotalItemCount());
};
goog.inherits(tart.components.ThumbnailedCarousel.ThumbnailsController, tart.components.Carousel.Controller);

/**
 * @override
 */
tart.components.ThumbnailedCarousel.ThumbnailsController.prototype.viewClass = tart.components.ThumbnailedCarousel.ThumbnailsView;

/**
 * @override
 */
tart.components.ThumbnailedCarousel.ThumbnailsController.prototype.bindEvents = function() {
    goog.base(this, 'bindEvents');
    var that = this;
    goog.events.listen(that.model, this.model.EventTypes.ACTIVE_ITEM, function(e) {
        that.modelPager.setCurrentPage(Math.ceil(e.activeItem / that.modelPager.pagination_.getItemPerPage()));
        that.view.setActiveItem(e.activeItem);
    });
};

/**
 *
 * @param visibleItems
 * @param totalItemCount
 */
tart.components.ThumbnailedCarousel.ThumbnailsController.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    goog.base(this, 'buildCarouselAction', visibleItems, totalItemCount);

    this.bindThumbnailEvents();
    this.view.setActiveItem(1);
};

tart.components.ThumbnailedCarousel.ThumbnailsController.prototype.goToPageAction = function(p) {
    goog.base(this, 'goToPageAction', p, null);

    this.bindThumbnailEvents();
};

tart.components.ThumbnailedCarousel.ThumbnailsController.prototype.bindThumbnailEvents = function() {
    var that = this;
    var items = that.model.getItems();

    goog.array.forEach(items, function(item, i) {
        goog.events.removeAll(item.$thumbnail[0], goog.events.EventType.CLICK);
        (function(item, i) {
            goog.events.listen(item.$thumbnail[0], goog.events.EventType.CLICK, function(e) {
                var offset = (that.modelPager.getCurrentPage() - 1) * that.modelPager.getLimit();
                that.model.setActiveItem(offset + i);
            });
        })(item, i + 1);
    });
};


