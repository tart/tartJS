// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.trr>

goog.require('tart.components.Carousel.View');
goog.require('tart.components.ThumbnailedCarousel.ThumbnailsTemplate');

goog.provide('tart.components.ThumbnailedCarousel.ThumbnailsView');


/**
 * @extends {tart.components.Carousel.View}
 * @constructor
 */
tart.components.ThumbnailedCarousel.ThumbnailsView = function() {
    goog.base(this);
};
goog.inherits(tart.components.ThumbnailedCarousel.ThumbnailsView, tart.components.Carousel.View);

tart.components.ThumbnailedCarousel.ThumbnailsView.prototype.templateClass = tart.components.ThumbnailedCarousel.ThumbnailsTemplate;
