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
 * Returns parent components (if available) of a given DOM node.
 *
 *
 * @param {Node} child DOM node that will be used for finding parent components.
 * @return {Array.<tart.ui.DlgComponent>} Parent components.
 */
tart.ui.ComponentManager.prototype.getParentComponents = function(child) {
    var node = child, cmps = [], cmp, ids;

    if (ids = node.getAttribute && node.getAttribute('data-cmp')) {
        ids.split(',').forEach(function(id) {
            if (id) cmps.push(this.components[id]);
        }, this);

        return cmps;
    }

    ids = [];

    do {
        if (cmp = this.components[node.id]) {
            cmps.push(cmp);
            ids.push(node.id);
        }
    } while (node = node.parentNode);

    child.setAttribute('data-cmp', ids.join(','));
    return cmps;
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
 * @param {goog.events.BrowserEvent} e Browser event to be executed.
 */
tart.ui.ComponentManager.prototype.handleEvent = function (e) {
    var cmps = this.getParentComponents(e.target),
        broken = false;

    do {
        if (broken) break;

        if (e.type == tart.events.EventType.MOUSEENTER || e.type == tart.events.EventType.MOUSELEAVE) {
            if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
                broken = this.callHandlers_(cmps, e);
            }
        }
        else {
            broken = this.callHandlers_(cmps, e);
        }
    } while (e.target = e.target.parentNode);
};


/**
 * Given a list of components, checks whether any component would respond to the given event and if so, executes the
 * event handler defined in the component.
 *
 * @private
 *
 * @param {Array.<tart.ui.DlgComponent>} cmps Array of components to look for handlers about the event's target.
 * @param {goog.events.BrowserEvent} e Browser event that will be executed for the target.
 */
tart.ui.ComponentManager.prototype.callHandlers_ = function(cmps, e) {
    var broken = false;

    for (var i = 0; i < cmps.length; i++) {
        var cmp = cmps[i];
        var handlers = cmp && cmp.events && cmp.events[e.type];

        if (!handlers) continue;

        var selectors = goog.object.getKeys(handlers);

        if (this.callHandler_(cmp, e, handlers, selectors) === false) {
            broken = true;
            break;
        }
    }

    return broken;
};


/**
 * @private
 *
 * @param cmp
 * @param e
 * @param handlers
 * @param selectors
 * @return {boolean}
 */
tart.ui.ComponentManager.prototype.callHandler_ = function(cmp, e, handlers, selectors){
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
    return goog.array.indexOf(document.querySelectorAll(selector), el) >= 0;
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
