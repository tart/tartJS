// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

goog.require('tart.components.Carousel.Template');
goog.provide('tart.components.ThumbnailedCarousel.ThumbnailsTemplate');


/**
 * @extends {tart.components.Carousel.Template}
 * @constructor
 */
tart.components.ThumbnailedCarousel.ThumbnailsTemplate = function() {
    goog.base(this);
};
goog.inherits(tart.components.ThumbnailedCarousel.ThumbnailsTemplate, tart.components.Carousel.Template);

/**
 * @override
 */
tart.components.ThumbnailedCarousel.ThumbnailsTemplate.prototype.footer = function() {
    return '';
}
