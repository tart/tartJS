// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

/**
 * @fileoverview tart.components.Carousel.Template is a base class for all carousel Template's.
 */

goog.provide('tart.components.Carousel.Template');



/**
 * @constructor
 */
tart.components.Carousel.Template = function() {
    this.properties = {
        CAROUSEL_WIDTH: this.carouselWidth
    };

    this.domMappings = {
        NAVIGATION: '.navigation',
        PREV: '.navigation.prev',
        NEXT: '.navigation.next',
        ITEMS: '.contents',
        PAGER: '.pager',
        PAGER_ITEMS: '.pagerItems',
        PAGER_ITEM: 'span'
    };
};


/**
 * Header
 *
 * @return {string} header markup.
 */
tart.components.Carousel.Template.prototype.header = function() {
    return '';
};

tart.components.Carousel.Template.prototype.carouselWidth = 780;

/**
 * Footer
 *
 * @return {string} footer markup.
 */
tart.components.Carousel.Template.prototype.footer = function() {
    return '<div class="pager rounded">' +
				'<div class="pagerItems"></div>' +
           '</div>';
};


/**
 * Base markup for carousel
 *
 * @return {string} base markup.
 */
tart.components.Carousel.Template.prototype.base = function() {
	return '<div class="carousel loading">' +
				this.header() +
            	'<span class="navigation next" title="next"></span>' +
            	'<span class="navigation prev" title="previous"></span>' +
            	'<div class="contentsWrapper">' +
               		'<div class="contents"></div>' +
           		'</div>' +
           		this.footer() +
			'</div>';
};


/**
 * Markup for carousel group
 *
 * @param {Array.<*>} itemArray carousel items.
 * @return {(Node)} base markup.
 */
tart.components.Carousel.Template.prototype.carouselItems = goog.abstractMethod;


/**
 *
 * @param {number} pageNum is number of selected page.
 * @param {boolean} selected class.
 * @return {string} markup.
 */
tart.components.Carousel.Template.prototype.pagerItem = function(pageNum, selected) {
    var selectedClass = selected ? 'selected' : '';
    return '<span class="' + selectedClass + '" title="' + pageNum + ' "></span>';
};


/**
 * @return {string}
 */
tart.components.Carousel.Template.prototype.noResults = function() {
	return '';
};

