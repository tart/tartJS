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

goog.provide('tart.components.MobileDialog');
goog.require('goog.ui.Dialog');



/**
 * Mobile dialog constructor.
 *
 * @constructor
 * @extends {goog.ui.Dialog}
 * @param {string=} opt_class Optional class name for the root element. Default is modal-dialog.
 */
tart.components.MobileDialog = function(opt_class) {
    goog.base(this, opt_class);
};
goog.inherits(tart.components.MobileDialog, goog.ui.Dialog);


/**
 * @override
 */
tart.components.MobileDialog.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');
    this.setDraggable(false);

    this.getHandler().removeAll();

    goog.events.listen(this.getButtonElement(), tart.events.EventType.TAP,
        this.onButtonTap, false, this);

    // To prevent click event after tap.
    goog.events.listen(this.getButtonElement(), goog.events.EventType.TOUCHSTART, function(e) {
        e.preventDefault();
    });
};


/**
 * Event handler for button tap.
 *
 * @param {goog.events.BrowserEvent} e Browser's event object.
 */
tart.components.MobileDialog.prototype.onButtonTap = function(e) {
    var button = this.findParentButton(/** @type {Element} */ (e.target));
    if (button && !button.disabled) {
        var key = button.name;
        var caption = /** @type {Element|string} */(
            this.getButtonSet().get(key));
        if (this.dispatchEvent(new goog.ui.Dialog.Event(key, caption))) {
            this.setVisible(false);
        }
    }
};


/**
 * Finds the parent button of an element (or null if there was no button
 * parent).
 *
 * @param {Element} element The element that was clicked on.
 * @return {Element} Returns the parent button or null if not found.
 */
tart.components.MobileDialog.prototype.findParentButton = function(element) {
    var el = element;
    while (el != null && el != this.getButtonElement()) {
        if (el.tagName == 'BUTTON') {
            return /** @type {Element} */(el);
        }
        el = el.parentNode;
    }
    return null;
};


/**
 * @override
 */
tart.components.MobileDialog.prototype.focus = function() {
    return;
};


/**
 * @override
 */
tart.components.MobileDialog.prototype.reposition = function() {
    // Get the current viewport to obtain the scroll offset.
    var doc = this.getDomHelper().getDocument();
    var win = goog.dom.getWindow(doc) || window;
    if (goog.style.getComputedPosition(this.getElement()) == 'fixed') {
        var x = 0;
        var y = 0;
    } else {
        var scroll = this.getDomHelper().getDocumentScroll();
        var x = scroll.x;
        var y = scroll.y;
    }

    var popupSize = goog.style.getSize(this.getElement());
    var applicationElement = goog.dom.getElement('application');
    var applicationWidth = goog.style.getSize(applicationElement).width;

    var left = (applicationWidth - popupSize.width) / 2;
    var top = win.innerHeight / 2;
    var marginTop = popupSize.height / -2;

    goog.style.setPosition(this.getElement(), left, top);
    goog.style.setStyle(/** @type {Element} */ (this.getElement()), 'margin-top', marginTop + 'px');
};
