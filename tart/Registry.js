// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

/**
 * @fileoverview tart.Registry is a convenience class that wraps goog.structs.Map and is intended to use as
 * a global registry across a web application.
 */

goog.provide('tart.Registry');
goog.require('goog.structs.Map');



/**
 * tart Registry class.
 * @constructor
 * @extends {goog.structs.Map}
 */
tart.Registry = function() {
    goog.base(this);
};
goog.inherits(tart.Registry, goog.structs.Map);
