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
goog.provide('tart.mvc.Renderer');
goog.require('tart.mvc.View');
goog.require('tart.mvc.Layout');
goog.require('tart.mvc.Action');
/**
 * @constructor
 * @param {tart.mvc.LayoutTemplate} layout
 */
tart.mvc.Renderer = function(layout) {
    this.defaultLayout = layout;
}

tart.mvc.Renderer.prototype.render = function(router) {
    var viewMarkup, layout,
        view = new tart.mvc.View(),
        oldLayout = this.currentLayout,
        action = new tart.mvc.Action(router.getParams(), this.defaultLayout, view);

    // execute the action
    router.getAction().call(action);
    // generate the view markup
    viewMarkup = action.getViewScript().call(action.view);

    // instantiate the layout, set its content and then markup.
    layout = new tart.mvc.Layout();
    layout.setContent(viewMarkup);
    this.currentLayout = action.getLayout();
    this.currentLayout.call(layout);

    // have to reset the layout if the action's layout is different than the previous one
    if (this.currentLayout != oldLayout)
        layout.resetLayout = true;

    layout.render();
}