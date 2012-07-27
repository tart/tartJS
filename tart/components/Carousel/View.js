// Copyright 2012 Tart. All Rights Reserved.
//
// @author Firat Yalavuz firat.yalavuz@tart.com.tr

/**
 * @fileoverview tart.components.Carousel.View is a base class for all carousel View's.
 */


goog.require('tart.components.View');

goog.provide('tart.components.Carousel.View');



/**
 * @extends {tart.components.View}
 * @constructor
 */
tart.components.Carousel.View = function() {
    goog.base(this);

    this.template = new this.templateClass();

    this.domMappings = this.template.domMappings;

    this.pagerItemsCache = {};
    this.activeItems = null;
};
goog.inherits(tart.components.Carousel.View, tart.components.View);

/**
 *
 */
tart.components.Carousel.View.prototype.templateClass = tart.components.Carousel.Template;

/**
 * Build carousel items from item array
 *
 * @param {Array.<Object>} itemArray carousel data array.
 */
tart.components.Carousel.View.prototype.buildCarouselItems = function(itemArray) {
    this.getDOM().removeClass('loading');
    var carouselText = this.template.carouselItems(itemArray);

    this.get(this.domMappings.ITEMS).html(carouselText);
    this.itemsAppended(carouselText);
    this.activeItems = carouselText;
};


/**
 * Render method which has to be overriden
 *
 * @return {string} markup.
 */
tart.components.Carousel.View.prototype.render = function() {
    return this.template.base();
};


/**
 * get all carousel items' DOM reference
 *
 * @return {Object} DOM refernce.
 * @protected
 */
tart.components.Carousel.View.prototype.getAllCarouselItemsDomReference = function() {
    var carouselItems = this.get(this.domMappings.ITEMS);

    //TODO: there should be more efficent way to find all direct childs
    var allCarouselItems = carouselItems.find('>*');

    return allCarouselItems;
};


/**
 * Animate carousel with given rule
 *
 * @param {string} direction  'next' or 'previous' TODO: this should be enumarated.
 * @param {Array.<Object>} diff items to be inserted.
 * @param {number} moveCount count of move.
 */
tart.components.Carousel.View.prototype.move = function(direction, diff, moveCount) {
    var that = this;

    if (diff.length > 0) {
        var carouselItems = that.get(that.domMappings.ITEMS);

        //prevent glitch on rapid movements
        carouselItems.stop(true, true);

        var marginLeft;

        var moveWidth = this.template.properties.CAROUSEL_WIDTH;

        var allCarouselItems = that.getAllCarouselItemsDomReference();

        var markup = this.template.carouselItems(diff);
        this.activeItems = markup;

        for (var i = 0; i < markup.length; i++) {
            for (var j = 0; j < allCarouselItems.length; j++) {
                if (markup[i] === allCarouselItems[j])
                    allCarouselItems = allCarouselItems.not(markup[i]);
            }
        }

        if (direction == 'next') {
            carouselItems.append(markup);
            this.itemsAppended(markup);
            marginLeft = '-=' + moveWidth + 'px';
        } else {
            carouselItems.prepend(markup);
            this.itemsAppended(markup);
            carouselItems.css('margin-left', (-1 * moveWidth) + 'px');

            marginLeft = '+=' + moveWidth + 'px';

        }

        carouselItems.animate({ 'margin-left': marginLeft }, 500, function() {
            allCarouselItems.detach();
            carouselItems.css('margin-left', '0px');
        });
    }
};

tart.components.Carousel.View.prototype.itemsAppended = function(items) {

};

/**
 * Method to hide previous button.
 */
tart.components.Carousel.View.prototype.hidePrev = function() {
    var that = this;
    that.get(that.domMappings.PREV).hide();
};


/**
 *
 * @param {tart.base.plugin.Pager} pager to build pager.
 */
tart.components.Carousel.View.prototype.buildPager = function(pager) {
    var that = this;
    var $pager = that.get(that.domMappings.PAGER);

    var totalPage = pager.getTotalPage();

    var $navigation = that.get(that.domMappings.NAVIGATION);

    if (totalPage > 1) { //show pager if only totalPage > 1
        if ($pager.length > 0) {
            var $pagerItems = $pager.find(that.domMappings.PAGER_ITEMS);

            //for each pager create pager button and attach event
            for (var i = 1; i <= totalPage; i++) {
                (function(i) {
                    var selected = (i == 1) ? true : false;
                    var $pagerItem = $(that.template.pagerItem(i, selected));

                    $pagerItem.click(function() {
                        pager.setCurrentPage(i);
                    });

                    $pagerItems.append($pagerItem);
                    that.pagerItemsCache[i] = $pagerItem;

                })(i);
            }

            $pager.show();
        }

        $navigation.show();

        if (!pager.hasPrev()) that.hidePrev();


    }
    else {
        //hide pager if totalPage < 2
        $pager.hide();
        $navigation.hide();
    }
};


/**
 *
 * @param {number} pageNum number of selected page.
 */
tart.components.Carousel.View.prototype.setPageSelected = function(pageNum) {
    var that = this;
    var $pager = that.get(that.domMappings.PAGER);
    var $pagerItems = $pager.find(that.domMappings.PAGER_ITEMS).find(that.domMappings.PAGER_ITEM);

    $pagerItems.removeClass('selected');
    that.pagerItemsCache[pageNum] && that.pagerItemsCache[pageNum].addClass('selected');
};


/**
 *
 * @param {boolean} hasNext Whether there is a previous page.
 * @param {boolean} hasPrev Whether there is a next page.
 */
tart.components.Carousel.View.prototype.handleNavigationButtons = function(hasNext, hasPrev) {
    var $pagerNext = this.get(this.domMappings.NEXT);
    var $pagerPrev = this.get(this.domMappings.PREV);
    $pagerNext.show();
    $pagerPrev.show();

    if (!hasNext) $pagerNext.hide();
    if (!hasPrev) $pagerPrev.hide();
};
