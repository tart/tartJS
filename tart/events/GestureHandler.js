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
 * This handles the underlying events and dispatches a new event.
 * @param {goog.events.BrowserEvent} e  The underlying browser event.
 */
tart.events.GestureHandler.prototype.handleEvent = function(e) {
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

    if (e.type == goog.events.EventType.TOUCHSTART) {
        var swipeStartPoint = e.getBrowserEvent().touches[0];
        swipeStartPoint = {
            x: swipeStartPoint.pageX,
            y: swipeStartPoint.pageY
        }

        var swipeTimeout = setTimeout(function() {
            goog.events.unlistenByKey(swipeEndListener);
        }, 600);

        var swipeEndListener = goog.events.listenOnce(document.body, goog.events.EventType.TOUCHEND, function(ee) {
            var swipeEndPoint = ee.getBrowserEvent().changedTouches[0];
            swipeEndPoint = {
                x: swipeEndPoint.pageX,
                y: swipeEndPoint.pageY
            }
            if (swipeStartPoint.x - swipeEndPoint.x > 60 && Math.abs(swipeStartPoint.y - swipeEndPoint.y) < 30) {
                ee.type = tart.events.EventType.SWIPE_LEFT;
                this.dispatchEvent(ee);
            }
            else if (swipeStartPoint.x - swipeEndPoint.x < -60 && Math.abs(swipeStartPoint.y - swipeEndPoint.y) < 30) {
                ee.type = tart.events.EventType.SWIPE_RIGHT;
                this.dispatchEvent(ee);
            }
            else if (swipeStartPoint.y - swipeStartPoint.y > 60 && Math.abs(swipeStartPoint.x - swipeEndPoint.x) < 30) {
                ee.type = tart.events.EventType.SWIPE_DOWN;
                this.dispatchEvent(ee);
            }
            else if (swipeStartPoint.y - swipeEndPoint.y < -60 && Math.abs(swipeStartPoint.x - swipeEndPoint.x) < 30) {
                ee.type = tart.events.EventType.SWIPE_UP;
                this.dispatchEvent(ee);
            }
        }, false, this);
    }
};
