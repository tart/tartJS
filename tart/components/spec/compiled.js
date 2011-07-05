(function(){// Input 0
function h(a) {
  throw a;
}
var m = void 0, n = null, o, p = this;
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
function aa(a) {
  var b = r(a);
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
function v(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.r = b.prototype;
  a.prototype = new c
}
;
// Input 1
function ea(a, b) {
  for(var c in a) {
    b.call(m, a[c], c, a)
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
      var l = k.exec(i) || ["", "", ""], u = C.exec(j) || ["", "", ""];
      if(l[0].length == 0 && u[0].length == 0) {
        break
      }
      c = ia(l[1].length == 0 ? 0 : parseInt(l[1], 10), u[1].length == 0 ? 0 : parseInt(u[1], 10)) || ia(l[2].length == 0, u[2].length == 0) || ia(l[2], u[2])
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
var w, ja, y, ka;
function la() {
  return p.navigator ? p.navigator.userAgent : n
}
ka = y = ja = w = !1;
var z;
if(z = la()) {
  var ma = p.navigator;
  w = z.indexOf("Opera") == 0;
  ja = !w && z.indexOf("MSIE") != -1;
  y = !w && z.indexOf("WebKit") != -1;
  ka = !w && !y && ma.product == "Gecko"
}
var A = ja, na = ka, oa = y, pa = p.navigator, qa = (pa && pa.platform || "").indexOf("Mac") != -1, B;
a: {
  var D = "", E;
  if(w && p.opera) {
    var ra = p.opera.version, D = typeof ra == "function" ? ra() : ra
  }else {
    if(na ? E = /rv\:([^\);]+)(\)|;)/ : A ? E = /MSIE\s+([^\);]+)(\)|;)/ : oa && (E = /WebKit\/(\S+)/), E) {
      var sa = E.exec(la()), D = sa ? sa[1] : ""
    }
  }
  if(A) {
    var ta, ua = p.document;
    ta = ua ? ua.documentMode : m;
    if(ta > parseFloat(D)) {
      B = String(ta);
      break a
    }
  }
  B = D
}
var F = {};
// Input 5
// Input 6
// Input 7
var G = Array.prototype, va = G.indexOf ? function(a, b, c) {
  return G.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == n ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
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
}, wa = G.forEach ? function(a, b, c) {
  G.forEach.call(a, b, c)
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
A && (F["9"] || (F["9"] = ha(B, "9") >= 0));
A && (F["8"] || (F["8"] = ha(B, "8") >= 0));
// Input 12
// Input 13
function H() {
  ya && (za[t(this)] = this)
}
var ya = !1, za = {};
H.prototype.H = !1;
H.prototype.n = function() {
  if(!this.H && (this.H = !0, this.d(), ya)) {
    var a = t(this);
    za.hasOwnProperty(a) || h(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete za[a]
  }
};
H.prototype.d = function() {
};
// Input 14
function I(a, b) {
  H.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
v(I, H);
I.prototype.d = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
I.prototype.i = !1;
I.prototype.q = !0;
// Input 15
var Aa = new Function("a", "return a");
// Input 16
function J(a, b) {
  a && this.o(a, b)
}
v(J, I);
o = J.prototype;
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
o.Y = !1;
o.K = n;
o.o = function(a, b) {
  var c = this.type = a.type;
  I.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(na) {
      try {
        Aa(d.nodeName)
      }catch(f) {
        d = n
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
  this.offsetX = a.offsetX !== m ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== m ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== m ? a.clientX : a.pageX;
  this.clientY = a.clientY !== m ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Y = qa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.K = a;
  delete this.q;
  delete this.i
};
o.d = function() {
  J.r.d.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.K = n
};
// Input 17
function Ba() {
}
var Ca = 0;
o = Ba.prototype;
o.key = 0;
o.j = !1;
o.D = !1;
o.o = function(a, b, c, d, f, e) {
  r(a) == "function" ? this.N = !0 : a && a.handleEvent && r(a.handleEvent) == "function" ? this.N = !1 : h(Error("Invalid listener argument"));
  this.l = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.w = e;
  this.D = !1;
  this.key = ++Ca;
  this.j = !1
};
o.handleEvent = function(a) {
  if(this.N) {
    return this.l.call(this.w || this.src, a)
  }
  return this.l.handleEvent.call(this.l, a)
};
// Input 18
var Da, Ea = (Da = "ScriptEngine" in p && p.ScriptEngine() == "JScript") ? p.ScriptEngineMajorVersion() + "." + p.ScriptEngineMinorVersion() + "." + p.ScriptEngineBuildVersion() : "0";
// Input 19
function K(a, b) {
  H.call(this);
  this.O = b;
  this.f = [];
  a > this.O && h(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.f.push(this.k())
  }
}
v(K, H);
o = K.prototype;
o.e = n;
o.G = n;
o.getObject = function() {
  if(this.f.length) {
    return this.f.pop()
  }
  return this.k()
};
function L(a, b) {
  a.f.length < a.O ? a.f.push(b) : a.u(b)
}
o.k = function() {
  return this.e ? this.e() : {}
};
o.u = function(a) {
  if(this.G) {
    this.G(a)
  }else {
    var b = r(a);
    if(b == "object" || b == "array" || b == "function") {
      if(r(a.n) == "function") {
        a.n()
      }else {
        for(var c in a) {
          delete a[c]
        }
      }
    }
  }
};
o.d = function() {
  K.r.d.call(this);
  for(var a = this.f;a.length;) {
    this.u(a.pop())
  }
  delete this.f
};
// Input 20
var M, N, O, P, Fa, Ga, Ha, Ia, Ja, Ka, La;
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
    return new J
  }
  var e = Da && !(ha(Ea, "5.7") >= 0), g;
  Ga = function(a) {
    g = a
  };
  if(e) {
    M = function() {
      return i.getObject()
    };
    N = function(a) {
      L(i, a)
    };
    O = function() {
      return j.getObject()
    };
    P = function(a) {
      L(j, a)
    };
    Fa = function() {
      return k.getObject()
    };
    Ha = function() {
      L(k, c())
    };
    Ia = function() {
      return C.getObject()
    };
    Ja = function(a) {
      L(C, a)
    };
    Ka = function() {
      return l.getObject()
    };
    La = function(a) {
      L(l, a)
    };
    var i = new K(0, 600);
    i.e = a;
    var j = new K(0, 600);
    j.e = b;
    var k = new K(0, 600);
    k.e = c;
    var C = new K(0, 600);
    C.e = d;
    var l = new K(0, 600);
    l.e = f
  }else {
    M = a, N = q, O = b, P = q, Fa = c, Ha = q, Ia = d, Ja = q, Ka = f, La = q
  }
})();
// Input 21
var Q = {}, R = {}, S = {}, Ma = {};
function Na(a, b, c, d, f) {
  if(b) {
    if(r(b) == "array") {
      for(var e = 0;e < b.length;e++) {
        Na(a, b[e], c, d, f)
      }
    }else {
      var d = !!d, g = R;
      b in g || (g[b] = M());
      g = g[b];
      d in g || (g[d] = M(), g.a++);
      var g = g[d], i = t(a), j;
      g.c++;
      if(g[i]) {
        j = g[i];
        for(e = 0;e < j.length;e++) {
          if(g = j[e], g.l == c && g.w == f) {
            if(g.j) {
              break
            }
            return
          }
        }
      }else {
        j = g[i] = O(), g.a++
      }
      e = Fa();
      e.src = a;
      g = Ia();
      g.o(c, e, a, b, d, f);
      c = g.key;
      e.key = c;
      j.push(g);
      Q[c] = g;
      S[i] || (S[i] = O());
      S[i].push(g);
      a.addEventListener ? (a == p || !a.F) && a.addEventListener(b, e, d) : a.attachEvent(Oa(b), e)
    }
  }else {
    h(Error("Invalid event type"))
  }
}
function Pa(a, b, c, d, f) {
  if(r(b) == "array") {
    for(var e = 0;e < b.length;e++) {
      Pa(a, b[e], c, d, f)
    }
  }else {
    d = !!d;
    a: {
      e = R;
      if(b in e && (e = e[b], d in e && (e = e[d], a = t(a), e[a]))) {
        a = e[a];
        break a
      }
      a = n
    }
    if(a) {
      for(e = 0;e < a.length;e++) {
        if(a[e].l == c && a[e].capture == d && a[e].w == f) {
          T(a[e].key);
          break
        }
      }
    }
  }
}
function T(a) {
  if(Q[a]) {
    var b = Q[a];
    if(!b.j) {
      var c = b.src, d = b.type, f = b.proxy, e = b.capture;
      c.removeEventListener ? (c == p || !c.F) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Oa(d), f);
      c = t(c);
      f = R[d][e][c];
      if(S[c]) {
        var g = S[c], i = va(g, b);
        i >= 0 && G.splice.call(g, i, 1);
        g.length == 0 && delete S[c]
      }
      b.j = !0;
      f.P = !0;
      Qa(d, e, c, f);
      delete Q[a]
    }
  }
}
function Qa(a, b, c, d) {
  if(!d.p && d.P) {
    for(var f = 0, e = 0;f < d.length;f++) {
      if(d[f].j) {
        var g = d[f].proxy;
        g.src = n;
        Ha(g);
        Ja(d[f])
      }else {
        f != e && (d[e] = d[f]), e++
      }
    }
    d.length = e;
    d.P = !1;
    e == 0 && (P(d), delete R[a][b][c], R[a][b].a--, R[a][b].a == 0 && (N(R[a][b]), delete R[a][b], R[a].a--), R[a].a == 0 && (N(R[a]), delete R[a]))
  }
}
function Ra(a) {
  var b, c = 0, d = b == n;
  b = !!b;
  if(a == n) {
    ea(S, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          T(f.key), c++
        }
      }
    })
  }else {
    if(a = t(a), S[a]) {
      for(var a = S[a], f = a.length - 1;f >= 0;f--) {
        var e = a[f];
        if(d || b == e.capture) {
          T(e.key), c++
        }
      }
    }
  }
}
function Oa(a) {
  if(a in Ma) {
    return Ma[a]
  }
  return Ma[a] = "on" + a
}
function U(a, b, c, d, f) {
  var e = 1, b = t(b);
  if(a[b]) {
    a.c--;
    a = a[b];
    a.p ? a.p++ : a.p = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.j && (e &= Sa(j, f) !== !1)
      }
    }finally {
      a.p--, Qa(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Sa(a, b) {
  var c = a.handleEvent(b);
  a.D && T(a.key);
  return c
}
Ga(function(a, b) {
  if(!Q[a]) {
    return!0
  }
  var c = Q[a], d = c.type, f = R;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], e, g;
  xa === m && (xa = A && !p.addEventListener);
  if(xa) {
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
      if(e.keyCode < 0 || e.returnValue != m) {
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
        if(k || e.returnValue == m) {
          e.returnValue = !0
        }
      }
    }
    k = Ka();
    k.o(e, this);
    e = !0;
    try {
      if(i) {
        for(var l = O(), u = k.currentTarget;u;u = u.parentNode) {
          l.push(u)
        }
        g = f[!0];
        g.c = g.a;
        for(var x = l.length - 1;!k.i && x >= 0 && g.c;x--) {
          k.currentTarget = l[x], e &= U(g, l[x], d, !0, k)
        }
        if(j) {
          g = f[!1];
          g.c = g.a;
          for(x = 0;!k.i && x < l.length && g.c;x++) {
            k.currentTarget = l[x], e &= U(g, l[x], d, !1, k)
          }
        }
      }else {
        e = Sa(c, k)
      }
    }finally {
      if(l) {
        l.length = 0, P(l)
      }
      k.n();
      La(k)
    }
    return e
  }
  d = new J(b, this);
  try {
    e = Sa(c, d)
  }finally {
    d.n()
  }
  return e
});
// Input 22
new K(0, 100);
// Input 23
var V = "StopIteration" in p ? p.StopIteration : Error("StopIteration");
function W() {
}
W.prototype.next = function() {
  h(V)
};
W.prototype.t = function() {
  return this
};
function Ta(a) {
  if(a instanceof W) {
    return a
  }
  if(typeof a.t == "function") {
    return a.t(!1)
  }
  if(aa(a)) {
    var b = 0, c = new W;
    c.next = function() {
      for(;;) {
        if(b >= a.length && h(V), b in a) {
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
function Ua(a, b) {
  if(aa(a)) {
    try {
      wa(a, b, m)
    }catch(c) {
      c !== V && h(c)
    }
  }else {
    a = Ta(a);
    try {
      for(;;) {
        b.call(m, a.next(), m, a)
      }
    }catch(d) {
      d !== V && h(d)
    }
  }
}
;
// Input 24
// Input 25
function Va(a) {
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
      if(a instanceof Va) {
        c = Wa(a);
        Xa(a);
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
o = Va.prototype;
o.a = 0;
o.version_ = 0;
function Wa(a) {
  Xa(a);
  return a.b.concat()
}
function Xa(a) {
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
  Xa(this);
  var b = 0, c = this.b, d = this.g, f = this.version_, e = this, g = new W;
  g.next = function() {
    for(;;) {
      f != e.version_ && h(Error("The map has changed since the iterator was created"));
      b >= c.length && h(V);
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
function Ya() {
  this.L = [];
  this.Q = new Va;
  this.da = this.ea = this.fa = this.Z = 0;
  this.R = new Va;
  this.U = this.ca = 0;
  this.X = 1;
  this.V = new K(0, 4E3);
  this.V.k = function() {
    return new Za
  };
  this.$ = new K(0, 50);
  this.$.k = function() {
    return new $a
  };
  var a = this;
  this.M = new K(0, 2E3);
  this.M.k = function() {
    return String(a.X++)
  };
  this.M.u = function() {
  };
  this.ga = 3
}
function $a() {
  this.S = this.time = this.count = 0
}
$a.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.time * 10) / 10, " ms)");
  this.S && a.push(" [VarAlloc = ", this.S, "]");
  return a.join("")
};
function Za() {
}
function ab(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push(bb(a.J - c));
  f.push(" ", cb(a.J - b));
  a.v == 0 ? f.push(" Start        ") : a.v == 1 ? (f.push(" Done "), f.push(bb(a.ha - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.ba > 0 && f.push("[VarAlloc ", a.ba, "] ");
  return f.join("")
}
Za.prototype.toString = function() {
  return this.type == n ? this.T : "[" + this.type + "] " + this.T
};
Ya.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.L.length;d++) {
    var f = this.L[d];
    f.v == 1 && c.pop();
    a.push(" ", ab(f, this.Z, b, c.join("")));
    b = f.J;
    a.push("\n");
    f.v == 0 && c.push("|  ")
  }
  if(this.Q.a != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Ua(this.Q, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", cb(b.startTime), ")\n")
    })
  }
  b = Wa(this.R);
  for(d = 0;d < b.length;d++) {
    c = this.R.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.ca, "\n", "Total comments created ", this.U, "\n", "Overhead start: ", this.fa, " ms\n", "Overhead end: ", this.ea, " ms\n", "Overhead comment: ", this.da, " ms\n");
  return a.join("")
};
function bb(a) {
  var a = Math.round(a), b = "";
  a < 1E3 && (b = " ");
  a < 100 && (b = "  ");
  a < 10 && (b = "   ");
  return b + a
}
function cb(a) {
  a = Math.round(a);
  return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new Ya;
// Input 32
// Input 33
function X() {
  H.call(this)
}
v(X, H);
o = X.prototype;
o.F = !0;
o.z = n;
o.addEventListener = function(a, b, c, d) {
  Na(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Pa(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = R;
  if(b in c) {
    if(s(a)) {
      a = new I(a, this)
    }else {
      if(a instanceof I) {
        a.target = a.target || this
      }else {
        var d = a, a = new I(b, this);
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
        a.currentTarget = f[g], d &= U(e, f[g], a.type, !0, a) && a.q != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.c = e.a, b) {
        for(g = 0;!a.i && g < f.length && e.c;g++) {
          a.currentTarget = f[g], d &= U(e, f[g], a.type, !1, a) && a.q != !1
        }
      }else {
        for(f = this;!a.i && f && e.c;f = f.z) {
          a.currentTarget = f, d &= U(e, f, a.type, !1, a) && a.q != !1
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
  Ra(this);
  this.z = n
};
// Input 34
function Y() {
  H.call(this)
}
v(Y, X);
Y.prototype.dispatchEvent = function(a) {
  return Y.r.dispatchEvent.call(this, a)
};
// Input 35
function Z() {
  this.m = m;
  this.s = {}
}
Z.prototype.h = function() {
  h(Error("Not implemneted yet"))
};
Z.prototype.get = function(a) {
  this.m || h(Error("DOM not set yet"));
  this.s[a] = this.s[a] || this.m.find(a);
  return this.s[a]
};
// Input 36
function db(a, b) {
  this.W = a || new Y;
  this.view = b || new Z
}
function eb(a) {
  var b = $(a.view.h());
  return a.view.m = b
}
;
// Input 37
describe("Component", function() {
  var a = new Y, b = new Z;
  describe("ComponentController", function() {
    describe("has model and view objects in it", function() {
      it("should have model object", function() {
        var c = new db(a, b);
        expect(c.W instanceof Y).toBeTruthy()
      });
      it("should have view object", function() {
        var c = new db(a, b);
        expect(c.view instanceof Z).toBeTruthy()
      })
    });
    describe("will get components DOM with buildDOM method", function() {
      function b() {
        Z.call(this)
      }
      v(b, Z);
      b.prototype.h = function() {
        return"<h1>Foo</h1>"
      };
      var d = eb(new db(a, new b));
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
          H.call(this)
        }
        v(a, Y);
        a.A = {C:"foo"};
        var b = new a, f;
        Na(b, a.A.C, function() {
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
        v(a, Z);
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
        v(a, Z);
        a.prototype.aa = function() {
          var a;
          return"<h1>" + (a || "") + "</h1>"
        };
        a.prototype.h = function() {
          return this.aa()
        }
      });
      it("should find related element on DOM", function() {
        var b = new a, f = $("<div>").append(b.h());
        b.m = f;
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
