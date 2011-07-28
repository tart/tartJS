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
 * @fileoverview Tabs is a fully working and customizable tab panel creator class.
 *
 * Example Usage:
 *
 *
 * var tabPanel = new tart.Tabs({
 *      activeTab: 1
 *  });
 *
 * var panel1 = new tart.TabPanel({
 *    title: 'Tab 1',
 *    html: 'This is a basic text'
 * });
 * var panel2 = new tart.TabPanel({
 *     title: 'Tab 2',
 *    html: 'Lorem ipsum dolor sit amet'
 * });
 * var panel3 = new tart.TabPanel({
 *     title: 'Tab 3',
 *     html: 'Lorem ipsum dolor sit amet is a dummy text'
 * });
 *
 * tabPanel.addTabPanel(panel1);
 * tabPanel.addTabPanel(panel2);
 * tabPanel.addTabPanel(panel3);
 *
 * var dom = tabPanel.buildDOM();
 * $('body').append(dom);
 *
*/

goog.provide('tart.Tabs');
goog.require('goog.pubsub.PubSub');
goog.require('tart.TabPanel');



/**
 * Tabs is a fully working and customizable tab panel creator class
 * @constructor
 * @param {Object=} options Customized initial options for tabpanel.
 * @extends {goog.pubsub.PubSub}
 */
tart.Tabs = function(options) {
    goog.base(this);
    options = options || {};
    this.initOptions(options);

    this.$tabContainer = $(this.templates_tabContainer());
    this.$panelContainer = $(this.templates_panelContainer());

    /**
     * Holds TabPanel objects associated with the tabpanel
     * @type {Array.<tart.TabPanel>}
     * @protected
     */
    this.tabPanels = [];

    /**
     * State of tab panel
     * @protected
     */
    this.rendered = false;

    this.initialize(this.props.renderConfig);
};
goog.inherits(tart.Tabs, goog.pubsub.PubSub);


/**
 * Initialize the tabpanel with calling buildDOM method
 * @param {!string} renderCfg Where to container will be appended.
 */
tart.Tabs.prototype.initialize = function(renderCfg) {
    var panelDOM = this.buildDOM();
    if (renderCfg.insertAfter) {
        panelDOM.insertAfter(renderCfg.insertAfter);
    }
    else if (renderCfg.insertBefore) {
        panelDOM.insertBefore(renderCfg.insertBefore);
    }
    else if (renderCfg.append) {
        renderCfg.append.append(panelDOM);
    }
};


/**
 * Adds new tab to existing tab panel
 * @param {!(Array|tart.TabPanel)} tabPanels An array that holds instance of TabPanel Class to add new tab.
 * Also tabPanels argument should be a tab panel instance instead of array.
 */
tart.Tabs.prototype.addTabPanel = function(tabPanels) {
    var that = this;
    if (goog.isArray(tabPanels)) {
        for (var i = 0, len = tabPanels.length; i < len; i++) {
            that.addTab(tabPanels[i]);
        }
    } else {
        that.addTab(tabPanels);
    }
    this.setActiveTab(this.activeTab);
};


/**
 * Adds a new tab to a Tabs instance.
 * @param {tart.TabPanel} tabPanel instance that's going to be added to a Tabs instance.
 */
tart.Tabs.prototype.addTab = function(tabPanel) {
    this.tabPanels.push(tabPanel);
    this.$tabContainer.append(tabPanel.$tab);
    this.$panelContainer.append(tabPanel.$panel);
    this.bindTabPanelEvents(tabPanel);
};


/**
 * Removes the tab with the given index.
 * @param {!number} index Index number of the tab that you want to remove.
 */
tart.Tabs.prototype.removeTab = function(index) {
    var tabsLength = this.getTabsLength();

    if (index >= tabsLength || tabsLength === 0) {
        return;
    }

    this.tabPanels[index].$tab.remove();
    this.tabPanels[index].$panel.remove();
    this.tabPanels.splice(index, 1);

    try {
        if (index <= this.activeTab) {
            if (index === this.activeTab) {
                this.setActiveTab(index - 1);
            } else {
                this.setActiveTab(this.activeTab - 1);
            }
        }
    } catch (e) {}
};


