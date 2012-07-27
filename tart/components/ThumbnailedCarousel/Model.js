// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr


goog.require('tart.components.Carousel.Model');
goog.provide('tart.components.ThumbnailedCarousel.Model');


/**
 * @extends {tart.components.Carousel.Model}
 * @constructor
 */
tart.components.ThumbnailedCarousel.Model = function() {
    goog.base(this);
};
goog.inherits(tart.components.ThumbnailedCarousel.Model, tart.components.Carousel.Model);

/**
 * @param {Array} activeItem Active carousel items.
 */
tart.components.ThumbnailedCarousel.Model.prototype.setActiveItem = function(activeItem) {
    this.activeItem = activeItem;
    this.dispatchEvent({
        type: this.EventTypes.ACTIVE_ITEM,
        activeItem: activeItem
    });
};

tart.components.ThumbnailedCarousel.Model.prototype.EventTypes = {
    ACTIVE_ITEM: 'activeItem'
};
