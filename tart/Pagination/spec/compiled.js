(function() {// Input 0
    var h = void 0, m = null, n, o = this;
    function p() {
    }
    function q(a) {
        var b = typeof a;
        if (b == 'object') {
            if (a) {
                if (a instanceof Array) {
                    return'array';
                }else {
                    if (a instanceof Object) {
                        return b;
                    }
                }
                var c = Object.prototype.toString.call(a);
                if (c == '[object Window]') {
                    return'object';
                }
                if (c == '[object Array]' || typeof a.length == 'number' && typeof a.splice != 'undefined' && typeof a.propertyIsEnumerable != 'undefined' && !a.propertyIsEnumerable('splice')) {
                    return'array';
                }
                if (c == '[object Function]' || typeof a.call != 'undefined' && typeof a.propertyIsEnumerable != 'undefined' && !a.propertyIsEnumerable('call')) {
                    return'function';
                }
            }else {
                return'null';
            }
        }else {
            if (b == 'function' && typeof a.call == 'undefined') {
                return'object';
            }
        }
        return b;
    }
    function aa(a) {
        var b = q(a);
        return b == 'array' || b == 'object' && typeof a.length == 'number';
    }
    function r(a) {
        return typeof a == 'string';
    }
    function t(a) {
        return a[ba] || (a[ba] = ++ca);
    }
    var ba = 'closure_uid_' + Math.floor(Math.random() * 2147483648).toString(36), ca = 0, da = Date.now || function() {
        return+new Date;
    };
    function u(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
    }
;
    // Input 1
    function ea(a, b) {
        for (var c in a) {
            b.call(h, a[c], c, a);
        }
    }
    var fa = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    function ga(a) {
        for (var b, c, d = 1; d < arguments.length; d++) {
            c = arguments[d];
            for (b in c) {
                a[b] = c[b];
            }
            for (var f = 0; f < fa.length; f++) {
                b = fa[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b]);
            }
        }
    }
;
    // Input 2
    // Input 3
    function ha(a, b) {
        for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, '').split('.'), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, '').split('.'), e = Math.max(d.length, f.length), g = 0; c == 0 && g < e; g++) {
            var i = d[g] || '', j = f[g] || '', k = RegExp('(\\d*)(\\D*)', 'g'), A = RegExp('(\\d*)(\\D*)', 'g');
            do {
                var l = k.exec(i) || ['', '', ''], s = A.exec(j) || ['', '', ''];
                if (l[0].length == 0 && s[0].length == 0) {
                    break;
                }
                c = ia(l[1].length == 0 ? 0 : parseInt(l[1], 10), s[1].length == 0 ? 0 : parseInt(s[1], 10)) || ia(l[2].length == 0, s[2].length == 0) || ia(l[2], s[2]);
            }while (c == 0);
        }
        return c;
    }
    function ia(a, b) {
        if (a < b) {
            return-1;
        }else {
            if (a > b) {
                return 1;
            }
        }
        return 0;
    }
