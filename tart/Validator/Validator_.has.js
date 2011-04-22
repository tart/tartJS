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
goog.provide('tart.Validator_.has');


/**
 * Checks for strings' min length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length > value.
 */
tart.Validator_.has.minLength = function(text, value) {
    return (text.length >= value);
};

/**
 * Checks for string's max length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {bool} true if string's length < value.
 */
tart.Validator_.has.maxLength = function(text, value) {
    return (text.length <= value);
};


/**
 * Checks for string or number's min numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num < value.
 */
tart.Validator_.has.minValue = function(num, value) {
    return num >= value;
};

/**
 * Checks for string or number's max numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {bool} true if string's num > value.
 */
tart.Validator_.has.maxValue = function(num, value) {
    return num <= value;
};


