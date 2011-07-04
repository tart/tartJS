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
 * @fileoverview Dropdown list class is an example of an HTML select box.
 *
 * Example usage:
 * var items        = {key1:'val1',key2:'val2',key3:'val3'};
 * var builder      = new tart.DropdownBuilder('elementId');
 * var selectedItem = 1;
 * var list = new tart.DropdownList(items, builder, selectedItem);
 * list.getAll(); // Outputs [{key1:'val1'},{key2:'val2'},{key3:'val3'}]
 * list.getDOM(); // Returns a select (dropdown) menu in jquery format jQuery(select#elementId)
 * list.setActiveItemIndex(2); // Sets key3:val3 option element selected property to TRUE;
 * list.getActiveItemIndex(); // Returns an Object { key3="val3" }
 */

goog.provide('tart.DropdownList');
goog.require('tart.DropdownBuilder');
goog.require('tart.Collection');



/**
 * Constructor method for DropdownList.
 *
 * @constructor
 * @extends {tart.Collection}
 * @param {Object|Array}  initialList    initial list of items.
 * @param {tart.Builder=} opt_builder    builder class.
 * @param {number=}       opt_activeItem index of the active item.
 */
tart.DropdownList = function(initialList, opt_builder, opt_activeItem) {
    goog.base(this, initialList, opt_activeItem);
    this.builder = opt_builder || new tart.DropdownBuilder('');
    this.builder.buildDOM(this);
};
goog.inherits(tart.DropdownList, tart.Collection);


/**
 * @inheritDoc
 */
tart.DropdownList.prototype.removeByIndex = function(index) {
    var result = this.constructor.superClass_.removeByIndex.call(this, index);

    if (result === false) {
        return -1;
    } else if (result === -1) {
        this.setActiveItemIndex(0);
        return 0;
    } else {
        if (this.builder) {
            this.builder.removeOption(result);
        }
        return result;
    }
};


/**
 * @inheritDoc
 */
tart.DropdownList.prototype.removeDOM = function() {
    return this.builder.removeDOM();
};


/**
 * @inheritDoc
 */
tart.DropdownList.prototype.getDOM = function() {
    return this.builder.getDOM();
};


/**
 * @inheritDoc
 */
tart.DropdownList.prototype.setActiveItemIndex = function(newIndex) {
    this.switchIndex(newIndex);
    if (this.builder) {
        this.builder.changeActiveItem(this.getActiveItemIndex());
    }
};

/**
 * Triggered by this.builder.dom_ element when user change the index by non-programatically way.
 * Important: This method shouldn't be called in any implementation code. Developers should use
 *            this.setActiveItemIndex() method instead of this.
 *
 * @param {number} newIndex index of the item to set as active.
 */

tart.DropdownList.prototype.switchIndex = function(newIndex) {
    this.constructor.superClass_.setActiveItemIndex.call(this, ((newIndex < 0) ? 0 : newIndex));
};


/**
 * @inheritDoc
 */
tart.DropdownList.prototype.addItem = function(key, value) {
    var added = this.constructor.superClass_.addItem.call(this, key, value);
    if (this.builder && added === true) {
        this.builder.addOption(key, value);
    }
    return this;
};
