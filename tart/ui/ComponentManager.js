// Copyright (c) 2009-2012 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan.amcalar@tart.com.tr>


goog.provide('tart.ui.ComponentManager');
goog.require('tart.events');
goog.require('goog.array');
goog.require('goog.events.EventType');
goog.require('tart.events.HoverHandler');
goog.require('tart.events.GestureHandler');

/**
 * @fileoverview Registry for tart.ui.DlgComponent. Manages DOM event interactions for these components.
 */


/**
 *
 * @constructor
 */
tart.ui.ComponentManager = function() {
    /** @type {Object.<string, tart.ui.DlgComponent>} */
    this.components = {};
    this.gestureHandler = tart.events.GestureHandler.getInstance();
    this.hoverHandler = new tart.events.HoverHandler();

    goog.events.listen(document.body, tart.ui.ComponentManager.eventTypes, this);
    goog.events.listen(this.hoverHandler, [tart.events.EventType.MOUSEENTER, tart.events.EventType.MOUSELEAVE], this);
};
goog.addSingletonGetter(tart.ui.ComponentManager);


/**
 * Returns parent component (if available) of a given DOM node.
 *
 * @param {Node} child Refers DOM node that will be used for finding parent component.
 * @return {tart.ui.DlgComponent} Parent node.
 */
tart.ui.ComponentManager.prototype.getParentCmp = function(child) {
    var node = child, cmp;

    do {
        if (cmp = (this.components[node.getAttribute && node.getAttribute('data-cmp')])) {}
        else if (cmp = this.components[node.id])
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
    goog.events.EventType.MOUSEMOVE,
    goog.events.EventType.MOUSEDOWN,
    goog.events.EventType.MOUSEUP,
    tart.events.EventType.MOUSEENTER,
    tart.events.EventType.MOUSELEAVE,
    tart.events.EventType.TAP,
    tart.events.EventType.SWIPE_LEFT,
    tart.events.EventType.SWIPE_RIGHT,
    tart.events.EventType.SWIPE_UP,
    tart.events.EventType.SWIPE_DOWN,
    goog.events.EventType.SCROLL,
    goog.events.EventType.KEYUP,
    goog.events.EventType.FOCUSIN,
    goog.events.EventType.FOCUSOUT,
    goog.events.EventType.TOUCHSTART,
    goog.events.EventType.TOUCHMOVE,
    goog.events.EventType.TOUCHEND
];


/**
 *
 * @param {goog.events.BrowserEvent} e Browser Events that was binded to component, will handle.
 */
tart.ui.ComponentManager.prototype.handleEvent = function (e) {
    var cmp = this.getParentCmp(e.target),
        handlers = cmp && cmp.events && cmp.events[e.type];

    if (handlers) {
        var selectors = goog.object.getKeys(handlers);

        // call handlers of event's target and its ancestors
        do {
            if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
                if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget) &&
                    this.callHandler(cmp, e, handlers, selectors) === false) break;
            }
            else if (this.callHandler(cmp, e, handlers, selectors) === false) break;
        } while ((e.target = e.target.parentNode) && e.target != cmp.getElement());
    }
};


/**
 *
 * @param cmp
 * @param e
 * @param handlers
 * @param selectors
 * @return {boolean}
 */
tart.ui.ComponentManager.prototype.callHandler = function(cmp, e, handlers, selectors){
    var rv = true;
    goog.array.forEach(selectors, function(selector) {
        // event's target equals to handler's selector
        if (this.matchesSelector(e.target, selector)) {
            rv = handlers[selector].call(cmp, e);
        }
    }, this);
    return rv;
};


/**
 *
 * @param el
 * @param selector
 * @return {*}
 */
tart.ui.ComponentManager.prototype.matchesSelector = function(el, selector) {
    return goog.array.indexOf(goog.dom.query(selector), el) >= 0;
};


/**
 * Set given component.
 * @param {tart.ui.DlgComponent} cmp Component which will be set to components.
 */
tart.ui.ComponentManager.prototype.set = function(cmp) {
    this.components[cmp.getId()] = cmp;
};


/**
 * Removes given component.
 * @param {tart.ui.DlgComponent} cmp Component which will be removed from components.
 */
tart.ui.ComponentManager.prototype.remove = function(cmp) {
    delete this.components[cmp.getId()];
};
