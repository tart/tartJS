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


goog.provide('twitter.library.Tweet');
goog.require('twitter.library.User');

/**
 * Tweet Entity Class
 * @param data
 * @constructor
 */
twitter.library.Tweet = function(data) {
    this.id = data['id'];
    this.text = data['text'];
    this.retweeted = data['retweeted'];
    this.retweetCount = data['retweet_count'];
    this.favorited = data['favorited'];
    this.createdAt = new Date(data['created_at']).getTime();
    this.user = new twitter.library.User(data['user']);
};