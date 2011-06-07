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
 * @fileoverview tart.components.View is a base class for all components View's.
 *
 * Example usage:
 *
 * SubViewClass = function() {
 *     goog.base(this);
 *
 *     this.domMappings = {
 *         HEADER: 'h1'
 *     };
 * };
 * goog.inherits(SubViewClass, tart.components.View);
 *
 * SubViewClass.prototype.templates_header = function(text) {
 *     text = text || '';
 *     return '<h1>' + text + '</h1>';
 * };
 *
 * SubViewClass.prototype.render = function() {
 *    return this.templates_header();
 * };
 *
 * var subView = new SubViewClass();
 *
 * var dummyDiv = $('<div>').append(subView.render());
 *
 * subView.setDOM(dummyDiv);
 * subView.get(subView.domMappings.HEADER);
 *
 *  Known issues:
 *  - Templates will be injected withing Templates object
 *  - jQuery dependency should be removed
 */

goog.provide('tart.components.View');

/**
 * View class base
 * @constructor
 */
tart.components.View = function () {
    /** @private */
    this.$dom_ = undefined;

    /** @private */
    this.$domCache_ = {};

    this.domMappings = {};
};

/**
 * Render abstract method, which all subclasses should implement
 */
tart.components.View.prototype.render = goog.abstractMethod;


/**
 * Sets base DOM tree for component
 * @param {object} dom base DOM reference for component.
 */
tart.components.View.prototype.setDOM = function (dom) {
    this.$dom_ = dom;
};


/**
 * Get item, which is indicated on domMappings node
 * Cache them to $domCache_ and return item
 *
 * @param {string} key Object key from domMappings node.
 * @return {object} found object after traverse.
 */
tart.components.View.prototype.get = function (key) {
    //TODO: make it owrk with closure
    //TODO: find or filter ???
    if (!this.$dom_) {
        throw new Error('DOM not set yet');
    }
    this.$domCache_[key] = this.$domCache_[key] || this.$dom_.find(key);
    return this.$domCache_[key];
};
