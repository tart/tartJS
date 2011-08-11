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
 * @fileoverview Builder class for dropdown lists.
 */
goog.require('tart.Builder');
goog.provide('tart.DropdownBuilder');



/**
 * DropdownBuilder class builds the DOM for DropdownList class.
 *
 * @constructor
 * @extends {tart.Builder}
 * @param {string} id id for the builder. Can be used as the id of the DOM element this builder will build.
 * @return {tart.DropdownBuilder} A builder object.
 */
tart.DropdownBuilder = function(id) {
    goog.base(this, id);
    this.owner = null;
    return this;
};
goog.inherits(tart.DropdownBuilder, tart.Builder);


/**
 * Main namespace of HTML templates for DOM structure.
 */
tart.DropdownBuilder.templates = {};


/**
 * Select menu template.
 * @param {string} id Id of the container.
 * @param {string} optionListHTML HTML of the list of options.
 * @return {string} the container HTML.
 */
tart.DropdownBuilder.templates.container = function(id, optionListHTML) {
    return '<select id="' + id + '">' + optionListHTML + '</select>';
};


/**
 * Generates a select menu element, converts it to a jQuery object and passes to this.$dom.
 *
 * @param {tart.Collection} owner Owner tart.Collection instance.
 */
tart.DropdownBuilder.prototype.buildDOM = function(owner) {
    this.owner = owner;
    var opts = [];
    for (var k = 0, z = this.owner.keys_.length; k < z; k++) {
        var option = tart.DropdownBuilder.templates.option(
            this.owner.keys_[k], this.owner.values_[k], (k == this.owner.getActiveItemIndex()));
        opts.push(option);
    }
    var finalDOM = tart.DropdownBuilder.templates.container(this.id_, opts.join(''));
    this.$dom = $(finalDOM);
    this.$dom.change(function() {
        owner.switchIndex($(this).attr('selectedIndex'));
    });
};


/**
 * Generates a single option element which ready-to-use in a HTML select menu element.
 *
 * @param {string|number} key Option value.
 * @param {string|number} value Option value.
 * @param {boolean} selected Whether the option is selected.
 * @return {string} the option HTML.
 */
tart.DropdownBuilder.templates.option = function(key, value, selected) {
    var active = (selected) ? ' selected="selected"' : '';
    return '<option value="' + key + '"' + active + '>' + value + '</option>';
};


/**
 * Sets an select option's "selected" property to True.
 *
 * @param {number} newIndex the new index of the element to set the dropdown list to.
 */
tart.DropdownBuilder.prototype.changeActiveItem = function(newIndex) {
    this.$dom.attr('selectedIndex', newIndex).change();
};


/**
 * Removes a single select option from DOM by index which given as parameter.
 *
 * @param {number} index the index of the element to remove from the list.
 */
tart.DropdownBuilder.prototype.removeOption = function(index) {
    this.$dom.children().eq(index).remove();
};


/**
 * Creates a single select option and attachs it to the current DOM.
 *
 * @param {string|number} key value for the option.
 * @param {string|number} value Text for the option.
 * @return {jQueryObject} the jQuery object that holds the DOM object of the dropdown list.
 */
tart.DropdownBuilder.prototype.addOption = function(key, value) {
    return this.$dom.append(tart.DropdownBuilder.templates.option(key, value, false));
};


/**
 * @inheritDoc
 */
tart.DropdownBuilder.prototype.removeDOM = function() {
    this.$dom.remove();
};
