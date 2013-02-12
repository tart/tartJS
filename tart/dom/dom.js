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

/**
 * @fileoverview This file provides commonly used DOM functions.
 */

goog.provide('tart.dom');



(function() {
    var tempDiv = document.createElement('div');

    /**
     * Stripped down version of goog.dom.htmlToDocumentFragment. Its performance is fantastic across all browsers.
     *
     * This version won't work with <code><script></code> and <code><style></code> tags in IE.
     * Also, it requires only one element in the top hieararchy, which basically means you have to combine
     * your elements under one parent div, or you will only get the first element.
     *
     * @param {string} htmlString The HTML string to convert.
     * @return {!Node} The resulting element.
     */
    tart.dom.createElement = function(htmlString) {
        tempDiv.innerHTML = htmlString;
        return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
    };
})();
