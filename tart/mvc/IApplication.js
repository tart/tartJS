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
 * @fileoverview This file combines the requirements of tart.mvc in a single requirement called tart.mvc so that
 * projects that use the tart.mvc need only require tart.mvc. It also implements the base application. The users of
 * tart.mvc should implement this tart.mvc.IApplication class.
 */

goog.provide('tart.mvc.IApplication');



/**
 * Base application class for tart.mvc.
 * @interface
 */
tart.mvc.IApplication = function() {};


/**
 * The base path for the application. If your application will run in the root domain (such as http://www.foo.com)
 * your application doesn't need to override this property. On the other hand, if it will run in a subdirectory
 * (such as http://www.foo.com/bar/) you need to override and set this property to the subdirectory (such as '/bar/').
 */
tart.mvc.IApplication.prototype.basePath;


/**
 * Default scheme for the application. Each application should implement a default controller and an action as these
 * will be called when there are no matching controller / actions.
 */
tart.mvc.IApplication.prototype.defaultRoute;
