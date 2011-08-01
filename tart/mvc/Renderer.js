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
goog.require('tart.mvc.Action');
goog.require('tart.mvc.Layout');
goog.require('tart.mvc.View');


/**
 * @constructor
 * @param {tart.mvc.LayoutTemplate} layout The default layout of the application. This layout will be used when an
 * action chooses not to set its own layout.
 */
tart.mvc.Renderer = function(layout) {
    this.defaultLayout = layout;
};


/**
 * Renders the final view; executing the action and putting the resulting view script in a related layout.
 * @param {tart.mvc.uri.Router} router Application's router.
 */
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
    layout = new tart.mvc.Layout(action.view);
    layout.setContent(viewMarkup);
    this.currentLayout = action.getLayout();
    this.currentLayout.call(layout);

    // have to reset the layout if the action's layout is different than the previous one
    if (this.currentLayout != oldLayout)
        layout.resetLayout = true;

    layout.render();

    // call respective render callback functions; if there are any. These let the developers
    // watch out for rendering events.
    goog.typeOf(action.view.onRender) == 'function' && action.view.onRender();
    goog.typeOf(layout.onRender) == 'function' && layout.onRender();
};
