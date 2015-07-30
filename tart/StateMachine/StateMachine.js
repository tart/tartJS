// Copyright 2011 Tart. All Rights Reserved.
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
 * @fileoverview This class is an implementation of a Moore state machine that is common in digital electronics, etc.
 *
 * The state machine is by it's nature an event-driven system. Events that come at the right state will put the state
 * machine in another expected state.
 *
 * To keep the implementation simple, many details are omitted. The state machine doesn't keep a record of its
 * states, new states cannot be added after a state machine is started, etc. These rules do not prevent
 * the functioning of the machine though.
 *
 * This class is a base class and not intended to be used on its own. To use a state machine, the developer has to
 * subclass this base class and override the <code>createStates_</code> method. This method should hold the
 * initialization of states in the state machine and should return the first state the machine should begin with.
 *
 * This implementation features lazy loading in the sense that the <code>createStates_</code> method is not called
 * until the first call to <code>startMachine</code> method.
 *
 * Example usage:
 *
 *     Foo.MooreMachine = function(){
 *         goog.base(this);
 *     }
 *     goog.inherits(Foo.MooreMachine, tart.StateMachine);
 *
 *     // Having an enumerated type for events helps readability
 *     Foo.MooreMachine.Events = {
 *         CLICK: '0',
 *         DOUBLECLICK: '1'
 *     }
 *
 *     Foo.MooreMachine.prototype.createStates_ = function(){
 *         var STATE1 = new tart.State(function(){
 *             console.log("state 1");
 *         });
 *
 *         var STATE2 = new tart.State(function(){
 *             console.log("state 2");
 *         });
 *
 *         STATE1.transitions[Foo.MooreMachine.Events.CLICK] = STATE2;
 *         STATE2.transitions[Foo.MooreMachine.Events.DOUBLECLICK] = STATE1;
 *
 *         this.addState_(STATE1);
 *         this.addState_(STATE2);
 *
 *         return STATE1;
 *     }
 *
 *     var myMachine = new Foo.MooreMachine();
 *     myMachine.startMachine();
 *
 */

goog.require('goog.array');
goog.require('goog.pubsub.PubSub');
goog.require('tart.State');
goog.provide('tart.StateMachine');



/**
 * Tart State Machine Class
 * @constructor
 * @extends {goog.pubsub.PubSub}
 */
tart.StateMachine = function() {
    goog.base(this);
    /**
     * @type {Array.<string>}
     * @private
     */
    this.events_ = [];
    this.currentState = undefined;
};
goog.inherits(tart.StateMachine, goog.pubsub.PubSub);


/**
 * Adds a state to the state machine.
 * @param {tart.State} state State to be added.
 * @protected
 */
tart.StateMachine.prototype.addState = function(state) {
    for (var event in state.transitions) {
        goog.array.insert(this.events_, event);
    }
};


/**
 * Sets the current state disregarding the previous one, and executes it's function.
 * @param {tart.State} state State to be set as the current state.
 * @param {Array.<*>=} opt_args Arguments to pass to the new state.
 * @protected
 */
tart.StateMachine.prototype.setCurrentState = function(state, opt_args) {
    opt_args = opt_args || [];
    this.currentState = state;
    this.currentState.fn.apply(this, opt_args);
};


/**
 * Starts the state machine. If it's the first time this function is called, it also lazy loads the states via
 * <code>createStates</code> method.
 */
tart.StateMachine.prototype.startMachine = function() {
    if (this.currentState == undefined) {
        this.firstState = this.createStates();
        this.bindEvents_();
        this.setCurrentState(this.firstState);
    }
};


tart.StateMachine.prototype.reset = function() {
    this.firstState && this.setCurrentState(this.firstState);
};


/**
 * This should be overridden by child classes. It holds the initialization of states and is called when the
 * <code>startMachine</code> method is called for the first time.
 * @return {tart.State} The first state that the machine will start with.
 */
tart.StateMachine.prototype.createStates = goog.abstractMethod;


/**
 * Subscribes its <code>handleEvent_</code> function to its every event
 * @private
 */
tart.StateMachine.prototype.bindEvents_ = function() {
    var self = this;
    for (var i = 0, l = self.events_.length; i < l; i++) {
        var eventName = self.events_[i];
        self.subscribe(eventName, self.handleEvent_(self, eventName));
    }
};


/**
 * Handles incoming events. If any of the events are in the transitions list for the current state, that transition's
 * target state becomes the current state.
 * @param {tart.StateMachine} self The State Machine instance (due to the nature of goog.pubsub.PubSub.subscribe,
 *                                 this function loses its scope. This variable corrects it).
 * @param {string} event The event to handle.
 * @return {function()} Returns a closure to use as an eventHandler.
 * @private
 */
tart.StateMachine.prototype.handleEvent_ = function(self, event) {
    return function() {
        var nextState = self.currentState.transitions[event];
        if (nextState) {
            self.setCurrentState(nextState, Array.prototype.slice.call(arguments));
        }
    }
};
