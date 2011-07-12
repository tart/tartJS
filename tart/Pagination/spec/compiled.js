(function(){// Input 0
var h = void 0, k = null, n, o = this;
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
function r(a) {
  return typeof a == "string"
}
function t(a) {
  return a[ba] || (a[ba] = ++ca)
}
var ba = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ca = 0, da = Date.now || function() {
  return+new Date
};
function u(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.A = b.prototype;
  a.prototype = new c
}
;
// Input 1
// Input 2
function ea(a, b) {
  for(var c = 0, e = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(e.length, f.length), g = 0;c == 0 && g < d;g++) {
    var i = e[g] || "", j = f[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
    do {
      var m = l.exec(i) || ["", "", ""], s = A.exec(j) || ["", "", ""];
      if(m[0].length == 0 && s[0].length == 0) {
        break
      }
      c = fa(m[1].length == 0 ? 0 : parseInt(m[1], 10), s[1].length == 0 ? 0 : parseInt(s[1], 10)) || fa(m[2].length == 0, s[2].length == 0) || fa(m[2], s[2])
    }while(c == 0)
  }
  return c
}
function fa(a, b) {
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
// Input 3
var v, ga, x, ha;
function ia() {
  return o.navigator ? o.navigator.userAgent : k
}
ha = x = ga = v = !1;
var y;
if(y = ia()) {
  var ja = o.navigator;
  v = y.indexOf("Opera") == 0;
  ga = !v && y.indexOf("MSIE") != -1;
  x = !v && y.indexOf("WebKit") != -1;
  ha = !v && !x && ja.product == "Gecko"
}
var z = ga, ka = ha, la = x, ma = o.navigator, na = (ma && ma.platform || "").indexOf("Mac") != -1, oa;
a: {
  var B = "", C;
  if(v && o.opera) {
    var pa = o.opera.version, B = typeof pa == "function" ? pa() : pa
  }else {
    if(ka ? C = /rv\:([^\);]+)(\)|;)/ : z ? C = /MSIE\s+([^\);]+)(\)|;)/ : la && (C = /WebKit\/(\S+)/), C) {
      var qa = C.exec(ia()), B = qa ? qa[1] : ""
    }
  }
  if(z) {
    var ra, sa = o.document;
    ra = sa ? sa.documentMode : h;
    if(ra > parseFloat(B)) {
      oa = String(ra);
      break a
    }
  }
  oa = B
}
var ta = {}, ua = {};
// Input 4
function va(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
var wa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function xa(a) {
  for(var b, c, e = 1;e < arguments.length;e++) {
    c = arguments[e];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < wa.length;f++) {
      b = wa[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;
// Input 5
// Input 6
// Input 7
var D = Array.prototype, ya = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(r(a)) {
    if(!r(b) || b.length != 1) {
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
}, za = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = r(a) ? a.split("") : a, d = 0;d < e;d++) {
    d in f && b.call(c, f[d], d, a)
  }
};
// Input 8
// Input 9
var Aa;
// Input 10
// Input 11
z && (ua[9] || (ua[9] = z && document.documentMode && document.documentMode >= 9));
z && (ta["8"] || (ta["8"] = ea(oa, "8") >= 0));
// Input 12
// Input 13
function E() {
  Ba && (Ca[t(this)] = this)
}
var Ba = !1, Ca = {};
E.prototype.F = !1;
E.prototype.k = function() {
  if(!this.F && (this.F = !0, this.f(), Ba)) {
    var a = t(this);
    if(!Ca.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete Ca[a]
  }
};
E.prototype.f = function() {
  this.S && Da.apply(k, this.S)
};
function Da() {
  for(var a = 0, b = arguments.length;a < b;++a) {
    var c = arguments[a];
    aa(c) ? Da.apply(k, c) : c && typeof c.k == "function" && c.k()
  }
}
;
// Input 14
function F(a, b) {
  E.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
u(F, E);
F.prototype.f = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
F.prototype.l = !1;
F.prototype.s = !0;
// Input 15
var Ea = new Function("a", "return a");
// Input 16
function G(a, b) {
  a && this.q(a, b)
}
u(G, F);
n = G.prototype;
n.target = k;
n.relatedTarget = k;
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
n.V = !1;
n.H = k;
n.q = function(a, b) {
  var c = this.type = a.type;
  F.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var e = a.relatedTarget;
  if(e) {
    if(ka) {
      var f;
      a: {
        try {
          Ea(e.nodeName);
          f = !0;
          break a
        }catch(d) {
        }
        f = !1
      }
      f || (e = k)
    }
  }else {
    if(c == "mouseover") {
      e = a.fromElement
    }else {
      if(c == "mouseout") {
        e = a.toElement
      }
    }
  }
  this.relatedTarget = e;
  this.offsetX = a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.V = na ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.H = a;
  delete this.s;
  delete this.l
};
n.f = function() {
  G.A.f.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.H = k
};
// Input 17
function Fa() {
}
var Ga = 0;
n = Fa.prototype;
n.key = 0;
n.m = !1;
n.B = !1;
n.q = function(a, b, c, e, f, d) {
  if(q(a) == "function") {
    this.K = !0
  }else {
    if(a && a.handleEvent && q(a.handleEvent) == "function") {
      this.K = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.p = a;
  this.proxy = b;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.w = d;
  this.B = !1;
  this.key = ++Ga;
  this.m = !1
};
n.handleEvent = function(a) {
  if(this.K) {
    return this.p.call(this.w || this.src, a)
  }
  return this.p.handleEvent.call(this.p, a)
};
// Input 18
var Ha, Ia = (Ha = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function H(a, b) {
  E.call(this);
  this.L = b;
  this.i = [];
  if(a > this.L) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.i.push(this.o())
  }
}
u(H, E);
n = H.prototype;
n.h = k;
n.D = k;
n.getObject = function() {
  if(this.i.length) {
    return this.i.pop()
  }
  return this.o()
};
function I(a, b) {
  a.i.length < a.L ? a.i.push(b) : a.u(b)
}
n.o = function() {
  return this.h ? this.h() : {}
};
n.u = function(a) {
  if(this.D) {
    this.D(a)
  }else {
    var b = q(a);
    if(b == "object" || b == "array" || b == "function") {
      if(q(a.k) == "function") {
        a.k()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.f = function() {
  H.A.f.call(this);
  for(var a = this.i;a.length;) {
    this.u(a.pop())
  }
  delete this.i
};
// Input 20
var J, K, L, M, Ja, Ka, La, Ma, Na, Oa, Pa;
(function() {
  function a() {
    return{b:0, d:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      b = g.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    }
    return a
  }
  function e() {
    return new Fa
  }
  function f() {
    return new G
  }
  var d = Ha && !(ea(Ia, "5.7") >= 0), g;
  Ka = function(a) {
    g = a
  };
  if(d) {
    J = function() {
      return i.getObject()
    };
    K = function(a) {
      I(i, a)
    };
    L = function() {
      return j.getObject()
    };
    M = function(a) {
      I(j, a)
    };
    Ja = function() {
      return l.getObject()
    };
    La = function() {
      I(l, c())
    };
    Ma = function() {
      return A.getObject()
    };
    Na = function(a) {
      I(A, a)
    };
    Oa = function() {
      return m.getObject()
    };
    Pa = function(a) {
      I(m, a)
    };
    var i = new H(0, 600);
    i.h = a;
    var j = new H(0, 600);
    j.h = b;
    var l = new H(0, 600);
    l.h = c;
    var A = new H(0, 600);
    A.h = e;
    var m = new H(0, 600);
    m.h = f
  }else {
    J = a, K = p, L = b, M = p, Ja = c, La = p, Ma = e, Na = p, Oa = f, Pa = p
  }
})();
// Input 21
var N = {}, O = {}, P = {}, Qa = {};
function Q(a, b, c, e, f) {
  if(b) {
    if(q(b) == "array") {
      for(var d = 0;d < b.length;d++) {
        Q(a, b[d], c, e, f)
      }
    }else {
      var e = !!e, g = O;
      b in g || (g[b] = J());
      g = g[b];
      e in g || (g[e] = J(), g.b++);
      var g = g[e], i = t(a), j;
      g.d++;
      if(g[i]) {
        j = g[i];
        for(d = 0;d < j.length;d++) {
          if(g = j[d], g.p == c && g.w == f) {
            if(g.m) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = L(), g.b++
      }
      d = Ja();
      d.src = a;
      g = Ma();
      g.q(c, d, a, b, e, f);
      c = g.key;
      d.key = c;
      j.push(g);
      N[c] = g;
      P[i] || (P[i] = L());
      P[i].push(g);
      a.addEventListener ? (a == o || !a.C) && a.addEventListener(b, d, e) : a.attachEvent(Ra(b), d)
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Sa(a, b, c, e, f) {
  if(q(b) == "array") {
    for(var d = 0;d < b.length;d++) {
      Sa(a, b[d], c, e, f)
    }
  }else {
    e = !!e;
    a: {
      d = O;
      if(b in d && (d = d[b], e in d && (d = d[e], a = t(a), d[a]))) {
        a = d[a];
        break a
      }
      a = k
    }
    if(a) {
      for(d = 0;d < a.length;d++) {
        if(a[d].p == c && a[d].capture == e && a[d].w == f) {
          R(a[d].key);
          break
        }
      }
    }
  }
}
function R(a) {
  if(N[a]) {
    var b = N[a];
    if(!b.m) {
      var c = b.src, e = b.type, f = b.proxy, d = b.capture;
      c.removeEventListener ? (c == o || !c.C) && c.removeEventListener(e, f, d) : c.detachEvent && c.detachEvent(Ra(e), f);
      c = t(c);
      f = O[e][d][c];
      if(P[c]) {
        var g = P[c], i = ya(g, b);
        i >= 0 && D.splice.call(g, i, 1);
        g.length == 0 && delete P[c]
      }
      b.m = !0;
      f.M = !0;
      Ta(e, d, c, f);
      delete N[a]
    }
  }
}
function Ta(a, b, c, e) {
  if(!e.r && e.M) {
    for(var f = 0, d = 0;f < e.length;f++) {
      if(e[f].m) {
        var g = e[f].proxy;
        g.src = k;
        La(g);
        Na(e[f])
      }else {
        f != d && (e[d] = e[f]), d++
      }
    }
    e.length = d;
    e.M = !1;
    d == 0 && (M(e), delete O[a][b][c], O[a][b].b--, O[a][b].b == 0 && (K(O[a][b]), delete O[a][b], O[a].b--), O[a].b == 0 && (K(O[a]), delete O[a]))
  }
}
function Ua(a) {
  var b, c = 0, e = b == k;
  b = !!b;
  if(a == k) {
    va(P, function(a) {
      for(var d = a.length - 1;d >= 0;d--) {
        var f = a[d];
        if(e || b == f.capture) {
          R(f.key), c++
        }
      }
    })
  }else {
    if(a = t(a), P[a]) {
      for(var a = P[a], f = a.length - 1;f >= 0;f--) {
        var d = a[f];
        if(e || b == d.capture) {
          R(d.key), c++
        }
      }
    }
  }
}
function Ra(a) {
  if(a in Qa) {
    return Qa[a]
  }
  return Qa[a] = "on" + a
}
function S(a, b, c, e, f) {
  var d = 1, b = t(b);
  if(a[b]) {
    a.d--;
    a = a[b];
    a.r ? a.r++ : a.r = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.m && (d &= Va(j, f) !== !1)
      }
    }finally {
      a.r--, Ta(c, e, b, a)
    }
  }
  return Boolean(d)
}
function Va(a, b) {
  var c = a.handleEvent(b);
  a.B && R(a.key);
  return c
}
Ka(function(a, b) {
  if(!N[a]) {
    return!0
  }
  var c = N[a], e = c.type, f = O;
  if(!(e in f)) {
    return!0
  }
  var f = f[e], d, g;
  Aa === h && (Aa = z && !o.addEventListener);
  if(Aa) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var j = o;d = i.shift();) {
          if(j[d] != k) {
            j = j[d]
          }else {
            i = k;
            break a
          }
        }
        i = j
      }
    }
    d = i;
    i = !0 in f;
    j = !1 in f;
    if(i) {
      if(d.keyCode < 0 || d.returnValue != h) {
        return!0
      }
      a: {
        var l = !1;
        if(d.keyCode == 0) {
          try {
            d.keyCode = -1;
            break a
          }catch(A) {
            l = !0
          }
        }
        if(l || d.returnValue == h) {
          d.returnValue = !0
        }
      }
    }
    l = Oa();
    l.q(d, this);
    d = !0;
    try {
      if(i) {
        for(var m = L(), s = l.currentTarget;s;s = s.parentNode) {
          m.push(s)
        }
        g = f[!0];
        g.d = g.b;
        for(var w = m.length - 1;!l.l && w >= 0 && g.d;w--) {
          l.currentTarget = m[w], d &= S(g, m[w], e, !0, l)
        }
        if(j) {
          g = f[!1];
          g.d = g.b;
          for(w = 0;!l.l && w < m.length && g.d;w++) {
            l.currentTarget = m[w], d &= S(g, m[w], e, !1, l)
          }
        }
      }else {
        d = Va(c, l)
      }
    }finally {
      if(m) {
        m.length = 0, M(m)
      }
      l.k();
      Pa(l)
    }
    return d
  }
  e = new G(b, this);
  try {
    d = Va(c, e)
  }finally {
    e.k()
  }
  return d
});
// Input 22
// Input 23
// Input 24
// Input 25
var T = "StopIteration" in o ? o.StopIteration : Error("StopIteration");
function U() {
}
U.prototype.next = function() {
  throw T;
};
U.prototype.t = function() {
  return this
};
function Wa(a) {
  if(a instanceof U) {
    return a
  }
  if(typeof a.t == "function") {
    return a.t(!1)
  }
  if(aa(a)) {
    var b = 0, c = new U;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw T;
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
function Xa(a, b) {
  if(aa(a)) {
    try {
      za(a, b, h)
    }catch(c) {
      if(c !== T) {
        throw c;
      }
    }
  }else {
    a = Wa(a);
    try {
      for(;;) {
        b.call(h, a.next(), h, a)
      }
    }catch(e) {
      if(e !== T) {
        throw e;
      }
    }
  }
}
;
// Input 26
function V(a) {
  this.j = {};
  this.c = [];
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
      var e;
      if(a instanceof V) {
        c = Ya(a);
        Za(a);
        e = [];
        for(b = 0;b < a.c.length;b++) {
          e.push(a.j[a.c[b]])
        }
      }else {
        var b = [], f = 0;
        for(c in a) {
          b[f++] = c
        }
        c = b;
        b = [];
        f = 0;
        for(e in a) {
          b[f++] = a[e]
        }
        e = b
      }
      for(b = 0;b < c.length;b++) {
        this.set(c[b], e[b])
      }
    }
  }
}
n = V.prototype;
n.b = 0;
n.version_ = 0;
function Ya(a) {
  Za(a);
  return a.c.concat()
}
function Za(a) {
  if(a.b != a.c.length) {
    for(var b = 0, c = 0;b < a.c.length;) {
      var e = a.c[b];
      Object.prototype.hasOwnProperty.call(a.j, e) && (a.c[c++] = e);
      b++
    }
    a.c.length = c
  }
  if(a.b != a.c.length) {
    for(var f = {}, c = b = 0;b < a.c.length;) {
      e = a.c[b], Object.prototype.hasOwnProperty.call(f, e) || (a.c[c++] = e, f[e] = 1), b++
    }
    a.c.length = c
  }
}
n.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.j, a)) {
    return this.j[a]
  }
  return b
};
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.j, a) || (this.b++, this.c.push(a), this.version_++);
  this.j[a] = b
};
n.t = function(a) {
  Za(this);
  var b = 0, c = this.c, e = this.j, f = this.version_, d = this, g = new U;
  g.next = function() {
    for(;;) {
      if(f != d.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw T;
      }
      var g = c[b++];
      return a ? g : e[g]
    }
  };
  return g
};
// Input 27
// Input 28
// Input 29
// Input 30
// Input 31
// Input 32
function $a() {
  this.I = [];
  this.N = new V;
  this.$ = this.aa = this.ba = this.W = 0;
  this.O = new V;
  this.R = this.Z = 0;
  this.U = 1;
  this.T = new H(0, 4E3);
  this.T.o = function() {
    return new ab
  };
  this.X = new H(0, 50);
  this.X.o = function() {
    return new bb
  };
  var a = this;
  this.J = new H(0, 2E3);
  this.J.o = function() {
    return String(a.U++)
  };
  this.J.u = function() {
  };
  this.ca = 3
}
function bb() {
  this.P = this.time = this.count = 0
}
bb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  this.P && a.push(" [VarAlloc = ", this.P, "]");
  return a.join("")
};
function ab() {
}
function cb(a, b, c, e) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(db(a.G - c));
  f.push(" ", eb(a.G - b));
  a.v == 0 ? f.push(" Start        ") : a.v == 1 ? (f.push(" Done "), f.push(db(a.da - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(e, a);
  a.Y > 0 && f.push("[VarAlloc ", a.Y, "] ");
  return f.join("")
}
ab.prototype.toString = function() {
  return this.type == k ? this.Q : "[" + this.type + "] " + this.Q
};
$a.prototype.toString = function() {
  for(var a = [], b = -1, c = [], e = 0;e < this.I.length;e++) {
    var f = this.I[e];
    f.v == 1 && c.pop();
    a.push(" ", cb(f, this.W, b, c.join("")));
    b = f.G;
    a.push("\n");
    f.v == 0 && c.push("|  ")
  }
  if(this.N.b != 0) {
    var d = da();
    a.push(" Unstopped timers:\n");
    Xa(this.N, function(b) {
      a.push("  ", b, " (", d - b.startTime, " ms, started at ", eb(b.startTime), ")\n")
    })
  }
  b = Ya(this.O);
  for(e = 0;e < b.length;e++) {
    c = this.O.get(b[e]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.Z, "\n", "Total comments created ", this.R, "\n", "Overhead start: ", this.ba, " ms\n", "Overhead end: ", this.aa, " ms\n", "Overhead comment: ", this.$, " ms\n");
  return a.join("")
};
function db(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function eb(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new $a;
// Input 33
// Input 34
function W() {
  E.call(this)
}
u(W, E);
n = W.prototype;
n.C = !0;
n.z = k;
n.addEventListener = function(a, b, c, e) {
  Q(this, a, b, c, e)
};
n.removeEventListener = function(a, b, c, e) {
  Sa(this, a, b, c, e)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = O;
  if(b in c) {
    if(r(a)) {
      a = new F(a, this)
    }else {
      if(a instanceof F) {
        a.target = a.target || this
      }else {
        var e = a, a = new F(b, this);
        xa(a, e)
      }
    }
    var e = 1, f, c = c[b], b = !0 in c, d;
    if(b) {
      f = [];
      for(d = this;d;d = d.z) {
        f.push(d)
      }
      d = c[!0];
      d.d = d.b;
      for(var g = f.length - 1;!a.l && g >= 0 && d.d;g--) {
        a.currentTarget = f[g], e &= S(d, f[g], a.type, !0, a) && a.s != !1
      }
    }
    if(!1 in c) {
      if(d = c[!1], d.d = d.b, b) {
        for(g = 0;!a.l && g < f.length && d.d;g++) {
          a.currentTarget = f[g], e &= S(d, f[g], a.type, !1, a) && a.s != !1
        }
      }else {
        for(f = this;!a.l && f && d.d;f = f.z) {
          a.currentTarget = f, e &= S(d, f, a.type, !1, a) && a.s != !1
        }
      }
    }
    a = Boolean(e)
  }else {
    a = !0
  }
  return a
};
n.f = function() {
  W.A.f.call(this);
  Ua(this);
  this.z = k
};
// Input 35
function X() {
  E.call(this);
  this.n = this.g = this.a = this.e = 1
}
u(X, W);
function fb(a, b, c) {
  a.dispatchEvent({type:"pageChanged", oldValue:b, newValue:c})
}
function Y(a, b) {
  a.e = b;
  a.n = b * a.g;
  return a
}
function Z(a, b) {
  var c = a.a, b = b > a.e ? a.e : b, b = b < 1 ? 1 : b;
  a.a = b;
  fb(a, c, b)
}
X.prototype.next = function() {
  var a = this.a + 1 <= this.e ? this.a + 1 : this.a;
  fb(this, this.a, a);
  this.a = a
};
X.prototype.prev = function() {
  var a = this.a - 1 >= 1 ? this.a - 1 : this.a;
  fb(this, this.a, a);
  this.a = a
};
// Input 36
describe("Pagination", function() {
  var a;
  beforeEach(function() {
    a = new X
  });
  describe("should contain required parameters", function() {
    it("should have totalPage", function() {
      expect(a.e).toBeGreaterThan(0)
    });
    it("should have currentPage", function() {
      expect(a.a).toBeGreaterThan(0)
    });
    it("should have itemPerPage", function() {
      expect(a.g).toBeGreaterThan(0)
    });
    it("should have totalItems", function() {
      expect(a.n).toBeGreaterThan(0)
    });
    it("should set totalPage", function() {
      Y(a, 5);
      expect(a.e).toEqual(5)
    });
    it("should set currentPage", function() {
      Y(a, 5);
      Z(a, 5);
      expect(a.a).toEqual(5)
    });
    it("should set itemPerPage", function() {
      a.g = 2;
      expect(a.g).toEqual(2)
    });
    it("should set totalItems", function() {
      var b = a;
      b.n = 2;
      b.e = Math.ceil(2 / b.g);
      expect(a.n).toEqual(2)
    });
    it("should change page count when totalItem count set", function() {
      a.g = 2;
      var b = a;
      b.n = 5;
      b.e = Math.ceil(5 / b.g);
      expect(a.e).toEqual(3)
    });
    it("should change item count when totalPage count set", function() {
      a.g = 2;
      Y(a, 4);
      expect(a.n).toEqual(8)
    });
    it("should set page count to totalPageCount if page > totalPageCount", function() {
      Y(a, 5);
      Z(a, 6);
      expect(a.a).toEqual(5)
    });
    it("should set page count to 1 if page < 1", function() {
      Y(a, 5);
      Z(a, 0);
      expect(a.a).toEqual(1)
    })
  });
  describe("controls navigation", function() {
    it("should have a next element if currentPage < totalPage", function() {
      Z(a, 3);
      Y(a, 4);
      expect(a.a + 1 <= a.e).toBeTruthy()
    });
    it("should not have a next element if currentPage >= totalPage", function() {
      Z(Y(a, 4), 4);
      Y(a, 4);
      expect(a.a + 1 <= a.e).toBeFalsy()
    });
    it("should have a previous element if currentPage > 1", function() {
      Z(Y(a, 4), 2);
      expect(a.a - 1 >= 1).toBeTruthy()
    });
    it("should not have a next element if currentPage <= 1", function() {
      Z(a, 1);
      Y(a, 4);
      expect(a.a - 1 >= 1).toBeFalsy()
    })
  });
  describe("triggers pageChanged event on some conditions", function() {
    it("should trigger event on setCurrentPage", function() {
      var b = {};
      Q(a, "pageChanged", function(a) {
        b = a
      });
      Z(a, 10);
      expect(b.oldValue && b.newValue).toBeTruthy()
    });
    it("should trigger event on next()", function() {
      Y(a, 12);
      Z(a, 10);
      var b = {};
      Q(a, "pageChanged", function(a) {
        b = a
      });
      a.next();
      expect(b.oldValue && b.newValue).toBeTruthy()
    });
    it("should trigger event on prev()", function() {
      Y(a, 12);
      Z(a, 10);
      var b = {};
      Q(a, "pageChanged", function(a) {
        b = a
      });
      a.prev();
      expect(b.oldValue && b.newValue).toBeTruthy()
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
