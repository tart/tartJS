// Copyright 2014 Startup Kitchen. All Rights Reserved.
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

goog.provide('tart.ui.ViewModel');
goog.require('tart.ui.ComponentModel');



/**
 * Base view model for tart.ui.View instances.
 *
 * @constructor
 * @extends {tart.ui.ComponentModel}
 */
tart.ui.ViewModel = function() {
    goog.base(this);
};
goog.inherits(tart.ui.ViewModel, tart.ui.ComponentModel);
