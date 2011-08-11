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
//
// HELP
// -----------------------------
// var currency = new tart.CurrencyUSD(); //You can add other currencies as a new file to tart/money/CurrencyNAME.js.
// var money = new tart.Money(12.500, currency); //Default value is tart.CurrencyTL (leave blank 2nd param).
//
// money.toCurrency(); //Gets Full Currency Like USD 12.50
// money.getCapital(); //Gets Only Capital Of Money Like 12
// money.getFraction(); //Gets Only Fraction Of Money Line 50
// money.toArray(); //Gets As Array Like [12, 50]
// money.getCurrency().getType(); //Gets Type Of Money Like USD

goog.provide('tart.Money');

goog.require('tart.CurrencyTL');
goog.require('tart.CurrencyUSD');



/**
 * Tart Money Class for defining money type.
 * @constructor
 * @param {number} amount Retrieves Amount for convert to currency.
 * @param {tart.Currency=} currency Currency type.
 */
tart.Money = function(amount, currency) {
    /** @private */
    this.amount_ = amount;
    this.currency_ = currency || new tart.CurrencyTL();
};


/**
 * Converts Money and Currency to Array.
 * @return {Array} Returns capital and fraction as array.
 */
tart.Money.prototype.toArray = function() {
    return [this.getCapital(), this.getFraction()];
};


/**
 * Gets Capital of money.
 * @return {string} Returns capital of money.
 */
tart.Money.prototype.getCapital = function() {
    return parseInt(this.amount_, 10).toString();
};


/**
 * @return {string} Returns fraction of money.
 */
tart.Money.prototype.getFraction = function() {
    var result = parseInt(((this.amount_).toFixed(2) - this.getCapital()) * 100, 10).toString();

    if (result == '0') {
        result = result + '0'; // converts to "00" end of fraction which is finishes with "0".
    }

    return result;
};


/**
 * Gets amount of Money.
 * @return {number} Returns full amount of money.
 */
tart.Money.prototype.getAmount = function() {
    return this.amount_;
};


/**
 * Gets Value of Money.
 * @return {number} Returns full amount of money.
 */
tart.Money.prototype.valueOf = function() {
    return this.getAmount();
};


/**
 * Gets object of currency.
 * @return {Object} Returns object of tart.Currency.
 */
tart.Money.prototype.getCurrency = function() {
    return this.currency_;
};


/**
 * Gets tart.Currency.convert Method.
 * @return {string} Returns converted currency.
 */
tart.Money.prototype.toCurrency = function() {
    return this.currency_.convert(this);
};
