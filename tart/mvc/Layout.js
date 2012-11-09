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
 * @fileoverview The instances of this class will hold the root HTML markups for the MVC application.
 */
goog.provide('tart.mvc.Layout');
goog.require('tart.mvc.View');



/**
 * Layout class.
 * @constructor
 * @param {tart.mvc.View} view View instance that will be rendered in this layout.
 */
tart.mvc.Layout = function(view) {
    this.view = view;
};


/**
 * Sets the content of the layout. This will generally be the output of a view script associated with an action.
 * @param {string} content Output of a view script.
 */
tart.mvc.Layout.prototype.setContent = function(content) {
    this.content_ = content;
};


/**
 * @return {string} Current content of the layout.
 */
tart.mvc.Layout.prototype.getContent = function() {
    return this.content_;
};


/**
 * Renders the layout.
 */
tart.mvc.Layout.prototype.render = function(body) {
    if (this.resetLayout == true) {
        body.innerHTML = this.markup;
        this.resetLayout = false;
        goog.typeOf(this.onRender) == 'function' && this.onRender();
    }
    else
        this.getContentArea(body).innerHTML = this.getContent();
};


/**
 * If resetLayout is true, the layout will be redrawn upon next action call whatever the circumstance.
 */
tart.mvc.Layout.prototype.resetLayout = false;


/** @nosideeffects */
tart.mvc.Layout.prototype.body;


/** @nosideeffects */
tart.mvc.Layout.prototype.contentArea;


/** @nosideeffects */
tart.mvc.Layout.prototype.view;


/**
 * Default markup of a layout.
 */
tart.mvc.Layout.prototype.markup = '';


/**
 * Default content of a layout.
 * @private
 */
tart.mvc.Layout.prototype.content_ = '';


/**
 * Returns the content are element where the content will be placed.
 * @param {Element} body
 * @return {Element} The main element the contents will reside in.
 */
tart.mvc.Layout.prototype.getContentArea = function(body) {
    if (!this.contentArea) {
        this.contentArea = goog.dom.query('[id="content"]', body);
        if (this.contentArea.length == 0) {
            this.contentArea = body;
        }
    }

    return this.contentArea;
};


/**
 * @nosideeffects
 */
tart.mvc.Layout.prototype.onRender;


/**
 * Deconstructor method of this layout. Developers should override this property in an action function like;
 *
 * this.deconstructor = function() {}
 *
 * and should deallocate the memory they have used in this layout. This is also helpful for resolving issues that arise
 * because of tartMVC's statefullness; such as removed but dangling DOM nodes, etc.
 */
tart.mvc.Layout.prototype.deconstructor = null;
