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



/**
 * @fileoverview This component handles the password entrance and display mode toggling of password string.
 * It takes an optional value defining the minimum length requirement of the password string. If the minimum length
 * requirement is not being meet, it returns an empty string. The display toggler works like a switch for displaying
 * mode. When the value of related variable 'displayPassword' is equal to false, the input area conceals the string
 * entered and displays '*'
 * chars instead. Otherwise, the password string is being displayed as it is.
 */



goog.provide('tart.ui.input.RevealingPassword');
goog.require('tart.ui.DlgComponent');



/**
 * @constructor
 * @extends {tart.ui.DlgComponent}
 * @param {{minLength: number}=} opt_options
 */
tart.ui.input.RevealingPassword = function(opt_options) {
    goog.base(this);

    this.displayPassword = false;
    this.minLength = opt_options && opt_options.minLength || 6;
};
goog.inherits(tart.ui.input.RevealingPassword, tart.ui.DlgComponent);


/**
 * Returns the password as a string if it meets the requirements, otherwise, it returns an empty string.
 * @return {string} returning value.
 */
tart.ui.input.RevealingPassword.prototype.getPassword = function() {
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    if (passwordArea.value.length >= this.minLength)
        return passwordArea.value;
    else
        return '';
};


/**
 * Toggles the input area's displaying mode in order to conceal or reveal the text entered.
 *
 */
tart.ui.input.RevealingPassword.prototype.toggleDisplay = function() {
    this.displayPassword = !this.displayPassword;
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    if (this.displayPassword)
        passwordArea.type = 'text';
    else
        passwordArea.type = 'password';
};


/**
 * Constructs the base template.
 * @return {string} base template.
 */
tart.ui.input.RevealingPassword.prototype.templates_base = function() {
    return '<span id="' + this.id + '">' +
        '<input name="passwordInput" id="passwordInputArea"tabindex="120" type="password"' +
        'class="textForm passwordInput tInput" minlength="6" value=""/>' +
        '<span class="visibilityToggler"></span>' +
        '</span>';
};


/**
 * Resets the password text area.
 */
tart.ui.input.RevealingPassword.prototype.resetInputArea = function() {
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    passwordArea.value = '';
};


/**
 * RevealingPassword domMappings.
 * @enum {string}
 */
tart.ui.input.RevealingPassword.prototype.mappings = {
    INPUT: '.passwordInput',
    TOGGLER: '.visibilityToggler'
};


(function() {
    var proto = tart.ui.input.RevealingPassword.prototype;
    proto.events = {};
    var toggleVisibility = proto.events[goog.events.EventType.CLICK] = {};
    toggleVisibility[proto.mappings.TOGGLER] = proto.toggleDisplay;
})();
