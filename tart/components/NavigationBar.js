// Copyright 2014 Tart. All Rights Reserved.
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

goog.provide('tart.components.NavigationBar');
goog.require('tart.ui.DlgComponent');



/**
 * NavigationBar for mobile platforms.
 *
 * @constructor
 * @extends {tart.ui.DlgComponent}
 */
tart.components.NavigationBar = function() {
    goog.base(this);
    this.initialized = false;

    this.config = {};
};
goog.inherits(tart.components.NavigationBar, tart.ui.DlgComponent);


/**
 * @override
 */
tart.components.NavigationBar.prototype.render = function(opt_base, opt_index) {
    goog.base(this, 'render', opt_base, opt_index);
    this.initialized = true;
};


/**
 * @typedef {{title, type, actionButtonText, actionButtonAction, actionButtonClass, backButtonText, backButtonAction, backButtonClass, backToExit, order, subViewCount, subViewIndex}}
 */
tart.components.NavigationBarOptions;


/**
 * Unset NavigationBar settings.
 */
tart.components.NavigationBar.prototype.unsetConfig = function() {
    this.setConfig({});
};


/**
 * Set NavigationBar component's config.
 *
 * @param {tart.components.NavigationBarOptions} config of NavigationBar component.
 */
tart.components.NavigationBar.prototype.setConfig = function(config) {
    this.reload(config);
    this.config = config;
};


/**
 * Reload NavigationBar config.
 *
 * @param {tart.components.NavigationBarOptions} config Configuration object that decides the look and animations of the navigation bar.
 */
tart.components.NavigationBar.prototype.reload = function(config) {
    if (this.config.type && this.config.type == config.type) {
        if (this.config.order < config.order) {
            this.goForward(config);
        }
        else if (this.config.order > config.order) {
            this.goBack(config);
        }
        else {
            this.go(config);
        }
    }
    else {
        this.go(config);
    }
};


/**
 * Redraws the navigation bar with the given configuration, without any animations.
 *
 * @param {tart.components.NavigationBarOptions} config Configuration object that decides the look and animations
 *                                                    of the navigation bar.
 */
tart.components.NavigationBar.prototype.go = function(config) {
    var itemsContainer = this.getChild(this.mappings.ITEMS_CONTAINER);
    itemsContainer && (itemsContainer[0].innerHTML = this.templates_item(config));
};


/**
 * Redraws the navigation bar with the given configuration, with a forward animation; the new navigation bar comes
 * in from the right.
 *
 * @param {tart.components.NavigationBarOptions} config Configuration object that decides the look and animations of the navigation bar.
 */
tart.components.NavigationBar.prototype.goForward = function(config) {
    var that = this,
        itemsContainer = this.getChild(this.mappings.ITEMS_CONTAINER)[0];

    itemsContainer.innerHTML += this.templates_item(config);

    var items = this.getChild(this.mappings.ITEM);
    setTimeout(function() {
        that.arrangeClasses_(items, null, ['change', 'animate']);
    }, 1);

    this.bindTransitionEndEvent_(items, 0);
};


/**
 * Redraws the navigation bar with the given configuration, with a backward animation; the new navigation bar comes
 * in from the right.
 *
 * @param {tart.components.NavigationBarOptions} config Configuration object that decides the look and animations of the navigation bar.
 */
tart.components.NavigationBar.prototype.goBack = function(config) {
    var that = this,
        itemsContainer = this.getChild(this.mappings.ITEMS_CONTAINER)[0];

    itemsContainer.innerHTML = this.templates_item(config) + itemsContainer.innerHTML;

    var items = this.getChild(this.mappings.ITEM);
    this.arrangeClasses_(items, null, 'change');

    setTimeout(function() {
        that.arrangeClasses_(items, 'change', 'animate');
    }, 1);

    this.bindTransitionEndEvent_(items, 1);
};


/**
 * Arranges CSS classes of given elements by removing and adding certain classes. Helper method to make code prettier.
 *
 * @private
 * @param {{length: number}} elements Elements array or NodeList as obtained from a goog.dom.query.
 * @param {string|Array.<string>} classesToRemove The CSS class names to be removed from each element.
 * @param {string|Array.<string>} classesToAdd The CSS class names to be added to each element.
 */
