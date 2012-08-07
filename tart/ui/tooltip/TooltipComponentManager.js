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
 * @fileoverview
 */

goog.provide('tart.ui.TooltipComponentManager');
goog.require('tart.events');
goog.require('goog.array');
goog.require('goog.events.EventType');


/** @type {Object.<string, tart.ui.TooltipDelegateComponent>} */
tart.ui.TooltipComponentManager.components = {};
tart.ui.TooltipComponentManager.init = false;


/**
 * Returns parent component (if available) of a given DOM node.
 *
 * @param {Node} child Refers DOM node that will be used for finding parent component.
 * @return {tart.ui.TooltipDelegateComponent} Parent node.
 */
tart.ui.TooltipComponentManager.getParentCmp = function(child) {
    var node = child, cmp;

    do {
        if (cmp = (tart.ui.TooltipComponentManager.components[node.getAttribute && node.getAttribute('data-cmp')])) {}
        else if (cmp = tart.ui.TooltipComponentManager.components[node.id])
            child.setAttribute('data-cmp', node.id);

        if (cmp) break;
    } while (node = node.parentNode);

    return cmp;
};


/**
 * Keeps event types.
 * @type {Array.<goog.events.EventType>}
 */
tart.ui.TooltipComponentManager.eventTypes = [
    goog.events.EventType.CLICK
//    goog.events.EventType.MOUSEOVER,
//    goog.events.EventType.MOUSEOUT,
//    tart.events.EventType.MOUSEENTER,
//    tart.events.EventType.MOUSELEAVE,
//    goog.events.EventType.SCROLL
];

/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.TooltipComponentManager.handleEvent = function (e) {
//    var cmp = tart.ui.ComponentManager.getParentCmp(e.target),
//        handlers = cmp && cmp.events && cmp.events[e.type];
//
//    // fire mouseenter event too
//    if (e.type == goog.events.EventType.MOUSEOVER) {
//        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
//            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
//            a.type = tart.events.EventType.MOUSEENTER;
//            tart.ui.ComponentManager.handleEvent(a);
//        }
//    }
//
//    // fire mouseleave event too
//    else if (e.type == goog.events.EventType.MOUSEOUT) {
//        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
//            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
//            a.type = tart.events.EventType.MOUSELEAVE;
//            tart.ui.ComponentManager.handleEvent(a);
//        }
//    }
//
//    if (handlers) {
//        var selectors = goog.object.getKeys(handlers);
//
//        // call handlers of event's target and its ancestors
//        do {
//            if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
//                if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget) &&
//                    tart.ui.ComponentManager.callHandler(cmp, e, handlers, selectors) === false) break;
//            }
//            else if (tart.ui.ComponentManager.callHandler(cmp, e, handlers, selectors) === false) break;
//        } while ((e.target = e.target.parentNode) && e.target != cmp.getElement());
//    }
};

/**
 *
 * @param e
 */
tart.ui.TooltipComponentManager.handleEvent = function (e) {
    console.log("hede");
};


/**
 *
 * @param {tart.ui.TooltipDelegateComponent} cmp Component which will be set to components.
 */
tart.ui.TooltipComponentManager.set = function (cmp) {
    console.log("hede");
};


