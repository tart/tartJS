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
 * @fileoverview tart.base.Model base model.
 */

goog.provide('tart.base.Model');

goog.require('goog.structs.Map');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');


/**
 * Base model
 *
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.base.Model = function() {
    goog.events.EventTarget.call(this);

    /** @private **/
    this.items_ = null;

    /** @private **/
    this.totalItemCount_ = 0;

    this.params = new goog.structs.Map();
};
goog.inherits(tart.base.Model, goog.events.EventTarget);


/**
 * Abstract method to load data from any resource
 * @param {Function=} opt_callback method after load.
 */
tart.base.Model.prototype.load = function (opt_callback) {
    goog.abstractMethod();
};


/**
 * getter for items
 * @param {boolean=} dispatchEvent Whether this method should throw an event when its items are loaded. This may be used in classes that
 * extend tart.base.Model.
 * @return {Object} items all items.
 */
tart.base.Model.prototype.getItems = function(dispatchEvent) {
    return this.items_;
};


/**
 * Setter for items
 * @param {Object} items items to be set.
 */
tart.base.Model.prototype.setItems = function(items) {
    this.items_ = items;
};

/**
 * Set total item count
 * @param {number} itemCount total item count for this model.
 */
tart.base.Model.prototype.setTotalItemCount = function(itemCount) {
    this.totalItemCount_ = itemCount;
};

/**
 * Get total item count
 * @return {number} total item count for this model.
 */
tart.base.Model.prototype.getTotalItemCount = function() {
    return this.totalItemCount_;
};

/** @typedef {{type: string, oldValue, newValue}} */
tart.base.Model.Event;


/**
 * Overriding goog.events.EventTarget's dispatchEvent method, to make this event consistent in application
 *
 * @param {Object|string} modelEvent event object which has type, oldValue and newValue fields.
 * @return {boolean} .
 * @override
 */
tart.base.Model.prototype.dispatchEvent = function(modelEvent) {
    return goog.base(this, 'dispatchEvent', modelEvent);
};

