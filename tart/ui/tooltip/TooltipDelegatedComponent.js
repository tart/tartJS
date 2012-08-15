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
//
// @author A. Emre OZTUNC <emre.oztunc@tart.com.tr>


/**
 * @fileoverview
 */

goog.provide('tart.ui.TooltipDelegatedComponent');
goog.require('tart.ui.DlgComponent');
goog.require('tart.ui.TooltipComponentManager');
goog.require('tart.ui.TooltipComponentModel');
goog.require('tart.dom');
goog.require('goog.dom');

/**
 *
 * @param {string} selector The selector needed for registration to TooltipComponentManager.
 * @constructor
 */
tart.ui.TooltipDelegatedComponent = function(selector, options) {
    console.log("TDC.cons");

    this.id = tart.getUid();
    this.selector = selector && selector;
    this.model = new this.modelClass(options);
    this.model.getTooltipComponentManager().set(this);

    this.bindModelEvents();

};

goog.inherits(tart.ui.TooltipDelegatedComponent, tart.ui.DlgComponent);

tart.ui.TooltipDelegatedComponent.prototype.modelClass = tart.ui.TooltipComponentModel;

/**
 *
 */
tart.ui.TooltipDelegatedComponent.prototype.onLoaded = function() {

};

/** @override */
tart.ui.TooltipDelegatedComponent.prototype.bindModelEvents = function() {
    console.log("bindModelEvents");
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.SHOW, this.onShow, undefined, this);
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.INIT, this.onInit, undefined, this);
    goog.events.listen(this.model, tart.ui.TooltipComponentModel.EventType.CLICK_WAIT, this.onWait, undefined,
        this);
};


/**
 * Returns base template of the component.
 * @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.getPlaceholder = function() {
    console.log("got place holder.");
    return(this.templates_base());
};


tart.ui.TooltipDelegatedComponent.prototype.onClick = function(e) {
    console.log("onClick");
    this.model.handleEvent(e.type);
    e.stopPropagation();
    this.bodyListen = goog.events.listen(document.body, goog.events.EventType.CLICK, function(e) {
        if (goog.dom.contains(this.element, e.target))
            return;
        goog.events.unlistenByKey(this.bodyListen);
        this.model.handleEvent(tart.ui.TooltipComponentModel.SMEventType.BODY_CLICK);
    }, false, this);
};


tart.ui.TooltipDelegatedComponent.prototype.onHover = function(e) {
    console.log(">>>> onHover");
    this.setContent(e);
    if (e.type == goog.events.EventType.MOUSEOUT &&
        ((e.relatedTarget && goog.dom.contains(this.element, e.relatedTarget)) ||
            e.relatedTarget == this.element) || e.relatedTarget == null)
        return;
    this.model.handleEvent(e.type);

};


tart.ui.TooltipDelegatedComponent.prototype.onBoxMouseout = function(e) {
    console.log("\<\<\<\< onBoxMouseout");
//    this.setContent(e);
    if(goog.dom.contains(this.element, e.relatedTarget)) {
        return false;
    }

    if(!tart.ui.TooltipComponentManager.matchesSelector(e.relatedTarget, this.selector))
        this.model.handleEvent(e.type);
};


tart.ui.TooltipDelegatedComponent.prototype.onWait = function() {
    console.log("----onWait");
    if(this.element.tooltip != this && this.element.tooltip) {
        this.element.tooltip.reset();
    }
    this.element.tooltip = this;
};


tart.ui.TooltipDelegatedComponent.prototype.onShow = function() {
    console.log("----onShow");
    this.getChild(this.mappings.CONTENT)[0].innerHTML = this.templates_loading();
//    document.body.appendChild(this.element);
    this.position();

    this.windowResizeListener = goog.events.listen(window, goog.events.EventType.RESIZE, function(e) {
        this.position(e);
    }, false, this);
    this.windowScrollListener = goog.events.listen(window, goog.events.EventType.SCROLL, function(e) {
        this.position(e);
    }, false, this);
};


tart.ui.TooltipDelegatedComponent.prototype.onInit = function() {
    console.log("----onInit");
    this.element.style.display = 'none';
    goog.events.unlistenByKey(this.windowResizeListener);
    goog.events.unlistenByKey(this.windowScrollListener);
};


tart.ui.TooltipDelegatedComponent.prototype.reset = function() {
    this.model.reset(); // sends to onInit
};


/**
 * Renders the content of the component.
 */
tart.ui.TooltipDelegatedComponent.prototype.render = function() {
    console.log("rendered.");
};


/**
 * Event handling proof...
 * @param {goog.events.BrowserEvent} e
 */
