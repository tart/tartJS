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

var it = {}
var runs = {}
var describe = {}
var waitsFor = {}


/** @typedef {Object} */
var jasmineMatcher = {
    toEqual : function () {},
    toBeTruthy : function () {},
    toBeFalsy : function () {}
};

/**
 * @return {jasmineMatcher}
 */
var expect = function (a) {};
var beforeEach = {};

var jasmine = {
    "unimplementedMethod_": function () {},
    "undefined": {},
    "VERBOSE": {},
    "DEFAULT_UPDATE_INTERVAL": {},
    "DEFAULT_TIMEOUT_INTERVAL": {},
    "getGlobal": function () {},
    "bindOriginal_": function () {},
    "setTimeout": function () {},
    "clearTimeout": function () {},
    "setInterval": function () {},
    "clearInterval": function () {},
    "MessageResult": function () {},
    "ExpectationResult": function () {},
    "getEnv": function () {},
    "isArray_": function () {},
    "isString_": function () {},
    "isNumber_": function () {},
    "isA_": function () {},
    "pp": function () {},
    "isDomNode": function () {},
    "any": function () {},
    "Spy": function () {},
    "createSpy": function () {},
    "isSpy": function () {},
    "createSpyObj": function () {},
    "log": function () {},
    "XmlHttpRequest": function () {},
    "util": {
        "inherit": function () {},
        "formatException": function () {},
        "htmlEscape": function () {},
        "argsToArray": function () {},
        "extend": function () {}
    },
    "Env": function () {},
    "Reporter": function () {},
    "Block": function () {},
    "JsApiReporter": function () {},
    "Matchers": function () {},
    "MultiReporter": function () {},
    "NestedResults": function () {},
    "PrettyPrinter": function () {},
    "StringPrettyPrinter": function () {},
    "Queue": function () {},
    "Runner": function () {},
    "Spec": function () {},
    "Suite": function () {},
    "WaitsBlock": function () {},
    "WaitsForBlock": function () {},
    "FakeTimer": function () {},
    "Clock": {
        "defaultFakeTimer": {
            "timeoutsMade": {},
            "scheduledFunctions": function () {},
            "nowMillis": {},
            "setTimeout": function () {},
            "setInterval": function () {},
            "clearTimeout": function () {},
            "clearInterval": function () {},
            "reset": function () {},
            "tick": function () {},
            "runFunctionsWithinRange": function () {},
            "scheduleFunction": function () {}
        },
        "reset": function () {},
        "tick": function () {},
        "runFunctionsWithinRange": function () {},
        "scheduleFunction": function () {},
        "useMock": function () {},
        "installMock": function () {},
        "uninstallMock": function () {},
        "real": {
            "setTimeout": function () {},
            "clearTimeout": function () {},
            "setInterval": function () {},
            "clearInterval": function () {}
        },
        "assertInstalled": function () {},
        "isInstalled": function () {},
        "installed": {
            "setTimeout": function () {},
            "clearTimeout": function () {},
            "setInterval": function () {},
            "clearInterval": function () {}
        }
    },
    "version_": {
        "major": {},
        "minor": {},
        "build": {},
        "revision": {}
    },
    "TrivialReporter": function () {}
};
