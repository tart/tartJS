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

goog.provide('tart.ui.NavBarComponent');
goog.require('tart.ui.DlgComponent');



/**
 * Includes back button for back navigation.
 *
 * @constructor
 * @extends {tart.ui.DlgComponent}
 *
 * @param {tart.ui.NavBarComponent.NavBarOptions=} opt_config Config parameters to
 *        include things like title.
 */
tart.ui.NavBarComponent = function(opt_config) {
    goog.base(this);

    this.config = opt_config || {};

    this.hasBackButton = this.config.hasBackButton || this.hasBackButton;
    this.hasMenuButton = this.config.hasMenuButton || this.hasMenuButton;
};
goog.inherits(tart.ui.NavBarComponent, tart.ui.DlgComponent);


/**
* @typedef {{hasBackButton: (boolean|undefined), hasMenuButton: (boolean|undefined), title: string}}
*/
tart.ui.NavBarComponent.NavBarOptions;


/**
 * Defines whether the back button is visible.
 * @type {boolean}
 */
tart.ui.NavBarComponent.prototype.hasBackButton = false;


/**
 * @override
 */
tart.ui.NavBarComponent.prototype.templates_base = function() {
    var backButton = '',
        menuButton = '';

    if (this.hasBackButton) backButton = '<back-button style="display: block"><i class="icon-back"></i></back-button>';
    if (this.hasMenuButton) menuButton = '<menu-button><i class="icon-navigation"></i></menu-button>';

    return '<nav-bar id="' + this.getId() + '">' +
            backButton +
            menuButton +
            (this.config.title || '') +
        '</nav-bar>';
};


/**
 * Back button tap event handler.
 */
tart.ui.NavBarComponent.prototype.onBackButtonTap = function() {
    this.vm.push();
};


/**
 * Menu button tap event handler. Delegates event handling to subclasses via menuButtonHandler method.
 * @return {undefined} Returns executing menuButtonHandler if available.
 */
tart.ui.NavBarComponent.prototype.onMenuButtonTap = function() {
    if (this.menuButtonHandler) return this.menuButtonHandler();

    this.vm.toggleSidebar();
};


/**
 * @enum {string} Dom mapping.
 */
tart.ui.NavBarComponent.prototype.mappings = {
    BACK_BUTTON: 'back-button',
    MENU_BUTTON: 'menu-button'
};


(function() {
    this.events = {};
    var tap = this.events[tart.events.EventType.TAP] = {};

    tap[this.mappings.BACK_BUTTON] = this.onBackButtonTap;
    tap[this.mappings.MENU_BUTTON] = this.onMenuButtonTap;
}).call(tart.ui.NavBarComponent.prototype);
