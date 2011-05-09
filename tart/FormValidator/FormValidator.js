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
 * @fileoverview tart.FormValidator is a form validation library which uses tart.Validation instance as validator.
 *
 * Example usage:
 *
 * var form = $("form");
 * var validationForSubmit = function (errors) {
 *     //do some stuff with 'errors' object
 * };
 * var validationForBlur = function (errors) {
 *     //do some stuff with 'errors' object
 * };
 * tart.FormValidator(form).validateOnSubmit(validationForSubmit);
 * tart.FormValidator(form).validateOnBlur(validateOnBlur);
 *
 * More examples can be seen from spec/FormValidationSpec.js file
 */

goog.provide('tart.FormValidator');

/**
 * Attach validator to formEl
 *
 * @param {object} formEl jQuery element for selected form.
 * @return {tart.FormValidator} .
 * @this
 */
tart.FormValidator = function(formEl) {
    //TODO: this is tightly coupled to tart.Validation
    this.validator = tart.Validation;
    this.form = formEl;
    this.errors = [];
    return this;
};

/**
 * Set validation rules to attached form
 *
 * @param {object} rules given rules in object literal notation.
 * @return {tart.FormValidator} .
 * @this
 */
tart.FormValidator.prototype.setRules = function(rules) {
    this.rules = rules;
    return this;
};


/**
 * Find element with elementName in given form object
 *
 * @param {string} elementName name of element which to be find in form.
 * @return {object} jQuery object for given element.
 */
tart.FormValidator.prototype.getFormElementByName = function(elementName) {
    var el = this.form.find('input[name=' + elementName + ']');
    return el;
};


/**
 * Find related element attribute for given input type
 *
 * @param {object} el jQuery object of element.
 * @return {string} elements value for related input type.
 */
tart.FormValidator.prototype.getElementAttributeToCheck = function(el) {
    //TODO: this can vary on elements type such has "attr"
    return el.val();
};

/**
 * Rule key for tart.Validation
 *
 * @param {string} ruleKey key of rule.
 * @return {object} elements value for related input type.
 */
tart.FormValidator.prototype.getValidationRuleByKey = function(ruleKey) {
    var rule;
    //TODO: this swich case should be looked up from an object literal
    switch (ruleKey) {
        case 'isEmail' : rule = this.validator.is.email; break;
    }

    return rule;
};

/**
 * Get rule key and rule options from rule object
 *
 * @param {object} rule rule object whom key is ruleName and value is rule options.
 * @return {object} object which has .key and .options nodes.
 */
tart.FormValidator.prototype.getRuleKeyAndOptions = function(rule) {
    var result = {};

    //TODO: there should be a smarter way to do this
    for (var i in rule) {
        result.key = i;
        result.options = rule[i];
    }

    return result;
};


/**
 * Apply rule and generate result in object literal
 *
 * @param {object} el jQuery object to rule rule object whom key is ruleName and value is rule options.
 * @param {object} rule rule to be applied to el.
 * @return {object} result object which has .success and .item nodes.
 */
tart.FormValidator.prototype.applyRule = function(el, rule) {
    var value = this.getElementAttributeToCheck(el);
    var keyAndOptions = this.getRuleKeyAndOptions(rule);
    var key = keyAndOptions.key;
    var validationRule = this.getValidationRuleByKey(key);

    var result = validationRule(value);

    return {success: result, item: {el: el, text: keyAndOptions.options.text}};
};


/**
 * Validate given form object with given rules, if any errors occured this.errors array will be populated
 *
 * @return {tart.FormValidator} .
 * @this
 */
tart.FormValidator.prototype.validate = function() {
    this.errors = [];
    var el,
        rule,
        result;

    for (var i in this.rules) {
        el = this.getFormElementByName(i);
        rule = this.rules[i];

        result = this.applyRule(el, rule);
        if (!result.success) {
            this.errors.push(result.item);
        }
    }

    return this;
};

/**
 * Check if validation operation is successful or not by looking at this.errors array
 *
 * @return {boolean} validation is successful or not.
 */
tart.FormValidator.prototype.isValid = function() {
    if (this.errors.length == 0) {
        return true;
    }
    else {
        return false;
    }
};

/**
 * Get generated errors array which contains element (el) and error text(text)
 *
 * @return {array} errors array.
 */
tart.FormValidator.prototype.getErrors = function() {
    return this.errors;
};
