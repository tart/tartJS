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

/**
 * @fileoverview This file provides localStorage extensions that are essential to Tart. Basically, the localStorage
 * only allows you to store strings. tart.LocalStorage can store any type of object via serialization.
 */


goog.provide('tart.LocalStorage');


/**
 * Sets a key value pair to the local storage.
 * @param {string} key Key of the pair to be stored.
 * @param {*} value Value of the pair to be stored. The value will be stored serialized.
 */
tart.LocalStorage.setItem = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};


/**
 * Fetches an item from the storage.
 * @param {string} key Key of the value to be fetched from the storage.
 * @return {*} Value of the item.
 */
tart.LocalStorage.getItem = function(key) {
    return JSON.parse(localStorage.getItem(key));
};
