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
 * @fileoverview The instances of this class will hold the root HTML markups for the MVC application.
 */
goog.provide('tart.mvc.Layout');
goog.require('tart.mvc.View');



/**
 * Layout class.
 * @constructor
 * @param {tart.mvc.View} view View instance that will be rendered in this layout.
 */
tart.mvc.Layout = function(view) {
    this.view = view;
};


/**
 * Sets the content of the layout. This will generally be the output of a view script associated with an action.
 * @param {string} content Output of a view script.
 */
tart.mvc.Layout.prototype.setContent = function(content) {
    this.content_ = content;
};


/**
 * @return {string} Current content of the layout.
 */
tart.mvc.Layout.prototype.getContent = function() {
    return this.content_;
};

var rd = {};
rd.z = 0;
rd.current = null;

/**
 * Renders the layout.
 * @param {Element} body
 * @param {string=} opt_routeName
 */
tart.mvc.Layout.prototype.render = function(body, opt_routeName) {
    if (this.resetLayout == true) {
        body.innerHTML = this.markup;
        this.resetLayout = false;
        goog.typeOf(this.onRender) == 'function' && this.onRender();
    }
    else {
        // this.getContentArea(body).innerHTML = this.getContent();
    }

    if (rd[opt_routeName]) {
        rd[opt_routeName].style.webkitTransform = 'translate3d(0,0,' + (++rd.z) + 'px)';
        rd.current && rd[opt_routeName] != rd.current && (rd.current.style.webkitTransform = 'translate3d(200%, 200%, 0)');
    }
    else {
        rd.current && rd[opt_routeName] != rd.current && (rd.current.style.webkitTransform = 'translate3d(200%,200%,0)');
        // rd[opt_routeName] = tart.dom.createElement('<div style="height: 100%; position:absolute; top:0;left:0; height: 100%; width: 640px; overflow:hidden; webkit-transform:translate3d(0,0,0)"></div>');
        rd[opt_routeName] = tart.dom.createElement('<iframe style="height: 100%; position:absolute; top:0;left:0; height: 100%; width: 640px; -webkit-transform:translate3d(0,0,0)"></iframe>');

        this.getContentArea(body).appendChild(rd[opt_routeName]);

        var contentBuf = [];

        contentBuf.push('<!DOCTYPE html>');
        contentBuf.push('<html><head>', '<link type="text/css" rel="stylesheet" media="all" href="css/style.css"><link type="text/css" rel="stylesheet" media="all" href="css/reset.css"><link type="text/css" rel="stylesheet" media="all" href="css/application.css">        <link type="text/css" rel="stylesheet" media="all" href="css/fonts.css"><link type="text/css" rel="stylesheet" media="all" href="css/tm.ui.css">        <link type="text/css" rel="stylesheet" media="all" href="css/draw.css">        <link type="text/css" rel="stylesheet" media="all" href="css/draw-sidebar.css">        <link type="text/css" rel="stylesheet" media="all" href="css/coupon.css">        <link type="text/css" rel="stylesheet" media="all" href="css/layout.css">        <link type="text/css" rel="stylesheet" media="all" href="css/betSlip.css">        <link type="text/css" rel="stylesheet" media="all" href="css/navigationBar.css">        <link type="text/css" rel="stylesheet" media="all" href="css/playerProfile.css">        <link type="text/css" rel="stylesheet" media="all" href="css/sidebar.css">        <link type="text/css" rel="stylesheet" media="all" href="css/tabBar.css">        <link type="text/css" rel="stylesheet" media="all" href="css/logistration.css">        <link type="text/css" rel="stylesheet" media="all" href="css/resetPassword.css">        <link type="text/css" rel="stylesheet" media="all" href="css/dialog.css">        <link type="text/css" rel="stylesheet" media="all" href="css/social.css">        <link type="text/css" rel="stylesheet" media="all" href="css/banking.css">        <link type="text/css" rel="stylesheet" media="all" href="css/notificationCenter.css">        <link type="text/css" rel="stylesheet" media="all" href="css/settings.css">        <link type="text/css" rel="stylesheet" media="all" href="css/nextBet.css">        <link type="text/css" rel="stylesheet" media="all" href="css/systemKeyboard.css">',
         '</head><body>' + this.getContent() + '</body></html>');

        // Cannot manipulate iframe content until it is in a document.
        goog.dom.iframe.writeContent(rd[opt_routeName], contentBuf.join(''));
        rd[opt_routeName].handler = new tart.events.GestureHandler(rd[opt_routeName].contentWindow.document.body);
        goog.events.listen(rd[opt_routeName].contentWindow.document.body, [tart.events.EventType.TAP,
            tart.events.EventType.SWIPE_LEFT,
            tart.events.EventType.SWIPE_RIGHT], function(e) {
            var ev = document.createEvent("UIEvents");
            ev.initUIEvent(e.type, true, true, window, 1309);
            ev.target = e.target;
            ev.relatedTarget = e.target;
            // debugger;
            // goog.events.dispatchEvent(this.getContentArea(body), ev);
            this.getContentArea(body).dispatchEvent(ev);
        }, false, this);

        // goog.events.listen(rd[opt_routeName].handler, [tart.events.EventType.SWIPE_LEFT, tart.events.EventType.SWIPE_RIGHT], function(e) {
        //     tm.Registry.get('navigationBar').toggleSidebar();
        // });
    }
    rd.current = rd[opt_routeName];
};


/**
 * If resetLayout is true, the layout will be redrawn upon next action call whatever the circumstance.
 */
tart.mvc.Layout.prototype.resetLayout = false;


/** @nosideeffects */
tart.mvc.Layout.prototype.body;


/** @nosideeffects */
tart.mvc.Layout.prototype.contentArea;


/** @nosideeffects */
tart.mvc.Layout.prototype.view;


/**
 * Default markup of a layout.
 */
tart.mvc.Layout.prototype.markup = '';


/**
 * Default content of a layout.
 * @private
 */
tart.mvc.Layout.prototype.content_ = '';


/**
 * Returns the content are element where the content will be placed.
 * @param {Element} body
 * @return {Element} The main element the contents will reside in.
 */
tart.mvc.Layout.prototype.getContentArea = function(body) {
    if (!this.contentArea) {
        this.contentArea = goog.dom.query('[id="content"]', body)[0];
        if (!this.contentArea) {
            this.contentArea = body;
        }
    }

    return this.contentArea;
};


/**
 * @nosideeffects
 */
tart.mvc.Layout.prototype.onRender;


/**
 * Deconstructor method of this layout. Developers should override this property in an action function like;
 *
 * this.deconstructor = function() {}
 *
 * and should deallocate the memory they have used in this layout. This is also helpful for resolving issues that arise
 * because of tartMVC's statefullness; such as removed but dangling DOM nodes, etc.
 */
tart.mvc.Layout.prototype.deconstructor = null;
