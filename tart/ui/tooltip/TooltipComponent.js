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
goog.require('goog.dom');
goog.require('goog.dom.query');
goog.require('tart.ui.TooltipComponentModel');



/**
 * @constructor
 * @extends {tart.ui.Component}
 */
tart.ui.TooltipComponent = function(refElement, options) {
    this.element = goog.dom.getElement(this.id);
    this.refElement = refElement;
    this.model = new this.modelClass(options);
    if (!this.element) {
        this.element = tart.dom.createElement(this.templates_base());
        document.body.appendChild(this.element);
    }

    this.contentArea = goog.dom.getElementsByClass('content', this.element)[0];
    this.wrapper = goog.dom.getElementsByClass('wrapper', this.element)[0];
    this.cap = goog.dom.getElementsByClass('cap', this.element)[0];


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
        ((e.relatedTarget && goog.dom.contains(this.element, e.relatedTarget)) ||
            e.relatedTarget == this.element) || e.relatedTarget == null)
        return;
    this.model.handleEvent(e.type);

};

tart.ui.TooltipComponent.prototype.onBoxMouseout = function(e) {
    if(goog.dom.contains(this.element, e.relatedTarget)) {
        return false;
    }
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
    if(this.element.tooltip != this && this.element.tooltip) {
        this.element.tooltip.reset();
    }
    this.element.tooltip = this;
};


tart.ui.TooltipComponent.prototype.onShow = function() {
    this.contentArea.innerHTML = (this.templates_loading());
    document.body.appendChild(this.element);
    this.position();

    this.windowResizeListener = goog.events.listen(window, goog.events.EventType.RESIZE, function(e) {
        this.position();
    }, false, this);
    this.windowScrollListener = goog.events.listen(window, goog.events.EventType.SCROLL, function(e) {
        this.position();
    }, false, this);
};

tart.ui.TooltipComponent.prototype.reset = function() {
    this.model.reset(); // sends to onInit
};

tart.ui.TooltipComponent.prototype.onInit = function() {
    this.element.style.display = 'none';
    goog.events.unlistenByKey(this.windowResizeListener);
    goog.events.unlistenByKey(this.windowScrollListener);
};

/**
 * This function returns the base of the tooltip as a string.
 * @return {string}
 */
tart.ui.TooltipComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '" class="' + this.cssClass + '">' +
        '<div class="wrapper">' +
        '<div class="content"></div>' +
        '<div class="cap"></div>' +
        '</div>' +
        '</div>';
};

/**
 * This function returns the content area of the tooltip as a string.
 * @return {string}
 */
tart.ui.TooltipComponent.prototype.templates_loading = function() {
    return '<div class="loadContainer"><div class="loading"></div></div>';
};

/**
 * This function takes a string or an element to append into the content area of the tooltip.
 * @param content {string | Element}
 */
tart.ui.TooltipComponent.prototype.setContent = function(content) {
    if(typeof this.content == 'string') {
        this.contentArea.innerHTML = content;
    }
    else {
        this.contentArea.innerHTML = '';
        this.contentArea.appendChild(content);
    }

    this.position();
};


/**
 * This method takes a reference element and uses its offSet and size values along with tooltip element's size values
 * to calculate the right position to display the tooltip. If the toolTip can be shown on the top of the reference
 * element, it positions the tooltip with the distance calculated by this.model's tipOffset and boxOffset values. If it
 * is not to possible to display on top, than it looks for the suitable area to display tooltip. The possible matches
 * are 'right', 'left', 'bottom' and as a default match 'top'.
 *
 **/
