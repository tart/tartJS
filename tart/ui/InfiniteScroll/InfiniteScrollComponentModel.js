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

goog.provide('tart.ui.InfiniteScrollComponentModel');
goog.require('tart.ui.ComponentModel');



/**
 * Model for the load more component. Manages loading states to prevent
 * performance problems like double actions.
 *
 * @constructor
 * @extends {tart.ui.ComponentModel}
 */
tart.ui.InfiniteScrollComponentModel = function() {
    this.reset();
};
goog.inherits(tart.ui.InfiniteScrollComponentModel, tart.ui.ComponentModel);


/**
 * Resets the component state to default state.
 */
tart.ui.InfiniteScrollComponentModel.prototype.reset = function() {
    this.state_ = this.State.DEFAULT;
};


/**
 * If the component is not in LOADING state, it should check to see if it
 * should load. This method will be triggered on every scroll event.
 */
tart.ui.InfiniteScrollComponentModel.prototype.triggerShouldCheckState = function() {
    if (this.state_ != this.State.LOADING)
        this.state_ = this.State.SHOULD_CHECK;
};


/**
 * Informs the caller if this model is in an appropriate state for checking
 * the right (scroll) position.
 *
 * @return {boolean} Whether the component should check for the right
 *                   (scroll) position.
 */
tart.ui.InfiniteScrollComponentModel.prototype.shouldCheck = function() {
    return this.state_ == this.State.SHOULD_CHECK;
};


/**
 * Dispatches a load event to inform the parent component that it's at the end
 * of a scroll and should load more items.
 */
tart.ui.InfiniteScrollComponentModel.prototype.load = function() {
    if (!this.shouldCheck()) return;

    this.state_ = this.State.LOADING;

    this.dispatchEvent(this.EventType.SHOULD_LOAD);
};


/**
 * Load more states.
 *
 * @enum {string}
 */
tart.ui.InfiniteScrollComponentModel.prototype.State = {
    DEFAULT: 'default',
    SHOULD_CHECK: 'shouldCheck',
    LOADING: 'loading'
};


/**
 * Event types for this model.
 *
 * @enum {string}
 */
tart.ui.InfiniteScrollComponentModel.prototype.EventType = {
    SHOULD_LOAD: 'load'
};
