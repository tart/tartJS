// Copyright (c) 2012 Tart New Media (http://www.tart.com.tr)
// Tart Commercial License
//
// @author Sönmez Kartal <sonmez.kartal@tart.com.tr>

/**
 * @fileoverview Event Manager.
 *
 * Provides browser event handling routines.
 *
 * This module extends goog.events for additional support.
 */

goog.provide('tart.events');


/**
 * Constants for event names.
 *
 * @enum {string} Type definitions
 */
tart.events.EventType = {
    MOUSEENTER: 'mouseenter',
    MOUSELEAVE: 'mouseleave',
    TAP: 'tap',
    SWIPE_RIGHT: 'swipeRight',
    SWIPE_UP: 'swipeUp',
    SWIPE_LEFT: 'swipeLeft',
    SWIPE_DOWN: 'swipeDown'
};
