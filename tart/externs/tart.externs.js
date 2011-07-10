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

var console;


/** @param {...} var_args */
console.log = function(var_args) {};
console.time = function(name) {};
console.timeEnd = function(name) {};
console.trace = function() {};


/** @param {...} var_args */
console.dir = function(var_args) {};

var JSON = {};
JSON.stringify = function(object) {};
JSON.parse = function(string) {};
var localStorage = {};
