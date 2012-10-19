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
 * @fileoverview This component displays the date entered in a predefined date format and returns that date's value in
 * milliseconds format when asked. If the entered value is not suitable, getDateTime function returns 'NaN' value.
 */

goog.provide('tart.ui.input.DateComponent');
goog.require('goog.events.EventTarget');
goog.require('tart.ui.DlgComponent');



/**
 * Date component.
 * @extends {tart.ui.DlgComponent}
 * @constructor
 */
tart.ui.input.DateComponent = function() {
    goog.base(this);
};
goog.inherits(tart.ui.input.DateComponent, tart.ui.DlgComponent);


/**
 * Returns the date in Date format.
 * @return {Date} date in Date format.
 */
tart.ui.input.DateComponent.prototype.getDateTime = function() {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    var dateInput = dateInputArea.value;
    var formattedDateString = dateInput.slice(3, 5) + '/' + this.dateString.slice(0, 2) + '/' +
    dateInput.slice(5, dateInput.length);
    return new Date(formattedDateString);
};


/**
 * Reformats the text entered, in order to display it in a visual style adjusted with predefined style.
 *
 * @param {goog.events.BrowserEvent} e keyPress Event.
 */
tart.ui.input.DateComponent.prototype.onKeyPress = function(e) {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    var textToChange = dateInputArea.value;
    textToChange = textToChange.replace(/^(\d{1,1}\/)/, '0$1');
    textToChange = textToChange.replace(/(\/)(\d{1,1})(\/)/, '$10$2');
    textToChange = textToChange.replace(/[^\d]/g, '');
    textToChange = textToChange.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,})/g, '$1/$2/$3');
    textToChange = textToChange.replace(/\/{0,}$/, '');
    dateInputArea.value = textToChange;
};


/**
 * Cleans the text area if no text entrance was made.
 */
tart.ui.input.DateComponent.prototype.onFocusIn = function() {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    if (dateInputArea.value == 'GG/AA/YYYY')
        dateInputArea.value = '';
};


/**
 * Dispatches an event after focusOut action which carries the date in milliseconds.
 */
tart.ui.input.DateComponent.prototype.onFocusOut = function() {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    if (dateInputArea.value == '')
        this.resetInputArea();
};


/**
 * Resets the text area, date string and formatted date string parameters.
 */
tart.ui.input.DateComponent.prototype.resetInputArea = function() {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    dateInputArea.value = 'GG/AA/YYYY';
};


/**
 * Constructs the base template
 * @return {string} base template.
 */
tart.ui.input.DateComponent.prototype.templates_base = function() {
    return '<span id="' + this.id + '">' +
        '<input name="dateInput" id="dateInputArea" type="text"' +
        'class="textForm numberOnly dateInput" minlength="1" maxlength="10" value="GG/AA/YYYY"/>' +
        '</span>';
};


/**
 * DateComponent domMappings.
 * @enum {string}
 */
tart.ui.input.DateComponent.prototype.mappings = {
    INPUT: '.dateInput'
};


(function() {
    var proto = tart.ui.input.DateComponent.prototype;
    proto.events = {};
    var focusIn = proto.events[goog.events.EventType.FOCUSIN] = {};
    focusIn[proto.mappings.INPUT] = proto.onFocusIn;
    var focusOut = proto.events[goog.events.EventType.FOCUSOUT] = {};
    focusOut[proto.mappings.INPUT] = proto.onFocusOut;
    var keyup = proto.events[goog.events.EventType.KEYUP] = {};
    keyup[proto.mappings.INPUT] = proto.onKeyPress;
})();

