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

goog.provide('twitter.TweetsContainer.Template');


twitter.TweetsContainer.Template = function() {

};

/**
 * Keeps TweetsContainer domMappings
 * @type {Object}
 */
twitter.TweetsContainer.Template.prototype.domMappings = {
    TWEET_DLG_COMPONENT : 'tweetDlgComponent',
    TWEET_COMPONENT : 'tweetComponent'
};


/**
 * Markup for tweetsContainer widget.
 * @return {string}
 */
twitter.TweetsContainer.Template.prototype.templates_base = function() {
    return '<div class="tweetContainer">' +
                '<div class="tweetDlgComponent component">' +
                    '<h2> TweetDlgComponent Elements (tart.ui.DlgComponent) </h2>' +
                '</div>' +
                '<div class="tweetComponent component">' +
                    '<h2> TweetComponent Elements (tart.ui.Component) </h2>' +
                '</div>' +

            '</div>';
};