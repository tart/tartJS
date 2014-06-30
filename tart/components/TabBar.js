// Copyright 2014 Tart. All Rights Reserved.
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

goog.require('tart.ui.DlgComponent');
goog.provide('tart.components.TabBar');



/**
 * @constructor
 * @extends {tart.ui.DlgComponent}
 */
tart.components.TabBar = function() {
    goog.base(this);
};
goog.inherits(tart.components.TabBar, tart.ui.DlgComponent);


/**
 * @return {string} Base template of NavigationBar component.
 */
tart.components.TabBar.prototype.templates_base = function() {
    return '';
};


/**
 * @enum {string} Dom mappings.
 */
tart.components.TabBar.prototype.mappings = {
    ITEMS: '.item',
    ACTIVE: '.active'
};


/**
 * @param {goog.events.BrowserEvent} e Item touch event handler.
 */
tart.components.TabBar.prototype.onItemTap = function(e) {
    this.deactivateActiveItem();
    this.activateItem(e.target);
};


/**
 * Removes active class of active item.
 */
tart.components.TabBar.prototype.deactivateActiveItem = function() {
    var activeItem = this.getChild(this.mappings.ACTIVE);
    if (activeItem && activeItem.length)
        goog.dom.classes.remove(activeItem[0], 'active');
};


/**
 * Adds active class to item.
 * @param {Node} item to be active.
 */
tart.components.TabBar.prototype.activateItem = function(item) {
    if (item)
        goog.dom.classes.add(item, 'active');
};


(function() {
    this.events = {};
    var tap = this.events[goog.events.EventType.TOUCHEND] = {};
    tap[this.mappings.ITEMS] = this.onItemTap;
}).call(tart.components.TabBar.prototype);
