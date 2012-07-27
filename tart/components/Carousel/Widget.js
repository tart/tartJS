// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

/**
 * @fileoverview tart.components.Carousel.Widget is a base for all carousel widgets.
 */

goog.provide('tart.components.Carousel.Widget');

goog.require('tart.components.Carousel.Controller');
goog.require('tart.components.Widget');


/**
 * @constructor
 * @extends {tart.components.Widget}
 */
tart.components.Carousel.Widget = function() {
    this.controller = new this.controllerClass();
    goog.base(this);
    this.init();
};
goog.inherits(tart.components.Carousel.Widget, tart.components.Widget);

/**
 *
 */
tart.components.Carousel.Widget.prototype.controllerClass = tart.components.Carousel.Controller;

tart.components.Carousel.Widget.prototype.init = function() {
    this.controller.model.getItems(true);
}