tart.ui.TooltipComponent.prototype.position = function() {
    this.element.style.display = 'block';

    var refElementOffset = goog.style.getPageOffset(this.refElement);
    var refElementSize = goog.style.getSize(this.refElement);
    var myElementSize = goog.style.getSize(this.element);
    var myWrapperSize = goog.style.getSize(this.wrapper);
    var myWindowSize = goog.dom.getViewportSize();
    var winScrollTop = document.body.scrollTop || window.document.documentElement.scrollTop;
    var winScrollLeft = document.body.scrollLeft || window.document.documentElement.scrollLeft;
    var coordinate;
    var handlerFn;

    var topDown = true;
    var horizontalShift = 0;
    var verticalShift = 0;
    var verticalTipCapShift = 0;
    var horizontalTipCapShift = 0;

    if (refElementSize.width < this.model.offsetThreshold) {
        this.model.tipOffset = refElementSize.width / 2;
    }

    if((refElementOffset.x < winScrollLeft) && (refElementOffset.x + refElementSize.width - winScrollLeft < 2 * this.model.tipOffset)) {
        topDown = false;
        this.model.options.direction = tart.ui.TooltipComponentModel.Direction.RIGHT;
        horizontalTipCapShift = -8;
    }

    if (myWindowSize.width + winScrollLeft - refElementOffset.x < 2 * this.model.tipOffset) {
        topDown = false;
        this.model.options.direction = tart.ui.TooltipComponentModel.Direction.LEFT;
        horizontalTipCapShift = myWrapperSize.width ;
    }

    if (topDown) {
        if(refElementOffset.x < winScrollLeft) {
            horizontalShift = winScrollLeft - refElementOffset.x;
        }

        if (horizontalShift == 0) {
            if (myWrapperSize.width  + (refElementOffset.x - winScrollLeft) > myWindowSize.width) {
                horizontalShift = horizontalShift + (myWindowSize.width - myWrapperSize.width -  refElementOffset.x + winScrollLeft);
            }
        }

        if (refElementOffset.y - winScrollTop >= myElementSize.height + this.model.tipOffset + this.model.boxOffset) {
            this.model.options.direction = tart.ui.TooltipComponentModel.Direction.TOP;
            verticalTipCapShift = myWrapperSize.height;
        }
        else {
            this.model.options.direction = tart.ui.TooltipComponentModel.Direction.BOTTOM;
            verticalTipCapShift = -16;
        }

        horizontalTipCapShift = (horizontalShift >=0) ? this.model.tipOffset : (-horizontalShift >= myWrapperSize.width - this.model.tipOffset ) ? -horizontalShift : this.model.tipOffset - horizontalShift;
        verticalShift = 0;
    }
    else {
        if(myWindowSize.height + winScrollTop - refElementOffset.y - myElementSize.height < 0) {
            verticalShift = myWindowSize.height + winScrollTop - refElementOffset.y - myElementSize.height;
        }
        if(refElementOffset.y <= winScrollTop) {
            verticalShift = winScrollTop - refElementOffset.y;
        }

        if(verticalShift >= 0) {
            verticalTipCapShift = this.model.tipOffset;
        }
        else {
            verticalTipCapShift = (this.model.tipOffset - verticalShift >= myElementSize.height - this.model.tipOffset) ? myElementSize.height - this.model.tipOffset : this.model.tipOffset - verticalShift;
        }

        if(this.model.tipOffset >= myElementSize.height / 2) {
            verticalTipCapShift = myElementSize.height / 2 - 1;
        }
    }

    this.wrapper.appendChild(this.cap);
    goog.dom.classes.remove(this.element, 'right', 'left', 'top', 'bottom');
    goog.dom.classes.add(this.element, this.model.options.direction);
    this.cap.style.top = verticalTipCapShift + 'px';
    this.cap.style.left = horizontalTipCapShift + 'px';

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
            handlerFn = this.positionTop;
            break;
        default:
            handlerFn = this.positionTop;
            break;
    }

    coordinate = handlerFn.call(this, refElementOffset, refElementSize, myElementSize);
    this.element.style.top = coordinate.y + verticalShift + 'px';
    this.element.style.left = coordinate.x + horizontalShift + 'px';
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
    var y = refElementOffset.y - 16;
    var x = refElementOffset.x - (myElementSize.width );

    return new goog.math.Coordinate(x, y);
};

/**
 * @protected
 *
 * @param refElementOffset {goog.math.Coordinate}
 * @param refElementSize {goog.math.Size}
 * @param myElementSize {goog.math.Size}
 * @return {goog.math.Coordinate}
 */
tart.ui.TooltipComponent.prototype.positionTop = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y - (myElementSize.height );
    var x = refElementOffset.x - 16;

    return new goog.math.Coordinate(x, y);
};

/**
 * @protected
 *
 * @param refElementOffset {goog.math.Coordinate}
 * @param refElementSize {goog.math.Size}
 * @param myElementSize {goog.math.Size}
 * @return {goog.math.Coordinate}
 */
tart.ui.TooltipComponent.prototype.positionBottom = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y + refElementSize.height;
    var x = refElementOffset.x - 16;

    return new goog.math.Coordinate(x, y);
};

/**
 * @protected
 *
 * @param refElementOffset {goog.math.Coordinate}
 * @param refElementSize {goog.math.Size}
 * @param myElementSize {goog.math.Size}
 * @return {goog.math.Coordinate}
 */
tart.ui.TooltipComponent.prototype.positionRight = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y - 16;
    var x = refElementOffset.x + refElementSize.width;

    return new goog.math.Coordinate(x, y);
};
