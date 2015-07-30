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
 * @fileoverview Creates an instance with a tab and panel for using with an existing tabpanel.
 *
 * Example Usage:
 *
 *     var panel1 = new tart.TabPanel({
 *         title: 'Tab 1',
 *         html: 'This is a basic text'
 *     });
 *
*/

goog.provide('tart.TabPanel');
goog.require('goog.pubsub.PubSub');



/**
 * Returns an instance of tab and panel for using it in an tabpanel
 * Options object should include a title as tab's title and html as panel's default html
 * If Options object is ommited, an empty string will appended as tab title and panel html
 * @constructor
 * @extends {goog.pubsub.PubSub}
 * @param {Object=} options Customized options for panel instance.
 */
tart.TabPanel = function(options) {
    goog.base(this);
    this.initOptions(options);
    this.$tab = $(this.templates_tab());
    this.$panel = $(this.templates_panel());
};
goog.inherits(tart.TabPanel, goog.pubsub.PubSub);


/**
 * Merges custom options object with defaults
 * @protected
 * @param {Object=} options Custom config object.
 */
tart.TabPanel.prototype.initOptions = function(options) {
    this.props = {};
    options = options || {};
    this.props.panelCssClass = options['panelCssClass'] || '';
    this.props.tabCssClass = options['tabCssClass'] || '';
    this.props.title = options.title || '';
    this.props.html = options.html || '';
};


/**
 * @return {string} Tab markup.
 */
tart.TabPanel.prototype.templates_tab = function() {
    return '<div class="tartTab ' + this.props.tabCssClass + '">' + this.props.title + '</div>';
};


/**
 * @return {string} Panel markup.
 */
tart.TabPanel.prototype.templates_panel = function() {
    return '<div class="tartPanel ' + this.props.panelCssClass + '">' + this.props.html + '</div>';
};


/**
 * Callback function that will be triggered before a TabPanel instance is shown.
 * @type {Function|undefined}
 */
tart.TabPanel.prototype.onShow = undefined;


/**
 * Callback function that will be triggered before a TabPanel instance is shown.
 * @type {Function|undefined}
 */
tart.TabPanel.prototype.onClose = undefined;
