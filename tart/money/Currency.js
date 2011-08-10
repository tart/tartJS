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

goog.provide('tart.Currency');



/**
 * Tart Currency class for defining prefix, suffix, separator of tart.Money object.
 * @constructor
 */
tart.Currency = function() {};


/**
 * Prefix Value of Currency.
 */
tart.Currency.prototype.prefix = '';


/**
 * Suffix Value of Currency.
 */
tart.Currency.prototype.suffix = '';


/**
 * Separator Value of Currency.
 */
tart.Currency.prototype.separator = '';


/**
 * Converts Money to currency type.
 * @param {tart.Money} money Retrieves money object from tart.Money.
 * @return {string} Returns Money with currency type.
 */
tart.Currency.prototype.convert = function(money) {
    var prefix = '';
    var suffix = '';

    //Adds space after prefix.
    if (this.prefix) {
        prefix = this.prefix + ' ';
    }

    //Adds space before suffix.
    if (this.suffix) {
        suffix = ' ' + this.suffix;
    }

    return prefix + money.getCapital() + this.separator + money.getFraction() + suffix;
};


/**
 * Gets Currency Type. Like TL, USD etc.
 * @return {string} Returns currency Type.
 */
tart.Currency.prototype.getType = function() {
    return this.prefix || this.suffix;
};
