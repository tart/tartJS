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
    var i = d[g] || "", j = f[g] || "", k = RegExp("(\\d*)(\\D*)", "g"), C = RegExp("(\\d*)(\\D*)", "g");
    do {
      var l = k.exec(i) || ["", "", ""], r = C.exec(j) || ["", "", ""];
      if(l[0].length == 0 && r[0].length == 0) {
        break
      }
      c = ia(l[1].length == 0 ? 0 : parseInt(l[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || ia(l[2].length == 0, r[2].length == 0) || ia(l[2], r[2])
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
var w, ja, x, ka;
function la() {
  return o.navigator ? o.navigator.userAgent : m
}
ka = x = ja = w = !1;
var y;
if(y = la()) {
  var ma = o.navigator;
  w = y.indexOf("Opera") == 0;
  ja = !w && y.indexOf("MSIE") != -1;
  x = !w && y.indexOf("WebKit") != -1;
  ka = !w && !x && ma.product == "Gecko"
}
var z = ja, na = ka, oa = x, pa = o.navigator, qa = (pa && pa.platform || "").indexOf("Mac") != -1, A;
a: {
  var B = "", D;
  if(w && o.opera) {
    var ra = o.opera.version, B = typeof ra == "function" ? ra() : ra
  }else {
    if(na ? D = /rv\:([^\);]+)(\)|;)/ : z ? D = /MSIE\s+([^\);]+)(\)|;)/ : oa && (D = /WebKit\/(\S+)/), D) {
      var sa = D.exec(la()), B = sa ? sa[1] : ""
    }
  }
  if(z) {
    var ta, ua = o.document;
    ta = ua ? ua.documentMode : h;
    if(ta > parseFloat(B)) {
      A = String(ta);
      break a
    }
  }
  A = B
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
z && (E["9"] || (E["9"] = ha(A, "9") >= 0));
z && (E["8"] || (E["8"] = ha(A, "8") >= 0));
// Input 12
// Input 13
function G() {
  ya && (za[t(this)] = this)
}
var ya = !1, za = {};
G.prototype.J = !1;
G.prototype.p = function() {
  if(!this.J && (this.J = !0, this.f(), ya)) {
    var a = t(this);
    if(!za.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete za[a]
  }
};
G.prototype.f = function() {
};
// Input 14
function H(a, b) {
  G.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
u(H, G);
H.prototype.f = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
H.prototype.k = !1;
H.prototype.v = !0;
// Input 15
var Aa = new Function("a", "return a");
// Input 16
function I(a, b) {
  a && this.q(a, b)
}
u(I, H);
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
n.$ = !1;
n.L = m;
n.q = function(a, b) {
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
  this.$ = qa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.L = a;
  delete this.v;
  delete this.k
};
n.f = function() {
  I.F.f.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.L = m
};
// Input 17
function Ba() {
}
var Ca = 0;
n = Ba.prototype;
n.key = 0;
n.l = !1;
n.G = !1;
n.q = function(a, b, c, d, f, e) {
  if(q(a) == "function") {
    this.O = !0
  }else {
    if(a && a.handleEvent && q(a.handleEvent) == "function") {
      this.O = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.o = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.C = e;
  this.G = !1;
  this.key = ++Ca;
  this.l = !1
};
n.handleEvent = function(a) {
  if(this.O) {
    return this.o.call(this.C || this.src, a)
  }
  return this.o.handleEvent.call(this.o, a)
};
// Input 18
var Da, Ea = (Da = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
// Input 19
function J(a, b) {
  G.call(this);
  this.P = b;
  this.h = [];
  if(a > this.P) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var c = 0;c < a;c++) {
    this.h.push(this.m())
  }
}
u(J, G);
n = J.prototype;
n.g = m;
n.I = m;
n.getObject = function() {
  if(this.h.length) {
    return this.h.pop()
  }
  return this.m()
};
function K(a, b) {
  a.h.length < a.P ? a.h.push(b) : a.z(b)
}
n.m = function() {
  return this.g ? this.g() : {}
};
n.z = function(a) {
  if(this.I) {
    this.I(a)
  }else {
    var b = q(a);
    if(b == "object" || b == "array" || b == "function") {
      if(q(a.p) == "function") {
        a.p()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
n.f = function() {
  J.F.f.call(this);
  for(var a = this.h;a.length;) {
    this.z(a.pop())
  }
  delete this.h
};
// Input 20
var L, M, N, O, Fa, Ga, Ha, Ia, Ja, Ka, La;
(function() {
  function a() {
    return{a:0, d:0}
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
      return j.getObject()
    };
    O = function(a) {
      K(j, a)
    };
    Fa = function() {
      return k.getObject()
    };
    Ha = function() {
      K(k, c())
    };
    Ia = function() {
      return C.getObject()
    };
    Ja = function(a) {
      K(C, a)
    };
    Ka = function() {
      return l.getObject()
    };
    La = function(a) {
      K(l, a)
    };
    var i = new J(0, 600);
    i.g = a;
    var j = new J(0, 600);
    j.g = b;
    var k = new J(0, 600);
    k.g = c;
    var C = new J(0, 600);
    C.g = d;
    var l = new J(0, 600);
    l.g = f
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
      var g = g[d], i = t(a), j;
      g.d++;
      if(g[i]) {
        j = g[i];
        for(e = 0;e < j.length;e++) {
          if(g = j[e], g.o == c && g.C == f) {
            if(g.l) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = N(), g.a++
      }
      e = Fa();
      e.src = a;
      g = Ia();
      g.q(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      j.push(g);
      P[c] = g;
      R[i] || (R[i] = N());
      R[i].push(g);
      a.addEventListener ? (a == o || !a.H) && a.addEventListener(b, e, d) : a.attachEvent(Na(b), e)
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
      if(b in e && (e = e[b], d in e && (e = e[d], a = t(a), e[a]))) {
        a = e[a];
        break a
      }
      a = m
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].o == c && a[e].capture == d && a[e].C == f) {
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
    if(!b.l) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == o || !c.H) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Na(d), f);
      c = t(c);
      f = Q[d][e][c];
      if(R[c]) {
        var g = R[c], i = va(g, b);
        i >= 0 && F.splice.call(g, i, 1);
        g.length == 0 && delete R[c]
      }
      b.l = !0;
      f.Q = !0;
      Pa(d, e, c, f);
      delete P[a]
    }
  }
}
function Pa(a, b, c, d) {
  if(!d.u && d.Q) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].l) {
        var g = d[f].proxy;
        g.src = m;
        Ha(g);
        Ja(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.Q = !1;
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
    if(a = t(a), R[a]) {
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
  var e = 1, b = t(b);
  if(a[b]) {
    a.d--;
    a = a[b];
    a.u ? a.u++ : a.u = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.l && (e &= Ra(j, f) !== !1)
      }
    }finally {
      a.u--, Pa(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Ra(a, b) {
  var c = a.handleEvent(b);
  a.G && T(a.key);
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
  xa === h && (xa = z && !o.addEventListener);
  if(xa) {
    var i;
    if(!(i = b)) {
      a: {
        i = "window.event".split(".");
        for(var j = o;e = i.shift();) {
          if(j[e] != m) {
            j = j[e]
          }else {
            i = m;
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
    k = Ka();
    k.q(e, this);
    e = !0;
    try {
      if(i) {
        for(var l = N(), r = k.currentTarget;r;r = r.parentNode) {
          l.push(r)
        }
        g = f[!0];
        g.d = g.a;
        for(var v = l.length - 1;!k.k && v >= 0 && g.d;v--) {
          k.currentTarget = l[v], e &= U(g, l[v], d, !0, k)
        }
        if(j) {
          g = f[!1];
          g.d = g.a;
          for(v = 0;!k.k && v < l.length && g.d;v++) {
            k.currentTarget = l[v], e &= U(g, l[v], d, !1, k)
          }
        }
      }else {
        e = Ra(c, k)
      }
    }finally {
      if(l) {
        l.length = 0, O(l)
      }
      k.p();
      La(k)
    }
    return e
  }
  d = new I(b, this);
  try {
    e = Ra(c, d)
  }finally {
    d.p()
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
W.prototype.w = function() {
  return this
};
function Sa(a) {
  if(a instanceof W) {
    return a
  }
  if(typeof a.w == "function") {
    return a.w(!1)
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
function Ua(a) {
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
      if(a instanceof Ua) {
        c = Va(a);
        Wa(a);
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
n = Ua.prototype;
n.a = 0;
n.version_ = 0;
function Va(a) {
  Wa(a);
  return a.b.concat()
}
function Wa(a) {
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
  Wa(this);
  var b = 0, c = this.b, d = this.j, f = this.version_, e = this, g = new W;
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
function Xa() {
  this.M = [];
  this.R = new Ua;
  this.fa = this.ga = this.ha = this.aa = 0;
  this.S = new Ua;
  this.X = this.ea = 0;
  this.Z = 1;
  this.Y = new J(0, 4E3);
  this.Y.m = function() {
    return new Ya
  };
  this.ba = new J(0, 50);
  this.ba.m = function() {
    return new Za
  };
  var a = this;
  this.N = new J(0, 2E3);
  this.N.m = function() {
    return String(a.Z++)
  };
  this.N.z = function() {
  };
  this.ia = 3
}
function Za() {
  this.V = this.ca = this.count = 0
}
Za.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.ca * 10) / 10, " ms)");
  this.V && a.push(" [VarAlloc = ", this.V, "]");
  return a.join("")
};
function Ya() {
}
function $a(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(ab(a.K - c));
  f.push(" ", bb(a.K - b));
  a.A == 0 ? f.push(" Start        ") : a.A == 1 ? (f.push(" Done "), f.push(ab(a.ja - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.da > 0 && f.push("[VarAlloc ", a.da, "] ");
  return f.join("")
}
Ya.prototype.toString = function() {
  return this.type == m ? this.W : "[" + this.type + "] " + this.W
};
Xa.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.M.length;d++) {
    var f = this.M[d];
    f.A == 1 && c.pop();
    a.push(" ", $a(f, this.aa, b, c.join("")));
    b = f.K;
    a.push("\n");
    f.A == 0 && c.push("|  ")
  }
  if(this.R.a != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Ta(this.R, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", bb(b.startTime), ")\n")
    })
  }
  b = Va(this.S);
  for(d = 0;d < b.length;d++) {
    c = this.S.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.ea, "\n", "Total comments created ", this.X, "\n", "Overhead start: ", this.ha, " ms\n", "Overhead end: ", this.ga, " ms\n", "Overhead comment: ", this.fa, " ms\n");
  return a.join("")
};
function ab(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function bb(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Xa;
// Input 32
// Input 33
function cb() {
  G.call(this)
}
u(cb, G);
n = cb.prototype;
n.H = !0;
n.D = m;
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
      for(e = this;e;e = e.D) {
        f.push(e)
      }
      e = c[!0];
      e.d = e.a;
      for(var g = f.length - 1;!a.k && g >= 0 && e.d;g--) {
        a.currentTarget = f[g], d &= U(e, f[g], a.type, !0, a) && a.v != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.d = e.a, b) {
        for(g = 0;!a.k && g < f.length && e.d;g++) {
          a.currentTarget = f[g], d &= U(e, f[g], a.type, !1, a) && a.v != !1
        }
      }else {
        for(f = this;!a.k && f && e.d;f = f.D) {
          a.currentTarget = f, d &= U(e, f, a.type, !1, a) && a.v != !1
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
  cb.F.f.call(this);
  Qa(this);
  this.D = m
};
// Input 34
function X(a) {
  G.call(this);
  this.i = a;
  this.n = this.i.length;
  this.r = 1;
  this.c = 0;
  this.e = this.c + this.r
}
u(X, cb);
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
  return db(this, c, d)
};
function db(a, b, c) {
  for(var d = a.n, f = {U:b.filter(function(a) {
    return!(c.indexOf(a) > -1)
  }), T:c.filter(function(a) {
    return!(b.indexOf(a) > -1)
  })}, e = 0, g = 0, i = [], j = [], e = 0;e < f.T.length;e++) {
    g = (f.T[e] + d) % d, i.push(a.i[g])
  }
  for(e = 0;e < f.U.length;e++) {
    g = (f.U[e] + d) % d, j.push(a.i[g])
  }
  return{s:i, t:j}
}
X.prototype.move = function(a, b) {
  var b = Math.abs(b || 1), c = a == "next" ? this.n - this.e : this.c, d = "next", b = b <= c ? b : c;
  a == "prev" && (b *= -1, d = "prev");
  c = this.B(b);
  this.c += b;
  this.e += b;
  this.dispatchEvent({type:d, t:c.t, s:c.s})
};
X.prototype.next = function(a) {
  this.move("next", a)
};
X.prototype.prev = function(a) {
  this.move("prev", a)
};
// Input 35
function eb(a) {
  X.call(this, a)
}
u(eb, X);
eb.prototype.B = function(a) {
  var b, c = [], d = [];
  for(b = 0;b < this.e;b++) {
    c.push(b)
  }
  for(b = a = this.c + a;b < a + this.r;b++) {
    d.push(b)
  }
  return db(this, c, d)
};
eb.prototype.move = function(a, b) {
  b = Math.abs(b || 1);
  b %= this.n;
  var c = 0, d = "next";
  if(a == "prev") {
    b *= -1, c = this.n, d = "prev"
  }
  var f = [].concat(this.i).concat(this.i), e = this.B(b);
  this.c = this.c + c + b;
  this.e = this.e + c + b;
  this.i = f.slice(this.c, this.c + this.n);
  this.c = 0;
  this.e = this.r;
  this.dispatchEvent({type:d, t:e.t, s:e.s})
};
// Input 36
describe("CircularCarousel", function() {
  var a, b = [{name:"one"}, {name:"two"}, {name:"three"}, {name:"four"}, {name:"five"}, {name:"six"}, {name:"seven"}];
  beforeEach(function() {
    a = new eb(b)
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
      S(a, "prev", function() {
        d = Z(a)
      });
      a.prev(1);
      expect(b[0].name == "one" && d[0].name == "seven").toBeTruthy()
    });
    it("will navigate to second element after 6 previous steps", function() {
      Y(a);
      var b = Z(a), d;
      S(a, "prev", function() {
        d = Z(a)
      });
      a.prev(6);
      expect(b[0].name == "one" && d[0].name == "two").toBeTruthy()
    });
    it("will navigate to seventh element after 8 previous steps which it means circular", function() {
      Y(a);
      var b = Z(a), d;
      S(a, "prev", function() {
        d = Z(a)
      });
      a.prev(8);
      expect(b[0].name == "one" && d[0].name == "seven").toBeTruthy()
    });
    it("will navigate to second element after 8 next steps which it means circular", function() {
      Y(a);
      var b = Z(a), d;
      S(a, "next", function() {
        d = Z(a)
      });
      a.next(8);
      expect(b[0].name == "one" && d[0].name == "two").toBeTruthy()
    });
    it("will navigate to third element after 2 next steps", function() {
      Y(a);
      var b = Z(a), d;
      S(a, "next", function() {
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
