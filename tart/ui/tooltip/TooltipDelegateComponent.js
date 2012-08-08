// Copyright 2012 Tart. All Rights Reserved.
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
//
// @author A. Emre OZTUNC <emre.oztunc@tart.com.tr>


/**
 * @fileoverview
 */

goog.provide('tart.ui.TooltipDelegateComponent');
goog.require('tart.ui.DlgComponent');
goog.require('tart.ui.TooltipComponentManager');
goog.require('tart.dom');

/**
 *
 * @param {string} selector The selector needed for registration to TooltipComponentManager.
 * @param {tart.ui.TooltipComponentManager} tooltipComponentManager selector The selector needed for registration to TooltipComponentManager.
 * @constructor
 */
tart.ui.TooltipDelegateComponent = function(selector, tooltipComponentManager) {
    goog.base(this);
    this.selector = selector && selector;
//    tuttur.Registry.get('tooltipComponentManager').set(this);
    tooltipComponentManager.set(this);
};
goog.inherits(tart.ui.TooltipDelegateComponent, tart.ui.DlgComponent);


/**
 *
 */
tart.ui.TooltipDelegateComponent.prototype.onLoaded = function() {

};


/**
 * Returns base template of the component.
 * @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.getPlaceholder = function() {
    console.log("got place holder.");
    return(this.templates_base());
};


/**
 * Renders the content of the component.
 */
tart.ui.TooltipDelegateComponent.prototype.render = function() {
    console.log("rendered.");
};


/**
 * Maps related element selectors.
 *
 */
tart.ui.TooltipDelegateComponent.prototype.mappings = {
    FIRST_CLASS : '',
    SECOND_CLASS : ''
};


/**
 *  Returns the base template of the tooltip as string.
 *  @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '" class="tTip top">' +
        this.templates_wrapper() +
        this.templates_content() +
        this.templates_cap() +
        '</div>';
};


/**
 * Returns the wrapper of the tooltip component which wraps the content area.
 * @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.templates_wrapper = function() {
    return '<div id="' + tart.getUid() + '" class="wrapper"></div>';
};


/**
 * Returns the content area of the tooltip component.
 * @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.templates_content = function() {
    return '<div id="' + tart.getUid() + '" class="content">' + this.id + '</div>';
};


/**
 *  Returns the cap of tooltip component.
 *  @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.templates_cap = function() {
    return '<div class="cap"></div>';
};


/**
 *
 *  @return {string}
 */
tart.ui.TooltipDelegateComponent.prototype.templates_spare = function() {

};

/**
 *
 */
tart.ui.TooltipDelegateComponent.prototype.disposeInternal = function() {
    tuttur.Registry.get('tooltipComponentManager').remove(this);
};

