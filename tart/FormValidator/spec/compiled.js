(function() {// Input 0
    var d = void 0;
    // Input 1
    var e = {has: {}, is: {}};
    e.is.e = function(a) {
        return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a);
    };
    e.is.i = function(a) {
        return $.trim(a).length > 0;
    };
    e.is.j = function(a) {
        return/^[0-9]+$/.test(a);
    };
    e.is.c = function(a) {
        return/(\d\D)|(\D\d)/.test(a);
    };
    e.has.g = function(a, g) {
        return a.length >= g;
    };
    e.has.maxLength = function(a, g) {
        return a.length <= g;
    };
    e.has.h = function(a, g) {
        return a >= g;
    };
    e.has.f = function(a, g) {
        return a <= g;
    };
    // Input 2
    function f(a) {
        this.b = e;
        this.form = a;
        this.a = [];
        return this;
    }
    function i(a, g) {
        a.rules = g;
        return a;
    }
    function o(a) {
        a.a = [];
        var g, c, b, l;
        for (l in a.rules) {
            g = a.form.find('input[name=' + l + ']');
            c = a.rules[l];
            b = a;
            var n = c;
            c = g.val();
            var m = [], h = d;
            for (h in n) {
                m.push({key: h, options: n[h]});
            }
            for (var n = m, j = h = d, j = h = j = d, m = 0; m < n.length; m++) {
                var h = n[m], j = h.key, h = h.options, k = d;
                switch (j) {
                    case 'isEmail':
                        k = b.b.is.e;
                        break;
                    case 'isNotOnlySpace':
                        k = b.b.is.i;
                        break;
                    case 'isNumeric':
                        k = b.b.is.j;
                        break;
                    case 'isDigitAndNonDigit':
                        k = b.b.is.c;
                        break;
                    case 'hasMaxLength':
                        k = b.b.has.maxLength;
                        break;
                    case 'hasMinLength':
                        k = b.b.has.g;
                        break;
                    case 'hasMaxValue':
                        k = b.b.has.f;
                        break;
                    case 'hasMinValue':
                        k = b.b.has.h;
                }
                j = k;
                j = j(c, h.value);
                if (!j) {
                    break;
                }
            }
            b = {k: j, item: {d: g, text: h.text}};
            if (!b.k) {
                a.a.push(b.item);
                break;
            }
        }
    }
    function p(a) {
        return a.a.length == 0 ? !0 : !1;
    }
    function q(a, g) {
        g = g || function() {
        };
        a.form.submit(function(c) {
            o(a);
            p(a) || (c.preventDefault(), c.stopImmediatePropagation(), g(a.a));
        });
    }
;
    // Input 3
    describe('Form Validator', function() {
        var a, g, c = [];
        beforeEach(function() {
            g = $('<form>');
            c[0] = $('<input>').attr('name', 'testInput1').appendTo(g);
            c[1] = $('<input>').attr('name', 'testInput2').appendTo(g);
            a = new f(g);
        });
        it('validator should be object', function() {
            expect(typeof a).toEqual('object');
        });
        describe('Form validator for email', function() {
            var b = {testInput1: {isEmail: {text: 'Not a valid email'}}};
            it("should validate an input which has 'foo@bar.com' as valid email", function() {
                c[0].val('foo@bar.com');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate in input which has 'foo@bar.xxxxx' as valid email", function() {
                c[0].val('foo@bar.xxxxx');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate in input which has 'foo@bar.xxxxx' with text 'Not a valid email'", function() {
                c[0].val('foo@bar.xxxxx');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Not a valid email');
            });
            it("should not validate in input which has '' an errr text should be 'Not a valid email'", function() {
                c[0].val(' ');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Not a valid email');
            });
        });
        describe('Form validator for not only space', function() {
            var b = {testInput1: {isNotOnlySpace: {text: 'You have ve to write at least one char or digit'}}};
            it("should validate an input which starts with space but has some chars like '  foo   bar   '", function() {
                c[0].val('   foo   bar    ');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input which has only spaces like '    '", function() {
                c[0].val('   ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an empty string ''", function() {
                c[0].val('');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should return error text 'You have ve to write at least one char or digit' on error", function() {
                c[0].val('');
                o(i(a, b));
                expect(a.a[0].text).toEqual('You have ve to write at least one char or digit');
            });
        });
        describe('Form validator for numeric control', function() {
            var b = {testInput1: {isNumeric: {text: 'You can type only numbers between 0-9'}}};
            it("should validate an input which has only numbers like '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input which has numbers and space like ' 1234 5'", function() {
                c[0].val(' 1234 5');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input which has numbers and chars  like '12345foo'", function() {
                c[0].val('12345foo');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate input with text 'You can type only numbers between 0-9' for 'foo12345bar'", function() {
                c[0].val('foo12345foo');
                o(i(a, b));
                expect(a.a[0].text).toEqual('You can type only numbers between 0-9');
            });
        });
        describe('Form validator for input which contains both digit and non digit char', function() {
            var b = {testInput1: {isDigitAndNonDigit: {text: 'Your input must contain both digit and non digit char'}}};
            it("should not validate an input which has only numbers like '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input which has only alpha chars 'foobar'", function() {
                c[0].val('foobar');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input which has only spaces '    '", function() {
                c[0].val('    ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should validate an input which has both digit and alpha chars 'foo12345bar'", function() {
                c[0].val('foo12345foo');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should validate an input which has both digit, alpha chars,no nalpha chars 'foo12345bar-_`'", function() {
                c[0].val('foo12345foo-_`');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should validate an input which has both digit and space chars like '12345 '", function() {
                c[0].val('12345 ');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should  not validate an input which has both alpha and space chars like 'foobar '", function() {
                c[0].val('foobar ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input which has non alpha chars and space chars like '~-? '", function() {
                c[0].val('~-? ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should return text 'Your input must contain both digit and non digit char' for invalid input", function() {
                c[0].val('~-? ');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Your input must contain both digit and non digit char');
            });
        });
        describe('Form validator to check inputs max length', function() {
            var b = {testInput1: {hasMaxLength: {text: 'Your inputs lenght is more than 7', value: 7}}};
            it("should validate an input like '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input like '12345   '", function() {
                c[0].val('12345   ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input like '        '", function() {
                c[0].val('        ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should validate an input like '123 5 7'", function() {
                c[0].val('123 5 7');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should return 'Your inputs lenght is more than 7' text on error", function() {
                c[0].val('123 5 7 foo bar');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Your inputs lenght is more than 7');
            });
        });
        describe('Form validator to check inputs min length', function() {
            var b = {testInput1: {hasMinLength: {text: 'Your inputs lenght is less than 3', value: 3}}};
            it("should validate an input like '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input like '12'", function() {
                c[0].val('12');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input like '  '", function() {
                c[0].val('  ');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should validate an input like '1  '", function() {
                c[0].val('1  ');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should return 'Your inputs lenght is less than 3' text on error", function() {
                c[0].val('12');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Your inputs lenght is less than 3');
            });
        });
        describe("Form validator to check input's numeric value", function() {
            var b = {testInput1: {hasMaxValue: {text: 'Your inputs value is more than 10', value: 10}}};
            it("should validate an input like '1'", function() {
                c[0].val('1');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input like '12'", function() {
                c[0].val('12');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should return 'Your inputs value is more than 10' text on error", function() {
                c[0].val('12');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Your inputs value is more than 10');
            });
        });
        describe("Form validator to check input's numeric value", function() {
            var b = {testInput1: {hasMinValue: {text: 'Your inputs value is less than 10', value: 10}}};
            it("should not validate an input like '1'", function() {
                c[0].val('1');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should validate an input like '12'", function() {
                c[0].val('12');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should return 'Your inputs value is less than 10' text on error", function() {
                c[0].val('1');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Your inputs value is less than 10');
            });
        });
        describe('Form validator for multiple rules', function() {
            var b = {testInput1: {isNumeric: {text: 'Input is not numeric'}, hasMaxLength: {text: "Input's length is more than 9", value: 9}, hasMinLength: {text: "Input's length is less than 6", value: 6}}};
            it("should not validate an input like 'fooobar'", function() {
                c[0].val('fooobar');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should validate an input like '123456'", function() {
                c[0].val('123456');
                o(i(a, b));
                expect(p(a)).toBeTruthy();
            });
            it("should not validate an input like '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("should not validate an input like '12345678910'", function() {
                c[0].val('12345678910');
                o(i(a, b));
                expect(p(a)).toBeFalsy();
            });
            it("error text should be 'Input is not numeric' for 'foobar'", function() {
                c[0].val('foobar');
                o(i(a, b));
                expect(a.a[0].text).toEqual('Input is not numeric');
            });
            it("error text should be 'Input's length is more than 9' for '1234567890'", function() {
                c[0].val('1234567890');
                o(i(a, b));
                expect(a.a[0].text).toEqual("Input's length is more than 9");
            });
            it("error text should be 'Input's length is less than 6' for '12345'", function() {
                c[0].val('12345');
                o(i(a, b));
                expect(a.a[0].text).toEqual("Input's length is less than 6");
            });
        });
        describe("Form validate validates form before form's submit", function() {
            var b = {testInput1: {isNumeric: {text: 'Input is not numeric'}, hasMaxLength: {text: "Input's length is more than 9", value: 9}, hasMinLength: {text: "Input's length is less than 6", value: 6}}};
            it('should validate form on submit and return generated errors in callback', function() {
                c[0].val('foobar');
                var l;
                q(i(a, b), function(a) {
                    l = a;
                });
                g.trigger('submit');
                expect(l[0].d.get(0)).toEqual(c[0].get(0));
                expect(l[0].text).toEqual('Input is not numeric');
            });
        });
    });
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
    jasmine.getEnv().execute();
})();
