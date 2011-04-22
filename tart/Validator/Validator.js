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
goog.provide('tart.Validator');

goog.provide('tart.Validator.has');
goog.provide('tart.Validator.is');


/**
 * Checks if given text is valid email
 *
 * @param {string} text email text to be validated.
 * @return {bool} true if its valid email.
 */
tart.Validator.is.email = function(text) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(text);
};


/**
 * Checks if given text doesnt contains only white spaces but some chars or numbers
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains any char or number.
 */
tart.Validator.is.notOnlySpace = function(text) {
    var result = $.trim(text).length > 0;
    return result;
};


/**
 * Checks if given text contains only numeric chars
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains only numbers.
 */
tart.Validator.is.numeric = function(text) {
    var pattern = /^[0-9]+$/;
    return pattern.test(text);
};


/**
 * Checks if given text contains both digit and non-digit chars
 *
 * @param {string} text text to be validated.
 * @return {bool} true if text contains both digit and non-digit chars.
 */
tart.Validator.is.digitAndNonDigit = function(text) {
    var pattern = /(\d\D)|(\D\d)/;
    return pattern.test(text);
};




/**
 * Checks for strings' min length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length > value.
 */
tart.Validator.has.minLength = function(text, value) {
    return (text.length >= value);
};

/**
 * Checks for string's max length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length < value.
 */
tart.Validator.has.maxLength = function(text, value) {
    return (text.length <= value);
};


/**
 * Checks for string or number's min numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num < value.
 */
tart.Validator.has.minValue = function(num, value) {
    return num >= value;
};

/**
 * Checks for string or number's max numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num > value.
 */
tart.Validator.has.maxValue = function(num, value) {
    return num <= value;
};
