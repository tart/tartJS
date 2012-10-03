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
 * @fileoverview This component handles the password retreival process. It takes an optional value defining the
 * minimum length of the password string. If the minimum length is not being acquired, than it returns 'undefined'
 * after usage of 'getPassword' function.
 * The display Toggler is for toggling the displaying mode. When the related variable 'displayPassword' is false,
 * the input area conceals the string entered and displays '*' chars instead.
 */

goog.provide('tart.ui.input.PasswordComponent');
goog.require('tart.ui.DlgComponent');


/**
 * @constructor
 * @extends {tart.ui.DlgComponent}
 * @param {Object=} options
 */
tart.ui.input.PasswordComponent = function(options) {
    goog.base(this);

    this.displayPassword = false;
    this.minLength = options && options['minLength'] || 6;
};
goog.inherits(tart.ui.input.PasswordComponent, tart.ui.DlgComponent);


/**
 * Returns the password as a string if it meets the requirements.
 * @return {string | undefined}
 */
tart.ui.input.PasswordComponent.prototype.getPassword = function() {
    var passwordArea = this.getChild('input')[0];
    if(passwordArea.value.length >= this.minLength)
        return passwordArea.value;
    else
        return undefined;
};


/**
 * Toggles the input area's displaying mode in order to conceal or reveal the text entered.
 *
 */
tart.ui.input.PasswordComponent.prototype.toggleDisplay = function() {
    this.displayPassword = !this.displayPassword;
    var passwordArea = this.getChild('input')[0];
    if(this.displayPassword)
        passwordArea.type = 'text';
    else
        passwordArea.type = 'password';
};


/**
 * Constructs the base template.
 * @return {string} base template
 */
tart.ui.input.PasswordComponent.prototype.templates_base = function() {
    return '<span id="' + this.id + '">' +
        '<input name="passwordInput" id="passwordInputArea" tabindex="120" type="password"' +
        'class="textForm passwordInput" minlength="6" value=""/>' +
        '<span class="visibilityToggler">O</span>' +
        '</span>';
};

/**
 * Resets the text area, date string and formatted date string parameters.
 */
tart.ui.input.PasswordComponent.prototype.resetInputArea = function() {
    var passwordArea = this.getChild('passwordInput')[0];
    passwordArea.value = '';
};


/**
 * PasswordComponent domMappings.
 * @type {Object}
 */
tart.ui.input.PasswordComponent.prototype.mappings = {
    TOGGLER: '.visibilityToggler'
};


(function() {
    var proto = tart.ui.input.PasswordComponent.prototype;
    proto.events = {};
    var toggleVisibility = proto.events[goog.events.EventType.CLICK] = {};
    toggleVisibility[proto.mappings.TOGGLER] = proto.toggleDisplay;
})();
