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
 * @fileoverview This file provides utility functions and classes for dates.
 */

goog.require('goog.date.DateTime');
goog.require('goog.math');
goog.provide('tart.date');


/**
 * Returns a random time.
 * @return {Date} Random time.
 */
tart.date.randomTime = function() {
    return new Date(goog.math.randomInt(2147483648000));
};


/**
 * Returns a random time between two given times.
 * @param {(goog.date.DateLike|goog.date.DateTime)} Date1 A boundary time.
 * @param {(goog.date.DateLike|goog.date.DateTime)} Date2 Another boundary time.
 * @return {Date} random time.
 */
tart.date.randomTimeInBetween = function(Date1, Date2) {
    var smaller = Date1, bigger = Date2;
    if (Date1 > Date2) {
        smaller = Date2;
        bigger = Date1;
    }
    return new Date(goog.math.uniformRandom(smaller.getTime(), bigger.getTime()));
};


/**
 * Returns a random time between now and a given interval.
 * @param {goog.date.Interval} interval Any interval of any length. Can be both positive or negative.
 * @return {Date} Random time.
 */
tart.date.randomTimeInInterval = function(interval) {
    var now = new goog.date.DateTime(),
        then = now.clone();
    then.add(interval);

    return tart.date.randomTimeInBetween(now, then);
};
