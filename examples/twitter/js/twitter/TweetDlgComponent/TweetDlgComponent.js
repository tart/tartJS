// Copyright 2012 Sezgi Şensöz. All Rights Reserved.
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

goog.provide('twitter.TweetDlgComponent');
goog.require('tart.ui.DlgComponent');


/**
 * @extends {tart.ui.DlgComponent}
 * @param {twitter.library.Tweet} tweet
 * @constructor
 */

twitter.TweetDlgComponent = function(tweet) {
    this.model = new twitter.TweetComponentModel(tweet);
    goog.base(this);
};

goog.inherits(twitter.TweetDlgComponent, tart.ui.DlgComponent);


/**
 * TweetDlgComponent base template.
 * @return {string}
 */
twitter.TweetDlgComponent.prototype.templates_base = function() {
    debugger;
    return '<div id="'+ this.id +'" class="TwitterDlg tweet">' +
                '<span class="text">' + this.model.tweet.text +'</span> ' +
                '<span class="author"> - ' + this.model.tweet.user.name + '</span>' +
            '</div>';
};


/**
 * Click Handler
 */
twitter.TweetDlgComponent.prototype.textClick = function() {
    console.log('clicked tweet which component id is', this.id);
};


/**
 * DOM mappings of TweetDlgComponent
 * @type {Object}
 */
twitter.TweetDlgComponent.prototype.mappings = {
    TEXT : '.text'
};


(function() {
    var proto = twitter.TweetDlgComponent.prototype;
    proto.events = {};
    var click = proto.events[goog.events.EventType.CLICK] = {};
    click[proto.mappings.TEXT] = proto.textClick;
})();