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

goog.provide('twitter.TweetsContainer.Controller');
goog.require('twitter.TweetsContainer.Model');
goog.require('twitter.TweetsContainer.View');
goog.require('tart.components.Controller');


/**
 * @extends {tart.components.Controller}
 * @constructor
 * @param {string=} username
 */
twitter.TweetsContainer.Controller = function(username) {
    goog.base(this);
    this.model = new twitter.TweetsContainer.Model();
    this.view = new twitter.TweetsContainer.View();
    username && this.getUserTweets(username);

    this.buildDOM();
    this.bindEvents();
};
goog.inherits(twitter.TweetsContainer.Controller, tart.components.Controller);


/**
 *
 */
twitter.TweetsContainer.Controller.prototype.bindEvents = function() {
    goog.events.listen(this.model, twitter.TweetsContainer.Model.EventTypes.LOADED, this.onLoaded, undefined, this);
};


/**
 * Takes user tweets
 * @param {string} username
 */
twitter.TweetsContainer.Controller.prototype.getUserTweets = function(username) {
    this.model.getTweets(username);
};


/**
 * onLoaded handler
 * @param {Object} e
 */
twitter.TweetsContainer.Controller.prototype.onLoaded = function(e){
    this.view.drawTweets(e.tweets);
};
