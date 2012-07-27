// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr


goog.require('tart.CircularPagination');
goog.require('tart.components.Carousel.Controller');
goog.require('tart.components.ThumbnailedCarousel.Model');
goog.require('tart.components.ThumbnailedCarousel.ThumbnailsController');
goog.require('tart.components.ThumbnailedCarousel.ThumbnailsTemplate');
goog.require('tart.components.ThumbnailedCarousel.SpotView');

goog.provide('tart.components.ThumbnailedCarousel.SpotController');


/**
 * @constructor
 * @extends {tart.components.Carousel.Controller}
 */
tart.components.ThumbnailedCarousel.SpotController = function() {
    this.pagination = new tart.CircularPagination();
    goog.base(this);

};
goog.inherits(tart.components.ThumbnailedCarousel.SpotController, tart.components.Carousel.Controller);

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.paginationClass = tart.CircularPagination;

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.itemCount = 1;

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.viewClass = tart.components.ThumbnailedCarousel.SpotView;

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.modelClass = tart.components.ThumbnailedCarousel.Model;

/**
 *  Thumbnailed Carousel's thumbnails template class
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.thumbnailsTemplateClass =
    tart.components.ThumbnailedCarousel.ThumbnailsTemplate;

/**
 *  Thumbnailed Carousel's thumbnails controller class
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.thumbnailsControllerClass =
    tart.components.ThumbnailedCarousel.ThumbnailsController;

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    goog.base(this, 'buildCarouselAction', visibleItems, totalItemCount);
    this.thumbnailsController = new this.thumbnailsControllerClass(this.model);
    var $thumbnails = this.thumbnailsController.getDOM();
    this.view.appendThumbnails($thumbnails);
};

/**
 * @override
 */
tart.components.ThumbnailedCarousel.SpotController.prototype.bindEvents = function() {
    goog.base(this, 'bindEvents');

    var that = this;
    goog.events.listen(this.modelPager, tart.Pagination.EventTypes.PAGE_CHANGED, function(e) {
        that.model.setActiveItem(e.newValue);
    });

    goog.events.listen(this.model, this.model.EventTypes.ACTIVE_ITEM, function(e) {
        that.modelPager.setCurrentPage(e.activeItem);
    });
};
