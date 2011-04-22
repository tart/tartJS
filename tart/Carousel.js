// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview tart.Carousel is a carousel that is identical in operation to the one used in iTunes App Store.
 *
 * Example usage:
 *
 *
 * properties = [{
 *     srcThumb: "1.png",
 *     srcImage: "img/y1.png",
 *     link: "#1",
 *     details: {
 *         heading: "Real Madrid",
 *         text: "Deplasmanda galibiyet ariyor",
 *         match: "Real Madrid - Sevilla",
 *         date: "21 Temmuz 2010, Saat 18:30"
 *     }
 * },
 * {
 *     srcThumb: "4.png",
 *     srcImage: "img/y4.png",
 *     link: "#4"
 * }];
 *
 * var myCarousel = new tart.Carousel("myCarousel", properties);
 * $("#container").append(myCarousel.$dom);
 *
 * Changelog:
 *        v.0.0.2 Fixed a bug in details template that prevented from being shown correctly on IE.
 *        v.0.0.1 Initial implementation.
 */

goog.require('tart');
goog.provide('tart.Carousel');
goog.provide('tart.CarouselItem');



/**
 * Creates a fully working tartCarousel with given id and options; the user is then required to append the $dom
 * property of tartCarousel object.
 *
 * @constructor
 * @param {string} id the id of the carousel that will also be passed to its children.
 * @param {Array} list list for declaring carouselItems.
 */
tart.Carousel = function(id, list) {
    this.id = id;
    this.carouselItems_ = [];

    this.$dom = $(tart.Carousel.templates.dom(this.id));
    this.$thumbs = $(tart.Carousel.templates.thumbs());
    this.$images = $(tart.Carousel.templates.images());
    this.$button = $(tart.Carousel.templates.button());

    this.$dom.append(this.$images);
    this.$dom.append(this.$thumbs);
    this.$dom.append(this.$button);

    for (var i = 0; i < list.length; i++) {
        var item = new tart.CarouselItem(list[i], id, i);
        this.carouselItems_.push(item);
        this.$thumbs.append(item.$thumb);
        this.$images.append(item.$image);
    }
    this.$images.append(this.carouselItems_[3].$image);

    this.bindEvents_();
};


/**
 * Binds the necessary DOM events
 *
 * @private
 */
tart.Carousel.prototype.bindEvents_ = function() {
    var that = this;
    var showButton = function() {
        that.$button.stop(true, true).fadeIn();
    }
    var hideButton = function() {
        that.$button.stop(true, true).fadeOut();
    }
    var clickButton = function() {
        that.scrollThumbs_();
    };

    setInterval(clickButton, 5000);

    this.$dom.hover(showButton, hideButton);

    this.$button.click(clickButton);
    this.$thumbs.find('a:first').addClass('tr');
    this.$thumbs.find('a:eq(2)').addClass('br');
};


/**
 * Locking mechanism for sliding animation
 *
 * @private
 * @type {number}
 */
tart.Carousel.prototype.anim_ = 0;


/**
 * Scrolls the thumbnails by one and puts the one out of view to the main view
 *
 * @private
 */
tart.Carousel.prototype.scrollThumbs_ = function() {
    if (this.anim_ == 0) {
        var that = this;
        this.anim_++;

        var item = this.carouselItems_.pop();
        this.carouselItems_.unshift(item);

        var thumb = item.$thumb;
        var image = this.carouselItems_[3].$image;

        thumb.hide();
        image.hide();
        this.$thumbs.prepend(thumb);
        this.$images.append(image);

        that.$thumbs.find('a').removeClass('tr br');
        thumb.slideDown(function() {
            that.anim_--;
            that.$thumbs.find('a:first').addClass('tr');
            that.$thumbs.find('a:eq(2)').addClass('br');
        });

        image.fadeIn();
    }
};


/**
 * Templates holder for CarouselItem
 * @type {Object}
 */
tart.Carousel.templates = {};


/**
 * Template for a carousel container
 * @param {string} id DOM element id for the container.
 * @return {string} HTML container for a carousel.
 */
tart.Carousel.templates.dom = function(id) {
    return '<div id="' + id + '" class="tartCarousel"></div>';
};


/**
 * Template for a carousel's thumbnails container
 * @return {string} HTML for thumbnails container.
 */
tart.Carousel.templates.thumbs = function() {
    return '<div class="thumbs"></div>';
};


/**
 * Template for a carousel's images container
 * @return {string} HTML for images container.
 */
tart.Carousel.templates.images = function() {
    return '<div class="images"></div>';
};


/**
 * Template for a carousel's next button
 * @return {string} HTML for next button.
 */
tart.Carousel.templates.button = function() {
    return '<div class="button"></div>';
};



/**
 * Carousel item value object for holding particular items in a carousel
 *
 * @constructor
 * @param {Object} props Properties required for building a carousel item.
 * @param {string} id Id prefix for the carousel item.
 * @param {number} i Index of the carousel item in a carousel.
 */
tart.CarouselItem = function(props, id, i) {
    this.id = id + i;
    this.props = props;

    this.$thumb = $(tart.CarouselItem.templates.thumb(this.id, this.props));
    this.$image = $(tart.CarouselItem.templates.img(this.id, this.props));

    if (props.details) {
        this.hasDetails = true;
        this.$details = $(tart.CarouselItem.templates.details(this.id + '_details', this.props.details));
        this.$image.find('a').append(this.$details);
    }
};


/**
 * Variable that indicates whether this carousel item has details or not
 * @type {boolean}
 *
 */
tart.CarouselItem.prototype.hasDetails = false;


/**
 * Templates holder for CarouselItem
 * @type {Object}
 */
tart.CarouselItem.templates = {};


/**
 * Template for a carouselItem's thumbnail
 * @param {string} id DOM element id for the thumbnail.
 * @param {Object} thumb Object to hold link and srcThumb properties for constructing the thumbnail.
 * @return {string} HTML for thumbnail.
 */
tart.CarouselItem.templates.thumb = function(id, thumb) {
    return '<div id="' + id + '_thumb" class="thumb"><a href="' + thumb['link'] + '" style="background:url(' +
        bannerRoot + thumb['srcThumb'] + ') no-repeat center center">&nbsp;</a></div>';
};


/**
 * Template for a carouselItem's actual image
 * @param {string} id DOM element id for the image.
 * @param {Object} img Object to hold link and srcImage poperties for constructing the thumbnail.
 * @return {string} HTML for actual image.
 */
tart.CarouselItem.templates.img = function(id, img) {
    return '<div id="' + id + '" class="image bor5tl bor5bl" style="background:url(' + bannerRoot + img['srcImage'] +
        ') no-repeat center center;"><a href="' + img['link'] + '">&nbsp;</a></div>';
};


/**
 * Template for a carouselItem's thumbnail
 * @param {string} id DOM element id for a carouselItem's details.
 * @param {Object} details Object to hold heading, text, match and date properties for constructing the details.
 * @return {string} HTML for thumbnail.
 */
tart.CarouselItem.templates.details = function(id, details) {
    return '<span class="details bor5bl"><span class="heading">' + details['heading'] + '</span><span class="text">' +
        details['text'] + '</span>' + '<span class="event">' + details['match'] + '</span><span class="date">' +
        details['date'] + '</span><span class="bg bor5bl"></span></span>';
};
