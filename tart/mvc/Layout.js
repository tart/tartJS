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
goog.provide('tart.mvc.Layout');
goog.require('tart.mvc.View');
/**
 * @constructor
 * @extends {tart.mvc.View}
 */
tart.mvc.Layout = function() {
    goog.base(this);
};
goog.inherits(tart.mvc.Layout, tart.mvc.View);

tart.mvc.Layout.prototype.setContent = function(content) {
    this.content_ = content;
};

tart.mvc.Layout.prototype.getContent = function() {
    return this.content_;
};

tart.mvc.Layout.prototype.render = function() {
    if (this.resetLayout == true){
        this.getBody().html(this.markup);
        this.resetLayout = false;
    }
    else {
        this.getContentArea().html(this.getContent());
    }
}

tart.mvc.Layout.prototype.resetLayout = false;
/** @nosideeffects */
tart.mvc.Layout.prototype.body;
/** @nosideeffects */
tart.mvc.Layout.prototype.contentArea;
tart.mvc.Layout.prototype.markup = '';
tart.mvc.Layout.prototype.content_ = '';

tart.mvc.Layout.prototype.getBody = function() {
    if (!this.body) {
        this.body = $('body');
    }
    return this.body;
}

tart.mvc.Layout.prototype.getContentArea = function() {
    if (!this.contentArea) {
        this.contentArea = $('#content');
    }
    return this.contentArea;
}