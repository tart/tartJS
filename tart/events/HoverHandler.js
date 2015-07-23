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
 * @fileoverview Google Closure Library doesn't like mouseenter and mouseleave events, and provides no easy
 * way to listen to it. Therefore, HoverHandler provides a consistent behavior of mouseenter and leave actions.
 *
 * Example usage:
 *
 *     var handler = new tart.events.HoverHandler(elementToListen); // default is body.
 *     goog.events.listen(handler, tart.events.EventType.MOUSEENTER, function() {
 *          console.log("i'm on hover");
 *     });
 *
 */

goog.provide('tart.events.HoverHandler');
goog.require('goog.dom');
goog.require('goog.events.EventTarget');



/**
 * Tracks and fires mouseenter and mouseleave events on DOM elements.
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {Element=} opt_el Optional element to bind mouseover and mouseout events to. Default is document.body.
 */
tart.events.HoverHandler = function(opt_el) {
    goog.base(this);

    var target = opt_el || document.body;
    goog.events.listen(target, [goog.events.EventType.MOUSEOVER, goog.events.EventType.MOUSEOUT], this);
};
goog.inherits(tart.events.HoverHandler, goog.events.EventTarget);


/**
 * This handles the underlying events and dispatches a new event.
 * @param {goog.events.BrowserEvent} e  The underlying browser event.
 */
tart.events.HoverHandler.prototype.handleEvent = function(e) {
    // fire mouseenter event
    if (e.type == goog.events.EventType.MOUSEOVER) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSEENTER;
            this.dispatchEvent(a);
        }
    }

    // fire mouseleave event
    else if (e.type == goog.events.EventType.MOUSEOUT) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSELEAVE;
            this.dispatchEvent(a);
        }
    }
};
