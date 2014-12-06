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

goog.provide('tart.locale');
goog.require('tart.locale.en');
goog.require('tart.locale.tr');


/**
 * The default language
 *
 * @type {string}
 * @private
 */
tart.locale.defaultLang_ = 'tr';


/**
 * Change the active dictionary
 *
 * @param {string} lang Language code.
 */
tart.locale.setLanguage = function(lang) {
    tart.locale.dictionary_ = tart.locale[lang];
};


/**
 * Return translation of the given text
 *
 * Look for a translation from goog.require()'d scripts. Replace the variables inside the translation.
 * Return the same text if no translation found.
 *
 * Pass in variables as integers inside curly brackets. {0} will be replaced by first argument and so on.
 *
 * @param  {string}    text        Text to be translated.
 * @param  {...*}      variables   Translation arguments.
 * @return {string}    Localized string.
 * @see    {goog.LOCALE}
 */
tart.locale.getLocalizedString = function(text, variables) {
    if (!tart.locale.dictionary_)
        tart.locale.dictionary_ = tart.locale[tart.locale.defaultLang_];

    var translation = tart.locale.dictionary_[text] || text;
    var args = goog.array.slice(arguments, 1);

    return translation.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};


// Set a global function for convenience.
window['__'] = tart.locale.getLocalizedString;
