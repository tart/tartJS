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
goog.provide('tart.mock.jQuery.xhr');

jQuery.ajaxSetup({
    'converters': {
        'mockup text': function(requestOptions) {
            return tart.mock.jQuery.xhr(requestOptions);
        },
        'mockup json': function(requestOptions) {
            return tart.mock.jQuery.xhr(requestOptions);
        },
        'mockup xml': function(requestOptions) {
            return tart.mock.jQuery.xhr(requestOptions);
        }
    }
});


jQuery.ajaxTransport('mockup', function(options) {
    return {
        'send': function(headers, callback) {
            callback(200, 'OK', {
                'mockup': options
            });
        }
    };
});

// Switch to mockup
jQuery.ajaxSetup({
    'mock': true
});


jQuery.ajaxPrefilter(function(options) {
    if (options['mock']) {
        var finalDataType = options['dataTypes']['pop']();
        options['dataTypes'] = [finalDataType === '*' ? 'text' : finalDataType];
        return 'mockup';
    }
});
