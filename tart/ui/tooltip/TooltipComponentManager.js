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
    'click': 'click'
};


/**
 *
 */
tart.ui.TooltipComponentManager.initHandlers = function () {
    tart.ui.TooltipComponentManager.init = true;

    goog.events.listen(window, goog.events.EventType.LOAD, function() {
        goog.events.listen(document.body, tart.ui.TooltipComponentManager.eventTypes, tart.ui.TooltipComponentManager.handleEvent);
    });
//    console.log("TCM initHandlers");
};

/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.TooltipComponentManager.getSelectorRelatedComponents = function (e) {
//    console.log("tcm getSelectorRelatedComp");
    var keys = goog.object.getKeys(tart.ui.TooltipComponentManager.components);
    var cmp;
    for(var key in keys) {
        if(tart.ui.TooltipComponentManager.matchesSelector(e.target, keys[key]))
            cmp = tart.ui.TooltipComponentManager.components[keys[key]];
    }
//    return goog.array.map(tart.ui.TooltipComponentManager.components, function(selector){
//        if(tart.ui.TooltipComponentManager.matchesSelector(e.target, selector))
//            return tart.ui.TooltipComponentManager.components[selector];
//    });
    return cmp;
};


/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.TooltipComponentManager.handleEvent = function (e) {
//    console.log("TCM.handleEvent");
    var cmp = tart.ui.TooltipComponentManager.getSelectorRelatedComponents(e);
    var hede = cmp && cmp.model && cmp.model.options && cmp.model.options.type && cmp.model.options.type;
    console.log("tcm handling event " + e.type + " for component's " + hede);
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

//    do {
//        if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
//            if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget) &&
//                tart.ui.ComponentManager.callHandler(cmp, e) === false) break;
//        }
//        else if (tart.ui.ComponentManager.callHandler(cmp, e) === false) break;
//    } while ((e.target = e.target.parentNode) && e.target != cmp.getElement());

//
//    if((e.target = e.target.parentNode) && e.target != cmp.getElement()) {
//        if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
//            if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget) &&
//                tart.ui.TooltipComponentManager.callHandler(cmp, e) === false) break;
//        }
//        else if (tart.ui.TooltipComponentManager.callHandler(cmp, e) === false) break;

    cmp && cmp.model && cmp.model.options &&
        cmp.model.options.type == tart.ui.TooltipComponentManager.eventTypeMap[e.type]
        && tart.ui.TooltipComponentManager.callHandler(cmp, e);
//    var cmp = tart.ui.TooltipComponentManager.components[e.type];
//    var cmp = tart.ui.TooltipComponentManager.getParentCmp(e.target),
//        handlers = cmp && cmp.events && cmp.events[e.type];
//

//
//    if (cmp)
//        tart.ui.TooltipComponentManager.callHandler(cmp, e);
};


/**
 *
 * @param {tart.ui.TooltipDelegatedComponent} cmp
 * @param  {goog.events.Event} e
 * @return {boolean}
 */
tart.ui.TooltipComponentManager.callHandler = function(cmp, e){
//    console.log("==> tcm callHandler");
    var rv = true;
    rv = cmp.handleIncomingEvent(e);
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
//        tart.ui.TooltipComponentManager.initHandlers();

//        this.components[cmp.selector] = cmp;
};


