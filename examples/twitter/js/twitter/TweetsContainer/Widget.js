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

goog.provide('twitter.TweetsContainer.Widget');
goog.require('twitter.TweetsContainer.Controller');
goog.require('tart.components.Widget');


/**
 * TweetContainer Widget Class
 * @constructor
 * @extends {tart.components.Widget}
 * @param {string=} username
 */
twitter.TweetsContainer.Widget = function(username) {
    goog.base(this);
    this.controller = new twitter.TweetsContainer.Controller(username);
};

goog.inherits(twitter.TweetsContainer.Widget, tart.components.Widget);