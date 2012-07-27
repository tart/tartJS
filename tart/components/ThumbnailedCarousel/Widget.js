// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr


goog.require('tart.components.Carousel.Widget');
goog.require('tart.components.ThumbnailedCarousel.SpotController');
goog.provide('tart.components.ThumbnailedCarousel.Widget');



/**
 * @extends {tart.components.Carousel.Widget}
 * @constructor
 */
tart.components.ThumbnailedCarousel.Widget = function() {
    goog.base(this);
};
goog.inherits(tart.components.ThumbnailedCarousel.Widget, tart.components.Carousel.Widget);

tart.components.ThumbnailedCarousel.Widget.prototype.controllerClass = tart.components.ThumbnailedCarousel.SpotController;
