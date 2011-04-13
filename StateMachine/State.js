/**
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author armagan.amcalar@tart.com.tr (Armagan Amcalar)
 */

/**
 * @fileoverview State class is used in conjunction with tart.StateMachine. It is a value object that holds two
 * properties; a function that is executed when the state machine is in this state, and a transitions object for
 * events that may happen in this state.
 */

goog.provide('tart.State');



/**
 * Tart State class for state machines.
 * @constructor
 * @param {function()} fn The state function to be executed.
 */
tart.State = function(fn) {
    this.fn = fn;
    this.transitions = {};
};
