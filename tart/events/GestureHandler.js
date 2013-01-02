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
 * It listens to 'touchstart', 'touchmove' and 'touchend' events and generates 'tap' events with
 * inherent heuristics.
 *
 * Currently, the tap algorithm begins with a touchstart, checks for touchend. Any touchmove cancels the tap event,
 * and if a touchend is captured without a touchmove after a touchstart; it's registered as a tap, and the
 * GestureHandler dispatches a tap event.
 *
 * Swipe and other gestures are not yet supported.
 *
 * Example usage:
 *
 * var handler = new tart.events.GestureHandler(elementToListen); // default is body.
 * goog.events.listen(handler, tart.events.EventType.TAP, function() {
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
 * @extends {goog.events.EventTarget}
 * @param {Element=} opt_el Optional element to bind mouseover and mouseout events to. Default is document.body.
 */
tart.events.GestureHandler = function(opt_el) {
    goog.base(this);

    var target = opt_el || document.body;
    goog.events.listen(target, [
        goog.events.EventType.TOUCHSTART,
        goog.events.EventType.TOUCHMOVE,
        goog.events.EventType.TOUCHEND],
    this);
};
goog.inherits(tart.events.GestureHandler, goog.events.EventTarget);


/**
 * This handles the underlying events and dispatches a new event if applicable.
 * @param {goog.events.BrowserEvent} e The underlying browser event.
 */
tart.events.GestureHandler.prototype.handleEvent = function(e) {
    this.handleTap(e);
    this.handleSwipes(e);
};


/**
 * Handles the underlying events and dispatches a new tap event if applicable.
 * @param {goog.events.BrowserEvent} e The underlying browser event.
 */
tart.events.GestureHandler.prototype.handleTap = function(e) {
    if (e.type == goog.events.EventType.TOUCHSTART) {
        var startTarget = e.target;
        var tapEndListener = goog.events.listenOnce(document.body, goog.events.EventType.TOUCHEND, function(ee) {
            var endTarget = ee.target;
            if (startTarget == endTarget) {
                var a = new goog.events.BrowserEvent(e.getBrowserEvent());
                a.type = tart.events.EventType.TAP;
                this.dispatchEvent(a);
            }
            goog.events.unlistenByKey(tapMoveListener);
        }, false, this);

        var tapMoveListener = goog.events.listenOnce(document.body, goog.events.EventType.TOUCHMOVE, function(me) {
            goog.events.unlistenByKey(tapEndListener);
        }, false, this);
    }
};


/**
 * Handles the underlying events and dispatches a new swipe event if applicable.
 * @param {goog.events.BrowserEvent} e The underlying browser event.
 */
tart.events.GestureHandler.prototype.handleSwipes = function(e) {
    if (e.type == goog.events.EventType.TOUCHSTART) {
        var touches = [];
        touches.push(e.getBrowserEvent());

        var swipeMoveListener = goog.events.listen(document.body, goog.events.EventType.TOUCHMOVE, function(e) {
            touches.push(e.getBrowserEvent());

            // Filter the touches
            var date = e.getBrowserEvent().timeStamp;
            touches = goog.array.filter(touches, function(touch) {
                return touch.timeStamp > date - 100;
            });

            if (touches.length > 1) {
                var firstTouch = new goog.math.Coordinate(touches[0].pageX, touches[0].pageY);
                var lastTouch = new goog.math.Coordinate(touches[touches.length - 1].pageX,
                    touches[touches.length - 1].pageY);

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
                e.type = eventType;
                this.dispatchEvent(e);
                goog.events.unlistenByKey(swipeMoveListener);
            }
        }, false, this);
    }
};
