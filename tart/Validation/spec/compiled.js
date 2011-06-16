(function(){// Input 0
// Input 1
var c = {has:{}, is:{}};
c.is.b = function(a) {
  return/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(a)
};
c.is.e = function(a) {
  return $.trim(a).length > 0
};
c.is.d = function(a) {
  return/^[0-9]+$/.test(a)
};
c.is.a = function(a) {
  return/(\d\D)|(\D\d)/.test(a)
};
c.has.c = function(a, b) {
  return a.length >= b
};
c.has.maxLength = function(a, b) {
  return a.length <= b
};
c.has.g = function(a) {
  return 3 >= a
};
c.has.f = function(a) {
  return 3 <= a
};
// Input 2
describe("Validation", function() {
  var a;
  beforeEach(function() {
    a = c
  });
  it("validator should be object", function() {
    expect(typeof a).toEqual("object")
  });
  describe("Validation.is", function() {
    describe("Validation.is.email", function() {
      it("regular email like alnum1@alnum2.tld should pass", function() {
        var b = a.is.b("alnum1@alnum2.tld");
        expect(b).toBeTruthy()
      });
      it("should not validate an email which has alnum1@alnum2.tldmorethan4chars", function() {
        var b = a.is.b("alnum1@alnum2.tldmorethan4chars");
        expect(b).toBeFalsy()
      });
      it("should not validate an email which containts non@alhan\u00fcmeric.\u00e7ars ", function() {
        var b = a.is.b("non@alhan\u00fcmeric.\u00e7ars");
        expect(b).toBeFalsy()
      });
      it("should validate an email which belongs@to.a.sub.dom.ain", function() {
        var b = a.is.b("belongs@to.a.sub.dom.ain");
        expect(b).toBeTruthy()
      });
      it("should not validate email which contains@space.com", function() {
        var b = a.is.b("which contains@space.com");
        expect(b).toBeFalsy()
      })
    });
    describe("Validation.is.notOnlySpace", function() {
      it("should not validate an input which has only white space", function() {
        expect(a.is.e("   ")).toBeFalsy()
      });
      it("should validate an input which starts with whitespace but has other chars", function() {
        expect(a.is.e("   foobar")).toBeTruthy()
      });
      it("should validate an input which starts and ends with whitespace but has other chars", function() {
        expect(a.is.e("   foobar    ")).toBeTruthy()
      })
    });
    describe("Validation.is.numeric", function() {
      it("should not validate text which has non numeric chars", function() {
        var b = a.is.d("foo123bar");
        expect(b).toBeFalsy()
      });
      it("should not validate text which starts with numeric but has non numeric chars", function() {
        var b = a.is.d("123bar");
        expect(b).toBeFalsy()
      });
      it("should not validate text which starts with space but has only numeric chars", function() {
        var b = a.is.d("   123");
        expect(b).toBeFalsy()
      });
      it("should validate text which has only numeric chars", function() {
        var b = a.is.d("123");
        expect(b).toBeTruthy()
      })
    });
    describe("Validation.is.digitAndNonDigit", function() {
      it("should not validate text which has chars but numbers", function() {
        var b = a.is.a("foobar");
        expect(b).toBeFalsy()
      });
      it("should not validate text which has chars only numbers", function() {
        var b = a.is.a("1234");
        expect(b).toBeFalsy()
      });
      it("should not validate text which has only whitespaces", function() {
        var b = a.is.a("   ");
        expect(b).toBeFalsy()
      });
      it("should validate text which contains both numbers and chars", function() {
        var b = a.is.a("foo123bar");
        expect(b).toBeTruthy()
      });
      it("should validate text which contains both numbers, chars and whitespaces", function() {
        var b = a.is.a("foo 123 bar");
        expect(b).toBeTruthy()
      })
    })
  });
  describe("Validation.has", function() {
    describe("Validation.has.minLength", function() {
      it("should validate 'abc' has minLength 3", function() {
        expect(a.has.c("abc", 3)).toBeTruthy()
      });
      it("should validate 'abc' has minLength 2", function() {
        expect(a.has.c("abc", 2)).toBeTruthy()
      });
      it("should not validate 'abc' has minLength 4", function() {
        expect(a.has.c("abc", 4)).toBeFalsy()
      });
      it("should validate ' ' has minLength 1", function() {
        expect(a.has.c(" ", 1)).toBeTruthy()
      });
      it("should not validate '' has minLength 1", function() {
        expect(a.has.c("", 1)).toBeFalsy()
      })
    });
    describe("Validation.has.maxLength", function() {
      it("should not validate 'abc' has max length 2", function() {
        var b = a.has.maxLength("abc", 2);
        expect(b).toBeFalsy()
      });
      it("should validate 'ab' has max length 2", function() {
        var b = a.has.maxLength("ab", 2);
        expect(b).toBeTruthy()
      });
      it("should not validate '   ' has max length 2", function() {
        var b = a.has.maxLength("   ", 2);
        expect(b).toBeFalsy()
      });
      it("should validate '' has max length 0", function() {
        var b = a.has.maxLength("", 0);
        expect(b).toBeTruthy()
      })
    });
    describe("Validation.has.minValue", function() {
      it("should validate 3 has min value 1", function() {
        expect(a.has.g(1)).toBeTruthy()
      });
      it("should not validate 3 has min value 4", function() {
        expect(a.has.g(4)).toBeFalsy()
      })
    });
    describe("Validation.has.maxValue", function() {
      it("should validate 3 has max value 4", function() {
        expect(a.has.f(4)).toBeTruthy()
      });
      it("should not validate 3 has max value 2", function() {
        expect(a.has.f(2)).toBeFalsy()
      })
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
c.h = void 0;
})()
