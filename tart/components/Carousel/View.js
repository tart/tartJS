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
    goog.dom.classlist.remove(this.getDOM(), 'loading');
    var carouselItems = this.template.carouselItems(itemArray);

    this.get(this.domMappings.ITEMS)[0].innerHTML = '';
    goog.dom.appendChild(this.get(this.domMappings.ITEMS)[0], carouselItems);
    this.itemsAppended(carouselItems);
    this.activeItems = carouselItems;
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
    var carouselItems = this.get(this.domMappings.ITEMS)[0];
    return goog.dom.getChildren(carouselItems);
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
        var carouselItems = $(that.get(that.domMappings.ITEMS));

        //prevent glitch on rapid movements
        carouselItems.stop(true, true);

        var marginLeft;

        var moveWidth = this.template.properties.CAROUSEL_WIDTH;

        var allCarouselItems = $(that.getAllCarouselItemsDomReference());

        var markup = $(this.template.carouselItems(diff));
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

        carouselItems.animate({ 'margin-left': marginLeft }, 500, '', function(){
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
    goog.style.showElement(this.get(this.domMappings.PREV)[0], false);
};


/**
 *
 * @param {tart.base.plugin.Pager} pager to build pager.
 */
tart.components.Carousel.View.prototype.buildPager = function(pager) {
    var that = this;
    var pagerElement = that.get(that.domMappings.PAGER)[0];

    var totalPage = pager.getTotalPage();

    var navigation = that.get(that.domMappings.NAVIGATION)[0];

    if (totalPage > 1) { //show pager if only totalPage > 1
        if (pagerElement.length > 0) {
            var pagerItems = pagerElement.querySelectorAll(that.domMappings.PAGER_ITEMS)[0];

            //for each pager create pager button and attach event
            for (var i = 1; i <= totalPage; i++) {
                (function(i) {
                    var selected = (i == 1);
                    var pagerItem = tart.dom.createElement(that.template.pagerItem(i, selected))[0];

                    goog.events.listen(pagerItem, goog.events.EventType.CLICK, function(){
                        pager.setCurrentPage(i);
                    });

                    goog.dom.appendChild(pagerItems, pagerItem);
                    that.pagerItemsCache[i] = pagerItem;

                })(i);
            }

            goog.style.showElement(pagerElement, true);
        }

        goog.style.showElement(navigation, true);

        if (!pager.hasPrev()) that.hidePrev();


    }
    else {
        //hide pager if totalPage < 2
        pagerElement.hide();
        navigation.hide();
    }
};


/**
 *
 * @param {number} pageNum number of selected page.
 */
tart.components.Carousel.View.prototype.setPageSelected = function(pageNum) {
    var that = this;
    var pager = that.get(that.domMappings.PAGER)[0];
    var pagerItems = pager.querySelector(that.domMappings.PAGER_ITEMS).querySelectorAll(that.domMappings.PAGER_ITEM);
    goog.array.forEach(pagerItems, function(pagerItem) {
        goog.dom.classlist.remove(pagerItem, 'selected');
    });

    that.pagerItemsCache[pageNum] && goog.dom.classlist.add(that.pagerItemsCache[pageNum], 'selected');
};


/**
 *
 * @param {boolean} hasNext Whether there is a previous page.
 * @param {boolean} hasPrev Whether there is a next page.
 */
tart.components.Carousel.View.prototype.handleNavigationButtons = function(hasNext, hasPrev) {
    var pagerNext = this.get(this.domMappings.NEXT)[0];
    var pagerPrev = this.get(this.domMappings.PREV)[0];
    goog.style.showElement(pagerNext, true);
    goog.style.showElement(pagerPrev, true);

    if (!hasNext)     goog.style.showElement(pagerNext, false);
    if (!hasPrev)     goog.style.showElement(pagerPrev, false);
};


/**
 * No results handler
 *
 */
tart.components.Carousel.View.prototype.noResults = function() {
    goog.dom.classlist.remove(this.getDOM(), 'loading');
    var carouselText = this.template.noResults();
    this.get(this.domMappings.ITEMS)[0].innerHTML = carouselText;
    this.itemsAppended(carouselText);
    this.activeItems = carouselText;
};
