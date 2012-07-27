// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

goog.require('tart.components.Carousel.Template');
goog.provide('tart.components.ThumbnailedCarousel.SpotTemplate');


/**
 * @extends {tart.components.Carousel.Template}
 * @constructor
 */
tart.components.ThumbnailedCarousel.SpotTemplate = function() {
    goog.base(this);
    this.domMappings.THUMBNAILS_CONTAINER = '.thumbs';
};
goog.inherits(tart.components.ThumbnailedCarousel.SpotTemplate, tart.components.Carousel.Template);

/**
 * Base function to create dom.
 *
 * @return {string} base markup of spot.
 */
tart.components.ThumbnailedCarousel.SpotTemplate.prototype.base = function() {
    var markup = '<div class="carousel loading thumbnailedCarousel">' +
        '<span class="navigation next" title="ileri"></span>' +
        '<span class="navigation prev" title="geri"></span>' +
        '<div class="contentsWrapper">' +
        '<div class="contents"></div>' +
        '</div>' +
        '<div class="thumbs"></div>';

    return markup;
};
