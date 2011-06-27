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
 * @fileoverview This file provides a single namespace to include tart.mvc in your application. It also sets the
 * basic needs such as type definitions.
 */

goog.require('tart.mvc.Application');
goog.provide('tart.mvc');

/** @typedef {function(this:tart.mvc.Layout)} */
tart.mvc.LayoutTemplate;

/** @typedef {function(new:tart.mvc.Controller)} */
tart.mvc.ControllerTemplate;

/** @typedef {function(this:tart.mvc.Action)} */
tart.mvc.ActionTemplate;