tart.components.NavigationBar.prototype.arrangeClasses_ = function(elements, classesToRemove, classesToAdd) {
    goog.array.forEach(elements, function(el) {
        goog.dom.classes.addRemove(el, classesToRemove, classesToAdd);
    });
};


/**
 * Binds transition end events and removes the old navigation bar. Helper method used in navigation bar animations.
 *
 * @private
 * @param {{length: number}} items Elements array or NodeList as obtained from a goog.dom.query. Contains the items
 *                                 that reside in items container; these are the actual navigation bars.
 * @param {number} index Index of the navigation bar to remove.
 */
tart.components.NavigationBar.prototype.bindTransitionEndEvent_ = function(items, index) {
    var blockerOverlay = goog.dom.getElement('blockerOverlay');
    var that = this;

    setTimeout(function() {
        goog.dom.classes.add(blockerOverlay, 'active');
    }, 1);

    setTimeout(function() {
        that.arrangeClasses_(items, ['change', 'animate'], []);
        goog.dom.removeNode(items[index]);
        setTimeout(function() {
            goog.dom.classes.remove(blockerOverlay, 'active');
        }, 1);
    }, 400);
};


/**
 * @return {string} Base template of NavigationBar component.
 */
tart.components.NavigationBar.prototype.templates_base = function() {
    return '<div class="navigationBar" id="' + this.id + '">' +
                this.templates_item(this.config) +
           '</div>';
};


/**
 * Returns a navigation bar markup based on given configuration.
 *
 * @param {tart.components.NavigationBarOptions} config Configuration object that decides the look and animations of the navigation bar.
 * @return {string} A navigation bar markup.
 */
tart.components.NavigationBar.prototype.templates_item = function(config) {
    var menuButton = '',
        arrow = ' blank',
        title = config.title || '',
        actionButton = '',
        backButton = '',
        backButtonText = config.backButtonText || '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
        actionButtonText = config.actionButtonText || '',
        notificationCenter = '';

    if (config.backButtonText) arrow = '';

    if (config.actionButtonAction) {
        actionButton = '<span class="button action active">' + actionButtonText + '</span>';
        notificationCenter = '';
    }

    if (config.backButtonAction) backButton = '<span class="button back' + arrow + '">' + backButtonText + '</span>';

    title = title.length > 20 ? title.substring(0, 20) + '...' : title;
    return '<div class="item">' +
        backButton +
        menuButton +
        '<span class="title">' + title + '</span>' +
        actionButton +
        notificationCenter +
        '</div>';
};


/**
 * Execute backButtonAction.
 */
tart.components.NavigationBar.prototype.onBackButtonTap = function() {
    this.config.backButtonAction();
};


/**
 * Action button tap event listener.
 */
tart.components.NavigationBar.prototype.onActionButtonTap = function() {
    this.config.actionButtonAction();
};


/**
 * Menu Button touch event handler.
 */
tart.components.NavigationBar.prototype.onMenuButtonTap = function() {
};


/**
 * Title touch event handler.
 */
tart.components.NavigationBar.prototype.onTitleTap = function() {
    tusla.app.onStatusTap();
};


/**
 * Toggle action Button.
 * @param {boolean} toggle Action button display predicate.
 */
tart.components.NavigationBar.prototype.toggleActionButton = function(toggle) {
    var actionButton = this.getChild(this.mappings.ACTION_BUTTON)[0];
    if (!actionButton) return;

    goog.dom.classes.enable(actionButton, 'active', toggle);
};


/**
 * NavigationBar domMappings.
 * @enum {string}
 */
tart.components.NavigationBar.prototype.mappings = {
    TITLE: '.title',
    BACK_BUTTON: '.button.back',
    ACTION_BUTTON: '.button.action',
    MENU_BUTTON: '.button.menu',
    NOTIFICATION_CENTER: '.notificationCenter',
    NOTIFICATION_CENTER_BADGE: '.notificationCenter .countBadge',
    ITEMS_CONTAINER: '.navigationBar',
    ITEM: '.item'
};


(function() {
    this.events = {};
    var tap = this.events[tart.events.EventType.TAP] = {};
    tap[this.mappings.BACK_BUTTON] = this.onBackButtonTap;
    tap[this.mappings.ACTION_BUTTON] = this.onActionButtonTap;
    tap[this.mappings.MENU_BUTTON] = this.onMenuButtonTap;
}).call(tart.components.NavigationBar.prototype);
