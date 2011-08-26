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
 * @fileoverview Provides utility functions for string operations.
 */

goog.provide('tart.string');

(function() {
    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisi tortor, porta ac lobortis vel, euismod sit amet turpis. Vivamus tempus turpis velit. Phasellus tincidunt tellus vitae lorem placerat rutrum. Quisque varius purus non nibh molestie eget lacinia neque tristique. Cras nec felis nec lorem egestas egestas quis ut quam. Praesent aliquam bibendum tellus, non pulvinar ante blandit vel. Sed quis mollis nibh. Praesent sagittis, nunc ac dapibus mattis, mi est rhoncus risus, nec volutpat tellus urna at lectus. Sed est enim, vulputate sed consequat sed, rutrum sed tellus. Suspendisse lacinia sapien at libero auctor id condimentum dui lobortis. Curabitur auctor posuere elementum. Cras vestibulum urna eu lectus vestibulum rhoncus. Suspendisse mattis eleifend ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et nisi ut sapien placerat commodo. In convallis sem orci, convallis auctor orci. Suspendisse sed urna dolor. Suspendisse id dui ante, ac lobortis turpis. Maecenas tristique posuere lacus in venenatis. Aliquam cursus fermentum dui vestibulum adipiscing. Duis dui ipsum, tempor et gravida eu, varius id diam. Integer volutpat est eu nunc mollis quis accumsan tellus ultricies. Vestibulum fermentum luctus lacus quis rhoncus. Donec eleifend rutrum urna eget lobortis. Sed vitae erat erat, vel adipiscing mauris. Aenean malesuada posuere auctor. Donec in semper nulla. Vivamus venenatis enim ut purus tempor eu posuere mauris ullamcorper. Proin semper felis sit amet urna auctor at hendrerit magna commodo. Maecenas dictum mi nec odio luctus suscipit. Sed mattis, leo sed feugiat pulvinar, quam risus adipiscing mi, vitae pretium erat metus ac risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vel velit quis arcu venenatis elementum quis vitae libero. Maecenas rutrum, erat et porta hendrerit, felis eros scelerisque erat, in venenatis lacus est in leo. Fusce ac ante quis ipsum interdum interdum non ac quam. Sed nulla quam, gravida quis dapibus vel, pharetra ac elit. Curabitur sed metus eu enim eleifend hendrerit id id lacus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis feugiat diam nec lorem tempus aliquet. Mauris imperdiet, mauris sit amet viverra dignissim, augue elit pellentesque sapien, eget blandit turpis nunc sed est. Praesent lacinia sapien in mi molestie sit amet posuere lacus vehicula. Aliquam quam ligula, aliquam id dictum vel, vehicula sed ipsum. Aliquam vestibulum eros id erat mattis imperdiet. In pretium, ante sed rhoncus tincidunt, mauris felis porttitor felis, sed tempor elit libero eu arcu. Phasellus molestie, ligula sit amet placerat tincidunt, tortor elit tristique arcu, eu eleifend massa nisi ut leo. Nulla sagittis erat eget nulla cursus tristique. Mauris turpis arcu, rhoncus nec hendrerit a, tincidunt in lorem. Praesent dapibus mauris nec risus vestibulum feugiat. Vestibulum ac sem leo. Quisque sodales rutrum purus a egestas. Duis placerat, ante et viverra molestie, augue neque faucibus tortor, sit amet pellentesque ante nulla vel ante';
    var loremIpsumArray = loremIpsum.split('. ');
    tart.string.loremIpsum = function() {
        var random = Math.round(Math.random() * loremIpsumArray.length);
        return loremIpsumArray[random] + '.';
    }
})();


/**
 * This function helps to decode url parameters back to a javascript object.
 *
 * For example, a%5Bb%5D%5B%5D=1&a%5Bb%5D%5B%5D=2 is deparam'med to
 * { a: { b: ["1", "2"] } }
 *
 * This function is a modified form of an answer by Jacky Li to the question in
 * http://stackoverflow.com/questions/1131630/javascript-jquery-param-inverse-function
 *
 * This version would fail on a param like [=]=20.
 *
 * @param {string} query Query string to deparam.
 * @return {Object} Deparameterized string.
 */
tart.string.deparam = function(query) {
    var setValue = function(root, path, value) {
        if (path.length > 1) {
            var dir = path.shift();
            if (typeof root[dir] == 'undefined') {
                root[dir] = (path[0] == '' || parseInt(path[0], 10) == path[0]) ? [] : {};
            }

            arguments.callee(root[dir], path, value);
        } else {
            if (root instanceof Array) {
                root.push(value);
            } else {
                root[path] = value;
            }
        }
    };
    var nvp = query.split('&');
    var data = {};
    for (var i = 0; i < nvp.length; i++) {
        var equalsIndex = nvp[i].lastIndexOf('=');
        var pair = [nvp[i].substr(0, equalsIndex), nvp[i].substr(equalsIndex + 1)];

        //var pair = nvp[i].split('=');
        var name = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);

        var path = name.match(/(^[^\[]+)(\[.*\]$)?/);
        var first = path[1];
        if (path[2]) {
            //case of 'array[level1]' || 'array[level1][level2]'
            path = path[2].match(/(?=\[(.*)\]$)/)[1].split('][');
        } else {
            //case of 'name'
            path = [];
        }
        path.unshift(first);

        setValue(data, path, value);
    }
    return data;
};
