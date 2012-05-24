// Copyright 2012 Tart. All Rights Reserved.
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
 * @fileoverview
 */

goog.provide('tart.ui.TooltipComponent');
goog.require('goog.style');
goog.require('tart.ui.TooltipComponentModel');



/**
 * @constructor
 * @extends {tart.ui.Component}
 */
tart.ui.TooltipComponent = function(refElement, options) {
    this.element = goog.dom.getElement(this.id) || tart.dom.createElement(this.templates_base());
    this.refElement = refElement;
    this.model = new this.modelClass(options);
    this.bindModelEvents();
    this.bindDomEvents();
};
goog.inherits(tart.ui.TooltipComponent, tart.ui.Component);

tart.ui.TooltipComponent.prototype.modelClass = tart.ui.TooltipComponentModel;

tart.ui.TooltipComponent.prototype.id = 'tartTooltip';
tart.ui.TooltipComponent.prototype.cssClass = 'tartTooltip';


/** @override */
tart.ui.TooltipComponent.prototype.bindDomEvents = function() {
    switch (this.model.options.type) {
        case tart.ui.TooltipComponentModel.Type.CLICK:
            goog.events.listen(this.refElement, goog.events.EventType.CLICK, this.onClick, false, this);
            break;

        case tart.ui.TooltipComponentModel.Type.HOVER:
        default:
            goog.events.listen(this.refElement, [goog.events.EventType.MOUSEOVER, goog.events.EventType.MOUSEOUT],
                this.onHover, false, this);
            goog.events.listen(this.element, goog.events.EventType.MOUSEOUT, this.onBoxMouseout, false, this);
    }
};

tart.ui.TooltipComponent.prototype.onClick = function(e) {
    this.model.handleEvent(e.type);
    e.stopPropagation();
    this.bodyListen = goog.events.listen(document.body, goog.events.EventType.CLICK, function(e) {
        if (goog.dom.contains(this.element, e.target))
            return;
        goog.events.unlistenByKey(this.bodyListen);
        this.model.handleEvent(tart.ui.TooltipComponentModel.SMEventType.BODY_CLICK);
    }, false, this);
};

tart.ui.TooltipComponent.prototype.onHover = function(e) {
    if (e.type == goog.events.EventType.MOUSEOUT &&
        ((e.relatedTarget && goog.dom.contains(this.refElement, e.relatedTarget)) ||
         e.relatedTarget == this.element) || e.relatedTarget == null)
        return;
    this.model.handleEvent(e.type);

};

tart.ui.TooltipComponent.prototype.onBoxMouseout = function(e) {
    if (e.relatedTarget != this.refElement)
        this.model.handleEvent(e.type);
};


/** @override */
tart.ui.TooltipComponent.prototype.bindModelEvents = function() {
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.SHOW, this.onShow, undefined, this);
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.INIT, this.onInit, undefined, this);
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.CLICK_WAIT, this.onWait, undefined,
        this);
};


tart.ui.TooltipComponent.prototype.onWait = function() {
    this.element.tooltip = this;
};


tart.ui.TooltipComponent.prototype.onShow = function() {
    this.element.innerHTML = tart.getUid();
    document.body.appendChild(this.element);
    this.position();
    this.element.style.display = 'block';
};

tart.ui.TooltipComponent.prototype.reset = function() {
    this.model.reset(); // sends to onInit
};

tart.ui.TooltipComponent.prototype.onInit = function() {
    this.element.style.display = 'none';
};

tart.ui.TooltipComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '" class="' + this.cssClass + '"></div>';
};

tart.ui.TooltipComponent.prototype.position = function() {
    var refElementOffset = goog.style.getPageOffset(this.refElement);
    var refElementSize = goog.style.getSize(this.refElement);
    var myElementSize = goog.style.getSize(this.element);
    var coordinate;
    var handlerFn;

    switch (this.model.options.direction) {
        case tart.ui.TooltipComponentModel.Direction.LEFT:
            handlerFn = this.positionLeft;
            break;
        case tart.ui.TooltipComponentModel.Direction.RIGHT:
            handlerFn = this.positionRight;
            break;
        case tart.ui.TooltipComponentModel.Direction.BOTTOM:
            handlerFn = this.positionBottom;
            break;
        case tart.ui.TooltipComponentModel.Direction.TOP:
        default:
            handlerFn = this.positionTop;
            break;

    }

    coordinate = handlerFn.call(this, refElementOffset, refElementSize, myElementSize);

    this.element.style.top = coordinate.y + 'px';
    this.element.style.left = coordinate.x + 'px';
};


/**
 * @protected
 *
 * @param refElementOffset {goog.math.Coordinate}
 * @param refElementSize {goog.math.Size}
 * @param myElementSize {goog.math.Size}
 * @return {goog.math.Coordinate}
 */
tart.ui.TooltipComponent.prototype.positionLeft = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y;
    var x = refElementOffset.x - myElementSize.width;

    return new goog.math.Coordinate(x, y);
};

tart.ui.TooltipComponent.prototype.positionTop = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y - myElementSize.height;
    var x = refElementOffset.x;

    return new goog.math.Coordinate(x, y);
};

tart.ui.TooltipComponent.prototype.positionBottom = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y + myElementSize.height;
    var x = refElementOffset.x;

    return new goog.math.Coordinate(x, y);
};

tart.ui.TooltipComponent.prototype.positionRight = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y;
    var x = refElementOffset.x + myElementSize.width;

    return new goog.math.Coordinate(x, y);
};
