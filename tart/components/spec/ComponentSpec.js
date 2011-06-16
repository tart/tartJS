goog.require('tart.components.Controller');
goog.require('tart.components.Model');
goog.require('tart.components.View');

goog.provide('tart.components.ComponentSpec');

/**
 * Run jasmine specs
 */
tart.components.ComponentSpec = function () {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
};

tart.components.ComponentSpec();
