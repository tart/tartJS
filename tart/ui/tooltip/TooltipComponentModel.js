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

goog.provide('tart.ui.TooltipComponentModel');
goog.require('tart.ui.ComponentModel');
goog.require('tart.events');



/**
 *
 * @param {Object=} registry Registry to subscribe TooltipDelegatedComponents to.
 * @param {Object=} options Arbitrary options.
 * @constructor
 * @extends {tart.ui.ComponentModel}
 */
tart.ui.TooltipComponentModel = function(registry, options) {
    options = options || {};
    this.registry = registry;
    this.tooltipComponentManager = this.registry && this.registry.get('tooltipComponentManager');
    this.options = {};
    this.options.timeout = options.timeout || this.timeout;
    this.options.type = options.type || this.type;
    this.options.direction = options.direction || this.direction;
    this.initStateMachine();
};
goog.inherits(tart.ui.TooltipComponentModel, tart.ui.ComponentModel);


/**
 * How long it should take the tooltip to appear for a given event type, in milliseconds.
 * Timeout 0 is instant activation.
 *
 * @type {number}
 */
tart.ui.TooltipComponentModel.prototype.timeout = 400;


/**
 * Actions to trigger this tooltip. It can be triggered on click or on hover. Default is hover.
 *
 * @enum {string}
 */
tart.ui.TooltipComponentModel.Type = {
    CLICK: 'click',
    HOVER: 'hover'
};


/**
 * Tooltip is triggered on hover by default.
 *
 * @type {tart.ui.TooltipComponentModel.Type}
 */
tart.ui.TooltipComponentModel.prototype.type = tart.ui.TooltipComponentModel.Type.HOVER;


/**
 * How many pixels away the tip should be with respect to the reference element. For top and bottom directions, this
 * is horizontal. For left and right this is vertical. Element (box) positioning is fluid, but this distance should
 * always be kept.
 *
 * @type {number}
 */
tart.ui.TooltipComponentModel.prototype.tipOffset = 20;


/**
 * How many pixels away the box (element) should be positioned with respect to the reference element.
 *
 * @type {number}
 */
tart.ui.TooltipComponentModel.prototype.boxOffset = 3;


/**
 * If the size of the reference element is greater than this threshold, the tip should be placed at a distance of
 * tipOffset. Else, the tip should point to the center of the reference element.
 *
 * @type {number}
 */
tart.ui.TooltipComponentModel.prototype.offsetThreshold = 30;


/**
 * Events that this model dispatches at corresponding states
 *
 * @enum {string}
 */
tart.ui.TooltipComponentModel.EventType = {
    INIT: 'init',
    SHOW: 'show',
    CLICK_WAIT: 'clickWait',
    HOVER_WAIT: 'hoverWait'
};


/**
 * Transition events for the internal state machine
 * @enum {string}
 */
tart.ui.TooltipComponentModel.SMEventType = {
    TIMEOUT: 'timeout',
    BODY_CLICK: 'bodyClick',
    MOUSEOVER: goog.events.EventType.MOUSEOVER,
    MOUSEOUT: goog.events.EventType.MOUSEOUT,
    MOUSELEAVE: tart.events.EventType.MOUSELEAVE,
    MOUSEENTER: tart.events.EventType.MOUSEENTER,
    CLICK: goog.events.EventType.CLICK
};


/**
 * Direction this tooltip will be shown regarding the reference element.
 * @enum {string}
 */
tart.ui.TooltipComponentModel.Direction = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
};


tart.ui.TooltipComponentModel.prototype.direction = tart.ui.TooltipComponentModel.Direction.TOP;


/**
 * @protected
 */
tart.ui.TooltipComponentModel.prototype.initStateMachine = function() {
    var that = this;
    this.mEvents = tart.ui.TooltipComponentModel.EventType;

    /** @protected */
    this.stateMachine = new tart.StateMachine();
    this.stateMachine.smEvents = tart.ui.TooltipComponentModel.SMEventType;

    this.timeoutHandler = false;

    this.stateMachine.createStates = function() {
        var sm = this;

        var INIT = new tart.State(function() {
            clearTimeout(that.timeoutHandler);
            that.dispatchEvent({
                type: that.mEvents.INIT
            });
        });
        var CLICK_WAIT = new tart.State(function() {
            that.dispatchEvent({
                type: that.mEvents.CLICK_WAIT
            });
            that.timeoutHandler = setTimeout(function() {
                sm.publish(sm.smEvents.TIMEOUT);
            }, that.options.timeout);
        });
        var SHOW = new tart.State(function() {
            clearTimeout(that.timeoutHandler);
            that.dispatchEvent({
                type: that.mEvents.SHOW
            });
        });
        var HOVER_WAIT = new tart.State(function() {
            that.dispatchEvent({
                type: that.mEvents.HOVER_WAIT
            });
            that.timeoutHandler = setTimeout(function() {
                sm.publish(sm.smEvents.TIMEOUT);
            }, that.options.timeout);
        });

        switch (that.options.type) {
            case tart.ui.TooltipComponentModel.Type.CLICK:
                INIT.transitions[this.smEvents.CLICK] = CLICK_WAIT;
                CLICK_WAIT.transitions[this.smEvents.BODY_CLICK] = INIT;
                CLICK_WAIT.transitions[this.smEvents.TIMEOUT] = SHOW;
                SHOW.transitions[this.smEvents.BODY_CLICK] = INIT;
                SHOW.transitions[this.smEvents.CLICK] = INIT;

                break;

            case tart.ui.TooltipComponentModel.Type.HOVER:
            default:
                INIT.transitions[this.smEvents.MOUSEENTER] = HOVER_WAIT;
                HOVER_WAIT.transitions[this.smEvents.MOUSELEAVE] = INIT;
                HOVER_WAIT.transitions[this.smEvents.TIMEOUT] = SHOW;
                SHOW.transitions[this.smEvents.MOUSELEAVE] = INIT;
        }

        this.addState(INIT);
        this.addState(CLICK_WAIT);
        this.addState(SHOW);
        this.addState(HOVER_WAIT);
        return INIT;
    }

    this.stateMachine.startMachine();
};


/**
 * @param {string} type
 */
tart.ui.TooltipComponentModel.prototype.handleEvent = function(type) {
    this.stateMachine.publish(type);
};


/**
 * This function returns back the registry which is needed to register a TooltipDelegatedComponent.
 * 
 * This function is subject to change.
 */
tart.ui.TooltipComponentModel.prototype.getTooltipComponentManager = function() {
    return this.tooltipComponentManager;
};


tart.ui.TooltipComponentModel.prototype.reset = function() {
    this.stateMachine.reset();
};
