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

    this.dateString = '';
    this.formattedDateString = '';

};
goog.inherits(tart.ui.input.DateComponent, tart.ui.DlgComponent);


/**
 * Returns the date in milliseconds format.
 * @return {number} time in milliseconds.
 */
tart.ui.input.DateComponent.prototype.getDateTime = function() {
    var formattedDateString = this.dateString.slice(2, 4) + '/' + this.dateString.slice(0, 2) + '/' +
        this.dateString.slice(4, this.dateString.length);
    var date = new Date(formattedDateString);
    return date.getTime();
};


/**
 * Checks the keyCode carried in with the keyPress event and uses it if it's the code of 'return' (13), 'backspace' (8),
 * 'slash' (191) or any number (48 < keyCode < 57).
 *
 * @param {goog.events.BrowserEvent} e keyPress Event.
 */
tart.ui.input.DateComponent.prototype.onKeyPress = function(e) {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    if (e.keyCode == 8 || e.keyCode == 13 || e.keyCode == 191 || (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105)) {
        var dateInputAreaText = '';
        var dateString = this.dateString;
        if (e.keyCode == 8 && dateString.length > 0) {
            dateString = dateString.slice(0, -1);
            dateInputAreaText = dateString;
            this.dateString = dateString;
        }

        if (e.keyCode == 13)
            return;

        if (e.keyCode != 8 && e.keyCode != 13 && ((e.keyCode >= 48 && e.keyCode <= 57) ||
            (e.keyCode >= 96 && e.keyCode <= 105)) && dateString.length < 8) {
            dateString += e.keyCode % 48;
        }

        if (dateString.length <= 2) {
            if (dateString.length == 1 && e.keyCode == 191) {
                dateString = '0' + dateString;
                dateInputAreaText = dateString.slice(0, dateString.length) + '/';
            }
            else {
                dateInputAreaText = dateString.slice(0, dateString.length);
                if ((dateString.length == 2 && e.keyCode == 191) ||
                    (dateString.length == 0 && e.keyCode != 191 && e.keyCode != 8))
                    dateInputAreaText += '/';
            }
            this.dateString = dateString;
        }
        else {
            if (dateString.length > 2 && dateString.length <= 4) {
                dateInputAreaText = dateString.slice(0, 2) + '/';
                if (e.keyCode == 191) {
                    if (dateString.length == 3)
                        dateString = dateString.slice(0, 2) + '0' + dateString.slice(2, 3);
                    dateInputAreaText += dateString.slice(2, 4) + '/';
                }
                else
                    dateInputAreaText += dateString.slice(2, dateString.length);
                this.dateString = dateString;
            }
            else if (dateString.length > 4) {
                dateInputAreaText = dateString.slice(0, 2) + '/' + dateString.slice(2, 4) + '/' +
                    dateString.slice(4, dateString.length);
                this.dateString = dateString;
            }
        }

        if (dateInputAreaText == '') {
            this.formattedDateString = '';
        }
        else {
            this.formattedDateString = dateInputAreaText;
            dateInputArea.value = dateInputAreaText;
        }
    }
    else
        dateInputArea.value = this.formattedDateString;
};


/**
 * Dispatches an event in case of focusing into the component and cleans the text area if no text entrance was made.
 */
tart.ui.input.DateComponent.prototype.onFocusIn = function() {
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    if (this.dateString == '')
        dateInputArea.value = '';
};


/**
 * Dispatches an event after focusOut action which carries the date in milisecs.
 */
tart.ui.input.DateComponent.prototype.onFocusOut = function() {
    if (this.dateString == '')
        this.resetInputArea();
};


/**
 * Resets the text area, date string and formatted date string parameters.
 */
tart.ui.input.DateComponent.prototype.resetInputArea = function() {
    this.dateString = '';
    var dateInputArea = this.getChild(this.mappings.INPUT)[0];
    dateInputArea.value = 'GG/AA/YYYY';
    this.formattedDateString = '';
};


/**
 * Constructs the base template
 * @return {string} base template.
 */
tart.ui.input.DateComponent.prototype.templates_base = function() {
    return '<span id="' + this.id + '">' +
        '<input name="dateInput" id="dateInputArea" type="text"' +
        'class="textForm numberOnly dateInput" minlength="1" maxlength="8" value="GG/AA/YYYY"/>' +
        '</span>';
};


/**
 * DateComponent domMappings.
 * @type {Object}
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

