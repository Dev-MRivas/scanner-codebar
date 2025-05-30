!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Quagga = e())
    : (t.Quagga = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/"),
      n((n.s = 73))
    );
  })([
    function (t, e, n) {
      var r = n(61);
      (t.exports = function (t, e, n) {
        return (
          (e = r(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(61);
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, r(o.key), o);
        }
      }
      (t.exports = function (t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return o;
        }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "d", function () {
          return a;
        });
      var r = {};
      n.r(r),
        n.d(r, "EPSILON", function () {
          return u;
        }),
        n.d(r, "ARRAY_TYPE", function () {
          return c;
        }),
        n.d(r, "RANDOM", function () {
          return s;
        }),
        n.d(r, "setMatrixArrayType", function () {
          return f;
        }),
        n.d(r, "toRadian", function () {
          return d;
        }),
        n.d(r, "equals", function () {
          return h;
        });
      var o = {};
      n.r(o),
        n.d(o, "create", function () {
          return v;
        }),
        n.d(o, "clone", function () {
          return p;
        }),
        n.d(o, "copy", function () {
          return y;
        }),
        n.d(o, "identity", function () {
          return g;
        }),
        n.d(o, "fromValues", function () {
          return x;
        }),
        n.d(o, "set", function () {
          return m;
        }),
        n.d(o, "transpose", function () {
          return _;
        }),
        n.d(o, "invert", function () {
          return b;
        }),
        n.d(o, "adjoint", function () {
          return w;
        }),
        n.d(o, "determinant", function () {
          return O;
        }),
        n.d(o, "multiply", function () {
          return R;
        }),
        n.d(o, "rotate", function () {
          return M;
        }),
        n.d(o, "scale", function () {
          return C;
        }),
        n.d(o, "fromRotation", function () {
          return E;
        }),
        n.d(o, "fromScaling", function () {
          return A;
        }),
        n.d(o, "str", function () {
          return S;
        }),
        n.d(o, "frob", function () {
          return k;
        }),
        n.d(o, "LDU", function () {
          return P;
        }),
        n.d(o, "add", function () {
          return T;
        }),
        n.d(o, "subtract", function () {
          return D;
        }),
        n.d(o, "exactEquals", function () {
          return j;
        }),
        n.d(o, "equals", function () {
          return I;
        }),
        n.d(o, "multiplyScalar", function () {
          return z;
        }),
        n.d(o, "multiplyScalarAndAdd", function () {
          return U;
        }),
        n.d(o, "mul", function () {
          return L;
        }),
        n.d(o, "sub", function () {
          return N;
        });
      var i = {};
      n.r(i),
        n.d(i, "create", function () {
          return F;
        }),
        n.d(i, "clone", function () {
          return B;
        }),
        n.d(i, "fromValues", function () {
          return W;
        }),
        n.d(i, "copy", function () {
          return q;
        }),
        n.d(i, "set", function () {
          return V;
        }),
        n.d(i, "add", function () {
          return G;
        }),
        n.d(i, "subtract", function () {
          return H;
        }),
        n.d(i, "multiply", function () {
          return X;
        }),
        n.d(i, "divide", function () {
          return Q;
        }),
        n.d(i, "ceil", function () {
          return Y;
        }),
        n.d(i, "floor", function () {
          return $;
        }),
        n.d(i, "min", function () {
          return Z;
        }),
        n.d(i, "max", function () {
          return K;
        }),
        n.d(i, "round", function () {
          return J;
        }),
        n.d(i, "scale", function () {
          return tt;
        }),
        n.d(i, "scaleAndAdd", function () {
          return et;
        }),
        n.d(i, "distance", function () {
          return nt;
        }),
        n.d(i, "squaredDistance", function () {
          return rt;
        }),
        n.d(i, "length", function () {
          return ot;
        }),
        n.d(i, "squaredLength", function () {
          return it;
        }),
        n.d(i, "negate", function () {
          return at;
        }),
        n.d(i, "inverse", function () {
          return ut;
        }),
        n.d(i, "normalize", function () {
          return ct;
        }),
        n.d(i, "dot", function () {
          return st;
        }),
        n.d(i, "cross", function () {
          return ft;
        }),
        n.d(i, "lerp", function () {
          return lt;
        }),
        n.d(i, "random", function () {
          return dt;
        }),
        n.d(i, "transformMat2", function () {
          return ht;
        }),
        n.d(i, "transformMat2d", function () {
          return vt;
        }),
        n.d(i, "transformMat3", function () {
          return pt;
        }),
        n.d(i, "transformMat4", function () {
          return yt;
        }),
        n.d(i, "rotate", function () {
          return gt;
        }),
        n.d(i, "angle", function () {
          return xt;
        }),
        n.d(i, "zero", function () {
          return mt;
        }),
        n.d(i, "str", function () {
          return _t;
        }),
        n.d(i, "exactEquals", function () {
          return bt;
        }),
        n.d(i, "equals", function () {
          return wt;
        }),
        n.d(i, "len", function () {
          return Rt;
        }),
        n.d(i, "sub", function () {
          return Mt;
        }),
        n.d(i, "mul", function () {
          return Ct;
        }),
        n.d(i, "div", function () {
          return Et;
        }),
        n.d(i, "dist", function () {
          return At;
        }),
        n.d(i, "sqrDist", function () {
          return St;
        }),
        n.d(i, "sqrLen", function () {
          return kt;
        }),
        n.d(i, "forEach", function () {
          return Pt;
        });
      var a = {};
      n.r(a),
        n.d(a, "create", function () {
          return Tt;
        }),
        n.d(a, "clone", function () {
          return Dt;
        }),
        n.d(a, "length", function () {
          return jt;
        }),
        n.d(a, "fromValues", function () {
          return It;
        }),
        n.d(a, "copy", function () {
          return zt;
        }),
        n.d(a, "set", function () {
          return Ut;
        }),
        n.d(a, "add", function () {
          return Lt;
        }),
        n.d(a, "subtract", function () {
          return Nt;
        }),
        n.d(a, "multiply", function () {
          return Ft;
        }),
        n.d(a, "divide", function () {
          return Bt;
        }),
        n.d(a, "ceil", function () {
          return Wt;
        }),
        n.d(a, "floor", function () {
          return qt;
        }),
        n.d(a, "min", function () {
          return Vt;
        }),
        n.d(a, "max", function () {
          return Gt;
        }),
        n.d(a, "round", function () {
          return Ht;
        }),
        n.d(a, "scale", function () {
          return Xt;
        }),
        n.d(a, "scaleAndAdd", function () {
          return Qt;
        }),
        n.d(a, "distance", function () {
          return Yt;
        }),
        n.d(a, "squaredDistance", function () {
          return $t;
        }),
        n.d(a, "squaredLength", function () {
          return Zt;
        }),
        n.d(a, "negate", function () {
          return Kt;
        }),
        n.d(a, "inverse", function () {
          return Jt;
        }),
        n.d(a, "normalize", function () {
          return te;
        }),
        n.d(a, "dot", function () {
          return ee;
        }),
        n.d(a, "cross", function () {
          return ne;
        }),
        n.d(a, "lerp", function () {
          return re;
        }),
        n.d(a, "hermite", function () {
          return oe;
        }),
        n.d(a, "bezier", function () {
          return ie;
        }),
        n.d(a, "random", function () {
          return ae;
        }),
        n.d(a, "transformMat4", function () {
          return ue;
        }),
        n.d(a, "transformMat3", function () {
          return ce;
        }),
        n.d(a, "transformQuat", function () {
          return se;
        }),
        n.d(a, "rotateX", function () {
          return fe;
        }),
        n.d(a, "rotateY", function () {
          return le;
        }),
        n.d(a, "rotateZ", function () {
          return de;
        }),
        n.d(a, "angle", function () {
          return he;
        }),
        n.d(a, "zero", function () {
          return ve;
        }),
        n.d(a, "str", function () {
          return pe;
        }),
        n.d(a, "exactEquals", function () {
          return ye;
        }),
        n.d(a, "equals", function () {
          return ge;
        }),
        n.d(a, "sub", function () {
          return xe;
        }),
        n.d(a, "mul", function () {
          return me;
        }),
        n.d(a, "div", function () {
          return _e;
        }),
        n.d(a, "dist", function () {
          return be;
        }),
        n.d(a, "sqrDist", function () {
          return we;
        }),
        n.d(a, "len", function () {
          return Oe;
        }),
        n.d(a, "sqrLen", function () {
          return Re;
        }),
        n.d(a, "forEach", function () {
          return Me;
        });
      var u = 1e-6,
        c = "undefined" != typeof Float32Array ? Float32Array : Array,
        s = Math.random;
      function f(t) {
        c = t;
      }
      var l = Math.PI / 180;
      function d(t) {
        return t * l;
      }
      function h(t, e) {
        return Math.abs(t - e) <= u * Math.max(1, Math.abs(t), Math.abs(e));
      }
      function v() {
        var t = new c(4);
        return (
          c != Float32Array && ((t[1] = 0), (t[2] = 0)),
          (t[0] = 1),
          (t[3] = 1),
          t
        );
      }
      function p(t) {
        var e = new c(4);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
      }
      function y(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
      }
      function g(t) {
        return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
      }
      function x(t, e, n, r) {
        var o = new c(4);
        return (o[0] = t), (o[1] = e), (o[2] = n), (o[3] = r), o;
      }
      function m(t, e, n, r, o) {
        return (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = o), t;
      }
      function _(t, e) {
        if (t === e) {
          var n = e[1];
          (t[1] = e[2]), (t[2] = n);
        } else (t[0] = e[0]), (t[1] = e[2]), (t[2] = e[1]), (t[3] = e[3]);
        return t;
      }
      function b(t, e) {
        var n = e[0],
          r = e[1],
          o = e[2],
          i = e[3],
          a = n * i - o * r;
        return a
          ? ((a = 1 / a),
            (t[0] = i * a),
            (t[1] = -r * a),
            (t[2] = -o * a),
            (t[3] = n * a),
            t)
          : null;
      }
      function w(t, e) {
        var n = e[0];
        return (t[0] = e[3]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = n), t;
      }
      function O(t) {
        return t[0] * t[3] - t[2] * t[1];
      }
      function R(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2],
          a = e[3],
          u = n[0],
          c = n[1],
          s = n[2],
          f = n[3];
        return (
          (t[0] = r * u + i * c),
          (t[1] = o * u + a * c),
          (t[2] = r * s + i * f),
          (t[3] = o * s + a * f),
          t
        );
      }
      function M(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2],
          a = e[3],
          u = Math.sin(n),
          c = Math.cos(n);
        return (
          (t[0] = r * c + i * u),
          (t[1] = o * c + a * u),
          (t[2] = r * -u + i * c),
          (t[3] = o * -u + a * c),
          t
        );
      }
      function C(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2],
          a = e[3],
          u = n[0],
          c = n[1];
        return (
          (t[0] = r * u), (t[1] = o * u), (t[2] = i * c), (t[3] = a * c), t
        );
      }
      function E(t, e) {
        var n = Math.sin(e),
          r = Math.cos(e);
        return (t[0] = r), (t[1] = n), (t[2] = -n), (t[3] = r), t;
      }
      function A(t, e) {
        return (t[0] = e[0]), (t[1] = 0), (t[2] = 0), (t[3] = e[1]), t;
      }
      function S(t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }
      function k(t) {
        return Math.hypot(t[0], t[1], t[2], t[3]);
      }
      function P(t, e, n, r) {
        return (
          (t[2] = r[2] / r[0]),
          (n[0] = r[0]),
          (n[1] = r[1]),
          (n[3] = r[3] - t[2] * n[1]),
          [t, e, n]
        );
      }
      function T(t, e, n) {
        return (
          (t[0] = e[0] + n[0]),
          (t[1] = e[1] + n[1]),
          (t[2] = e[2] + n[2]),
          (t[3] = e[3] + n[3]),
          t
        );
      }
      function D(t, e, n) {
        return (
          (t[0] = e[0] - n[0]),
          (t[1] = e[1] - n[1]),
          (t[2] = e[2] - n[2]),
          (t[3] = e[3] - n[3]),
          t
        );
      }
      function j(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }
      function I(t, e) {
        var n = t[0],
          r = t[1],
          o = t[2],
          i = t[3],
          a = e[0],
          c = e[1],
          s = e[2],
          f = e[3];
        return (
          Math.abs(n - a) <= u * Math.max(1, Math.abs(n), Math.abs(a)) &&
          Math.abs(r - c) <= u * Math.max(1, Math.abs(r), Math.abs(c)) &&
          Math.abs(o - s) <= u * Math.max(1, Math.abs(o), Math.abs(s)) &&
          Math.abs(i - f) <= u * Math.max(1, Math.abs(i), Math.abs(f))
        );
      }
      function z(t, e, n) {
        return (
          (t[0] = e[0] * n),
          (t[1] = e[1] * n),
          (t[2] = e[2] * n),
          (t[3] = e[3] * n),
          t
        );
      }
      function U(t, e, n, r) {
        return (
          (t[0] = e[0] + n[0] * r),
          (t[1] = e[1] + n[1] * r),
          (t[2] = e[2] + n[2] * r),
          (t[3] = e[3] + n[3] * r),
          t
        );
      }
      Math.hypot ||
        (Math.hypot = function () {
          for (var t = 0, e = arguments.length; e--; )
            t += arguments[e] * arguments[e];
          return Math.sqrt(t);
        });
      var L = R,
        N = D;
      function F() {
        var t = new c(2);
        return c != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
      }
      function B(t) {
        var e = new c(2);
        return (e[0] = t[0]), (e[1] = t[1]), e;
      }
      function W(t, e) {
        var n = new c(2);
        return (n[0] = t), (n[1] = e), n;
      }
      function q(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function V(t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      }
      function G(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
      }
      function H(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
      }
      function X(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      }
      function Q(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      }
      function Y(t, e) {
        return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
      }
      function $(t, e) {
        return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
      }
      function Z(t, e, n) {
        return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
      }
      function K(t, e, n) {
        return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
      }
      function J(t, e) {
        return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
      }
      function tt(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
      }
      function et(t, e, n, r) {
        return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
      }
      function nt(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1];
        return Math.hypot(n, r);
      }
      function rt(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1];
        return n * n + r * r;
      }
      function ot(t) {
        var e = t[0],
          n = t[1];
        return Math.hypot(e, n);
      }
      function it(t) {
        var e = t[0],
          n = t[1];
        return e * e + n * n;
      }
      function at(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      }
      function ut(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
      }
      function ct(t, e) {
        var n = e[0],
          r = e[1],
          o = n * n + r * r;
        return (
          o > 0 && (o = 1 / Math.sqrt(o)),
          (t[0] = e[0] * o),
          (t[1] = e[1] * o),
          t
        );
      }
      function st(t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }
      function ft(t, e, n) {
        var r = e[0] * n[1] - e[1] * n[0];
        return (t[0] = t[1] = 0), (t[2] = r), t;
      }
      function lt(t, e, n, r) {
        var o = e[0],
          i = e[1];
        return (t[0] = o + r * (n[0] - o)), (t[1] = i + r * (n[1] - i)), t;
      }
      function dt(t, e) {
        e = e || 1;
        var n = 2 * s() * Math.PI;
        return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
      }
      function ht(t, e, n) {
        var r = e[0],
          o = e[1];
        return (t[0] = n[0] * r + n[2] * o), (t[1] = n[1] * r + n[3] * o), t;
      }
      function vt(t, e, n) {
        var r = e[0],
          o = e[1];
        return (
          (t[0] = n[0] * r + n[2] * o + n[4]),
          (t[1] = n[1] * r + n[3] * o + n[5]),
          t
        );
      }
      function pt(t, e, n) {
        var r = e[0],
          o = e[1];
        return (
          (t[0] = n[0] * r + n[3] * o + n[6]),
          (t[1] = n[1] * r + n[4] * o + n[7]),
          t
        );
      }
      function yt(t, e, n) {
        var r = e[0],
          o = e[1];
        return (
          (t[0] = n[0] * r + n[4] * o + n[12]),
          (t[1] = n[1] * r + n[5] * o + n[13]),
          t
        );
      }
      function gt(t, e, n, r) {
        var o = e[0] - n[0],
          i = e[1] - n[1],
          a = Math.sin(r),
          u = Math.cos(r);
        return (t[0] = o * u - i * a + n[0]), (t[1] = o * a + i * u + n[1]), t;
      }
      function xt(t, e) {
        var n = t[0],
          r = t[1],
          o = e[0],
          i = e[1],
          a = Math.sqrt(n * n + r * r) * Math.sqrt(o * o + i * i),
          u = a && (n * o + r * i) / a;
        return Math.acos(Math.min(Math.max(u, -1), 1));
      }
      function mt(t) {
        return (t[0] = 0), (t[1] = 0), t;
      }
      function _t(t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      }
      function bt(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function wt(t, e) {
        var n = t[0],
          r = t[1],
          o = e[0],
          i = e[1];
        return (
          Math.abs(n - o) <= u * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(r - i) <= u * Math.max(1, Math.abs(r), Math.abs(i))
        );
      }
      var Ot,
        Rt = ot,
        Mt = H,
        Ct = X,
        Et = Q,
        At = nt,
        St = rt,
        kt = it,
        Pt =
          ((Ot = F()),
          function (t, e, n, r, o, i) {
            var a, u;
            for (
              e || (e = 2),
                n || (n = 0),
                u = r ? Math.min(r * e + n, t.length) : t.length,
                a = n;
              a < u;
              a += e
            )
              (Ot[0] = t[a]),
                (Ot[1] = t[a + 1]),
                o(Ot, Ot, i),
                (t[a] = Ot[0]),
                (t[a + 1] = Ot[1]);
            return t;
          });
      function Tt() {
        var t = new c(3);
        return c != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
      }
      function Dt(t) {
        var e = new c(3);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function jt(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return Math.hypot(e, n, r);
      }
      function It(t, e, n) {
        var r = new c(3);
        return (r[0] = t), (r[1] = e), (r[2] = n), r;
      }
      function zt(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function Ut(t, e, n, r) {
        return (t[0] = e), (t[1] = n), (t[2] = r), t;
      }
      function Lt(t, e, n) {
        return (
          (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t
        );
      }
      function Nt(t, e, n) {
        return (
          (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t
        );
      }
      function Ft(t, e, n) {
        return (
          (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t
        );
      }
      function Bt(t, e, n) {
        return (
          (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t
        );
      }
      function Wt(t, e) {
        return (
          (t[0] = Math.ceil(e[0])),
          (t[1] = Math.ceil(e[1])),
          (t[2] = Math.ceil(e[2])),
          t
        );
      }
      function qt(t, e) {
        return (
          (t[0] = Math.floor(e[0])),
          (t[1] = Math.floor(e[1])),
          (t[2] = Math.floor(e[2])),
          t
        );
      }
      function Vt(t, e, n) {
        return (
          (t[0] = Math.min(e[0], n[0])),
          (t[1] = Math.min(e[1], n[1])),
          (t[2] = Math.min(e[2], n[2])),
          t
        );
      }
      function Gt(t, e, n) {
        return (
          (t[0] = Math.max(e[0], n[0])),
          (t[1] = Math.max(e[1], n[1])),
          (t[2] = Math.max(e[2], n[2])),
          t
        );
      }
      function Ht(t, e) {
        return (
          (t[0] = Math.round(e[0])),
          (t[1] = Math.round(e[1])),
          (t[2] = Math.round(e[2])),
          t
        );
      }
      function Xt(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
      }
      function Qt(t, e, n, r) {
        return (
          (t[0] = e[0] + n[0] * r),
          (t[1] = e[1] + n[1] * r),
          (t[2] = e[2] + n[2] * r),
          t
        );
      }
      function Yt(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1],
          o = e[2] - t[2];
        return Math.hypot(n, r, o);
      }
      function $t(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1],
          o = e[2] - t[2];
        return n * n + r * r + o * o;
      }
      function Zt(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return e * e + n * n + r * r;
      }
      function Kt(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
      }
      function Jt(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
      }
      function te(t, e) {
        var n = e[0],
          r = e[1],
          o = e[2],
          i = n * n + r * r + o * o;
        return (
          i > 0 && (i = 1 / Math.sqrt(i)),
          (t[0] = e[0] * i),
          (t[1] = e[1] * i),
          (t[2] = e[2] * i),
          t
        );
      }
      function ee(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function ne(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2],
          a = n[0],
          u = n[1],
          c = n[2];
        return (
          (t[0] = o * c - i * u),
          (t[1] = i * a - r * c),
          (t[2] = r * u - o * a),
          t
        );
      }
      function re(t, e, n, r) {
        var o = e[0],
          i = e[1],
          a = e[2];
        return (
          (t[0] = o + r * (n[0] - o)),
          (t[1] = i + r * (n[1] - i)),
          (t[2] = a + r * (n[2] - a)),
          t
        );
      }
      function oe(t, e, n, r, o, i) {
        var a = i * i,
          u = a * (2 * i - 3) + 1,
          c = a * (i - 2) + i,
          s = a * (i - 1),
          f = a * (3 - 2 * i);
        return (
          (t[0] = e[0] * u + n[0] * c + r[0] * s + o[0] * f),
          (t[1] = e[1] * u + n[1] * c + r[1] * s + o[1] * f),
          (t[2] = e[2] * u + n[2] * c + r[2] * s + o[2] * f),
          t
        );
      }
      function ie(t, e, n, r, o, i) {
        var a = 1 - i,
          u = a * a,
          c = i * i,
          s = u * a,
          f = 3 * i * u,
          l = 3 * c * a,
          d = c * i;
        return (
          (t[0] = e[0] * s + n[0] * f + r[0] * l + o[0] * d),
          (t[1] = e[1] * s + n[1] * f + r[1] * l + o[1] * d),
          (t[2] = e[2] * s + n[2] * f + r[2] * l + o[2] * d),
          t
        );
      }
      function ae(t, e) {
        e = e || 1;
        var n = 2 * s() * Math.PI,
          r = 2 * s() - 1,
          o = Math.sqrt(1 - r * r) * e;
        return (
          (t[0] = Math.cos(n) * o), (t[1] = Math.sin(n) * o), (t[2] = r * e), t
        );
      }
      function ue(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2],
          a = n[3] * r + n[7] * o + n[11] * i + n[15];
        return (
          (a = a || 1),
          (t[0] = (n[0] * r + n[4] * o + n[8] * i + n[12]) / a),
          (t[1] = (n[1] * r + n[5] * o + n[9] * i + n[13]) / a),
          (t[2] = (n[2] * r + n[6] * o + n[10] * i + n[14]) / a),
          t
        );
      }
      function ce(t, e, n) {
        var r = e[0],
          o = e[1],
          i = e[2];
        return (
          (t[0] = r * n[0] + o * n[3] + i * n[6]),
          (t[1] = r * n[1] + o * n[4] + i * n[7]),
          (t[2] = r * n[2] + o * n[5] + i * n[8]),
          t
        );
      }
      function se(t, e, n) {
        var r = n[0],
          o = n[1],
          i = n[2],
          a = n[3],
          u = e[0],
          c = e[1],
          s = e[2],
          f = o * s - i * c,
          l = i * u - r * s,
          d = r * c - o * u,
          h = o * d - i * l,
          v = i * f - r * d,
          p = r * l - o * f,
          y = 2 * a;
        return (
          (f *= y),
          (l *= y),
          (d *= y),
          (h *= 2),
          (v *= 2),
          (p *= 2),
          (t[0] = u + f + h),
          (t[1] = c + l + v),
          (t[2] = s + d + p),
          t
        );
      }
      function fe(t, e, n, r) {
        var o = [],
          i = [];
        return (
          (o[0] = e[0] - n[0]),
          (o[1] = e[1] - n[1]),
          (o[2] = e[2] - n[2]),
          (i[0] = o[0]),
          (i[1] = o[1] * Math.cos(r) - o[2] * Math.sin(r)),
          (i[2] = o[1] * Math.sin(r) + o[2] * Math.cos(r)),
          (t[0] = i[0] + n[0]),
          (t[1] = i[1] + n[1]),
          (t[2] = i[2] + n[2]),
          t
        );
      }
      function le(t, e, n, r) {
        var o = [],
          i = [];
        return (
          (o[0] = e[0] - n[0]),
          (o[1] = e[1] - n[1]),
          (o[2] = e[2] - n[2]),
          (i[0] = o[2] * Math.sin(r) + o[0] * Math.cos(r)),
          (i[1] = o[1]),
          (i[2] = o[2] * Math.cos(r) - o[0] * Math.sin(r)),
          (t[0] = i[0] + n[0]),
          (t[1] = i[1] + n[1]),
          (t[2] = i[2] + n[2]),
          t
        );
      }
      function de(t, e, n, r) {
        var o = [],
          i = [];
        return (
          (o[0] = e[0] - n[0]),
          (o[1] = e[1] - n[1]),
          (o[2] = e[2] - n[2]),
          (i[0] = o[0] * Math.cos(r) - o[1] * Math.sin(r)),
          (i[1] = o[0] * Math.sin(r) + o[1] * Math.cos(r)),
          (i[2] = o[2]),
          (t[0] = i[0] + n[0]),
          (t[1] = i[1] + n[1]),
          (t[2] = i[2] + n[2]),
          t
        );
      }
      function he(t, e) {
        var n = t[0],
          r = t[1],
          o = t[2],
          i = e[0],
          a = e[1],
          u = e[2],
          c =
            Math.sqrt(n * n + r * r + o * o) * Math.sqrt(i * i + a * a + u * u),
          s = c && ee(t, e) / c;
        return Math.acos(Math.min(Math.max(s, -1), 1));
      }
      function ve(t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
      }
      function pe(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }
      function ye(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }
      function ge(t, e) {
        var n = t[0],
          r = t[1],
          o = t[2],
          i = e[0],
          a = e[1],
          c = e[2];
        return (
          Math.abs(n - i) <= u * Math.max(1, Math.abs(n), Math.abs(i)) &&
          Math.abs(r - a) <= u * Math.max(1, Math.abs(r), Math.abs(a)) &&
          Math.abs(o - c) <= u * Math.max(1, Math.abs(o), Math.abs(c))
        );
      }
      var xe = Nt,
        me = Ft,
        _e = Bt,
        be = Yt,
        we = $t,
        Oe = jt,
        Re = Zt,
        Me = (function () {
          var t = Tt();
          return function (e, n, r, o, i, a) {
            var u, c;
            for (
              n || (n = 3),
                r || (r = 0),
                c = o ? Math.min(o * n + r, e.length) : e.length,
                u = r;
              u < c;
              u += n
            )
              (t[0] = e[u]),
                (t[1] = e[u + 1]),
                (t[2] = e[u + 2]),
                i(t, t, a),
                (e[u] = t[0]),
                (e[u + 1] = t[1]),
                (e[u + 2] = t[2]);
            return e;
          };
        })();
    },
    function (t, e, n) {
      var r = n(13).default,
        o = n(1);
      (t.exports = function (t, e) {
        if (e && ("object" === r(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return o(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(40);
      (t.exports = function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e && r(t, e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(141)();
      t.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (t) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
    function (t, e, n) {
      "use strict";
      e.a = {
        init: function (t, e) {
          t.fill(e);
        },
        shuffle: function (t) {
          for (var e = t.length - 1; e > 0; e--) {
            var n = Math.floor(Math.random() * (e + 1)),
              r = [t[n], t[e]];
            (t[e] = r[0]), (t[n] = r[1]);
          }
          return t;
        },
        toPointList: function (t) {
          var e = t.reduce(function (t, e) {
            var n = "[".concat(e.join(","), "]");
            return t.push(n), t;
          }, []);
          return "[".concat(e.join(",\r\n"), "]");
        },
        threshold: function (t, e, n) {
          return t.reduce(function (r, o) {
            return n.apply(t, [o]) >= e && r.push(o), r;
          }, []);
        },
        maxIndex: function (t) {
          for (var e = 0, n = 0; n < t.length; n++) t[n] > t[e] && (e = n);
          return e;
        },
        max: function (t) {
          for (var e = 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
          return e;
        },
        sum: function (t) {
          for (var e = t.length, n = 0; e--; ) n += t[e];
          return n;
        },
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "h", function () {
        return u;
      }),
        n.d(e, "i", function () {
          return s;
        }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "j", function () {
          return l;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "c", function () {
          return h;
        }),
        n.d(e, "f", function () {
          return v;
        }),
        n.d(e, "g", function () {
          return p;
        }),
        n.d(e, "a", function () {
          return g;
        }),
        n.d(e, "d", function () {
          return m;
        });
      var r = n(5),
        o = n(9);
      r.a.setMatrixArrayType(Array);
      var i = function (t, e) {
          var n = [],
            o = { rad: 0, vec: r.c.clone([0, 0]) },
            i = {};
          function a(t) {
            (i[t.id] = t), n.push(t);
          }
          function u() {
            var t,
              e = 0;
            for (t = 0; t < n.length; t++) e += n[t].rad;
            (o.rad = e / n.length),
              (o.vec = r.c.clone([Math.cos(o.rad), Math.sin(o.rad)]));
          }
          return (
            a(t),
            u(),
            {
              add: function (t) {
                i[t.id] || (a(t), u());
              },
              fits: function (t) {
                return Math.abs(r.c.dot(t.point.vec, o.vec)) > e;
              },
              getPoints: function () {
                return n;
              },
              getCenter: function () {
                return o;
              },
            }
          );
        },
        a = function (t, e, n) {
          return { rad: t[n], point: t, id: e };
        };
      function u(t, e) {
        return {
          x: t,
          y: e,
          toVec2: function () {
            return r.c.clone([this.x, this.y]);
          },
          toVec3: function () {
            return r.d.clone([this.x, this.y, 1]);
          },
          round: function () {
            return (
              (this.x =
                this.x > 0
                  ? Math.floor(this.x + 0.5)
                  : Math.floor(this.x - 0.5)),
              (this.y =
                this.y > 0
                  ? Math.floor(this.y + 0.5)
                  : Math.floor(this.y - 0.5)),
              this
            );
          },
        };
      }
      function c(t, e) {
        e || (e = 8);
        for (
          var n = t.data, r = n.length, o = 8 - e, i = new Int32Array(1 << e);
          r--;

        )
          i[n[r] >> o]++;
        return i;
      }
      function s(t, e) {
        var n = (function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            r = 8 - n;
          function i(t, n) {
            for (var r = 0, o = t; o <= n; o++) r += e[o];
            return r;
          }
          function a(t, n) {
            for (var r = 0, o = t; o <= n; o++) r += o * e[o];
            return r;
          }
          function u() {
            var r,
              u,
              s,
              f,
              l = [0],
              d = (1 << n) - 1;
            e = c(t, n);
            for (var h = 1; h < d; h++)
              0 === (s = (r = i(0, h)) * (u = i(h + 1, d))) && (s = 1),
                (f = a(0, h) * u - a(h + 1, d) * r),
                (l[h] = (f * f) / s);
            return o.a.maxIndex(l);
          }
          var s = u();
          return s << r;
        })(t);
        return (
          (function (t, e, n) {
            n || (n = t);
            for (var r = t.data, o = r.length, i = n.data; o--; )
              i[o] = r[o] < e ? 1 : 0;
          })(t, n, e),
          n
        );
      }
      function f(t, e, n) {
        var r,
          o,
          u,
          c,
          s = [];
        function f(t) {
          var e = !1;
          for (o = 0; o < s.length; o++)
            (u = s[o]).fits(t) && (u.add(t), (e = !0));
          return e;
        }
        for (n || (n = "rad"), r = 0; r < t.length; r++)
          f((c = a(t[r], r, n))) || s.push(i(c, e));
        return s;
      }
      r.a.setMatrixArrayType(Array);
      function l(t, e, n) {
        var r,
          o,
          i,
          a,
          u = 0,
          c = 0,
          s = [];
        for (r = 0; r < e; r++) s[r] = { score: 0, item: null };
        for (r = 0; r < t.length; r++)
          if ((o = n.apply(this, [t[r]])) > c)
            for (
              (i = s[u]).score = o, i.item = t[r], c = Number.MAX_VALUE, a = 0;
              a < e;
              a++
            )
              s[a].score < c && ((c = s[a].score), (u = a));
        return s;
      }
      function d(t, e, n) {
        for (
          var r,
            o = 0,
            i = e.x,
            a = Math.floor(t.length / 4),
            u = e.x / 2,
            c = 0,
            s = e.x;
          i < a;

        ) {
          for (r = 0; r < u; r++)
            (n[c] =
              (0.299 * t[4 * o + 0] +
                0.587 * t[4 * o + 1] +
                0.114 * t[4 * o + 2] +
                (0.299 * t[4 * (o + 1) + 0] +
                  0.587 * t[4 * (o + 1) + 1] +
                  0.114 * t[4 * (o + 1) + 2]) +
                (0.299 * t[4 * i + 0] +
                  0.587 * t[4 * i + 1] +
                  0.114 * t[4 * i + 2]) +
                (0.299 * t[4 * (i + 1) + 0] +
                  0.587 * t[4 * (i + 1) + 1] +
                  0.114 * t[4 * (i + 1) + 2])) /
              4),
              c++,
              (o += 2),
              (i += 2);
          (o += s), (i += s);
        }
      }
      function h(t, e, n) {
        var r = (t.length / 4) | 0;
        if (n && !0 === n.singleChannel)
          for (var o = 0; o < r; o++) e[o] = t[4 * o + 0];
        else
          for (var i = 0; i < r; i++)
            e[i] =
              0.299 * t[4 * i + 0] +
              0.587 * t[4 * i + 1] +
              0.114 * t[4 * i + 2];
      }
      function v(t, e) {
        for (
          var n = t.data,
            r = t.size.x,
            o = e.data,
            i = 0,
            a = r,
            u = n.length,
            c = r / 2,
            s = 0;
          a < u;

        ) {
          for (var f = 0; f < c; f++)
            (o[s] = Math.floor((n[i] + n[i + 1] + n[a] + n[a + 1]) / 4)),
              s++,
              (i += 2),
              (a += 2);
          (i += r), (a += r);
        }
      }
      function p(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [0, 0, 0],
          n = t[0],
          r = t[1],
          o = t[2],
          i = o * r,
          a = i * (1 - Math.abs(((n / 60) % 2) - 1)),
          u = o - i,
          c = 0,
          s = 0,
          f = 0;
        return (
          n < 60
            ? ((c = i), (s = a))
            : n < 120
            ? ((c = a), (s = i))
            : n < 180
            ? ((s = i), (f = a))
            : n < 240
            ? ((s = a), (f = i))
            : n < 300
            ? ((c = a), (f = i))
            : n < 360 && ((c = i), (f = a)),
          (e[0] = (255 * (c + u)) | 0),
          (e[1] = (255 * (s + u)) | 0),
          (e[2] = (255 * (f + u)) | 0),
          e
        );
      }
      function y(t) {
        for (var e = [], n = [], r = 1; r < Math.sqrt(t) + 1; r++)
          t % r == 0 &&
            (n.push(r), r !== t / r && e.unshift(Math.floor(t / r)));
        return n.concat(e);
      }
      function g(t, e) {
        var n,
          r = y(e.x),
          o = y(e.y),
          i = Math.max(e.x, e.y),
          a = (function (t, e) {
            for (var n = 0, r = 0, o = []; n < t.length && r < e.length; )
              t[n] === e[r]
                ? (o.push(t[n]), n++, r++)
                : t[n] > e[r]
                ? r++
                : n++;
            return o;
          })(r, o),
          u = [8, 10, 15, 20, 32, 60, 80],
          c = { "x-small": 5, small: 4, medium: 3, large: 2, "x-large": 1 },
          s = c[t] || c.medium,
          f = u[s],
          l = Math.floor(i / f);
        function d(t) {
          for (
            var e = 0, n = t[Math.floor(t.length / 2)];
            e < t.length - 1 && t[e] < l;

          )
            e++;
          return (
            e > 0 &&
              (n =
                Math.abs(t[e] - l) > Math.abs(t[e - 1] - l) ? t[e - 1] : t[e]),
            l / n < u[s + 1] / u[s] && l / n > u[s - 1] / u[s]
              ? { x: n, y: n }
              : null
          );
        }
        return (n = d(a)) || (n = d(y(i))) || (n = d(y(l * f))), n;
      }
      var x = {
        top: function (t, e) {
          return "%" === t.unit ? Math.floor(e.height * (t.value / 100)) : null;
        },
        right: function (t, e) {
          return "%" === t.unit
            ? Math.floor(e.width - e.width * (t.value / 100))
            : null;
        },
        bottom: function (t, e) {
          return "%" === t.unit
            ? Math.floor(e.height - e.height * (t.value / 100))
            : null;
        },
        left: function (t, e) {
          return "%" === t.unit ? Math.floor(e.width * (t.value / 100)) : null;
        },
      };
      function m(t, e, n) {
        var r = { width: t, height: e },
          o = Object.keys(n).reduce(function (t, e) {
            var o = (function (t) {
                return {
                  value: parseFloat(t),
                  unit: (t.indexOf("%"), t.length, "%"),
                };
              })(n[e]),
              i = x[e](o, r);
            return (t[e] = i), t;
          }, {});
        return {
          sx: o.left,
          sy: o.top,
          sw: o.right - o.left,
          sh: o.bottom - o.top,
        };
      }
    },
    function (t, e, n) {
      "use strict";
      var r = n(62),
        o = n.n(r),
        i = n(3),
        a = n.n(i),
        u = n(4),
        c = n.n(u),
        s = n(0),
        f = n.n(s),
        l = n(5),
        d = n(9),
        h = n(10);
      function v(t) {
        if (t < 0)
          throw new Error("expected positive number, received ".concat(t));
      }
      l.a.setMatrixArrayType(Array);
      var p = (function () {
        function t(e, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : Uint8Array,
            o = arguments.length > 3 ? arguments[3] : void 0;
          a()(this, t),
            f()(this, "data", void 0),
            f()(this, "size", void 0),
            f()(this, "indexMapping", void 0),
            n
              ? (this.data = n)
              : ((this.data = new r(e.x * e.y)), o && d.a.init(this.data, 0)),
            (this.size = e);
        }
        return (
          c()(t, [
            {
              key: "inImageWithBorder",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return (
                  v(e),
                  t.x >= 0 &&
                    t.y >= 0 &&
                    t.x < this.size.x + 2 * e &&
                    t.y < this.size.y + 2 * e
                );
              },
            },
            {
              key: "subImageAsCopy",
              value: function (t, e) {
                v(e.x), v(e.y);
                for (var n = t.size, r = n.x, o = n.y, i = 0; i < r; i++)
                  for (var a = 0; a < o; a++)
                    t.data[a * r + i] =
                      this.data[(e.y + a) * this.size.x + e.x + i];
                return t;
              },
            },
            {
              key: "get",
              value: function (t, e) {
                return this.data[e * this.size.x + t];
              },
            },
            {
              key: "getSafe",
              value: function (t, e) {
                if (!this.indexMapping) {
                  this.indexMapping = { x: [], y: [] };
                  for (var n = 0; n < this.size.x; n++)
                    (this.indexMapping.x[n] = n),
                      (this.indexMapping.x[n + this.size.x] = n);
                  for (var r = 0; r < this.size.y; r++)
                    (this.indexMapping.y[r] = r),
                      (this.indexMapping.y[r + this.size.y] = r);
                }
                return this.data[
                  this.indexMapping.y[e + this.size.y] * this.size.x +
                    this.indexMapping.x[t + this.size.x]
                ];
              },
            },
            {
              key: "set",
              value: function (t, e, n) {
                return (
                  (this.data[e * this.size.x + t] = n),
                  delete this.indexMapping,
                  this
                );
              },
            },
            {
              key: "zeroBorder",
              value: function () {
                for (var t = this.size, e = t.x, n = t.y, r = 0; r < e; r++)
                  this.data[r] = this.data[(n - 1) * e + r] = 0;
                for (var o = 1; o < n - 1; o++)
                  this.data[o * e] = this.data[o * e + (e - 1)] = 0;
                return delete this.indexMapping, this;
              },
            },
            {
              key: "moments",
              value: function (t) {
                var e,
                  n,
                  r,
                  o,
                  i,
                  a,
                  u,
                  c,
                  s,
                  f,
                  d = this.data,
                  h = this.size.y,
                  v = this.size.x,
                  p = [],
                  y = [],
                  g = Math.PI,
                  x = g / 4;
                if (t <= 0) return y;
                for (i = 0; i < t; i++)
                  p[i] = {
                    m00: 0,
                    m01: 0,
                    m10: 0,
                    m11: 0,
                    m02: 0,
                    m20: 0,
                    theta: 0,
                    rad: 0,
                  };
                for (n = 0; n < h; n++)
                  for (o = n * n, e = 0; e < v; e++)
                    (r = d[n * v + e]) > 0 &&
                      (((a = p[r - 1]).m00 += 1),
                      (a.m01 += n),
                      (a.m10 += e),
                      (a.m11 += e * n),
                      (a.m02 += o),
                      (a.m20 += e * e));
                for (i = 0; i < t; i++)
                  (a = p[i]),
                    isNaN(a.m00) ||
                      0 === a.m00 ||
                      ((c = a.m10 / a.m00),
                      (s = a.m01 / a.m00),
                      (u = a.m11 / a.m00 - c * s),
                      (f =
                        (a.m02 / a.m00 - s * s - (a.m20 / a.m00 - c * c)) /
                        (2 * u)),
                      (f = 0.5 * Math.atan(f) + (u >= 0 ? x : -x) + g),
                      (a.theta = (((180 * f) / g + 90) % 180) - 90),
                      a.theta < 0 && (a.theta += 180),
                      (a.rad = f > g ? f - g : f),
                      (a.vec = l.c.clone([Math.cos(f), Math.sin(f)])),
                      y.push(a));
                return y;
              },
            },
            {
              key: "getAsRGBA",
              value: function () {
                for (
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    e = new Uint8ClampedArray(4 * this.size.x * this.size.y),
                    n = 0;
                  n < this.size.y;
                  n++
                )
                  for (var r = 0; r < this.size.x; r++) {
                    var o = n * this.size.x + r,
                      i = this.get(r, n) * t;
                    (e[4 * o + 0] = i),
                      (e[4 * o + 1] = i),
                      (e[4 * o + 2] = i),
                      (e[4 * o + 3] = 255);
                  }
                return e;
              },
            },
            {
              key: "show",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
                console.warn("* imagewrapper show getcontext 2d");
                var n = t.getContext("2d");
                if (!n) throw new Error("Unable to get canvas context");
                var r = n.getImageData(0, 0, t.width, t.height),
                  o = this.getAsRGBA(e);
                (t.width = this.size.x), (t.height = this.size.y);
                var i = new ImageData(o, r.width, r.height);
                n.putImageData(i, 0, 0);
              },
            },
            {
              key: "overlay",
              value: function (t, e, n) {
                var r = e < 0 || e > 360 ? 360 : e,
                  i = [0, 1, 1],
                  a = [0, 0, 0],
                  u = [255, 255, 255],
                  c = [0, 0, 0];
                console.warn("* imagewrapper overlay getcontext 2d");
                var s = t.getContext("2d");
                if (!s) throw new Error("Unable to get canvas context");
                for (
                  var f = s.getImageData(n.x, n.y, this.size.x, this.size.y),
                    l = f.data,
                    d = this.data.length;
                  d--;

                ) {
                  i[0] = this.data[d] * r;
                  var v = 4 * d,
                    p = i[0] <= 0 ? u : i[0] >= 360 ? c : Object(h.g)(i, a),
                    y = o()(p, 3);
                  (l[v] = y[0]),
                    (l[v + 1] = y[1]),
                    (l[v + 2] = y[2]),
                    (l[v + 3] = 255);
                }
                s.putImageData(f, n.x, n.y);
              },
            },
          ]),
          t
        );
      })();
      e.a = p;
    },
    function (t, e) {
      function n(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (t) {
          return void n(t);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      (t.exports = function (t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, r);
            function u(t) {
              n(a, o, i, u, c, "next", t);
            }
            function c(t) {
              n(a, o, i, u, c, "throw", t);
            }
            u(void 0);
          });
        };
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(142);
      function o() {
        return (
          "undefined" != typeof Reflect && Reflect.get
            ? ((t.exports = o = Reflect.get.bind()),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))
            : ((t.exports = o =
                function (t, e, n) {
                  var o = r(t, e);
                  if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, e);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? t : n)
                      : i.value;
                  }
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports)),
          o.apply(this, arguments)
        );
      }
      (t.exports = o),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      e.a = {
        drawRect: function (t, e, n, r) {
          (n.strokeStyle = r.color),
            (n.fillStyle = r.color),
            (n.lineWidth = r.lineWidth || 1),
            n.beginPath(),
            n.strokeRect(t.x, t.y, e.x, e.y);
        },
        drawPath: function (t, e, n, r) {
          (n.strokeStyle = r.color),
            (n.fillStyle = r.color),
            (n.lineWidth = r.lineWidth),
            n.beginPath(),
            n.moveTo(t[0][e.x], t[0][e.y]);
          for (var o = 1; o < t.length; o++) n.lineTo(t[o][e.x], t[o][e.y]);
          n.closePath(), n.stroke();
        },
        drawImage: function (t, e, n) {
          var r = n.getImageData(0, 0, e.x, e.y),
            o = r.data,
            i = o.length,
            a = t.length;
          if (i / a != 4) return !1;
          for (; a--; ) {
            var u = t[a];
            (o[--i] = 255), (o[--i] = u), (o[--i] = u), (o[--i] = u);
          }
          return n.putImageData(r, 0, 0), !0;
        },
      };
    },
    function (t, e, n) {
      var r = n(74),
        o = n(129)(function (t, e, n) {
          r(t, e, n);
        });
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(44),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    function (t, e, n) {
      "use strict";
      e.a = {
        searchDirections: [
          [0, 1],
          [1, 1],
          [1, 0],
          [1, -1],
          [0, -1],
          [-1, -1],
          [-1, 0],
          [-1, 1],
        ],
        create: function (t, e) {
          var n,
            r = t.data,
            o = e.data,
            i = this.searchDirections,
            a = t.size.x;
          function u(t, e, u, c) {
            var s, f, l;
            for (s = 0; s < i.length; s++) {
              if (
                ((f = t.cy + i[t.dir][0]),
                (l = t.cx + i[t.dir][1]),
                r[(n = f * a + l)] === e && (0 === o[n] || o[n] === u))
              )
                return (o[n] = u), (t.cy = f), (t.cx = l), !0;
              0 === o[n] && (o[n] = c), (t.dir = (t.dir + 1) % 8);
            }
            return !1;
          }
          function c(t, e, n) {
            return { dir: n, x: t, y: e, next: null, prev: null };
          }
          return {
            trace: function (t, e, n, r) {
              return u(t, e, n, r);
            },
            contourTracing: function (e, n, r, o, i) {
              return (function (e, n, r, o, i) {
                var a,
                  s,
                  f,
                  l = null,
                  d = { cx: n, cy: e, dir: 0 };
                if (u(d, o, r, i)) {
                  (a = l = c(n, e, d.dir)),
                    (f = d.dir),
                    ((s = c(d.cx, d.cy, 0)).prev = a),
                    (a.next = s),
                    (s.next = null),
                    (a = s);
                  var h = t.size.x * t.size.y,
                    v = 0;
                  do {
                    (d.dir = (d.dir + 6) % 8),
                      u(d, o, r, i),
                      f !== d.dir
                        ? ((a.dir = d.dir),
                          ((s = c(d.cx, d.cy, 0)).prev = a),
                          (a.next = s),
                          (s.next = null),
                          (a = s))
                        : ((a.dir = f), (a.x = d.cx), (a.y = d.cy)),
                      (f = d.dir);
                  } while ((d.cx !== n || d.cy !== e) && ++v < h);
                  (l.prev = a.prev), (a.prev.next = l);
                }
                return l;
              })(e, n, r, o, i);
            },
          };
        },
      };
    },
    function (t, e, n) {
      var r = n(27),
        o = n(87),
        i = n(88),
        a = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(t)
          ? o(t)
          : i(t);
      };
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var r,
          o,
          i,
          a,
          u,
          c,
          s,
          f,
          l,
          d,
          h = n(5),
          v = n(11),
          p = n(10),
          y = n(9),
          g = (n(17), n(65)),
          x = n(21),
          m = n(66);
        h.a.setMatrixArrayType(Array);
        var _,
          b,
          w = { ctx: { binary: null }, dom: { binary: null } },
          O = { x: 0, y: 0 };
        function R(t) {
          var e,
            n,
            o,
            i,
            a,
            u,
            c,
            s = l.size.x,
            f = l.size.y,
            d = -l.size.x,
            v = -l.size.y;
          for (e = 0, n = 0; n < t.length; n++) e += (i = t[n]).rad;
          for (
            (e = (((180 * (e /= t.length)) / Math.PI + 90) % 180) - 90) < 0 &&
              (e += 180),
              e = ((180 - e) * Math.PI) / 180,
              a = h.b.copy(h.b.create(), [
                Math.cos(e),
                Math.sin(e),
                -Math.sin(e),
                Math.cos(e),
              ]),
              n = 0;
            n < t.length;
            n++
          ) {
            for (i = t[n], o = 0; o < 4; o++)
              h.c.transformMat2(i.box[o], i.box[o], a);
            0;
          }
          for (n = 0; n < t.length; n++)
            for (i = t[n], o = 0; o < 4; o++)
              i.box[o][0] < s && (s = i.box[o][0]),
                i.box[o][0] > d && (d = i.box[o][0]),
                i.box[o][1] < f && (f = i.box[o][1]),
                i.box[o][1] > v && (v = i.box[o][1]);
          for (
            u = [
              [s, f],
              [d, f],
              [d, v],
              [s, v],
            ],
              c = r.halfSample ? 2 : 1,
              a = h.b.invert(a, a),
              o = 0;
            o < 4;
            o++
          )
            h.c.transformMat2(u[o], u[o], a);
          for (o = 0; o < 4; o++) h.c.scale(u[o], u[o], c);
          return u;
        }
        function M(t, e) {
          l.subImageAsCopy(a, Object(p.h)(t, e)), b.skeletonize();
        }
        function C(t, e, n, r) {
          var o,
            i,
            u,
            c,
            s = [],
            f = [],
            l = Math.ceil(d.x / 3);
          if (t.length >= 2) {
            for (o = 0; o < t.length; o++) t[o].m00 > l && s.push(t[o]);
            if (s.length >= 2) {
              for (
                u = (function (t) {
                  var e = Object(p.b)(t, 0.9),
                    n = Object(p.j)(e, 1, function (t) {
                      return t.getPoints().length;
                    }),
                    r = [],
                    o = [];
                  if (1 === n.length) {
                    r = n[0].item.getPoints();
                    for (var i = 0; i < r.length; i++) o.push(r[i].point);
                  }
                  return o;
                })(s),
                  i = 0,
                  o = 0;
                o < u.length;
                o++
              ) {
                var v, y;
                i +=
                  null !==
                    (v =
                      null === (y = u[o]) || void 0 === y ? void 0 : y.rad) &&
                  void 0 !== v
                    ? v
                    : 0;
              }
              u.length > 1 &&
                u.length >= (s.length / 4) * 3 &&
                u.length > t.length / 4 &&
                ((i /= u.length),
                (c = {
                  index: e[1] * O.x + e[0],
                  pos: { x: n, y: r },
                  box: [
                    h.c.clone([n, r]),
                    h.c.clone([n + a.size.x, r]),
                    h.c.clone([n + a.size.x, r + a.size.y]),
                    h.c.clone([n, r + a.size.y]),
                  ],
                  moments: u,
                  rad: i,
                  vec: h.c.clone([Math.cos(i), Math.sin(i)]),
                }),
                f.push(c));
            }
          }
          return f;
        }
        e.a = {
          init: function (e, n) {
            (r = n),
              (_ = e),
              (function () {
                (o = r.halfSample
                  ? new v.a({ x: (_.size.x / 2) | 0, y: (_.size.y / 2) | 0 })
                  : _),
                  (d = Object(p.a)(r.patchSize, o.size)),
                  (O.x = (o.size.x / d.x) | 0),
                  (O.y = (o.size.y / d.y) | 0),
                  (l = new v.a(o.size, void 0, Uint8Array, !1)),
                  (u = new v.a(d, void 0, Array, !0));
                var e = new ArrayBuffer(65536);
                (a = new v.a(d, new Uint8Array(e, 0, d.x * d.y))),
                  (i = new v.a(
                    d,
                    new Uint8Array(e, d.x * d.y * 3, d.x * d.y),
                    void 0,
                    !0
                  )),
                  (b = Object(m.a)(
                    "undefined" != typeof window
                      ? window
                      : "undefined" != typeof self
                      ? self
                      : t,
                    { size: d.x },
                    e
                  )),
                  (f = new v.a(
                    {
                      x: (o.size.x / a.size.x) | 0,
                      y: (o.size.y / a.size.y) | 0,
                    },
                    void 0,
                    Array,
                    !0
                  )),
                  (c = new v.a(f.size, void 0, void 0, !0)),
                  (s = new v.a(f.size, void 0, Int32Array, !0));
              })(),
              (function () {
                if (!r.useWorker && "undefined" != typeof document) {
                  (w.dom.binary = document.createElement("canvas")),
                    (w.dom.binary.className = "binaryBuffer");
                  var t = !!r.willReadFrequently;
                  console.warn("* initCanvas willReadFrequently", t, r),
                    (w.ctx.binary = w.dom.binary.getContext("2d", {
                      willReadFrequently: t,
                    })),
                    (w.dom.binary.width = l.size.x),
                    (w.dom.binary.height = l.size.y);
                }
              })();
          },
          locate: function () {
            r.halfSample && Object(p.f)(_, o),
              Object(p.i)(o, l),
              l.zeroBorder();
            var t = (function () {
              var t,
                e,
                n,
                r,
                o,
                c,
                s = [];
              for (t = 0; t < O.x; t++)
                for (e = 0; e < O.y; e++)
                  M((n = a.size.x * t), (r = a.size.y * e)),
                    i.zeroBorder(),
                    y.a.init(u.data, 0),
                    (c = g.a.create(i, u).rasterize(0)),
                    (o = u.moments(c.count)),
                    (s = s.concat(C(o, [t, e], n, r)));
              return s;
            })();
            if (t.length < O.x * O.y * 0.05) return null;
            var e = (function (t) {
              var e,
                n,
                r = 0,
                o = 0;
              function i() {
                var t;
                for (t = 0; t < s.data.length; t++)
                  if (0 === s.data[t] && 1 === c.data[t]) return t;
                return s.data.length;
              }
              function a(t) {
                var e,
                  n,
                  o,
                  i,
                  u,
                  l = t % s.size.x,
                  d = (t / s.size.x) | 0;
                if (t < s.data.length)
                  for (
                    o = f.data[t], s.data[t] = r, u = 0;
                    u < x.a.searchDirections.length;
                    u++
                  )
                    (n = d + x.a.searchDirections[u][0]),
                      (e = l + x.a.searchDirections[u][1]),
                      (i = n * s.size.x + e),
                      0 !== c.data[i]
                        ? 0 === s.data[i] &&
                          Math.abs(h.c.dot(f.data[i].vec, o.vec)) > 0.95 &&
                          a(i)
                        : (s.data[i] = Number.MAX_VALUE);
              }
              for (
                y.a.init(c.data, 0),
                  y.a.init(s.data, 0),
                  y.a.init(f.data, null),
                  e = 0;
                e < t.length;
                e++
              )
                (n = t[e]), (f.data[n.index] = n), (c.data[n.index] = 1);
              for (c.zeroBorder(); (o = i()) < s.data.length; ) r++, a(o);
              return r;
            })(t);
            if (e < 1) return null;
            var n = (function (t) {
              var e,
                n,
                r = [];
              for (e = 0; e < t; e++) r.push(0);
              for (n = s.data.length; n--; )
                s.data[n] > 0 && r[s.data[n] - 1]++;
              return (
                (r = r.map(function (t, e) {
                  return { val: t, label: e + 1 };
                })).sort(function (t, e) {
                  return e.val - t.val;
                }),
                r.filter(function (t) {
                  return t.val >= 5;
                })
              );
            })(e);
            return 0 === n.length
              ? null
              : (function (t, e) {
                  var n,
                    r,
                    o,
                    i,
                    a = [],
                    u = [];
                  for (n = 0; n < t.length; n++) {
                    for (r = s.data.length, a.length = 0; r--; )
                      s.data[r] === t[n].label && ((o = f.data[r]), a.push(o));
                    (i = R(a)) && u.push(i);
                  }
                  return u;
                })(n);
          },
          checkImageConstraints: function (t, e) {
            var n,
              r,
              o = t.getWidth(),
              i = t.getHeight(),
              a = e.halfSample ? 0.5 : 1;
            t.getConfig().area &&
              ((r = Object(p.d)(o, i, t.getConfig().area)),
              t.setTopRight({ x: r.sx, y: r.sy }),
              t.setCanvasSize({ x: o, y: i }),
              (o = r.sw),
              (i = r.sh));
            var u = { x: Math.floor(o * a), y: Math.floor(i * a) };
            if (
              ((n = Object(p.a)(e.patchSize, u)),
              t.setWidth(
                Math.max(Math.floor(Math.floor(u.x / n.x) * (1 / a) * n.x), n.x)
              ),
              t.setHeight(
                Math.max(Math.floor(Math.floor(u.y / n.y) * (1 / a) * n.y), n.y)
              ),
              t.getWidth() % n.x == 0 && t.getHeight() % n.y == 0)
            )
              return !0;
            throw new Error(
              "Image dimensions do not comply with the current settings: Width ("
                .concat(o, " )and height (")
                .concat(i, ") must a multiple of ")
                .concat(n.x)
            );
          },
        };
      }).call(this, n(45));
    },
    function (t, e, n) {
      var r = n(76),
        o = n(77),
        i = n(78),
        a = n(79),
        u = n(80);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    function (t, e, n) {
      var r = n(26);
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    function (t, e, n) {
      var r = n(19).Symbol;
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(34)(Object, "create");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(101);
      t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    function (t, e, n) {
      var r = n(116),
        o = n(20),
        i = Object.prototype,
        a = i.hasOwnProperty,
        u = i.propertyIsEnumerable,
        c = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (t) {
              return o(t) && a.call(t, "callee") && !u.call(t, "callee");
            };
      t.exports = c;
    },
    function (t, e) {
      var n = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == r || ("symbol" != r && n.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function (t, e, n) {
      var r = n(16),
        o = n(149),
        i = n(150),
        a = n(153);
      t.exports = function (t, e) {
        return r(t) ? t : o(t, e) ? [t] : i(a(t));
      };
    },
    function (t, e, n) {
      var r = n(143),
        o = n(144),
        i = n(59),
        a = n(145);
      (t.exports = function (t) {
        return r(t) || o(t) || i(t) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(86),
        o = n(92);
      t.exports = function (t, e) {
        var n = o(t, e);
        return r(n) ? n : void 0;
      };
    },
    function (t, e, n) {
      var r = n(22),
        o = n(15);
      t.exports = function (t) {
        if (!o(t)) return !1;
        var e = r(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    function (t, e, n) {
      var r = n(48);
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      var r = n(35),
        o = n(39);
      t.exports = function (t) {
        return null != t && o(t.length) && !r(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    function (t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e, r)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(22),
        o = n(20);
      t.exports = function (t) {
        return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
      };
    },
    function (t, e, n) {
      var r = n(41);
      t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
      };
    },
    function (t, e, n) {
      var r = n(34)(n(19), "Map");
      t.exports = r;
    },
    function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }).call(this, n(45));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      var r = n(93),
        o = n(100),
        i = n(102),
        a = n(103),
        u = n(104);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    function (t, e, n) {
      var r = n(36),
        o = n(26);
      t.exports = function (t, e, n) {
        ((void 0 !== n && !o(t[e], n)) || (void 0 === n && !(e in t))) &&
          r(t, e, n);
      };
    },
    function (t, e, n) {
      var r = n(34),
        o = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })();
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(115)(Object.getPrototypeOf, Object);
      t.exports = r;
    },
    function (t, e) {
      var n = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || n);
      };
    },
    function (t, e, n) {
      (function (t) {
        var r = n(19),
          o = n(118),
          i = e && !e.nodeType && e,
          a = i && "object" == typeof t && t && !t.nodeType && t,
          u = a && a.exports === i ? r.Buffer : void 0,
          c = (u ? u.isBuffer : void 0) || o;
        t.exports = c;
      }).call(this, n(37)(t));
    },
    function (t, e, n) {
      var r = n(120),
        o = n(121),
        i = n(122),
        a = i && i.isTypedArray,
        u = a ? o(a) : r;
      t.exports = u;
    },
    function (t, e) {
      t.exports = function (t, e) {
        if (
          ("constructor" !== e || "function" != typeof t[e]) &&
          "__proto__" != e
        )
          return t[e];
      };
    },
    function (t, e, n) {
      var r = n(36),
        o = n(26),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n) {
        var a = t[e];
        (i.call(t, e) && o(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
      };
    },
    function (t, e, n) {
      var r = n(125),
        o = n(127),
        i = n(38);
      t.exports = function (t) {
        return i(t) ? r(t, !0) : o(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return t;
      };
    },
    function (t, e, n) {
      var r = n(131),
        o = Math.max;
      t.exports = function (t, e, n) {
        return (
          (e = o(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            for (
              var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u);
              ++a < u;

            )
              c[a] = i[e + a];
            a = -1;
            for (var s = Array(e + 1); ++a < e; ) s[a] = i[a];
            return (s[e] = n(c)), r(t, this, s);
          }
        );
      };
    },
    function (t, e, n) {
      var r = n(132),
        o = n(134)(r);
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(60);
      (t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(13).default,
        o = n(140);
      (t.exports = function (t) {
        var e = o(t, "string");
        return "symbol" === r(e) ? e : String(e);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(137),
        o = n(138),
        i = n(59),
        a = n(139);
      (t.exports = function (t, e) {
        return r(t) || o(t, e) || i(t, e) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(146),
        o = n(160)(function (t, e) {
          return null == t ? {} : r(t, e);
        });
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(2),
        o = n(40),
        i = n(165),
        a = n(166);
      function u(e) {
        var n = "function" == typeof Map ? new Map() : void 0;
        return (
          (t.exports = u =
            function (t) {
              if (null === t || !i(t)) return t;
              if ("function" != typeof t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== n) {
                if (n.has(t)) return n.get(t);
                n.set(t, e);
              }
              function e() {
                return a(t, arguments, r(this).constructor);
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(e, t)
              );
            }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          u(e)
        );
      }
      (t.exports = u),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      "use strict";
      var r = n(21),
        o = {
          createContour2D: function () {
            return {
              dir: null,
              index: null,
              firstVertex: null,
              insideContours: null,
              nextpeer: null,
              prevpeer: null,
            };
          },
          CONTOUR_DIR: { CW_DIR: 0, CCW_DIR: 1, UNKNOWN_DIR: 2 },
          DIR: { OUTSIDE_EDGE: -32767, INSIDE_EDGE: -32766 },
          create: function (t, e) {
            var n = t.data,
              i = e.data,
              a = t.size.x,
              u = t.size.y,
              c = r.a.create(t, e);
            return {
              rasterize: function (t) {
                var e,
                  r,
                  s,
                  f,
                  l,
                  d,
                  h,
                  v,
                  p,
                  y,
                  g,
                  x,
                  m = [],
                  _ = 0;
                for (x = 0; x < 400; x++) m[x] = 0;
                for (m[0] = n[0], p = null, d = 1; d < u - 1; d++)
                  for (f = 0, r = m[0], l = 1; l < a - 1; l++)
                    if (0 === i[(g = d * a + l)])
                      if ((e = n[g]) !== r) {
                        if (0 === f)
                          (m[(s = _ + 1)] = e),
                            (r = e),
                            null !==
                              (h = c.contourTracing(
                                d,
                                l,
                                s,
                                e,
                                o.DIR.OUTSIDE_EDGE
                              )) &&
                              (_++,
                              (f = s),
                              ((v = o.createContour2D()).dir =
                                o.CONTOUR_DIR.CW_DIR),
                              (v.index = f),
                              (v.firstVertex = h),
                              (v.nextpeer = p),
                              (v.insideContours = null),
                              null !== p && (p.prevpeer = v),
                              (p = v));
                        else if (
                          null !==
                          (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e, f))
                        ) {
                          for (
                            (v = o.createContour2D()).firstVertex = h,
                              v.insideContours = null,
                              v.dir =
                                0 === t
                                  ? o.CONTOUR_DIR.CCW_DIR
                                  : o.CONTOUR_DIR.CW_DIR,
                              v.index = t,
                              y = p;
                            null !== y && y.index !== f;

                          )
                            y = y.nextpeer;
                          null !== y &&
                            ((v.nextpeer = y.insideContours),
                            null !== y.insideContours &&
                              (y.insideContours.prevpeer = v),
                            (y.insideContours = v));
                        }
                      } else i[g] = f;
                    else
                      i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE
                        ? ((f = 0),
                          (r = i[g] === o.DIR.INSIDE_EDGE ? n[g] : m[0]))
                        : (r = m[(f = i[g])]);
                for (y = p; null !== y; ) (y.index = t), (y = y.nextpeer);
                return { cc: p, count: _ };
              },
              debug: {
                drawContour: function (t, e) {
                  var n,
                    r,
                    i,
                    a = t.getContext("2d"),
                    u = e;
                  for (
                    a.strokeStyle = "red",
                      a.fillStyle = "red",
                      a.lineWidth = 1,
                      n = null !== u ? u.insideContours : null;
                    null !== u;

                  ) {
                    switch (
                      (null !== n
                        ? ((r = n), (n = n.nextpeer))
                        : ((r = u),
                          (n =
                            null !== (u = u.nextpeer)
                              ? u.insideContours
                              : null)),
                      r.dir)
                    ) {
                      case o.CONTOUR_DIR.CW_DIR:
                        a.strokeStyle = "red";
                        break;
                      case o.CONTOUR_DIR.CCW_DIR:
                        a.strokeStyle = "blue";
                        break;
                      case o.CONTOUR_DIR.UNKNOWN_DIR:
                        a.strokeStyle = "green";
                    }
                    (i = r.firstVertex), a.beginPath(), a.moveTo(i.x, i.y);
                    do {
                      (i = i.next), a.lineTo(i.x, i.y);
                    } while (i !== r.firstVertex);
                    a.stroke();
                  }
                },
              },
            };
          },
        };
      e.a = o;
    },
    function (t, e, n) {
      "use strict";
      /* @preserve ASM BEGIN */
      /* @preserve ASM END */ e.a = function (t, e, n) {
        "use asm";
        var r = new t.Uint8Array(n),
          o = e.size | 0,
          i = t.Math.imul;
        function a(t, e) {
          t |= 0;
          e |= 0;
          var n = 0;
          var i = 0;
          var a = 0;
          var u = 0;
          var c = 0;
          var s = 0;
          var f = 0;
          var l = 0;
          for (n = 1; (n | 0) < ((o - 1) | 0); n = (n + 1) | 0) {
            l = (l + o) | 0;
            for (i = 1; (i | 0) < ((o - 1) | 0); i = (i + 1) | 0) {
              u = (l - o) | 0;
              c = (l + o) | 0;
              s = (i - 1) | 0;
              f = (i + 1) | 0;
              a =
                ((r[(t + u + s) | 0] | 0) +
                  (r[(t + u + f) | 0] | 0) +
                  (r[(t + l + i) | 0] | 0) +
                  (r[(t + c + s) | 0] | 0) +
                  (r[(t + c + f) | 0] | 0)) |
                0;
              if ((a | 0) == (5 | 0)) {
                r[(e + l + i) | 0] = 1;
              } else {
                r[(e + l + i) | 0] = 0;
              }
            }
          }
        }
        function u(t, e, n) {
          t |= 0;
          e |= 0;
          n |= 0;
          var a = 0;
          a = i(o, o) | 0;
          while ((a | 0) > 0) {
            a = (a - 1) | 0;
            r[(n + a) | 0] = ((r[(t + a) | 0] | 0) - (r[(e + a) | 0] | 0)) | 0;
          }
        }
        function c(t, e, n) {
          t |= 0;
          e |= 0;
          n |= 0;
          var a = 0;
          a = i(o, o) | 0;
          while ((a | 0) > 0) {
            a = (a - 1) | 0;
            r[(n + a) | 0] = r[(t + a) | 0] | 0 | (r[(e + a) | 0] | 0) | 0;
          }
        }
        function s(t) {
          t |= 0;
          var e = 0;
          var n = 0;
          n = i(o, o) | 0;
          while ((n | 0) > 0) {
            n = (n - 1) | 0;
            e = ((e | 0) + (r[(t + n) | 0] | 0)) | 0;
          }
          return e | 0;
        }
        function f(t, e) {
          t |= 0;
          e |= 0;
          var n = 0;
          n = i(o, o) | 0;
          while ((n | 0) > 0) {
            n = (n - 1) | 0;
            r[(t + n) | 0] = e;
          }
        }
        function l(t, e) {
          t |= 0;
          e |= 0;
          var n = 0;
          var i = 0;
          var a = 0;
          var u = 0;
          var c = 0;
          var s = 0;
          var f = 0;
          var l = 0;
          for (n = 1; (n | 0) < ((o - 1) | 0); n = (n + 1) | 0) {
            l = (l + o) | 0;
            for (i = 1; (i | 0) < ((o - 1) | 0); i = (i + 1) | 0) {
              u = (l - o) | 0;
              c = (l + o) | 0;
              s = (i - 1) | 0;
              f = (i + 1) | 0;
              a =
                ((r[(t + u + s) | 0] | 0) +
                  (r[(t + u + f) | 0] | 0) +
                  (r[(t + l + i) | 0] | 0) +
                  (r[(t + c + s) | 0] | 0) +
                  (r[(t + c + f) | 0] | 0)) |
                0;
              if ((a | 0) > (0 | 0)) {
                r[(e + l + i) | 0] = 1;
              } else {
                r[(e + l + i) | 0] = 0;
              }
            }
          }
        }
        function d(t, e) {
          t |= 0;
          e |= 0;
          var n = 0;
          n = i(o, o) | 0;
          while ((n | 0) > 0) {
            n = (n - 1) | 0;
            r[(e + n) | 0] = r[(t + n) | 0] | 0;
          }
        }
        function h(t) {
          t |= 0;
          var e = 0;
          var n = 0;
          for (e = 0; (e | 0) < ((o - 1) | 0); e = (e + 1) | 0) {
            r[(t + e) | 0] = 0;
            r[(t + n) | 0] = 0;
            n = (n + o - 1) | 0;
            r[(t + n) | 0] = 0;
            n = (n + 1) | 0;
          }
          for (e = 0; (e | 0) < (o | 0); e = (e + 1) | 0) {
            r[(t + n) | 0] = 0;
            n = (n + 1) | 0;
          }
        }
        function v() {
          var t = 0;
          var e = 0;
          var n = 0;
          var r = 0;
          var v = 0;
          var p = 0;
          e = i(o, o) | 0;
          n = (e + e) | 0;
          r = (n + e) | 0;
          f(r, 0);
          h(t);
          do {
            a(t, e);
            l(e, n);
            u(t, n, n);
            c(r, n, r);
            d(e, t);
            v = s(t) | 0;
            p = ((v | 0) == 0) | 0;
          } while (!p);
        }
        return { skeletonize: v };
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      t.exports = n(168);
    },
    function (t, e, n) {
      var r = n(75),
        o = n(47),
        i = n(105),
        a = n(107),
        u = n(15),
        c = n(55),
        s = n(53);
      t.exports = function t(e, n, f, l, d) {
        e !== n &&
          i(
            n,
            function (i, c) {
              if ((d || (d = new r()), u(i))) a(e, n, c, f, t, l, d);
              else {
                var h = l ? l(s(e, c), i, c + "", e, n, d) : void 0;
                void 0 === h && (h = i), o(e, c, h);
              }
            },
            c
          );
      };
    },
    function (t, e, n) {
      var r = n(24),
        o = n(81),
        i = n(82),
        a = n(83),
        u = n(84),
        c = n(85);
      function s(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (s.prototype.clear = o),
        (s.prototype.delete = i),
        (s.prototype.get = a),
        (s.prototype.has = u),
        (s.prototype.set = c),
        (t.exports = s);
    },
    function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (t, e, n) {
      var r = n(25),
        o = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, !0)
        );
      };
    },
    function (t, e, n) {
      var r = n(25);
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    function (t, e, n) {
      var r = n(25);
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    function (t, e, n) {
      var r = n(25);
      t.exports = function (t, e) {
        var n = this.__data__,
          o = r(n, t);
        return o < 0 ? (++this.size, n.push([t, e])) : (n[o][1] = e), this;
      };
    },
    function (t, e, n) {
      var r = n(24);
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e, n) {
      var r = n(24),
        o = n(43),
        i = n(46);
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var a = n.__data__;
          if (!o || a.length < 199)
            return a.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new i(a);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    function (t, e, n) {
      var r = n(35),
        o = n(89),
        i = n(15),
        a = n(91),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp(
          "^" +
            f
              .call(l)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      t.exports = function (t) {
        return !(!i(t) || o(t)) && (r(t) ? d : u).test(a(t));
      };
    },
    function (t, e, n) {
      var r = n(27),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        u = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = i.call(t, u),
          n = t[u];
        try {
          t[u] = void 0;
          var r = !0;
        } catch (t) {}
        var o = a.call(t);
        return r && (e ? (t[u] = n) : delete t[u]), o;
      };
    },
    function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    function (t, e, n) {
      var r,
        o = n(90),
        i = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + r
          : "";
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    function (t, e, n) {
      var r = n(19)["__core-js_shared__"];
      t.exports = r;
    },
    function (t, e) {
      var n = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (t) {}
          try {
            return t + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function (t, e, n) {
      var r = n(94),
        o = n(24),
        i = n(43);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (i || o)(),
            string: new r(),
          });
      };
    },
    function (t, e, n) {
      var r = n(95),
        o = n(96),
        i = n(97),
        a = n(98),
        u = n(99);
      function c(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = o),
        (c.prototype.get = i),
        (c.prototype.has = a),
        (c.prototype.set = u),
        (t.exports = c);
    },
    function (t, e, n) {
      var r = n(28);
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e, n) {
      var r = n(28),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return o.call(e, t) ? e[t] : void 0;
      };
    },
    function (t, e, n) {
      var r = n(28),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : o.call(e, t);
      };
    },
    function (t, e, n) {
      var r = n(28);
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    function (t, e, n) {
      var r = n(29);
      t.exports = function (t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    function (t, e, n) {
      var r = n(29);
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    function (t, e, n) {
      var r = n(29);
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    function (t, e, n) {
      var r = n(29);
      t.exports = function (t, e) {
        var n = r(this, t),
          o = n.size;
        return n.set(t, e), (this.size += n.size == o ? 0 : 1), this;
      };
    },
    function (t, e, n) {
      var r = n(106)();
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var o = -1, i = Object(e), a = r(e), u = a.length; u--; ) {
            var c = a[t ? u : ++o];
            if (!1 === n(i[c], c, i)) break;
          }
          return e;
        };
      };
    },
    function (t, e, n) {
      var r = n(47),
        o = n(108),
        i = n(109),
        a = n(112),
        u = n(113),
        c = n(30),
        s = n(16),
        f = n(117),
        l = n(51),
        d = n(35),
        h = n(15),
        v = n(119),
        p = n(52),
        y = n(53),
        g = n(123);
      t.exports = function (t, e, n, x, m, _, b) {
        var w = y(t, n),
          O = y(e, n),
          R = b.get(O);
        if (R) r(t, n, R);
        else {
          var M = _ ? _(w, O, n + "", t, e, b) : void 0,
            C = void 0 === M;
          if (C) {
            var E = s(O),
              A = !E && l(O),
              S = !E && !A && p(O);
            (M = O),
              E || A || S
                ? s(w)
                  ? (M = w)
                  : f(w)
                  ? (M = a(w))
                  : A
                  ? ((C = !1), (M = o(O, !0)))
                  : S
                  ? ((C = !1), (M = i(O, !0)))
                  : (M = [])
                : v(O) || c(O)
                ? ((M = w), c(w) ? (M = g(w)) : (h(w) && !d(w)) || (M = u(O)))
                : (C = !1);
          }
          C && (b.set(O, M), m(M, O, x, _, b), b.delete(O)), r(t, n, M);
        }
      };
    },
    function (t, e, n) {
      (function (t) {
        var r = n(19),
          o = e && !e.nodeType && e,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          a = i && i.exports === o ? r.Buffer : void 0,
          u = a ? a.allocUnsafe : void 0;
        t.exports = function (t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = u ? u(n) : new t.constructor(n);
          return t.copy(r), r;
        };
      }).call(this, n(37)(t));
    },
    function (t, e, n) {
      var r = n(110);
      t.exports = function (t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length);
      };
    },
    function (t, e, n) {
      var r = n(111);
      t.exports = function (t) {
        var e = new t.constructor(t.byteLength);
        return new r(e).set(new r(t)), e;
      };
    },
    function (t, e, n) {
      var r = n(19).Uint8Array;
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t, e) {
        var n = -1,
          r = t.length;
        for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
        return e;
      };
    },
    function (t, e, n) {
      var r = n(114),
        o = n(49),
        i = n(50);
      t.exports = function (t) {
        return "function" != typeof t.constructor || i(t) ? {} : r(o(t));
      };
    },
    function (t, e, n) {
      var r = n(15),
        o = Object.create,
        i = (function () {
          function t() {}
          return function (e) {
            if (!r(e)) return {};
            if (o) return o(e);
            t.prototype = e;
            var n = new t();
            return (t.prototype = void 0), n;
          };
        })();
      t.exports = i;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    function (t, e, n) {
      var r = n(22),
        o = n(20);
      t.exports = function (t) {
        return o(t) && "[object Arguments]" == r(t);
      };
    },
    function (t, e, n) {
      var r = n(38),
        o = n(20);
      t.exports = function (t) {
        return o(t) && r(t);
      };
    },
    function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    function (t, e, n) {
      var r = n(22),
        o = n(49),
        i = n(20),
        a = Function.prototype,
        u = Object.prototype,
        c = a.toString,
        s = u.hasOwnProperty,
        f = c.call(Object);
      t.exports = function (t) {
        if (!i(t) || "[object Object]" != r(t)) return !1;
        var e = o(t);
        if (null === e) return !0;
        var n = s.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && c.call(n) == f;
      };
    },
    function (t, e, n) {
      var r = n(22),
        o = n(39),
        i = n(20),
        a = {};
      (a["[object Float32Array]"] =
        a["[object Float64Array]"] =
        a["[object Int8Array]"] =
        a["[object Int16Array]"] =
        a["[object Int32Array]"] =
        a["[object Uint8Array]"] =
        a["[object Uint8ClampedArray]"] =
        a["[object Uint16Array]"] =
        a["[object Uint32Array]"] =
          !0),
        (a["[object Arguments]"] =
          a["[object Array]"] =
          a["[object ArrayBuffer]"] =
          a["[object Boolean]"] =
          a["[object DataView]"] =
          a["[object Date]"] =
          a["[object Error]"] =
          a["[object Function]"] =
          a["[object Map]"] =
          a["[object Number]"] =
          a["[object Object]"] =
          a["[object RegExp]"] =
          a["[object Set]"] =
          a["[object String]"] =
          a["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return i(t) && o(t.length) && !!a[r(t)];
        });
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    function (t, e, n) {
      (function (t) {
        var r = n(44),
          o = e && !e.nodeType && e,
          i = o && "object" == typeof t && t && !t.nodeType && t,
          a = i && i.exports === o && r.process,
          u = (function () {
            try {
              var t = i && i.require && i.require("util").types;
              return t || (a && a.binding && a.binding("util"));
            } catch (t) {}
          })();
        t.exports = u;
      }).call(this, n(37)(t));
    },
    function (t, e, n) {
      var r = n(124),
        o = n(55);
      t.exports = function (t) {
        return r(t, o(t));
      };
    },
    function (t, e, n) {
      var r = n(54),
        o = n(36);
      t.exports = function (t, e, n, i) {
        var a = !n;
        n || (n = {});
        for (var u = -1, c = e.length; ++u < c; ) {
          var s = e[u],
            f = i ? i(n[s], t[s], s, n, t) : void 0;
          void 0 === f && (f = t[s]), a ? o(n, s, f) : r(n, s, f);
        }
        return n;
      };
    },
    function (t, e, n) {
      var r = n(126),
        o = n(30),
        i = n(16),
        a = n(51),
        u = n(31),
        c = n(52),
        s = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = i(t),
          f = !n && o(t),
          l = !n && !f && a(t),
          d = !n && !f && !l && c(t),
          h = n || f || l || d,
          v = h ? r(t.length, String) : [],
          p = v.length;
        for (var y in t)
          (!e && !s.call(t, y)) ||
            (h &&
              ("length" == y ||
                (l && ("offset" == y || "parent" == y)) ||
                (d &&
                  ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
                u(y, p))) ||
            v.push(y);
        return v;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    function (t, e, n) {
      var r = n(15),
        o = n(50),
        i = n(128),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = o(t),
          n = [];
        for (var u in t)
          ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
        return n;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e;
      };
    },
    function (t, e, n) {
      var r = n(130),
        o = n(135);
      t.exports = function (t) {
        return r(function (e, n) {
          var r = -1,
            i = n.length,
            a = i > 1 ? n[i - 1] : void 0,
            u = i > 2 ? n[2] : void 0;
          for (
            a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0,
              u && o(n[0], n[1], u) && ((a = i < 3 ? void 0 : a), (i = 1)),
              e = Object(e);
            ++r < i;

          ) {
            var c = n[r];
            c && t(e, c, r, a);
          }
          return e;
        });
      };
    },
    function (t, e, n) {
      var r = n(56),
        o = n(57),
        i = n(58);
      t.exports = function (t, e) {
        return i(o(t, e, r), t + "");
      };
    },
    function (t, e) {
      t.exports = function (t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      };
    },
    function (t, e, n) {
      var r = n(133),
        o = n(48),
        i = n(56),
        a = o
          ? function (t, e) {
              return o(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0,
              });
            }
          : i;
      t.exports = a;
    },
    function (t, e) {
      t.exports = function (t) {
        return function () {
          return t;
        };
      };
    },
    function (t, e) {
      var n = Date.now;
      t.exports = function (t) {
        var e = 0,
          r = 0;
        return function () {
          var o = n(),
            i = 16 - (o - r);
          if (((r = o), i > 0)) {
            if (++e >= 800) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      };
    },
    function (t, e, n) {
      var r = n(26),
        o = n(38),
        i = n(31),
        a = n(15);
      t.exports = function (t, e, n) {
        if (!a(n)) return !1;
        var u = typeof e;
        return (
          !!("number" == u
            ? o(n) && i(e, n.length)
            : "string" == u && e in n) && r(n[e], t)
        );
      };
    },
    function (t, e) {
      "undefined" != typeof window &&
        (window.requestAnimationFrame ||
          (window.requestAnimationFrame =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 1e3 / 60);
            })),
        "function" != typeof Math.imul &&
          (Math.imul = function (t, e) {
            var n = 65535 & t,
              r = 65535 & e;
            return (
              (n * r +
                (((((t >>> 16) & 65535) * r + n * ((e >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        "function" != typeof Object.assign &&
          (Object.assign = function (t) {
            "use strict";
            if (null === t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
              var r = arguments[n];
              if (null !== r)
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          });
    },
    function (t, e) {
      (t.exports = function (t) {
        if (Array.isArray(t)) return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t, e) {
        var n =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null != n) {
          var r,
            o,
            i,
            a,
            u = [],
            c = !0,
            s = !1;
          try {
            if (((i = (n = n.call(t)).next), 0 === e)) {
              if (Object(n) !== n) return;
              c = !1;
            } else
              for (
                ;
                !(c = (r = i.call(n)).done) &&
                (u.push(r.value), u.length !== e);
                c = !0
              );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              if (!c && null != n.return && ((a = n.return()), Object(a) !== a))
                return;
            } finally {
              if (s) throw o;
            }
          }
          return u;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(13).default;
      (t.exports = function (t, e) {
        if ("object" !== r(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(t, e || "default");
          if ("object" !== r(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === e ? String : Number)(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(13).default;
      function o() {
        "use strict";
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (t.exports =
          o =
            function () {
              return n;
            }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
        var e,
          n = {},
          i = Object.prototype,
          a = i.hasOwnProperty,
          u =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          c = "function" == typeof Symbol ? Symbol : {},
          s = c.iterator || "@@iterator",
          f = c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function d(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          d({}, "");
        } catch (e) {
          d = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function h(t, e, n, r) {
          var o = e && e.prototype instanceof m ? e : m,
            i = Object.create(o.prototype),
            a = new T(r || []);
          return u(i, "_invoke", { value: A(t, n, a) }), i;
        }
        function v(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        n.wrap = h;
        var p = "suspendedStart",
          y = "executing",
          g = "completed",
          x = {};
        function m() {}
        function _() {}
        function b() {}
        var w = {};
        d(w, s, function () {
          return this;
        });
        var O = Object.getPrototypeOf,
          R = O && O(O(D([])));
        R && R !== i && a.call(R, s) && (w = R);
        var M = (b.prototype = m.prototype = Object.create(w));
        function C(t) {
          ["next", "throw", "return"].forEach(function (e) {
            d(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function n(o, i, u, c) {
            var s = v(t[o], t, i);
            if ("throw" !== s.type) {
              var f = s.arg,
                l = f.value;
              return l && "object" == r(l) && a.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      n("next", t, u, c);
                    },
                    function (t) {
                      n("throw", t, u, c);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (f.value = t), u(f);
                    },
                    function (t) {
                      return n("throw", t, u, c);
                    }
                  );
            }
            c(s.arg);
          }
          var o;
          u(this, "_invoke", {
            value: function (t, r) {
              function i() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function A(t, n, r) {
          var o = p;
          return function (i, a) {
            if (o === y) throw new Error("Generator is already running");
            if (o === g) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (r.method = i, r.arg = a; ; ) {
              var u = r.delegate;
              if (u) {
                var c = S(u, r);
                if (c) {
                  if (c === x) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === p) throw ((o = g), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = y;
              var s = v(t, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? g : "suspendedYield"), s.arg === x))
                  continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = g), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function S(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                S(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              x
            );
          var i = v(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), x
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                x)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              x);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function P(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function D(t) {
          if (t || "" === t) {
            var n = t[s];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (a.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(r(t) + " is not iterable");
        }
        return (
          (_.prototype = b),
          u(M, "constructor", { value: b, configurable: !0 }),
          u(b, "constructor", { value: _, configurable: !0 }),
          (_.displayName = d(b, l, "GeneratorFunction")),
          (n.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === _ || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (n.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), d(t, l, "GeneratorFunction")),
              (t.prototype = Object.create(M)),
              t
            );
          }),
          (n.awrap = function (t) {
            return { __await: t };
          }),
          C(E.prototype),
          d(E.prototype, f, function () {
            return this;
          }),
          (n.AsyncIterator = E),
          (n.async = function (t, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(h(t, e, r, o), i);
            return n.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          C(M),
          d(M, l, "Generator"),
          d(M, s, function () {
            return this;
          }),
          d(M, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (n.values = D),
          (T.prototype = {
            constructor: T,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    a.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(r, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  u = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var c = a.call(i, "catchLoc"),
                    s = a.call(i, "finallyLoc");
                  if (c && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  a.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === t || "continue" === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), x)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                x
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), P(n), x;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    P(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: D(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                x
              );
            },
          }),
          n
        );
      }
      (t.exports = o),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(2);
      (t.exports = function (t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));

        );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(60);
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(147),
        o = n(157);
      t.exports = function (t, e) {
        return r(t, e, function (e, n) {
          return o(t, n);
        });
      };
    },
    function (t, e, n) {
      var r = n(148),
        o = n(156),
        i = n(32);
      t.exports = function (t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u; ) {
          var s = e[a],
            f = r(t, s);
          n(f, s) && o(c, i(s, t), f);
        }
        return c;
      };
    },
    function (t, e, n) {
      var r = n(32),
        o = n(42);
      t.exports = function (t, e) {
        for (var n = 0, i = (e = r(e, t)).length; null != t && n < i; )
          t = t[o(e[n++])];
        return n && n == i ? t : void 0;
      };
    },
    function (t, e, n) {
      var r = n(16),
        o = n(41),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !o(t)
          ) ||
          a.test(t) ||
          !i.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    function (t, e, n) {
      var r = n(151),
        o =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(o, function (t, n, r, o) {
              e.push(r ? o.replace(i, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = a;
    },
    function (t, e, n) {
      var r = n(152);
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    function (t, e, n) {
      var r = n(46);
      function o(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            o = e ? e.apply(this, r) : r[0],
            i = n.cache;
          if (i.has(o)) return i.get(o);
          var a = t.apply(this, r);
          return (n.cache = i.set(o, a) || i), a;
        };
        return (n.cache = new (o.Cache || r)()), n;
      }
      (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
      var r = n(154);
      t.exports = function (t) {
        return null == t ? "" : r(t);
      };
    },
    function (t, e, n) {
      var r = n(27),
        o = n(155),
        i = n(16),
        a = n(41),
        u = r ? r.prototype : void 0,
        c = u ? u.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return o(e, t) + "";
        if (a(e)) return c ? c.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r; )
          o[n] = e(t[n], n, t);
        return o;
      };
    },
    function (t, e, n) {
      var r = n(54),
        o = n(32),
        i = n(31),
        a = n(15),
        u = n(42);
      t.exports = function (t, e, n, c) {
        if (!a(t)) return t;
        for (
          var s = -1, f = (e = o(e, t)).length, l = f - 1, d = t;
          null != d && ++s < f;

        ) {
          var h = u(e[s]),
            v = n;
          if ("__proto__" === h || "constructor" === h || "prototype" === h)
            return t;
          if (s != l) {
            var p = d[h];
            void 0 === (v = c ? c(p, h, d) : void 0) &&
              (v = a(p) ? p : i(e[s + 1]) ? [] : {});
          }
          r(d, h, v), (d = d[h]);
        }
        return t;
      };
    },
    function (t, e, n) {
      var r = n(158),
        o = n(159);
      t.exports = function (t, e) {
        return null != t && o(t, e, r);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    function (t, e, n) {
      var r = n(32),
        o = n(30),
        i = n(16),
        a = n(31),
        u = n(39),
        c = n(42);
      t.exports = function (t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
          var d = c(e[s]);
          if (!(l = null != t && n(t, d))) break;
          t = t[d];
        }
        return l || ++s != f
          ? l
          : !!(f = null == t ? 0 : t.length) &&
              u(f) &&
              a(d, f) &&
              (i(t) || o(t));
      };
    },
    function (t, e, n) {
      var r = n(161),
        o = n(57),
        i = n(58);
      t.exports = function (t) {
        return i(o(t, void 0, r), t + "");
      };
    },
    function (t, e, n) {
      var r = n(162);
      t.exports = function (t) {
        return (null == t ? 0 : t.length) ? r(t, 1) : [];
      };
    },
    function (t, e, n) {
      var r = n(163),
        o = n(164);
      t.exports = function t(e, n, i, a, u) {
        var c = -1,
          s = e.length;
        for (i || (i = o), u || (u = []); ++c < s; ) {
          var f = e[c];
          n > 0 && i(f)
            ? n > 1
              ? t(f, n - 1, i, a, u)
              : r(u, f)
            : a || (u[u.length] = f);
        }
        return u;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = e.length, o = t.length; ++n < r; ) t[o + n] = e[n];
        return t;
      };
    },
    function (t, e, n) {
      var r = n(27),
        o = n(30),
        i = n(16),
        a = r ? r.isConcatSpreadable : void 0;
      t.exports = function (t) {
        return i(t) || o(t) || !!(a && t && t[a]);
      };
    },
    function (t, e) {
      (t.exports = function (t) {
        try {
          return -1 !== Function.toString.call(t).indexOf("[native code]");
        } catch (e) {
          return "function" == typeof t;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(40),
        o = n(167);
      function i(e, n, a) {
        return (
          o()
            ? ((t.exports = i = Reflect.construct.bind()),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports))
            : ((t.exports = i =
                function (t, e, n) {
                  var o = [null];
                  o.push.apply(o, e);
                  var i = new (Function.bind.apply(t, o))();
                  return n && r(i, n.prototype), i;
                }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports)),
          i.apply(null, arguments)
        );
      }
      (t.exports = i),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "BarcodeDecoder", function () {
          return Lt;
        }),
        n.d(e, "Readers", function () {
          return r;
        }),
        n.d(e, "CameraAccess", function () {
          return re;
        }),
        n.d(e, "ImageDebug", function () {
          return h.a;
        }),
        n.d(e, "ImageWrapper", function () {
          return c.a;
        }),
        n.d(e, "ResultCollector", function () {
          return oe;
        });
      var r = {};
      n.r(r),
        n.d(r, "BarcodeReader", function () {
          return k;
        }),
        n.d(r, "TwoOfFiveReader", function () {
          return z;
        }),
        n.d(r, "NewCodabarReader", function () {
          return B;
        }),
        n.d(r, "Code128Reader", function () {
          return q;
        }),
        n.d(r, "Code32Reader", function () {
          return tt;
        }),
        n.d(r, "Code39Reader", function () {
          return Z;
        }),
        n.d(r, "Code39VINReader", function () {
          return ot;
        }),
        n.d(r, "Code93Reader", function () {
          return ct;
        }),
        n.d(r, "EAN2Reader", function () {
          return mt;
        }),
        n.d(r, "EAN5Reader", function () {
          return wt;
        }),
        n.d(r, "EAN8Reader", function () {
          return Rt;
        }),
        n.d(r, "EANReader", function () {
          return gt;
        }),
        n.d(r, "I2of5Reader", function () {
          return Ct;
        }),
        n.d(r, "UPCEReader", function () {
          return St;
        }),
        n.d(r, "UPCReader", function () {
          return Pt;
        });
      var o = n(13),
        i = n.n(o),
        a = n(18),
        u = n.n(a),
        c = (n(136), n(11)),
        s = n(12),
        f = n.n(s),
        l = n(8),
        d = n.n(l),
        h = n(17),
        v = n(3),
        p = n.n(v),
        y = n(4),
        g = n.n(y),
        x = n(1),
        m = n.n(x),
        _ = n(7),
        b = n.n(_),
        w = n(6),
        O = n.n(w),
        R = n(2),
        M = n.n(R),
        C = n(0),
        E = n.n(C),
        A = n(9),
        S = (function (t) {
          return (
            (t[(t.Forward = 1)] = "Forward"),
            (t[(t.Reverse = -1)] = "Reverse"),
            t
          );
        })({}),
        k = (function () {
          function t(e, n) {
            p()(this, t),
              E()(this, "_row", []),
              E()(this, "config", {}),
              E()(this, "supplements", []),
              E()(this, "SINGLE_CODE_ERROR", 0),
              E()(this, "FORMAT", "unknown"),
              E()(this, "CONFIG_KEYS", {}),
              (this._row = []),
              (this.config = e || {}),
              n && (this.supplements = n);
          }
          return (
            g()(
              t,
              [
                {
                  key: "_nextUnset",
                  value: function (t) {
                    for (
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = e;
                      n < t.length;
                      n++
                    )
                      if (!t[n]) return n;
                    return t.length;
                  },
                },
                {
                  key: "_matchPattern",
                  value: function (t, e) {
                    for (
                      var n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : this.SINGLE_CODE_ERROR || 1,
                        r = 0,
                        o = 0,
                        i = 0,
                        a = 0,
                        u = 0,
                        c = 0,
                        s = 0,
                        f = 0;
                      f < t.length;
                      f++
                    )
                      (i += t[f]), (a += e[f]);
                    if (i < a) return Number.MAX_VALUE;
                    n *= u = i / a;
                    for (var l = 0; l < t.length; l++) {
                      if (
                        ((c = t[l]),
                        (s = e[l] * u),
                        (o = Math.abs(c - s) / s) > n)
                      )
                        return Number.MAX_VALUE;
                      r += o;
                    }
                    return r / a;
                  },
                },
                {
                  key: "_nextSet",
                  value: function (t) {
                    for (
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = e;
                      n < t.length;
                      n++
                    )
                      if (t[n]) return n;
                    return t.length;
                  },
                },
                {
                  key: "_correctBars",
                  value: function (t, e, n) {
                    for (var r = n.length, o = 0; r--; )
                      (o = t[n[r]] * (1 - (1 - e) / 2)) > 1 && (t[n[r]] = o);
                  },
                },
                {
                  key: "decodePattern",
                  value: function (t) {
                    this._row = t;
                    var e = this.decode();
                    return (
                      null === e
                        ? (this._row.reverse(),
                          (e = this.decode()) &&
                            ((e.direction = S.Reverse),
                            (e.start = this._row.length - e.start),
                            (e.end = this._row.length - e.end)))
                        : (e.direction = S.Forward),
                      e && (e.format = this.FORMAT),
                      e
                    );
                  },
                },
                {
                  key: "_matchRange",
                  value: function (t, e, n) {
                    var r;
                    for (r = t = t < 0 ? 0 : t; r < e; r++)
                      if (this._row[r] !== n) return !1;
                    return !0;
                  },
                },
                {
                  key: "_fillCounters",
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : this._nextUnset(this._row),
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : this._row.length,
                      n =
                        !(arguments.length > 2 && void 0 !== arguments[2]) ||
                        arguments[2],
                      r = [],
                      o = 0;
                    r[o] = 0;
                    for (var i = t; i < e; i++)
                      this._row[i] ^ (n ? 1 : 0)
                        ? r[o]++
                        : ((r[++o] = 1), (n = !n));
                    return r;
                  },
                },
                {
                  key: "_toCounters",
                  value: function (t, e) {
                    var n = e.length,
                      r = this._row.length,
                      o = !this._row[t],
                      i = 0;
                    A.a.init(e, 0);
                    for (var a = t; a < r; a++)
                      if (this._row[a] ^ (o ? 1 : 0)) e[i]++;
                      else {
                        if (++i === n) break;
                        (e[i] = 1), (o = !o);
                      }
                    return e;
                  },
                },
                {
                  key: "decodeImage",
                  value: function (t) {
                    return null;
                  },
                },
              ],
              [
                {
                  key: "Exception",
                  get: function () {
                    return {
                      StartNotFoundException: "Start-Info was not found!",
                      CodeNotFoundException: "Code could not be found!",
                      PatternNotFoundException: "Pattern could not be found!",
                    };
                  },
                },
              ]
            ),
            t
          );
        })();
      function P(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var T = [3, 1, 3, 1, 1, 1],
        D = [3, 1, 1, 1, 3],
        j = [
          [1, 1, 3, 3, 1],
          [3, 1, 1, 1, 3],
          [1, 3, 1, 1, 3],
          [3, 3, 1, 1, 1],
          [1, 1, 3, 1, 3],
          [3, 1, 3, 1, 1],
          [1, 3, 3, 1, 1],
          [1, 1, 1, 3, 3],
          [3, 1, 1, 3, 1],
          [1, 3, 1, 3, 1],
        ],
        I = T.reduce(function (t, e) {
          return t + e;
        }, 0),
        z = (function (t) {
          b()(n, t);
          var e = P(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "barSpaceRatio", [1, 1]),
              E()(m()(t), "FORMAT", "2of5"),
              E()(m()(t), "SINGLE_CODE_ERROR", 0.78),
              E()(m()(t), "AVG_CODE_ERROR", 0.3),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_findPattern",
                value: function (t, e) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3],
                    o = [],
                    i = 0,
                    a = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 },
                    u = 0,
                    c = 0,
                    s = this.AVG_CODE_ERROR;
                  e || (e = this._nextSet(this._row));
                  for (var f = 0; f < t.length; f++) o[f] = 0;
                  for (var l = e; l < this._row.length; l++)
                    if (this._row[l] ^ (n ? 1 : 0)) o[i]++;
                    else {
                      if (i === o.length - 1) {
                        u = 0;
                        for (var d = 0; d < o.length; d++) u += o[d];
                        if ((c = this._matchPattern(o, t)) < s)
                          return (
                            (a.error = c), (a.start = l - u), (a.end = l), a
                          );
                        if (!r) return null;
                        for (var h = 0; h < o.length - 2; h++) o[h] = o[h + 2];
                        (o[o.length - 2] = 0), (o[o.length - 1] = 0), i--;
                      } else i++;
                      (o[i] = 1), (n = !n);
                    }
                  return null;
                },
              },
              {
                key: "_findStart",
                value: function () {
                  for (
                    var t = null, e = this._nextSet(this._row), n = 1, r = 0;
                    !t;

                  ) {
                    if (!(t = this._findPattern(T, e, !1, !0))) return null;
                    if (
                      ((n = Math.floor((t.end - t.start) / I)),
                      (r = t.start - 5 * n) >= 0 &&
                        this._matchRange(r, t.start, 0))
                    )
                      return t;
                    (e = t.end), (t = null);
                  }
                  return t;
                },
              },
              {
                key: "_verifyTrailingWhitespace",
                value: function (t) {
                  var e = t.end + (t.end - t.start) / 2;
                  return e < this._row.length && this._matchRange(t.end, e, 0)
                    ? t
                    : null;
                },
              },
              {
                key: "_findEnd",
                value: function () {
                  this._row.reverse();
                  var t = this._nextSet(this._row),
                    e = this._findPattern(D, t, !1, !0);
                  if ((this._row.reverse(), null === e)) return null;
                  var n = e.start;
                  return (
                    (e.start = this._row.length - e.end),
                    (e.end = this._row.length - n),
                    null !== e ? this._verifyTrailingWhitespace(e) : null
                  );
                },
              },
              {
                key: "_verifyCounterLength",
                value: function (t) {
                  return t.length % 10 == 0;
                },
              },
              {
                key: "_decodeCode",
                value: function (t) {
                  for (
                    var e = this.AVG_CODE_ERROR,
                      n = {
                        error: Number.MAX_VALUE,
                        code: -1,
                        start: 0,
                        end: 0,
                      },
                      r = 0;
                    r < j.length;
                    r++
                  ) {
                    var o = this._matchPattern(t, j[r]);
                    o < n.error && ((n.code = r), (n.error = o));
                  }
                  return n.error < e ? n : null;
                },
              },
              {
                key: "_decodePayload",
                value: function (t, e, n) {
                  for (
                    var r = 0, o = t.length, i = [0, 0, 0, 0, 0], a = null;
                    r < o;

                  ) {
                    for (var u = 0; u < 5; u++)
                      (i[u] = t[r] * this.barSpaceRatio[0]), (r += 2);
                    if (!(a = this._decodeCode(i))) return null;
                    e.push("".concat(a.code)), n.push(a);
                  }
                  return a;
                },
              },
              {
                key: "decode",
                value: function (t, e) {
                  var n = this._findStart();
                  if (!n) return null;
                  var r = this._findEnd();
                  if (!r) return null;
                  var o = this._fillCounters(n.end, r.start, !1);
                  if (!this._verifyCounterLength(o)) return null;
                  var i = [];
                  i.push(n);
                  var a = [];
                  return this._decodePayload(o, a, i)
                    ? a.length < 5
                      ? null
                      : (i.push(r),
                        {
                          code: a.join(""),
                          start: n.start,
                          end: r.end,
                          startInfo: n,
                          decodedCodes: i,
                          format: this.FORMAT,
                        })
                    : null;
                },
              },
            ]),
            n
          );
        })(k);
      function U(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var L = [
          48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65,
          66, 67, 68,
        ],
        N = [
          3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41,
          11, 14,
        ],
        F = [26, 41, 11, 14],
        B = (function (t) {
          b()(n, t);
          var e = U(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "_counters", []),
              E()(m()(t), "FORMAT", "codabar"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_computeAlternatingThreshold",
                value: function (t, e) {
                  for (
                    var n = Number.MAX_VALUE, r = 0, o = 0, i = t;
                    i < e;
                    i += 2
                  )
                    (o = this._counters[i]) > r && (r = o), o < n && (n = o);
                  return ((n + r) / 2) | 0;
                },
              },
              {
                key: "_toPattern",
                value: function (t) {
                  var e = t + 7;
                  if (e > this._counters.length) return -1;
                  for (
                    var n = this._computeAlternatingThreshold(t, e),
                      r = this._computeAlternatingThreshold(t + 1, e),
                      o = 64,
                      i = 0,
                      a = 0,
                      u = 0;
                    u < 7;
                    u++
                  )
                    (i = 0 == (1 & u) ? n : r),
                      this._counters[t + u] > i && (a |= o),
                      (o >>= 1);
                  return a;
                },
              },
              {
                key: "_isStartEnd",
                value: function (t) {
                  for (var e = 0; e < F.length; e++) if (F[e] === t) return !0;
                  return !1;
                },
              },
              {
                key: "_sumCounters",
                value: function (t, e) {
                  for (var n = 0, r = t; r < e; r++) n += this._counters[r];
                  return n;
                },
              },
              {
                key: "_findStart",
                value: function () {
                  for (
                    var t = this._nextUnset(this._row), e = 1;
                    e < this._counters.length;
                    e++
                  ) {
                    var n = this._toPattern(e);
                    if (-1 !== n && this._isStartEnd(n))
                      return {
                        start: (t += this._sumCounters(0, e)),
                        end: t + this._sumCounters(e, e + 8),
                        startCounter: e,
                        endCounter: e + 8,
                      };
                  }
                  return null;
                },
              },
              {
                key: "_patternToChar",
                value: function (t) {
                  for (var e = 0; e < N.length; e++)
                    if (N[e] === t) return String.fromCharCode(L[e]);
                  return null;
                },
              },
              {
                key: "_calculatePatternLength",
                value: function (t) {
                  for (var e = 0, n = t; n < t + 7; n++) e += this._counters[n];
                  return e;
                },
              },
              {
                key: "_verifyWhitespace",
                value: function (t, e) {
                  return (
                    (t - 1 <= 0 ||
                      this._counters[t - 1] >=
                        this._calculatePatternLength(t) / 2) &&
                    (e + 8 >= this._counters.length ||
                      this._counters[e + 7] >=
                        this._calculatePatternLength(e) / 2)
                  );
                },
              },
              {
                key: "_charToPattern",
                value: function (t) {
                  for (var e = t.charCodeAt(0), n = 0; n < L.length; n++)
                    if (L[n] === e) return N[n];
                  return 0;
                },
              },
              {
                key: "_thresholdResultPattern",
                value: function (t, e) {
                  for (
                    var n,
                      r = {
                        space: {
                          narrow: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE,
                          },
                          wide: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE,
                          },
                        },
                        bar: {
                          narrow: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE,
                          },
                          wide: {
                            size: 0,
                            counts: 0,
                            min: 0,
                            max: Number.MAX_VALUE,
                          },
                        },
                      },
                      o = e,
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    n = this._charToPattern(t[i]);
                    for (var a = 6; a >= 0; a--) {
                      var u = 2 == (1 & a) ? r.bar : r.space,
                        c = 1 == (1 & n) ? u.wide : u.narrow;
                      (c.size += this._counters[o + a]), c.counts++, (n >>= 1);
                    }
                    o += 8;
                  }
                  return (
                    ["space", "bar"].forEach(function (t) {
                      var e = r[t];
                      (e.wide.min = Math.floor(
                        (e.narrow.size / e.narrow.counts +
                          e.wide.size / e.wide.counts) /
                          2
                      )),
                        (e.narrow.max = Math.ceil(e.wide.min)),
                        (e.wide.max = Math.ceil(
                          (2 * e.wide.size + 1.5) / e.wide.counts
                        ));
                    }),
                    r
                  );
                },
              },
              {
                key: "_validateResult",
                value: function (t, e) {
                  for (
                    var n, r = this._thresholdResultPattern(t, e), o = e, i = 0;
                    i < t.length;
                    i++
                  ) {
                    n = this._charToPattern(t[i]);
                    for (var a = 6; a >= 0; a--) {
                      var u = 0 == (1 & a) ? r.bar : r.space,
                        c = 1 == (1 & n) ? u.wide : u.narrow,
                        s = this._counters[o + a];
                      if (s < c.min || s > c.max) return !1;
                      n >>= 1;
                    }
                    o += 8;
                  }
                  return !0;
                },
              },
              {
                key: "decode",
                value: function (t, e) {
                  if (
                    ((this._counters = this._fillCounters()),
                    !(e = this._findStart()))
                  )
                    return null;
                  var n,
                    r = e.startCounter,
                    o = [];
                  do {
                    if ((n = this._toPattern(r)) < 0) return null;
                    var i = this._patternToChar(n);
                    if (null === i) return null;
                    if (
                      (o.push(i), (r += 8), o.length > 1 && this._isStartEnd(n))
                    )
                      break;
                  } while (r < this._counters.length);
                  if (o.length - 2 < 4 || !this._isStartEnd(n)) return null;
                  if (!this._verifyWhitespace(e.startCounter, r - 8))
                    return null;
                  if (!this._validateResult(o, e.startCounter)) return null;
                  r = r > this._counters.length ? this._counters.length : r;
                  var a = e.start + this._sumCounters(e.startCounter, r - 8);
                  return {
                    code: o.join(""),
                    start: e.start,
                    end: a,
                    startInfo: e,
                    decodedCodes: o,
                    format: this.FORMAT,
                  };
                },
              },
            ]),
            n
          );
        })(k);
      function W(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var q = (function (t) {
          b()(n, t);
          var e = W(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "CODE_SHIFT", 98),
              E()(m()(t), "CODE_C", 99),
              E()(m()(t), "CODE_B", 100),
              E()(m()(t), "CODE_A", 101),
              E()(m()(t), "START_CODE_A", 103),
              E()(m()(t), "START_CODE_B", 104),
              E()(m()(t), "START_CODE_C", 105),
              E()(m()(t), "STOP_CODE", 106),
              E()(m()(t), "CODE_PATTERN", [
                [2, 1, 2, 2, 2, 2],
                [2, 2, 2, 1, 2, 2],
                [2, 2, 2, 2, 2, 1],
                [1, 2, 1, 2, 2, 3],
                [1, 2, 1, 3, 2, 2],
                [1, 3, 1, 2, 2, 2],
                [1, 2, 2, 2, 1, 3],
                [1, 2, 2, 3, 1, 2],
                [1, 3, 2, 2, 1, 2],
                [2, 2, 1, 2, 1, 3],
                [2, 2, 1, 3, 1, 2],
                [2, 3, 1, 2, 1, 2],
                [1, 1, 2, 2, 3, 2],
                [1, 2, 2, 1, 3, 2],
                [1, 2, 2, 2, 3, 1],
                [1, 1, 3, 2, 2, 2],
                [1, 2, 3, 1, 2, 2],
                [1, 2, 3, 2, 2, 1],
                [2, 2, 3, 2, 1, 1],
                [2, 2, 1, 1, 3, 2],
                [2, 2, 1, 2, 3, 1],
                [2, 1, 3, 2, 1, 2],
                [2, 2, 3, 1, 1, 2],
                [3, 1, 2, 1, 3, 1],
                [3, 1, 1, 2, 2, 2],
                [3, 2, 1, 1, 2, 2],
                [3, 2, 1, 2, 2, 1],
                [3, 1, 2, 2, 1, 2],
                [3, 2, 2, 1, 1, 2],
                [3, 2, 2, 2, 1, 1],
                [2, 1, 2, 1, 2, 3],
                [2, 1, 2, 3, 2, 1],
                [2, 3, 2, 1, 2, 1],
                [1, 1, 1, 3, 2, 3],
                [1, 3, 1, 1, 2, 3],
                [1, 3, 1, 3, 2, 1],
                [1, 1, 2, 3, 1, 3],
                [1, 3, 2, 1, 1, 3],
                [1, 3, 2, 3, 1, 1],
                [2, 1, 1, 3, 1, 3],
                [2, 3, 1, 1, 1, 3],
                [2, 3, 1, 3, 1, 1],
                [1, 1, 2, 1, 3, 3],
                [1, 1, 2, 3, 3, 1],
                [1, 3, 2, 1, 3, 1],
                [1, 1, 3, 1, 2, 3],
                [1, 1, 3, 3, 2, 1],
                [1, 3, 3, 1, 2, 1],
                [3, 1, 3, 1, 2, 1],
                [2, 1, 1, 3, 3, 1],
                [2, 3, 1, 1, 3, 1],
                [2, 1, 3, 1, 1, 3],
                [2, 1, 3, 3, 1, 1],
                [2, 1, 3, 1, 3, 1],
                [3, 1, 1, 1, 2, 3],
                [3, 1, 1, 3, 2, 1],
                [3, 3, 1, 1, 2, 1],
                [3, 1, 2, 1, 1, 3],
                [3, 1, 2, 3, 1, 1],
                [3, 3, 2, 1, 1, 1],
                [3, 1, 4, 1, 1, 1],
                [2, 2, 1, 4, 1, 1],
                [4, 3, 1, 1, 1, 1],
                [1, 1, 1, 2, 2, 4],
                [1, 1, 1, 4, 2, 2],
                [1, 2, 1, 1, 2, 4],
                [1, 2, 1, 4, 2, 1],
                [1, 4, 1, 1, 2, 2],
                [1, 4, 1, 2, 2, 1],
                [1, 1, 2, 2, 1, 4],
                [1, 1, 2, 4, 1, 2],
                [1, 2, 2, 1, 1, 4],
                [1, 2, 2, 4, 1, 1],
                [1, 4, 2, 1, 1, 2],
                [1, 4, 2, 2, 1, 1],
                [2, 4, 1, 2, 1, 1],
                [2, 2, 1, 1, 1, 4],
                [4, 1, 3, 1, 1, 1],
                [2, 4, 1, 1, 1, 2],
                [1, 3, 4, 1, 1, 1],
                [1, 1, 1, 2, 4, 2],
                [1, 2, 1, 1, 4, 2],
                [1, 2, 1, 2, 4, 1],
                [1, 1, 4, 2, 1, 2],
                [1, 2, 4, 1, 1, 2],
                [1, 2, 4, 2, 1, 1],
                [4, 1, 1, 2, 1, 2],
                [4, 2, 1, 1, 1, 2],
                [4, 2, 1, 2, 1, 1],
                [2, 1, 2, 1, 4, 1],
                [2, 1, 4, 1, 2, 1],
                [4, 1, 2, 1, 2, 1],
                [1, 1, 1, 1, 4, 3],
                [1, 1, 1, 3, 4, 1],
                [1, 3, 1, 1, 4, 1],
                [1, 1, 4, 1, 1, 3],
                [1, 1, 4, 3, 1, 1],
                [4, 1, 1, 1, 1, 3],
                [4, 1, 1, 3, 1, 1],
                [1, 1, 3, 1, 4, 1],
                [1, 1, 4, 1, 3, 1],
                [3, 1, 1, 1, 4, 1],
                [4, 1, 1, 1, 3, 1],
                [2, 1, 1, 4, 1, 2],
                [2, 1, 1, 2, 1, 4],
                [2, 1, 1, 2, 3, 2],
                [2, 3, 3, 1, 1, 1, 2],
              ]),
              E()(m()(t), "SINGLE_CODE_ERROR", 0.64),
              E()(m()(t), "AVG_CODE_ERROR", 0.3),
              E()(m()(t), "FORMAT", "code_128"),
              E()(m()(t), "MODULE_INDICES", {
                bar: [0, 2, 4],
                space: [1, 3, 5],
              }),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_decodeCode",
                value: function (t, e) {
                  for (
                    var n = {
                        error: Number.MAX_VALUE,
                        code: -1,
                        start: t,
                        end: t,
                        correction: { bar: 1, space: 1 },
                      },
                      r = [0, 0, 0, 0, 0, 0],
                      o = t,
                      i = !this._row[o],
                      a = 0,
                      u = o;
                    u < this._row.length;
                    u++
                  )
                    if (this._row[u] ^ (i ? 1 : 0)) r[a]++;
                    else {
                      if (a === r.length - 1) {
                        e && this._correct(r, e);
                        for (var c = 0; c < this.CODE_PATTERN.length; c++) {
                          var s = this._matchPattern(r, this.CODE_PATTERN[c]);
                          s < n.error && ((n.code = c), (n.error = s));
                        }
                        return (
                          (n.end = u),
                          -1 === n.code || n.error > this.AVG_CODE_ERROR
                            ? null
                            : (this.CODE_PATTERN[n.code] &&
                                ((n.correction.bar = this.calculateCorrection(
                                  this.CODE_PATTERN[n.code],
                                  r,
                                  this.MODULE_INDICES.bar
                                )),
                                (n.correction.space = this.calculateCorrection(
                                  this.CODE_PATTERN[n.code],
                                  r,
                                  this.MODULE_INDICES.space
                                ))),
                              n)
                        );
                      }
                      (r[++a] = 1), (i = !i);
                    }
                  return null;
                },
              },
              {
                key: "_correct",
                value: function (t, e) {
                  this._correctBars(t, e.bar, this.MODULE_INDICES.bar),
                    this._correctBars(t, e.space, this.MODULE_INDICES.space);
                },
              },
              {
                key: "_findStart",
                value: function () {
                  for (
                    var t = [0, 0, 0, 0, 0, 0],
                      e = this._nextSet(this._row),
                      n = {
                        error: Number.MAX_VALUE,
                        code: -1,
                        start: 0,
                        end: 0,
                        correction: { bar: 1, space: 1 },
                      },
                      r = !1,
                      o = 0,
                      i = e;
                    i < this._row.length;
                    i++
                  )
                    if (this._row[i] ^ (r ? 1 : 0)) t[o]++;
                    else {
                      if (o === t.length - 1) {
                        for (
                          var a = t.reduce(function (t, e) {
                              return t + e;
                            }, 0),
                            u = this.START_CODE_A;
                          u <= this.START_CODE_C;
                          u++
                        ) {
                          var c = this._matchPattern(t, this.CODE_PATTERN[u]);
                          c < n.error && ((n.code = u), (n.error = c));
                        }
                        if (n.error < this.AVG_CODE_ERROR)
                          return (
                            (n.start = i - a),
                            (n.end = i),
                            (n.correction.bar = this.calculateCorrection(
                              this.CODE_PATTERN[n.code],
                              t,
                              this.MODULE_INDICES.bar
                            )),
                            (n.correction.space = this.calculateCorrection(
                              this.CODE_PATTERN[n.code],
                              t,
                              this.MODULE_INDICES.space
                            )),
                            n
                          );
                        for (var s = 0; s < 4; s++) t[s] = t[s + 2];
                        (t[4] = 0), (t[5] = 0), o--;
                      } else o++;
                      (t[o] = 1), (r = !r);
                    }
                  return null;
                },
              },
              {
                key: "decode",
                value: function (t, e) {
                  var n = this,
                    r = this._findStart();
                  if (null === r) return null;
                  var o = {
                      code: r.code,
                      start: r.start,
                      end: r.end,
                      correction: {
                        bar: r.correction.bar,
                        space: r.correction.space,
                      },
                    },
                    i = [];
                  i.push(o);
                  for (
                    var a = o.code,
                      u = (function (t) {
                        switch (t) {
                          case n.START_CODE_A:
                            return n.CODE_A;
                          case n.START_CODE_B:
                            return n.CODE_B;
                          case n.START_CODE_C:
                            return n.CODE_C;
                          default:
                            return null;
                        }
                      })(o.code),
                      c = !1,
                      s = !1,
                      f = s,
                      l = !0,
                      d = 0,
                      h = [],
                      v = [];
                    !c;

                  ) {
                    if (
                      ((f = s),
                      (s = !1),
                      null !== (o = this._decodeCode(o.end, o.correction)))
                    )
                      switch (
                        (o.code !== this.STOP_CODE && (l = !0),
                        o.code !== this.STOP_CODE &&
                          (h.push(o.code), (a += ++d * o.code)),
                        i.push(o),
                        u)
                      ) {
                        case this.CODE_A:
                          if (o.code < 64)
                            v.push(String.fromCharCode(32 + o.code));
                          else if (o.code < 96)
                            v.push(String.fromCharCode(o.code - 64));
                          else
                            switch (
                              (o.code !== this.STOP_CODE && (l = !1), o.code)
                            ) {
                              case this.CODE_SHIFT:
                                (s = !0), (u = this.CODE_B);
                                break;
                              case this.CODE_B:
                                u = this.CODE_B;
                                break;
                              case this.CODE_C:
                                u = this.CODE_C;
                                break;
                              case this.STOP_CODE:
                                c = !0;
                            }
                          break;
                        case this.CODE_B:
                          if (o.code < 96)
                            v.push(String.fromCharCode(32 + o.code));
                          else
                            switch (
                              (o.code !== this.STOP_CODE && (l = !1), o.code)
                            ) {
                              case this.CODE_SHIFT:
                                (s = !0), (u = this.CODE_A);
                                break;
                              case this.CODE_A:
                                u = this.CODE_A;
                                break;
                              case this.CODE_C:
                                u = this.CODE_C;
                                break;
                              case this.STOP_CODE:
                                c = !0;
                            }
                          break;
                        case this.CODE_C:
                          if (o.code < 100)
                            v.push(o.code < 10 ? "0" + o.code : o.code);
                          else
                            switch (
                              (o.code !== this.STOP_CODE && (l = !1), o.code)
                            ) {
                              case this.CODE_A:
                                u = this.CODE_A;
                                break;
                              case this.CODE_B:
                                u = this.CODE_B;
                                break;
                              case this.STOP_CODE:
                                c = !0;
                            }
                      }
                    else c = !0;
                    f && (u = u === this.CODE_A ? this.CODE_B : this.CODE_A);
                  }
                  return null === o
                    ? null
                    : ((o.end = this._nextUnset(this._row, o.end)),
                      this._verifyTrailingWhitespace(o)
                        ? (a -= d * h[h.length - 1]) % 103 !== h[h.length - 1]
                          ? null
                          : v.length
                          ? (l && v.splice(v.length - 1, 1),
                            {
                              code: v.join(""),
                              start: r.start,
                              end: o.end,
                              codeset: u,
                              startInfo: r,
                              decodedCodes: i,
                              endInfo: o,
                              format: this.FORMAT,
                            })
                          : null
                        : null);
                },
              },
              {
                key: "_verifyTrailingWhitespace",
                value: function (t) {
                  var e;
                  return (e = t.end + (t.end - t.start) / 2) <
                    this._row.length && this._matchRange(t.end, e, 0)
                    ? t
                    : null;
                },
              },
              {
                key: "calculateCorrection",
                value: function (t, e, n) {
                  for (var r = n.length, o = 0, i = 0; r--; )
                    (i += t[n[r]]), (o += e[n[r]]);
                  return i / o;
                },
              },
            ]),
            n
          );
        })(k),
        V = n(14),
        G = n.n(V),
        H = n(33),
        X = n.n(H);
      function Q(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var Y = new Uint16Array(
          X()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%").map(function (t) {
            return t.charCodeAt(0);
          })
        ),
        $ = new Uint16Array([
          52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280,
          88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385,
          193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42,
        ]),
        Z = (function (t) {
          b()(n, t);
          var e = Q(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "FORMAT", "code_39"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_findStart",
                value: function () {
                  for (
                    var t = this._nextSet(this._row),
                      e = t,
                      n = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]),
                      r = 0,
                      o = !1,
                      i = t;
                    i < this._row.length;
                    i++
                  )
                    if (this._row[i] ^ (o ? 1 : 0)) n[r]++;
                    else {
                      if (r === n.length - 1) {
                        if (148 === this._toPattern(n)) {
                          var a = Math.floor(Math.max(0, e - (i - e) / 4));
                          if (this._matchRange(a, e, 0))
                            return { start: e, end: i };
                        }
                        e += n[0] + n[1];
                        for (var u = 0; u < 7; u++) n[u] = n[u + 2];
                        (n[7] = 0), (n[8] = 0), r--;
                      } else r++;
                      (n[r] = 1), (o = !o);
                    }
                  return null;
                },
              },
              {
                key: "_toPattern",
                value: function (t) {
                  for (var e = t.length, n = 0, r = e, o = 0; r > 3; ) {
                    (n = this._findNextWidth(t, n)), (r = 0);
                    for (var i = 0, a = 0; a < e; a++)
                      t[a] > n && ((i |= 1 << (e - 1 - a)), r++, (o += t[a]));
                    if (3 === r) {
                      for (var u = 0; u < e && r > 0; u++)
                        if (t[u] > n && (r--, 2 * t[u] >= o)) return -1;
                      return i;
                    }
                  }
                  return -1;
                },
              },
              {
                key: "_findNextWidth",
                value: function (t, e) {
                  for (var n = Number.MAX_VALUE, r = 0; r < t.length; r++)
                    t[r] < n && t[r] > e && (n = t[r]);
                  return n;
                },
              },
              {
                key: "_patternToChar",
                value: function (t) {
                  for (var e = 0; e < $.length; e++)
                    if ($[e] === t) return String.fromCharCode(Y[e]);
                  return null;
                },
              },
              {
                key: "_verifyTrailingWhitespace",
                value: function (t, e, n) {
                  var r = A.a.sum(n);
                  return 3 * (e - t - r) >= r;
                },
              },
              {
                key: "decode",
                value: function () {
                  var t = new Uint16Array([0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    e = [],
                    n = this._findStart();
                  if (!n) return null;
                  var r,
                    o,
                    i = this._nextSet(this._row, n.end);
                  do {
                    t = this._toCounters(i, t);
                    var a = this._toPattern(t);
                    if (a < 0) return null;
                    if (null === (r = this._patternToChar(a))) return null;
                    e.push(r),
                      (o = i),
                      (i += A.a.sum(t)),
                      (i = this._nextSet(this._row, i));
                  } while ("*" !== r);
                  return (
                    e.pop(),
                    e.length && this._verifyTrailingWhitespace(o, i, t)
                      ? {
                          code: e.join(""),
                          start: n.start,
                          end: i,
                          startInfo: n,
                          decodedCodes: e,
                          format: this.FORMAT,
                        }
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(k);
      function K(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var J = /[AEIO]/g,
        tt = (function (t) {
          b()(n, t);
          var e = K(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "FORMAT", "code_32_reader"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_decodeCode32",
                value: function (t) {
                  if (/[^0-9BCDFGHJKLMNPQRSTUVWXYZ]/.test(t)) return null;
                  for (var e = 0, n = 0; n < t.length; n++)
                    e =
                      32 * e + "0123456789BCDFGHJKLMNPQRSTUVWXYZ".indexOf(t[n]);
                  var r = "".concat(e);
                  return (
                    r.length < 9 && (r = ("000000000" + r).slice(-9)), "A" + r
                  );
                },
              },
              {
                key: "_checkChecksum",
                value: function (t) {
                  return !!t;
                },
              },
              {
                key: "decode",
                value: function () {
                  var t = G()(M()(n.prototype), "decode", this).call(this);
                  if (!t) return null;
                  var e = t.code;
                  if (!e) return null;
                  if (((e = e.replace(J, "")), !this._checkChecksum(e)))
                    return null;
                  var r = this._decodeCode32(e);
                  return r ? ((t.code = r), t) : null;
                },
              },
            ]),
            n
          );
        })(Z);
      function et(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var nt = /[IOQ]/g,
        rt = /[A-Z0-9]{17}/,
        ot = (function (t) {
          b()(n, t);
          var e = et(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "FORMAT", "code_39_vin"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_checkChecksum",
                value: function (t) {
                  return !!t;
                },
              },
              {
                key: "decode",
                value: function () {
                  var t = G()(M()(n.prototype), "decode", this).call(this);
                  if (!t) return null;
                  var e = t.code;
                  return e &&
                    (e = e.replace(nt, "")).match(rt) &&
                    this._checkChecksum(e)
                    ? ((t.code = e), t)
                    : null;
                },
              },
            ]),
            n
          );
        })(Z);
      function it(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var at = new Uint16Array(
          X()("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*").map(function (
            t
          ) {
            return t.charCodeAt(0);
          })
        ),
        ut = new Uint16Array([
          276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404,
          402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434,
          428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374,
          430, 294, 474, 470, 306, 350,
        ]),
        ct = (function (t) {
          b()(n, t);
          var e = it(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "FORMAT", "code_93"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "_patternToChar",
                value: function (t) {
                  for (var e = 0; e < ut.length; e++)
                    if (ut[e] === t) return String.fromCharCode(at[e]);
                  return null;
                },
              },
              {
                key: "_toPattern",
                value: function (t) {
                  for (
                    var e = t.length,
                      n = t.reduce(function (t, e) {
                        return t + e;
                      }, 0),
                      r = 0,
                      o = 0;
                    o < e;
                    o++
                  ) {
                    var i = Math.round((9 * t[o]) / n);
                    if (i < 1 || i > 4) return -1;
                    if (0 == (1 & o))
                      for (var a = 0; a < i; a++) r = (r << 1) | 1;
                    else r <<= i;
                  }
                  return r;
                },
              },
              {
                key: "_findStart",
                value: function () {
                  for (
                    var t = this._nextSet(this._row),
                      e = t,
                      n = new Uint16Array([0, 0, 0, 0, 0, 0]),
                      r = 0,
                      o = !1,
                      i = t;
                    i < this._row.length;
                    i++
                  )
                    if (this._row[i] ^ (o ? 1 : 0)) n[r]++;
                    else {
                      if (r === n.length - 1) {
                        if (350 === this._toPattern(n)) {
                          var a = Math.floor(Math.max(0, e - (i - e) / 4));
                          if (this._matchRange(a, e, 0))
                            return { start: e, end: i };
                        }
                        e += n[0] + n[1];
                        for (var u = 0; u < 4; u++) n[u] = n[u + 2];
                        (n[4] = 0), (n[5] = 0), r--;
                      } else r++;
                      (n[r] = 1), (o = !o);
                    }
                  return null;
                },
              },
              {
                key: "_verifyEnd",
                value: function (t, e) {
                  return !(t === e || !this._row[e]);
                },
              },
              {
                key: "_decodeExtended",
                value: function (t) {
                  for (var e = t.length, n = [], r = 0; r < e; r++) {
                    var o = t[r];
                    if (o >= "a" && o <= "d") {
                      if (r > e - 2) return null;
                      var i = t[++r],
                        a = i.charCodeAt(0),
                        u = void 0;
                      switch (o) {
                        case "a":
                          if (!(i >= "A" && i <= "Z")) return null;
                          u = String.fromCharCode(a - 64);
                          break;
                        case "b":
                          if (i >= "A" && i <= "E")
                            u = String.fromCharCode(a - 38);
                          else if (i >= "F" && i <= "J")
                            u = String.fromCharCode(a - 11);
                          else if (i >= "K" && i <= "O")
                            u = String.fromCharCode(a + 16);
                          else if (i >= "P" && i <= "S")
                            u = String.fromCharCode(a + 43);
                          else {
                            if (!(i >= "T" && i <= "Z")) return null;
                            u = String.fromCharCode(127);
                          }
                          break;
                        case "c":
                          if (i >= "A" && i <= "O")
                            u = String.fromCharCode(a - 32);
                          else {
                            if ("Z" !== i) return null;
                            u = ":";
                          }
                          break;
                        case "d":
                          if (!(i >= "A" && i <= "Z")) return null;
                          u = String.fromCharCode(a + 32);
                          break;
                        default:
                          return (
                            console.warn(
                              "* code_93_reader _decodeExtended hit default case, this may be an error",
                              u
                            ),
                            null
                          );
                      }
                      n.push(u);
                    } else n.push(o);
                  }
                  return n;
                },
              },
              {
                key: "_matchCheckChar",
                value: function (t, e, n) {
                  var r = t.slice(0, e),
                    o = r.length,
                    i = r.reduce(function (t, e, r) {
                      return (
                        t +
                        (((-1 * r + (o - 1)) % n) + 1) *
                          at.indexOf(e.charCodeAt(0))
                      );
                    }, 0);
                  return at[i % 47] === t[e].charCodeAt(0);
                },
              },
              {
                key: "_verifyChecksums",
                value: function (t) {
                  return (
                    this._matchCheckChar(t, t.length - 2, 20) &&
                    this._matchCheckChar(t, t.length - 1, 15)
                  );
                },
              },
              {
                key: "decode",
                value: function (t, e) {
                  if (!(e = this._findStart())) return null;
                  var n,
                    r,
                    o = new Uint16Array([0, 0, 0, 0, 0, 0]),
                    i = [],
                    a = this._nextSet(this._row, e.end);
                  do {
                    o = this._toCounters(a, o);
                    var u = this._toPattern(o);
                    if (u < 0) return null;
                    if (null === (r = this._patternToChar(u))) return null;
                    i.push(r),
                      (n = a),
                      (a += A.a.sum(o)),
                      (a = this._nextSet(this._row, a));
                  } while ("*" !== r);
                  return (
                    i.pop(),
                    i.length &&
                    this._verifyEnd(n, a) &&
                    this._verifyChecksums(i)
                      ? ((i = i.slice(0, i.length - 2)),
                        null === (i = this._decodeExtended(i))
                          ? null
                          : {
                              code: i.join(""),
                              start: e.start,
                              end: a,
                              startInfo: e,
                              decodedCodes: i,
                              format: this.FORMAT,
                            })
                      : null
                  );
                },
              },
            ]),
            n
          );
        })(k);
      function st(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ft(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? st(Object(n), !0).forEach(function (e) {
                E()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : st(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function lt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var dt = [1, 1, 1],
        ht = [1, 1, 1, 1, 1],
        vt = [1, 1, 2],
        pt = [
          [3, 2, 1, 1],
          [2, 2, 2, 1],
          [2, 1, 2, 2],
          [1, 4, 1, 1],
          [1, 1, 3, 2],
          [1, 2, 3, 1],
          [1, 1, 1, 4],
          [1, 3, 1, 2],
          [1, 2, 1, 3],
          [3, 1, 1, 2],
          [1, 1, 2, 3],
          [1, 2, 2, 2],
          [2, 2, 1, 2],
          [1, 1, 4, 1],
          [2, 3, 1, 1],
          [1, 3, 2, 1],
          [4, 1, 1, 1],
          [2, 1, 3, 1],
          [3, 1, 2, 1],
          [2, 1, 1, 3],
        ],
        yt = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26],
        gt = (function (t) {
          b()(n, t);
          var e = lt(n);
          function n(t, r) {
            var o;
            return (
              p()(this, n),
              (o = e.call(this, u()({ supplements: [] }, t), r)),
              E()(m()(o), "FORMAT", "ean_13"),
              E()(m()(o), "SINGLE_CODE_ERROR", 0.7),
              E()(m()(o), "STOP_PATTERN", [1, 1, 1]),
              o
            );
          }
          return (
            g()(n, [
              {
                key: "_findPattern",
                value: function (t, e, n, r) {
                  var o = new Array(t.length).fill(0),
                    i = { error: Number.MAX_VALUE, start: 0, end: 0 },
                    a = 0;
                  e || (e = this._nextSet(this._row));
                  for (var u = !1, c = e; c < this._row.length; c++)
                    if (this._row[c] ^ (n ? 1 : 0)) o[a] += 1;
                    else {
                      if (a === o.length - 1) {
                        var s = this._matchPattern(o, t);
                        if (s < 0.48 && i.error && s < i.error)
                          return (
                            (u = !0),
                            (i.error = s),
                            (i.start =
                              c -
                              o.reduce(function (t, e) {
                                return t + e;
                              }, 0)),
                            (i.end = c),
                            i
                          );
                        if (r) {
                          for (var f = 0; f < o.length - 2; f++)
                            o[f] = o[f + 2];
                          (o[o.length - 2] = 0), (o[o.length - 1] = 0), a--;
                        }
                      } else a++;
                      (o[a] = 1), (n = !n);
                    }
                  return u ? i : null;
                },
              },
              {
                key: "_decodeCode",
                value: function (t, e) {
                  var n = [0, 0, 0, 0],
                    r = t,
                    o = { error: Number.MAX_VALUE, code: -1, start: t, end: t },
                    i = !this._row[r],
                    a = 0;
                  e || (e = pt.length);
                  for (var u = r; u < this._row.length; u++)
                    if (this._row[u] ^ (i ? 1 : 0)) n[a]++;
                    else {
                      if (a === n.length - 1) {
                        for (var c = 0; c < e; c++) {
                          var s = this._matchPattern(n, pt[c]);
                          (o.end = u),
                            s < o.error && ((o.code = c), (o.error = s));
                        }
                        return o.error > 0.48 ? null : o;
                      }
                      (n[++a] = 1), (i = !i);
                    }
                  return null;
                },
              },
              {
                key: "_findStart",
                value: function () {
                  for (var t = this._nextSet(this._row), e = null; !e; ) {
                    if (!(e = this._findPattern(dt, t, !1, !0))) return null;
                    var n = e.start - (e.end - e.start);
                    if (n >= 0 && this._matchRange(n, e.start, 0)) return e;
                    (t = e.end), (e = null);
                  }
                  return null;
                },
              },
              {
                key: "_calculateFirstDigit",
                value: function (t) {
                  for (var e = 0; e < yt.length; e++) if (t === yt[e]) return e;
                  return null;
                },
              },
              {
                key: "_decodePayload",
                value: function (t, e, n) {
                  for (var r = ft({}, t), o = 0, i = 0; i < 6; i++) {
                    if (!(r = this._decodeCode(r.end))) return null;
                    r.code >= 10
                      ? ((r.code -= 10), (o |= 1 << (5 - i)))
                      : (o |= 0 << (5 - i)),
                      e.push(r.code),
                      n.push(r);
                  }
                  var a = this._calculateFirstDigit(o);
                  if (null === a) return null;
                  e.unshift(a);
                  var u = this._findPattern(ht, r.end, !0, !1);
                  if (null === u || !u.end) return null;
                  n.push(u);
                  for (var c = 0; c < 6; c++) {
                    if (!(u = this._decodeCode(u.end, 10))) return null;
                    n.push(u), e.push(u.code);
                  }
                  return u;
                },
              },
              {
                key: "_verifyTrailingWhitespace",
                value: function (t) {
                  var e = t.end + (t.end - t.start);
                  return e < this._row.length && this._matchRange(t.end, e, 0)
                    ? t
                    : null;
                },
              },
              {
                key: "_findEnd",
                value: function (t, e) {
                  var n = this._findPattern(this.STOP_PATTERN, t, e, !1);
                  return null !== n ? this._verifyTrailingWhitespace(n) : null;
                },
              },
              {
                key: "_checksum",
                value: function (t) {
                  for (var e = 0, n = t.length - 2; n >= 0; n -= 2) e += t[n];
                  e *= 3;
                  for (var r = t.length - 1; r >= 0; r -= 2) e += t[r];
                  return e % 10 == 0;
                },
              },
              {
                key: "_decodeExtensions",
                value: function (t) {
                  var e = this._nextSet(this._row, t),
                    n = this._findPattern(vt, e, !1, !1);
                  if (null === n) return null;
                  for (var r = 0; r < this.supplements.length; r++)
                    try {
                      var o = this.supplements[r].decode(this._row, n.end);
                      if (null !== o)
                        return {
                          code: o.code,
                          start: e,
                          startInfo: n,
                          end: o.end,
                          decodedCodes: o.decodedCodes,
                          format: this.supplements[r].FORMAT,
                        };
                    } catch (t) {
                      console.error(
                        "* decodeExtensions error in ",
                        this.supplements[r],
                        ": ",
                        t
                      );
                    }
                  return null;
                },
              },
              {
                key: "decode",
                value: function (t, e) {
                  var n = new Array(),
                    r = new Array(),
                    o = {},
                    i = this._findStart();
                  if (!i) return null;
                  var a = { start: i.start, end: i.end };
                  if ((r.push(a), !(a = this._decodePayload(a, n, r))))
                    return null;
                  if (!(a = this._findEnd(a.end, !1))) return null;
                  if ((r.push(a), !this._checksum(n))) return null;
                  if (this.supplements.length > 0) {
                    var u = this._decodeExtensions(a.end);
                    if (!u) return null;
                    if (!u.decodedCodes) return null;
                    var c = u.decodedCodes[u.decodedCodes.length - 1],
                      s = {
                        start: c.start + (((c.end - c.start) / 2) | 0),
                        end: c.end,
                      };
                    if (!this._verifyTrailingWhitespace(s)) return null;
                    o = { supplement: u, code: n.join("") + u.code };
                  }
                  return ft(
                    ft(
                      {
                        code: n.join(""),
                        start: i.start,
                        end: a.end,
                        startInfo: i,
                        decodedCodes: r,
                      },
                      o
                    ),
                    {},
                    { format: this.FORMAT }
                  );
                },
              },
            ]),
            n
          );
        })(k);
      function xt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var mt = (function (t) {
        b()(n, t);
        var e = xt(n);
        function n() {
          var t;
          p()(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(o))),
            E()(m()(t), "FORMAT", "ean_2"),
            t
          );
        }
        return (
          g()(n, [
            {
              key: "decode",
              value: function (t, e) {
                t && (this._row = t);
                var n = 0,
                  r = e,
                  o = this._row.length,
                  i = [],
                  a = [],
                  u = null;
                if (void 0 === r) return null;
                for (var c = 0; c < 2 && r < o; c++) {
                  if (!(u = this._decodeCode(r))) return null;
                  a.push(u),
                    i.push(u.code % 10),
                    u.code >= 10 && (n |= 1 << (1 - c)),
                    1 !== c &&
                      ((r = this._nextSet(this._row, u.end)),
                      (r = this._nextUnset(this._row, r)));
                }
                if (2 !== i.length || parseInt(i.join("")) % 4 !== n)
                  return null;
                var s = this._findStart();
                return {
                  code: i.join(""),
                  decodedCodes: a,
                  end: u.end,
                  format: this.FORMAT,
                  startInfo: s,
                  start: s.start,
                };
              },
            },
          ]),
          n
        );
      })(gt);
      function _t(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var bt = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
      var wt = (function (t) {
        b()(n, t);
        var e = _t(n);
        function n() {
          var t;
          p()(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(o))),
            E()(m()(t), "FORMAT", "ean_5"),
            t
          );
        }
        return (
          g()(n, [
            {
              key: "decode",
              value: function (t, e) {
                if (void 0 === e) return null;
                t && (this._row = t);
                for (
                  var n = 0,
                    r = e,
                    o = this._row.length,
                    i = null,
                    a = [],
                    u = [],
                    c = 0;
                  c < 5 && r < o;
                  c++
                ) {
                  if (!(i = this._decodeCode(r))) return null;
                  u.push(i),
                    a.push(i.code % 10),
                    i.code >= 10 && (n |= 1 << (4 - c)),
                    4 !== c &&
                      ((r = this._nextSet(this._row, i.end)),
                      (r = this._nextUnset(this._row, r)));
                }
                if (5 !== a.length) return null;
                if (
                  (function (t) {
                    for (var e = t.length, n = 0, r = e - 2; r >= 0; r -= 2)
                      n += t[r];
                    n *= 3;
                    for (var o = e - 1; o >= 0; o -= 2) n += t[o];
                    return (n *= 3) % 10;
                  })(a) !==
                  (function (t) {
                    for (var e = 0; e < 10; e++) if (t === bt[e]) return e;
                    return null;
                  })(n)
                )
                  return null;
                var s = this._findStart();
                return {
                  code: a.join(""),
                  decodedCodes: u,
                  end: i.end,
                  format: this.FORMAT,
                  startInfo: s,
                  start: s.start,
                };
              },
            },
          ]),
          n
        );
      })(gt);
      function Ot(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var Rt = (function (t) {
        b()(n, t);
        var e = Ot(n);
        function n() {
          var t;
          p()(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(o))),
            E()(m()(t), "FORMAT", "ean_8"),
            t
          );
        }
        return (
          g()(n, [
            {
              key: "_decodePayload",
              value: function (t, e, n) {
                for (var r = t, o = 0; o < 4; o++) {
                  if (!(r = this._decodeCode(r.end, 10))) return null;
                  e.push(r.code), n.push(r);
                }
                if (null === (r = this._findPattern(ht, r.end, !0, !1)))
                  return null;
                n.push(r);
                for (var i = 0; i < 4; i++) {
                  if (!(r = this._decodeCode(r.end, 10))) return null;
                  n.push(r), e.push(r.code);
                }
                return r;
              },
            },
          ]),
          n
        );
      })(gt);
      function Mt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var Ct = (function (t) {
        b()(n, t);
        var e = Mt(n);
        function n(t) {
          var r;
          return (
            p()(this, n),
            (r = e.call(this, u()({ normalizeBarSpaceWidth: !1 }, t))),
            E()(m()(r), "barSpaceRatio", [1, 1]),
            E()(m()(r), "SINGLE_CODE_ERROR", 0.78),
            E()(m()(r), "AVG_CODE_ERROR", 0.38),
            E()(m()(r), "START_PATTERN", [1, 1, 1, 1]),
            E()(m()(r), "STOP_PATTERN", [1, 1, 3]),
            E()(m()(r), "CODE_PATTERN", [
              [1, 1, 3, 3, 1],
              [3, 1, 1, 1, 3],
              [1, 3, 1, 1, 3],
              [3, 3, 1, 1, 1],
              [1, 1, 3, 1, 3],
              [3, 1, 3, 1, 1],
              [1, 3, 3, 1, 1],
              [1, 1, 1, 3, 3],
              [3, 1, 1, 3, 1],
              [1, 3, 1, 3, 1],
            ]),
            E()(m()(r), "MAX_CORRECTION_FACTOR", 5),
            E()(m()(r), "FORMAT", "i2of5"),
            t.normalizeBarSpaceWidth &&
              ((r.SINGLE_CODE_ERROR = 0.38), (r.AVG_CODE_ERROR = 0.09)),
            (r.config = t),
            O()(r, m()(r))
          );
        }
        return (
          g()(n, [
            {
              key: "_matchPattern",
              value: function (t, e) {
                if (this.config.normalizeBarSpaceWidth) {
                  for (
                    var r = [0, 0],
                      o = [0, 0],
                      i = [0, 0],
                      a = this.MAX_CORRECTION_FACTOR,
                      u = 1 / a,
                      c = 0;
                    c < t.length;
                    c++
                  )
                    (r[c % 2] += t[c]), (o[c % 2] += e[c]);
                  (i[0] = o[0] / r[0]),
                    (i[1] = o[1] / r[1]),
                    (i[0] = Math.max(Math.min(i[0], a), u)),
                    (i[1] = Math.max(Math.min(i[1], a), u)),
                    (this.barSpaceRatio = i);
                  for (var s = 0; s < t.length; s++)
                    t[s] *= this.barSpaceRatio[s % 2];
                }
                return G()(M()(n.prototype), "_matchPattern", this).call(
                  this,
                  t,
                  e
                );
              },
            },
            {
              key: "_findPattern",
              value: function (t, e) {
                var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                  o = new Array(t.length).fill(0),
                  i = 0,
                  a = { error: Number.MAX_VALUE, start: 0, end: 0 },
                  u = this.AVG_CODE_ERROR;
                (n = n || !1),
                  (r = r || !1),
                  e || (e = this._nextSet(this._row));
                for (var c = e; c < this._row.length; c++)
                  if (this._row[c] ^ (n ? 1 : 0)) o[i]++;
                  else {
                    if (i === o.length - 1) {
                      var s = o.reduce(function (t, e) {
                          return t + e;
                        }, 0),
                        f = this._matchPattern(o, t);
                      if (f < u)
                        return (a.error = f), (a.start = c - s), (a.end = c), a;
                      if (!r) return null;
                      for (var l = 0; l < o.length - 2; l++) o[l] = o[l + 2];
                      (o[o.length - 2] = 0), (o[o.length - 1] = 0), i--;
                    } else i++;
                    (o[i] = 1), (n = !n);
                  }
                return null;
              },
            },
            {
              key: "_findStart",
              value: function () {
                for (
                  var t = 0, e = this._nextSet(this._row), n = null, r = 1;
                  !n;

                ) {
                  if (!(n = this._findPattern(this.START_PATTERN, e, !1, !0)))
                    return null;
                  if (
                    ((r = Math.floor((n.end - n.start) / 4)),
                    (t = n.start - 10 * r) >= 0 &&
                      this._matchRange(t, n.start, 0))
                  )
                    return n;
                  (e = n.end), (n = null);
                }
                return null;
              },
            },
            {
              key: "_verifyTrailingWhitespace",
              value: function (t) {
                var e = t.end + (t.end - t.start) / 2;
                return e < this._row.length && this._matchRange(t.end, e, 0)
                  ? t
                  : null;
              },
            },
            {
              key: "_findEnd",
              value: function () {
                this._row.reverse();
                var t = this._findPattern(this.STOP_PATTERN);
                if ((this._row.reverse(), null === t)) return null;
                var e = t.start;
                return (
                  (t.start = this._row.length - t.end),
                  (t.end = this._row.length - e),
                  null !== t ? this._verifyTrailingWhitespace(t) : null
                );
              },
            },
            {
              key: "_decodePair",
              value: function (t) {
                for (var e = [], n = 0; n < t.length; n++) {
                  var r = this._decodeCode(t[n]);
                  if (!r) return null;
                  e.push(r);
                }
                return e;
              },
            },
            {
              key: "_decodeCode",
              value: function (t) {
                for (
                  var e = this.AVG_CODE_ERROR,
                    n = { error: Number.MAX_VALUE, code: -1, start: 0, end: 0 },
                    r = 0;
                  r < this.CODE_PATTERN.length;
                  r++
                ) {
                  var o = this._matchPattern(t, this.CODE_PATTERN[r]);
                  o < n.error && ((n.code = r), (n.error = o));
                }
                return n.error < e ? n : null;
              },
            },
            {
              key: "_decodePayload",
              value: function (t, e, n) {
                for (
                  var r = 0,
                    o = t.length,
                    i = [
                      [0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0],
                    ],
                    a = null;
                  r < o;

                ) {
                  for (var u = 0; u < 5; u++)
                    (i[0][u] = t[r] * this.barSpaceRatio[0]),
                      (i[1][u] = t[r + 1] * this.barSpaceRatio[1]),
                      (r += 2);
                  if (!(a = this._decodePair(i))) return null;
                  for (var c = 0; c < a.length; c++)
                    e.push(a[c].code + ""), n.push(a[c]);
                }
                return a;
              },
            },
            {
              key: "_verifyCounterLength",
              value: function (t) {
                return t.length % 10 == 0;
              },
            },
            {
              key: "decode",
              value: function (t, e) {
                var n = new Array(),
                  r = new Array(),
                  o = this._findStart();
                if (!o) return null;
                r.push(o);
                var i = this._findEnd();
                if (!i) return null;
                var a = this._fillCounters(o.end, i.start, !1);
                return this._verifyCounterLength(a) &&
                  this._decodePayload(a, n, r)
                  ? n.length % 2 != 0 || n.length < 6
                    ? null
                    : (r.push(i),
                      {
                        code: n.join(""),
                        start: o.start,
                        end: i.end,
                        startInfo: o,
                        decodedCodes: r,
                        format: this.FORMAT,
                      })
                  : null;
              },
            },
          ]),
          n
        );
      })(k);
      function Et(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function At(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var St = (function (t) {
        b()(n, t);
        var e = At(n);
        function n() {
          var t;
          p()(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(o))),
            E()(m()(t), "CODE_FREQUENCY", [
              [56, 52, 50, 49, 44, 38, 35, 42, 41, 37],
              [7, 11, 13, 14, 19, 25, 28, 21, 22, 26],
            ]),
            E()(m()(t), "STOP_PATTERN", [
              (1 / 6) * 7,
              (1 / 6) * 7,
              (1 / 6) * 7,
              (1 / 6) * 7,
              (1 / 6) * 7,
              (1 / 6) * 7,
            ]),
            E()(m()(t), "FORMAT", "upc_e"),
            t
          );
        }
        return (
          g()(n, [
            {
              key: "_decodePayload",
              value: function (t, e, n) {
                for (
                  var r = (function (t) {
                      for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2
                          ? Et(Object(n), !0).forEach(function (e) {
                              E()(t, e, n[e]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              t,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : Et(Object(n)).forEach(function (e) {
                              Object.defineProperty(
                                t,
                                e,
                                Object.getOwnPropertyDescriptor(n, e)
                              );
                            });
                      }
                      return t;
                    })({}, t),
                    o = 0,
                    i = 0;
                  i < 6;
                  i++
                ) {
                  if (!(r = this._decodeCode(r.end))) return null;
                  r.code >= 10 && ((r.code = r.code - 10), (o |= 1 << (5 - i))),
                    e.push(r.code),
                    n.push(r);
                }
                return this._determineParity(o, e) ? r : null;
              },
            },
            {
              key: "_determineParity",
              value: function (t, e) {
                for (var n = 0; n < this.CODE_FREQUENCY.length; n++)
                  for (var r = 0; r < this.CODE_FREQUENCY[n].length; r++)
                    if (t === this.CODE_FREQUENCY[n][r])
                      return e.unshift(n), e.push(r), !0;
                return !1;
              },
            },
            {
              key: "_convertToUPCA",
              value: function (t) {
                var e = [t[0]],
                  n = t[t.length - 2];
                return (
                  (e =
                    n <= 2
                      ? e
                          .concat(t.slice(1, 3))
                          .concat([n, 0, 0, 0, 0])
                          .concat(t.slice(3, 6))
                      : 3 === n
                      ? e
                          .concat(t.slice(1, 4))
                          .concat([0, 0, 0, 0, 0])
                          .concat(t.slice(4, 6))
                      : 4 === n
                      ? e.concat(t.slice(1, 5)).concat([0, 0, 0, 0, 0, t[5]])
                      : e.concat(t.slice(1, 6)).concat([0, 0, 0, 0, n])).push(
                    t[t.length - 1]
                  ),
                  e
                );
              },
            },
            {
              key: "_checksum",
              value: function (t) {
                return G()(M()(n.prototype), "_checksum", this).call(
                  this,
                  this._convertToUPCA(t)
                );
              },
            },
            {
              key: "_findEnd",
              value: function (t, e) {
                return G()(M()(n.prototype), "_findEnd", this).call(
                  this,
                  t,
                  !0
                );
              },
            },
            {
              key: "_verifyTrailingWhitespace",
              value: function (t) {
                var e = t.end + (t.end - t.start) / 2;
                return e < this._row.length && this._matchRange(t.end, e, 0)
                  ? t
                  : null;
              },
            },
          ]),
          n
        );
      })(gt);
      function kt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var Pt = (function (t) {
          b()(n, t);
          var e = kt(n);
          function n() {
            var t;
            p()(this, n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              (t = e.call.apply(e, [this].concat(o))),
              E()(m()(t), "FORMAT", "upc_a"),
              t
            );
          }
          return (
            g()(n, [
              {
                key: "decode",
                value: function (t, e) {
                  var n = gt.prototype.decode.call(this);
                  return n &&
                    n.code &&
                    13 === n.code.length &&
                    "0" === n.code.charAt(0)
                    ? ((n.code = n.code.substring(1)), n)
                    : null;
                },
              },
            ]),
            n
          );
        })(gt),
        Tt = {},
        Dt = { UP: 1, DOWN: -1 };
      (Tt.getBarcodeLine = function (t, e, n) {
        var r,
          o,
          i,
          a,
          u,
          c = 0 | e.x,
          s = 0 | e.y,
          f = 0 | n.x,
          l = 0 | n.y,
          d = Math.abs(l - s) > Math.abs(f - c),
          h = [],
          v = t.data,
          p = t.size.x,
          y = 255,
          g = 0;
        function x(t, e) {
          (u = v[e * p + t]),
            (y = u < y ? u : y),
            (g = u > g ? u : g),
            h.push(u);
        }
        d && ((i = c), (c = s), (s = i), (i = f), (f = l), (l = i)),
          c > f && ((i = c), (c = f), (f = i), (i = s), (s = l), (l = i));
        var m = f - c,
          _ = Math.abs(l - s);
        (r = (m / 2) | 0), (o = s);
        var b = s < l ? 1 : -1;
        for (a = c; a < f; a++)
          d ? x(o, a) : x(a, o), (r -= _) < 0 && ((o += b), (r += m));
        return { line: h, min: y, max: g };
      }),
        (Tt.toBinaryLine = function (t) {
          var e,
            n,
            r,
            o,
            i,
            a,
            u = t.min,
            c = t.max,
            s = t.line,
            f = u + (c - u) / 2,
            l = [],
            d = (c - u) / 12,
            h = -d;
          for (
            r = s[0] > f ? Dt.UP : Dt.DOWN,
              l.push({ pos: 0, val: s[0] }),
              i = 0;
            i < s.length - 2;
            i++
          )
            r !==
              (o =
                (e = s[i + 1] - s[i]) + (n = s[i + 2] - s[i + 1]) < h &&
                s[i + 1] < 1.5 * f
                  ? Dt.DOWN
                  : e + n > d && s[i + 1] > 0.5 * f
                  ? Dt.UP
                  : r) && (l.push({ pos: i, val: s[i] }), (r = o));
          for (
            l.push({ pos: s.length, val: s[s.length - 1] }), a = l[0].pos;
            a < l[1].pos;
            a++
          )
            s[a] = s[a] > f ? 0 : 1;
          for (i = 1; i < l.length - 1; i++)
            for (
              d =
                l[i + 1].val > l[i].val
                  ? (l[i].val + ((l[i + 1].val - l[i].val) / 3) * 2) | 0
                  : (l[i + 1].val + (l[i].val - l[i + 1].val) / 3) | 0,
                a = l[i].pos;
              a < l[i + 1].pos;
              a++
            )
              s[a] = s[a] > d ? 0 : 1;
          return { line: s, threshold: d };
        }),
        (Tt.debug = {
          printFrequency: function (t, e) {
            var n,
              r = e.getContext("2d");
            for (
              e.width = t.length,
                e.height = 256,
                r.beginPath(),
                r.strokeStyle = "blue",
                n = 0;
              n < t.length;
              n++
            )
              r.moveTo(n, 255), r.lineTo(n, 255 - t[n]);
            r.stroke(), r.closePath();
          },
          printPattern: function (t, e) {
            var n,
              r = e.getContext("2d");
            for (
              e.width = t.length, r.fillColor = "black", n = 0;
              n < t.length;
              n++
            )
              1 === t[n] && r.fillRect(n, 0, 1, 100);
          },
        });
      var jt = Tt;
      function It(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return zt(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return zt(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function zt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var Ut = {
          code_128_reader: q,
          ean_reader: gt,
          ean_5_reader: wt,
          ean_2_reader: mt,
          ean_8_reader: Rt,
          code_39_reader: Z,
          code_39_vin_reader: ot,
          codabar_reader: B,
          upc_reader: Pt,
          upc_e_reader: St,
          i2of5_reader: Ct,
          "2of5_reader": z,
          code_93_reader: ct,
          code_32_reader: tt,
        },
        Lt = {
          registerReader: function (t, e) {
            Ut[t] = e;
          },
          create: function (t, e) {
            var n = { frequency: null, pattern: null, overlay: null },
              r = [];
            function o() {
              t.readers.forEach(function (t) {
                var e,
                  n = {},
                  o = [];
                "object" === i()(t)
                  ? ((e = t.format), (n = t.config))
                  : "string" == typeof t && (e = t),
                  n.supplements &&
                    (o = n.supplements.map(function (t) {
                      return new Ut[t]();
                    }));
                try {
                  var a = new Ut[e](n, o);
                  r.push(a);
                } catch (t) {
                  throw (
                    (console.error("* Error constructing reader ", e, t), t)
                  );
                }
              });
            }
            function a(t) {
              var n,
                o = null,
                i = jt.getBarcodeLine(e, t[0], t[1]);
              for (jt.toBinaryLine(i), n = 0; n < r.length && null === o; n++)
                o = r[n].decodePattern(i.line);
              return null === o ? null : { codeResult: o, barcodeLine: i };
            }
            function u(t) {
              return c.apply(this, arguments);
            }
            function c() {
              return (c = f()(
                d.a.mark(function t(e) {
                  var n, o, i, a;
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (n = null), (o = It(r)), (t.prev = 2), o.s();
                          case 4:
                            if ((i = o.n()).done) {
                              t.next = 14;
                              break;
                            }
                            if (!(a = i.value).decodeImage) {
                              t.next = 12;
                              break;
                            }
                            return (t.next = 9), a.decodeImage(e);
                          case 9:
                            if (!(n = t.sent)) {
                              t.next = 12;
                              break;
                            }
                            return t.abrupt("break", 14);
                          case 12:
                            t.next = 4;
                            break;
                          case 14:
                            t.next = 19;
                            break;
                          case 16:
                            (t.prev = 16), (t.t0 = t.catch(2)), o.e(t.t0);
                          case 19:
                            return (t.prev = 19), o.f(), t.finish(19);
                          case 22:
                            return t.abrupt("return", n);
                          case 23:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 16, 19, 22]]
                  );
                })
              )).apply(this, arguments);
            }
            function s(t) {
              var r, o;
              n.overlay;
              var i = (function (t) {
                  return Math.sqrt(
                    Math.pow(Math.abs(t[1].y - t[0].y), 2) +
                      Math.pow(Math.abs(t[1].x - t[0].x), 2)
                  );
                })(
                  (r = (function (t) {
                    return [
                      {
                        x: (t[1][0] - t[0][0]) / 2 + t[0][0],
                        y: (t[1][1] - t[0][1]) / 2 + t[0][1],
                      },
                      {
                        x: (t[3][0] - t[2][0]) / 2 + t[2][0],
                        y: (t[3][1] - t[2][1]) / 2 + t[2][1],
                      },
                    ];
                  })(t))
                ),
                u = Math.atan2(r[1].y - r[0].y, r[1].x - r[0].x);
              return null ===
                (r = (function (t, n, r) {
                  function o(e) {
                    var r = e * Math.sin(n),
                      o = e * Math.cos(n);
                    (t[0].y -= r), (t[0].x -= o), (t[1].y += r), (t[1].x += o);
                  }
                  for (
                    o(r);
                    r > 1 &&
                    (!e.inImageWithBorder(t[0]) || !e.inImageWithBorder(t[1]));

                  )
                    o(-(r -= Math.ceil(r / 2)));
                  return t;
                })(r, u, Math.floor(0.1 * i)))
                ? null
                : (null === (o = a(r)) &&
                    (o = (function (t, e, n) {
                      var r,
                        o,
                        i,
                        u = Math.sqrt(
                          Math.pow(t[1][0] - t[0][0], 2) +
                            Math.pow(t[1][1] - t[0][1], 2)
                        ),
                        c = null,
                        s = Math.sin(n),
                        f = Math.cos(n);
                      for (r = 1; r < 16 && null === c; r++)
                        (i = {
                          y: (o = (u / 16) * r * (r % 2 == 0 ? -1 : 1)) * s,
                          x: o * f,
                        }),
                          (e[0].y += i.x),
                          (e[0].x -= i.y),
                          (e[1].y += i.x),
                          (e[1].x -= i.y),
                          (c = a(e));
                      return c;
                    })(t, r, u)),
                  null === o
                    ? null
                    : {
                        codeResult: o.codeResult,
                        line: r,
                        angle: u,
                        pattern: o.barcodeLine.line,
                        threshold: o.barcodeLine.threshold,
                      });
            }
            return (
              o(),
              {
                decodeFromBoundingBox: function (t) {
                  return s(t);
                },
                decodeFromBoundingBoxes: function (e) {
                  var n,
                    r,
                    o = [],
                    i = t.multiple;
                  for (n = 0; n < e.length; n++) {
                    var a = e[n];
                    if ((((r = s(a) || {}).box = a), i)) o.push(r);
                    else if (r.codeResult) return r;
                  }
                  return { barcodes: o };
                },
                decodeFromImage: function (t) {
                  return f()(
                    d.a.mark(function e() {
                      var n;
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), u(t);
                            case 2:
                              return (n = e.sent), e.abrupt("return", n);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )();
                },
                registerReader: function (t, e) {
                  if (Ut[t])
                    throw new Error("cannot register existing reader", t);
                  Ut[t] = e;
                },
                setReaders: function (e) {
                  (t.readers = e), (r.length = 0), o();
                },
              }
            );
          },
        },
        Nt = (function () {
          var t = {};
          function e(e) {
            return t[e] || (t[e] = { subscribers: [] }), t[e];
          }
          function n(t, e) {
            t.async
              ? setTimeout(function () {
                  t.callback(e);
                }, 4)
              : t.callback(e);
          }
          function r(t, n, r) {
            var o;
            if ("function" == typeof n) o = { callback: n, async: r };
            else if (!(o = n).callback)
              throw new Error("Callback was not specified on options");
            e(t).subscribers.push(o);
          }
          return {
            subscribe: function (t, e, n) {
              return r(t, e, n);
            },
            publish: function (t, r) {
              var o = e(t),
                i = o.subscribers;
              i
                .filter(function (t) {
                  return !!t.once;
                })
                .forEach(function (t) {
                  n(t, r);
                }),
                (o.subscribers = i.filter(function (t) {
                  return !t.once;
                })),
                o.subscribers.forEach(function (t) {
                  n(t, r);
                });
            },
            once: function (t, e) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              r(t, { callback: e, async: n, once: !0 });
            },
            unsubscribe: function (n, r) {
              if (n) {
                var o = e(n);
                o.subscribers =
                  o && r
                    ? o.subscribers.filter(function (t) {
                        return t.callback !== r;
                      })
                    : [];
              } else t = {};
            },
          };
        })(),
        Ft = n(63),
        Bt = n.n(Ft),
        Wt = n(64);
      function qt(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = M()(t);
          if (e) {
            var o = M()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O()(this, n);
        };
      }
      var Vt,
        Gt = (function (t) {
          b()(n, t);
          var e = qt(n);
          function n(t, r) {
            var o;
            return (
              p()(this, n),
              (o = e.call(this, t)),
              E()(m()(o), "code", void 0),
              (o.code = r),
              Object.setPrototypeOf(m()(o), n.prototype),
              o
            );
          }
          return g()(n);
        })(n.n(Wt)()(Error)),
        Ht =
          "This may mean that the user has declined camera access, or the browser does not support media APIs. If you are running in iOS, you must use Safari.";
      function Xt() {
        try {
          return navigator.mediaDevices.enumerateDevices();
        } catch (e) {
          var t = new Gt("enumerateDevices is not defined. ".concat(Ht), -1);
          return Promise.reject(t);
        }
      }
      function Qt(t) {
        try {
          return navigator.mediaDevices.getUserMedia(t);
        } catch (t) {
          var e = new Gt("getUserMedia is not defined. ".concat(Ht), -1);
          return Promise.reject(e);
        }
      }
      function Yt(t) {
        return new Promise(function (e, n) {
          var r = 10;
          !(function o() {
            r > 0
              ? t.videoWidth > 10 && t.videoHeight > 10
                ? e()
                : window.setTimeout(o, 500)
              : n(
                  new Gt("Unable to play video stream. Is webcam working?", -1)
                ),
              r--;
          })();
        });
      }
      function $t(t, e) {
        return Zt.apply(this, arguments);
      }
      function Zt() {
        return (Zt = f()(
          d.a.mark(function t(e, n) {
            var r;
            return d.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Qt(n);
                  case 2:
                    if (((r = t.sent), (Vt = r), !e)) {
                      t.next = 11;
                      break;
                    }
                    return (
                      e.setAttribute("autoplay", "true"),
                      e.setAttribute("muted", "true"),
                      e.setAttribute("playsinline", "true"),
                      (e.srcObject = r),
                      e.addEventListener("loadedmetadata", function () {
                        e.play().catch(function (t) {
                          console.warn(
                            "* Error while trying to play video stream:",
                            t
                          );
                        });
                      }),
                      t.abrupt("return", Yt(e))
                    );
                  case 11:
                    return t.abrupt("return", Promise.resolve());
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function Kt(t) {
        var e = Bt()(t, [
          "width",
          "height",
          "facingMode",
          "aspectRatio",
          "deviceId",
        ]);
        return (
          void 0 !== t.minAspectRatio &&
            t.minAspectRatio > 0 &&
            ((e.aspectRatio = t.minAspectRatio),
            console.log(
              "WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead"
            )),
          void 0 !== t.facing &&
            ((e.facingMode = t.facing),
            console.log(
              "WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'"
            )),
          e
        );
      }
      function Jt() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = Kt(t);
        return (
          e && e.deviceId && e.facingMode && delete e.facingMode,
          Promise.resolve({ audio: !1, video: e })
        );
      }
      function te() {
        return (te = f()(
          d.a.mark(function t() {
            var e;
            return d.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), Xt();
                  case 2:
                    return (
                      (e = t.sent),
                      t.abrupt(
                        "return",
                        e.filter(function (t) {
                          return "videoinput" === t.kind;
                        })
                      )
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function ee() {
        if (!Vt) return null;
        var t = Vt.getVideoTracks();
        return t && null != t && t.length ? t[0] : null;
      }
      var ne = {
          requestedVideoElement: null,
          request: function (t, e) {
            return f()(
              d.a.mark(function n() {
                var r;
                return d.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (ne.requestedVideoElement = t), (n.next = 3), Jt(e)
                        );
                      case 3:
                        return (r = n.sent), n.abrupt("return", $t(t, r));
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          release: function () {
            var t = Vt && Vt.getVideoTracks();
            return (
              null !== ne.requestedVideoElement &&
                ne.requestedVideoElement.pause(),
              new Promise(function (e) {
                setTimeout(function () {
                  t &&
                    t.length &&
                    t.forEach(function (t) {
                      return t.stop();
                    }),
                    (Vt = null),
                    (ne.requestedVideoElement = null),
                    e();
                }, 0);
              })
            );
          },
          enumerateVideoDevices: function () {
            return te.apply(this, arguments);
          },
          getActiveStreamLabel: function () {
            var t = ee();
            return t ? t.label : "";
          },
          getActiveTrack: ee,
          disableTorch: function () {
            return f()(
              d.a.mark(function t() {
                var e;
                return d.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(e = ee())) {
                            t.next = 11;
                            break;
                          }
                          return (
                            (t.prev = 2),
                            (t.next = 5),
                            e.applyConstraints({ advanced: [{ torch: !1 }] })
                          );
                        case 5:
                          t.next = 11;
                          break;
                        case 7:
                          throw (
                            ((t.prev = 7),
                            (t.t0 = t.catch(2)),
                            t.t0 instanceof OverconstrainedError &&
                              console.warn(
                                "quagga2/CameraAccess: Torch not supported on this device"
                              ),
                            t.t0)
                          );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 7]]
                );
              })
            )();
          },
          enableTorch: function () {
            return f()(
              d.a.mark(function t() {
                var e;
                return d.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!(e = ee())) {
                            t.next = 11;
                            break;
                          }
                          return (
                            (t.prev = 2),
                            (t.next = 5),
                            e.applyConstraints({ advanced: [{ torch: !0 }] })
                          );
                        case 5:
                          t.next = 11;
                          break;
                        case 7:
                          throw (
                            ((t.prev = 7),
                            (t.t0 = t.catch(2)),
                            t.t0 instanceof OverconstrainedError &&
                              console.warn(
                                "quagga2/CameraAccess: Torch not supported on this device"
                              ),
                            t.t0)
                          );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[2, 7]]
                );
              })
            )();
          },
        },
        re = ne;
      var oe = {
          create: function (t) {
            var e,
              n = document.createElement("canvas"),
              r = n.getContext("2d", {
                willReadFrequently: !!t.willReadFrequently,
              }),
              o = [],
              i = null !== (e = t.capacity) && void 0 !== e ? e : 20,
              a = !0 === t.capture;
            function u(e) {
              return (
                !!i &&
                e &&
                !(function (t, e) {
                  return (
                    e &&
                    e.some(function (e) {
                      return Object.keys(e).every(function (n) {
                        return e[n] === t[n];
                      });
                    })
                  );
                })(e, t.blacklist) &&
                (function (t, e) {
                  return "function" != typeof e || e(t);
                })(e, t.filter)
              );
            }
            return {
              addResult: function (t, e, c) {
                var s = {};
                u(c) &&
                  (i--,
                  (s.codeResult = c),
                  a &&
                    ((n.width = e.x),
                    (n.height = e.y),
                    h.a.drawImage(t, e, r),
                    (s.frame = n.toDataURL())),
                  o.push(s));
              },
              getResults: function () {
                return o;
              },
            };
          },
        },
        ie = {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            constraints: { width: 640, height: 480, facingMode: "environment" },
            area: { top: "0%", right: "0%", left: "0%", bottom: "0%" },
            singleChannel: !1,
          },
          locate: !0,
          numOfWorkers: 4,
          decoder: { readers: ["code_128_reader"] },
          locator: { halfSample: !0, patchSize: "medium" },
        },
        ae = n(5),
        ue = n(10),
        ce = Math.PI / 180;
      var se = {
          create: function (t, e) {
            var n,
              r = {},
              o = t.getConfig(),
              i =
                (Object(ue.h)(t.getRealWidth(), t.getRealHeight()),
                t.getCanvasSize()),
              a = Object(ue.h)(t.getWidth(), t.getHeight()),
              u = t.getTopRight(),
              c = u.x,
              s = u.y,
              f = null,
              l = null,
              d = o.willReadFrequently;
            return (
              ((n = e || document.createElement("canvas")).width = i.x),
              (n.height = i.y),
              console.warn(
                "*** frame_grabber_browser: willReadFrequently=",
                d,
                "canvas=",
                n
              ),
              (f = n.getContext("2d", { willReadFrequently: !!d })),
              (l = new Uint8Array(a.x * a.y)),
              (r.attachData = function (t) {
                l = t;
              }),
              (r.getData = function () {
                return l;
              }),
              (r.grab = function () {
                var e,
                  r = o.halfSample,
                  u = t.getFrame(),
                  d = u,
                  h = 0;
                if (d) {
                  if (
                    ((function (t, e) {
                      t.width !== e.x && (t.width = e.x),
                        t.height !== e.y && (t.height = e.y);
                    })(n, i),
                    "ImageStream" === o.type &&
                      ((d = u.img), u.tags && u.tags.orientation))
                  )
                    switch (u.tags.orientation) {
                      case 6:
                        h = 90 * ce;
                        break;
                      case 8:
                        h = -90 * ce;
                    }
                  return (
                    0 !== h
                      ? (f.translate(i.x / 2, i.y / 2),
                        f.rotate(h),
                        f.drawImage(d, -i.y / 2, -i.x / 2, i.y, i.x),
                        f.rotate(-h),
                        f.translate(-i.x / 2, -i.y / 2))
                      : f.drawImage(d, 0, 0, i.x, i.y),
                    (e = f.getImageData(c, s, a.x, a.y).data),
                    r ? Object(ue.e)(e, a, l) : Object(ue.c)(e, l, o),
                    !0
                  );
                }
                return !1;
              }),
              (r.getSize = function () {
                return a;
              }),
              r
            );
          },
        },
        fe = se,
        le = { 274: "orientation" },
        de = Object.keys(le).map(function (t) {
          return le[t];
        });
      function he(t) {
        return new Promise(function (e) {
          var n = new FileReader();
          (n.onload = function (t) {
            return e(t.target.result);
          }),
            n.readAsArrayBuffer(t);
        });
      }
      function ve(t) {
        return new Promise(function (e, n) {
          var r = new XMLHttpRequest();
          r.open("GET", t, !0),
            (r.responseType = "blob"),
            (r.onreadystatechange = function () {
              r.readyState !== XMLHttpRequest.DONE ||
                (200 !== r.status && 0 !== r.status) ||
                e(this.response);
            }),
            (r.onerror = n),
            r.send();
        });
      }
      function pe(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : de,
          n = new DataView(t),
          r = t.byteLength,
          o = e.reduce(function (t, e) {
            var n = Object.keys(le).filter(function (t) {
              return le[t] === e;
            })[0];
            return n && (t[n] = e), t;
          }, {}),
          i = 2;
        if (255 !== n.getUint8(0) || 216 !== n.getUint8(1)) return !1;
        for (; i < r; ) {
          if (255 !== n.getUint8(i)) return !1;
          if (225 === n.getUint8(i + 1)) return ye(n, i + 4, o);
          i += 2 + n.getUint16(i + 2);
        }
        return !1;
      }
      function ye(t, e, n) {
        if (
          "Exif" !==
          (function (t, e, n) {
            for (var r = "", o = e; o < e + n; o++)
              r += String.fromCharCode(t.getUint8(o));
            return r;
          })(t, e, 4)
        )
          return !1;
        var r,
          o = e + 6;
        if (18761 === t.getUint16(o)) r = !1;
        else {
          if (19789 !== t.getUint16(o)) return !1;
          r = !0;
        }
        if (42 !== t.getUint16(o + 2, !r)) return !1;
        var i = t.getUint32(o + 4, !r);
        return (
          !(i < 8) &&
          (function (t, e, n, r, o) {
            for (var i = t.getUint16(n, !o), a = {}, u = 0; u < i; u++) {
              var c = n + 12 * u + 2,
                s = r[t.getUint16(c, !o)];
              s && (a[s] = ge(t, c, e, n, o));
            }
            return a;
          })(t, o, o + i, n, r)
        );
      }
      function ge(t, e, n, r, o) {
        var i = t.getUint16(e + 2, !o),
          a = t.getUint32(e + 4, !o);
        switch (i) {
          case 3:
            if (1 === a) return t.getUint16(e + 8, !o);
        }
        return null;
      }
      var xe = {};
      function me(t, e) {
        t.onload = function () {
          e.loaded(this);
        };
      }
      xe.load = function (t, e, n, r, o) {
        var i,
          a,
          u,
          c = new Array(r),
          s = new Array(c.length);
        if (!1 === o) c[0] = t;
        else
          for (i = 0; i < c.length; i++)
            (u = n + i),
              (c[i] = ""
                .concat(t, "image-")
                .concat("00".concat(u).slice(-3), ".jpg"));
        for (
          s.notLoaded = [],
            s.addImage = function (t) {
              s.notLoaded.push(t);
            },
            s.loaded = function (n) {
              for (var r = s.notLoaded, i = 0; i < r.length; i++)
                if (r[i] === n) {
                  r.splice(i, 1);
                  for (var a = 0; a < c.length; a++) {
                    var u = c[a].substr(c[a].lastIndexOf("/"));
                    if (-1 !== n.src.lastIndexOf(u)) {
                      s[a] = { img: n };
                      break;
                    }
                  }
                  break;
                }
              0 === r.length &&
                (!1 === o
                  ? (function (t) {
                      var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : de;
                      return /^blob:/i.test(t)
                        ? ve(t)
                            .then(he)
                            .then(function (t) {
                              return pe(t, e);
                            })
                        : Promise.resolve(null);
                    })(t, ["orientation"])
                      .then(function (t) {
                        (s[0].tags = t), e(s);
                      })
                      .catch(function (t) {
                        console.log(t), e(s);
                      })
                  : e(s));
            },
            i = 0;
          i < c.length;
          i++
        )
          (a = new Image()), s.addImage(a), me(a, s), (a.src = c[i]);
      };
      var _e = xe,
        be = {
          createVideoStream: function (t) {
            console.warn("**** InputStreamBrowser createVideoStream");
            var e,
              n,
              r = null,
              o = ["canrecord", "ended"],
              i = {},
              a = { x: 0, y: 0, type: "Point" },
              u = { x: 0, y: 0, type: "XYSize" };
            var c = {
              getRealWidth: function () {
                return t.videoWidth;
              },
              getRealHeight: function () {
                return t.videoHeight;
              },
              getWidth: function () {
                return e;
              },
              getHeight: function () {
                return n;
              },
              setWidth: function (t) {
                e = t;
              },
              setHeight: function (t) {
                n = t;
              },
              setInputStream: function (t) {
                (r = t),
                  this.setAttribute("src", void 0 !== t.src ? t.src : "");
              },
              ended: function () {
                return t.ended;
              },
              getConfig: function () {
                return r;
              },
              setAttribute: function (e, n) {
                t && t.setAttribute(e, n);
              },
              pause: function () {
                t.pause();
              },
              play: function () {
                t.play();
              },
              setCurrentTime: function (t) {
                var e;
                "LiveStream" !==
                  (null === (e = r) || void 0 === e ? void 0 : e.type) &&
                  this.setAttribute("currentTime", t.toString());
              },
              addEventListener: function (e, n, r) {
                -1 !== o.indexOf(e)
                  ? (i[e] || (i[e] = []), i[e].push(n))
                  : t.addEventListener(e, n, r);
              },
              clearEventHandlers: function () {
                o.forEach(function (e) {
                  var n = i[e];
                  n &&
                    n.length > 0 &&
                    n.forEach(function (n) {
                      t.removeEventListener(e, n);
                    });
                });
              },
              trigger: function (o, a) {
                var s,
                  f,
                  l,
                  d,
                  h,
                  v = i[o];
                if (
                  ("canrecord" === o &&
                    ((d = t.videoWidth),
                    (h = t.videoHeight),
                    (e =
                      null !== (f = r) && void 0 !== f && f.size
                        ? d / h > 1
                          ? r.size
                          : Math.floor((d / h) * r.size)
                        : d),
                    (n =
                      null !== (l = r) && void 0 !== l && l.size
                        ? d / h > 1
                          ? Math.floor((h / d) * r.size)
                          : r.size
                        : h),
                    (u.x = e),
                    (u.y = n)),
                  v && v.length > 0)
                )
                  for (s = 0; s < v.length; s++) v[s].apply(c, a);
              },
              setTopRight: function (t) {
                (a.x = t.x), (a.y = t.y);
              },
              getTopRight: function () {
                return a;
              },
              setCanvasSize: function (t) {
                (u.x = t.x), (u.y = t.y);
              },
              getCanvasSize: function () {
                return u;
              },
              getFrame: function () {
                return t;
              },
            };
            return c;
          },
          createLiveStream: function (t) {
            console.warn("**** InputStreamBrowser createLiveStream"),
              t && t.setAttribute("autoplay", "true");
            var e = be.createVideoStream(t);
            return (
              (e.ended = function () {
                return !1;
              }),
              e
            );
          },
          createImageStream: function () {
            var t,
              e,
              n = null,
              r = 0,
              o = 0,
              i = 0,
              a = !0,
              u = !1,
              c = null,
              s = 0,
              f = null,
              l = !1,
              d = ["canrecord", "ended"],
              h = {},
              v = { x: 0, y: 0, type: "Point" },
              p = { x: 0, y: 0, type: "XYSize" };
            function y(t, e) {
              var n,
                r = h[t];
              if (r && r.length > 0)
                for (n = 0; n < r.length; n++) r[n].apply(g, e);
            }
            var g = {
              trigger: y,
              getWidth: function () {
                return t;
              },
              getHeight: function () {
                return e;
              },
              setWidth: function (e) {
                t = e;
              },
              setHeight: function (t) {
                e = t;
              },
              getRealWidth: function () {
                return r;
              },
              getRealHeight: function () {
                return o;
              },
              setInputStream: function (a) {
                var l;
                (n = a),
                  !1 === a.sequence
                    ? ((f = a.src), (s = 1))
                    : ((f = a.src), (s = a.length)),
                  (u = !1),
                  _e.load(
                    f,
                    function (a) {
                      var s, f;
                      if (((c = a), a[0].tags && a[0].tags.orientation))
                        switch (a[0].tags.orientation) {
                          case 6:
                          case 8:
                            (r = a[0].img.height), (o = a[0].img.width);
                            break;
                          default:
                            (r = a[0].img.width), (o = a[0].img.height);
                        }
                      else (r = a[0].img.width), (o = a[0].img.height);
                      (t =
                        null !== (s = n) && void 0 !== s && s.size
                          ? r / o > 1
                            ? n.size
                            : Math.floor((r / o) * n.size)
                          : r),
                        (e =
                          null !== (f = n) && void 0 !== f && f.size
                            ? r / o > 1
                              ? Math.floor((o / r) * n.size)
                              : n.size
                            : o),
                        (p.x = t),
                        (p.y = e),
                        (u = !0),
                        (i = 0),
                        setTimeout(function () {
                          y("canrecord", []);
                        }, 0);
                    },
                    1,
                    s,
                    null === (l = n) || void 0 === l ? void 0 : l.sequence
                  );
              },
              ended: function () {
                return l;
              },
              setAttribute: function () {},
              getConfig: function () {
                return n;
              },
              pause: function () {
                a = !0;
              },
              play: function () {
                a = !1;
              },
              setCurrentTime: function (t) {
                i = t;
              },
              addEventListener: function (t, e) {
                -1 !== d.indexOf(t) && (h[t] || (h[t] = []), h[t].push(e));
              },
              clearEventHandlers: function () {
                Object.keys(h).forEach(function (t) {
                  return delete h[t];
                });
              },
              setTopRight: function (t) {
                (v.x = t.x), (v.y = t.y);
              },
              getTopRight: function () {
                return v;
              },
              setCanvasSize: function (t) {
                (p.x = t.x), (p.y = t.y);
              },
              getCanvasSize: function () {
                return p;
              },
              getFrame: function () {
                var t, e;
                if (!u) return null;
                a ||
                  ((t = null === (e = c) || void 0 === e ? void 0 : e[i]),
                  i < s - 1
                    ? i++
                    : setTimeout(function () {
                        (l = !0), y("ended", []);
                      }, 0));
                return t;
              },
            };
            return g;
          },
        },
        we = be,
        Oe = n(23),
        Re = g()(function t() {
          p()(this, t),
            E()(this, "config", void 0),
            E()(this, "inputStream", void 0),
            E()(this, "framegrabber", void 0),
            E()(this, "inputImageWrapper", void 0),
            E()(this, "stopped", !1),
            E()(this, "boxSize", void 0),
            E()(this, "resultCollector", void 0),
            E()(this, "decoder", void 0),
            E()(this, "workerPool", []),
            E()(this, "onUIThread", !0),
            E()(this, "canvasContainer", new Ce());
        }),
        Me = g()(function t() {
          p()(this, t),
            E()(this, "image", void 0),
            E()(this, "overlay", void 0);
        }),
        Ce = g()(function t() {
          p()(this, t),
            E()(this, "ctx", void 0),
            E()(this, "dom", void 0),
            (this.ctx = new Me()),
            (this.dom = new Me());
        });
      function Ee(t) {
        if ("undefined" == typeof document) return null;
        if (t instanceof HTMLElement && t.nodeName && 1 === t.nodeType)
          return t;
        var e = "string" == typeof t ? t : "#interactive.viewport";
        return document.querySelector(e);
      }
      function Ae(t, e, n) {
        var r = (function (t, e) {
          var n = document.querySelector(t);
          return n || ((n = document.createElement("canvas")).className = e), n;
        })(t, e);
        console.warn("* initCanvas getCanvasAndContext");
        var o = r.getContext("2d", {
          willReadFrequently: n.willReadFrequently,
        });
        return { canvas: r, context: o };
      }
      function Se(t) {
        var e,
          n,
          r,
          o,
          i,
          a,
          u = Ee(
            null == t ||
              null === (e = t.config) ||
              void 0 === e ||
              null === (n = e.inputStream) ||
              void 0 === n
              ? void 0
              : n.target
          ),
          c =
            null == t ||
            null === (r = t.config) ||
            void 0 === r ||
            null === (o = r.inputStream) ||
            void 0 === o
              ? void 0
              : o.type;
        if (!c) return null;
        var s = (function (t, e) {
          var n = e.willReadFrequently;
          if ("undefined" != typeof document) {
            var r = Ae("canvas.imgBuffer", "imgBuffer", {
                willReadFrequently: n,
              }),
              o = Ae("canvas.drawingBuffer", "drawingBuffer", {
                willReadFrequently: n,
              });
            return (
              (r.canvas.width = o.canvas.width = t.x),
              (r.canvas.height = o.canvas.height = t.y),
              {
                dom: { image: r.canvas, overlay: o.canvas },
                ctx: { image: r.context, overlay: o.context },
              }
            );
          }
          return null;
        })(t.inputStream.getCanvasSize(), {
          willReadFrequently: !(
            null == t ||
            null === (i = t.config) ||
            void 0 === i ||
            null === (a = i.inputStream) ||
            void 0 === a ||
            !a.willReadFrequently
          ),
        });
        if (!s)
          return {
            dom: { image: null, overlay: null },
            ctx: { image: null, overlay: null },
          };
        var f = s.dom;
        return (
          "undefined" != typeof document &&
            u &&
            ("ImageStream" !== c ||
              u.contains(f.image) ||
              u.appendChild(f.image),
            u.contains(f.overlay) || u.appendChild(f.overlay)),
          s
        );
      }
      function ke(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Pe(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ke(Object(n), !0).forEach(function (e) {
                E()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      ae.a.setMatrixArrayType(Array);
      var Te = [];
      function De(t) {
        return Pe(
          Pe({}, t),
          {},
          { inputStream: Pe(Pe({}, t.inputStream), {}, { target: null }) }
        );
      }
      function je(t) {
        if (t) {
          var e = t().default;
          if (!e)
            return void self.postMessage({
              event: "error",
              message: "Quagga could not be created",
            });
        }
        var n;
        function r(t) {
          self.postMessage(
            { event: "processed", imageData: n.data, result: t },
            [n.data.buffer]
          );
        }
        function o() {
          self.postMessage({ event: "initialized", imageData: n.data }, [
            n.data.buffer,
          ]);
        }
        self.onmessage = function (t) {
          if ("init" === t.data.cmd) {
            var i = t.data.config;
            (i.numOfWorkers = 0),
              (n = new e.ImageWrapper(
                { x: t.data.size.x, y: t.data.size.y },
                new Uint8Array(t.data.imageData)
              )),
              e.init(i, o, n),
              e.onProcessed(r);
          } else
            "process" === t.data.cmd
              ? ((n.data = new Uint8Array(t.data.imageData)), e.start())
              : "setReaders" === t.data.cmd
              ? e.setReaders(t.data.readers)
              : "registerReader" === t.data.cmd &&
                e.registerReader(t.data.name, t.data.reader);
        };
      }
      function Ie(t, e, n) {
        var r,
          o,
          i =
            ("undefined" != typeof __factorySource__ && (o = __factorySource__),
            (r = new Blob(["(" + je.toString() + ")(" + o + ");"], {
              type: "text/javascript",
            })),
            window.URL.createObjectURL(r)),
          a = {
            worker: new Worker(i),
            imageData: new Uint8Array(e.getWidth() * e.getHeight()),
            busy: !0,
          };
        (a.worker.onmessage = function (t) {
          "initialized" === t.data.event
            ? (URL.revokeObjectURL(i),
              (a.busy = !1),
              (a.imageData = new Uint8Array(t.data.imageData)),
              n(a))
            : "processed" === t.data.event
            ? ((a.imageData = new Uint8Array(t.data.imageData)),
              (a.busy = !1),
              "undefined" != typeof publishResult &&
                publishResult(t.data.result, a.imageData))
            : t.data.event;
        }),
          a.worker.postMessage(
            {
              cmd: "init",
              size: { x: e.getWidth(), y: e.getHeight() },
              imageData: a.imageData,
              config: De(t),
            },
            [a.imageData.buffer]
          );
      }
      function ze(t, e, n, r) {
        var o = t - Te.length;
        if (0 === o && r) r();
        else if (o < 0) {
          Te.slice(o).forEach(function (t) {
            t.worker.terminate();
          }),
            (Te = Te.slice(0, o)),
            r && r();
        } else {
          var i = function (e) {
            Te.push(e), Te.length >= t && r && r();
          };
          if (e) for (var a = 0; a < o; a++) Ie(e, n, i);
        }
      }
      function Ue(t, e, n) {
        for (var r = t.length; r--; ) (t[r][0] += e), (t[r][1] += n);
      }
      ae.a.setMatrixArrayType(Array);
      var Le = (function () {
          function t() {
            var e = this;
            p()(this, t),
              E()(this, "context", new Re()),
              E()(this, "canRecord", function (t) {
                var n;
                e.context.config &&
                  (Oe.a.checkImageConstraints(
                    e.context.inputStream,
                    null === (n = e.context.config) || void 0 === n
                      ? void 0
                      : n.locator
                  ),
                  e.initCanvas(),
                  (e.context.framegrabber = fe.create(
                    e.context.inputStream,
                    e.context.canvasContainer.dom.image
                  )),
                  void 0 === e.context.config.numOfWorkers &&
                    (e.context.config.numOfWorkers = 0),
                  ze(
                    e.context.config.numOfWorkers,
                    e.context.config,
                    e.context.inputStream,
                    function () {
                      var n;
                      0 ===
                        (null === (n = e.context.config) || void 0 === n
                          ? void 0
                          : n.numOfWorkers) && e.initializeData(),
                        e.ready(t);
                    }
                  ));
              }),
              E()(this, "update", function () {
                if (e.context.onUIThread) {
                  var t,
                    n =
                      ((o = e.context.framegrabber),
                      Te.length
                        ? !!(i = Te.filter(function (t) {
                            return !t.busy;
                          })[0]) &&
                          (o.attachData(i.imageData),
                          o.grab() &&
                            ((i.busy = !0),
                            i.worker.postMessage(
                              { cmd: "process", imageData: i.imageData },
                              [i.imageData.buffer]
                            )),
                          !0)
                        : null);
                  if (!n)
                    e.context.framegrabber.attachData(
                      null === (t = e.context.inputImageWrapper) || void 0 === t
                        ? void 0
                        : t.data
                    ),
                      e.context.framegrabber.grab() &&
                        (n || e.locateAndDecode());
                } else {
                  var r;
                  e.context.framegrabber.attachData(
                    null === (r = e.context.inputImageWrapper) || void 0 === r
                      ? void 0
                      : r.data
                  ),
                    e.context.framegrabber.grab(),
                    e.locateAndDecode();
                }
                var o, i;
              });
          }
          var e, n;
          return (
            g()(t, [
              {
                key: "initBuffers",
                value: function (t) {
                  if (this.context.config) {
                    var e = (function (t, e, n) {
                        var r =
                            e ||
                            new c.a({
                              x: t.getWidth(),
                              y: t.getHeight(),
                              type: "XYSize",
                            }),
                          o = [
                            ae.c.clone([0, 0]),
                            ae.c.clone([0, r.size.y]),
                            ae.c.clone([r.size.x, r.size.y]),
                            ae.c.clone([r.size.x, 0]),
                          ];
                        return (
                          Oe.a.init(r, n), { inputImageWrapper: r, boxSize: o }
                        );
                      })(
                        this.context.inputStream,
                        t,
                        this.context.config.locator
                      ),
                      n = e.inputImageWrapper,
                      r = e.boxSize;
                    (this.context.inputImageWrapper = n),
                      (this.context.boxSize = r);
                  }
                },
              },
              {
                key: "initializeData",
                value: function (t) {
                  this.context.config &&
                    (this.initBuffers(t),
                    (this.context.decoder = Lt.create(
                      this.context.config.decoder,
                      this.context.inputImageWrapper
                    )));
                },
              },
              {
                key: "getViewPort",
                value: function () {
                  return this.context.config && this.context.config.inputStream
                    ? Ee(this.context.config.inputStream.target)
                    : null;
                },
              },
              {
                key: "ready",
                value: function (t) {
                  this.context.inputStream.play(), t();
                },
              },
              {
                key: "initCanvas",
                value: function () {
                  var t = Se(this.context);
                  if (t) {
                    var e = t.ctx,
                      n = t.dom;
                    (this.context.canvasContainer.dom.image = n.image),
                      (this.context.canvasContainer.dom.overlay = n.overlay),
                      (this.context.canvasContainer.ctx.image = e.image),
                      (this.context.canvasContainer.ctx.overlay = e.overlay);
                  }
                },
              },
              {
                key: "initInputStream",
                value: function (t) {
                  if (this.context.config && this.context.config.inputStream) {
                    var e = this.context.config.inputStream,
                      n = e.type,
                      r = e.constraints,
                      o = (function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "LiveStream",
                          e = arguments.length > 1 ? arguments[1] : void 0,
                          n = arguments.length > 2 ? arguments[2] : void 0;
                        switch (t) {
                          case "VideoStream":
                            var r = document.createElement("video");
                            return {
                              video: r,
                              inputStream: n.createVideoStream(r),
                            };
                          case "ImageStream":
                            return { inputStream: n.createImageStream() };
                          case "LiveStream":
                            var o = null;
                            return (
                              e &&
                                ((o = e.querySelector("video")) ||
                                  ((o = document.createElement("video")),
                                  e.appendChild(o))),
                              { video: o, inputStream: n.createLiveStream(o) }
                            );
                          default:
                            return (
                              console.error(
                                "* setupInputStream invalid type ".concat(t)
                              ),
                              { video: null, inputStream: null }
                            );
                        }
                      })(n, this.getViewPort(), we),
                      i = o.video,
                      a = o.inputStream;
                    "LiveStream" === n &&
                      i &&
                      re
                        .request(i, r)
                        .then(function () {
                          return a.trigger("canrecord");
                        })
                        .catch(function (e) {
                          return t(e);
                        }),
                      a &&
                        (a.setAttribute("preload", "auto"),
                        a.setInputStream(this.context.config.inputStream),
                        a.addEventListener(
                          "canrecord",
                          this.canRecord.bind(void 0, t)
                        )),
                      (this.context.inputStream = a);
                  }
                },
              },
              {
                key: "getBoundingBoxes",
                value: function () {
                  var t;
                  return null !== (t = this.context.config) &&
                    void 0 !== t &&
                    t.locate
                    ? Oe.a.locate()
                    : [
                        [
                          ae.c.clone(this.context.boxSize[0]),
                          ae.c.clone(this.context.boxSize[1]),
                          ae.c.clone(this.context.boxSize[2]),
                          ae.c.clone(this.context.boxSize[3]),
                        ],
                      ];
                },
              },
              {
                key: "transformResult",
                value: function (t) {
                  var e = this,
                    n = this.context.inputStream.getTopRight(),
                    r = n.x,
                    o = n.y;
                  if (
                    (0 !== r || 0 !== o) &&
                    (t.barcodes &&
                      t.barcodes.forEach(function (t) {
                        return e.transformResult(t);
                      }),
                    t.line &&
                      2 === t.line.length &&
                      (function (t, e, n) {
                        (t[0].x += e),
                          (t[0].y += n),
                          (t[1].x += e),
                          (t[1].y += n);
                      })(t.line, r, o),
                    t.box && Ue(t.box, r, o),
                    t.boxes && t.boxes.length > 0)
                  )
                    for (var i = 0; i < t.boxes.length; i++)
                      Ue(t.boxes[i], r, o);
                },
              },
              {
                key: "addResult",
                value: function (t, e) {
                  var n = this;
                  e &&
                    this.context.resultCollector &&
                    (t.barcodes
                      ? t.barcodes
                          .filter(function (t) {
                            return t.codeResult;
                          })
                          .forEach(function (t) {
                            return n.addResult(t, e);
                          })
                      : t.codeResult &&
                        this.context.resultCollector.addResult(
                          e,
                          this.context.inputStream.getCanvasSize(),
                          t.codeResult
                        ));
                },
              },
              {
                key: "hasCodeResult",
                value: function (t) {
                  return !(
                    !t ||
                    !(t.barcodes
                      ? t.barcodes.some(function (t) {
                          return t.codeResult;
                        })
                      : t.codeResult)
                  );
                },
              },
              {
                key: "publishResult",
                value: function () {
                  var t,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = e;
                  e &&
                    this.context.onUIThread &&
                    (this.transformResult(e),
                    this.addResult(e, n),
                    (r =
                      (null == e || null === (t = e.barcodes) || void 0 === t
                        ? void 0
                        : t.length) > 0
                        ? e.barcodes
                        : e));
                  Nt.publish("processed", r),
                    this.hasCodeResult(e) && Nt.publish("detected", r);
                },
              },
              {
                key: "locateAndDecode",
                value:
                  ((n = f()(
                    d.a.mark(function t() {
                      var e, n, r, o, i;
                      return d.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!(e = this.getBoundingBoxes())) {
                                  t.next = 12;
                                  break;
                                }
                                return (
                                  (t.next = 4),
                                  this.context.decoder.decodeFromBoundingBoxes(
                                    e
                                  )
                                );
                              case 4:
                                if (((t.t0 = t.sent), t.t0)) {
                                  t.next = 7;
                                  break;
                                }
                                t.t0 = {};
                              case 7:
                                ((r = t.t0).boxes = e),
                                  this.publishResult(
                                    r,
                                    null ===
                                      (n = this.context.inputImageWrapper) ||
                                      void 0 === n
                                      ? void 0
                                      : n.data
                                  ),
                                  (t.next = 16);
                                break;
                              case 12:
                                return (
                                  (t.next = 14),
                                  this.context.decoder.decodeFromImage(
                                    this.context.inputImageWrapper
                                  )
                                );
                              case 14:
                                (o = t.sent)
                                  ? this.publishResult(
                                      o,
                                      null ===
                                        (i = this.context.inputImageWrapper) ||
                                        void 0 === i
                                        ? void 0
                                        : i.data
                                    )
                                  : this.publishResult();
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "startContinuousUpdate",
                value: function () {
                  var t,
                    e = this,
                    n = null,
                    r =
                      1e3 /
                      ((null === (t = this.context.config) || void 0 === t
                        ? void 0
                        : t.frequency) || 60);
                  this.context.stopped = !1;
                  var o = this.context;
                  !(function t(i) {
                    (n = n || i),
                      o.stopped ||
                        (i >= n && ((n += r), e.update()),
                        window.requestAnimationFrame(t));
                  })(performance.now());
                },
              },
              {
                key: "start",
                value: function () {
                  var t, e;
                  this.context.onUIThread &&
                  "LiveStream" ===
                    (null === (t = this.context.config) ||
                    void 0 === t ||
                    null === (e = t.inputStream) ||
                    void 0 === e
                      ? void 0
                      : e.type)
                    ? this.startContinuousUpdate()
                    : this.update();
                },
              },
              {
                key: "stop",
                value:
                  ((e = f()(
                    d.a.mark(function t() {
                      var e;
                      return d.a.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  ((this.context.stopped = !0),
                                  ze(0),
                                  null === (e = this.context.config) ||
                                    void 0 === e ||
                                    !e.inputStream ||
                                    "LiveStream" !==
                                      this.context.config.inputStream.type)
                                ) {
                                  t.next = 6;
                                  break;
                                }
                                return (t.next = 5), re.release();
                              case 5:
                                this.context.inputStream.clearEventHandlers();
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return e.apply(this, arguments);
                  }),
              },
              {
                key: "setReaders",
                value: function (t) {
                  this.context.decoder && this.context.decoder.setReaders(t),
                    (function (t) {
                      Te.forEach(function (e) {
                        return e.worker.postMessage({
                          cmd: "setReaders",
                          readers: t,
                        });
                      });
                    })(t);
                },
              },
              {
                key: "registerReader",
                value: function (t, e) {
                  Lt.registerReader(t, e),
                    this.context.decoder &&
                      this.context.decoder.registerReader(t, e),
                    (function (t, e) {
                      Te.forEach(function (n) {
                        return n.worker.postMessage({
                          cmd: "registerReader",
                          name: t,
                          reader: e,
                        });
                      });
                    })(t, e);
                },
              },
            ]),
            t
          );
        })(),
        Ne = new Le(),
        Fe = Ne.context,
        Be = {
          init: function (t, e, n) {
            var r,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Ne;
            return (
              e ||
                (r = new Promise(function (t, n) {
                  e = function (e) {
                    e ? n(e) : t();
                  };
                })),
              (o.context.config = u()({}, ie, t)),
              o.context.config.numOfWorkers > 0 &&
                (o.context.config.numOfWorkers = 0),
              n
                ? ((o.context.onUIThread = !1), o.initializeData(n), e && e())
                : o.initInputStream(e),
              r
            );
          },
          start: function () {
            return Ne.start();
          },
          stop: function () {
            return Ne.stop();
          },
          pause: function () {
            Fe.stopped = !0;
          },
          onDetected: function (t) {
            t && ("function" == typeof t || ("object" === i()(t) && t.callback))
              ? Nt.subscribe("detected", t)
              : console.trace(
                  "* warning: Quagga.onDetected called with invalid callback, ignoring"
                );
          },
          offDetected: function (t) {
            Nt.unsubscribe("detected", t);
          },
          onProcessed: function (t) {
            t && ("function" == typeof t || ("object" === i()(t) && t.callback))
              ? Nt.subscribe("processed", t)
              : console.trace(
                  "* warning: Quagga.onProcessed called with invalid callback, ignoring"
                );
          },
          offProcessed: function (t) {
            Nt.unsubscribe("processed", t);
          },
          setReaders: function (t) {
            t
              ? Ne.setReaders(t)
              : console.trace(
                  "* warning: Quagga.setReaders called with no readers, ignoring"
                );
          },
          registerReader: function (t, e) {
            t
              ? e
                ? Ne.registerReader(t, e)
                : console.trace(
                    "* warning: Quagga.registerReader called with no reader, ignoring"
                  )
              : console.trace(
                  "* warning: Quagga.registerReader called with no name, ignoring"
                );
          },
          registerResultCollector: function (t) {
            t && "function" == typeof t.addResult && (Fe.resultCollector = t);
          },
          get canvas() {
            return Fe.canvasContainer;
          },
          decodeSingle: function (t, e) {
            var n = this,
              r = new Le();
            return (
              (t = u()(
                {
                  inputStream: {
                    type: "ImageStream",
                    sequence: !1,
                    size: 800,
                    src: t.src,
                  },
                  numOfWorkers: 1,
                  locator: { halfSample: !1 },
                },
                t
              )).numOfWorkers > 0 && (t.numOfWorkers = 0),
              t.numOfWorkers > 0 &&
                ("undefined" == typeof Blob || "undefined" == typeof Worker) &&
                (console.warn(
                  "* no Worker and/or Blob support - forcing numOfWorkers to 0"
                ),
                (t.numOfWorkers = 0)),
              new Promise(function (o, i) {
                try {
                  n.init(
                    t,
                    function () {
                      Nt.once(
                        "processed",
                        function (t) {
                          r.stop(), e && e.call(null, t), o(t);
                        },
                        !0
                      ),
                        r.start();
                    },
                    null,
                    r
                  );
                } catch (t) {
                  i(t);
                }
              })
            );
          },
          get default() {
            return Be;
          },
          Readers: r,
          CameraAccess: re,
          ImageDebug: h.a,
          ImageWrapper: c.a,
          ResultCollector: oe,
        };
      e.default = Be;
    },
  ]).default;
});
