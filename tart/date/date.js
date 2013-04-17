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
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.math');
goog.provide('tart.date');
goog.provide('tart.date.Date');



/**
 * @constructor
 * @extends {goog.date.Date}
 */
tart.date.Date = function() {
    goog.base(this);
};
goog.inherits(tart.date.Date, goog.date.Date);


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


(function() {
    var date = new goog.date.DateTime();
    var formatterCache = {};
    var rvCache = {};
    /*
     * Formats milliseconds by a given pattern.
     *
     * Usage: tart.date.formatMilliseconds(1320676229977, 'd MMMM, EEEE') returns "7 Kasım, Pazartesi".
     * If you want to format by a specific timeZone, pass timeZone difference as minute,
     * e.g. for GMT+2 pass goog.i18n.TimeZone.createTimeZone(-120).
     * For further information about patterns, please check out datetimeformat.js under goog/i18n.
     *
     * @param {!number} milliseconds Milliseconds that will be formatted.
     * @param {!string} pattern Format pattern.
     * @param {goog.i18n.TimeZone=} timeZone Timezone that will be used when formatting.
     * @return {string} Formatted date.
     */
    tart.date.formatMilliseconds = function(milliseconds, pattern, timeZone) {
        date.setTime(milliseconds);
        var formatter = formatterCache[pattern];
        if (!formatter) formatter = formatterCache[pattern] = new goog.i18n.DateTimeFormat(pattern);

        var cacheKey = milliseconds + pattern + timeZone.getTimeZoneId();
        var rv = rvCache[cacheKey];
        if (!rv) rv = rvCache[cacheKey] = formatter.format(date, timeZone);

        return rv;
    };
})();


/**
 * Get day from given date.
 *
 * @param {Date} date Date.
 * @return {Date} Day.
 */
tart.date.getDay = function(date) {
    var timestamp = date.getTime();
    return new Date(tart.date.getDayTimestamp(timestamp));
};


/**
 * Get day timestamp from given timestamp.
 * Subtracts the modulo of a full day time from given timestamp.
 *
 * @param {number} timestamp Timestamp.
 * @return {number} Day.
 */
tart.date.getDayTimestamp = function(timestamp) {
    return timestamp - (timestamp % (1000 * 60 * 60 * 24));
};
