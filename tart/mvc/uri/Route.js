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

goog.provide('tart.mvc.uri.Route');
goog.require('tart.Err');



/**
 * Represents a request made to the application, storing its controller, action and parameters.
 * @constructor
 * @param {tart.mvc.uri.routeTemplate} template uri route template object.
 */
tart.mvc.uri.Route = function(template) {
    this.name = template.name;
    this.controller = template.controller;
    this.action = template.action;
    this.setFormat(template.format);
};


/**
 * Parses a route's human readable format into hard-core RegExp.
 * @param {string} format Route's format.
 */
tart.mvc.uri.Route.prototype.setFormat = function(format) {
    var fields, wildchars;
    wildchars = format.match(/\*/g);
    if (wildchars && wildchars.length > 1)
        throw new tart.Err('Route cannot contain more than one wildchar.', 'Routing Error');

    if (goog.string.endsWith(format, '/') == false)
        format += '/';

    format = '^' + format + '$';

    format = format.replace(/\*/g, '(.*?)');
    fields = format.match(/((:\w+)|\(\.\*\?\))/g);

    if (fields) {
        this.params = [];
        format = format.replace(/(:\w+)/g, '([^?#\/]+)');
        for (var i = 0, l = fields.length; i < l; i++) {
            this.params.push(fields[i].substr(1));
        }
    }
    format = format.replace(/\//g, '\\/');
    this.format = new RegExp(format);


};


/** @typedef
 * {{
 *  name: string,
 *  format: (string|RegExp),
 *  controller: function(new:tart.mvc.Controller),
 *  action: function(this:tart.mvc.Action)
 * }}
 * **/
tart.mvc.uri.routeTemplate;
