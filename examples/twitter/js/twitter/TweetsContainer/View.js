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

goog.provide('twitter.TweetsContainer.View');
goog.require('tart.components.View');
goog.require('twitter.TweetsContainer.Template');
goog.require('twitter.TweetComponent');
goog.require('twitter.TweetDlgComponent');
goog.require('tart.dom');


/**
 * TweetsContainer View Class constructor.
 * @extends {tart.components.View}
 * @constructor
 */
twitter.TweetsContainer.View = function() {
    goog.base(this);
    this.template = new twitter.TweetsContainer.Template();
};
goog.inherits(twitter.TweetsContainer.View, tart.components.View);


/**
 * Return base template of tweetsContainer widget.
 * @return {string}
 */
twitter.TweetsContainer.View.prototype.render = function() {
    return this.template.templates_base();
};


/**
 * Draw tweets call two different ui component methodology. TweetDlgComponent and TweetComponent.
 * @param {Array.<twitter.library.Tweet>} tweets Tweet Array.
 */
twitter.TweetsContainer.View.prototype.drawTweets = function(tweets) {
    this.appendDlgComponent(tweets);
    this.appendComponent(tweets);
};


/**
 * Draw tweets in TweetDlgComponent
 * @param {Array.<twitter.library.Tweet>} tweets Tweet Array.
 */
twitter.TweetsContainer.View.prototype.appendDlgComponent = function(tweets) {
    var dlgComponent = goog.dom.getElementByClass(this.template.domMappings.TWEET_DLG_COMPONENT);
    goog.array.forEach(tweets, function(tweet){
        var tweetDlgComponent = new twitter.TweetDlgComponent(tweet);
        $(dlgComponent).append(tweetDlgComponent.getPlaceholder());
    });
};


/**
 * Draw tweets in TweetDlgComponent
 * @param {Array.<twitter.library.Tweet>} tweets Tweet Array.
 */
twitter.TweetsContainer.View.prototype.appendComponent = function(tweets) {
    var component = goog.dom.getElementByClass(this.template.domMappings.TWEET_COMPONENT);
    goog.array.forEach(tweets, function(tweet){
        var tweetCom = new twitter.TweetComponent(tweet);
        goog.dom.appendChild(component, tweetCom.getElement());
    });
};