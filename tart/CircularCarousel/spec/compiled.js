(function(){// Input 0
var h = void 0, l = null, n, o = this;
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
function s(a) {
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
  a.F = b.prototype;
  a.prototype = new c
}
;
// Input 1
// Input 2
function ea(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0;c == 0 && g < e;g++) {
    var i = d[g] || "", j = f[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), C = RegExp("(\\d*)(\\D*)", "g");
    do {
      var m = k.exec(i) || ["", "", ""], r = C.exec(j) || ["", "", ""];
      if(m[0].length == 0 && r[0].length == 0) {
        break
      }
      c = fa(m[1].length == 0 ? 0 : parseInt(m[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || fa(m[2].length == 0, r[2].length == 0) || fa(m[2], r[2])
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
var w, ga, x, ha;
function ia() {
  return o.navigator ? o.navigator.userAgent : l
}
ha = x = ga = w = !1;
var y;
if(y = ia()) {
  var ja = o.navigator;
  w = y.indexOf("Opera") == 0;
  ga = !w && y.indexOf("MSIE") != -1;
  x = !w && y.indexOf("WebKit") != -1;
  ha = !w && !x && ja.product == "Gecko"
}
var z = ga, ka = ha, la = x, ma = o.navigator, na = (ma && ma.platform || "").indexOf("Mac") != -1, oa;
a: {
  var A = "", B;
  if(w && o.opera) {
    var pa = o.opera.version, A = typeof pa == "function" ? pa() : pa
  }else {
    if(ka ? B = /rv\:([^\);]+)(\)|;)/ : z ? B = /MSIE\s+([^\);]+)(\)|;)/ : la && (B = /WebKit\/(\S+)/), B) {
      var qa = B.exec(ia()), A = qa ? qa[1] : ""
    }
  }
  if(z) {
    var ra, sa = o.document;
    ra = sa ? sa.documentMode : h;
    if(ra > parseFloat(A)) {
      oa = String(ra);
      break a
    }
  }
  oa = A
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
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
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
  c = c == l ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(s(a)) {
    if(!s(b) || b.length != 1) {
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
  for(var d = a.length, f = s(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
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
E.prototype.L = !1;
E.prototype.k = function() {
  if(!this.L && (this.L = !0, this.f(), Ba)) {
    var a = t(this);
    if(!Ca.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete Ca[a]
  }
};
E.prototype.f = function() {
  this.Y && Da.apply(l, this.Y)
};
function Da() {
  for(var a = 0, b = arguments.length;a < b;++a) {
    var c = arguments[a];
    aa(c) ? Da.apply(l, c) : c && typeof c.k == "function" && c.k()
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
F.prototype.v = !0;
// Input 15
var Ea = new Function("a", "return a");
// Input 16
function G(a, b) {
  a && this.q(a, b)
}
u(G, F);
n = G.prototype;
n.target = l;
n.relatedTarget = l;
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
n.aa = !1;
n.N = l;
n.q = function(a, b) {
  var c = this.type = a.type;
  F.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ka) {
      var f;
      a: {
        try {
          Ea(d.nodeName);
          f = !0;
          break a
        }catch(e) {
        }
        f = !1
      }
      f || (d = l)
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
  this.aa = na ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.N = a;
  delete this.v;
  delete this.l
};
n.f = function() {
  G.F.f.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.N = l
};
// Input 17
function Fa() {
}
var Ga = 0;
n = Fa.prototype;
n.key = 0;
n.m = !1;
n.I = !1;
n.q = function(a, b, c, d, f, e) {
  if(q(a) == "function") {
    this.Q = !0
  }else {
    if(a && a.handleEvent && q(a.handleEvent) == "function") {
      this.Q = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.p = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.C = e;
  this.I = !1;
  this.key = ++Ga;
  this.m = !1
};
n.handleEvent = function(a) {
  if(this.Q) {
    return this.p.call(this.C || this.src, a)
  }
  return this.p.handleEvent.call(this.p, a)
};
// Input 18
var Ha, Ia = (Ha = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function H(a, b) {
  E.call(this);
  this.R = b;
  this.h = [];
  if(a > this.R) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.h.push(this.n())
  }
}
u(H, E);
n = H.prototype;
n.g = l;
n.K = l;
n.getObject = function() {
  if(this.h.length) {
    return this.h.pop()
  }
  return this.n()
};
function I(a, b) {
  a.h.length < a.R ? a.h.push(b) : a.z(b)
}
n.n = function() {
  return this.g ? this.g() : {}
};
n.z = function(a) {
  if(this.K) {
    this.K(a)
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
  H.F.f.call(this);
  for(var a = this.h;a.length;) {
    this.z(a.pop())
  }
  delete this.h
};
// Input 20
var J, K, L, M, Ja, Ka, La, Ma, Na, Oa, Pa;
(function() {
  function a() {
    return{a:0, d:0}
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
  function d() {
    return new Fa
  }
  function f() {
    return new G
  }
  var e = Ha && !(ea(Ia, "5.7") >= 0), g;
  Ka = function(a) {
    g = a
  };
  if(e) {
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
      return k.getObject()
    };
    La = function() {
      I(k, c())
    };
    Ma = function() {
      return C.getObject()
    };
    Na = function(a) {
      I(C, a)
    };
    Oa = function() {
      return m.getObject()
    };
    Pa = function(a) {
      I(m, a)
    };
    var i = new H(0, 600);
    i.g = a;
    var j = new H(0, 600);
    j.g = b;
    var k = new H(0, 600);
    k.g = c;
    var C = new H(0, 600);
    C.g = d;
    var m = new H(0, 600);
    m.g = f
  }else {
    J = a, K = p, L = b, M = p, Ja = c, La = p, Ma = d, Na = p, Oa = f, Pa = p
  }
})();
// Input 21
var N = {}, O = {}, P = {}, Qa = {};
function Q(a, b, c, d, f) {
  if(b) {
    if(q(b) == "array") {
      for(var e = 0;e < b.length;e++) {
        Q(a, b[e], c, d, f)
      }
    }else {
      var d = !!d, g = O;
      b in g || (g[b] = J());
      g = g[b];
      d in g || (g[d] = J(), g.a++);
      var g = g[d], i = t(a), j;
      g.d++;
      if(g[i]) {
        j = g[i];
        for(e = 0;e < j.length;e++) {
          if(g = j[e], g.p == c && g.C == f) {
            if(g.m) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = L(), g.a++
      }
      e = Ja();
      e.src = a;
      g = Ma();
      g.q(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      j.push(g);
      N[c] = g;
      P[i] || (P[i] = L());
      P[i].push(g);
      a.addEventListener ? (a == o || !a.J) && a.addEventListener(b, e, d) : a.attachEvent(Ra(b), e)
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Sa(a, b, c, d, f) {
  if(q(b) == "array") {
    for(var e = 0;e < b.length;e++) {
      Sa(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = O;
      if(b in e && (e = e[b], d in e && (e = e[d], a = t(a), e[a]))) {
        a = e[a];
        break a
      }
      a = l
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].p == c && a[e].capture == d && a[e].C == f) {
          R(a[e].key);
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
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == o || !c.J) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Ra(d), f);
      c = t(c);
      f = O[d][e][c];
      if(P[c]) {
        var g = P[c], i = ya(g, b);
        i >= 0 && D.splice.call(g, i, 1);
        g.length == 0 && delete P[c]
      }
      b.m = !0;
      f.S = !0;
      Ta(d, e, c, f);
      delete N[a]
    }
  }
}
function Ta(a, b, c, d) {
  if(!d.u && d.S) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].m) {
        var g = d[f].proxy;
        g.src = l;
        La(g);
        Na(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.S = !1;
    e == 0 && (M(d), delete O[a][b][c], O[a][b].a--, O[a][b].a == 0 && (K(O[a][b]), delete O[a][b], O[a].a--), O[a].a == 0 && (K(O[a]), delete O[a]))
  }
}
function Ua(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    va(P, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          R(f.key), c++
        }
      }
    })
  }else {
    if(a = t(a), P[a]) {
      for(var a = P[a], f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          R(e.key), c++
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
function S(a, b, c, d, f) {
  var e = 1, b = t(b);
  if(a[b]) {
    a.d--;
    a = a[b];
    a.u ? a.u++ : a.u = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.m && (e &= Va(j, f) !== !1)
      }
    }finally {
      a.u--, Ta(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Va(a, b) {
  var c = a.handleEvent(b);
  a.I && R(a.key);
  return c
}
Ka(function(a, b) {
  if(!N[a]) {
    return!0
  }
  var c = N[a], d = c.type, f = O;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], e, g;
  Aa === h && (Aa = z && !o.addEventListener);
  if(Aa) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var j = o;e = i.shift();) {
          if(j[e] != l) {
            j = j[e]
          }else {
            i = l;
            break a
          }
        }
        i = j
      }
    }
    e = i;
    i = !0 in f;
    j = !1 in f;
    if(i) {
      if(e.keyCode < 0 || e.returnValue != h) {
        return!0
      }
      a: {
        var k = !1;
        if(e.keyCode == 0) {
          try {
            e.keyCode = -1;
            break a
          }catch(C) {
            k = !0
          }
        }
        if(k || e.returnValue == h) {
          e.returnValue = !0
        }
      }
    }
    k = Oa();
    k.q(e, this);
    e = !0;
    try {
      if(i) {
        for(var m = L(), r = k.currentTarget;r;r = r.parentNode) {
          m.push(r)
        }
        g = f[!0];
        g.d = g.a;
        for(var v = m.length - 1;!k.l && v >= 0 && g.d;v--) {
          k.currentTarget = m[v], e &= S(g, m[v], d, !0, k)
        }
        if(j) {
          g = f[!1];
          g.d = g.a;
          for(v = 0;!k.l && v < m.length && g.d;v++) {
            k.currentTarget = m[v], e &= S(g, m[v], d, !1, k)
          }
        }
      }else {
        e = Va(c, k)
      }
    }finally {
      if(m) {
        m.length = 0, M(m)
      }
      k.k();
      Pa(k)
    }
    return e
  }
  d = new G(b, this);
  try {
    e = Va(c, d)
  }finally {
    d.k()
  }
  return e
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
U.prototype.w = function() {
  return this
};
function Wa(a) {
  if(a instanceof U) {
    return a
  }
  if(typeof a.w == "function") {
    return a.w(!1)
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
    }catch(d) {
      if(d !== T) {
        throw d;
      }
    }
  }
}
;
// Input 26
function V(a) {
  this.j = {};
  this.b = [];
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
      if(a instanceof V) {
        c = Ya(a);
        Za(a);
        d = [];
        for(b = 0;b < a.b.length;b++) {
          d.push(a.j[a.b[b]])
        }
      }else {
        var b = [], f = 0;
        for(c in a) {
          b[f++] = c
        }
        c = b;
        b = [];
        f = 0;
        for(d in a) {
          b[f++] = a[d]
        }
        d = b
      }
      for(b = 0;b < c.length;b++) {
        this.set(c[b], d[b])
      }
    }
  }
}
n = V.prototype;
n.a = 0;
n.version_ = 0;
function Ya(a) {
  Za(a);
  return a.b.concat()
}
function Za(a) {
  if(a.a != a.b.length) {
    for(var b = 0, c = 0;b < a.b.length;) {
      var d = a.b[b];
      Object.prototype.hasOwnProperty.call(a.j, d) && (a.b[c++] = d);
      b++
    }
    a.b.length = c
  }
  if(a.a != a.b.length) {
    for(var f = {}, c = b = 0;b < a.b.length;) {
      d = a.b[b], Object.prototype.hasOwnProperty.call(f, d) || (a.b[c++] = d, f[d] = 1), b++
    }
    a.b.length = c
  }
}
n.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.j, a)) {
    return this.j[a]
  }
  return b
};
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.j, a) || (this.a++, this.b.push(a), this.version_++);
  this.j[a] = b
};
n.w = function(a) {
  Za(this);
  var b = 0, c = this.b, d = this.j, f = this.version_, e = this, g = new U;
  g.next = function() {
    for(;;) {
      if(f != e.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw T;
      }
      var g = c[b++];
      return a ? g : d[g]
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
  this.O = [];
  this.T = new V;
  this.fa = this.ga = this.ha = this.ba = 0;
  this.U = new V;
  this.X = this.ea = 0;
  this.$ = 1;
  this.Z = new H(0, 4E3);
  this.Z.n = function() {
    return new ab
  };
  this.ca = new H(0, 50);
  this.ca.n = function() {
    return new bb
  };
  var a = this;
  this.P = new H(0, 2E3);
  this.P.n = function() {
    return String(a.$++)
  };
  this.P.z = function() {
  };
  this.ia = 3
}
function bb() {
  this.V = this.time = this.count = 0
}
bb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  this.V && a.push(" [VarAlloc = ", this.V, "]");
  return a.join("")
};
function ab() {
}
function cb(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(db(a.M - c));
  f.push(" ", eb(a.M - b));
  a.A == 0 ? f.push(" Start        ") : a.A == 1 ? (f.push(" Done "), f.push(db(a.ja - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.da > 0 && f.push("[VarAlloc ", a.da, "] ");
  return f.join("")
}
ab.prototype.toString = function() {
  return this.type == l ? this.W : "[" + this.type + "] " + this.W
};
$a.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.O.length;d++) {
    var f = this.O[d];
    f.A == 1 && c.pop();
    a.push(" ", cb(f, this.ba, b, c.join("")));
    b = f.M;
    a.push("\n");
    f.A == 0 && c.push("|  ")
  }
  if(this.T.a != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Xa(this.T, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", eb(b.startTime), ")\n")
    })
  }
  b = Ya(this.U);
  for(d = 0;d < b.length;d++) {
    c = this.U.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.ea, "\n", "Total comments created ", this.X, "\n", "Overhead start: ", this.ha, " ms\n", "Overhead end: ", this.ga, " ms\n", "Overhead comment: ", this.fa, " ms\n");
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
n.J = !0;
n.D = l;
n.addEventListener = function(a, b, c, d) {
  Q(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  Sa(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = O;
  if(b in c) {
    if(s(a)) {
      a = new F(a, this)
    }else {
      if(a instanceof F) {
        a.target = a.target || this
      }else {
        var d = a, a = new F(b, this);
        xa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.D) {
        f.push(e)
      }
      e = c[!0];
      e.d = e.a;
      for(var g = f.length - 1;!a.l && g >= 0 && e.d;g--) {
        a.currentTarget = f[g], d &= S(e, f[g], a.type, !0, a) && a.v != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.d = e.a, b) {
        for(g = 0;!a.l && g < f.length && e.d;g++) {
          a.currentTarget = f[g], d &= S(e, f[g], a.type, !1, a) && a.v != !1
        }
      }else {
        for(f = this;!a.l && f && e.d;f = f.D) {
          a.currentTarget = f, d &= S(e, f, a.type, !1, a) && a.v != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
n.f = function() {
  W.F.f.call(this);
  Ua(this);
  this.D = l
};
// Input 35
function X(a) {
  E.call(this);
  this.i = a;
  this.o = this.i.length;
  this.r = 1;
  this.c = 0;
  this.e = this.c + this.r
}
u(X, W);
function Y(a) {
  a.r = 2;
  a.e = a.c + 2
}
function Z(a) {
  return a.i.slice(a.c, a.e)
}
X.prototype.B = function(a) {
  var b, c = [], d = [];
  for(b = this.c;b < this.e;b++) {
    c.push(b), d.push(b + a)
  }
  return fb(this, c, d, a)
};
function fb(a, b, c, d) {
  for(var f = d > 0 ? "next" : "prev", d = Math.abs(d), e = 0, g = 0, i = [], j = [], k = a.o, b = f == "prev" ? {G:c.slice(0, d), H:b.slice(-1 * d, b.length)} : {H:b.slice(0, d), G:c.slice(-1 * d, c.length)}, e = 0;e < b.G.length;e++) {
    g = (b.G[e] + k) % k, i.push(a.i[g])
  }
  for(e = 0;e < b.H.length;e++) {
    g = (b.H[e] + k) % k, j.push(a.i[g])
  }
  return{s:i, t:j}
}
X.prototype.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.o - this.e : this.c, b = b <= c ? b : c, c = "next";
  a == "prev" && (b *= -1, c = "prev");
  var d = this.B(b);
  this.c += b;
  this.e += b;
  this.dispatchEvent({type:c, t:d.t, s:d.s})
};
X.prototype.next = function(a) {
  this.move("next", a)
};
X.prototype.prev = function(a) {
  this.move("prev", a)
};
// Input 36
function gb(a) {
  X.call(this, a)
}
u(gb, X);
gb.prototype.B = function(a) {
  var b, c = [], d = [], f = this.c + a;
  for(b = 0;b < this.e;b++) {
    c.push(b)
  }
  for(b = f;b < f + this.r;b++) {
    d.push(b)
  }
  return fb(this, c, d, a)
};
gb.prototype.move = function(a, b) {
  b = Math.abs(b || 1);
  b %= this.o;
  var c = 0, d = "next";
  if(a == "prev") {
    b *= -1, c = this.o, d = "prev"
  }
  var f = [].concat(this.i).concat(this.i), e = this.B(b);
  this.c = this.c + c + b;
  this.e = this.e + c + b;
  this.i = f.slice(this.c, this.c + this.o);
  this.c = 0;
  this.e = this.r;
  this.dispatchEvent({type:d, t:e.t, s:e.s})
};
// Input 37
describe("CircularCarousel", function() {
  var a, b = [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}];
  beforeEach(function() {
    a = new gb(b)
  });
  describe("extends from tart.Carousel", function() {
    it("is an isstance of tart.Carousel", function() {
      expect(a instanceof X).toBeTruthy()
    })
  });
  describe("has circular navigation", function() {
    it("will navigate to seventh element after prev if current item is first item", function() {
      Y(a);
      var b = Z(a), d;
      Q(a, "prev", function() {
        d = Z(a)
      });
      a.prev(1);
      expect(b[0].name == "one" && d[0].name == "seven").toBeTruthy()
    });
    it("will navigate to second element after 6 previous steps", function() {
      Y(a);
      var b = Z(a), d;
      Q(a, "prev", function() {
        d = Z(a)
      });
      a.prev(6);
      expect(b[0].name == "one" && d[0].name == "two").toBeTruthy()
    });
    it("will navigate to seventh element after 8 previous steps which it means circular", function() {
      Y(a);
      var b = Z(a), d;
      Q(a, "prev", function() {
        d = Z(a)
      });
      a.prev(8);
      expect(b[0].name == "one" && d[0].name == "seven").toBeTruthy()
    });
    it("will navigate to second element after 8 next steps which it means circular", function() {
      Y(a);
      var b = Z(a), d;
      Q(a, "next", function() {
        d = Z(a)
      });
      a.next(8);
      expect(b[0].name == "one" && d[0].name == "two").toBeTruthy()
    });
    it("will navigate to third element after 2 next steps", function() {
      Y(a);
      var b = Z(a), d;
      Q(a, "next", function() {
        d = Z(a)
      });
      a.next(2);
      expect(b[0].name == "one" && d[0].name == "three").toBeTruthy()
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