/**
 * Sets the tab as active with the given index.
 * @param {!number} index Index number of the tab that you want to set as active.
 * @return {boolean} Whether the operation was successful.
 */
tart.Tabs.prototype.setActiveTab = function(index) {
    if (index >= this.getTabsLength()) {
        return false;
    }

    var deActivatedTab = this.getActiveTab();

    for (var i = 0, len = this.tabPanels.length; i < len; i++) {
        if (index != i) {
            this.tabPanels[i].$tab.removeClass(this.props.activeTabCssClass);
            this.tabPanels[i].$panel.removeClass(this.props.activePanelCssClass);
        }
    }
    this.tabPanels[index].$tab.addClass(this.props.activeTabCssClass);
    this.tabPanels[index].$panel.addClass(this.props.activePanelCssClass);
    this.activeTab = index;

    var newlyActivatedTab = this.getActiveTab();

    if (!deActivatedTab.onClose || !newlyActivatedTab.onShow) { // call deactivated tab's onClose function
        return false;
    }

    if (deActivatedTab != newlyActivatedTab) { /* prevent double fn call on initialize */
        deActivatedTab.onClose(this);
        newlyActivatedTab.onShow(this); // call newly activated tab's onShow function
    } else {
        newlyActivatedTab.onShow(this); // call newly activated tab's onShow function
    }

    this.publish('tabChange', this.getActiveTab(), this);
    return true;
};


/**
 * Returns the active tab object contains tab and panel elements and templates that used in tab and panel.
 * @return {tart.TabPanel} The active tab.
 */
tart.Tabs.prototype.getActiveTab = function() {
    return this.tabPanels[this.activeTab];
};


/**
 * Binds required events of tabpanel.
 * @param {!tart.TabPanel} tabPanel Tabpanel instance for binding events to it.
 */
tart.Tabs.prototype.bindTabPanelEvents = function(tabPanel) {
    var that = this;

    var setMeActive = function() {
        var myIndex = goog.array.indexOf(that.tabPanels, tabPanel);
        that.setActiveTab(myIndex);
    };

    tabPanel.$tab.click(setMeActive);
};


/**
 * Builds DOM elements for tabpanel and returns DOM as ready to append to a container
 * @return {jQueryObject} DOM element of the Tabs instance.
 */
tart.Tabs.prototype.buildDOM = function() {
    this.$dom = $(this.templates_dom());
    this.$dom.append(this.$tabContainer);
    this.$dom.append(this.$panelContainer);
    this.rendered = true;
    return this.$dom;
};


/**
 * @return {boolean} The status of tabpanel, rendered or not.
 */
tart.Tabs.prototype.isRendered = function() {
    return this.rendered;
};


/**
 * @return {number} number of tabs associated with the Tabs instance.
 */
tart.Tabs.prototype.getTabsLength = function() {
    return this.tabPanels.length;
};


/**
 * Merges custom options object with defaults
 * @protected
 * @param {Object=} options Customized options for Tabs instance.
 */
tart.Tabs.prototype.initOptions = function(options) {
    var props = this.props = {};
    props.axis = options.axis || 'x';
    this.activeTab = options.activeTab || 0;

    props.renderConfig = options.renderConfig || { 'append': $('body') };

    props.tabPanelCssClass = options.tabPanelCssClass || '';
    props.tabContainerCssClass = options.tabContainerCssClass || '';
    props.panelContainerCssClass = options.panelContainerCssClass || '';
    props.activeTabCssClass = options.activeTabCssClass || 'tartActiveTab';
    props.activePanelCssClass = options.activePanelCssClass || 'tartActivePanel';
    props.panelWrapperCssClass = options.panelWrapperCssClass || '';
};


/**
 * @return {string} Main container markup.
 */
tart.Tabs.prototype.templates_dom = function() {
    return '<div class="tartTabPanelContainer ' + this.props.tabPanelCssClass + '"></div>';
};


/**
 * @return {string} Tab container markup.
 */
tart.Tabs.prototype.templates_tabContainer = function() {
    return '<div class="tartTabContainer ' + this.props.tabContainerCssClass + '"></div>';
};


/**
 * @return {string} Panel container markup.
 */
tart.Tabs.prototype.templates_panelContainer = function() {
    return '<div class="tartPanelContainer ' + this.props.panelContainerCssClass + '"></div>';
};
