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
 * @fileoverview tartJS error library and utility functions.
 */

goog.provide('tart.Err');
goog.require('tart');


/**
 * Returns a new Error object which contains a custom error name and message.
 *
 * @param {string=} message Message to set as the error message.
 * @param {string=} name Optional error name.
 * @extends {Error}
 * @constructor
  */

tart.Err = function(message, name) {
    this.name = name || 'Error';
    this.message = message || '';
};
goog.inherits(tart.Err, Error);


/**
 * Returns a new Error object which contains a implementation error message.
 *
 * @param {string} methodName Name of the unimplemented method. This will be set as the error message.
 * @throws {Error} Error object containing the details.
 */
tart.Err.unimplementedMethod = function(methodName) {
    throw new tart.Err('Wrong implementation',
        'You should implement your own ' + methodName + ' method in child class which you want to use.');
};
