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


goog.provide('tart.ui.TooltipComponentManager');
goog.require('tart.events');
goog.require('goog.array');
goog.require('goog.events.EventType');

/**
 * @fileoverview Registry for tart.ui.TooltipDelegatedComponent.
 */


/** @type {Object.<string, tart.ui.TooltipDelegatedComponent>} */
tart.ui.TooltipComponentManager.components = [];
tart.ui.TooltipComponentManager.init = false;


/**
 * Keeps event types.
 * @type {Array.<goog.events.EventType>}
 */
tart.ui.TooltipComponentManager.eventTypes = [
    goog.events.EventType.CLICK,
    goog.events.EventType.MOUSEOVER,
    goog.events.EventType.MOUSEOUT,
    tart.events.EventType.MOUSEENTER,
    tart.events.EventType.MOUSELEAVE,
    goog.events.EventType.SCROLL
];


/**
 * Keeps event types.
 * @type {Array.<goog.events.EventType>}
 */
tart.ui.TooltipComponentManager.eventTypeMap = {
    'mouseover': 'hover',
    'mouseout': 'hover',
    'mouseleave': 'hover',
    'mouseenter': 'hover',
    'click': 'click',
    'bodyclick': 'click'
};


/**
 *
 */
tart.ui.TooltipComponentManager.initHandlers = function () {
    tart.ui.TooltipComponentManager.init = true;
//    if(tart.ui.TooltipComponentManager.components)

    goog.events.listen(window, goog.events.EventType.LOAD, function() {
        goog.events.listen(document.body, tart.ui.TooltipComponentManager.eventTypes, tart.ui.TooltipComponentManager.handleEvent);
    });
};

/**
 *
 * @param {Node} target Browser Events that was binded to component, will handle.
 */
tart.ui.TooltipComponentManager.getSelectorRelatedComponents = function (target) {
    var keys = goog.object.getKeys(tart.ui.TooltipComponentManager.components);
    var cmp;
    for(var key in keys) {
        if(tart.ui.TooltipComponentManager.matchesSelector(target, keys[key])) {
            cmp = tart.ui.TooltipComponentManager.components[keys[key]];
            break;
        }
    }
    return cmp;
};


/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.TooltipComponentManager.handleEvent = function (e) {
    var selectors = tart.ui.TooltipComponentManager.components;

    var refElement = e.target;
    var cmp;
    do {
        cmp = tart.ui.TooltipComponentManager.getSelectorRelatedComponents(refElement);
        if(cmp) {
            break;
        }
    } while (refElement = refElement.parentNode && !cmp && refElement.nodeName != "BODY")

    if(!cmp) cmp = tart.ui.TooltipComponentManager.getSelectorRelatedComponents(e.relatedTarget);

    // fire mouseenter event too
    if (e.type == goog.events.EventType.MOUSEOVER) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSEENTER;
            tart.ui.TooltipComponentManager.handleEvent(a);
        }
    }

    // fire mouseleave event too
    else if (e.type == goog.events.EventType.MOUSEOUT) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSELEAVE;
            tart.ui.TooltipComponentManager.handleEvent(a);
        }
    }

    if (cmp) {
        if (cmp.model.options.type == tart.ui.TooltipComponentManager.eventTypeMap[e.type]) {

            if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {

                if (e.relatedTarget && !goog.dom.contains(refElement, e.relatedTarget)) {
                tart.ui.TooltipComponentManager.callHandler(cmp, e, refElement);
                }
            }
            else if (e.type == goog.events.EventType.CLICK) {
                tart.ui.TooltipComponentManager.callHandler(cmp, e, refElement);
            }
        }
    }
};


/**
 *
 * @param {tart.ui.TooltipDelegatedComponent} cmp
 * @param  {goog.events.Event} e
 * @param {Node} refElement
 * @return {boolean}
 */
tart.ui.TooltipComponentManager.callHandler = function(cmp, e, refElement){
    var rv = true;
    rv = cmp.handleIncomingEvent(refElement, e);
    return rv;
};

/**
 *
 * @param el
 * @param selector
 * @return {*}
 */
tart.ui.TooltipComponentManager.matchesSelector = function(el, selector) {
    return $(el).is(selector);
};


/**
 *
 * @param {tart.ui.TooltipDelegatedComponent} cmp Component which will be set to components.
 */
tart.ui.TooltipComponentManager.set = function (cmp) {
    if (!tart.ui.TooltipComponentManager.init)
        tart.ui.TooltipComponentManager.initHandlers();
    tart.ui.TooltipComponentManager.components[cmp.selector] = cmp;
};


/**
 *
 * @param {tart.ui.TooltipDelegatedComponent} cmp Component which will be set to components.
 */
tart.ui.TooltipComponentManager.remove = function (cmp) {
//    if (!tart.ui.TooltipComponentManager.init);
    tart.ui.TooltipComponentManager.components.remove(cmp);
};


