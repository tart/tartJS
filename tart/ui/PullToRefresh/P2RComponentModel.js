// Copyright 2014 Startup Kitchen. All Rights Reserved.
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

goog.provide('tart.ui.P2RComponentModel');
goog.require('tart.ui.ComponentModel');



/**
 * Model for the pull to refresh component. Manages refreshing states to prevent
 * performance problems like double actions.
 *
 * @constructor
 * @extends {tart.ui.ComponentModel}
 */
tart.ui.P2RComponentModel = function() {
    this.reset();
};
goog.inherits(tart.ui.P2RComponentModel, tart.ui.ComponentModel);


/**
 * Resets the component state to default state.
 */
tart.ui.P2RComponentModel.prototype.reset = function() {
    this.state_ = this.State.DEFAULT;
};


/**
 * If the component is not in REFRESHING state, it should check to see if it
 * should refresh. This method will be triggered on every scroll event.
 */
tart.ui.P2RComponentModel.prototype.triggerShouldCheckState = function() {
    if (this.state_ != this.State.REFRESHING)
        this.state_ = this.State.SHOULD_CHECK;
};


/**
 * Informs the caller if this model is in an appropriate state for checking
 * the right (scroll) position.
 *
 * @return {boolean} Whether the component should check for the right
 *                   (scroll) position.
 */
tart.ui.P2RComponentModel.prototype.shouldCheck = function() {
    return this.state_ == this.State.SHOULD_CHECK;
};


/**
 * Dispatches a refresh event to inform the parent component that it's at the appropriate
 * position for refresh.
 */
tart.ui.P2RComponentModel.prototype.refresh = function() {
    if (!this.shouldCheck()) return;

    this.state_ = this.State.REFRESHING;

    this.dispatchEvent(this.EventType.SHOULD_REFRESH);
};


/**
 * Pull to refresh states.
 *
 * @enum {string}
 */
tart.ui.P2RComponentModel.prototype.State = {
    DEFAULT: 'default',
    SHOULD_CHECK: 'shouldCheck',
    REFRESHING: 'refreshing'
};


/**
 * Event types for this model.
 *
 * @enum {string}
 */
tart.ui.P2RComponentModel.prototype.EventType = {
    SHOULD_REFRESH: 'refresh'
};
