// Copyright 2012 Tart. All Rights Reserved.
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
 * @fileoverview GestureHandler adds the ability to capture gesture events on touch enabled devices.
 * It listens to 'touchstart', 'touchmove' and 'touchend' events and generates 'tap' or 'swipe' events with
 * inherent heuristics.
 *
 * Currently, the tap algorithm begins with a touchstart, checks for touchend. Any touchmove greater than 3px
 * cancels the tap event, and if a touchend is captured without a touchmove after a touchstart;
 * it's registered as a tap, and the GestureHandler dispatches a tap event on the touchend target.
 *
 * Swipe up, left, right and down gestures are also supported.
 *
 * Example usage:
 *
 * goog.events.listen(document.body, tart.events.EventType.TAP, function() {
 *     console.log('tapped!');
 * });
 *
 */

goog.provide('tart.events.GestureHandler');
goog.require('goog.dom');
goog.require('goog.events.EventTarget');
goog.require('goog.math.Coordinate');



/**
 * Tracks and fires gestures on touch enabled devices.
 *
 * @constructor
 * @param {Element=} opt_el Provided, gesture handler will track gesture events on this element. The default
 *                          value is document.body; but an optional root element is inevitable for iframe's.
 */
tart.events.GestureHandler = function(opt_el) {
    this.el = opt_el || document.body;

    goog.events.listen(this.el, goog.events.EventType.TOUCHSTART, this.onTouchstart, false, this);
    goog.events.listen(this.el, goog.events.EventType.TOUCHMOVE, this.onTouchmove, false, this);
    goog.events.listen(this.el, goog.events.EventType.TOUCHEND, this.onTouchend, false, this);
};
goog.addSingletonGetter(tart.events.GestureHandler);


/**
 * iOS 6.0(+?) requires the target element to be manually derived.
 * @type {?boolean}
 */
tart.events.GestureHandler.prototype.deviceIsIOSWithBadTarget = navigator.userAgent.match(/iPhone/i) &&
    (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


tart.events.GestureHandler.prototype.onTouchstart = function(e) {
    this.isInMotion = true;
    this.canTap = true;
    this.canSwipe = true;

    var browserEvent = e.getBrowserEvent();
    var changedTouch = browserEvent.changedTouches[0];

    this.touches = [browserEvent.timeStamp, changedTouch.pageX, changedTouch.pageY];
};


tart.events.GestureHandler.prototype.onTouchmove = function(e) {
    var touches = this.touches,
        browserEvent = e.getBrowserEvent(),
        changedTouch = browserEvent.changedTouches[0];

    if (Math.abs(changedTouch.pageX - touches[1]) > 20 ||
        Math.abs(changedTouch.pageY - touches[2]) > 20)
        this.canTap = false;

    if (this.canSwipe) {
        touches.push(browserEvent.timeStamp, changedTouch.pageX, changedTouch.pageY);

        // Filter the touches
        var date = browserEvent.timeStamp;
        touches = goog.array.filter(touches, function(touch, index, arr) {
            var relatedTimeStamp = arr[index - (index % 3)];
            return relatedTimeStamp > date - 250;
        });


        if ((touches.length / 3) > 1) {
            var firstTouch = new goog.math.Coordinate(touches[1], touches[2]);
            var lastTouch = new goog.math.Coordinate(touches[touches.length - 2],
                touches[touches.length - 1]);

            // calculate distance. must be min 60px
            var distance = goog.math.Coordinate.distance(firstTouch, lastTouch);
            if (distance < 60) return;

            // calculate angle.
            var angle = goog.math.angle(firstTouch.x, firstTouch.y, lastTouch.x, lastTouch.y);

            var eventType = tart.events.EventType.SWIPE_RIGHT;
            if (angle > 45 && angle < 135) {
                eventType = tart.events.EventType.SWIPE_UP;
            }
            else if (angle > 135 && angle < 225) {
                eventType = tart.events.EventType.SWIPE_LEFT;
            }
            else if (angle > 225 && angle < 315) {
                eventType = tart.events.EventType.SWIPE_DOWN;
            }

            var swipe = document.createEvent("Event");
            swipe.initEvent(eventType, true, true);
            e.target.dispatchEvent(swipe);

            this.canSwipe = false;
        }
    }
};


tart.events.GestureHandler.prototype.onTouchend = function(e) {
    this.isInMotion = false;
    if (this.canTap) {
        var touches = this.touches,
            browserEvent = e.getBrowserEvent(),
            changedTouch = browserEvent.changedTouches[0];

        if (Math.abs(changedTouch.pageX - touches[1]) > 20 ||
            Math.abs(changedTouch.pageY - touches[2]) > 20) {
            this.canTap = false;
            return;
        }

        var tap = document.createEvent("Event");
        tap.initEvent(tart.events.EventType.TAP, true, true);

        // Target element fix for iOS6+
        var targetElement = e.target;
        if (this.deviceIsIOSWithBadTarget)
            targetElement = document.elementFromPoint(changedTouch.pageX - window.pageXOffset,
                changedTouch.pageY - window.pageYOffset);

        targetElement.dispatchEvent(tap);
    }
};
