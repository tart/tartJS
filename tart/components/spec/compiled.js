(function(){// Input 0
function h(a) {
  throw a;
}
var k = void 0, n = null, o, p = this;
function q() {
}
function r(a) {
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
function s(a) {
  var b = r(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function t(a) {
  return typeof a == "string"
}
function v(a) {
  return a[aa] || (a[aa] = ++ba)
}
var aa = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ba = 0, ca = Date.now || function() {
  return+new Date
};
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.r = b.prototype;
  a.prototype = new c
}
;
// Input 1
// Input 2
function da(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0;c == 0 && g < e;g++) {
    var i = d[g] || "", j = f[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), C = RegExp("(\\d*)(\\D*)", "g");
    do {
      var m = l.exec(i) || ["", "", ""], u = C.exec(j) || ["", "", ""];
      if(m[0].length == 0 && u[0].length == 0) {
        break
      }
      c = ea(m[1].length == 0 ? 0 : parseInt(m[1], 10), u[1].length == 0 ? 0 : parseInt(u[1], 10)) || ea(m[2].length == 0, u[2].length == 0) || ea(m[2], u[2])
    }while(c == 0)
  }
  return c
}
function ea(a, b) {
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
var y, fa, z, ga;
function ha() {
  return p.navigator ? p.navigator.userAgent : n
}
ga = z = fa = y = !1;
var A;
if(A = ha()) {
  var ia = p.navigator;
  y = A.indexOf("Opera") == 0;
  fa = !y && A.indexOf("MSIE") != -1;
  z = !y && A.indexOf("WebKit") != -1;
  ga = !y && !z && ia.product == "Gecko"
}
var B = fa, ja = ga, ka = z, la = p.navigator, ma = (la && la.platform || "").indexOf("Mac") != -1, na;
a: {
  var D = "", E;
  if(y && p.opera) {
    var oa = p.opera.version, D = typeof oa == "function" ? oa() : oa
  }else {
    if(ja ? E = /rv\:([^\);]+)(\)|;)/ : B ? E = /MSIE\s+([^\);]+)(\)|;)/ : ka && (E = /WebKit\/(\S+)/), E) {
      var pa = E.exec(ha()), D = pa ? pa[1] : ""
    }
  }
  if(B) {
    var qa, ra = p.document;
    qa = ra ? ra.documentMode : k;
    if(qa > parseFloat(D)) {
      na = String(qa);
      break a
    }
  }
  na = D
}
var sa = {}, ta = {};
// Input 4
function ua(a, b) {
  for(var c in a) {
    b.call(k, a[c], c, a)
  }
}
var va = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function wa(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < va.length;f++) {
      b = va[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;
// Input 5
// Input 6
// Input 7
var F = Array.prototype, xa = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == n ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    if(!t(b) || b.length != 1) {
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
}, ya = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
  }
};
// Input 8
// Input 9
var za;
// Input 10
// Input 11
B && (ta[9] || (ta[9] = B && document.documentMode && document.documentMode >= 9));
B && (sa["8"] || (sa["8"] = da(na, "8") >= 0));
// Input 12
// Input 13
function G() {
  Aa && (Ba[v(this)] = this)
}
var Aa = !1, Ba = {};
G.prototype.H = !1;
G.prototype.i = function() {
  if(!this.H && (this.H = !0, this.d(), Aa)) {
    var a = v(this);
    Ba.hasOwnProperty(a) || h(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete Ba[a]
  }
};
G.prototype.d = function() {
  this.V && Ca.apply(n, this.V)
};
function Ca() {
  for(var a = 0, b = arguments.length;a < b;++a) {
    var c = arguments[a];
    s(c) ? Ca.apply(n, c) : c && typeof c.i == "function" && c.i()
  }
}
;
// Input 14
function H(a, b) {
  G.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
w(H, G);
H.prototype.d = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
H.prototype.j = !1;
H.prototype.q = !0;
// Input 15
var Da = new Function("a", "return a");
// Input 16
function I(a, b) {
  a && this.o(a, b)
}
w(I, H);
o = I.prototype;
o.target = n;
o.relatedTarget = n;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = !1;
o.altKey = !1;
o.shiftKey = !1;
o.metaKey = !1;
o.Z = !1;
o.K = n;
o.o = function(a, b) {
  var c = this.type = a.type;
  H.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ja) {
      var f;
      a: {
        try {
          Da(d.nodeName);
          f = !0;
          break a
        }catch(e) {
        }
        f = !1
      }
      f || (d = n)
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
  this.offsetX = a.offsetX !== k ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== k ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== k ? a.clientX : a.pageX;
  this.clientY = a.clientY !== k ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Z = ma ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.K = a;
  delete this.q;
  delete this.j
};
o.d = function() {
  I.r.d.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.K = n
};
// Input 17
function Ea() {
}
var Fa = 0;
o = Ea.prototype;
o.key = 0;
o.k = !1;
o.D = !1;
o.o = function(a, b, c, d, f, e) {
  r(a) == "function" ? this.N = !0 : a && a.handleEvent && r(a.handleEvent) == "function" ? this.N = !1 : h(Error("Invalid listener argument"));
  this.m = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.w = e;
  this.D = !1;
  this.key = ++Fa;
  this.k = !1
};
o.handleEvent = function(a) {
  if(this.N) {
    return this.m.call(this.w || this.src, a)
  }
  return this.m.handleEvent.call(this.m, a)
};
// Input 18
var Ga, Ha = (Ga = "ScriptEngine" in p && p.ScriptEngine() == "JScript") ? p.ScriptEngineMajorVersion() + "." + p.ScriptEngineMinorVersion() + "." + p.ScriptEngineBuildVersion() : "0";
// Input 19
function J(a, b) {
  G.call(this);
  this.O = b;
  this.f = [];
  a > this.O && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.f.push(this.l())
  }
}
w(J, G);
o = J.prototype;
o.e = n;
o.G = n;
o.getObject = function() {
  if(this.f.length) {
    return this.f.pop()
  }
  return this.l()
};
function K(a, b) {
  a.f.length < a.O ? a.f.push(b) : a.u(b)
}
o.l = function() {
  return this.e ? this.e() : {}
};
o.u = function(a) {
  if(this.G) {
    this.G(a)
  }else {
    var b = r(a);
    if(b == "object" || b == "array" || b == "function") {
      if(r(a.i) == "function") {
        a.i()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
o.d = function() {
  J.r.d.call(this);
  for(var a = this.f;a.length;) {
    this.u(a.pop())
  }
  delete this.f
};
// Input 20
var L, M, N, O, Ia, Ja, Ka, La, Ma, Na, Oa;
(function() {
  function a() {
    return{a:0, c:0}
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
    return new Ea
  }
  function f() {
    return new I
  }
  var e = Ga && !(da(Ha, "5.7") >= 0), g;
  Ja = function(a) {
    g = a
  };
  if(e) {
    L = function() {
      return i.getObject()
    };
    M = function(a) {
      K(i, a)
    };
    N = function() {
      return j.getObject()
    };
    O = function(a) {
      K(j, a)
    };
    Ia = function() {
      return l.getObject()
    };
    Ka = function() {
      K(l, c())
    };
    La = function() {
      return C.getObject()
    };
    Ma = function(a) {
      K(C, a)
    };
    Na = function() {
      return m.getObject()
    };
    Oa = function(a) {
      K(m, a)
    };
    var i = new J(0, 600);
    i.e = a;
    var j = new J(0, 600);
    j.e = b;
    var l = new J(0, 600);
    l.e = c;
    var C = new J(0, 600);
    C.e = d;
    var m = new J(0, 600);
    m.e = f
  }else {
    L = a, M = q, N = b, O = q, Ia = c, Ka = q, La = d, Ma = q, Na = f, Oa = q
  }
})();
// Input 21
var P = {}, Q = {}, R = {}, Pa = {};
function Qa(a, b, c, d, f) {
  if(b) {
    if(r(b) == "array") {
      for(var e = 0;e < b.length;e++) {
        Qa(a, b[e], c, d, f)
      }
    }else {
      var d = !!d, g = Q;
      b in g || (g[b] = L());
      g = g[b];
      d in g || (g[d] = L(), g.a++);
      var g = g[d], i = v(a), j;
      g.c++;
      if(g[i]) {
        j = g[i];
        for(e = 0;e < j.length;e++) {
          if(g = j[e], g.m == c && g.w == f) {
            if(g.k) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = N(), g.a++
      }
      e = Ia();
      e.src = a;
      g = La();
      g.o(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      j.push(g);
      P[c] = g;
      R[i] || (R[i] = N());
      R[i].push(g);
      a.addEventListener ? (a == p || !a.F) && a.addEventListener(b, e, d) : a.attachEvent(Ra(b), e)
    }
  }else {
    h(Error("Invalid event type"))
  }
}
function Sa(a, b, c, d, f) {
  if(r(b) == "array") {
    for(var e = 0;e < b.length;e++) {
      Sa(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = Q;
      if(b in e && (e = e[b], d in e && (e = e[d], a = v(a), e[a]))) {
        a = e[a];
        break a
      }
      a = n
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].m == c && a[e].capture == d && a[e].w == f) {
          S(a[e].key);
          break
        }
      }
    }
  }
}
function S(a) {
  if(P[a]) {
    var b = P[a];
    if(!b.k) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == p || !c.F) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Ra(d), f);
      c = v(c);
      f = Q[d][e][c];
      if(R[c]) {
        var g = R[c], i = xa(g, b);
        i >= 0 && F.splice.call(g, i, 1);
        g.length == 0 && delete R[c]
      }
      b.k = !0;
      f.P = !0;
      Ta(d, e, c, f);
      delete P[a]
    }
  }
}
function Ta(a, b, c, d) {
  if(!d.p && d.P) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].k) {
        var g = d[f].proxy;
        g.src = n;
        Ka(g);
        Ma(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.P = !1;
    e == 0 && (O(d), delete Q[a][b][c], Q[a][b].a--, Q[a][b].a == 0 && (M(Q[a][b]), delete Q[a][b], Q[a].a--), Q[a].a == 0 && (M(Q[a]), delete Q[a]))
  }
}
function Ua(a) {
  var b, c = 0, d = b == n;
  b = !!b;
  if(a == n) {
    ua(R, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          S(f.key), c++
        }
      }
    })
  }else {
    if(a = v(a), R[a]) {
      for(var a = R[a], f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          S(e.key), c++
        }
      }
    }
  }
}
function Ra(a) {
  if(a in Pa) {
    return Pa[a]
  }
  return Pa[a] = "on" + a
}
function T(a, b, c, d, f) {
  var e = 1, b = v(b);
  if(a[b]) {
    a.c--;
    a = a[b];
    a.p ? a.p++ : a.p = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.k && (e &= Va(j, f) !== !1)
      }
    }finally {
      a.p--, Ta(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Va(a, b) {
  var c = a.handleEvent(b);
  a.D && S(a.key);
  return c
}
Ja(function(a, b) {
  if(!P[a]) {
    return!0
  }
  var c = P[a], d = c.type, f = Q;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], e, g;
  za === k && (za = B && !p.addEventListener);
  if(za) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var j = p;e = i.shift();) {
          if(j[e] != n) {
            j = j[e]
          }else {
            i = n;
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
      if(e.keyCode < 0 || e.returnValue != k) {
        return!0
      }
      a: {
        var l = !1;
        if(e.keyCode == 0) {
          try {
            e.keyCode = -1;
            break a
          }catch(C) {
            l = !0
          }
        }
        if(l || e.returnValue == k) {
          e.returnValue = !0
        }
      }
    }
    l = Na();
    l.o(e, this);
    e = !0;
    try {
      if(i) {
        for(var m = N(), u = l.currentTarget;u;u = u.parentNode) {
          m.push(u)
        }
        g = f[!0];
        g.c = g.a;
        for(var x = m.length - 1;!l.j && x >= 0 && g.c;x--) {
          l.currentTarget = m[x], e &= T(g, m[x], d, !0, l)
        }
        if(j) {
          g = f[!1];
          g.c = g.a;
          for(x = 0;!l.j && x < m.length && g.c;x++) {
            l.currentTarget = m[x], e &= T(g, m[x], d, !1, l)
          }
        }
      }else {
        e = Va(c, l)
      }
    }finally {
      if(m) {
        m.length = 0, O(m)
      }
      l.i();
      Oa(l)
    }
    return e
  }
  d = new I(b, this);
  try {
    e = Va(c, d)
  }finally {
    d.i()
  }
  return e
});
// Input 22
// Input 23
// Input 24
// Input 25
var U = "StopIteration" in p ? p.StopIteration : Error("StopIteration");
function V() {
}
V.prototype.next = function() {
  h(U)
};
V.prototype.t = function() {
  return this
};
function Wa(a) {
  if(a instanceof V) {
    return a
  }
  if(typeof a.t == "function") {
    return a.t(!1)
  }
  if(s(a)) {
    var b = 0, c = new V;
    c.next = function() {
      for(;;) {
        if(b >= a.length && h(U), b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  h(Error("Not implemented"))
}
function Xa(a, b) {
  if(s(a)) {
    try {
      ya(a, b, k)
    }catch(c) {
      c !== U && h(c)
    }
  }else {
    a = Wa(a);
    try {
      for(;;) {
        b.call(k, a.next(), k, a)
      }
    }catch(d) {
      d !== U && h(d)
    }
  }
}
;
// Input 26
function W(a) {
  this.g = {};
  this.b = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && h(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    if(a) {
      var d;
      if(a instanceof W) {
        c = Ya(a);
        Za(a);
        d = [];
        for(b = 0;b < a.b.length;b++) {
          d.push(a.g[a.b[b]])
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
o = W.prototype;
o.a = 0;
o.version_ = 0;
function Ya(a) {
  Za(a);
  return a.b.concat()
}
function Za(a) {
  if(a.a != a.b.length) {
    for(var b = 0, c = 0;b < a.b.length;) {
      var d = a.b[b];
      Object.prototype.hasOwnProperty.call(a.g, d) && (a.b[c++] = d);
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
o.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.g, a)) {
    return this.g[a]
  }
  return b
};
o.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.g, a) || (this.a++, this.b.push(a), this.version_++);
  this.g[a] = b
};
o.t = function(a) {
  Za(this);
  var b = 0, c = this.b, d = this.g, f = this.version_, e = this, g = new V;
  g.next = function() {
    for(;;) {
      f != e.version_ && h(Error("The map has changed since the iterator was created"));
      b >= c.length && h(U);
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
  this.L = [];
  this.Q = new W;
  this.ea = this.fa = this.ga = this.$ = 0;
  this.R = new W;
  this.U = this.da = 0;
  this.Y = 1;
  this.W = new J(0, 4E3);
  this.W.l = function() {
    return new ab
  };
  this.aa = new J(0, 50);
  this.aa.l = function() {
    return new bb
  };
  var a = this;
  this.M = new J(0, 2E3);
  this.M.l = function() {
    return String(a.Y++)
  };
  this.M.u = function() {
  };
  this.ha = 3
}
function bb() {
  this.S = this.time = this.count = 0
}
bb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  this.S && a.push(" [VarAlloc = ", this.S, "]");
  return a.join("")
};
function ab() {
}
function cb(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(db(a.J - c));
  f.push(" ", eb(a.J - b));
  a.v == 0 ? f.push(" Start        ") : a.v == 1 ? (f.push(" Done "), f.push(db(a.ia - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.ca > 0 && f.push("[VarAlloc ", a.ca, "] ");
  return f.join("")
}
ab.prototype.toString = function() {
  return this.type == n ? this.T : "[" + this.type + "] " + this.T
};
$a.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.L.length;d++) {
    var f = this.L[d];
    f.v == 1 && c.pop();
    a.push(" ", cb(f, this.$, b, c.join("")));
    b = f.J;
    a.push("\n");
    f.v == 0 && c.push("|  ")
  }
  if(this.Q.a != 0) {
    var e = ca();
    a.push(" Unstopped timers:\n");
    Xa(this.Q, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", eb(b.startTime), ")\n")
    })
  }
  b = Ya(this.R);
  for(d = 0;d < b.length;d++) {
    c = this.R.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.da, "\n", "Total comments created ", this.U, "\n", "Overhead start: ", this.ga, " ms\n", "Overhead end: ", this.fa, " ms\n", "Overhead comment: ", this.ea, " ms\n");
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
function X() {
  G.call(this)
}
w(X, G);
o = X.prototype;
o.F = !0;
o.z = n;
o.addEventListener = function(a, b, c, d) {
  Qa(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Sa(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = Q;
  if(b in c) {
    if(t(a)) {
      a = new H(a, this)
    }else {
      if(a instanceof H) {
        a.target = a.target || this
      }else {
        var d = a, a = new H(b, this);
        wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, e;
    if(b) {
      f = [];
      for(e = this;e;e = e.z) {
        f.push(e)
      }
      e = c[!0];
      e.c = e.a;
      for(var g = f.length - 1;!a.j && g >= 0 && e.c;g--) {
        a.currentTarget = f[g], d &= T(e, f[g], a.type, !0, a) && a.q != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.c = e.a, b) {
        for(g = 0;!a.j && g < f.length && e.c;g++) {
          a.currentTarget = f[g], d &= T(e, f[g], a.type, !1, a) && a.q != !1
        }
      }else {
        for(f = this;!a.j && f && e.c;f = f.z) {
          a.currentTarget = f, d &= T(e, f, a.type, !1, a) && a.q != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.d = function() {
  X.r.d.call(this);
  Ua(this);
  this.z = n
};
// Input 35
function Y() {
  G.call(this)
}
w(Y, X);
Y.prototype.dispatchEvent = function(a) {
  return Y.r.dispatchEvent.call(this, a)
};
// Input 36
function Z() {
  this.n = k;
  this.s = {}
}
Z.prototype.h = function() {
  h(Error("Not implemneted yet"))
};
Z.prototype.get = function(a) {
  this.n || h(Error("DOM not set yet"));
  this.s[a] = this.s[a] || this.n.find(a);
  return this.s[a]
};
// Input 37
function fb(a, b) {
  this.X = a || new Y;
  this.view = b || new Z
}
function gb(a) {
  var b = $(a.view.h());
  return a.view.n = b
}
;
// Input 38
describe("Component", function() {
  var a = new Y, b = new Z;
  describe("ComponentController", function() {
    describe("has model and view objects in it", function() {
      it("should have model object", function() {
        var c = new fb(a, b);
        expect(c.X instanceof Y).toBeTruthy()
      });
      it("should have view object", function() {
        var c = new fb(a, b);
        expect(c.view instanceof Z).toBeTruthy()
      })
    });
    describe("will get components DOM with buildDOM method", function() {
      function b() {
        Z.call(this)
      }
      w(b, Z);
      b.prototype.h = function() {
        return"<h1>Foo</h1>"
      };
      var d = gb(new fb(a, new b));
      expect(d).toBeTruthy()
    })
  });
  describe("Component Model", function() {
    describe("is event driven", function() {
      it("should  be inherited from goog.events.EventTarget", function() {
        var a = new Y;
        expect(a instanceof X).toBeTruthy()
      });
      it("should supply events to it's sub classes", function() {
        function a() {
          G.call(this)
        }
        w(a, Y);
        a.A = {C:"foo"};
        var b = new a, f;
        Qa(b, a.A.C, function() {
          f = "something triggered from model"
        });
        b.dispatchEvent({type:a.A.C});
        expect(f).toEqual("something triggered from model")
      })
    })
  });
  describe("ComponentView", function() {
    describe('is an abstract class which sub classes should implement thier own "render" method', function() {
      it('should throw en exception when "render" method called from own instance', function() {
        var a = new Z;
        expect(function() {
          a.h()
        }).toThrow()
      });
      it('should render markup if sub class implemented its own "render" method', function() {
        function a() {
          Z.call(this)
        }
        w(a, Z);
        a.prototype.h = function() {
          return"<b>this is rendered</b"
        };
        expect((new a).h()).toBeTruthy()
      })
    });
    describe('supplies dom traverse with "get" method', function() {
      var a;
      beforeEach(function() {
        a = function() {
          Z.call(this);
          this.I = {B:"h1"}
        };
        w(a, Z);
        a.prototype.ba = function() {
          var a;
          return"<h1>" + (a || "") + "</h1>"
        };
        a.prototype.h = function() {
          return this.ba()
        }
      });
      it("should find related element on DOM", function() {
        var b = new a, f = $("<div>").append(b.h());
        b.n = f;
        expect(b.get(b.I.B)[0]).toBe(f.find("h1")[0])
      });
      it('should throw a "DOM not set yet" exception if DOM not set yet', function() {
        expect(function() {
          var b = new a;
          b.get(b.I.B)
        }).toThrow("DOM not set yet")
      })
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
