// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.trr>

goog.require('tart.components.Carousel.View');
goog.require('tart.components.ThumbnailedCarousel.SpotTemplate');

goog.provide('tart.components.ThumbnailedCarousel.SpotView');


/**
 * @extends {tart.components.Carousel.View}
 * @constructor
 */
tart.components.ThumbnailedCarousel.SpotView = function() {
    goog.base(this);
};
goog.inherits(tart.components.ThumbnailedCarousel.SpotView, tart.components.Carousel.View);

tart.components.ThumbnailedCarousel.SpotView.prototype.templateClass = tart.components.ThumbnailedCarousel.SpotTemplate;

/**
 * @param {string|jQueryObject} $dom for append thumbnails to carousel.
 */
tart.components.ThumbnailedCarousel.SpotView.prototype.appendThumbnails = function($dom) {
    this.get(this.domMappings.THUMBNAILS_CONTAINER).append($dom);
};
