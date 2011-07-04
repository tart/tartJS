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
function ea(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
var fa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function ga(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < fa.length;f++) {
      b = fa[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;
// Input 2
// Input 3
function ha(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(d.length, f.length), g = 0;c == 0 && g < e;g++) {
    var i = d[g] || "", k = f[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var j = l.exec(i) || ["", "", ""], r = t.exec(k) || ["", "", ""];
      if(j[0].length == 0 && r[0].length == 0) {
        break
      }
      c = ia(j[1].length == 0 ? 0 : parseInt(j[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || ia(j[2].length == 0, r[2].length == 0) || ia(j[2], r[2])
    }while(c == 0)
  }
  return c
}
function ia(a, b) {
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
var x, ja, y, ka;
function la() {
  return o.navigator ? o.navigator.userAgent : m
}
ka = y = ja = x = !1;
var z;
if(z = la()) {
  var ma = o.navigator;
  x = z.indexOf("Opera") == 0;
  ja = !x && z.indexOf("MSIE") != -1;
  y = !x && z.indexOf("WebKit") != -1;
  ka = !x && !y && ma.product == "Gecko"
}
var A = ja, na = ka, oa = y, pa = o.navigator, qa = (pa && pa.platform || "").indexOf("Mac") != -1, B;
a: {
  var C = "", D;
  if(x && o.opera) {
    var ra = o.opera.version, C = typeof ra == "function" ? ra() : ra
  }else {
    if(na ? D = /rv\:([^\);]+)(\)|;)/ : A ? D = /MSIE\s+([^\);]+)(\)|;)/ : oa && (D = /WebKit\/(\S+)/), D) {
      var sa = D.exec(la()), C = sa ? sa[1] : ""
    }
  }
  if(A) {
    var ta, ua = o.document;
    ta = ua ? ua.documentMode : h;
    if(ta > parseFloat(C)) {
      B = String(ta);
      break a
    }
  }
  B = C
}
var E = {};
// Input 5
// Input 6
// Input 7
var F = Array.prototype, va = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
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
}, wa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = s(a) ? a.split("") : a, e = 0;e < d;e++) {
    e in f && b.call(c, f[e], e, a)
  }
};
// Input 8
// Input 9
var xa;
// Input 10
// Input 11
A && (E["9"] || (E["9"] = ha(B, "9") >= 0));
A && (E["8"] || (E["8"] = ha(B, "8") >= 0));
// Input 12
// Input 13
function G() {
  ya && (za[u(this)] = this)
}
var ya = !1, za = {};
G.prototype.H = !1;
G.prototype.n = function() {
  if(!this.H && (this.H = !0, this.d(), ya)) {
    var a = u(this);
    if(!za.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete za[a]
  }
};
G.prototype.d = function() {
};
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
H.prototype.i = !1;
H.prototype.r = !0;
// Input 15
var Aa = new Function("a", "return a");
// Input 16
function I(a, b) {
  a && this.o(a, b)
}
w(I, H);
n = I.prototype;
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
n.Z = !1;
n.J = m;
n.o = function(a, b) {
  var c = this.type = a.type;
  H.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(na) {
      try {
        Aa(d.nodeName)
      }catch(f) {
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
  this.Z = qa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.J = a;
  delete this.r;
  delete this.i
};
n.d = function() {
  I.A.d.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.J = m
};
// Input 17
function Ba() {
}
var Ca = 0;
n = Ba.prototype;
n.key = 0;
n.j = !1;
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
  this.m = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.v = e;
  this.D = !1;
  this.key = ++Ca;
  this.j = !1
};
n.handleEvent = function(a) {
  if(this.M) {
    return this.m.call(this.v || this.src, a)
  }
  return this.m.handleEvent.call(this.m, a)
};
// Input 18
var Da, Ea = (Da = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function J(a, b) {
  G.call(this);
  this.Q = b;
  this.f = [];
  if(a > this.Q) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.f.push(this.k())
  }
}
w(J, G);
n = J.prototype;
n.e = m;
n.G = m;
n.getObject = function() {
  if(this.f.length) {
    return this.f.pop()
  }
  return this.k()
};
function K(a, b) {
  a.f.length < a.Q ? a.f.push(b) : a.t(b)
}
n.k = function() {
  return this.e ? this.e() : {}
};
n.t = function(a) {
  if(this.G) {
    this.G(a)
  }else {
    var b = q(a);
    if(b == "object" || b == "array" || b == "function") {
      if(q(a.n) == "function") {
        a.n()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.d = function() {
  J.A.d.call(this);
  for(var a = this.f;a.length;) {
    this.t(a.pop())
  }
  delete this.f
};
// Input 20
var L, M, N, O, Fa, Ga, Ha, Ia, Ja, Ka, La;
(function() {
  function a() {
    return{a:0, c:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return g.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Ba
  }
  function f() {
    return new I
  }
  var e = Da && !(ha(Ea, "5.7") >= 0), g;
  Ga = function(a) {
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
      return k.getObject()
    };
    O = function(a) {
      K(k, a)
    };
    Fa = function() {
      return l.getObject()
    };
    Ha = function() {
      K(l, c())
    };
    Ia = function() {
      return t.getObject()
    };
    Ja = function(a) {
      K(t, a)
    };
    Ka = function() {
      return j.getObject()
    };
    La = function(a) {
      K(j, a)
    };
    var i = new J(0, 600);
    i.e = a;
    var k = new J(0, 600);
    k.e = b;
    var l = new J(0, 600);
    l.e = c;
    var t = new J(0, 600);
    t.e = d;
    var j = new J(0, 600);
    j.e = f
  }else {
    L = a, M = p, N = b, O = p, Fa = c, Ha = p, Ia = d, Ja = p, Ka = f, La = p
  }
})();
// Input 21
var P = {}, Q = {}, R = {}, Ma = {};
function S(a, b, c, d, f) {
  if(b) {
    if(q(b) == "array") {
      for(var e = 0;e < b.length;e++) {
        S(a, b[e], c, d, f)
      }
    }else {
      var d = !!d, g = Q;
      b in g || (g[b] = L());
      g = g[b];
      d in g || (g[d] = L(), g.a++);
      var g = g[d], i = u(a), k;
      g.c++;
      if(g[i]) {
        k = g[i];
        for(e = 0;e < k.length;e++) {
          if(g = k[e], g.m == c && g.v == f) {
            if(g.j) {
              break
            }
            return
          }
        }
      }else {
        k = g[i] = N(), g.a++
      }
      e = Fa();
      e.src = a;
      g = Ia();
      g.o(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      k.push(g);
      P[c] = g;
      R[i] || (R[i] = N());
      R[i].push(g);
      a.addEventListener ? (a == o || !a.F) && a.addEventListener(b, e, d) : a.attachEvent(Na(b), e)
    }
  }else {
    throw Error("Invalid event type");
  }
}
function Oa(a, b, c, d, f) {
  if(q(b) == "array") {
    for(var e = 0;e < b.length;e++) {
      Oa(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = Q;
      if(b in e && (e = e[b], d in e && (e = e[d], a = u(a), e[a]))) {
        a = e[a];
        break a
      }
      a = m
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].m == c && a[e].capture == d && a[e].v == f) {
          T(a[e].key);
          break
        }
      }
    }
  }
}
function T(a) {
  if(P[a]) {
    var b = P[a];
    if(!b.j) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == o || !c.F) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Na(d), f);
      c = u(c);
      f = Q[d][e][c];
      if(R[c]) {
        var g = R[c], i = va(g, b);
        i >= 0 && F.splice.call(g, i, 1);
        g.length == 0 && delete R[c]
      }
      b.j = !0;
      f.R = !0;
      Pa(d, e, c, f);
      delete P[a]
    }
  }
}
function Pa(a, b, c, d) {
  if(!d.q && d.R) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].j) {
        var g = d[f].proxy;
        g.src = m;
        Ha(g);
        Ja(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.R = !1;
    e == 0 && (O(d), delete Q[a][b][c], Q[a][b].a--, Q[a][b].a == 0 && (M(Q[a][b]), delete Q[a][b], Q[a].a--), Q[a].a == 0 && (M(Q[a]), delete Q[a]))
  }
}
function Qa(a) {
  var b, c = 0, d = b == m;
  b = !!b;
  if(a == m) {
    ea(R, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          T(f.key), c++
        }
      }
    })
  }else {
    if(a = u(a), R[a]) {
      for(var a = R[a], f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          T(e.key), c++
        }
      }
    }
  }
}
function Na(a) {
  if(a in Ma) {
    return Ma[a]
  }
  return Ma[a] = "on" + a
}
function U(a, b, c, d, f) {
  var e = 1, b = u(b);
  if(a[b]) {
    a.c--;
    a = a[b];
    a.q ? a.q++ : a.q = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var k = a[i];
        k && !k.j && (e &= Ra(k, f) !== !1)
      }
    }finally {
      a.q--, Pa(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Ra(a, b) {
  var c = a.handleEvent(b);
  a.D && T(a.key);
  return c
}
Ga(function(a, b) {
  if(!P[a]) {
    return!0
  }
  var c = P[a], d = c.type, f = Q;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], e, g;
  xa === h && (xa = A && !o.addEventListener);
  if(xa) {
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
    l = Ka();
    l.o(e, this);
    e = !0;
    try {
      if(i) {
        for(var j = N(), r = l.currentTarget;r;r = r.parentNode) {
          j.push(r)
        }
        g = f[!0];
        g.c = g.a;
        for(var v = j.length - 1;!l.i && v >= 0 && g.c;v--) {
          l.currentTarget = j[v], e &= U(g, j[v], d, !0, l)
        }
        if(k) {
          g = f[!1];
          g.c = g.a;
          for(v = 0;!l.i && v < j.length && g.c;v++) {
            l.currentTarget = j[v], e &= U(g, j[v], d, !1, l)
          }
        }
      }else {
        e = Ra(c, l)
      }
    }finally {
      if(j) {
        j.length = 0, O(j)
      }
      l.n();
      La(l)
    }
    return e
  }
  d = new I(b, this);
  try {
    e = Ra(c, d)
  }finally {
    d.n()
  }
  return e
});
// Input 22
new J(0, 100);
// Input 23
var V = "StopIteration" in o ? o.StopIteration : Error("StopIteration");
function W() {
}
W.prototype.next = function() {
  throw V;
};
W.prototype.s = function() {
  return this
};
function Sa(a) {
  if(a instanceof W) {
    return a
  }
  if(typeof a.s == "function") {
    return a.s(!1)
  }
  if(aa(a)) {
    var b = 0, c = new W;
    c.next = function() {
      for(;;) {
        if(b >= a.length) {
          throw V;
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
function Ta(a, b) {
  if(aa(a)) {
    try {
      wa(a, b, h)
    }catch(c) {
      if(c !== V) {
        throw c;
      }
    }
  }else {
    a = Sa(a);
    try {
      for(;;) {
        b.call(h, a.next(), h, a)
      }
    }catch(d) {
      if(d !== V) {
        throw d;
      }
    }
  }
}
;
// Input 24
// Input 25
function X(a) {
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
      if(a instanceof X) {
        c = Ua(a);
        Va(a);
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
n = X.prototype;
n.a = 0;
n.version_ = 0;
function Ua(a) {
  Va(a);
  return a.b.concat()
}
function Va(a) {
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
  Va(this);
  var b = 0, c = this.b, d = this.g, f = this.version_, e = this, g = new W;
  g.next = function() {
    for(;;) {
      if(f != e.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(b >= c.length) {
        throw V;
      }
      var g = c[b++];
      return a ? g : d[g]
    }
  };
  return g
};
// Input 26
// Input 27
// Input 28
// Input 29
// Input 30
// Input 31
function Wa() {
  this.K = [];
  this.S = new X;
  this.ea = this.fa = this.ga = this.$ = 0;
  this.T = new X;
  this.W = this.da = 0;
  this.Y = 1;
  this.X = new J(0, 4E3);
  this.X.k = function() {
    return new Xa
  };
  this.aa = new J(0, 50);
  this.aa.k = function() {
    return new Ya
  };
  var a = this;
  this.L = new J(0, 2E3);
  this.L.k = function() {
    return String(a.Y++)
  };
  this.L.t = function() {
  };
  this.ha = 3
}
function Ya() {
  this.U = this.ba = this.count = 0
}
Ya.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.ba * 10) / 10, " ms)");
  this.U && a.push(" [VarAlloc = ", this.U, "]");
  return a.join("")
};
function Xa() {
}
function Za(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push($a(a.I - c));
  f.push(" ", ab(a.I - b));
  a.u == 0 ? f.push(" Start        ") : a.u == 1 ? (f.push(" Done "), f.push($a(a.ia - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.ca > 0 && f.push("[VarAlloc ", a.ca, "] ");
  return f.join("")
}
Xa.prototype.toString = function() {
  return this.type == m ? this.V : "[" + this.type + "] " + this.V
};
Wa.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.K.length;d++) {
    var f = this.K[d];
    f.u == 1 && c.pop();
    a.push(" ", Za(f, this.$, b, c.join("")));
    b = f.I;
    a.push("\n");
    f.u == 0 && c.push("|  ")
  }
  if(this.S.a != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Ta(this.S, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", ab(b.startTime), ")\n")
    })
  }
  b = Ua(this.T);
  for(d = 0;d < b.length;d++) {
    c = this.T.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.da, "\n", "Total comments created ", this.W, "\n", "Overhead start: ", this.ga, " ms\n", "Overhead end: ", this.fa, " ms\n", "Overhead comment: ", this.ea, " ms\n");
  return a.join("")
};
function $a(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function ab(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Wa;
// Input 32
// Input 33
function bb() {
  G.call(this)
}
w(bb, G);
n = bb.prototype;
n.F = !0;
n.z = m;
n.addEventListener = function(a, b, c, d) {
  S(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  Oa(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = Q;
  if(b in c) {
    if(s(a)) {
      a = new H(a, this)
    }else {
      if(a instanceof H) {
        a.target = a.target || this
      }else {
        var d = a, a = new H(b, this);
        ga(a, d)
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
      for(var g = f.length - 1;!a.i && g >= 0 && e.c;g--) {
        a.currentTarget = f[g], d &= U(e, f[g], a.type, !0, a) && a.r != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.c = e.a, b) {
        for(g = 0;!a.i && g < f.length && e.c;g++) {
          a.currentTarget = f[g], d &= U(e, f[g], a.type, !1, a) && a.r != !1
        }
      }else {
        for(f = this;!a.i && f && e.c;f = f.z) {
          a.currentTarget = f, d &= U(e, f, a.type, !1, a) && a.r != !1
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
  bb.A.d.call(this);
  Qa(this);
  this.z = m
};
// Input 34
function cb(a) {
  G.call(this);
  this.p = a;
  this.N = this.p.length;
  this.w = 1;
  this.h = 0;
  this.l = this.h + this.w
}
w(cb, bb);
function Y(a, b) {
  a.w = b;
  a.l = a.h + b
}
function Z(a) {
  return a.p.slice(a.h, a.l)
}
cb.prototype.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.N - this.l : this.h, b = b <= c ? b : c, c = "next";
  a == "prev" && (b *= -1, c = "prev");
  var d, f = b, e;
  d = [];
  var g = [];
  for(e = this.h;e < this.l;e++) {
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
  this.h += b;
  this.l += b;
  this.dispatchEvent({type:c, P:d.P, O:d.O})
};
cb.prototype.next = function(a) {
  this.move("next", a)
};
// Input 35
describe("Carousel", function() {
  var a, b = [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}];
  beforeEach(function() {
    a = new cb(b)
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
      S(a, "next", function() {
        b = Z(a)
      });
      a.next(1);
      expect(b[0].name == "two" && b[1].name == "three").toBeTruthy()
    });
    it("should move more than item next", function() {
      Y(a, 3);
      var b;
      S(a, "next", function() {
        b = Z(a)
      });
      a.next(3);
      expect(b[0].name == "four" && b[1].name == "five").toBeTruthy()
    });
    it("should not move more than item count", function() {
      Y(a, 2);
      var b;
      S(a, "next", function() {
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
