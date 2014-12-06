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

goog.provide('tart.ui.TabBarView');
goog.require('tart.ui.View');



/**
 * @constructor
 * @extends {tart.ui.View}
 */
tart.ui.TabBarView = function() {
    goog.base(this);
};
goog.inherits(tart.ui.TabBarView, tart.ui.View);


/**
 * @override
 */
tart.ui.TabBarView.prototype.onAfterRender = function() {
    this.vm = new tart.ui.ViewManager(this.getElement());
};


/**
 * @param {goog.events.BrowserEvent} e Item touch event handler.
 */
tart.ui.TabBarView.prototype.onItemTap = function(e) {
    var activeItem = this.getChild(this.mappings.ACTIVE)[0];
    if (activeItem && activeItem == e.target) return;

    var itemIndex = [].indexOf.call(this.getChild(this.mappings.ITEMS)[0].childNodes, e.target);

    this.activateItem(itemIndex);
};


/**
 * Adds active class to item.
 * @param {number} index Index of the item to be active.
 */
tart.ui.TabBarView.prototype.activateItem = function(index) {
    if (index == -1) return;

    this.deactivateActiveItem();
    var item = this.getChild(this.mappings.ITEM)[index];
    goog.dom.classes.add(item, 'active');

    if (this.views && this.views[index])
        this.vm.setCurrentView(this.views[index], true);
};


/**
 * Activates a tab bar item with a given name. If an item for the given the name isn't found, does nothing.
 *
 * @param {string} name Name for the tab bar item.
 */
tart.ui.TabBarView.prototype.activateItemByName = function(name) {
    var child = this.getChild(this.mappings.ITEM + '[data-view=' + name + ']')[0];
    if (!child) return;

    var itemIndex = [].indexOf.call(this.getChild(this.mappings.ITEMS)[0].childNodes, child);

    this.activateItem(itemIndex);
};


/**
 * Removes active class of active item.
 */
tart.ui.TabBarView.prototype.deactivateActiveItem = function() {
    var activeItem = this.getChild(this.mappings.ACTIVE);
    if (activeItem && activeItem.length)
        goog.dom.classes.remove(activeItem[0], 'active');
};


/**
 * @return {string} Base template of NavigationBar component.
 */
tart.ui.TabBarView.prototype.templates_content = function() {
    return '<tab-bar id="' + this.id + '">' +
            '<tab-items>' +
            this.templates_items() +
            '</tab-items>' +
        '</tab-bar>';
};


/**
 * @return {string} Template for tab bar items.
 */
tart.ui.TabBarView.prototype.templates_items = function() {
    return '';
};


/**
 * @enum {string} Dom mappings.
 */
tart.ui.TabBarView.prototype.mappings = {
    ITEM: 'tab-item',
    ITEMS: 'tab-items',
    ACTIVE: '.active'
};


(function() {
    this.events = {};
    var tap = this.events[goog.events.EventType.TOUCHEND] = {};
    tap[this.mappings.ITEM] = this.onItemTap;
}).call(tart.ui.TabBarView.prototype);