tart.ui.TooltipDelegatedComponent.prototype.handleIncomingEvent = function(e) {
    var that = this;
    console.log("==> TDC handleIncomingEvent: " + e.type + " model type: " + that.model.options.type);
    console.log("targ: " + e.target.className + "relTarg" + e.relatedTarget.className);

    switch (that.model.options.type) {
        case tart.ui.TooltipComponentModel.Type.CLICK:
            that.onClick(e);
            break;
        case tart.ui.TooltipComponentModel.Type.HOVER:
        default:
            if(e.type == goog.events.EventType.MOUSEOUT)
                that.onBoxMouseout(e);
            else if(e.type == goog.events.EventType.MOUSEOVER)
                that.onHover(e);
    }


//        this.setContent(e.target.className);

    console.log("===>> TDC HIE handled event coming from " + e.target.classList[0] + " " + e.target.className + " " + e.target.innerHTML);
};


/**
 * Maps related element selectors.
 *
 */
tart.ui.TooltipDelegatedComponent.prototype.mappings = {
    CONTENT: '.content',
    WRAPPER: '.wrapper',
    CAP: '.cap',
    FIRST_CLASS : '',
    SECOND_CLASS : ''
};



/**
 * This function takes a string or an element to append into the content area of the tooltip.
 * @param {goog.events.BrowserEvent} e
 */
tart.ui.TooltipDelegatedComponent.prototype.setContent = function(e) {
    console.log("setContent");
    if(e.type != goog.events.EventType.MOUSEOUT) {
        if(typeof e.target.className == 'string') {
            this.getChild(this.mappings.CONTENT)[0].innerHTML = e.target.className;
        }
        else {
            this.getChild(this.mappings.CONTENT)[0].innerHTML = '';
            this.getChild(this.mappings.CONTENT)[0].appendChild(e.target.className);
        }

        this.position(e);
    }

};


/**
 * This method takes a reference element and uses its offSet and size values along with tooltip element's size values
 * to calculate the right position to display the tooltip. If the toolTip can be shown on the top of the reference
 * element, it positions the tooltip with the distance calculated by this.model's tipOffset and boxOffset values. If it
 * is not to possible to display on top, than it looks for the suitable area to display tooltip. The possible matches
 * are 'right', 'left', 'bottom' and the default match 'top'.
 *
 * @param {goog.events.BrowserEvent} e
 **/
tart.ui.TooltipDelegatedComponent.prototype.position = function(e) {
    console.log("position");
    this.element.style.display = 'block';
//    this.refElement = e.target;
    var refElementOffset = goog.style.getPageOffset(e.target);
    var refElementSize = goog.style.getSize(e.target);
    var myElementSize = goog.style.getSize(this.element);
    var myWrapperSize = goog.style.getSize(this.getChild(this.mappings.WRAPPER)[0]);
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

    this.getChild(this.mappings.WRAPPER)[0].appendChild(this.getChild(this.mappings.CAP)[0]);
    goog.dom.classes.remove(this.element, 'right', 'left', 'top', 'bottom');
    goog.dom.classes.add(this.element, this.model.options.direction);
    this.getChild(this.mappings.CAP)[0].style.top = verticalTipCapShift + 'px';
    this.getChild(this.mappings.CAP)[0].style.left = horizontalTipCapShift + 'px';

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
tart.ui.TooltipDelegatedComponent.prototype.positionLeft = function(refElementOffset, refElementSize, myElementSize) {
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
tart.ui.TooltipDelegatedComponent.prototype.positionTop = function(refElementOffset, refElementSize, myElementSize) {
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
tart.ui.TooltipDelegatedComponent.prototype.positionBottom = function(refElementOffset, refElementSize, myElementSize) {
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
tart.ui.TooltipDelegatedComponent.prototype.positionRight = function(refElementOffset, refElementSize, myElementSize) {
    var y = refElementOffset.y - 16;
    var x = refElementOffset.x + refElementSize.width;

    return new goog.math.Coordinate(x, y);
};

/**
 *  Returns the base template of the tooltip as string.
 *  @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '" class="tTip top">' +
        this.templates_wrapper(this.templates_content()) +
        this.templates_cap() +
        '</div>';
};


/**
 * Returns the wrapper of the tooltip component which wraps the content area.
 * @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_wrapper = function(content) {
    return '<div id="' + tart.getUid() + '" class="wrapper">' + content + '</div>';
};


/**
 * Returns the content area of the tooltip component.
 * @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_content = function() {
    return '<div id="' + tart.getUid() + '" class="content">' + this.id + '</div>';
};


/**
 *  Returns the cap of tooltip component.
 *  @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_cap = function() {
    return '<div class="cap"></div>';
};


/**
 *
 *  @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_spare = function() {

};


/**
 * This function returns the content area of the tooltip as a string.
 * @return {string}
 */
tart.ui.TooltipDelegatedComponent.prototype.templates_loading = function() {
    return '<div class="loadContainer"><div class="loading"></div></div>';
};


/**
 *
 */
tart.ui.TooltipDelegatedComponent.prototype.disposeInternal = function() {
    tuttur.Registry.get('tooltipComponentManager').remove(this);
};

