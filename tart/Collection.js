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
 * @fileoverview tart.Collection is a useful data construct that also features an "active item". It is a key-value pair
 * collection with easy to use methods. It is also event-driven, so observers are notified when the index of the
 * active item changes.
 *
 * Example usage:
 *
 *     var items = { foo : 'bar' };
 *     var list = new tart.Collection(items);
 *
 * OR
 *
 *     var items = ['A','B', 'C', 'D'];
 *     var list = new tart.Collection(items);
 *
 * OR
 *
 *     var items = { foo : 'bar', baz:'zoo' };
 *     var list = new tart.Collection(items, 1); // Set activeItemIndex to 1
 */

goog.provide('tart.Collection');
goog.require('goog.array');
goog.require('goog.pubsub.PubSub');
goog.require('tart.Err');



/**
 * Constructor method
 *
 * @constructor
 * @extends {goog.pubsub.PubSub}
 * @param {tart.JSON=} initialList Default list items in JSON format.
 * @param {number=} activeItem Default selected item index.
 * @return {tart.Collection} A list object.
 */
tart.Collection = function(initialList, activeItem) {
    // define privileged methods and properties here...
    goog.base(this);
    var initials = initialList || [];
    this.activeItemIndex_ = (activeItem === undefined) ? -1 : activeItem;
    this.values_ = []; // Values of all list elements.
    this.keys_ = []; // Keys of all list elements.
    this.items_ = []; // All key-val pairs in collection. Format [{a:1},{b:2},{c:x}]

    // Initial values given like this: {a:b,c:d,e:f}
    //@todo This loop should be coded in generic javascript instead of jQuery.
    var _self = this;
    $.each(initials, function(a, b) {
        _self.addItem(a, b);
    });
    this.setActiveItemIndex(this.activeItemIndex_);
    return this;
};
goog.inherits(tart.Collection, goog.pubsub.PubSub);


/**
 * Adds a new key-value pair to the collection.
 *
 * @param {number|string} key Key for the pair.
 * @param {*} value Value for the pair.
 * @return {boolean} Returns true if the add operation was successful.
 */
tart.Collection.prototype.addItem = function(key, value) {
    if (key === undefined || value === undefined) {
        throw new tart.Err('Missing arguments (key: ' + key + ' value: ' + value + ')- you must give a key' +
                'and a value to add a new item.');
    } else if (this.getByKey(key)) {
        // Deffensive check: key's must be unique
        throw new tart.Err('Key "' + key + '" already in collection. Keys should be unique.');
    } else {
        var item = {};
        item[key] = value;
        this.keys_.push(key);
        this.values_.push(value);
        this.items_.push(item);
        return true;
    }
};


/**
 * Returns active item as JSON object.
 *
 * @return {tart.JSON} returns the active key-value pair from the collection.
 */
tart.Collection.prototype.getActiveItem = function() {
    return this.items_[this.getActiveItemIndex()];
};


/**
 * Returns active item's key.
 *
 * @return {string|number} returns the active key from the collection.
 */
tart.Collection.prototype.getActiveItemKey = function() {
    return this.keys_[this.getActiveItemIndex()];
};


/**
 * Returns active item's value.
 *
 * @return {*} returns the active value from the collection.
 */
tart.Collection.prototype.getActiveItemValue = function() {
    return this.values_[this.getActiveItemIndex()];
};


/**
 * Returns active item's index.
 * @return {number} returns the active index in the collection.
 */
tart.Collection.prototype.getActiveItemIndex = function() {
    return this.activeItemIndex_;
};


/**
 * Returns item by given key. If not found, returns boolean false.
 *
 * @param {string|number} key key to search for.
 * @return {tart.JSON} returns the key-value pair given a specific key.
 */
tart.Collection.prototype.getByKey = function(key) {
    return this.items_[goog.array.indexOf(this.keys_, key)];
};


/**
 * Returns item by given value. If not found, returns boolean false.
 *
 * @param {string|number} val value to search for.
 * @return {tart.JSON} returns the key-value pair given a specific value.
 */
tart.Collection.prototype.getByValue = function(val) {
    return this.items_[goog.array.indexOf(this.values_, val)];
};


/**
 * Returns item by given index.
 *
 * @param {number} index Index to search in the collection.
 * @return {tart.JSON|boolean|undefined} returns the key-value pair given an index.
 */
tart.Collection.prototype.getByIndex = function(index) {
    if (index >= this.keys_.length || index < 0 || index === undefined || isNaN(index)) {
        return undefined;
    } else {
        return this.items_[index];
    }
};


/**
 * Dumps all items in an array.
 * @return {Array} returns all pairs as an array.
 */
tart.Collection.prototype.getAll = function() {
    return this.items_;
};


/** Returns all values in an array.
 * @return {Array} returns all values in an array.
 */
tart.Collection.prototype.getValues = function() {
    return this.values_;
};


/** Returns all keys in an array.
 * @return {Array} returns all keys in an array.
 */
tart.Collection.prototype.getKeys = function() {
    return this.keys_;
};


/**
 * Returns all items in a kvp format.
 * @return {tart.JSON} obj returns an object that contains keys as its keys and values as its values.
 */
tart.Collection.prototype.getItems = function() {
    var obj = {};
    for (var i = 0, l = this.items_.length; i < l; i++) {
        var item = this.items_[i];
        $.each(item, function(key, value) {
            obj[key] = value;
        });
    }
    return obj;
};


/**
 * Removes an item from collection which given by index and rebuilds the item collection.
 * Returns new activeItemIndex if item successfully removed or FALSE if not.
 *
 * @param {number} index Index to remove.
 * @return {number|boolean|undefined} Condition of the operation or the active item index.
 */
tart.Collection.prototype.removeByIndex = function(index) {
    if (index >= this.keys_.length || index < 0 || index === undefined || isNaN(index)) {
        return undefined;
    } else {
        var oldActiveKey = this.getActiveItemKey();
        this.items_.splice(index, 1);
        this.keys_.splice(index, 1);
        this.values_.splice(index, 1);
        var oldActiveIndex = goog.array.indexOf(this.keys_, oldActiveKey);
        if (oldActiveIndex > -1) {
            this.setActiveItemIndex(oldActiveIndex);
        } else {
            this.setActiveItemIndex(-1);
        }
        return this.activeItemIndex_;
    }
};


/**
 * Removes items by key.
 * @param {string} key Game items key.
 */
tart.Collection.prototype.removeByKey = function(key) {
    var keys = this.getKeys();
    var index = goog.array.indexOf(keys, key);
    this.removeByIndex(index);
};


/**
 * Sets active item index.
 * @param {number} newIndex index to set as the new active item.
 * @return {boolean} Whether the method was able to set the item.
 */
tart.Collection.prototype.setActiveItemIndex = function(newIndex) {
    // Deffensive check; active item index should not greater than total items in collection.
    if (newIndex > this.values_.length - 1 || newIndex === undefined || isNaN(newIndex) || newIndex == this.activeItemIndex_) {
        return false;
    } else {
        var oldIndex = this.activeItemIndex_;
        this.activeItemIndex_ = newIndex;
        this.publish('indexChanged', this.activeItemIndex_, oldIndex);
        return true;
    }
};
