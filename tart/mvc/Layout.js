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
tart.mvc.Layout.prototype.render = function() {
    if (this.resetLayout == true) {
        this.getBody().html(this.markup);
        this.resetLayout = false;
    }
    else {
        this.getContentArea().html(this.getContent());
    }
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
 * Returns the body element for the layout. As a default, this is the <body> element; but users are free to override
 * as they implement their own applications.
 * @return {jQueryObject} The main element the layout will be placed in.
 */
tart.mvc.Layout.prototype.getBody = function() {
    if (!this.body) {
        this.body = $('body');
    }
    return this.body;
};


/**
 * Returns the content are element where the content will be placed.
 * @return {jQueryObject} The main elmeent the contents will reside in.
 */
tart.mvc.Layout.prototype.getContentArea = function() {
    if (!this.contentArea) {
        this.contentArea = $('#content');
        if (this.contentArea.length == 0) {
            this.contentArea = this.getBody();
        }
    }

    return this.contentArea;
};
