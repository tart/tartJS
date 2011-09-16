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
goog.require('tart.mvc.uri.Redirection');



/**
 * @constructor
 * @param {tart.mvc.LayoutTemplate} layout The default layout of the application. This layout will be used when an
 * action chooses not to set its own layout.
 * @param {HTMLElement} dom DOM element this renderer will render the application in.
 */
tart.mvc.Renderer = function(layout, dom) {
    this.defaultLayout = layout;
    this.dom_ = dom;
};


/**
 * Renders the final view; executing the action and putting the resulting view script in a related layout.
 * @param {tart.mvc.uri.Router} router Application's router.
 */
tart.mvc.Renderer.prototype.render = function(router) {
    var oldLayout = this.currentLayout,
        oldLayoutContext = this.currentLayoutContext,
        oldViewScript = this.currentViewScript,
        oldAction = this.currentAction,
        viewMarkup,
        layout,
        view = new tart.mvc.View(),
        action = this.currentAction = new tart.mvc.Action(router.getParams(), this.defaultLayout, view);

    // if there is an action already executed and it has a deconstructor, call it.
    if (oldAction)
        goog.typeOf(oldAction.deconstructor) == 'function' && oldAction.deconstructor();

    // execute the action
    var actionResult = router.getAction().call(action);

    if (actionResult instanceof tart.mvc.uri.Redirection) {
        return;
    }

    // if there is a view script already rendered and it has a deconstructor, call it.
    if (oldViewScript)
        goog.typeOf(oldViewScript.deconstructor) == 'function' && oldViewScript.deconstructor();

    this.currentViewScript = action.view;
    // generate the view markup
    viewMarkup = action.getViewScript().call(action.view);
    if (viewMarkup instanceof tart.mvc.uri.Redirection) {
        return;
    }
    // instantiate the layout, set its content and then markup.
    layout = new tart.mvc.Layout(action.view);
    layout.setContent(viewMarkup);

    this.currentLayout = action.getLayout();

    // have to reset the layout if the action's layout is different than the previous one
    if (this.currentLayout != oldLayout) {
        layout.resetLayout = true;

        // if there is a layout already rendered and it has a deconstructor, call it.
        if (oldLayoutContext)
            goog.typeOf(oldLayout.deconstructor) == 'function' && oldLayout.deconstructor.call(oldLayoutContext);

        this.currentLayout.call(layout);
    }

    layout.render(this.dom_);

    // call respective render callback functions; if there are any. These let the developers
    // watch out for rendering events.
    goog.typeOf(action.view.onRender) == 'function' && action.view.onRender();
    if (this.currentLayout.onViewRender)
        goog.typeOf(this.currentLayout.onViewRender) == 'function' && this.currentLayout.onViewRender.call(layout);

    this.currentLayoutContext = layout;
};
