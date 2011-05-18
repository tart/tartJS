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
goog.provide("tart.TartBox");

/**
 * @param {string|jQuery} body 
 */
tart.TartBox.init = function (title, body, type) {
    tart.TartBox.title = title;
    tart.TartBox.body = body;
    tart.TartBox.type = type;
};

tart.TartBox.setBodyFromEl = function (el) {
    if (!el || !el.jquery || el.length == 0) {
        throw new Error("Element not exists");
    }

    tart.TartBox.body = el.html();
};
