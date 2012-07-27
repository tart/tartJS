// Copyright (c) 2009-2012 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan.amcalar@tart.com.tr>


goog.provide('tart.ui.ComponentManager');
goog.require('tart.events');
goog.require('goog.array');

/**
 * @fileoverview Registry for tart.ui.DlgComponent. Manages DOM event interactions for these components.
 */

/** @type {Object.<string, tart.ui.DlgComponent>} */
tart.ui.ComponentManager.components = {};
tart.ui.ComponentManager.init = false;


/**
 * Returns parent component (if available) of a given DOM node.
 *
 * @param {Node} child Refers DOM node that will be used for finding parent component.
 * @return {tart.ui.DlgComponent} Parent node.
 */
tart.ui.ComponentManager.getParentCmp = function(child) {
    var node = child, cmp;

    do {
        if (cmp = (tart.ui.ComponentManager.components[node.getAttribute && node.getAttribute('data-cmp')])) {}
        else if (cmp = tart.ui.ComponentManager.components[node.id])
            child.setAttribute('data-cmp', node.id);

        if (cmp) break;
    } while (node = node.parentNode);

    return cmp;
};


/**
 * Keeps event types.
 * @type {Array.<goog.events.EventType>}
 */
tart.ui.ComponentManager.eventTypes = [
    goog.events.EventType.CLICK,
    goog.events.EventType.MOUSEOVER,
    goog.events.EventType.MOUSEOUT,
    tart.events.EventType.MOUSEENTER,
    tart.events.EventType.MOUSELEAVE,
    goog.events.EventType.SCROLL
];


/**
 * Listens load event to start listening body for handleEvent
 */
tart.ui.ComponentManager.initHandlers = function() {
    tart.ui.ComponentManager.init = true;

    goog.events.listen(window, goog.events.EventType.LOAD, function() {
        goog.events.listen(document.body, tart.ui.ComponentManager.eventTypes, tart.ui.ComponentManager.handleEvent);
    });
};


/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.ComponentManager.handleEvent = function (e) {
    var cmp = tart.ui.ComponentManager.getParentCmp(e.target),
        handlers = cmp && cmp.events && cmp.events[e.type];

    // fire mouseenter event too
    if (e.type == goog.events.EventType.MOUSEOVER) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSEENTER;
            tart.ui.ComponentManager.handleEvent(a);
        }
    }

    // fire mouseleave event too
    else if (e.type == goog.events.EventType.MOUSEOUT) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = tart.events.EventType.MOUSELEAVE;
            tart.ui.ComponentManager.handleEvent(a);
        }
    }

    if (handlers) {
        var selectors = goog.object.getKeys(handlers);

        // call handlers of event's target and its ancestors
        do {
            if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
                if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget) &&
                    tart.ui.ComponentManager.callHandler(cmp, e, handlers, selectors) === false) break;
            }
            else if (tart.ui.ComponentManager.callHandler(cmp, e, handlers, selectors) === false) break;
        } while ((e.target = e.target.parentNode) && e.target != cmp.getElement());
    }
};


/**
 *
 * @param cmp
 * @param e
 * @param handlers
 * @param selectors
 * @return {Boolean}
 */
tart.ui.ComponentManager.callHandler = function(cmp, e, handlers, selectors){
    var rv = true;
    goog.array.forEach(selectors, function(selector) {
        // event's target equals to handler's selector
        if (tart.ui.ComponentManager.matchesSelector(e.target, selector)) {
            rv = handlers[selector].call(cmp, e);
        }
    });
    return rv;
};


/**
 *
 * @param el
 * @param selector
 * @return {*}
 */
tart.ui.ComponentManager.matchesSelector = function(el, selector) {
    return $(el).is(selector);
};


/**
 * Set given component.
 * @param {tart.ui.DlgComponent} cmp Component which will be set to components.
 */
tart.ui.ComponentManager.set = function(cmp) {
    if (!tart.ui.ComponentManager.init)
        tart.ui.ComponentManager.initHandlers();

    tart.ui.ComponentManager.components[cmp.id] = cmp;
};


/**
 * Removes given component.
 * @param {tart.ui.DlgComponent} cmp Component which will be removed from components.
 */
tart.ui.ComponentManager.remove = function(cmp) {
    delete tart.ui.ComponentManager.components[cmp.id];
};