;
    // Input 4
    var v, ja, x, ka;
    function la() {
        return o.navigator ? o.navigator.userAgent : m;
    }
    ka = x = ja = v = !1;
    var y;
    if (y = la()) {
        var ma = o.navigator;
        v = y.indexOf('Opera') == 0;
        ja = !v && y.indexOf('MSIE') != -1;
        x = !v && y.indexOf('WebKit') != -1;
        ka = !v && !x && ma.product == 'Gecko';
    }
    var z = ja, na = ka, oa = x, pa = o.navigator, qa = (pa && pa.platform || '').indexOf('Mac') != -1, B;
    a: {
        var C = '', D;
        if (v && o.opera) {
            var ra = o.opera.version, C = typeof ra == 'function' ? ra() : ra;
        }else {
            if (na ? D = /rv\:([^\);]+)(\)|;)/ : z ? D = /MSIE\s+([^\);]+)(\)|;)/ : oa && (D = /WebKit\/(\S+)/), D) {
                var sa = D.exec(la()), C = sa ? sa[1] : '';
            }
        }
        if (z) {
            var ta, ua = o.document;
            ta = ua ? ua.documentMode : h;
            if (ta > parseFloat(C)) {
                B = String(ta);
                break a;
            }
        }
        B = C;
    }
    var E = {};
    // Input 5
    // Input 6
    // Input 7
    var F = Array.prototype, va = F.indexOf ? function(a, b, c) {
        return F.indexOf.call(a, b, c);
    } : function(a, b, c) {
        c = c == m ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
        if (r(a)) {
            if (!r(b) || b.length != 1) {
                return-1;
            }
            return a.indexOf(b, c);
        }
        for (; c < a.length; c++) {
            if (c in a && a[c] === b) {
                return c;
            }
        }
        return-1;
    }, wa = F.forEach ? function(a, b, c) {
        F.forEach.call(a, b, c);
    } : function(a, b, c) {
        for (var d = a.length, f = r(a) ? a.split('') : a, e = 0; e < d; e++) {
            e in f && b.call(c, f[e], e, a);
        }
    };
    // Input 8
    // Input 9
    var xa;
    // Input 10
    // Input 11
    z && (E['9'] || (E['9'] = ha(B, '9') >= 0));
    z && (E['8'] || (E['8'] = ha(B, '8') >= 0));
    // Input 12
    // Input 13
    function G() {
        ya && (za[t(this)] = this);
    }
    var ya = !1, za = {};
    G.prototype.F = !1;
    G.prototype.p = function() {
        if (!this.F && (this.F = !0, this.f(), ya)) {
            var a = t(this);
            if (!za.hasOwnProperty(a)) {
                throw Error(this + ' did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call');
            }
            delete za[a];
        }
    };
    G.prototype.f = function() {
    };
    // Input 14
    function H(a, b) {
        G.call(this);
        this.type = a;
        this.currentTarget = this.target = b;
    }
    u(H, G);
    H.prototype.f = function() {
        delete this.type;
        delete this.target;
        delete this.currentTarget;
    };
    H.prototype.k = !1;
    H.prototype.s = !0;
    // Input 15
    var Aa = new Function('a', 'return a');
    // Input 16
    function I(a, b) {
        a && this.q(a, b);
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
    n.U = !1;
    n.H = m;
    n.q = function(a, b) {
        var c = this.type = a.type;
        H.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (na) {
                try {
                    Aa(d.nodeName);
                }catch (f) {
                    d = m;
                }
            }
        }else {
            if (c == 'mouseover') {
                d = a.fromElement;
            }else {
                if (c == 'mouseout') {
                    d = a.toElement;
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
        this.charCode = a.charCode || (c == 'keypress' ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.U = qa ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.H = a;
        delete this.s;
        delete this.k;
    };
    n.f = function() {
        I.A.f.call(this);
        this.relatedTarget = this.currentTarget = this.target = this.H = m;
    };
    // Input 17
    function Ba() {
    }
    var Ca = 0;
    n = Ba.prototype;
    n.key = 0;
    n.l = !1;
    n.B = !1;
    n.q = function(a, b, c, d, f, e) {
        if (q(a) == 'function') {
            this.K = !0;
        }else {
            if (a && a.handleEvent && q(a.handleEvent) == 'function') {
                this.K = !1;
            }else {
                throw Error('Invalid listener argument');
            }
        }
        this.o = a;
        this.proxy = b;
        this.src = c;
        this.type = d;
        this.capture = !!f;
        this.w = e;
        this.B = !1;
        this.key = ++Ca;
        this.l = !1;
    };
    n.handleEvent = function(a) {
        if (this.K) {
            return this.o.call(this.w || this.src, a);
        }
        return this.o.handleEvent.call(this.o, a);
    };
    // Input 18
    var Da, Ea = (Da = 'ScriptEngine' in o && o.ScriptEngine() == 'JScript') ? o.ScriptEngineMajorVersion() + '.' + o.ScriptEngineMinorVersion() + '.' + o.ScriptEngineBuildVersion() : '0';
    // Input 19
    function J(a, b) {
        G.call(this);
        this.L = b;
        this.i = [];
        if (a > this.L) {
            throw Error('[goog.structs.SimplePool] Initial cannot be greater than max');
        }
        for (var c = 0; c < a; c++) {
            this.i.push(this.n());
        }
    }
    u(J, G);
    n = J.prototype;
    n.h = m;
    n.D = m;
    n.getObject = function() {
        if (this.i.length) {
            return this.i.pop();
        }
        return this.n();
    };
    function K(a, b) {
        a.i.length < a.L ? a.i.push(b) : a.u(b);
    }
    n.n = function() {
        return this.h ? this.h() : {};
    };
    n.u = function(a) {
        if (this.D) {
            this.D(a);
        }else {
            var b = q(a);
            if (b == 'object' || b == 'array' || b == 'function') {
                if (q(a.p) == 'function') {
                    a.p();
                }else {
                    for (var c in a) {
                        delete a[c];
                    }
                }
            }
        }
    };
    n.f = function() {
        J.A.f.call(this);
        for (var a = this.i; a.length;) {
            this.u(a.pop());
        }
        delete this.i;
    };
    // Input 20
    var L, M, N, O, Fa, Ga, Ha, Ia, Ja, Ka, La;
    (function() {
        function a() {
            return{b: 0, d: 0};
        }
        function b() {
            return [];
        }
        function c() {
            function a(b) {
                return g.call(a.src, a.key, b);
            }
            return a;
        }
        function d() {
            return new Ba;
        }
        function f() {
            return new I;
        }
        var e = Da && !(ha(Ea, '5.7') >= 0), g;
        Ga = function(a) {
            g = a;
        };
        if (e) {
            L = function() {
                return i.getObject();
            };
            M = function(a) {
                K(i, a);
            };
            N = function() {
                return j.getObject();
            };
            O = function(a) {
                K(j, a);
            };
            Fa = function() {
                return k.getObject();
            };
            Ha = function() {
                K(k, c());
            };
            Ia = function() {
                return A.getObject();
            };
            Ja = function(a) {
                K(A, a);
            };
            Ka = function() {
                return l.getObject();
            };
            La = function(a) {
                K(l, a);
            };
            var i = new J(0, 600);
            i.h = a;
            var j = new J(0, 600);
            j.h = b;
            var k = new J(0, 600);
            k.h = c;
            var A = new J(0, 600);
            A.h = d;
            var l = new J(0, 600);
            l.h = f;
        }else {
            L = a, M = p, N = b, O = p, Fa = c, Ha = p, Ia = d, Ja = p, Ka = f, La = p;
        }
    })();
    // Input 21
    var P = {}, Q = {}, R = {}, Ma = {};
    function S(a, b, c, d, f) {
        if (b) {
            if (q(b) == 'array') {
                for (var e = 0; e < b.length; e++) {
                    S(a, b[e], c, d, f);
                }
            }else {
                var d = !!d, g = Q;
                b in g || (g[b] = L());
                g = g[b];
                d in g || (g[d] = L(), g.b++);
                var g = g[d], i = t(a), j;
                g.d++;
                if (g[i]) {
                    j = g[i];
                    for (e = 0; e < j.length; e++) {
                        if (g = j[e], g.o == c && g.w == f) {
                            if (g.l) {
                                break;
                            }
                            return;
                        }
                    }
                }else {
                    j = g[i] = N(), g.b++;
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
                a.addEventListener ? (a == o || !a.C) && a.addEventListener(b, e, d) : a.attachEvent(Na(b), e);
            }
        }else {
            throw Error('Invalid event type');
        }
    }
    function Oa(a, b, c, d, f) {
        if (q(b) == 'array') {
            for (var e = 0; e < b.length; e++) {
                Oa(a, b[e], c, d, f);
            }
        }else {
            d = !!d;
            a: {
                e = Q;
                if (b in e && (e = e[b], d in e && (e = e[d], a = t(a), e[a]))) {
                    a = e[a];
                    break a;
                }
                a = m;
            }
            if (a) {
                for (e = 0; e < a.length; e++) {
                    if (a[e].o == c && a[e].capture == d && a[e].w == f) {
                        T(a[e].key);
                        break;
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
      c.removeEventListener ? (c == o || !c.C) && c.removeEventListener(d, f, e) : c.detachEvent && c.detachEvent(Na(d), f);
      c = t(c);
      f = Q[d][e][c];
      if(R[c]) {
        var g = R[c], i = va(g, b);
        i >= 0 && F.splice.call(g, i, 1);
        g.length == 0 && delete R[c]
      }
      b.l = !0;
      f.M = !0;
      Pa(d, e, c, f);
      delete P[a]
    }
  }
}
function Pa(a, b, c, d) {
  if(!d.r && d.M) {
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
    d.M = !1;
    e == 0 && (O(d), delete Q[a][b][c], Q[a][b].b--, Q[a][b].b == 0 && (M(Q[a][b]), delete Q[a][b], Q[a].b--), Q[a].b == 0 && (M(Q[a]), delete Q[a]))
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
    a.r ? a.r++ : a.r = 1;
    try {
      for(var g = a.length, i = 0;i < g;i++) {
        var j = a[i];
        j && !j.l && (e &= Ra(j, f) !== !1)
      }
    }finally {
      a.r--, Pa(c, d, b, a)
    }
  }
  return Boolean(e)
}
function Ra(a, b) {
  var c = a.handleEvent(b);
  a.B && T(a.key);
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
          }catch(A) {
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
        for(var l = N(), s = k.currentTarget;s;s = s.parentNode) {
          l.push(s)
        }
        g = f[!0];
        g.d = g.b;
        for(var w = l.length - 1;!k.k && w >= 0 && g.d;w--) {
          k.currentTarget = l[w], e &= U(g, l[w], d, !0, k)
        }
        if(j) {
          g = f[!1];
          g.d = g.b;
          for(w = 0;!k.k && w < l.length && g.d;w++) {
            k.currentTarget = l[w], e &= U(g, l[w], d, !1, k)
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
W.prototype.t = function() {
  return this
};
function Sa(a) {
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
      var d;
      if(a instanceof X) {
        c = Ua(a);
        Va(a);
        d = [];
        for(b = 0;b < a.c.length;b++) {
          d.push(a.j[a.c[b]])
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
n.b = 0;
n.version_ = 0;
function Ua(a) {
  Va(a);
  return a.c.concat()
}
function Va(a) {
  if(a.b != a.c.length) {
    for(var b = 0, c = 0;b < a.c.length;) {
      var d = a.c[b];
      Object.prototype.hasOwnProperty.call(a.j, d) && (a.c[c++] = d);
      b++
    }
    a.c.length = c
  }
  if(a.b != a.c.length) {
    for(var f = {}, c = b = 0;b < a.c.length;) {
      d = a.c[b], Object.prototype.hasOwnProperty.call(f, d) || (a.c[c++] = d, f[d] = 1), b++
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
  Va(this);
  var b = 0, c = this.c, d = this.j, f = this.version_, e = this, g = new W;
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
  this.I = [];
  this.N = new X;
  this.$ = this.aa = this.ba = this.V = 0;
  this.O = new X;
  this.R = this.Z = 0;
  this.T = 1;
  this.S = new J(0, 4E3);
  this.S.n = function() {
    return new Xa
  };
  this.W = new J(0, 50);
  this.W.n = function() {
    return new Ya
  };
  var a = this;
  this.J = new J(0, 2E3);
  this.J.n = function() {
    return String(a.T++)
  };
  this.J.u = function() {
  };
  this.ca = 3
}
function Ya() {
  this.P = this.X = this.count = 0
}
Ya.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(this.X * 10) / 10, " ms)");
  this.P && a.push(" [VarAlloc = ", this.P, "]");
  return a.join("")
};
function Xa() {
}
function Za(a, b, c, d) {
  var f = [];
  c == -1 ? f.push("    ") : f.push($a(a.G - c));
  f.push(" ", ab(a.G - b));
  a.v == 0 ? f.push(" Start        ") : a.v == 1 ? (f.push(" Done "), f.push($a(a.da - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(d, a);
  a.Y > 0 && f.push("[VarAlloc ", a.Y, "] ");
  return f.join("")
}
Xa.prototype.toString = function() {
  return this.type == m ? this.Q : "[" + this.type + "] " + this.Q
};
Wa.prototype.toString = function() {
  for(var a = [], b = -1, c = [], d = 0;d < this.I.length;d++) {
    var f = this.I[d];
    f.v == 1 && c.pop();
    a.push(" ", Za(f, this.V, b, c.join("")));
    b = f.G;
    a.push("\n");
    f.v == 0 && c.push("|  ")
  }
  if(this.N.b != 0) {
    var e = da();
    a.push(" Unstopped timers:\n");
    Ta(this.N, function(b) {
      a.push("  ", b, " (", e - b.startTime, " ms, started at ", ab(b.startTime), ")\n")
    })
  }
  b = Ua(this.O);
  for(d = 0;d < b.length;d++) {
    c = this.O.get(b[d]), c.count > 1 && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.Z, "\n", "Total comments created ", this.R, "\n", "Overhead start: ", this.ba, " ms\n", "Overhead end: ", this.aa, " ms\n", "Overhead comment: ", this.$, " ms\n");
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
u(bb, G);
n = bb.prototype;
n.C = !0;
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
    if(r(a)) {
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
      e.d = e.b;
      for(var g = f.length - 1;!a.k && g >= 0 && e.d;g--) {
        a.currentTarget = f[g], d &= U(e, f[g], a.type, !0, a) && a.s != !1
      }
    }
    if(!1 in c) {
      if(e = c[!1], e.d = e.b, b) {
        for(g = 0;!a.k && g < f.length && e.d;g++) {
          a.currentTarget = f[g], d &= U(e, f[g], a.type, !1, a) && a.s != !1
        }
      }else {
        for(f = this;!a.k && f && e.d;f = f.z) {
          a.currentTarget = f, d &= U(e, f, a.type, !1, a) && a.s != !1
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
  bb.A.f.call(this);
  Qa(this);
  this.z = m
};
// Input 34
function cb() {
  G.call(this);
  this.m = this.g = this.a = this.e = 1
}
u(cb, bb);
function db(a, b, c) {
  a.dispatchEvent({type:"pageChanged", oldValue:b, newValue:c})
}
function Y(a, b) {
  a.e = b;
  a.m = b * a.g;
  return a
}
function Z(a, b) {
  var c = a.a, b = b > a.e ? a.e : b, b = b < 1 ? 1 : b;
  a.a = b;
  db(a, c, b)
}
cb.prototype.next = function() {
  var a = this.a + 1 <= this.e ? this.a + 1 : this.a;
  db(this, this.a, a);
  this.a = a
};
cb.prototype.prev = function() {
  var a = this.a - 1 >= 1 ? this.a - 1 : this.a;
  db(this, this.a, a);
  this.a = a
};
// Input 35
describe("Pagination", function() {
  var a;
  beforeEach(function() {
    a = new cb
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
      expect(a.m).toBeGreaterThan(0)
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
      b.m = 2;
      b.e = Math.ceil(2 / b.g);
      expect(a.m).toEqual(2)
    });
    it("should change page count when totalItem count set", function() {
      a.g = 2;
      var b = a;
      b.m = 5;
      b.e = Math.ceil(5 / b.g);
      expect(a.e).toEqual(3)
    });
    it("should change item count when totalPage count set", function() {
      a.g = 2;
      Y(a, 4);
      expect(a.m).toEqual(8)
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
      S(a, "pageChanged", function(a) {
        b = a
      });
      Z(a, 10);
      expect(b.oldValue && b.newValue).toBeTruthy()
    });
    it("should trigger event on next()", function() {
      Y(a, 12);
      Z(a, 10);
      var b = {};
      S(a, "pageChanged", function(a) {
        b = a
      });
      a.next();
      expect(b.oldValue && b.newValue).toBeTruthy()
    });
    it("should trigger event on prev()", function() {
      Y(a, 12);
      Z(a, 10);
      var b = {};
      S(a, "pageChanged", function(a) {
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
