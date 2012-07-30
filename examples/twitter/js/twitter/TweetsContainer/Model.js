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

goog.provide('twitter.TweetsContainer.Model');
goog.require('tart.base.Model');
goog.require('tart.dataProxy.Xhr');
goog.require('twitter.library.Tweet');

/**
 * @extends {tart.base.Model};
 * @constructor
 */
twitter.TweetsContainer.Model = function() {
    goog.base(this);
    this.proxy = new tart.dataProxy.Xhr();

};
goog.inherits(twitter.TweetsContainer.Model, tart.base.Model);

/**
 *
 * @param {string} username
 */
twitter.TweetsContainer.Model.prototype.getTweets = function(username) {
    var that = this;
    var url = 'http://twitter.com/status/user_timeline/'+ username + '.json?count=10';
    $.ajax({
        url : url,
        dataType : 'jsonp',
        success: function(data) {
            that.dispatchEvent({
                type : twitter.TweetsContainer.Model.EventTypes.LOADED,
                tweets : that.createTweets(data)
            })
        }
    });
};

twitter.TweetsContainer.Model.prototype.createTweets = function(tweets) {
    return goog.array.map(tweets, function(tweet){
                return new twitter.library.Tweet(tweet);
           });
};


twitter.TweetsContainer.Model.EventTypes = {
    LOADED : 'loaded'
};
