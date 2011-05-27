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
goog.require('goog.events.EventTarget');
goog.provide('tart.components.Model');

/**
 * All component models should be inherited from goog.events.EventTarget
 * to publish events to controllers
 * @constructor
 */
tart.components.Model = function() {
    goog.events.EventTarget.call(this);
};
goog.inherits(tart.components.Model, goog.events.EventTarget);
