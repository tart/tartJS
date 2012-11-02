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
 * var dummyDiv = tart.dom.createElement(subView.render());
 *
 * subView.setDOM(dummyDiv);
 * subView.get(subView.domMappings.HEADER);
 *
 *  Known issues:
 *  - Templates will be injected withing Templates object
 */

goog.provide('tart.components.View');



/**
 * View class base
 * @constructor
 */
tart.components.View = function() {
    /** @protected */
    this.domCache = {};
};


/** @type {Element} */
tart.components.View.prototype.dom;


/**
 * Render abstract method, which all subclasses should implement
 */
tart.components.View.prototype.render = function() {
    throw new Error('Not implemneted yet');
};


/**
 * Sets base DOM tree for component
 * @param {Element} dom base DOM reference for component.
 */
tart.components.View.prototype.setDOM = function(dom) {
    this.dom = dom;
};


/**
 * get current DOM reference
 *
 * @return {Element}
 */
tart.components.View.prototype.getDOM = function() {
    return this.dom;
};


/**
 * Get item, which is indicated on domMappings node
 * Cache them to domCache and return item
 *
 * @param {string} key Object key from domMappings node.
 * @return {{length: number}} found object after traverse.
 */
tart.components.View.prototype.get = function(key) {
    if (!this.dom) {
        throw new Error('DOM not set yet');
    }

    this.domCache[key] = this.domCache[key] || goog.dom.query(key, this.dom);
    return this.domCache[key];
};


/**
 * Clears the view's dom cache. This might come in handy where you find yourself with dangling HTMLElement's who are
 * not in DOM anymore but bugs you because they are in cache. This also helps with memory leaks; you should often clear
 * your cache. TODO: Make this default with a deconstructor for view
 */
tart.components.View.prototype.clearCache = function() {
    this.domCache = {};
};
