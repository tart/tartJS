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



goog.provide('twitter.TweetComponent');
goog.require('tart.ui.Component');
goog.require('tart.dom');
goog.require('twitter.library.Tweet');
goog.require('twitter.TweetComponentModel');

/**
 * @extends {tart.ui.Component}
 * @param {twitter.library.Tweet} tweet
 * @constructor
 */
twitter.TweetComponent = function(tweet) {
    this.model = new twitter.TweetComponentModel(tweet);
    goog.base(this);
};

goog.inherits(twitter.TweetComponent, tart.ui.Component);


twitter.TweetComponent.prototype.createElements = function() {
    this.tweet = tart.dom.createElement(this.templates_tweet());
    this.element.appendChild(this.tweet);
};


/**
 * @override
 */
twitter.TweetComponent.prototype.bindDomEvents = function() {
    goog.events.listen(this.tweet, goog.events.EventType.CLICK, this.clickHandler, undefined, this);
};


/**
 * @override
 */
twitter.TweetComponent.prototype.bindModelEvents = function() {

};


/**
 * Click handler
 */
twitter.TweetComponent.prototype.clickHandler = function() {
   console.log('clicked tweet');
};

/**
 *
 * @return {string}
 */
twitter.TweetComponent.prototype.templates_tweet = function() {
    return '<div class="tweet">' +
                this.model.tweet.text +
            '</div>'
};