(function(){// Input 0
var h = void 0, m = null, n, o = this;
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
function u(a) {
  return a[ba] || (a[ba] = ++ca)
}
var ba = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ca = 0, da = Date.now || function() {
  return+new Date
};
function w(a, b) {
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
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0;c == 0 && g < e;g++) {
    var i = d[g] || "", k = f[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var j = l.exec(i) || ["", "", ""], r = t.exec(k) || ["", "", ""];
      if(j[0].length == 0 && r[0].length == 0) {
        break
      }
      c = fa(j[1].length == 0 ? 0 : parseInt(j[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || fa(j[2].length == 0, r[2].length == 0) || fa(j[2], r[2])
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
var x, ga, y, ha;
function ia() {
  return o.navigator ? o.navigator.userAgent : m
}
ha = y = ga = x = !1;
var z;
if(z = ia()) {
  var ja = o.navigator;
  x = z.indexOf("Opera") == 0;
  ga = !x && z.indexOf("MSIE") != -1;
  y = !x && z.indexOf("WebKit") != -1;
  ha = !x && !y && ja.product == "Gecko"
}
var A = ga, ka = ha, la = y, ma = o.navigator, na = (ma && ma.platform || "").indexOf("Mac") != -1, oa;
a: {
  var B = "", C;
  if(x && o.opera) {
    var pa = o.opera.version, B = typeof pa == "function" ? pa() : pa
  }else {
    if(ka ? C = /rv\:([^\);]+)(\)|;)/ : A ? C = /MSIE\s+([^\);]+)(\)|;)/ : la && (C = /WebKit\/(\S+)/), C) {
      var qa = C.exec(ia()), B = qa ? qa[1] : ""
    }
  }
  if(A) {
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
  c = c == m ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
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
A && (ua[9] || (ua[9] = A && document.documentMode && document.documentMode >= 9));
A && (ta["8"] || (ta["8"] = ea(oa, "8") >= 0));
// Input 12
// Input 13
function E() {
  Ba && (Ca[u(this)] = this)
}
var Ba = !1, Ca = {};
E.prototype.H = !1;
E.prototype.h = function() {
  if(!this.H && (this.H = !0, this.d(), Ba)) {
    var a = u(this);
    if(!Ca.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete Ca[a]
  }
};
E.prototype.d = function() {
  this.X && Da.apply(m, this.X)
};
function Da() {
  for(var a = 0, b = arguments.length;a < b;++a) {
    var c = arguments[a];
    aa(c) ? Da.apply(m, c) : c && typeof c.h == "function" && c.h()
  }
}
;
// Input 14
function F(a, b) {
  E.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
w(F, E);
F.prototype.d = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
F.prototype.j = !1;
F.prototype.r = !0;
// Input 15
var Ea = new Function("a", "return a");
// Input 16
function G(a, b) {
  a && this.o(a, b)
}
w(G, F);
n = G.prototype;
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
n.$ = !1;
n.J = m;
n.o = function(a, b) {
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
      f || (d = m)
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
  this.$ = na ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.J = a;
  delete this.r;
  delete this.j
};
n.d = function() {
  G.A.d.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.J = m
};
// Input 17
function Fa() {
}
var Ga = 0;
n = Fa.prototype;
n.key = 0;
n.k = !1;
n.D = !1;
n.o = function(a, b, c, d, f, e) {
  if(q(a) == "function") {
    this.M = !0
  }else {
    if(a && a.handleEvent && q(a.handleEvent) == "function") {
      this.M = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.n = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.v = e;
  this.D = !1;
  this.key = ++Ga;
  this.k = !1
};
n.handleEvent = function(a) {
  if(this.M) {
    return this.n.call(this.v || this.src, a)
  }
  return this.n.handleEvent.call(this.n, a)
};
// Input 18
var Ha, Ia = (Ha = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function H(a, b) {
  E.call(this);
  this.Q = b;
  this.f = [];
  if(a > this.Q) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.f.push(this.l())
  }
}
w(H, E);
n = H.prototype;
n.e = m;
n.G = m;
n.getObject = function() {
  if(this.f.length) {
    return this.f.pop()
  }
  return this.l()
};
function I(a, b) {
  a.f.length < a.Q ? a.f.push(b) : a.t(b)
}
n.l = function() {
  return this.e ? this.e() : {}
};
n.t = function(a) {
  if(this.G) {
    this.G(a)
  }else {
    var b = q(a);
    if(b == "object" || b == "array" || b == "function") {
      if(q(a.h) == "function") {
        a.h()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.d = function() {
  H.A.d.call(this);
  for(var a = this.f;a.length;) {
    this.t(a.pop())
  }
  delete this.f
};
// Input 20
var J, K, L, M, Ja, Ka, La, Ma, Na, Oa, Pa;
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
      return k.getObject()
    };
    M = function(a) {
      I(k, a)
    };
    Ja = function() {
      return l.getObject()
    };
    La = function() {
      I(l, c())
    };
    Ma = function() {
      return t.getObject()
    };
    Na = function(a) {
      I(t, a)
    };
    Oa = function() {
      return j.getObject()
    };
    Pa = function(a) {
      I(j, a)
    };
    var i = new H(0, 600);
    i.e = a;
    var k = new H(0, 600);
    k.e = b;
    var l = new H(0, 600);
    l.e = c;
    var t = new H(0, 600);
    t.e = d;
    var j = new H(0, 600);
    j.e = f
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
      var g = g[d], i = u(a), k;
      g.c++;
      if(g[i]) {
        k = g[i];
        for(e = 0;e < k.length;e++) {
          if(g = k[e], g.n == c && g.v == f) {
            if(g.k) {
              break
            }
            return
          }
        }
      }else {
        k = g[i] = L(), g.a++
      }
      e = Ja();
      e.src = a;
      g = Ma();
      g.o(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      k.push(g);
      N[c] = g;
      P[i] || (P[i] = L());
      P[i].push(g);
      a.addEventListener ? (a == o || !a.F) && a.addEventListener(b, e, d) : a.attachEvent(Ra(b), e)
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
      if(b in e && (e = e[b], d in e && (e = e[d], a = u(a), e[a]))) {
        a = e[a];
        break a
      }
      a = m
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].n == c && a[e].capture == d && a[e].v == f) {
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
    if(!b.k) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == o || !c.F) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Ra(d), f);
      c = u(c);
      f = O[d][e][c];
      if(P[c]) {
        var g = P[c], i = ya(g, b);
        i >= 0 && D.splice.call(g, i, 1);
        g.length == 0 && delete P[c]
      }
      b.k = !0;
      f.R = !0;
      Ta(d, e, c, f);
      delete N[a]
    }
  }
}
function Ta(a, b, c, d) {
  if(!d.q && d.R) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].k) {
        var g = d[f].proxy;
        g.src = m;
        La(g);
        Na(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.R = !1;
    e == 0 && (M(d), delete O[a][b][c], O[a][b].a--, O[a][b].a == 0 && (K(O[a][b]), delete O[a][b], O[a].a--), O[a].a == 0 && (K(O[a]), delete O[a]))
  }
}
function Ua(a) {
  var b, c = 0, d = b == m;
  b = !!b;
  if(a == m) {
    va(P, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          R(f.key), c++
        }
      }
    })
  }else {
    if(a = u(a), P[a]) {
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
  var e = 1, b = u(b);
  if(a[b]) {
    a.c--;
    a = a[b];
    a.q ? a.q++ : a.q = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var k = a[i];
        k && !k.k && (e &= Va(k, f) !== !1)
      }
    }finally {
      a.q--, Ta(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Va(a, b) {
  var c = a.handleEvent(b);
  a.D && R(a.key);
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
  Aa === h && (Aa = A && !o.addEventListener);
  if(Aa) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var k = o;e = i.shift();) {
          if(k[e] != m) {
            k = k[e]
          }else {
            i = m;
            break a
          }
        }
        i = k
      }
    }
    e = i;
    i = !0 in f;
    k = !1 in f;
    if(i) {
      if(e.keyCode < 0 || e.returnValue != h) {
        return!0
      }
      a: {
        var l = !1;
        if(e.keyCode == 0) {
          try {
            e.keyCode = -1;
            break a
          }catch(t) {
            l = !0
          }
        }
        if(l || e.returnValue == h) {
          e.returnValue = !0
        }
      }
    }
    l = Oa();
    l.o(e, this);
    e = !0;
    try {
      if(i) {
        for(var j = L(), r = l.currentTarget;r;r = r.parentNode) {
          j.push(r)
        }
        g = f[!0];
        g.c = g.a;
        for(var v = j.length - 1;!l.j && v >= 0 && g.c;v--) {
          l.currentTarget = j[v], e &= S(g, j[v], d, !0, l)
        }
        if(k) {
          g = f[!1];
          g.c = g.a;
          for(v = 0;!l.j && v < j.length && g.c;v++) {
            l.currentTarget = j[v], e &= S(g, j[v], d, !1, l)
          }
        }
      }else {
        e = Va(c, l)
      }
    }finally {
      if(j) {
        j.length = 0, M(j)
      }
      l.h();
      Pa(l)
    }
    return e
  }
  d = new G(b, this);
  try {
    e = Va(c, d)
  }finally {
    d.h()
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
U.prototype.s = function() {
  return this
};
function Wa(a) {
  if(a instanceof U) {
    return a
  }
  if(typeof a.s == "function") {
    return a.s(!1)
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
  this.g = {};
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
n.get = function(a, b) {
  if(Object.prototype.hasOwnProperty.call(this.g, a)) {
    return this.g[a]
  }
  return b
};
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.g, a) || (this.a++, this.b.push(a), this.version_++);
  this.g[a] = b
};
n.s = function(a) {
  Za(this);
  var b = 0, c = this.b, d = this.g, f = this.version_, e = this, g = new U;
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
  this.K = [];
  this.S = new V;
  this.ea = this.fa = this.ga = this.aa = 0;
  this.T = new V;
  this.W = this.da = 0;
  this.Z = 1;
  this.Y = new H(0, 4E3);
  this.Y.l = function() {
    return new ab
  };
  this.ba = new H(0, 50);
  this.ba.l = function() {
    return new bb
  };
  var a = this;
  this.L = new H(0, 2E3);
  this.L.l = function() {
    return String(a.Z++)
  };
  this.L.t = function() {
  };
  this.ha = 3
}
function bb() {
  this.U = this.time = this.count = 0
}
bb.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  this.U && a.push(" [VarAlloc = ", this.U, "]");
  return a.join("")
};
function ab() {
}
function cb(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(db(a.I - c));
  f.push(" ", eb(a.I - b));
  a.u == 0 ? f.push(" Start        ") : a.u == 1 ? (f.push(" Done "), f.push(db(a.ia - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.ca > 0 && f.push("[VarAlloc ", a.ca, "] ");
  return f.join("")
}
ab.prototype.toString = function() {
  return this.type == m ? this.V : "[" + this.type + "] " + this.V
};
$a.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.K.length;d++) {
    var f = this.K[d];
    f.u == 1 && c.pop();
    a.push(" ", cb(f, this.aa, b, c.join("")));
    b = f.I;
    a.push("\n");
    f.u == 0 && c.push("|  ")
  }
  if(this.S.a != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Xa(this.S, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", eb(b.startTime), ")\n")
    })
  }
  b = Ya(this.T);
  for(d = 0;d < b.length;d++) {
    c = this.T.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.da, "\n", "Total comments created ", this.W, "\n", "Overhead start: ", this.ga, " ms\n", "Overhead end: ", this.fa, " ms\n", "Overhead comment: ", this.ea, " ms\n");
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
w(W, E);
n = W.prototype;
n.F = !0;
n.z = m;
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
      for(e = this;e;e = e.z) {
        f.push(e)
      }
      e = c[!0];
      e.c = e.a;
      for(var g = f.length - 1;!a.j && g >= 0 && e.c;g--) {
        a.currentTarget = f[g], d &= S(e, f[g], a.type, !0, a) && a.r != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.c = e.a, b) {
        for(g = 0;!a.j && g < f.length && e.c;g++) {
          a.currentTarget = f[g], d &= S(e, f[g], a.type, !1, a) && a.r != !1
        }
      }else {
        for(f = this;!a.j && f && e.c;f = f.z) {
          a.currentTarget = f, d &= S(e, f, a.type, !1, a) && a.r != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
n.d = function() {
  W.A.d.call(this);
  Ua(this);
  this.z = m
};
// Input 35
function X(a) {
  E.call(this);
  this.p = a;
  this.N = this.p.length;
  this.w = 1;
  this.i = 0;
  this.m = this.i + this.w
}
w(X, W);
function Y(a, b) {
  a.w = b;
  a.m = a.i + b
}
function Z(a) {
  return a.p.slice(a.i, a.m)
}
X.prototype.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.N - this.m : this.i, b = b <= c ? b : c, c = "next";
  a == "prev" && (b *= -1, c = "prev");
  var d, f = b, e;
  d = [];
  var g = [];
  for(e = this.i;e < this.m;e++) {
    d.push(e), g.push(e + f)
  }
  var i = f, k = i > 0 ? "next" : "prev", i = Math.abs(i);
  e = f = 0;
  var l = [], t = [], j = this.N;
  d = k == "prev" ? {B:g.slice(0, i), C:d.slice(-1 * i, d.length)} : {C:d.slice(0, i), B:g.slice(-1 * i, g.length)};
  for(f = 0;f < d.B.length;f++) {
    e = (d.B[f] + j) % j, l.push(this.p[e])
  }
  for(f = 0;f < d.C.length;f++) {
    e = (d.C[f] + j) % j, t.push(this.p[e])
  }
  d = {O:l, P:t};
  this.i += b;
  this.m += b;
  this.dispatchEvent({type:c, P:d.P, O:d.O})
};
X.prototype.next = function(a) {
  this.move("next", a)
};
// Input 36
describe("Carousel", function() {
  var a, b = [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}];
  beforeEach(function() {
    a = new X(b)
  });
  describe("some parameters should be set and get", function() {
    it("should set itemPerViewport", function() {
      Y(a, 10);
      expect(a.w).toEqual(10)
    });
    it("should return visible items", function() {
      Y(a, 2);
      var b = Z(a);
      expect(b[0].name == "one" && b[1].name == "two").toBeTruthy()
    })
  });
  describe("will navigate through items", function() {
    it("should move one item next", function() {
      Y(a, 3);
      Z(a);
      var b;
      Q(a, "next", function() {
        b = Z(a)
      });
      a.next(1);
      expect(b[0].name == "two" && b[1].name == "three").toBeTruthy()
    });
    it("should move more than item next", function() {
      Y(a, 3);
      var b;
      Q(a, "next", function() {
        b = Z(a)
      });
      a.next(3);
      expect(b[0].name == "four" && b[1].name == "five").toBeTruthy()
    });
    it("should not move more than item count", function() {
      Y(a, 2);
      var b;
      Q(a, "next", function() {
        b = Z(a)
      });
      a.next(99999);
      expect(b[0].name == "six" && b[1].name == "seven").toBeTruthy()
    })
  })
});
jasmine.getEnv().addReporter(new jasmine.TrivialReporter);
jasmine.getEnv().execute();
})()
