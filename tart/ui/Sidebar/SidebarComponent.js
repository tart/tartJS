// Copyright 2014 Startup Kitchen. All Rights Reserved.
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

goog.provide('tart.ui.SidebarComponent');
goog.require('tart.ui.DlgComponent');



/**
 * @constructor
 * @extends {tart.ui.DlgComponent}
 */
tart.ui.SidebarComponent = function() {
    goog.base(this);
};
goog.inherits(tart.ui.SidebarComponent, tart.ui.DlgComponent);


/**
 * Dispatches a switch view event to listeners and toggles the sidebar of the view manager that
 * is responsible for this sidebar.
 *
 * @param {goog.events.BrowserEvent} e Tap event.
 */
tart.ui.SidebarComponent.prototype.onSidebarItemTap = function(e) {
    var view = e.target.getAttribute('data-view');
    if (!view) return;

    this.dispatchEvent({
        type: tart.ui.SidebarComponent.EventType.SWITCH_VIEW,
        view: view
    });

    this.vm.toggleSidebar();
};


/**
 * @return {string} Returns the template base.
 */
tart.ui.SidebarComponent.prototype.templates_base = function() {
    return '<sidebar-view class="view" id="' + this.id + '">' +
            '<sidebar-items>' + this.template_items() + '</sidebar-items>' +
        '</sidebar-view>';
};


/**
 * @return {string} Returns the items for the sidebar.
 */
tart.ui.SidebarComponent.prototype.template_items = function() {
    return '';
};


/**
 * @enum {string} Sidebar events.
 */
tart.ui.SidebarComponent.EventType = {
    SWITCH_VIEW: 'switchView'
};


/**
 * @enum {string} Dom mapping.
 */
tart.ui.SidebarComponent.prototype.mappings = {
    ITEM: 'sidebar-item'
};


(function(proto) {
    proto.events = {};
    var tap = proto.events[tart.events.EventType.TAP] = {};

    tap[proto.mappings.ITEM] = proto.onSidebarItemTap;
})(tart.ui.SidebarComponent.prototype);
