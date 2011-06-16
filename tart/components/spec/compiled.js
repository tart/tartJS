(function(){// Input 0
var g = void 0, m = null, n, o = this;
function p() {
}
function q(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function aa(a) {
  var b = q(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function u(a) {
  return a[ba] || (a[ba] = ++ca)
}
var ba = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ca = 0, da = Date.now || function() {
  return+new Date
};
function v(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.G = b.prototype;
  a.prototype = new c
}
;
// Input 1
// Input 2
// Input 3
function w(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), h = 0;c == 0 && h < f;h++) {
    var i = d[h] || "", k = e[h] || "", j = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var l = j.exec(i) || ["", "", ""], r = t.exec(k) || ["", "", ""];
      if(l[0].length == 0 && r[0].length == 0) {
        break
      }
      c = x(l[1].length == 0 ? 0 : parseInt(l[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || x(l[2].length == 0, r[2].length == 0) || x(l[2], r[2])
    }while(c == 0)
  }
  return c
}
function x(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;
// Input 4
var y, z, A, B;
function ea() {
  return o.navigator ? o.navigator.userAgent : m
}
B = A = z = y = !1;
var C;
if(C = ea()) {
  var fa = o.navigator;
  y = C.indexOf("Opera") == 0;
  z = !y && C.indexOf("MSIE") != -1;
  A = !y && C.indexOf("WebKit") != -1;
  B = !y && !A && fa.product == "Gecko"
}
var D = z, ga = B, ha = A, ia = o.navigator, ja = (ia && ia.platform || "").indexOf("Mac") != -1, E;
a: {
  var F = "", G;
  if(y && o.opera) {
    var H = o.opera.version, F = typeof H == "function" ? H() : H
  }else {
    if(ga ? G = /rv\:([^\);]+)(\)|;)/ : D ? G = /MSIE\s+([^\);]+)(\)|;)/ : ha && (G = /WebKit\/(\S+)/), G) {
      var ka = G.exec(ea()), F = ka ? ka[1] : ""
    }
  }
  if(D) {
    var I, la = o.document;
    I = la ? la.documentMode : g;
    if(I > parseFloat(F)) {
      E = String(I);
      break a
    }
  }
  E = F
}
var J = {};
// Input 5
// Input 6
// Input 7
var K = Array.prototype, ma = K.indexOf ? function(a, b, c) {
  return K.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(typeof a == "string") {
    if(typeof b != "string" || b.length != 1) {
      return-1
    }
    return a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, na = K.forEach ? function(a, b, c) {
  K.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = typeof a == "string" ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
// Input 8
// Input 9
var L;
// Input 10
// Input 11
D && (J["9"] || (J["9"] = w(E, "9") >= 0));
D && (J["8"] || (J["8"] = w(E, "8") >= 0));
// Input 12
// Input 13
function M() {
  oa && (N[u(this)] = this)
}
var oa = !1, N = {};
M.prototype.t = !1;
M.prototype.j = function() {
  if(!this.t && (this.t = !0, this.f(), oa)) {
    var a = u(this);
    if(!N.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete N[a]
  }
};
M.prototype.f = function() {
};
// Input 14
function O(a, b) {
  M.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
v(O, M);
O.prototype.f = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
O.prototype.q = !1;
O.prototype.O = !0;
// Input 15
var pa = new Function("a", "return a");
// Input 16
function P(a, b) {
  a && this.o(a, b)
}
v(P, O);
n = P.prototype;
n.target = m;
n.relatedTarget = m;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = !1;
n.altKey = !1;
n.shiftKey = !1;
n.metaKey = !1;
n.N = !1;
n.v = m;
n.o = function(a, b) {
  var c = this.type = a.type;
  O.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ga) {
      try {
        pa(d.nodeName)
      }catch(e) {
        d = m
      }
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.N = ja ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.v = a;
  delete this.O;
  delete this.q
};
n.f = function() {
  P.G.f.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.v = m
};
// Input 17
function qa() {
}
var ra = 0;
n = qa.prototype;
n.key = 0;
n.i = !1;
n.r = !1;
n.o = function(a, b, c, d, e, f) {
  if(q(a) == "function") {
    this.A = !0
  }else {
    if(a && a.handleEvent && q(a.handleEvent) == "function") {
      this.A = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.p = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.L = f;
  this.r = !1;
  this.key = ++ra;
  this.i = !1
};
n.handleEvent = function(a) {
  if(this.A) {
    return this.p.call(this.L || this.src, a)
  }
  return this.p.handleEvent.call(this.p, a)
};
// Input 18
var sa, ta = (sa = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function Q(a, b) {
  M.call(this);
  this.B = b;
  this.d = [];
  if(a > this.B) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.d.push(this.g())
  }
}
v(Q, M);
n = Q.prototype;
n.c = m;
n.s = m;
n.getObject = function() {
  if(this.d.length) {
    return this.d.pop()
  }
  return this.g()
};
function R(a, b) {
  a.d.length < a.B ? a.d.push(b) : a.m(b)
}
n.g = function() {
  return this.c ? this.c() : {}
};
n.m = function(a) {
  if(this.s) {
    this.s(a)
  }else {
    var b = q(a);
    if(b == "object" || b == "array" || b == "function") {
      if(q(a.j) == "function") {
        a.j()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.f = function() {
  Q.G.f.call(this);
  for(var a = this.d;a.length;) {
    this.m(a.pop())
  }
  delete this.d
};
// Input 20
var S, T, U, ua, va, wa, xa, ya;
(function() {
  function a() {
    return{b:0, h:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return h.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new qa
  }
  function e() {
    return new P
  }
  var f = sa && !(w(ta, "5.7") >= 0), h;
  ua = function(a) {
    h = a
  };
  if(f) {
    S = function(a) {
      R(i, a)
    };
    T = function() {
      return k.getObject()
    };
    U = function(a) {
      R(k, a)
    };
    va = function() {
      R(j, c())
    };
    wa = function(a) {
      R(t, a)
    };
    xa = function() {
      return l.getObject()
    };
    ya = function(a) {
      R(l, a)
    };
    var i = new Q(0, 600);
    i.c = a;
    var k = new Q(0, 600);
    k.c = b;
    var j = new Q(0, 600);
    j.c = c;
    var t = new Q(0, 600);
    t.c = d;
    var l = new Q(0, 600);
    l.c = e
  }else {
    S = p, T = b, wa = va = U = p, xa = e, ya = p
  }
})();
// Input 21
var V = {}, W = {}, za = {}, Aa = {};
function Ba(a, b, c, d) {
  if(!d.k && d.C) {
    for(var e = 0, f = 0;e < d.length;e++) {
      if(d[e].i) {
        var h = d[e].proxy;
        h.src = m;
        va(h);
        wa(d[e])
      }else {
        e != f && (d[f] = d[e]), f++
      }
    }
    d.length = f;
    d.C = !1;
    f == 0 && (U(d), delete W[a][b][c], W[a][b].b--, W[a][b].b == 0 && (S(W[a][b]), delete W[a][b], W[a].b--), W[a].b == 0 && (S(W[a]), delete W[a]))
  }
}
function Ca(a) {
  if(a in Aa) {
    return Aa[a]
  }
  return Aa[a] = "on" + a
}
function Da(a, b, c, d, e) {
  var f = 1, b = u(b);
  if(a[b]) {
    a.h--;
    a = a[b];
    a.k ? a.k++ : a.k = 1;
    try {
      for(var h = a.length, i = 0;i < h;i++) {
        var k = a[i];
        k && !k.i && (f &= Ea(k, e) !== !1)
      }
    }finally {
      a.k--, Ba(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Ea(a, b) {
  var c = a.handleEvent(b);
  if(a.r) {
    var d = a.key;
    if(V[d]) {
      var e = V[d];
      if(!e.i) {
        var f = e.src, h = e.type, i = e.proxy, k = e.capture;
        f.removeEventListener ? (f == o || !f.X) && f.removeEventListener(h, i, k) : f.detachEvent && f.detachEvent(Ca(h), i);
        f = u(f);
        i = W[h][k][f];
        if(za[f]) {
          var j = za[f], t = ma(j, e);
          t >= 0 && K.splice.call(j, t, 1);
          j.length == 0 && delete za[f]
        }
        e.i = !0;
        i.C = !0;
        Ba(h, k, f, i);
        delete V[d]
      }
    }
  }
  return c
}
ua(function(a, b) {
  if(!V[a]) {
    return!0
  }
  var c = V[a], d = c.type, e = W;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], f, h;
  L === g && (L = D && !o.addEventListener);
  if(L) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var k = o;f = i.shift();) {
          if(k[f] != m) {
            k = k[f]
          }else {
            i = m;
            break a
          }
        }
        i = k
      }
    }
    f = i;
    i = !0 in e;
    k = !1 in e;
    if(i) {
      if(f.keyCode < 0 || f.returnValue != g) {
        return!0
      }
      a: {
        var j = !1;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(t) {
            j = !0
          }
        }
        if(j || f.returnValue == g) {
          f.returnValue = !0
        }
      }
    }
    j = xa();
    j.o(f, this);
    f = !0;
    try {
      if(i) {
        for(var l = T(), r = j.currentTarget;r;r = r.parentNode) {
          l.push(r)
        }
        h = e[!0];
        h.h = h.b;
        for(var s = l.length - 1;!j.q && s >= 0 && h.h;s--) {
          j.currentTarget = l[s], f &= Da(h, l[s], d, !0, j)
        }
        if(k) {
          h = e[!1];
          h.h = h.b;
          for(s = 0;!j.q && s < l.length && h.h;s++) {
            j.currentTarget = l[s], f &= Da(h, l[s], d, !1, j)
          }
        }
      }else {
        f = Ea(c, j)
      }
    }finally {
      if(l) {
        l.length = 0, U(l)
      }
      j.j();
      ya(j)
    }
    return f
  }
  d = new P(b, this);
  try {
    f = Ea(c, d)
  }finally {
    d.j()
  }
  return f
});
// Input 22
new Q(0, 100);
// Input 23
var X = "StopIteration" in o ? o.StopIteration : Error("StopIteration");
function Y() {
}
Y.prototype.next = function() {
  throw X;
};
Y.prototype.l = function() {
  return this
};
function Fa(a) {
  if(a instanceof Y) {
    return a
  }
  if(typeof a.l == "function") {
    return a.l(!1)
  }
  if(aa(a)) {
    var b = 0, c = new Y;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw X;
        }
        if(b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  throw Error("Not implemented");
}
function Ga(a, b) {
  if(aa(a)) {
    try {
      na(a, b, g)
    }catch(c) {
      if(c !== X) {
        throw c;
      }
    }
  }else {
    a = Fa(a);
    try {
      for(;;) {
        b.call(g, a.next(), g, a)
      }
    }catch(d) {
      if(d !== X) {
        throw d;
      }
    }
  }
}
;
// Input 24
// Input 25
function Z(a) {
  this.e = {};
  this.a = [];
  var b = arguments.length;
  if(b > 1) {
    if(b % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    if(a) {
      var d;
      if(a instanceof Z) {
        c = Ha(a);
        Ia(a);
        d = [];
        for(b = 0;b < a.a.length;b++) {
          d.push(a.e[a.a[b]])
        }
      }else {
        var b = [], e = 0;
        for(c in a) {
          b[e++] = c
        }
        c = b;
        b = [];
        e = 0;
        for(d in a) {
          b[e++] = a[d]
        }
        d = b
      }
      for(b = 0;b < c.length;b++) {
        this.set(c[b], d[b])
      }
    }
  }
}
n = Z.prototype;
n.b = 0;
n.version_ = 0;
function Ha(a) {
  Ia(a);
  return a.a.concat()
}
function Ia(a) {
  if(a.b != a.a.length) {
    for(var b = 0, c = 0;b < a.a.length;) {
      var d = a.a[b];
      Object.prototype.hasOwnProperty.call(a.e, d) && (a.a[c++] = d);
      b++
    }
    a.a.length = c
  }
  if(a.b != a.a.length) {
    for(var e = {}, c = b = 0;b < a.a.length;) {
      d = a.a[b], Object.prototype.hasOwnProperty.call(e, d) || (a.a[c++] = d, e[d] = 1), b++
    }
    a.a.length = c
  }
}
n.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.e, a)) {
    return this.e[a]
  }
  return b
};
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.e, a) || (this.b++, this.a.push(a), this.version_++);
  this.e[a] = b
};
n.l = function(a) {
  Ia(this);
  var b = 0, c = this.a, d = this.e, e = this.version_, f = this, h = new Y;
  h.next = function() {
    for(;;) {
      if(e != f.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw X;
      }
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};
// Input 26
// Input 27
// Input 28
// Input 29
// Input 30
// Input 31
function Ja() {
  this.w = [];
  this.D = new Z;
  this.U = this.V = this.W = this.P = 0;
  this.F = new Z;
  this.J = this.T = 0;
  this.M = 1;
  this.K = new Q(0, 4E3);
  this.K.g = function() {
    return new Ka
  };
  this.Q = new Q(0, 50);
  this.Q.g = function() {
    return new La
  };
  var a = this;
  this.z = new Q(0, 2E3);
  this.z.g = function() {
    return String(a.M++)
  };
  this.z.m = function() {
  };
  this.Y = 3
}
function La() {
  this.H = this.R = this.count = 0
}
La.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.R * 10) / 10, " ms)");
  this.H && a.push(" [VarAlloc = ", this.H, "]");
  return a.join("")
};
function Ka() {
}
function Ma(a, b, c, d) {
  var e = [];
  c == -1 ? e.push("    ") : e.push(Na(a.u - c));
  e.push(" ", Oa(a.u - b));
  a.n == 0 ? e.push(" Start        ") : a.n == 1 ? (e.push(" Done "), e.push(Na(a.Z - a.startTime), " ms ")) : e.push(" Comment      ");
  e.push(d, a);
  a.S > 0 && e.push("[VarAlloc ", a.S, "] ");
  return e.join("")
}
Ka.prototype.toString = function() {
  return this.type == m ? this.I : "[" + this.type + "] " + this.I
};
Ja.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.w.length;d++) {
    var e = this.w[d];
    e.n == 1 && c.pop();
    a.push(" ", Ma(e, this.P, b, c.join("")));
    b = e.u;
    a.push("\n");
    e.n == 0 && c.push("|  ")
  }
  if(this.D.b != 0) {
    var f = da();
    a.push(" Unstopped timers:\n");
    Ga(this.D, function(b) {
      a.push("  ", b, " (", f - b.startTime, " ms, started at ", Oa(b.startTime), ")\n")
    })
  }
  b = Ha(this.F);
  for(d = 0;d < b.length;d++) {
    c = this.F.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.T, "\n", "Total comments created ", this.J, "\n", "Overhead start: ", this.W, " ms\n", "Overhead end: ", this.V, " ms\n", "Overhead comment: ", this.U, " ms\n");
  return a.join("")
};
function Na(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function Oa(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Ja;
// Input 32
// Input 33
// Input 34
// Input 35
// Input 36
// Input 37
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
