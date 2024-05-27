/*!
* element-plus-schema-form v0.0.4 Mon May 27 2024 16:32:53 GMT+0300 (Восточная Европа, летнее время)
* (c) 2021
* Released under the MIT License.
*/
import { getCurrentScope, onScopeDispose, unref, getCurrentInstance, onMounted, nextTick, watch, ref, computed, defineComponent, openBlock, createElementBlock, createElementVNode, warn, inject, isRef, shallowRef, onBeforeUnmount, onBeforeMount, provide, mergeProps, renderSlot, toRef, onUnmounted, useAttrs as useAttrs$2, useSlots, createCommentVNode, Fragment, normalizeClass, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, normalizeStyle, Transition, withDirectives, vShow, reactive, onUpdated, cloneVNode, Text, Comment, Teleport, readonly, onDeactivated, renderList, createTextVNode, toRaw, vModelCheckbox, toRefs, vModelRadio, h as h$1, resolveComponent, onBeforeUpdate, withKeys, vModelText, watchEffect, resolveDirective, markRaw, isVNode, pushScopeId, popScopeId, createSlots } from "vue";
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++)
    t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return 1 == (null != (t2 = e2) && "object" == typeof t2 && false === Array.isArray(t2)) && "[object Object]" === Object.prototype.toString.call(e2);
  var t2;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return false !== o(e2) && "function" == typeof (t2 = e2.constructor) && false !== o(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf");
}, v = function(e2) {
  return e2;
}, y = v;
var d = function(e2, t2) {
  return f.call(e2, t2);
}, h = Number.isInteger || function(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
}, b = Array.isArray || function(e2) {
  return "[object Array]" === a.call(e2);
}, O = function(e2) {
  return "[object Function]" === a.call(e2);
}, g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
}, m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  void 0 === n2 && (n2 = false);
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && null !== r2.type) {
    if (void 0 === r2.type || true === r2.type)
      return i2;
    if (!r2.required && void 0 === t2)
      return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return true === _(e3, t2, true);
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = "Array" === (o2 = l(r2)) ? b(t2) : "Object" === o2 ? s(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
      if (null == e3)
        return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return false === n2 ? (y(a2), false) : a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, false === n2 ? (y(p), i2) : p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return void 0 !== e3 || this.default ? O(e3) || true === _(this, e3, true) ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2))
    return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = null !== (f2 = (a2 = v2).__original) && void 0 !== f2 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P$1(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
}, A = function() {
  return w("function", { type: Function });
}, E$1 = function() {
  return w("boolean", { type: Boolean });
}, N$1 = function() {
  return w("string", { type: String });
}, q$1 = function() {
  return w("number", { type: Number });
}, S = function() {
  return w("array", { type: Array });
}, V = function() {
  return w("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h(e2);
  } });
}, D = function() {
  return T("symbol", { validator: function(e2) {
    return "symbol" == typeof e2;
  } });
};
function L(e2, t2) {
  if (void 0 === t2 && (t2 = "custom validation failed"), "function" != typeof e2)
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (null != t3) {
      var n3 = t3.constructor;
      -1 === e3.indexOf(n3) && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = -1 !== e2.indexOf(n3);
    return r2 || y(t2), r2;
  } });
}
function B$1(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && "oneOf" === i2._vueTypes_name) {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), true !== i2.type && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
      return "string" == typeof r4 && n3.push(r4), true === r4;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P$1(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I$1(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return true === (n2 = _(e2, t3, true));
    });
    return r2 || y("arrayOf - value validation error:\n" + P$1(n2)), r2;
  } });
}
function J$1(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return true === (n2 = _(e2, t2[r3], true));
    });
    return r2 || y("objectOf - value validation error:\n" + P$1(n2)), r2;
  } });
}
function R$1(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!(null === (n3 = e2[t3]) || void 0 === n3 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3))
      return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return -1 === o2.indexOf(e3);
    })) {
      var u2 = n2.filter(function(e3) {
        return -1 === o2.indexOf(e3);
      });
      return y(1 === u2.length ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (-1 === t2.indexOf(n3))
        return true === i2._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3], true);
      return "string" == typeof o3 && y('shape - "' + n3 + '" property validation error:\n ' + P$1(o3)), true === o3;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3))
      return e3.forEach(function(e4) {
        return t2.extend(e4);
      }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = void 0 !== r2 && r2, u2 = e3.getter, a2 = void 0 !== u2 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2))
      throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E$1().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N$1().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q$1().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return void 0 === e2 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = false !== t2 ? n({}, true !== t2 ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J$1, $.oneOfType = B$1, $.arrayOf = I$1, $.objectOf = M, $.shape = R$1, $.utils = { validate: function(e2, t2) {
  return true === _(t2, e2, true);
}, toType: function(e2, t2, n2) {
  return void 0 === n2 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
} };
var C$1 = function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
}(z());
const basicProps = {
  schemas: {
    type: Array,
    default: () => []
  },
  fieldMapToTime: {
    type: Array,
    default: () => []
  },
  rules: {
    type: Object,
    default: () => {
    }
  },
  showResetButton: C$1.bool.def(true),
  resetButtonOptions: M(String),
  showSubmitButton: C$1.bool.def(true),
  submitButtonOptions: M(String),
  showActionButtonGroup: C$1.bool.def(true),
  showAdvancedButton: C$1.bool.def(false),
  textAlign: Y(["left", "right"]).def("left"),
  autoAdvancedLine: C$1.number.def(3),
  labelPosition: Y(["right", "left", "top"]).def("right"),
  labelWidth: C$1.string,
  inline: C$1.bool.def(false),
  size: Y(["", "medium", "small", "mini"]).def("medium")
};
const isLeaf = (el) => !el.getAttribute("aria-owns");
const getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode)
    return null;
  const siblings = parentNode.querySelectorAll(elClass);
  const index2 = Array.prototype.indexOf.call(siblings, el);
  return siblings[index2 + distance] || null;
};
const focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
var _a;
const isClient = typeof window !== "undefined";
const isString$2 = (val) => typeof val === "string";
const noop$1 = () => {
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r2) {
  return typeof r2 === "function" ? r2() : unref(r2);
}
function identity$1(arg) {
  return arg;
}
function tryOnScopeDispose(fn2) {
  if (getCurrentScope()) {
    onScopeDispose(fn2);
    return true;
  }
  return false;
}
function tryOnMounted(fn2, sync = true) {
  if (getCurrentInstance())
    onMounted(fn2);
  else if (sync)
    fn2();
  else
    nextTick(fn2);
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString$2(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop$1;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn2) => fn2());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop$1));
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e2) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e2.composedPath().includes(el) && !shouldIgnore(e2);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn2) => fn2());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useCssVar(prop, target, { window: window2 = defaultWindow, initialValue = "" } = {}) {
  const variable = ref(initialValue);
  const elRef = computed(() => {
    var _a2;
    return unrefElement(target) || ((_a2 = window2 == null ? void 0 : window2.document) == null ? void 0 : _a2.documentElement);
  });
  watch([elRef, () => resolveUnref(prop)], ([el, prop2]) => {
    var _a2;
    if (el && window2) {
      const value = (_a2 = window2.getComputedStyle(el).getPropertyValue(prop2)) == null ? void 0 : _a2.trim();
      variable.value = value || initialValue;
    }
  }, { immediate: true });
  watch(variable, (val) => {
    var _a2;
    if ((_a2 = elRef.value) == null ? void 0 : _a2.style)
      elRef.value.style.setProperty(resolveUnref(prop), val);
  });
  return variable;
}
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, observerOptions = __objRest$2(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a2 = options, { window: window2 = defaultWindow } = _a2, mutationOptions = __objRest$1(_a2, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity$1
}, _TransitionPresets);
const isFirefox = () => isClient && /firefox/i.test(window.navigator.userAgent);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const NOOP = () => {
};
const hasOwnProperty$c = Object.prototype.hasOwnProperty;
const hasOwn = (val, key2) => hasOwnProperty$c.call(val, key2);
const isArray$2 = Array.isArray;
const isDate = (val) => toTypeString(val) === "[object Date]";
const isFunction$2 = (val) => typeof val === "function";
const isString$1 = (val) => typeof val === "string";
const isObject$2 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject$2(val) || isFunction$2(val)) && isFunction$2(val.then) && isFunction$2(val.catch);
};
const objectToString$1 = Object.prototype.toString;
const toTypeString = (value) => objectToString$1.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const cacheStringFunction = (fn2) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn2(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const capitalize$1 = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var isArray = Array.isArray;
var isArray$1 = isArray;
var INFINITY$4 = 1 / 0;
var symbolProto$2 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$4 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var INFINITY$3 = 1 / 0, MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$3 || value === -INFINITY$3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
function toInteger(value) {
  var result = toFinite(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid2 = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid2 ? "Symbol(src)_1." + uid2 : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key2) {
  return object == null ? void 0 : object[key2];
}
function getNative(object, key2) {
  var value = getValue(object, key2);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function noop() {
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function strictIndexOf(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key2, value) {
  if (key2 == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key2, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key2] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function assignValue(object, key2, value) {
  var objValue = object[key2];
  if (!(hasOwnProperty$9.call(object, key2) && eq(objValue, value)) || value === void 0 && !(key2 in object)) {
    baseAssignValue(object, key2, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key2 = props[index2];
    var newValue = customizer ? customizer(object[key2], source[key2], key2, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key2];
    }
    if (isNew) {
      baseAssignValue(object, key2, newValue);
    } else {
      assignValue(object, key2, newValue);
    }
  }
  return object;
}
var nativeMax$2 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$2(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$2(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key2 in value) {
    if ((inherited || hasOwnProperty$7.call(value, key2)) && !(skipIndexes && (key2 == "length" || isBuff && (key2 == "offset" || key2 == "parent") || isType && (key2 == "buffer" || key2 == "byteLength" || key2 == "byteOffset") || isIndex(key2, length)))) {
      result.push(key2);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key2 in Object(object)) {
    if (hasOwnProperty$6.call(object, key2) && key2 != "constructor") {
      result.push(key2);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key2 in Object(object)) {
      result.push(key2);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key2 in object) {
    if (!(key2 == "constructor" && (isProto || !hasOwnProperty$5.call(object, key2)))) {
      result.push(key2);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key2) {
  var result = this.has(key2) && delete this.__data__[key2];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashGet(key2) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key2];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$4.call(data, key2) ? data[key2] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key2) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key2] !== void 0 : hasOwnProperty$3.call(data, key2);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key2, value) {
  var data = this.__data__;
  this.size += this.has(key2) ? 0 : 1;
  data[key2] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries2) {
  var index2 = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key2) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key2)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key2) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key2) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key2) {
  return assocIndexOf(this.__data__, key2) > -1;
}
function listCacheSet(key2, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key2);
  if (index2 < 0) {
    ++this.size;
    data.push([key2, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries2) {
  var index2 = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$1, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key2) {
  var data = map.__data__;
  return isKeyable(key2) ? data[typeof key2 == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key2) {
  var result = getMapData(this, key2)["delete"](key2);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key2) {
  return getMapData(this, key2).get(key2);
}
function mapCacheHas(key2) {
  return getMapData(this, key2).has(key2);
}
function mapCacheSet(key2, value) {
  var data = getMapData(this, key2), size = data.size;
  data.set(key2, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries2) {
  var index2 = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries2[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key2 = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key2)) {
      return cache.get(key2);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key2, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key2;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY$2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$1(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function baseSlice(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function asciiToArray(string) {
  return string.split("");
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var upperFirst = createCaseFirst("toUpperCase");
var upperFirst$1 = upperFirst;
function castArray$1() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray$1(value) ? value : [value];
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key2) {
  var data = this.__data__, result = data["delete"](key2);
  this.size = data.size;
  return result;
}
function stackGet(key2) {
  return this.__data__.get(key2);
}
function stackHas(key2) {
  return this.__data__.has(key2);
}
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet(key2, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key2, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key2, value);
  this.size = data.size;
  return this;
}
function Stack(entries2) {
  var data = this.__data__ = new ListCache(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key2, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key2, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key3) {
      result.set(key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key3) {
    if (props) {
      key3 = subValue;
      subValue = value[key3];
    }
    assignValue(result, key3, baseClone(subValue, bitmask, customizer, key3, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key2) {
  return cache.has(key2);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key2) {
    result[++index2] = [key2, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key2 = objProps[index2];
    if (!(isPartial ? key2 in other : hasOwnProperty$1.call(other, key2))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key2 = objProps[index2];
    var objValue = object[key2], othValue = other[key2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key2, other, object, stack) : customizer(objValue, othValue, key2, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key2 == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key2 = data[0], objValue = object[key2], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key2 in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key2, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject$1(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key2 = result[length], value = object[key2];
    result[length] = [key2, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key2, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key2] === srcValue && (srcValue !== void 0 || key2 in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
function baseHasIn(object, key2) {
  return object != null && key2 in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key2 = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key2))) {
      break;
    }
    object = object[key2];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key2, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key2) {
  return function(object) {
    return object == null ? void 0 : object[key2];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax$1 = Math.max, nativeMin$1 = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function arrayIncludesWith(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
var nativeMax = Math.max, nativeMin = Math.min;
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index2 = length - 1;
  if (fromIndex !== void 0) {
    index2 = toInteger(fromIndex);
    index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate), index2, true);
}
var INFINITY$1 = 1 / 0;
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY$1) : [];
}
function fromPairs(pairs) {
  var index2 = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index2 < length) {
    var pair = pairs[index2];
    result[pair[0]] = pair[1];
  }
  return result;
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function isNil(value) {
  return value == null;
}
function isUndefined$1(value) {
  return value === void 0;
}
function baseSet(object, path, value, customizer) {
  if (!isObject$1(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key2 = toKey(path[index2]), newValue = value;
    if (key2 === "__proto__" || key2 === "constructor" || key2 === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key2];
      newValue = customizer ? customizer(objValue, key2, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$1(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key2, newValue);
    nested = nested[key2];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
var pick$1 = pick;
var INFINITY = 1 / 0;
var createSet = !(Set$2 && 1 / setToArray(new Set$2([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$2(values);
};
var createSet$1 = createSet;
var LARGE_ARRAY_SIZE = 200;
function baseUniq(array, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet$1(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});
var union$1 = union;
const isUndefined = (val) => val === void 0;
const isBoolean$1 = (val) => typeof val === "boolean";
const isNumber$1 = (val) => typeof val === "number";
const isEmpty = (val) => !val && val !== 0 || isArray$2(val) && val.length === 0 || isObject$2(val) && !Object.keys(val).length;
const isElement = (e2) => {
  if (typeof Element === "undefined")
    return false;
  return e2 instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};
const isStringNumber = (val) => {
  if (!isString$1(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);
class ElementPlusError extends Error {
  constructor(m2) {
    super(m2);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m2) {
  throw new ElementPlusError(`[${scope}] ${m2}`);
}
function debugWarn(scope, message) {
}
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const getStyle = (element, styleName) => {
  var _a2;
  if (!isClient || !element || !styleName)
    return "";
  let key2 = camelize(styleName);
  if (key2 === "float")
    key2 = "cssFloat";
  try {
    const style = element.style[key2];
    if (style)
      return style;
    const computed2 = (_a2 = document.defaultView) == null ? void 0 : _a2.getComputedStyle(element, "");
    return computed2 ? computed2[key2] : "";
  } catch (e2) {
    return element.style[key2];
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber$1(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString$1(value)) {
    return value;
  }
}
function scrollIntoView(container, selected) {
  if (!isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
});
var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
});
var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
var calendar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Calendar",
  __name: "calendar",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
      })
    ]));
  }
});
var calendar_default = calendar_vue_vue_type_script_setup_true_lang_default;
var check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Check",
  __name: "check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
});
var check_default = check_vue_vue_type_script_setup_true_lang_default;
var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCheck",
  __name: "circle-check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
});
var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleClose",
  __name: "circle-close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
});
var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
var clock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Clock",
  __name: "clock",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"
      })
    ]));
  }
});
var clock_default = clock_vue_vue_type_script_setup_true_lang_default;
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
var d_arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
});
var d_arrow_left_default = d_arrow_left_vue_vue_type_script_setup_true_lang_default;
var d_arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
});
var d_arrow_right_default = d_arrow_right_vue_vue_type_script_setup_true_lang_default;
var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Hide",
  __name: "hide",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
});
var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
});
var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
var minus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Minus",
  __name: "minus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
});
var minus_default = minus_vue_vue_type_script_setup_true_lang_default;
var plus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Plus",
  __name: "plus",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
});
var plus_default = plus_vue_vue_type_script_setup_true_lang_default;
var star_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "StarFilled",
  __name: "star-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
      })
    ]));
  }
});
var star_filled_default = star_filled_vue_vue_type_script_setup_true_lang_default;
var star_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Star",
  __name: "star",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
      })
    ]));
  }
});
var star_default = star_vue_vue_type_script_setup_true_lang_default;
var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "View",
  __name: "view",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
});
var view_default = view_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$2(val) && !!val[epPropKey];
const buildProp = (prop, key2) => {
  if (!isObject$2(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key2 ? ` for prop "${key2}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key2, option]) => [
  key2,
  buildProp(option, key2)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key2, comp] of Object.entries(extra)) {
      main[key2] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const datePickTypes = [
  "year",
  "years",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const INPUT_EVENT = "input";
const componentSizes = ["", "default", "small", "large"];
const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const unique = (arr) => [...new Set(arr)];
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};
const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
const mutable = (val) => val;
const DEFAULT_EXCLUDE_KEYS$1 = ["class", "style"];
const LISTENER_PREFIX$1 = /^on[A-Z]/;
const useAttrs$1 = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS$1);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    return computed(() => ({}));
  }
  return computed(() => {
    var _a2;
    return fromPairs(Object.entries((_a2 = instance.proxy) == null ? void 0 : _a2.$attrs).filter(([key2]) => !allExcludeKeys.value.includes(key2) && !(excludeListeners && LISTENER_PREFIX$1.test(key2))));
  });
};
const useDeprecated = ({ from, replacement, scope, version: version2, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
  }, {
    immediate: true
  });
};
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, unref(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_2, key2) => {
  var _a2;
  return `${(_a2 = option == null ? void 0 : option[key2]) != null ? _a2 : `{${key2}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = localeOverrides || inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace));
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b2 = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e2 = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m2 = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be2 = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key2 in object) {
      if (object[key2]) {
        styles[`--${namespace.value}-${key2}`] = object[key2];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key2 in object) {
      if (object[key2]) {
        styles[`--${namespace.value}-${block}-${key2}`] = object[key2];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b: b2,
    e: e2,
    m: m2,
    be: be2,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction$2(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$2(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction$2(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction$2(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean$1(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    onMounted(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a2, _b;
    return (_b = (_a2 = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a2.$props) == null ? void 0 : _b[name];
  });
};
var E = "top", R = "bottom", W = "right", P = "left", me = "auto", G = [E, R, W, P], U = "start", J = "end", Xe = "clippingParents", je = "viewport", K = "popper", Ye = "reference", De = G.reduce(function(t2, e2) {
  return t2.concat([e2 + "-" + U, e2 + "-" + J]);
}, []), Ee = [].concat(G, [me]).reduce(function(t2, e2) {
  return t2.concat([e2, e2 + "-" + U, e2 + "-" + J]);
}, []), Ge = "beforeRead", Je = "read", Ke = "afterRead", Qe = "beforeMain", Ze = "main", et = "afterMain", tt = "beforeWrite", nt = "write", rt = "afterWrite", ot = [Ge, Je, Ke, Qe, Ze, et, tt, nt, rt];
function C(t2) {
  return t2 ? (t2.nodeName || "").toLowerCase() : null;
}
function H(t2) {
  if (t2 == null)
    return window;
  if (t2.toString() !== "[object Window]") {
    var e2 = t2.ownerDocument;
    return e2 && e2.defaultView || window;
  }
  return t2;
}
function Q(t2) {
  var e2 = H(t2).Element;
  return t2 instanceof e2 || t2 instanceof Element;
}
function B(t2) {
  var e2 = H(t2).HTMLElement;
  return t2 instanceof e2 || t2 instanceof HTMLElement;
}
function Pe(t2) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e2 = H(t2).ShadowRoot;
  return t2 instanceof e2 || t2 instanceof ShadowRoot;
}
function Mt(t2) {
  var e2 = t2.state;
  Object.keys(e2.elements).forEach(function(n2) {
    var r2 = e2.styles[n2] || {}, o2 = e2.attributes[n2] || {}, i2 = e2.elements[n2];
    !B(i2) || !C(i2) || (Object.assign(i2.style, r2), Object.keys(o2).forEach(function(a2) {
      var s2 = o2[a2];
      s2 === false ? i2.removeAttribute(a2) : i2.setAttribute(a2, s2 === true ? "" : s2);
    }));
  });
}
function Rt(t2) {
  var e2 = t2.state, n2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e2.elements.popper.style, n2.popper), e2.styles = n2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, n2.arrow), function() {
    Object.keys(e2.elements).forEach(function(r2) {
      var o2 = e2.elements[r2], i2 = e2.attributes[r2] || {}, a2 = Object.keys(e2.styles.hasOwnProperty(r2) ? e2.styles[r2] : n2[r2]), s2 = a2.reduce(function(f2, c2) {
        return f2[c2] = "", f2;
      }, {});
      !B(o2) || !C(o2) || (Object.assign(o2.style, s2), Object.keys(i2).forEach(function(f2) {
        o2.removeAttribute(f2);
      }));
    });
  };
}
var Ae = { name: "applyStyles", enabled: true, phase: "write", fn: Mt, effect: Rt, requires: ["computeStyles"] };
function q(t2) {
  return t2.split("-")[0];
}
var X = Math.max, ve = Math.min, Z = Math.round;
function ee(t2, e2) {
  e2 === void 0 && (e2 = false);
  var n2 = t2.getBoundingClientRect(), r2 = 1, o2 = 1;
  if (B(t2) && e2) {
    var i2 = t2.offsetHeight, a2 = t2.offsetWidth;
    a2 > 0 && (r2 = Z(n2.width) / a2 || 1), i2 > 0 && (o2 = Z(n2.height) / i2 || 1);
  }
  return { width: n2.width / r2, height: n2.height / o2, top: n2.top / o2, right: n2.right / r2, bottom: n2.bottom / o2, left: n2.left / r2, x: n2.left / r2, y: n2.top / o2 };
}
function ke(t2) {
  var e2 = ee(t2), n2 = t2.offsetWidth, r2 = t2.offsetHeight;
  return Math.abs(e2.width - n2) <= 1 && (n2 = e2.width), Math.abs(e2.height - r2) <= 1 && (r2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: n2, height: r2 };
}
function it(t2, e2) {
  var n2 = e2.getRootNode && e2.getRootNode();
  if (t2.contains(e2))
    return true;
  if (n2 && Pe(n2)) {
    var r2 = e2;
    do {
      if (r2 && t2.isSameNode(r2))
        return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function N(t2) {
  return H(t2).getComputedStyle(t2);
}
function Wt(t2) {
  return ["table", "td", "th"].indexOf(C(t2)) >= 0;
}
function I(t2) {
  return ((Q(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function ge(t2) {
  return C(t2) === "html" ? t2 : t2.assignedSlot || t2.parentNode || (Pe(t2) ? t2.host : null) || I(t2);
}
function at(t2) {
  return !B(t2) || N(t2).position === "fixed" ? null : t2.offsetParent;
}
function Bt(t2) {
  var e2 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n2 = navigator.userAgent.indexOf("Trident") !== -1;
  if (n2 && B(t2)) {
    var r2 = N(t2);
    if (r2.position === "fixed")
      return null;
  }
  var o2 = ge(t2);
  for (Pe(o2) && (o2 = o2.host); B(o2) && ["html", "body"].indexOf(C(o2)) < 0; ) {
    var i2 = N(o2);
    if (i2.transform !== "none" || i2.perspective !== "none" || i2.contain === "paint" || ["transform", "perspective"].indexOf(i2.willChange) !== -1 || e2 && i2.willChange === "filter" || e2 && i2.filter && i2.filter !== "none")
      return o2;
    o2 = o2.parentNode;
  }
  return null;
}
function se(t2) {
  for (var e2 = H(t2), n2 = at(t2); n2 && Wt(n2) && N(n2).position === "static"; )
    n2 = at(n2);
  return n2 && (C(n2) === "html" || C(n2) === "body" && N(n2).position === "static") ? e2 : n2 || Bt(t2) || e2;
}
function Le(t2) {
  return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
}
function fe(t2, e2, n2) {
  return X(t2, ve(e2, n2));
}
function St(t2, e2, n2) {
  var r2 = fe(t2, e2, n2);
  return r2 > n2 ? n2 : r2;
}
function st() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ft(t2) {
  return Object.assign({}, st(), t2);
}
function ct(t2, e2) {
  return e2.reduce(function(n2, r2) {
    return n2[r2] = t2, n2;
  }, {});
}
var Tt = function(t2, e2) {
  return t2 = typeof t2 == "function" ? t2(Object.assign({}, e2.rects, { placement: e2.placement })) : t2, ft(typeof t2 != "number" ? t2 : ct(t2, G));
};
function Ht(t2) {
  var e2, n2 = t2.state, r2 = t2.name, o2 = t2.options, i2 = n2.elements.arrow, a2 = n2.modifiersData.popperOffsets, s2 = q(n2.placement), f2 = Le(s2), c2 = [P, W].indexOf(s2) >= 0, u2 = c2 ? "height" : "width";
  if (!(!i2 || !a2)) {
    var m2 = Tt(o2.padding, n2), v2 = ke(i2), l2 = f2 === "y" ? E : P, h2 = f2 === "y" ? R : W, p = n2.rects.reference[u2] + n2.rects.reference[f2] - a2[f2] - n2.rects.popper[u2], g2 = a2[f2] - n2.rects.reference[f2], x2 = se(i2), y2 = x2 ? f2 === "y" ? x2.clientHeight || 0 : x2.clientWidth || 0 : 0, $2 = p / 2 - g2 / 2, d2 = m2[l2], b2 = y2 - v2[u2] - m2[h2], w2 = y2 / 2 - v2[u2] / 2 + $2, O2 = fe(d2, w2, b2), j2 = f2;
    n2.modifiersData[r2] = (e2 = {}, e2[j2] = O2, e2.centerOffset = O2 - w2, e2);
  }
}
function Ct(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = n2.element, o2 = r2 === void 0 ? "[data-popper-arrow]" : r2;
  o2 != null && (typeof o2 == "string" && (o2 = e2.elements.popper.querySelector(o2), !o2) || !it(e2.elements.popper, o2) || (e2.elements.arrow = o2));
}
var pt = { name: "arrow", enabled: true, phase: "main", fn: Ht, effect: Ct, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function te(t2) {
  return t2.split("-")[1];
}
var qt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Vt(t2) {
  var e2 = t2.x, n2 = t2.y, r2 = window, o2 = r2.devicePixelRatio || 1;
  return { x: Z(e2 * o2) / o2 || 0, y: Z(n2 * o2) / o2 || 0 };
}
function ut(t2) {
  var e2, n2 = t2.popper, r2 = t2.popperRect, o2 = t2.placement, i2 = t2.variation, a2 = t2.offsets, s2 = t2.position, f2 = t2.gpuAcceleration, c2 = t2.adaptive, u2 = t2.roundOffsets, m2 = t2.isFixed, v2 = a2.x, l2 = v2 === void 0 ? 0 : v2, h2 = a2.y, p = h2 === void 0 ? 0 : h2, g2 = typeof u2 == "function" ? u2({ x: l2, y: p }) : { x: l2, y: p };
  l2 = g2.x, p = g2.y;
  var x2 = a2.hasOwnProperty("x"), y2 = a2.hasOwnProperty("y"), $2 = P, d2 = E, b2 = window;
  if (c2) {
    var w2 = se(n2), O2 = "clientHeight", j2 = "clientWidth";
    if (w2 === H(n2) && (w2 = I(n2), N(w2).position !== "static" && s2 === "absolute" && (O2 = "scrollHeight", j2 = "scrollWidth")), w2 = w2, o2 === E || (o2 === P || o2 === W) && i2 === J) {
      d2 = R;
      var A2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.height : w2[O2];
      p -= A2 - r2.height, p *= f2 ? 1 : -1;
    }
    if (o2 === P || (o2 === E || o2 === R) && i2 === J) {
      $2 = W;
      var k2 = m2 && w2 === b2 && b2.visualViewport ? b2.visualViewport.width : w2[j2];
      l2 -= k2 - r2.width, l2 *= f2 ? 1 : -1;
    }
  }
  var D2 = Object.assign({ position: s2 }, c2 && qt), S2 = u2 === true ? Vt({ x: l2, y: p }) : { x: l2, y: p };
  if (l2 = S2.x, p = S2.y, f2) {
    var L2;
    return Object.assign({}, D2, (L2 = {}, L2[d2] = y2 ? "0" : "", L2[$2] = x2 ? "0" : "", L2.transform = (b2.devicePixelRatio || 1) <= 1 ? "translate(" + l2 + "px, " + p + "px)" : "translate3d(" + l2 + "px, " + p + "px, 0)", L2));
  }
  return Object.assign({}, D2, (e2 = {}, e2[d2] = y2 ? p + "px" : "", e2[$2] = x2 ? l2 + "px" : "", e2.transform = "", e2));
}
function Nt(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = n2.gpuAcceleration, o2 = r2 === void 0 ? true : r2, i2 = n2.adaptive, a2 = i2 === void 0 ? true : i2, s2 = n2.roundOffsets, f2 = s2 === void 0 ? true : s2, c2 = { placement: q(e2.placement), variation: te(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: o2, isFixed: e2.options.strategy === "fixed" };
  e2.modifiersData.popperOffsets != null && (e2.styles.popper = Object.assign({}, e2.styles.popper, ut(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: a2, roundOffsets: f2 })))), e2.modifiersData.arrow != null && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, ut(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
}
var Me = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Nt, data: {} }, ye = { passive: true };
function It(t2) {
  var e2 = t2.state, n2 = t2.instance, r2 = t2.options, o2 = r2.scroll, i2 = o2 === void 0 ? true : o2, a2 = r2.resize, s2 = a2 === void 0 ? true : a2, f2 = H(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
  return i2 && c2.forEach(function(u2) {
    u2.addEventListener("scroll", n2.update, ye);
  }), s2 && f2.addEventListener("resize", n2.update, ye), function() {
    i2 && c2.forEach(function(u2) {
      u2.removeEventListener("scroll", n2.update, ye);
    }), s2 && f2.removeEventListener("resize", n2.update, ye);
  };
}
var Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: It, data: {} }, _t = { left: "right", right: "left", bottom: "top", top: "bottom" };
function be(t2) {
  return t2.replace(/left|right|bottom|top/g, function(e2) {
    return _t[e2];
  });
}
var zt = { start: "end", end: "start" };
function lt(t2) {
  return t2.replace(/start|end/g, function(e2) {
    return zt[e2];
  });
}
function We(t2) {
  var e2 = H(t2), n2 = e2.pageXOffset, r2 = e2.pageYOffset;
  return { scrollLeft: n2, scrollTop: r2 };
}
function Be(t2) {
  return ee(I(t2)).left + We(t2).scrollLeft;
}
function Ft(t2) {
  var e2 = H(t2), n2 = I(t2), r2 = e2.visualViewport, o2 = n2.clientWidth, i2 = n2.clientHeight, a2 = 0, s2 = 0;
  return r2 && (o2 = r2.width, i2 = r2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a2 = r2.offsetLeft, s2 = r2.offsetTop)), { width: o2, height: i2, x: a2 + Be(t2), y: s2 };
}
function Ut(t2) {
  var e2, n2 = I(t2), r2 = We(t2), o2 = (e2 = t2.ownerDocument) == null ? void 0 : e2.body, i2 = X(n2.scrollWidth, n2.clientWidth, o2 ? o2.scrollWidth : 0, o2 ? o2.clientWidth : 0), a2 = X(n2.scrollHeight, n2.clientHeight, o2 ? o2.scrollHeight : 0, o2 ? o2.clientHeight : 0), s2 = -r2.scrollLeft + Be(t2), f2 = -r2.scrollTop;
  return N(o2 || n2).direction === "rtl" && (s2 += X(n2.clientWidth, o2 ? o2.clientWidth : 0) - i2), { width: i2, height: a2, x: s2, y: f2 };
}
function Se(t2) {
  var e2 = N(t2), n2 = e2.overflow, r2 = e2.overflowX, o2 = e2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + o2 + r2);
}
function dt(t2) {
  return ["html", "body", "#document"].indexOf(C(t2)) >= 0 ? t2.ownerDocument.body : B(t2) && Se(t2) ? t2 : dt(ge(t2));
}
function ce(t2, e2) {
  var n2;
  e2 === void 0 && (e2 = []);
  var r2 = dt(t2), o2 = r2 === ((n2 = t2.ownerDocument) == null ? void 0 : n2.body), i2 = H(r2), a2 = o2 ? [i2].concat(i2.visualViewport || [], Se(r2) ? r2 : []) : r2, s2 = e2.concat(a2);
  return o2 ? s2 : s2.concat(ce(ge(a2)));
}
function Te(t2) {
  return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
}
function Xt(t2) {
  var e2 = ee(t2);
  return e2.top = e2.top + t2.clientTop, e2.left = e2.left + t2.clientLeft, e2.bottom = e2.top + t2.clientHeight, e2.right = e2.left + t2.clientWidth, e2.width = t2.clientWidth, e2.height = t2.clientHeight, e2.x = e2.left, e2.y = e2.top, e2;
}
function ht(t2, e2) {
  return e2 === je ? Te(Ft(t2)) : Q(e2) ? Xt(e2) : Te(Ut(I(t2)));
}
function Yt(t2) {
  var e2 = ce(ge(t2)), n2 = ["absolute", "fixed"].indexOf(N(t2).position) >= 0, r2 = n2 && B(t2) ? se(t2) : t2;
  return Q(r2) ? e2.filter(function(o2) {
    return Q(o2) && it(o2, r2) && C(o2) !== "body";
  }) : [];
}
function Gt(t2, e2, n2) {
  var r2 = e2 === "clippingParents" ? Yt(t2) : [].concat(e2), o2 = [].concat(r2, [n2]), i2 = o2[0], a2 = o2.reduce(function(s2, f2) {
    var c2 = ht(t2, f2);
    return s2.top = X(c2.top, s2.top), s2.right = ve(c2.right, s2.right), s2.bottom = ve(c2.bottom, s2.bottom), s2.left = X(c2.left, s2.left), s2;
  }, ht(t2, i2));
  return a2.width = a2.right - a2.left, a2.height = a2.bottom - a2.top, a2.x = a2.left, a2.y = a2.top, a2;
}
function mt(t2) {
  var e2 = t2.reference, n2 = t2.element, r2 = t2.placement, o2 = r2 ? q(r2) : null, i2 = r2 ? te(r2) : null, a2 = e2.x + e2.width / 2 - n2.width / 2, s2 = e2.y + e2.height / 2 - n2.height / 2, f2;
  switch (o2) {
    case E:
      f2 = { x: a2, y: e2.y - n2.height };
      break;
    case R:
      f2 = { x: a2, y: e2.y + e2.height };
      break;
    case W:
      f2 = { x: e2.x + e2.width, y: s2 };
      break;
    case P:
      f2 = { x: e2.x - n2.width, y: s2 };
      break;
    default:
      f2 = { x: e2.x, y: e2.y };
  }
  var c2 = o2 ? Le(o2) : null;
  if (c2 != null) {
    var u2 = c2 === "y" ? "height" : "width";
    switch (i2) {
      case U:
        f2[c2] = f2[c2] - (e2[u2] / 2 - n2[u2] / 2);
        break;
      case J:
        f2[c2] = f2[c2] + (e2[u2] / 2 - n2[u2] / 2);
        break;
    }
  }
  return f2;
}
function ne(t2, e2) {
  e2 === void 0 && (e2 = {});
  var n2 = e2, r2 = n2.placement, o2 = r2 === void 0 ? t2.placement : r2, i2 = n2.boundary, a2 = i2 === void 0 ? Xe : i2, s2 = n2.rootBoundary, f2 = s2 === void 0 ? je : s2, c2 = n2.elementContext, u2 = c2 === void 0 ? K : c2, m2 = n2.altBoundary, v2 = m2 === void 0 ? false : m2, l2 = n2.padding, h2 = l2 === void 0 ? 0 : l2, p = ft(typeof h2 != "number" ? h2 : ct(h2, G)), g2 = u2 === K ? Ye : K, x2 = t2.rects.popper, y2 = t2.elements[v2 ? g2 : u2], $2 = Gt(Q(y2) ? y2 : y2.contextElement || I(t2.elements.popper), a2, f2), d2 = ee(t2.elements.reference), b2 = mt({ reference: d2, element: x2, strategy: "absolute", placement: o2 }), w2 = Te(Object.assign({}, x2, b2)), O2 = u2 === K ? w2 : d2, j2 = { top: $2.top - O2.top + p.top, bottom: O2.bottom - $2.bottom + p.bottom, left: $2.left - O2.left + p.left, right: O2.right - $2.right + p.right }, A2 = t2.modifiersData.offset;
  if (u2 === K && A2) {
    var k2 = A2[o2];
    Object.keys(j2).forEach(function(D2) {
      var S2 = [W, R].indexOf(D2) >= 0 ? 1 : -1, L2 = [E, R].indexOf(D2) >= 0 ? "y" : "x";
      j2[D2] += k2[L2] * S2;
    });
  }
  return j2;
}
function Jt(t2, e2) {
  e2 === void 0 && (e2 = {});
  var n2 = e2, r2 = n2.placement, o2 = n2.boundary, i2 = n2.rootBoundary, a2 = n2.padding, s2 = n2.flipVariations, f2 = n2.allowedAutoPlacements, c2 = f2 === void 0 ? Ee : f2, u2 = te(r2), m2 = u2 ? s2 ? De : De.filter(function(h2) {
    return te(h2) === u2;
  }) : G, v2 = m2.filter(function(h2) {
    return c2.indexOf(h2) >= 0;
  });
  v2.length === 0 && (v2 = m2);
  var l2 = v2.reduce(function(h2, p) {
    return h2[p] = ne(t2, { placement: p, boundary: o2, rootBoundary: i2, padding: a2 })[q(p)], h2;
  }, {});
  return Object.keys(l2).sort(function(h2, p) {
    return l2[h2] - l2[p];
  });
}
function Kt(t2) {
  if (q(t2) === me)
    return [];
  var e2 = be(t2);
  return [lt(t2), e2, lt(e2)];
}
function Qt(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name;
  if (!e2.modifiersData[r2]._skip) {
    for (var o2 = n2.mainAxis, i2 = o2 === void 0 ? true : o2, a2 = n2.altAxis, s2 = a2 === void 0 ? true : a2, f2 = n2.fallbackPlacements, c2 = n2.padding, u2 = n2.boundary, m2 = n2.rootBoundary, v2 = n2.altBoundary, l2 = n2.flipVariations, h2 = l2 === void 0 ? true : l2, p = n2.allowedAutoPlacements, g2 = e2.options.placement, x2 = q(g2), y2 = x2 === g2, $2 = f2 || (y2 || !h2 ? [be(g2)] : Kt(g2)), d2 = [g2].concat($2).reduce(function(z2, V2) {
      return z2.concat(q(V2) === me ? Jt(e2, { placement: V2, boundary: u2, rootBoundary: m2, padding: c2, flipVariations: h2, allowedAutoPlacements: p }) : V2);
    }, []), b2 = e2.rects.reference, w2 = e2.rects.popper, O2 = /* @__PURE__ */ new Map(), j2 = true, A2 = d2[0], k2 = 0; k2 < d2.length; k2++) {
      var D2 = d2[k2], S2 = q(D2), L2 = te(D2) === U, re = [E, R].indexOf(S2) >= 0, oe = re ? "width" : "height", M2 = ne(e2, { placement: D2, boundary: u2, rootBoundary: m2, altBoundary: v2, padding: c2 }), T2 = re ? L2 ? W : P : L2 ? R : E;
      b2[oe] > w2[oe] && (T2 = be(T2));
      var pe = be(T2), _2 = [];
      if (i2 && _2.push(M2[S2] <= 0), s2 && _2.push(M2[T2] <= 0, M2[pe] <= 0), _2.every(function(z2) {
        return z2;
      })) {
        A2 = D2, j2 = false;
        break;
      }
      O2.set(D2, _2);
    }
    if (j2)
      for (var ue = h2 ? 3 : 1, xe = function(z2) {
        var V2 = d2.find(function(de) {
          var ae = O2.get(de);
          if (ae)
            return ae.slice(0, z2).every(function(Y2) {
              return Y2;
            });
        });
        if (V2)
          return A2 = V2, "break";
      }, ie = ue; ie > 0; ie--) {
        var le = xe(ie);
        if (le === "break")
          break;
      }
    e2.placement !== A2 && (e2.modifiersData[r2]._skip = true, e2.placement = A2, e2.reset = true);
  }
}
var vt = { name: "flip", enabled: true, phase: "main", fn: Qt, requiresIfExists: ["offset"], data: { _skip: false } };
function gt(t2, e2, n2) {
  return n2 === void 0 && (n2 = { x: 0, y: 0 }), { top: t2.top - e2.height - n2.y, right: t2.right - e2.width + n2.x, bottom: t2.bottom - e2.height + n2.y, left: t2.left - e2.width - n2.x };
}
function yt(t2) {
  return [E, W, R, P].some(function(e2) {
    return t2[e2] >= 0;
  });
}
function Zt(t2) {
  var e2 = t2.state, n2 = t2.name, r2 = e2.rects.reference, o2 = e2.rects.popper, i2 = e2.modifiersData.preventOverflow, a2 = ne(e2, { elementContext: "reference" }), s2 = ne(e2, { altBoundary: true }), f2 = gt(a2, r2), c2 = gt(s2, o2, i2), u2 = yt(f2), m2 = yt(c2);
  e2.modifiersData[n2] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: u2, hasPopperEscaped: m2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": u2, "data-popper-escaped": m2 });
}
var bt = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Zt };
function en(t2, e2, n2) {
  var r2 = q(t2), o2 = [P, E].indexOf(r2) >= 0 ? -1 : 1, i2 = typeof n2 == "function" ? n2(Object.assign({}, e2, { placement: t2 })) : n2, a2 = i2[0], s2 = i2[1];
  return a2 = a2 || 0, s2 = (s2 || 0) * o2, [P, W].indexOf(r2) >= 0 ? { x: s2, y: a2 } : { x: a2, y: s2 };
}
function tn(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name, o2 = n2.offset, i2 = o2 === void 0 ? [0, 0] : o2, a2 = Ee.reduce(function(u2, m2) {
    return u2[m2] = en(m2, e2.rects, i2), u2;
  }, {}), s2 = a2[e2.placement], f2 = s2.x, c2 = s2.y;
  e2.modifiersData.popperOffsets != null && (e2.modifiersData.popperOffsets.x += f2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[r2] = a2;
}
var wt = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: tn };
function nn(t2) {
  var e2 = t2.state, n2 = t2.name;
  e2.modifiersData[n2] = mt({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
}
var He = { name: "popperOffsets", enabled: true, phase: "read", fn: nn, data: {} };
function rn(t2) {
  return t2 === "x" ? "y" : "x";
}
function on(t2) {
  var e2 = t2.state, n2 = t2.options, r2 = t2.name, o2 = n2.mainAxis, i2 = o2 === void 0 ? true : o2, a2 = n2.altAxis, s2 = a2 === void 0 ? false : a2, f2 = n2.boundary, c2 = n2.rootBoundary, u2 = n2.altBoundary, m2 = n2.padding, v2 = n2.tether, l2 = v2 === void 0 ? true : v2, h2 = n2.tetherOffset, p = h2 === void 0 ? 0 : h2, g2 = ne(e2, { boundary: f2, rootBoundary: c2, padding: m2, altBoundary: u2 }), x2 = q(e2.placement), y2 = te(e2.placement), $2 = !y2, d2 = Le(x2), b2 = rn(d2), w2 = e2.modifiersData.popperOffsets, O2 = e2.rects.reference, j2 = e2.rects.popper, A2 = typeof p == "function" ? p(Object.assign({}, e2.rects, { placement: e2.placement })) : p, k2 = typeof A2 == "number" ? { mainAxis: A2, altAxis: A2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, A2), D2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, S2 = { x: 0, y: 0 };
  if (w2) {
    if (i2) {
      var L2, re = d2 === "y" ? E : P, oe = d2 === "y" ? R : W, M2 = d2 === "y" ? "height" : "width", T2 = w2[d2], pe = T2 + g2[re], _2 = T2 - g2[oe], ue = l2 ? -j2[M2] / 2 : 0, xe = y2 === U ? O2[M2] : j2[M2], ie = y2 === U ? -j2[M2] : -O2[M2], le = e2.elements.arrow, z2 = l2 && le ? ke(le) : { width: 0, height: 0 }, V2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : st(), de = V2[re], ae = V2[oe], Y2 = fe(0, O2[M2], z2[M2]), jt = $2 ? O2[M2] / 2 - ue - Y2 - de - k2.mainAxis : xe - Y2 - de - k2.mainAxis, Dt = $2 ? -O2[M2] / 2 + ue + Y2 + ae + k2.mainAxis : ie + Y2 + ae + k2.mainAxis, Oe = e2.elements.arrow && se(e2.elements.arrow), Et = Oe ? d2 === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Ce = (L2 = D2 == null ? void 0 : D2[d2]) != null ? L2 : 0, Pt = T2 + jt - Ce - Et, At = T2 + Dt - Ce, qe = fe(l2 ? ve(pe, Pt) : pe, T2, l2 ? X(_2, At) : _2);
      w2[d2] = qe, S2[d2] = qe - T2;
    }
    if (s2) {
      var Ve, kt = d2 === "x" ? E : P, Lt = d2 === "x" ? R : W, F2 = w2[b2], he = b2 === "y" ? "height" : "width", Ne = F2 + g2[kt], Ie = F2 - g2[Lt], $e = [E, P].indexOf(x2) !== -1, _e = (Ve = D2 == null ? void 0 : D2[b2]) != null ? Ve : 0, ze = $e ? Ne : F2 - O2[he] - j2[he] - _e + k2.altAxis, Fe = $e ? F2 + O2[he] + j2[he] - _e - k2.altAxis : Ie, Ue = l2 && $e ? St(ze, F2, Fe) : fe(l2 ? ze : Ne, F2, l2 ? Fe : Ie);
      w2[b2] = Ue, S2[b2] = Ue - F2;
    }
    e2.modifiersData[r2] = S2;
  }
}
var xt = { name: "preventOverflow", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"] };
function an(t2) {
  return { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop };
}
function sn(t2) {
  return t2 === H(t2) || !B(t2) ? We(t2) : an(t2);
}
function fn(t2) {
  var e2 = t2.getBoundingClientRect(), n2 = Z(e2.width) / t2.offsetWidth || 1, r2 = Z(e2.height) / t2.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function cn(t2, e2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = B(e2), o2 = B(e2) && fn(e2), i2 = I(e2), a2 = ee(t2, o2), s2 = { scrollLeft: 0, scrollTop: 0 }, f2 = { x: 0, y: 0 };
  return (r2 || !r2 && !n2) && ((C(e2) !== "body" || Se(i2)) && (s2 = sn(e2)), B(e2) ? (f2 = ee(e2, true), f2.x += e2.clientLeft, f2.y += e2.clientTop) : i2 && (f2.x = Be(i2))), { x: a2.left + s2.scrollLeft - f2.x, y: a2.top + s2.scrollTop - f2.y, width: a2.width, height: a2.height };
}
function pn(t2) {
  var e2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
  t2.forEach(function(i2) {
    e2.set(i2.name, i2);
  });
  function o2(i2) {
    n2.add(i2.name);
    var a2 = [].concat(i2.requires || [], i2.requiresIfExists || []);
    a2.forEach(function(s2) {
      if (!n2.has(s2)) {
        var f2 = e2.get(s2);
        f2 && o2(f2);
      }
    }), r2.push(i2);
  }
  return t2.forEach(function(i2) {
    n2.has(i2.name) || o2(i2);
  }), r2;
}
function un(t2) {
  var e2 = pn(t2);
  return ot.reduce(function(n2, r2) {
    return n2.concat(e2.filter(function(o2) {
      return o2.phase === r2;
    }));
  }, []);
}
function ln(t2) {
  var e2;
  return function() {
    return e2 || (e2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        e2 = void 0, n2(t2());
      });
    })), e2;
  };
}
function dn(t2) {
  var e2 = t2.reduce(function(n2, r2) {
    var o2 = n2[r2.name];
    return n2[r2.name] = o2 ? Object.assign({}, o2, r2, { options: Object.assign({}, o2.options, r2.options), data: Object.assign({}, o2.data, r2.data) }) : r2, n2;
  }, {});
  return Object.keys(e2).map(function(n2) {
    return e2[n2];
  });
}
var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $t() {
  for (var t2 = arguments.length, e2 = new Array(t2), n2 = 0; n2 < t2; n2++)
    e2[n2] = arguments[n2];
  return !e2.some(function(r2) {
    return !(r2 && typeof r2.getBoundingClientRect == "function");
  });
}
function we(t2) {
  t2 === void 0 && (t2 = {});
  var e2 = t2, n2 = e2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, o2 = e2.defaultOptions, i2 = o2 === void 0 ? Ot : o2;
  return function(a2, s2, f2) {
    f2 === void 0 && (f2 = i2);
    var c2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ot, i2), modifiersData: {}, elements: { reference: a2, popper: s2 }, attributes: {}, styles: {} }, u2 = [], m2 = false, v2 = { state: c2, setOptions: function(p) {
      var g2 = typeof p == "function" ? p(c2.options) : p;
      h2(), c2.options = Object.assign({}, i2, c2.options, g2), c2.scrollParents = { reference: Q(a2) ? ce(a2) : a2.contextElement ? ce(a2.contextElement) : [], popper: ce(s2) };
      var x2 = un(dn([].concat(r2, c2.options.modifiers)));
      return c2.orderedModifiers = x2.filter(function(y2) {
        return y2.enabled;
      }), l2(), v2.update();
    }, forceUpdate: function() {
      if (!m2) {
        var p = c2.elements, g2 = p.reference, x2 = p.popper;
        if ($t(g2, x2)) {
          c2.rects = { reference: cn(g2, se(x2), c2.options.strategy === "fixed"), popper: ke(x2) }, c2.reset = false, c2.placement = c2.options.placement, c2.orderedModifiers.forEach(function(j2) {
            return c2.modifiersData[j2.name] = Object.assign({}, j2.data);
          });
          for (var y2 = 0; y2 < c2.orderedModifiers.length; y2++) {
            if (c2.reset === true) {
              c2.reset = false, y2 = -1;
              continue;
            }
            var $2 = c2.orderedModifiers[y2], d2 = $2.fn, b2 = $2.options, w2 = b2 === void 0 ? {} : b2, O2 = $2.name;
            typeof d2 == "function" && (c2 = d2({ state: c2, options: w2, name: O2, instance: v2 }) || c2);
          }
        }
      }
    }, update: ln(function() {
      return new Promise(function(p) {
        v2.forceUpdate(), p(c2);
      });
    }), destroy: function() {
      h2(), m2 = true;
    } };
    if (!$t(a2, s2))
      return v2;
    v2.setOptions(f2).then(function(p) {
      !m2 && f2.onFirstUpdate && f2.onFirstUpdate(p);
    });
    function l2() {
      c2.orderedModifiers.forEach(function(p) {
        var g2 = p.name, x2 = p.options, y2 = x2 === void 0 ? {} : x2, $2 = p.effect;
        if (typeof $2 == "function") {
          var d2 = $2({ state: c2, name: g2, instance: v2, options: y2 }), b2 = function() {
          };
          u2.push(d2 || b2);
        }
      });
    }
    function h2() {
      u2.forEach(function(p) {
        return p();
      }), u2 = [];
    }
    return v2;
  };
}
we();
var mn = [Re, He, Me, Ae];
we({ defaultModifiers: mn });
var gn = [Re, He, Me, Ae, wt, vt, xt, pt, bt], yn = we({ defaultModifiers: gn });
const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = yn(referenceElement, popperElement, unref(options));
  });
  onBeforeUnmount(() => {
    destroy();
  });
  return {
    state: computed(() => {
      var _a2;
      return { ...((_a2 = unref(instanceRef)) == null ? void 0 : _a2.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a2;
      return (_a2 = unref(instanceRef)) == null ? void 0 : _a2.update();
    },
    forceUpdate: () => {
      var _a2;
      return (_a2 = unref(instanceRef)) == null ? void 0 : _a2.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles,
    attributes
  };
}
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn2, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn2, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computed(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
let registeredEscapeHandlers = [];
const cachedHandler = (e2) => {
  const event = e2;
  if (event.key === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient)
      registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};
let cachedContainer;
const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const createContainer = (id) => {
  const container = document.createElement("div");
  container.id = id;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  onBeforeMount(() => {
    if (!isClient)
      return;
    if (!cachedContainer && !document.body.querySelector(selector.value)) {
      cachedContainer = createContainer(id.value);
    }
  });
  return {
    id,
    selector
  };
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber$1(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber$1(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !inject(ZINDEX_INJECTION_KEY))
    ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionRef.value == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};
function useFocusController(target, { afterFocus, beforeBlur, afterBlur } = {}) {
  const instance = getCurrentInstance();
  const { emit } = instance;
  const wrapperRef = shallowRef();
  const isFocused = ref(false);
  const handleFocus = (event) => {
    if (isFocused.value)
      return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
  };
  const handleBlur = (event) => {
    var _a2;
    const cancelBlur = isFunction$2(beforeBlur) ? beforeBlur(event) : false;
    if (cancelBlur || event.relatedTarget && ((_a2 = wrapperRef.value) == null ? void 0 : _a2.contains(event.relatedTarget)))
      return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
  };
  const handleClick = () => {
    var _a2;
    (_a2 = target.value) == null ? void 0 : _a2.focus();
  };
  watch(wrapperRef, (el) => {
    if (el) {
      el.setAttribute("tabindex", "-1");
    }
  });
  useEventListener(wrapperRef, "click", handleClick);
  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  };
}
const DEFAULT_EMPTY_VALUES = ["", void 0, null];
const DEFAULT_VALUE_ON_CLEAR = void 0;
const useEmptyValuesProps = buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction$2(val) ? !val() : !val
  }
});
const useEmptyValues = (props, defaultValue) => {
  let config = useGlobalConfig();
  if (!config.value) {
    config = ref({});
  }
  const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
  const valueOnClear = computed(() => {
    if (isFunction$2(props.valueOnClear)) {
      return props.valueOnClear();
    } else if (props.valueOnClear !== void 0) {
      return props.valueOnClear;
    } else if (isFunction$2(config.value.valueOnClear)) {
      return config.value.valueOnClear();
    } else if (config.value.valueOnClear !== void 0) {
      return config.value.valueOnClear;
    }
    return defaultValue !== void 0 ? defaultValue : DEFAULT_VALUE_ON_CLEAR;
  });
  const isEmptyValue = (value) => {
    return emptyValues.value.includes(value);
  };
  if (!emptyValues.value.includes(valueOnClear.value))
    ;
  return {
    emptyValues,
    valueOnClear,
    isEmptyValue
  };
};
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick$1(ariaProps, arias);
};
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key2, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key2) {
    return computed(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key2]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$p = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc$1(_sfc_main$P, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  let idUnwatch = void 0;
  const isLabeledByFormItem = computed(() => {
    var _a2;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a2 = formItemContext.inputIds) == null ? void 0 : _a2.length) <= 1);
  });
  onMounted(() => {
    idUnwatch = watch([toRef(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  onUnmounted(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  ${isFirefox() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a2;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber$1(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber$1(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a2 = hiddenTextarea.parentNode) == null ? void 0 : _a2.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType
  },
  prefixIcon: {
    type: iconPropType
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  ...useAriaProps(["ariaLabel"])
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString$1(value),
  input: (value) => isString$1(value),
  change: (value) => isString$1(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const _hoisted_1$n = ["role"];
const _hoisted_2$i = ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"];
const _hoisted_3$8 = ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"];
const __default__$o = defineComponent({
  name: "ElInput",
  inheritAttrs: false
});
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  ...__default__$o,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const rawAttrs = useAttrs$2();
    const slots = useSlots();
    const containerAttrs = computed(() => {
      const comboBoxAttrs = {};
      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }
      return comboBoxAttrs;
    });
    const containerKls = computed(() => [
      props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize.value),
      nsInput.is("disabled", inputDisabled.value),
      nsInput.is("exceed", inputExceed.value),
      {
        [nsInput.b("group")]: slots.prepend || slots.append,
        [nsInput.bm("group", "append")]: slots.append,
        [nsInput.bm("group", "prepend")]: slots.prepend,
        [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
        [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
        [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
        [nsInput.b("hidden")]: props.type === "hidden"
      },
      rawAttrs.class
    ]);
    const wrapperKls = computed(() => [
      nsInput.e("wrapper"),
      nsInput.is("focus", isFocused.value)
    ]);
    const attrs = useAttrs$1({
      excludeKeys: computed(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const { form: elForm, formItem: elFormItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: elFormItem
    });
    const inputSize = useFormSize();
    const inputDisabled = useFormDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input.value || textarea.value);
    const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
      afterBlur() {
        var _a2;
        if (props.validateEvent) {
          (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "blur").catch((err) => debugWarn());
        }
      }
    });
    const needStatusIcon = computed(() => {
      var _a2;
      return (_a2 = elForm == null ? void 0 : elForm.statusIcon) != null ? _a2 : false;
    });
    const validateState = computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
    const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed(() => [
      rawAttrs.style
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => nativeInputValue.value.length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries2) => {
      onceInitSizeTextarea();
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry = entries2[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea" || !textarea.value)
        return;
      if (autosize) {
        const minRows = isObject$2(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$2(autosize) ? autosize.maxRows : void 0;
        const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
        textareaCalcStyle.value = {
          overflowY: "hidden",
          ...textareaStyle2
        };
        nextTick(() => {
          textarea.value.offsetHeight;
          textareaCalcStyle.value = textareaStyle2;
        });
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const createOnceInitResize = (resizeTextarea2) => {
      let isInit = false;
      return () => {
        var _a2;
        if (isInit || !props.autosize)
          return;
        const isElHidden = ((_a2 = textarea.value) == null ? void 0 : _a2.offsetParent) === null;
        if (!isElHidden) {
          resizeTextarea2();
          isInit = true;
        }
      };
    };
    const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
      if (!input2 || input2.value === formatterValue)
        return;
      input2.value = formatterValue;
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value) {
        setNativeInputValue();
        return;
      }
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a2;
      emit("compositionupdate", event);
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a2;
      await nextTick();
      (_a2 = _ref.value) == null ? void 0 : _a2.focus();
    };
    const blur = () => {
      var _a2;
      return (_a2 = _ref.value) == null ? void 0 : _a2.blur();
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a2;
      (_a2 = _ref.value) == null ? void 0 : _a2.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    watch(() => props.modelValue, () => {
      var _a2;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a2 = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a2.call(elFormItem, "change").catch((err) => debugWarn());
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
      resizeTextarea();
    });
    onMounted(() => {
      if (!props.formatter && props.parser)
        ;
      setNativeInputValue();
      nextTick(resizeTextarea);
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-input",
      ref: "https://element-plus.org/en-US/component/input.html"
    }, computed(() => !!props.label));
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
        class: unref(containerKls),
        style: unref(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            ref_key: "wrapperRef",
            ref: wrapperRef,
            class: normalizeClass(unref(wrapperKls))
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              id: unref(inputId),
              ref_key: "input",
              ref: input,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              minlength: _ctx.minlength,
              maxlength: _ctx.maxlength,
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label || _ctx.ariaLabel,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              form: _ctx.form,
              autofocus: _ctx.autofocus,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_2$i),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true),
                unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 4,
                  class: normalizeClass([
                    unref(nsInput).e("icon"),
                    unref(nsInput).e("validateIcon"),
                    unref(nsInput).is("loading", unref(validateState) === "validating")
                  ])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            id: unref(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: unref(nsTextarea).e("inner")
          }, unref(attrs), {
            minlength: _ctx.minlength,
            maxlength: _ctx.maxlength,
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.label || _ctx.ariaLabel,
            placeholder: _ctx.placeholder,
            form: _ctx.form,
            autofocus: _ctx.autofocus,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
            onBlur: _cache[3] || (_cache[3] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3$8),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(countStyle.value),
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 7)) : createCommentVNode("v-if", true)
        ], 64))
      ], 16, _hoisted_1$n);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc$1(_sfc_main$O, [["__file", "input.vue"]]);
const ElInput = withInstall(Input);
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const scrollbarContextKey = Symbol("scrollbarContextKey");
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME$4 = "Thumb";
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const scrollbar = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME$4, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = isClient ? document.onselectstart : null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e2) => {
      var _a2;
      e2.stopPropagation();
      if (e2.ctrlKey || [1, 2].includes(e2.button))
        return;
      (_a2 = window.getSelection()) == null ? void 0 : _a2.removeAllRanges();
      startDrag(e2);
      const el = e2.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e2[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e2) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e2.target.getBoundingClientRect()[bar.value.direction] - e2[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e2) => {
      e2.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e2) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e2[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    onBeforeUnmount(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns).e("bar"), unref(ns).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createElementVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$N, [["__file", "thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  minSize: {
    type: Number,
    required: true
  }
});
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const scrollbar = inject(scrollbarContextKey);
    const moveX = ref(0);
    const moveY = ref(0);
    const sizeWidth = ref("");
    const sizeHeight = ref("");
    const ratioY = ref(1);
    const ratioX = ref(1);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * ratioY.value;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * ratioX.value;
      }
    };
    const update = () => {
      const wrap = scrollbar == null ? void 0 : scrollbar.wrapElement;
      if (!wrap)
        return;
      const offsetHeight = wrap.offsetHeight - GAP;
      const offsetWidth = wrap.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    expose({
      handleScroll,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: ratioX.value,
          size: sizeWidth.value,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: ratioY.value,
          size: sizeHeight.value,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc$1(_sfc_main$M, [["__file", "bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ...useAriaProps(["ariaLabel", "ariaOrientation"])
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber$1)
};
const COMPONENT_NAME$3 = "ElScrollbar";
const __default__$n = defineComponent({
  name: COMPONENT_NAME$3
});
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = ref();
    const wrapRef = ref();
    const resizeRef = ref();
    const barRef = ref();
    const wrapStyle = computed(() => {
      const style = {};
      if (props.height)
        style.height = addUnit(props.height);
      if (props.maxHeight)
        style.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style];
    });
    const wrapKls = computed(() => {
      return [
        props.wrapClass,
        ns.e("wrap"),
        { [ns.em("wrap", "hidden-default")]: !props.native }
      ];
    });
    const resizeKls = computed(() => {
      return [ns.e("view"), props.viewClass];
    });
    const handleScroll = () => {
      var _a2;
      if (wrapRef.value) {
        (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrapRef.value);
        emit("scroll", {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject$2(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (isNumber$1(arg1) && isNumber$1(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber$1(value)) {
        return;
      }
      wrapRef.value.scrollLeft = value;
    };
    const update = () => {
      var _a2;
      (_a2 = barRef.value) == null ? void 0 : _a2.update();
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a2;
          update();
          if (wrapRef.value) {
            (_a2 = barRef.value) == null ? void 0 : _a2.handleScroll(wrapRef.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbarRef,
      wrapElement: wrapRef
    }));
    onMounted(() => {
      if (!props.native)
        nextTick(() => {
          update();
        });
    });
    onUpdated(() => update());
    expose({
      wrapRef,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          ref_key: "wrapRef",
          ref: wrapRef,
          class: normalizeClass(unref(wrapKls)),
          style: normalizeStyle(unref(wrapStyle)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            id: _ctx.id,
            ref_key: "resizeRef",
            ref: resizeRef,
            class: normalizeClass(unref(resizeKls)),
            style: normalizeStyle(_ctx.viewStyle),
            role: _ctx.role,
            "aria-label": _ctx.ariaLabel,
            "aria-orientation": _ctx.ariaOrientation
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          always: _ctx.always,
          "min-size": _ctx.minSize
        }, null, 8, ["always", "min-size"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc$1(_sfc_main$L, [["__file", "scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$m = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc$1(_sfc_main$K, [["__file", "popper.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$l = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    onBeforeUnmount(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc$1(_sfc_main$J, [["__file", "arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_2, {
    slots,
    attrs
  }) {
    var _a2;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a2 = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a2 : NOOP);
    return () => {
      var _a22;
      const defaultSlot = (_a22 = slots.default) == null ? void 0 : _a22.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject$2(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s2) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s2]);
}
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const __default__$k = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    onMounted(() => {
      watch(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      watch(triggerRef, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a2;
            const handler = props[eventName];
            if (handler) {
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a2 = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a2.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = watch([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key2, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key2) : el.setAttribute(key2, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key2) => prevEl.removeAttribute(key2));
        }
      }, {
        immediate: true
      });
    });
    onBeforeUnmount(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["__file", "trigger.vue"]]);
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
let focusReasonUserCount = 0;
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a2, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a2 = stack[0]) == null ? void 0 : _a2.resume) == null ? void 0 : _b.call(_a2);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();
const isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
const notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
const notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
const useFocusReason = () => {
  onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  onBeforeUnmount(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$H = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e2) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key: key2, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e2;
      const { loop } = props;
      const isTabbing = key2 === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e2) => {
      emit(ON_TRAP_FOCUS_EVT, e2);
    };
    const releaseOnFocus = (e2) => emit(ON_RELEASE_FOCUS_EVT, e2);
    const onFocusIn = (e2) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e2.target;
      const relatedTarget = e2.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
        if (!isPrevFocusedInTrap) {
          lastFocusBeforeTrapped = relatedTarget;
        }
      }
      if (isFocusedInTrap)
        emit("focusin", e2);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e2) => {
      const trapContainer = unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e2.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e2.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e2);
      }
    };
    async function startTrap() {
      await nextTick();
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString$1(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason2.value
          }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    onMounted(() => {
      if (props.trapped) {
        startTrap();
      }
      watch(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    onBeforeUnmount(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$H, [["render", _sfc_render$c], ["__file", "focus-trap.vue"]]);
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: Ee,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = ref();
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a2;
    const arrowEl = unref(arrowRef);
    const offset = (_a2 = unref(arrowOffset)) != null ? _a2 : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined$1(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
  const { attributes, state, styles, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance);
  onMounted(() => {
    watch(() => {
      var _a2;
      return (_a2 = unref(computedReference)) == null ? void 0 : _a2.getBoundingClientRect();
    }, () => {
      update();
    });
  });
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles,
    role,
    forceUpdate,
    update
  };
};
const usePopperContentDOM = (props, {
  attributes,
  styles,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(isNumber$1(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      unref(styles).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber$1(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};
const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};
const __default__$j = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } = usePopperContent(props);
    const {
      ariaModal,
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    let triggerTargetAriaStopWatch = void 0;
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    const togglePopperAlive = () => {
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    onMounted(() => {
      watch(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = unref(triggerTargetEl || contentRef.value);
        const prevEl = unref(prevTriggerTargetEl || contentRef.value);
        if (isElement(el)) {
          triggerTargetAriaStopWatch = watch([role, () => props.ariaLabel, ariaModal, () => props.id], (watches) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((key2, idx) => {
              isNil(watches[idx]) ? el.removeAttribute(key2) : el.setAttribute(key2, watches[idx]);
            });
          }, { immediate: true });
        }
        if (prevEl !== el && isElement(prevEl)) {
          ["role", "aria-label", "aria-modal", "id"].forEach((key2) => {
            prevEl.removeAttribute(key2);
          });
        }
      }, { immediate: true });
      watch(() => props.visible, togglePopperAlive, { immediate: true });
    });
    onBeforeUnmount(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e2) => _ctx.$emit("mouseenter", e2)),
        onMouseleave: _cache[1] || (_cache[1] = (e2) => _ctx.$emit("mouseleave", e2))
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["__file", "content.vue"]]);
const ElPopper = withInstall(Popper);
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray$2(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e2) => {
    isTriggerType(unref(trigger), type) && handler(e2);
  };
};
const __default__$i = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e2) => {
      if (e2.button === 0) {
        onToggle(e2);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e2) => {
      e2.preventDefault();
      onToggle(e2);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e2) => {
      const { code } = e2;
      if (props.triggerKeys.includes(code)) {
        e2.preventDefault();
        onToggle(e2);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc$1(_sfc_main$F, [["__file", "trigger.vue"]]);
const __default__$h = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref(null);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    onBeforeUnmount(() => {
      destroyed.value = true;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a2;
      return (_a2 = props.style) != null ? _a2 : {};
    });
    const ariaHidden = computed(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a2, _b;
      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a2;
        return (_a2 = contentRef.value) == null ? void 0 : _a2.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a2, _b;
      (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
    });
    expose({
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, [
        createVNode(Transition, {
          name: unref(transitionClass),
          onAfterLeave: onTransitionLeave,
          onBeforeEnter,
          onAfterEnter: onAfterShow,
          onBeforeLeave
        }, {
          default: withCtx(() => [
            unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
              key: 0,
              id: unref(id),
              ref_key: "contentRef",
              ref: contentRef
            }, _ctx.$attrs, {
              "aria-label": _ctx.ariaLabel,
              "aria-hidden": unref(ariaHidden),
              "boundaries-padding": _ctx.boundariesPadding,
              "fallback-placements": _ctx.fallbackPlacements,
              "gpu-acceleration": _ctx.gpuAcceleration,
              offset: _ctx.offset,
              placement: _ctx.placement,
              "popper-options": _ctx.popperOptions,
              strategy: _ctx.strategy,
              effect: _ctx.effect,
              enterable: _ctx.enterable,
              pure: _ctx.pure,
              "popper-class": _ctx.popperClass,
              "popper-style": [_ctx.popperStyle, unref(contentStyle)],
              "reference-el": _ctx.referenceEl,
              "trigger-target-el": _ctx.triggerTargetEl,
              visible: unref(shouldShow),
              "z-index": _ctx.zIndex,
              onMouseenter: unref(onContentEnter),
              onMouseleave: unref(onContentLeave),
              onBlur,
              onClose: unref(onClose)
            }), {
              default: withCtx(() => [
                !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(shouldShow)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["__file", "content.vue"]]);
const _hoisted_1$m = ["innerHTML"];
const _hoisted_2$h = { key: 1 };
const __default__$g = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a2;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a2 = popperComponent.popperInstanceRef) == null ? void 0 : _a2.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean$1(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a2, _b;
      const popperContent = (_b = (_a2 = contentRef.value) == null ? void 0 : _a2.contentRef) == null ? void 0 : _b.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || document.activeElement;
      return popperContent && popperContent.contains(activeElement);
    };
    onDeactivated(() => open.value && hide());
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_1$m)) : (openBlock(), createElementBlock("span", _hoisted_2$h, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["__file", "tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const buttonGroupContextKey = Symbol("buttonGroupContextKey");
const useButton = (props, emit) => {
  useDeprecated({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => props.type === "text"));
  const buttonGroupContext = inject(buttonGroupContextKey, void 0);
  const globalConfig2 = useGlobalConfig("button");
  const { form } = useFormItem();
  const _size = useFormSize(computed(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
  const _disabled = useFormDisabled();
  const _ref = ref();
  const slots = useSlots();
  const _type = computed(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
  const autoInsertSpace = computed(() => {
    var _a2, _b, _c;
    return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a2 = globalConfig2.value) == null ? void 0 : _a2.autoInsertSpace) != null ? _c : false;
  });
  const _props = computed(() => {
    if (props.tag === "button") {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType
      };
    }
    return {};
  });
  const shouldAddSpace = computed(() => {
    var _a2;
    const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
      const slot = defaultSlot[0];
      if ((slot == null ? void 0 : slot.type) === Text) {
        const text = slot.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
      }
    }
    return false;
  });
  const handleClick = (evt) => {
    if (props.nativeType === "reset") {
      form == null ? void 0 : form.resetFields();
    }
    emit("click", evt);
  };
  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    shouldAddSpace,
    handleClick
  };
};
const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => loading_default
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: definePropType([String, Object]),
    default: "button"
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var s2 = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s2 = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, l: l2 };
}
function hue2rgb(p, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p + (q2 - p) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p + (q2 - p) * (2 / 3 - t2) * 6;
  }
  return p;
}
function hslToRgb(h2, s2, l2) {
  var r2;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  if (s2 === 0) {
    g2 = l2;
    b2 = l2;
    r2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p = 2 * l2 - q2;
    r2 = hue2rgb(p, q2, h2 + 1 / 3);
    g2 = hue2rgb(p, q2, h2);
    b2 = hue2rgb(p, q2, h2 - 1 / 3);
  }
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r2, g2, b2);
  var min = Math.min(r2, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s2 = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s: s2, v: v2 };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2);
  var f2 = h2 - i2;
  var p = v2 * (1 - s2);
  var q2 = v2 * (1 - f2 * s2);
  var t2 = v2 * (1 - (1 - f2) * s2);
  var mod = i2 % 6;
  var r2 = [v2, q2, p, p, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p, p][mod];
  var b2 = [p, p, t2, v2, v2, q2][mod];
  return { r: r2 * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a2, allow4Char) {
  var hex = [
    pad2(Math.round(r2).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a2))
  ];
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = function() {
  function TinyColor2(color, opts) {
    if (color === void 0) {
      color = "";
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a2;
    if (color instanceof TinyColor2) {
      return color;
    }
    if (typeof color === "number") {
      color = numberInputToObject(color);
    }
    this.originalInput = color;
    var rgb = inputToRGB(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a2 = opts.format) !== null && _a2 !== void 0 ? _a2 : rgb.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor2.prototype.isDark = function() {
    return this.getBrightness() < 128;
  };
  TinyColor2.prototype.isLight = function() {
    return !this.isDark();
  };
  TinyColor2.prototype.getBrightness = function() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  };
  TinyColor2.prototype.getLuminance = function() {
    var rgb = this.toRgb();
    var R2;
    var G2;
    var B2;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R2 = RsRGB / 12.92;
    } else {
      R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G2 = GsRGB / 12.92;
    } else {
      G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B2 = BsRGB / 12.92;
    } else {
      B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  };
  TinyColor2.prototype.getAlpha = function() {
    return this.a;
  };
  TinyColor2.prototype.setAlpha = function(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  TinyColor2.prototype.isMonochrome = function() {
    var s2 = this.toHsl().s;
    return s2 === 0;
  };
  TinyColor2.prototype.toHsv = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  };
  TinyColor2.prototype.toHsvString = function() {
    var hsv = rgbToHsv(this.r, this.g, this.b);
    var h2 = Math.round(hsv.h * 360);
    var s2 = Math.round(hsv.s * 100);
    var v2 = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHsl = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
  };
  TinyColor2.prototype.toHslString = function() {
    var hsl = rgbToHsl(this.r, this.g, this.b);
    var h2 = Math.round(hsl.h * 360);
    var s2 = Math.round(hsl.s * 100);
    var l2 = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toHex = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  };
  TinyColor2.prototype.toHexString = function(allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return "#" + this.toHex(allow3Char);
  };
  TinyColor2.prototype.toHex8 = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  };
  TinyColor2.prototype.toHex8String = function(allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return "#" + this.toHex8(allow4Char);
  };
  TinyColor2.prototype.toHexShortString = function(allowShortChar) {
    if (allowShortChar === void 0) {
      allowShortChar = false;
    }
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  };
  TinyColor2.prototype.toRgb = function() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toRgbString = function() {
    var r2 = Math.round(this.r);
    var g2 = Math.round(this.g);
    var b2 = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toPercentageRgb = function() {
    var fmt = function(x2) {
      return "".concat(Math.round(bound01(x2, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  TinyColor2.prototype.toPercentageRgbString = function() {
    var rnd = function(x2) {
      return Math.round(bound01(x2, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  TinyColor2.prototype.toName = function() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (var _i = 0, _a2 = Object.entries(names); _i < _a2.length; _i++) {
      var _b = _a2[_i], key2 = _b[0], value = _b[1];
      if (hex === value) {
        return key2;
      }
    }
    return false;
  };
  TinyColor2.prototype.toString = function(format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor2.prototype.toNumber = function() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor2.prototype.clone = function() {
    return new TinyColor2(this.toString());
  };
  TinyColor2.prototype.lighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.brighten = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor2(rgb);
  };
  TinyColor2.prototype.darken = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.tint = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("white", amount);
  };
  TinyColor2.prototype.shade = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix("black", amount);
  };
  TinyColor2.prototype.desaturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.saturate = function(amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.greyscale = function() {
    return this.desaturate(100);
  };
  TinyColor2.prototype.spin = function(amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.mix = function(color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor2(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor2(rgba);
  };
  TinyColor2.prototype.analogous = function(results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor2(hsl));
    }
    return ret;
  };
  TinyColor2.prototype.complement = function() {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor2(hsl);
  };
  TinyColor2.prototype.monochromatic = function(results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h2 = hsv.h;
    var s2 = hsv.s;
    var v2 = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
      v2 = (v2 + modification) % 1;
    }
    return res;
  };
  TinyColor2.prototype.splitcomplement = function() {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    return [
      this,
      new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
      new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
    ];
  };
  TinyColor2.prototype.onBackground = function(background) {
    var fg = this.toRgb();
    var bg = new TinyColor2(background).toRgb();
    var alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor2({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  };
  TinyColor2.prototype.triad = function() {
    return this.polyad(3);
  };
  TinyColor2.prototype.tetrad = function() {
    return this.polyad(4);
  };
  TinyColor2.prototype.polyad = function(n2) {
    var hsl = this.toHsl();
    var h2 = hsl.h;
    var result = [this];
    var increment = 360 / n2;
    for (var i2 = 1; i2 < n2; i2++) {
      result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
    }
    return result;
  };
  TinyColor2.prototype.equals = function(color) {
    return this.toRgbString() === new TinyColor2(color).toRgbString();
  };
  return TinyColor2;
}();
function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useFormDisabled();
  const ns = useNamespace("button");
  return computed(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new TinyColor(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}
const __default__$f = defineComponent({
  name: "ElButton"
});
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const buttonStyle = useButtonCustomStyle(props);
    const ns = useNamespace("button");
    const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } = useButton(props, emit);
    const buttonKls = computed(() => [
      ns.b(),
      ns.m(_type.value),
      ns.m(_size.value),
      ns.is("disabled", _disabled.value),
      ns.is("loading", props.loading),
      ns.is("plain", props.plain),
      ns.is("round", props.round),
      ns.is("circle", props.circle),
      ns.is("text", props.text),
      ns.is("link", props.link),
      ns.is("has-bg", props.bg)
    ]);
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        ref_key: "_ref",
        ref: _ref
      }, unref(_props), {
        class: unref(buttonKls),
        style: unref(buttonStyle),
        onClick: unref(handleClick)
      }), {
        default: withCtx(() => [
          _ctx.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon)))
              ]),
              _: 1
            }, 8, ["class"]))
          ], 64)) : _ctx.icon || _ctx.$slots.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
            default: withCtx(() => [
              _ctx.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon), { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
            ]),
            _: 3
          })) : createCommentVNode("v-if", true),
          _ctx.$slots.default ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: normalizeClass({ [unref(ns).em("text", "expand")]: unref(shouldAddSpace) })
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style", "onClick"]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$1(_sfc_main$C, [["__file", "button.vue"]]);
const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};
const __default__$e = defineComponent({
  name: "ElButtonGroup"
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    provide(buttonGroupContextKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns).b("group")}`)
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["__file", "button-group.vue"]]);
const ElButton = withInstall(Button, {
  ButtonGroup
});
withNoopInstall(ButtonGroup);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
      var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
      return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
    } }, m2 = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, v2 = { s: m2, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, u3 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
      return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: c2, y: h2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, g2 = "en", D2 = {};
    D2[g2] = M2;
    var p = "$isDayjsObject", S2 = function(t3) {
      return t3 instanceof _2 || !(!t3 || !t3[p]);
    }, w2 = function t3(e3, n3, r3) {
      var i3;
      if (!e3)
        return g2;
      if ("string" == typeof e3) {
        var s3 = e3.toLowerCase();
        D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
        var u3 = e3.split("-");
        if (!i3 && u3.length > 1)
          return t3(u3[0]);
      } else {
        var a3 = e3.name;
        D2[a3] = e3, i3 = a3;
      }
      return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
    }, O2 = function(t3, e3) {
      if (S2(t3))
        return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _2(n3);
    }, b2 = v2;
    b2.l = w2, b2.i = S2, b2.w = function(t3, e3) {
      return O2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _2 = function() {
      function M3(t3) {
        this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p] = true;
      }
      var m3 = M3.prototype;
      return m3.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3)
            return new Date(NaN);
          if (b2.u(e3))
            return new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match($2);
            if (r3) {
              var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
            }
          }
          return new Date(e3);
        }(t3), this.init();
      }, m3.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m3.$utils = function() {
        return b2;
      }, m3.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m3.isSame = function(t3, e3) {
        var n3 = O2(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m3.isAfter = function(t3, e3) {
        return O2(t3) < this.startOf(e3);
      }, m3.isBefore = function(t3, e3) {
        return this.endOf(e3) < O2(t3);
      }, m3.$g = function(t3, e3, n3) {
        return b2.u(t3) ? this[e3] : this.set(n3, t3);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t3, e3) {
        var n3 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
          var i3 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i3 : i3.endOf(a2);
        }, $3 = function(t4, e4) {
          return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
        switch (f3) {
          case h2:
            return r3 ? l3(1, 0) : l3(31, 11);
          case c2:
            return r3 ? l3(1, M4) : l3(0, M4 + 1);
          case o2:
            var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
            return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
          case a2:
          case d2:
            return $3(v3 + "Hours", 0);
          case u2:
            return $3(v3 + "Minutes", 1);
          case s2:
            return $3(v3 + "Seconds", 2);
          case i2:
            return $3(v3 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m3.$set = function(t3, e3) {
        var n3, o3 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o3], $3 = o3 === a2 ? this.$D + (e3 - this.$W) : e3;
        if (o3 === c2 || o3 === h2) {
          var y3 = this.clone().set(d2, 1);
          y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
        } else
          l3 && this.$d[l3]($3);
        return this.init(), this;
      }, m3.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m3.get = function(t3) {
        return this[b2.p(t3)]();
      }, m3.add = function(r3, f3) {
        var d3, l3 = this;
        r3 = Number(r3);
        var $3 = b2.p(f3), y3 = function(t3) {
          var e3 = O2(l3);
          return b2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
        };
        if ($3 === c2)
          return this.set(c2, this.$M + r3);
        if ($3 === h2)
          return this.set(h2, this.$y + r3);
        if ($3 === a2)
          return y3(1);
        if ($3 === o2)
          return y3(7);
        var M4 = (d3 = {}, d3[s2] = e2, d3[u2] = n2, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
        return b2.w(m4, this);
      }, m3.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m3.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || l2;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i4, s4) {
          return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
        }, d3 = function(t4) {
          return b2.s(s3 % 12 || 12, t4, "0");
        }, $3 = f3 || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(y2, function(t4, r4) {
          return r4 || function(t5) {
            switch (t5) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b2.s(e3.$y, 4, "0");
              case "M":
                return a3 + 1;
              case "MM":
                return b2.s(a3 + 1, 2, "0");
              case "MMM":
                return h3(n3.monthsShort, a3, c3, 3);
              case "MMMM":
                return h3(c3, a3);
              case "D":
                return e3.$D;
              case "DD":
                return b2.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h3(n3.weekdaysMin, e3.$W, o3, 2);
              case "ddd":
                return h3(n3.weekdaysShort, e3.$W, o3, 3);
              case "dddd":
                return o3[e3.$W];
              case "H":
                return String(s3);
              case "HH":
                return b2.s(s3, 2, "0");
              case "h":
                return d3(1);
              case "hh":
                return d3(2);
              case "a":
                return $3(s3, u3, true);
              case "A":
                return $3(s3, u3, false);
              case "m":
                return String(u3);
              case "mm":
                return b2.s(u3, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b2.s(e3.$s, 2, "0");
              case "SSS":
                return b2.s(e3.$ms, 3, "0");
              case "Z":
                return i3;
            }
            return null;
          }(t4) || i3.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r3, d3, l3) {
        var $3, y3 = this, M4 = b2.p(d3), m4 = O2(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
          return b2.m(y3, m4);
        };
        switch (M4) {
          case h2:
            $3 = D3() / 12;
            break;
          case c2:
            $3 = D3();
            break;
          case f2:
            $3 = D3() / 3;
            break;
          case o2:
            $3 = (g3 - v3) / 6048e5;
            break;
          case a2:
            $3 = (g3 - v3) / 864e5;
            break;
          case u2:
            $3 = g3 / n2;
            break;
          case s2:
            $3 = g3 / e2;
            break;
          case i2:
            $3 = g3 / t2;
            break;
          default:
            $3 = g3;
        }
        return l3 ? $3 : b2.a($3);
      }, m3.daysInMonth = function() {
        return this.endOf(c2).$D;
      }, m3.$locale = function() {
        return D2[this.$L];
      }, m3.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = w2(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m3.clone = function() {
        return b2.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), k2 = _2.prototype;
    return O2.prototype = k2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
      k2[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), O2.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _2, O2), t3.$i = true), O2;
    }, O2.locale = w2, O2.isDayjs = S2, O2.unix = function(t3) {
      return O2(1e3 * t3);
    }, O2.en = D2[g2], O2.Ls = D2, O2.p = {}, O2;
  });
})(dayjs_min);
var dayjs = dayjs_min.exports;
var customParseFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    var e2 = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t2 = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n2 = /\d\d/, r2 = /\d\d?/, i2 = /\d*[^-_:/,()\s\d]+/, o2 = {}, s2 = function(e3) {
      return (e3 = +e3) + (e3 > 68 ? 1900 : 2e3);
    };
    var a2 = function(e3) {
      return function(t3) {
        this[e3] = +t3;
      };
    }, f2 = [/[+-]\d\d:?(\d\d)?|Z/, function(e3) {
      (this.zone || (this.zone = {})).offset = function(e4) {
        if (!e4)
          return 0;
        if ("Z" === e4)
          return 0;
        var t3 = e4.match(/([+-]|\d\d)/g), n3 = 60 * t3[1] + (+t3[2] || 0);
        return 0 === n3 ? 0 : "+" === t3[0] ? -n3 : n3;
      }(e3);
    }], h2 = function(e3) {
      var t3 = o2[e3];
      return t3 && (t3.indexOf ? t3 : t3.s.concat(t3.f));
    }, u2 = function(e3, t3) {
      var n3, r3 = o2.meridiem;
      if (r3) {
        for (var i3 = 1; i3 <= 24; i3 += 1)
          if (e3.indexOf(r3(i3, 0, t3)) > -1) {
            n3 = i3 > 12;
            break;
          }
      } else
        n3 = e3 === (t3 ? "pm" : "PM");
      return n3;
    }, d2 = { A: [i2, function(e3) {
      this.afternoon = u2(e3, false);
    }], a: [i2, function(e3) {
      this.afternoon = u2(e3, true);
    }], S: [/\d/, function(e3) {
      this.milliseconds = 100 * +e3;
    }], SS: [n2, function(e3) {
      this.milliseconds = 10 * +e3;
    }], SSS: [/\d{3}/, function(e3) {
      this.milliseconds = +e3;
    }], s: [r2, a2("seconds")], ss: [r2, a2("seconds")], m: [r2, a2("minutes")], mm: [r2, a2("minutes")], H: [r2, a2("hours")], h: [r2, a2("hours")], HH: [r2, a2("hours")], hh: [r2, a2("hours")], D: [r2, a2("day")], DD: [n2, a2("day")], Do: [i2, function(e3) {
      var t3 = o2.ordinal, n3 = e3.match(/\d+/);
      if (this.day = n3[0], t3)
        for (var r3 = 1; r3 <= 31; r3 += 1)
          t3(r3).replace(/\[|\]/g, "") === e3 && (this.day = r3);
    }], M: [r2, a2("month")], MM: [n2, a2("month")], MMM: [i2, function(e3) {
      var t3 = h2("months"), n3 = (h2("monthsShort") || t3.map(function(e4) {
        return e4.slice(0, 3);
      })).indexOf(e3) + 1;
      if (n3 < 1)
        throw new Error();
      this.month = n3 % 12 || n3;
    }], MMMM: [i2, function(e3) {
      var t3 = h2("months").indexOf(e3) + 1;
      if (t3 < 1)
        throw new Error();
      this.month = t3 % 12 || t3;
    }], Y: [/[+-]?\d+/, a2("year")], YY: [n2, function(e3) {
      this.year = s2(e3);
    }], YYYY: [/\d{4}/, a2("year")], Z: f2, ZZ: f2 };
    function c2(n3) {
      var r3, i3;
      r3 = n3, i3 = o2 && o2.formats;
      for (var s3 = (n3 = r3.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t3, n4, r4) {
        var o3 = r4 && r4.toUpperCase();
        return n4 || i3[r4] || e2[r4] || i3[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e3, t4, n5) {
          return t4 || n5.slice(1);
        });
      })).match(t2), a3 = s3.length, f3 = 0; f3 < a3; f3 += 1) {
        var h3 = s3[f3], u3 = d2[h3], c3 = u3 && u3[0], l2 = u3 && u3[1];
        s3[f3] = l2 ? { regex: c3, parser: l2 } : h3.replace(/^\[|\]$/g, "");
      }
      return function(e3) {
        for (var t3 = {}, n4 = 0, r4 = 0; n4 < a3; n4 += 1) {
          var i4 = s3[n4];
          if ("string" == typeof i4)
            r4 += i4.length;
          else {
            var o3 = i4.regex, f4 = i4.parser, h4 = e3.slice(r4), u4 = o3.exec(h4)[0];
            f4.call(t3, u4), e3 = e3.replace(u4, "");
          }
        }
        return function(e4) {
          var t4 = e4.afternoon;
          if (void 0 !== t4) {
            var n5 = e4.hours;
            t4 ? n5 < 12 && (e4.hours += 12) : 12 === n5 && (e4.hours = 0), delete e4.afternoon;
          }
        }(t3), t3;
      };
    }
    return function(e3, t3, n3) {
      n3.p.customParseFormat = true, e3 && e3.parseTwoDigitYear && (s2 = e3.parseTwoDigitYear);
      var r3 = t3.prototype, i3 = r3.parse;
      r3.parse = function(e4) {
        var t4 = e4.date, r4 = e4.utc, s3 = e4.args;
        this.$u = r4;
        var a3 = s3[1];
        if ("string" == typeof a3) {
          var f3 = true === s3[2], h3 = true === s3[3], u3 = f3 || h3, d3 = s3[2];
          h3 && (d3 = s3[2]), o2 = this.$locale(), !f3 && d3 && (o2 = n3.Ls[d3]), this.$d = function(e5, t5, n4) {
            try {
              if (["x", "X"].indexOf(t5) > -1)
                return new Date(("X" === t5 ? 1e3 : 1) * e5);
              var r5 = c2(t5)(e5), i4 = r5.year, o3 = r5.month, s4 = r5.day, a4 = r5.hours, f4 = r5.minutes, h4 = r5.seconds, u4 = r5.milliseconds, d4 = r5.zone, l3 = new Date(), m3 = s4 || (i4 || o3 ? 1 : l3.getDate()), M3 = i4 || l3.getFullYear(), Y2 = 0;
              i4 && !o3 || (Y2 = o3 > 0 ? o3 - 1 : l3.getMonth());
              var p = a4 || 0, v2 = f4 || 0, D2 = h4 || 0, g2 = u4 || 0;
              return d4 ? new Date(Date.UTC(M3, Y2, m3, p, v2, D2, g2 + 60 * d4.offset * 1e3)) : n4 ? new Date(Date.UTC(M3, Y2, m3, p, v2, D2, g2)) : new Date(M3, Y2, m3, p, v2, D2, g2);
            } catch (e6) {
              return new Date("");
            }
          }(t4, a3, r4), this.init(), d3 && true !== d3 && (this.$L = this.locale(d3).$L), u3 && t4 != this.format(a3) && (this.$d = new Date("")), o2 = {};
        } else if (a3 instanceof Array)
          for (var l2 = a3.length, m2 = 1; m2 <= l2; m2 += 1) {
            s3[1] = a3[m2 - 1];
            var M2 = n3.apply(this, s3);
            if (M2.isValid()) {
              this.$d = M2.$d, this.$L = M2.$L, this.init();
              break;
            }
            m2 === l2 && (this.$d = new Date(""));
          }
        else
          i3.call(this, e4);
      };
    };
  });
})(customParseFormat$1);
var customParseFormat = customParseFormat$1.exports;
const timeUnits = ["hours", "minutes", "seconds"];
const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  years: "YYYY",
  month: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};
const buildTimeList = (value, bound) => {
  return [
    value > 0 ? value - 1 : void 0,
    value,
    value < bound ? value + 1 : void 0
  ];
};
const rangeArr = (n2) => Array.from(Array.from({ length: n2 }).keys());
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const dateEquals = function(a2, b2) {
  const aIsDate = isDate(a2);
  const bIsDate = isDate(b2);
  if (aIsDate && bIsDate) {
    return a2.getTime() === b2.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a2 === b2;
  }
  return false;
};
const valueEquals = function(a2, b2) {
  const aIsArray = isArray$2(a2);
  const bIsArray = isArray$2(b2);
  if (aIsArray && bIsArray) {
    if (a2.length !== b2.length) {
      return false;
    }
    return a2.every((item, index2) => dateEquals(item, b2[index2]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a2, b2);
  }
  return false;
};
const parseDate = function(date2, format, lang) {
  const day = isEmpty(format) || format === "x" ? dayjs(date2).locale(lang) : dayjs(date2, format).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date2, format, lang) {
  if (isEmpty(format))
    return date2;
  if (format === "x")
    return +date2;
  return dayjs(date2).locale(lang).format(format);
};
const makeList = (total, method) => {
  var _a2;
  const arr = [];
  const disabledArr = method == null ? void 0 : method();
  for (let i2 = 0; i2 < total; i2++) {
    arr.push((_a2 = disabledArr == null ? void 0 : disabledArr.includes(i2)) != null ? _a2 : false);
  }
  return arr;
};
const disabledTimeListsProps = buildProps({
  disabledHours: {
    type: definePropType(Function)
  },
  disabledMinutes: {
    type: definePropType(Function)
  },
  disabledSeconds: {
    type: definePropType(Function)
  }
});
const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});
const timePickerDefaultProps = buildProps({
  id: {
    type: definePropType([Array, String])
  },
  name: {
    type: definePropType([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  dateFormat: String,
  timeFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: circle_close_default
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  size: useSizeProp,
  readonly: Boolean,
  disabled: Boolean,
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: Boolean,
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: Boolean,
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: definePropType([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean,
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const _hoisted_1$l = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2$g = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const __default__$d = defineComponent({
  name: "Picker"
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const attrs = useAttrs$2();
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const { form, formItem } = useFormItem();
    const elPopperOptions = inject("ElPopperOptions", {});
    const { valueOnClear } = useEmptyValues(props, null);
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    let hasJustTabExitedInput = false;
    let ignoreFocusEvent = false;
    const rangeInputKls = computed(() => [
      nsDate.b("editor"),
      nsDate.bm("editor", props.type),
      nsInput.e("wrapper"),
      nsDate.is("disabled", pickerDisabled.value),
      nsDate.is("active", pickerVisible.value),
      nsRange.b("editor"),
      pickerSize ? nsRange.bm("editor", pickerSize.value) : "",
      attrs.class
    ]);
    const clearIconKls = computed(() => [
      nsInput.e("icon"),
      nsRange.e("close-icon"),
      !showClose.value ? nsRange.e("close-icon--hidden") : ""
    ]);
    watch(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
      } else {
        nextTick(() => {
          if (val) {
            valueOnOpen.value = props.modelValue;
          }
        });
      }
    });
    const emitChange = (val, isClear) => {
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        emit("change", val);
        props.validateEvent && (formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn()));
      }
    };
    const emitInput = (input) => {
      if (!valueEquals(props.modelValue, input)) {
        let formatted;
        if (isArray$2(input)) {
          formatted = input.map((item) => formatter(item, props.valueFormat, lang.value));
        } else if (input) {
          formatted = formatter(input, props.valueFormat, lang.value);
        }
        emit("update:modelValue", input ? formatted : input, lang.value);
      }
    };
    const emitKeydown = (e2) => {
      emit("keydown", e2);
    };
    const refInput = computed(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const focusOnInputBox = () => {
      focus(true, true);
      nextTick(() => {
        ignoreFocusEvent = false;
      });
    };
    const onPick = (date2 = "", visible = false) => {
      if (!visible) {
        ignoreFocusEvent = true;
      }
      pickerVisible.value = visible;
      let result;
      if (isArray$2(date2)) {
        result = date2.map((_2) => _2.toDate());
      } else {
        result = date2 ? date2.toDate() : date2;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      emit("visible-change", true);
    };
    const onKeydownPopperContent = (event) => {
      if ((event == null ? void 0 : event.key) === EVENT_CODE.esc) {
        focus(true, true);
      }
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      pickerVisible.value = false;
      ignoreFocusEvent = false;
      emit("visible-change", false);
    };
    const handleOpen = () => {
      pickerVisible.value = true;
    };
    const handleClose = () => {
      pickerVisible.value = false;
    };
    const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
      ignoreFocusEvent = isIgnoreFocusEvent;
      const [leftInput, rightInput] = unref(refInput);
      let input = leftInput;
      if (!focusStartInput && isRangeInput.value) {
        input = rightInput;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocusInput = (e2) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value || ignoreFocusEvent) {
        return;
      }
      pickerVisible.value = true;
      emit("focus", e2);
    };
    let currentHandleBlurDeferCallback = void 0;
    const handleBlurInput = (e2) => {
      const handleBlurDefer = async () => {
        setTimeout(() => {
          var _a2;
          if (currentHandleBlurDeferCallback === handleBlurDefer) {
            if (!(((_a2 = refPopper.value) == null ? void 0 : _a2.isFocusInsideContent()) && !hasJustTabExitedInput) && refInput.value.filter((input) => {
              return input.contains(document.activeElement);
            }).length === 0) {
              handleChange();
              pickerVisible.value = false;
              emit("blur", e2);
              props.validateEvent && (formItem == null ? void 0 : formItem.validate("blur").catch((err) => debugWarn()));
            }
            hasJustTabExitedInput = false;
          }
        }, 0);
      };
      currentHandleBlurDeferCallback = handleBlurDefer;
      handleBlurDefer();
    };
    const pickerDisabled = computed(() => {
      return props.disabled || (form == null ? void 0 : form.disabled);
    });
    const parsedValue2 = computed(() => {
      let dayOrDays;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          dayOrDays = pickerOptions.value.getDefaultValue();
        }
      } else {
        if (isArray$2(props.modelValue)) {
          dayOrDays = props.modelValue.map((d2) => parseDate(d2, props.valueFormat, lang.value));
        } else {
          dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
        if (!isEqual(availableResult, dayOrDays)) {
          dayOrDays = availableResult;
          emitInput(isArray$2(dayOrDays) ? dayOrDays.map((_2) => _2.toDate()) : dayOrDays.toDate());
        }
      }
      if (isArray$2(dayOrDays) && dayOrDays.some((day) => !day)) {
        dayOrDays = [];
      }
      return dayOrDays;
    });
    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady)
        return "";
      const formattedValue = formatDayjsToString(parsedValue2.value);
      if (isArray$2(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return "";
      if (!pickerVisible.value && valueIsEmpty.value)
        return "";
      if (formattedValue) {
        return isDatesPicker.value || isYearsPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed(() => props.type.includes("time"));
    const isTimePicker = computed(() => props.type.startsWith("time"));
    const isDatesPicker = computed(() => props.type === "dates");
    const isYearsPicker = computed(() => props.type === "years");
    const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? clock_default : calendar_default));
    const showClose = ref(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        focusOnInputBox();
        emitInput(valueOnClear.value);
        emitChange(valueOnClear.value, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = computed(() => {
      const { modelValue } = props;
      return !modelValue || isArray$2(modelValue) && !modelValue.filter(Boolean).length;
    });
    const onMouseDownInput = async (event) => {
      var _a2;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a2 = event.target) == null ? void 0 : _a2.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const onTouchStartInput = (event) => {
      var _a2;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a2 = event.touches[0].target) == null ? void 0 : _a2.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const isRangeInput = computed(() => {
      return props.type.includes("range");
    });
    const pickerSize = useFormSize();
    const popperEl = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = unref(refPopper)) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = computed(() => {
      var _a2;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a2 = unref(inputRef)) == null ? void 0 : _a2.$el;
    });
    onClickOutside(actualInputRef, (e2) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unref(actualInputRef);
      if (unrefedPopperEl && (e2.target === unrefedPopperEl || e2.composedPath().includes(unrefedPopperEl)) || e2.target === inputEl || e2.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = ref(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput(isArray$2(value) ? value.map((_2) => _2.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(valueOnClear.value);
        emitChange(valueOnClear.value);
        userInput.value = null;
      }
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydownInput = async (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      const { code } = event;
      emitKeydown(event);
      if (code === EVENT_CODE.esc) {
        if (pickerVisible.value === true) {
          pickerVisible.value = false;
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (code === EVENT_CODE.down) {
        if (pickerOptions.value.handleFocusPicker) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (pickerVisible.value === false) {
          pickerVisible.value = true;
          await nextTick();
        }
        if (pickerOptions.value.handleFocusPicker) {
          pickerOptions.value.handleFocusPicker();
          return;
        }
      }
      if (code === EVENT_CODE.tab) {
        hasJustTabExitedInput = true;
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydownInput) {
        pickerOptions.value.handleKeydownInput(event);
      }
    };
    const onUserInput = (e2) => {
      userInput.value = e2;
      if (!pickerVisible.value) {
        pickerVisible.value = true;
      }
    };
    const handleStartInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [target.value, userInput.value[1]];
      } else {
        userInput.value = [target.value, null];
      }
    };
    const handleEndInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [userInput.value[0], target.value];
      } else {
        userInput.value = [null, target.value];
      }
    };
    const handleStartChange = () => {
      var _a2;
      const values = userInput.value;
      const value = parseUserInputToDayjs(values && values[0]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          formatDayjsToString(value),
          ((_a2 = displayValue.value) == null ? void 0 : _a2[1]) || null
        ];
        const newValue = [value, parsedVal && (parsedVal[1] || null)];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      var _a2;
      const values = unref(userInput);
      const value = parseUserInputToDayjs(values && values[1]);
      const parsedVal = unref(parsedValue2);
      if (value && value.isValid()) {
        userInput.value = [
          ((_a2 = unref(displayValue)) == null ? void 0 : _a2[0]) || null,
          formatDayjsToString(value)
        ];
        const newValue = [parsedVal && parsedVal[0], value];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = ref({});
    const onSetPickerOption = (e2) => {
      pickerOptions.value[e2[0]] = e2[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e2) => {
      emit("calendar-change", e2);
    };
    const onPanelChange = (value, mode, view) => {
      emit("panel-change", value, mode, view);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-time-picker",
      ref: "https://element-plus.org/en-US/component/time-picker.html"
    }, computed(() => !!props.label));
    expose({
      focus,
      handleFocusInput,
      handleBlurInput,
      handleOpen,
      handleClose,
      onPick
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "refPopper",
        ref: refPopper,
        visible: pickerVisible.value,
        effect: "light",
        pure: "",
        trigger: "click"
      }, _ctx.$attrs, {
        role: "dialog",
        teleported: "",
        transition: `${unref(nsDate).namespace.value}-zoom-in-top`,
        "popper-class": [`${unref(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
        "popper-options": unref(elPopperOptions),
        "fallback-placements": ["bottom", "top", "right", "left"],
        "gpu-acceleration": false,
        "stop-popper-mouse-event": false,
        "hide-after": 0,
        persistent: "",
        onBeforeShow,
        onShow,
        onHide
      }), {
        default: withCtx(() => [
          !unref(isRangeInput) ? (openBlock(), createBlock(unref(ElInput), {
            key: 0,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "container-role": "combobox",
            "model-value": unref(displayValue),
            name: _ctx.name,
            size: unref(pickerSize),
            disabled: unref(pickerDisabled),
            placeholder: _ctx.placeholder,
            class: normalizeClass([unref(nsDate).b("editor"), unref(nsDate).bm("editor", _ctx.type), _ctx.$attrs.class]),
            style: normalizeStyle(_ctx.$attrs.style),
            readonly: !_ctx.editable || _ctx.readonly || unref(isDatesPicker) || unref(isYearsPicker) || _ctx.type === "week",
            "aria-label": _ctx.label || _ctx.ariaLabel,
            tabindex: _ctx.tabindex,
            "validate-event": false,
            onInput: onUserInput,
            onFocus: handleFocusInput,
            onBlur: handleBlurInput,
            onKeydown: handleKeydownInput,
            onChange: handleChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstartPassive: onTouchStartInput,
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, {
            prefix: withCtx(() => [
              unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(nsInput).e("icon")),
                onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
                onTouchstartPassive: onTouchStartInput
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
            ]),
            suffix: withCtx(() => [
              showClose.value && _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(`${unref(nsInput).e("icon")} clear-icon`),
                onClick: withModifiers(onClearIconClick, ["stop"])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "aria-label", "tabindex", "onKeydown"])) : (openBlock(), createElementBlock("div", {
            key: 1,
            ref_key: "inputRef",
            ref: inputRef,
            class: normalizeClass(unref(rangeInputKls)),
            style: normalizeStyle(_ctx.$attrs.style),
            onClick: handleFocusInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstartPassive: onTouchStartInput,
            onKeydown: handleKeydownInput
          }, [
            unref(triggerIcon) ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass([unref(nsInput).e("icon"), unref(nsRange).e("icon")]),
              onMousedown: withModifiers(onMouseDownInput, ["prevent"]),
              onTouchstartPassive: onTouchStartInput
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(triggerIcon))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
            createElementVNode("input", {
              id: _ctx.id && _ctx.id[0],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[0],
              placeholder: _ctx.startPlaceholder,
              value: unref(displayValue) && unref(displayValue)[0],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onInput: handleStartInput,
              onChange: handleStartChange,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput
            }, null, 42, _hoisted_1$l),
            renderSlot(_ctx.$slots, "range-separator", {}, () => [
              createElementVNode("span", {
                class: normalizeClass(unref(nsRange).b("separator"))
              }, toDisplayString(_ctx.rangeSeparator), 3)
            ]),
            createElementVNode("input", {
              id: _ctx.id && _ctx.id[1],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[1],
              placeholder: _ctx.endPlaceholder,
              value: unref(displayValue) && unref(displayValue)[1],
              disabled: unref(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: normalizeClass(unref(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput,
              onInput: handleEndInput,
              onChange: handleEndChange
            }, null, 42, _hoisted_2$g),
            _ctx.clearIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 1,
              class: normalizeClass(unref(clearIconKls)),
              onClick: onClearIconClick
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("v-if", true)
          ], 38))
        ]),
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {
            visible: pickerVisible.value,
            actualVisible: pickerActualVisible.value,
            parsedValue: unref(parsedValue2),
            format: _ctx.format,
            dateFormat: _ctx.dateFormat,
            timeFormat: _ctx.timeFormat,
            unlinkPanels: _ctx.unlinkPanels,
            type: _ctx.type,
            defaultValue: _ctx.defaultValue,
            onPick,
            onSelectRange: setSelectionRange,
            onSetPickerOption,
            onCalendarChange,
            onPanelChange,
            onKeydown: onKeydownPopperContent,
            onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["stop"]))
          })
        ]),
        _: 3
      }, 16, ["visible", "transition", "popper-class", "popper-options"]);
    };
  }
});
var CommonPicker = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["__file", "picker.vue"]]);
const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType(Object)
  }
});
const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds
}) => {
  const getAvailableTime = (date2, role, first, compareDate) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds
    };
    let result = date2;
    ["hour", "minute", "second"].forEach((type) => {
      if (availableTimeGetters[type]) {
        let availableTimeSlots;
        const method = availableTimeGetters[type];
        switch (type) {
          case "minute": {
            availableTimeSlots = method(result.hour(), role, compareDate);
            break;
          }
          case "second": {
            availableTimeSlots = method(result.hour(), result.minute(), role, compareDate);
            break;
          }
          default: {
            availableTimeSlots = method(role, compareDate);
            break;
          }
        }
        if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type]())) {
          const pos = first ? 0 : availableTimeSlots.length - 1;
          result = result[type](availableTimeSlots[pos]);
        }
      }
    });
    return result;
  };
  const timePickerOptions = {};
  const onSetOption = ([key2, val]) => {
    timePickerOptions[key2] = val;
  };
  return {
    timePickerOptions,
    getAvailableTime,
    onSetOption
  };
};
const makeAvailableArr = (disabledList) => {
  const trueOrNumber = (isDisabled, index2) => isDisabled || index2;
  const getNumber = (predicate) => predicate !== true;
  return disabledList.map(trueOrNumber).filter(getNumber);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = ref(props.parsedValue);
  watch(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};
const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (isClient) {
  document.addEventListener("mousedown", (e2) => startClick = e2);
  document.addEventListener("mouseup", (e2) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e2, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const REPEAT_INTERVAL = 100;
const REPEAT_DELAY = 600;
const vRepeatClick = {
  beforeMount(el, binding) {
    const value = binding.value;
    const { interval = REPEAT_INTERVAL, delay = REPEAT_DELAY } = isFunction$2(value) ? {} : value;
    let intervalId;
    let delayId;
    const handler = () => isFunction$2(value) ? value() : value.handler();
    const clear = () => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = void 0;
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    el.addEventListener("mousedown", (evt) => {
      if (evt.button !== 0)
        return;
      clear();
      handler();
      document.addEventListener("mouseup", () => clear(), {
        once: true
      });
      delayId = setTimeout(() => {
        intervalId = setInterval(() => {
          handler();
        }, interval);
      }, delay);
    });
  }
};
const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: definePropType(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: definePropType(String),
    default: ""
  },
  ...disabledTimeListsProps
});
const _hoisted_1$k = ["onClick"];
const _hoisted_2$f = ["onMouseenter"];
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "basic-time-spinner",
  props: basicTimeSpinnerProps,
  emits: ["change", "select-range", "set-option"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("time");
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    let isScrolling = false;
    const currentScrollbar = ref();
    const listHoursRef = ref();
    const listMinutesRef = ref();
    const listSecondsRef = ref();
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = computed(() => {
      return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
    });
    const timePartials = computed(() => {
      const { spinnerDate } = props;
      const hours = spinnerDate.hour();
      const minutes = spinnerDate.minute();
      const seconds = spinnerDate.second();
      return { hours, minutes, seconds };
    });
    const timeList = computed(() => {
      const { hours, minutes } = unref(timePartials);
      return {
        hours: getHoursList(props.role),
        minutes: getMinutesList(hours, props.role),
        seconds: getSecondsList(hours, minutes, props.role)
      };
    });
    const arrowControlTimeList = computed(() => {
      const { hours, minutes, seconds } = unref(timePartials);
      return {
        hours: buildTimeList(hours, 23),
        minutes: buildTimeList(minutes, 59),
        seconds: buildTimeList(seconds, 59)
      };
    });
    const debouncedResetScroll = debounce((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      let range;
      switch (type) {
        case "hours":
          range = [0, 2];
          break;
        case "minutes":
          range = [3, 5];
          break;
        case "seconds":
          range = [6, 8];
          break;
      }
      const [left, right] = range;
      emit("select-range", left, right);
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, unref(timePartials)[type]);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const scrollbar = unref(listRefsMap[type]);
      if (scrollbar && scrollbar.$el) {
        getScrollbarElement(scrollbar.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const scrollbar = unref(listRefsMap[type]);
      const listItem = scrollbar == null ? void 0 : scrollbar.$el.querySelector("li");
      if (listItem) {
        return Number.parseFloat(getStyle(listItem, "height")) || 0;
      }
      return 0;
    };
    const onIncrement = () => {
      scrollDown(1);
    };
    const onDecrement = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      const now2 = unref(timePartials)[label];
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      const next = findNextUnDisabled(label, now2, step, total);
      modifyDateField(label, next);
      adjustSpinner(label, next);
      nextTick(() => emitSelectRange(label));
    };
    const findNextUnDisabled = (type, now2, step, total) => {
      let next = (now2 + step + total) % total;
      const list = unref(timeList)[type];
      while (list[next] && next !== now2) {
        next = (next + step + total) % total;
      }
      return next;
    };
    const modifyDateField = (type, value) => {
      const list = unref(timeList)[type];
      const isDisabled = list[value];
      if (isDisabled)
        return;
      const { hours, minutes, seconds } = unref(timePartials);
      let changeTo;
      switch (type) {
        case "hours":
          changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
          break;
        case "minutes":
          changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
          break;
        case "seconds":
          changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
          break;
      }
      emit("change", changeTo);
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement(unref(listRefsMap[type]).$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return unref(listRefsMap[type]).$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        const scrollbar = unref(listRefsMap[type]);
        if (scrollbar && scrollbar.$el) {
          getScrollbarElement(scrollbar.$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type) => {
      listRefsMap[type].value = scrollbar;
    };
    emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    watch(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b("spinner"), { "has-seconds": _ctx.showSeconds }])
      }, [
        !_ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createBlock(unref(ElScrollbar), {
            key: item,
            ref_for: true,
            ref: (scrollbar) => setRef(scrollbar, item),
            class: normalizeClass(unref(ns).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": unref(ns).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: ($event) => emitSelectRange(item),
            onMousemove: ($event) => adjustCurrentSpinner(item)
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(timeList)[item], (disabled, key2) => {
                return openBlock(), createElementBlock("li", {
                  key: key2,
                  class: normalizeClass([
                    unref(ns).be("spinner", "item"),
                    unref(ns).is("active", key2 === unref(timePartials)[item]),
                    unref(ns).is("disabled", disabled)
                  ]),
                  onClick: ($event) => handleClick(item, { value: key2, disabled })
                }, [
                  item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? key2 % 12 || 12 : key2)).slice(-2)) + toDisplayString(getAmPmFlag(key2)), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(("0" + key2).slice(-2)), 1)
                  ], 64))
                ], 10, _hoisted_1$k);
              }), 128))
            ]),
            _: 2
          }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
        }), 128)) : createCommentVNode("v-if", true),
        _ctx.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(spinnerItems), (item) => {
          return openBlock(), createElementBlock("div", {
            key: item,
            class: normalizeClass([unref(ns).be("spinner", "wrapper"), unref(ns).is("arrow")]),
            onMouseenter: ($event) => emitSelectRange(item)
          }, [
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-up", unref(ns).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_up_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onDecrement]
            ]),
            withDirectives((openBlock(), createBlock(unref(ElIcon), {
              class: normalizeClass(["arrow-down", unref(ns).be("spinner", "arrow")])
            }, {
              default: withCtx(() => [
                createVNode(unref(arrow_down_default))
              ]),
              _: 1
            }, 8, ["class"])), [
              [unref(vRepeatClick), onIncrement]
            ]),
            createElementVNode("ul", {
              class: normalizeClass(unref(ns).be("spinner", "list"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(arrowControlTimeList)[item], (time, key2) => {
                return openBlock(), createElementBlock("li", {
                  key: key2,
                  class: normalizeClass([
                    unref(ns).be("spinner", "item"),
                    unref(ns).is("active", time === unref(timePartials)[item]),
                    unref(ns).is("disabled", unref(timeList)[item][time])
                  ])
                }, [
                  typeof time === "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    item === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + toDisplayString(getAmPmFlag(time)), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(("0" + time).slice(-2)), 1)
                    ], 64))
                  ], 64)) : createCommentVNode("v-if", true)
                ], 2);
              }), 128))
            ], 2)
          ], 42, _hoisted_2$f);
        }), 128)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var TimeSpinner = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__file", "basic-time-spinner.vue"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "panel-time-pick",
  props: panelTimePickerProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
    const ns = useNamespace("time");
    const { t: t2, lang } = useLocale();
    const selectionRange = ref([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = computed(() => {
      return isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index2 = list.indexOf(selectionRange.value[0]);
      const next = (index2 + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const getRangeAvailableTime = (date2) => {
      return getAvailableTime(date2, props.datetimeRole || "", true);
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs(value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue2 = () => {
      return dayjs(defaultValue).locale(lang.value);
    };
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue2]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: unref(transitionName) }, {
        default: withCtx(() => [
          _ctx.actualVisible || _ctx.visible ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).b("panel"))
          }, [
            createElementVNode("div", {
              class: normalizeClass([unref(ns).be("panel", "content"), { "has-seconds": unref(showSeconds) }])
            }, [
              createVNode(TimeSpinner, {
                ref: "spinner",
                role: _ctx.datetimeRole || "start",
                "arrow-control": unref(arrowControl),
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "spinner-date": _ctx.parsedValue,
                "disabled-hours": unref(disabledHours),
                "disabled-minutes": unref(disabledMinutes),
                "disabled-seconds": unref(disabledSeconds),
                onChange: handleChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setSelectionRange
              }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).be("panel", "footer"))
            }, [
              createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).be("panel", "btn"), "cancel"]),
                onClick: handleCancel
              }, toDisplayString(unref(t2)("el.datepicker.cancel")), 3),
              createElementVNode("button", {
                type: "button",
                class: normalizeClass([unref(ns).be("panel", "btn"), "confirm"]),
                onClick: _cache[0] || (_cache[0] = ($event) => handleConfirm())
              }, toDisplayString(unref(t2)("el.datepicker.confirm")), 3)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var TimePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__file", "panel-time-pick.vue"]]);
const panelTimeRangeProps = buildProps({
  ...timePanelSharedProps,
  parsedValue: {
    type: definePropType(Array)
  }
});
const _hoisted_1$j = ["disabled"];
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "panel-time-range",
  props: panelTimeRangeProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const makeSelectRange = (start, end) => {
      const result = [];
      for (let i2 = start; i2 <= end; i2++) {
        result.push(i2);
      }
      return result;
    };
    const { t: t2, lang } = useLocale();
    const nsTime = useNamespace("time");
    const nsPicker = useNamespace("picker");
    const pickerBase = inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const startContainerKls = computed(() => [
      nsTime.be("range-picker", "body"),
      nsTime.be("panel", "content"),
      nsTime.is("arrow", arrowControl),
      showSeconds.value ? "has-seconds" : ""
    ]);
    const endContainerKls = computed(() => [
      nsTime.be("range-picker", "body"),
      nsTime.be("panel", "content"),
      nsTime.is("arrow", arrowControl),
      showSeconds.value ? "has-seconds" : ""
    ]);
    const startTime = computed(() => props.parsedValue[0]);
    const endTime = computed(() => props.parsedValue[1]);
    const oldValue = useOldValue(props);
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const showSeconds = computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const handleConfirm = (visible = false) => {
      emit("pick", [startTime.value, endTime.value], visible);
    };
    const handleMinChange = (date2) => {
      handleChange(date2.millisecond(0), endTime.value);
    };
    const handleMaxChange = (date2) => {
      handleChange(startTime.value, date2.millisecond(0));
    };
    const isValidValue = (_date) => {
      const parsedDate = _date.map((_2) => dayjs(_2).locale(lang.value));
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1]);
    };
    const handleChange = (start, end) => {
      emit("pick", [start, end], true);
    };
    const btnConfirmDisabled = computed(() => {
      return startTime.value > endTime.value;
    });
    const selectionRange = ref([0, 2]);
    const setMinSelectionRange = (start, end) => {
      emit("select-range", start, end, "min");
      selectionRange.value = [start, end];
    };
    const offset = computed(() => showSeconds.value ? 11 : 8);
    const setMaxSelectionRange = (start, end) => {
      emit("select-range", start, end, "max");
      const _offset = unref(offset);
      selectionRange.value = [start + _offset, end + _offset];
    };
    const changeSelectionRange = (step) => {
      const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index2 = list.indexOf(selectionRange.value[0]);
      const next = (index2 + step + list.length) % list.length;
      const half = list.length / 2;
      if (next < half) {
        timePickerOptions["start_emitSelectRange"](mapping[next]);
      } else {
        timePickerOptions["end_emitSelectRange"](mapping[next - half]);
      }
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        const role = selectionRange.value[0] < offset.value ? "start" : "end";
        timePickerOptions[`${role}_scrollDown`](step);
        event.preventDefault();
        return;
      }
    };
    const disabledHours_ = (role, compare) => {
      const defaultDisable = disabledHours ? disabledHours(role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1);
      return union$1(defaultDisable, nextDisable);
    };
    const disabledMinutes_ = (hour, role, compare) => {
      const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      if (hour !== compareHour) {
        return defaultDisable;
      }
      const compareMinute = compareDate.minute();
      const nextDisable = isStart ? makeSelectRange(compareMinute + 1, 59) : makeSelectRange(0, compareMinute - 1);
      return union$1(defaultDisable, nextDisable);
    };
    const disabledSeconds_ = (hour, minute, role, compare) => {
      const defaultDisable = disabledSeconds ? disabledSeconds(hour, minute, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      const compareMinute = compareDate.minute();
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultDisable;
      }
      const compareSecond = compareDate.second();
      const nextDisable = isStart ? makeSelectRange(compareSecond + 1, 59) : makeSelectRange(0, compareSecond - 1);
      return union$1(defaultDisable, nextDisable);
    };
    const getRangeAvailableTime = ([start, end]) => {
      return [
        getAvailableTime(start, "start", true, end),
        getAvailableTime(end, "end", false, start)
      ];
    };
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours_, disabledMinutes_, disabledSeconds_);
    const {
      timePickerOptions,
      getAvailableTime,
      onSetOption
    } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const parseUserInput = (days) => {
      if (!days)
        return null;
      if (isArray$2(days)) {
        return days.map((d2) => dayjs(d2, props.format).locale(lang.value));
      }
      return dayjs(days, props.format).locale(lang.value);
    };
    const formatToString = (days) => {
      if (!days)
        return null;
      if (isArray$2(days)) {
        return days.map((d2) => d2.format(props.format));
      }
      return days.format(props.format);
    };
    const getDefaultValue2 = () => {
      if (isArray$2(defaultValue)) {
        return defaultValue.map((d2) => dayjs(d2).locale(lang.value));
      }
      const defaultDay = dayjs(defaultValue).locale(lang.value);
      return [defaultDay, defaultDay.add(60, "m")];
    };
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue2]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    return (_ctx, _cache) => {
      return _ctx.actualVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(nsTime).b("range-picker"), unref(nsPicker).b("panel")])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(nsTime).be("range-picker", "content"))
        }, [
          createElementVNode("div", {
            class: normalizeClass(unref(nsTime).be("range-picker", "cell"))
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(nsTime).be("range-picker", "header"))
            }, toDisplayString(unref(t2)("el.datepicker.startTime")), 3),
            createElementVNode("div", {
              class: normalizeClass(unref(startContainerKls))
            }, [
              createVNode(TimeSpinner, {
                ref: "minSpinner",
                role: "start",
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "arrow-control": unref(arrowControl),
                "spinner-date": unref(startTime),
                "disabled-hours": disabledHours_,
                "disabled-minutes": disabledMinutes_,
                "disabled-seconds": disabledSeconds_,
                onChange: handleMinChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setMinSelectionRange
              }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
            ], 2)
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(unref(nsTime).be("range-picker", "cell"))
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(nsTime).be("range-picker", "header"))
            }, toDisplayString(unref(t2)("el.datepicker.endTime")), 3),
            createElementVNode("div", {
              class: normalizeClass(unref(endContainerKls))
            }, [
              createVNode(TimeSpinner, {
                ref: "maxSpinner",
                role: "end",
                "show-seconds": unref(showSeconds),
                "am-pm-mode": unref(amPmMode),
                "arrow-control": unref(arrowControl),
                "spinner-date": unref(endTime),
                "disabled-hours": disabledHours_,
                "disabled-minutes": disabledMinutes_,
                "disabled-seconds": disabledSeconds_,
                onChange: handleMaxChange,
                onSetOption: unref(onSetOption),
                onSelectRange: setMaxSelectionRange
              }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
            ], 2)
          ], 2)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(unref(nsTime).be("panel", "footer"))
        }, [
          createElementVNode("button", {
            type: "button",
            class: normalizeClass([unref(nsTime).be("panel", "btn"), "cancel"]),
            onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
          }, toDisplayString(unref(t2)("el.datepicker.cancel")), 3),
          createElementVNode("button", {
            type: "button",
            class: normalizeClass([unref(nsTime).be("panel", "btn"), "confirm"]),
            disabled: unref(btnConfirmDisabled),
            onClick: _cache[1] || (_cache[1] = ($event) => handleConfirm())
          }, toDisplayString(unref(t2)("el.datepicker.confirm")), 11, _hoisted_1$j)
        ], 2)
      ], 2)) : createCommentVNode("v-if", true);
    };
  }
});
var TimeRangePanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__file", "panel-time-range.vue"]]);
dayjs.extend(customParseFormat);
var TimePicker = defineComponent({
  name: "ElTimePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    isRange: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const commonPicker = ref();
    const [type, Panel] = props.isRange ? ["timerange", TimeRangePanel] : ["time", TimePickPanel];
    const modelUpdater = (value) => ctx.emit("update:modelValue", value);
    provide("ElPopperOptions", props.popperOptions);
    ctx.expose({
      focus: (e2) => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleFocusInput(e2);
      },
      blur: (e2) => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleBlurInput(e2);
      },
      handleOpen: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleOpen();
      },
      handleClose: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleClose();
      }
    });
    return () => {
      var _a2;
      const format = (_a2 = props.format) != null ? _a2 : DEFAULT_FORMATS_TIME;
      return createVNode(CommonPicker, mergeProps(props, {
        "ref": commonPicker,
        "type": type,
        "format": format,
        "onUpdate:modelValue": modelUpdater
      }), {
        default: (props2) => createVNode(Panel, props2, null)
      });
    };
  }
});
const _TimePicker = TimePicker;
_TimePicker.install = (app) => {
  app.component(_TimePicker.name, _TimePicker);
};
const ElTimePicker = _TimePicker;
var localeData$1 = { exports: {} };
(function(module2, exports2) {
  !function(n2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    return function(n2, e2, t2) {
      var r2 = e2.prototype, o2 = function(n3) {
        return n3 && (n3.indexOf ? n3 : n3.s);
      }, u2 = function(n3, e3, t3, r3, u3) {
        var i3 = n3.name ? n3 : n3.$locale(), a3 = o2(i3[e3]), s3 = o2(i3[t3]), f2 = a3 || s3.map(function(n4) {
          return n4.slice(0, r3);
        });
        if (!u3)
          return f2;
        var d2 = i3.weekStart;
        return f2.map(function(n4, e4) {
          return f2[(e4 + (d2 || 0)) % 7];
        });
      }, i2 = function() {
        return t2.Ls[t2.locale()];
      }, a2 = function(n3, e3) {
        return n3.formats[e3] || function(n4) {
          return n4.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n5, e4, t3) {
            return e4 || t3.slice(1);
          });
        }(n3.formats[e3.toUpperCase()]);
      }, s2 = function() {
        var n3 = this;
        return { months: function(e3) {
          return e3 ? e3.format("MMMM") : u2(n3, "months");
        }, monthsShort: function(e3) {
          return e3 ? e3.format("MMM") : u2(n3, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return n3.$locale().weekStart || 0;
        }, weekdays: function(e3) {
          return e3 ? e3.format("dddd") : u2(n3, "weekdays");
        }, weekdaysMin: function(e3) {
          return e3 ? e3.format("dd") : u2(n3, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(e3) {
          return e3 ? e3.format("ddd") : u2(n3, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(e3) {
          return a2(n3.$locale(), e3);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      r2.localeData = function() {
        return s2.bind(this)();
      }, t2.localeData = function() {
        var n3 = i2();
        return { firstDayOfWeek: function() {
          return n3.weekStart || 0;
        }, weekdays: function() {
          return t2.weekdays();
        }, weekdaysShort: function() {
          return t2.weekdaysShort();
        }, weekdaysMin: function() {
          return t2.weekdaysMin();
        }, months: function() {
          return t2.months();
        }, monthsShort: function() {
          return t2.monthsShort();
        }, longDateFormat: function(e3) {
          return a2(n3, e3);
        }, meridiem: n3.meridiem, ordinal: n3.ordinal };
      }, t2.months = function() {
        return u2(i2(), "months");
      }, t2.monthsShort = function() {
        return u2(i2(), "monthsShort", "months", 3);
      }, t2.weekdays = function(n3) {
        return u2(i2(), "weekdays", null, null, n3);
      }, t2.weekdaysShort = function(n3) {
        return u2(i2(), "weekdaysShort", "weekdays", 3, n3);
      }, t2.weekdaysMin = function(n3) {
        return u2(i2(), "weekdaysMin", "weekdays", 2, n3);
      };
    };
  });
})(localeData$1);
var localeData = localeData$1.exports;
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString$1(val) || isNumber$1(val) || isBoolean$1(val),
  change: (val) => isString$1(val) || isNumber$1(val) || isBoolean$1(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a2, _b;
    const max = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a2, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e2) {
    emit("change", getLabeledValue(checked), e2);
  }
  function handleChange(e2) {
    if (isLimitExceeded.value)
      return;
    const target = e2.target;
    emit("change", getLabeledValue(target.checked), e2);
  }
  async function onClickRoot(e2) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e2.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e2);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a2, _b;
      return isGroup.value ? (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a2.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a2, _b;
      if (isGroup.value && isArray$2(val)) {
        isLimitExceeded.value = ((_a2 = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a2.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean$1(value)) {
      return value;
    } else if (isArray$2(value)) {
      if (isObject$2(actualValue.value)) {
        return value.map(toRaw).some((o2) => isEqual(o2, actualValue.value));
      } else {
        return value.map(toRaw).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a2;
    return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a2;
    return (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a2.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a2, _b;
      if (isArray$2(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a2 = props.trueValue) != null ? _a2 : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "controls",
    replacement: "aria-controls",
    version: "2.8.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.controls));
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$i = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$e = ["id", "indeterminate", "disabled", "value", "name", "tabindex"];
const __default__$c = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.controls || _ctx.ariaControls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => {
          var _a2, _b;
          return [
            createElementVNode("span", {
              class: normalizeClass(unref(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: unref(isDisabled),
                "true-value": (_a2 = _ctx.trueValue) != null ? _a2 : _ctx.trueLabel,
                "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
                onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
                onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_1$i)), [
                [vModelCheckbox, unref(model)]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: unref(isDisabled),
                value: unref(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
                onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
                onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_2$e)), [
                [vModelCheckbox, unref(model)]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(ns).e("label"))
            }, [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__file", "checkbox.vue"]]);
const _hoisted_1$h = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$d = ["name", "tabindex", "disabled", "value"];
const __default__$b = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a2, _b, _c, _d;
      const fillValue = (_b = (_a2 = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a2.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a2, _b;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": (_a2 = _ctx.trueValue) != null ? _a2 : _ctx.trueLabel,
          "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
          onClick: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1$h)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: unref(actualValue),
          onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
          onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
          onClick: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_2$d)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray$2(val),
  change: (val) => isArray$2(val)
};
const __default__$a = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick$1(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-checkbox-group",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    }, computed(() => !!props.label));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a2 = unref(formItem)) == null ? void 0 : _a2.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup: CheckboxGroup$1
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup$1);
const radioPropsBase = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  name: {
    type: String,
    default: void 0
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString$1(val) || isNumber$1(val) || isBoolean$1(val),
  [CHANGE_EVENT]: (val) => isString$1(val) || isNumber$1(val) || isBoolean$1(val)
};
const radioGroupKey = Symbol("radioGroupKey");
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === actualValue.value;
    }
  });
  const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== actualValue.value ? -1 : 0;
  });
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-radio",
    ref: "https://element-plus.org/en-US/component/radio.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
    actualValue
  };
};
const _hoisted_1$g = ["value", "name", "disabled"];
const __default__$9 = defineComponent({
  name: "ElRadio"
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).is("bordered", _ctx.border),
          unref(ns).is("checked", unref(modelValue) === unref(actualValue)),
          unref(ns).m(unref(size))
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([
            unref(ns).e("input"),
            unref(ns).is("disabled", unref(disabled)),
            unref(ns).is("checked", unref(modelValue) === unref(actualValue))
          ])
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
            class: normalizeClass(unref(ns).e("original")),
            value: unref(actualValue),
            name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
            disabled: unref(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange,
            onClick: _cache[3] || (_cache[3] = withModifiers(() => {
            }, ["stop"]))
          }, null, 42, _hoisted_1$g), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("label")),
          onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__file", "radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase
});
const _hoisted_1$f = ["value", "name", "disabled"];
const __default__$8 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).is("active", unref(modelValue) === unref(actualValue)),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).bm("button", unref(size))
        ])
      }, [
        withDirectives(createElementVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(modelValue) ? modelValue.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original-radio")),
          value: unref(actualValue),
          type: "radio",
          name: _ctx.name || ((_a2 = unref(radioGroup)) == null ? void 0 : _a2.name),
          disabled: unref(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
          onClick: _cache[3] || (_cache[3] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1$f), [
          [vModelRadio, unref(modelValue)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === unref(actualValue) ? unref(activeStyle) : {}),
          onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__file", "radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const radioGroupEmits = radioEmits;
const _hoisted_1$e = ["id", "aria-label", "aria-labelledby"];
const __default__$7 = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    onMounted(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-radio-group",
      ref: "https://element-plus.org/en-US/component/radio.html"
    }, computed(() => !!props.label));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$e);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__file", "radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
var NodeContent = defineComponent({
  name: "NodeContent",
  setup() {
    const ns = useNamespace("cascader-node");
    return {
      ns
    };
  },
  render() {
    const { ns } = this;
    const { node, panel } = this.$parent;
    const { data, label } = node;
    const { renderLabelFn } = panel;
    return h$1("span", { class: ns.e("label") }, renderLabelFn ? renderLabelFn({ node, data }) : label);
  }
});
const CASCADER_PANEL_INJECTION_KEY = Symbol();
const _sfc_main$q = defineComponent({
  name: "ElCascaderNode",
  components: {
    ElCheckbox,
    ElRadio,
    NodeContent,
    ElIcon,
    Check: check_default,
    Loading: loading_default,
    ArrowRight: arrow_right_default
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    menuId: String
  },
  emits: ["expand"],
  setup(props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const ns = useNamespace("cascader-node");
    const isHoverMenu = computed(() => panel.isHoverMenu);
    const multiple = computed(() => panel.config.multiple);
    const checkStrictly = computed(() => panel.config.checkStrictly);
    const checkedNodeId = computed(() => {
      var _a2;
      return (_a2 = panel.checkedNodes[0]) == null ? void 0 : _a2.uid;
    });
    const isDisabled = computed(() => props.node.isDisabled);
    const isLeaf2 = computed(() => props.node.isLeaf);
    const expandable = computed(() => checkStrictly.value && !isLeaf2.value || !isDisabled.value);
    const inExpandingPath = computed(() => isInPath(panel.expandingNode));
    const inCheckedPath = computed(() => checkStrictly.value && panel.checkedNodes.some(isInPath));
    const isInPath = (node) => {
      var _a2;
      const { level, uid: uid2 } = props.node;
      return ((_a2 = node == null ? void 0 : node.pathNodes[level - 1]) == null ? void 0 : _a2.uid) === uid2;
    };
    const doExpand = () => {
      if (inExpandingPath.value)
        return;
      panel.expandNode(props.node);
    };
    const doCheck = (checked) => {
      const { node } = props;
      if (checked === node.checked)
        return;
      panel.handleCheckChange(node, checked);
    };
    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf2.value)
          doExpand();
      });
    };
    const handleHoverExpand = (e2) => {
      if (!isHoverMenu.value)
        return;
      handleExpand();
      !isLeaf2.value && emit("expand", e2);
    };
    const handleExpand = () => {
      const { node } = props;
      if (!expandable.value || node.loading)
        return;
      node.loaded ? doExpand() : doLoad();
    };
    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf2.value)
        return;
      if (isLeaf2.value && !isDisabled.value && !checkStrictly.value && !multiple.value) {
        handleCheck(true);
      } else {
        handleExpand();
      }
    };
    const handleSelectCheck = (checked) => {
      if (checkStrictly.value) {
        doCheck(checked);
        if (props.node.loaded) {
          doExpand();
        }
      } else {
        handleCheck(checked);
      }
    };
    const handleCheck = (checked) => {
      if (!props.node.loaded) {
        doLoad();
      } else {
        doCheck(checked);
        !checkStrictly.value && doExpand();
      }
    };
    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf: isLeaf2,
      expandable,
      inExpandingPath,
      inCheckedPath,
      ns,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
      handleSelectCheck
    };
  }
});
const _hoisted_1$d = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
const _hoisted_2$c = /* @__PURE__ */ createElementVNode("span", null, null, -1);
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_check = resolveComponent("check");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_node_content = resolveComponent("node-content");
  const _component_loading = resolveComponent("loading");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("li", {
    id: `${_ctx.menuId}-${_ctx.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !_ctx.isLeaf,
    "aria-owns": _ctx.isLeaf ? null : _ctx.menuId,
    "aria-expanded": _ctx.inExpandingPath,
    tabindex: _ctx.expandable ? -1 : void 0,
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("selectable", _ctx.checkStrictly),
      _ctx.ns.is("active", _ctx.node.checked),
      _ctx.ns.is("disabled", !_ctx.expandable),
      _ctx.inExpandingPath && "in-active-path",
      _ctx.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createCommentVNode(" prefix "),
    _ctx.multiple ? (openBlock(), createBlock(_component_el_checkbox, {
      key: 0,
      "model-value": _ctx.node.checked,
      indeterminate: _ctx.node.indeterminate,
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["stop"])),
      "onUpdate:modelValue": _ctx.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : _ctx.checkStrictly ? (openBlock(), createBlock(_component_el_radio, {
      key: 1,
      "model-value": _ctx.checkedNodeId,
      label: _ctx.node.uid,
      disabled: _ctx.isDisabled,
      "onUpdate:modelValue": _ctx.handleSelectCheck,
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"]))
    }, {
      default: withCtx(() => [
        createCommentVNode("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),
        _hoisted_2$c
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : _ctx.isLeaf && _ctx.node.checked ? (openBlock(), createBlock(_component_el_icon, {
      key: 2,
      class: normalizeClass(_ctx.ns.e("prefix"))
    }, {
      default: withCtx(() => [
        createVNode(_component_check)
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("v-if", true),
    createCommentVNode(" content "),
    createVNode(_component_node_content),
    createCommentVNode(" postfix "),
    !_ctx.isLeaf ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.node.loading ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([_ctx.ns.is("loading"), _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(_component_el_icon, {
        key: 1,
        class: normalizeClass(["arrow-right", _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_arrow_right)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64)) : createCommentVNode("v-if", true)
  ], 42, _hoisted_1$d);
}
var ElCascaderNode = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["render", _sfc_render$b], ["__file", "node.vue"]]);
const _sfc_main$p = defineComponent({
  name: "ElCascaderMenu",
  components: {
    Loading: loading_default,
    ElIcon,
    ElScrollbar,
    ElCascaderNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const ns = useNamespace("cascader-menu");
    const { t: t2 } = useLocale();
    const id = useId();
    let activeNode = null;
    let hoverTimer = null;
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const hoverZone = ref(null);
    const isEmpty2 = computed(() => !props.nodes.length);
    const isLoading = computed(() => !panel.initialLoaded);
    const menuId = computed(() => `${id.value}-${props.index}`);
    const handleExpand = (e2) => {
      activeNode = e2.target;
    };
    const handleMouseMove = (e2) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value)
        return;
      if (activeNode.contains(e2.target)) {
        clearHoverTimer();
        const el = instance.vnode.el;
        const { left } = el.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = el;
        const startX = e2.clientX - left;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;
        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold);
      }
    };
    const clearHoverTimer = () => {
      if (!hoverTimer)
        return;
      clearTimeout(hoverTimer);
      hoverTimer = null;
    };
    const clearHoverZone = () => {
      if (!hoverZone.value)
        return;
      hoverZone.value.innerHTML = "";
      clearHoverTimer();
    };
    return {
      ns,
      panel,
      hoverZone,
      isEmpty: isEmpty2,
      isLoading,
      menuId,
      t: t2,
      handleExpand,
      handleMouseMove,
      clearHoverZone
    };
  }
});
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_node = resolveComponent("el-cascader-node");
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(_component_el_scrollbar, {
    key: _ctx.menuId,
    tag: "ul",
    role: "menu",
    class: normalizeClass(_ctx.ns.b()),
    "wrap-class": _ctx.ns.e("wrap"),
    "view-class": [_ctx.ns.e("list"), _ctx.ns.is("empty", _ctx.isEmpty)],
    onMousemove: _ctx.handleMouseMove,
    onMouseleave: _ctx.clearHoverZone
  }, {
    default: withCtx(() => {
      var _a2;
      return [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodes, (node) => {
          return openBlock(), createBlock(_component_el_cascader_node, {
            key: node.uid,
            node,
            "menu-id": _ctx.menuId,
            onExpand: _ctx.handleExpand
          }, null, 8, ["node", "menu-id", "onExpand"]);
        }), 128)),
        _ctx.isLoading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, [
          createVNode(_component_el_icon, {
            size: "14",
            class: normalizeClass(_ctx.ns.is("loading"))
          }, {
            default: withCtx(() => [
              createVNode(_component_loading)
            ]),
            _: 1
          }, 8, ["class"]),
          createTextVNode(" " + toDisplayString(_ctx.t("el.cascader.loading")), 1)
        ], 2)) : _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, toDisplayString(_ctx.t("el.cascader.noData")), 3)) : ((_a2 = _ctx.panel) == null ? void 0 : _a2.isHoverMenu) ? (openBlock(), createElementBlock("svg", {
          key: 2,
          ref: "hoverZone",
          class: normalizeClass(_ctx.ns.e("hover-zone"))
        }, null, 2)) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var ElCascaderMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$p, [["render", _sfc_render$a], ["__file", "menu.vue"]]);
let uid = 0;
const calculatePathNodes = (node) => {
  const nodes = [node];
  let { parent } = node;
  while (parent) {
    nodes.unshift(parent);
    parent = parent.parent;
  }
  return nodes;
};
class Node {
  constructor(data, config, parent, root2 = false) {
    this.data = data;
    this.config = config;
    this.parent = parent;
    this.root = root2;
    this.uid = uid++;
    this.checked = false;
    this.indeterminate = false;
    this.loading = false;
    const { value: valueKey, label: labelKey, children: childrenKey } = config;
    const childrenData = data[childrenKey];
    const pathNodes = calculatePathNodes(this);
    this.level = root2 ? 0 : parent ? parent.level + 1 : 1;
    this.value = data[valueKey];
    this.label = data[labelKey];
    this.pathNodes = pathNodes;
    this.pathValues = pathNodes.map((node) => node.value);
    this.pathLabels = pathNodes.map((node) => node.label);
    this.childrenData = childrenData;
    this.children = (childrenData || []).map((child) => new Node(child, config, this));
    this.loaded = !config.lazy || this.isLeaf || !isEmpty(childrenData);
  }
  get isDisabled() {
    const { data, parent, config } = this;
    const { disabled, checkStrictly } = config;
    const isDisabled = isFunction$2(disabled) ? disabled(data, this) : !!data[disabled];
    return isDisabled || !checkStrictly && (parent == null ? void 0 : parent.isDisabled);
  }
  get isLeaf() {
    const { data, config, childrenData, loaded } = this;
    const { lazy, leaf } = config;
    const isLeaf2 = isFunction$2(leaf) ? leaf(data, this) : data[leaf];
    return isUndefined(isLeaf2) ? lazy && !loaded ? false : !(Array.isArray(childrenData) && childrenData.length) : !!isLeaf2;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(childData) {
    const { childrenData, children } = this;
    const node = new Node(childData, this.config, this);
    if (Array.isArray(childrenData)) {
      childrenData.push(childData);
    } else {
      this.childrenData = [childData];
    }
    children.push(node);
    return node;
  }
  calcText(allLevels, separator) {
    const text = allLevels ? this.pathLabels.join(separator) : this.label;
    this.text = text;
    return text;
  }
  broadcast(event, ...args) {
    const handlerName = `onParent${capitalize(event)}`;
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    });
  }
  emit(event, ...args) {
    const { parent } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }
  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }
  onChildCheck() {
    const { children } = this;
    const validChildren = children.filter((child) => !child.isDisabled);
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false;
    this.setCheckState(checked);
  }
  setCheckState(checked) {
    const totalNum = this.children.length;
    const checkedNum = this.children.reduce((c2, p) => {
      const num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
      return c2 + num;
    }, 0);
    this.checked = this.loaded && this.children.filter((child) => !child.isDisabled).every((child) => child.loaded && child.checked) && checked;
    this.indeterminate = this.loaded && checkedNum !== totalNum && checkedNum > 0;
  }
  doCheck(checked) {
    if (this.checked === checked)
      return;
    const { checkStrictly, multiple } = this.config;
    if (checkStrictly || !multiple) {
      this.checked = checked;
    } else {
      this.broadcast("check", checked);
      this.setCheckState(checked);
      this.emit("check");
    }
  }
}
const flatNodes = (nodes, leafOnly) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};
class Store {
  constructor(data, config) {
    this.config = config;
    const nodes = (data || []).map((nodeData) => new Node(nodeData, this.config));
    this.nodes = nodes;
    this.allNodes = flatNodes(nodes, false);
    this.leafNodes = flatNodes(nodes, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes;
  }
  appendNode(nodeData, parentNode) {
    const node = parentNode ? parentNode.appendChild(nodeData) : new Node(nodeData, this.config);
    if (!parentNode)
      this.nodes.push(node);
    this.allNodes.push(node);
    node.isLeaf && this.leafNodes.push(node);
  }
  appendNodes(nodeDataList, parentNode) {
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode));
  }
  getNodeByValue(value, leafOnly = false) {
    if (!value && value !== 0)
      return null;
    const node = this.getFlattedNodes(leafOnly).find((node2) => isEqual(node2.value, value) || isEqual(node2.pathValues, value));
    return node || null;
  }
  getSameNode(node) {
    if (!node)
      return null;
    const node_ = this.getFlattedNodes(false).find(({ value, level }) => isEqual(node.value, value) && node.level === level);
    return node_ || null;
  }
}
const CommonProps = buildProps({
  modelValue: {
    type: definePropType([Number, String, Array])
  },
  options: {
    type: definePropType(Array),
    default: () => []
  },
  props: {
    type: definePropType(Object),
    default: () => ({})
  }
});
const DefaultProps = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: NOOP,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
const useCascaderConfig = (props) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props
  }));
};
const getMenuIndex = (el) => {
  if (!el)
    return 0;
  const pieces = el.id.split("-");
  return Number(pieces[pieces.length - 2]);
};
const checkNode = (el) => {
  if (!el)
    return;
  const input = el.querySelector("input");
  if (input) {
    input.click();
  } else if (isLeaf(el)) {
    el.click();
  }
};
const sortByOriginalOrder = (oldNodes, newNodes) => {
  const newNodesCopy = newNodes.slice(0);
  const newIds = newNodesCopy.map((node) => node.uid);
  const res = oldNodes.reduce((acc, item) => {
    const index2 = newIds.indexOf(item.uid);
    if (index2 > -1) {
      acc.push(item);
      newNodesCopy.splice(index2, 1);
      newIds.splice(index2, 1);
    }
    return acc;
  }, []);
  res.push(...newNodesCopy);
  return res;
};
const _sfc_main$o = defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu
  },
  props: {
    ...CommonProps,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, "close", "expand-change"],
  setup(props, { emit, slots }) {
    let manualChecked = false;
    const ns = useNamespace("cascader");
    const config = useCascaderConfig(props);
    let store = null;
    const initialLoaded = ref(true);
    const menuList = ref([]);
    const checkedValue = ref(null);
    const menus = ref([]);
    const expandingNode = ref(null);
    const checkedNodes = ref([]);
    const isHoverMenu = computed(() => config.value.expandTrigger === "hover");
    const renderLabelFn = computed(() => props.renderLabel || slots.default);
    const initStore = () => {
      const { options } = props;
      const cfg = config.value;
      manualChecked = false;
      store = new Store(options, cfg);
      menus.value = [store.getNodes()];
      if (cfg.lazy && isEmpty(props.options)) {
        initialLoaded.value = false;
        lazyLoad(void 0, (list) => {
          if (list) {
            store = new Store(list, cfg);
            menus.value = [store.getNodes()];
          }
          initialLoaded.value = true;
          syncCheckedValue(false, true);
        });
      } else {
        syncCheckedValue(false, true);
      }
    };
    const lazyLoad = (node, cb) => {
      const cfg = config.value;
      node = node || new Node({}, cfg, void 0, true);
      node.loading = true;
      const resolve = (dataList) => {
        const _node = node;
        const parent = _node.root ? null : _node;
        dataList && (store == null ? void 0 : store.appendNodes(dataList, parent));
        _node.loading = false;
        _node.loaded = true;
        _node.childrenData = _node.childrenData || [];
        cb && cb(dataList);
      };
      cfg.lazyLoad(node, resolve);
    };
    const expandNode = (node, silent) => {
      var _a2;
      const { level } = node;
      const newMenus = menus.value.slice(0, level);
      let newExpandingNode;
      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2];
      } else {
        newExpandingNode = node;
        newMenus.push(node.children);
      }
      if (((_a2 = expandingNode.value) == null ? void 0 : _a2.uid) !== (newExpandingNode == null ? void 0 : newExpandingNode.uid)) {
        expandingNode.value = node;
        menus.value = newMenus;
        !silent && emit("expand-change", (node == null ? void 0 : node.pathValues) || []);
      }
    };
    const handleCheckChange = (node, checked, emitClose = true) => {
      const { checkStrictly, multiple } = config.value;
      const oldNode = checkedNodes.value[0];
      manualChecked = true;
      !multiple && (oldNode == null ? void 0 : oldNode.doCheck(false));
      node.doCheck(checked);
      calculateCheckedValue();
      emitClose && !multiple && !checkStrictly && emit("close");
      !emitClose && !multiple && !checkStrictly && expandParentNode(node);
    };
    const expandParentNode = (node) => {
      if (!node)
        return;
      node = node.parent;
      expandParentNode(node);
      node && expandNode(node);
    };
    const getFlattedNodes = (leafOnly) => {
      return store == null ? void 0 : store.getFlattedNodes(leafOnly);
    };
    const getCheckedNodes = (leafOnly) => {
      var _a2;
      return (_a2 = getFlattedNodes(leafOnly)) == null ? void 0 : _a2.filter((node) => node.checked !== false);
    };
    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false));
      calculateCheckedValue();
      menus.value = menus.value.slice(0, 1);
      expandingNode.value = null;
      emit("expand-change", []);
    };
    const calculateCheckedValue = () => {
      var _a2;
      const { checkStrictly, multiple } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = getCheckedNodes(!checkStrictly);
      const nodes = sortByOriginalOrder(oldNodes, newNodes);
      const values = nodes.map((node) => node.valueByOption);
      checkedNodes.value = nodes;
      checkedValue.value = multiple ? values : (_a2 = values[0]) != null ? _a2 : null;
    };
    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props;
      const { lazy, multiple, checkStrictly } = config.value;
      const leafOnly = !checkStrictly;
      if (!initialLoaded.value || manualChecked || !forced && isEqual(modelValue, checkedValue.value))
        return;
      if (lazy && !loaded) {
        const values = unique(flattenDeep(castArray(modelValue)));
        const nodes = values.map((val) => store == null ? void 0 : store.getNodeByValue(val)).filter((node) => !!node && !node.loaded && !node.loading);
        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced));
          });
        } else {
          syncCheckedValue(true, forced);
        }
      } else {
        const values = multiple ? castArray(modelValue) : [modelValue];
        const nodes = unique(values.map((val) => store == null ? void 0 : store.getNodeByValue(val, leafOnly)));
        syncMenuState(nodes, forced);
        checkedValue.value = cloneDeep(modelValue);
      }
    };
    const syncMenuState = (newCheckedNodes, reserveExpandingState = true) => {
      const { checkStrictly } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = newCheckedNodes.filter((node) => !!node && (checkStrictly || node.isLeaf));
      const oldExpandingNode = store == null ? void 0 : store.getSameNode(expandingNode.value);
      const newExpandingNode = reserveExpandingState && oldExpandingNode || newNodes[0];
      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true));
      } else {
        expandingNode.value = null;
      }
      oldNodes.forEach((node) => node.doCheck(false));
      reactive(newNodes).forEach((node) => node.doCheck(true));
      checkedNodes.value = newNodes;
      nextTick(scrollToExpandingNode);
    };
    const scrollToExpandingNode = () => {
      if (!isClient)
        return;
      menuList.value.forEach((menu) => {
        const menuElement = menu == null ? void 0 : menu.$el;
        if (menuElement) {
          const container = menuElement.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
          const activeNode = menuElement.querySelector(`.${ns.b("node")}.${ns.is("active")}`) || menuElement.querySelector(`.${ns.b("node")}.in-active-path`);
          scrollIntoView(container, activeNode);
        }
      });
    };
    const handleKeyDown = (e2) => {
      const target = e2.target;
      const { code } = e2;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          e2.preventDefault();
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${ns.b("node")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.left: {
          e2.preventDefault();
          const preMenu = menuList.value[getMenuIndex(target) - 1];
          const expandedNode = preMenu == null ? void 0 : preMenu.$el.querySelector(`.${ns.b("node")}[aria-expanded="true"]`);
          focusNode(expandedNode);
          break;
        }
        case EVENT_CODE.right: {
          e2.preventDefault();
          const nextMenu = menuList.value[getMenuIndex(target) + 1];
          const firstNode = nextMenu == null ? void 0 : nextMenu.$el.querySelector(`.${ns.b("node")}[tabindex="-1"]`);
          focusNode(firstNode);
          break;
        }
        case EVENT_CODE.enter:
          checkNode(target);
          break;
      }
    };
    provide(CASCADER_PANEL_INJECTION_KEY, reactive({
      config,
      expandingNode,
      checkedNodes,
      isHoverMenu,
      initialLoaded,
      renderLabelFn,
      lazyLoad,
      expandNode,
      handleCheckChange
    }));
    watch([config, () => props.options], initStore, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, () => {
      manualChecked = false;
      syncCheckedValue();
    }, {
      deep: true
    });
    watch(() => checkedValue.value, (val) => {
      if (!isEqual(val, props.modelValue)) {
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
      }
    });
    onBeforeUpdate(() => menuList.value = []);
    onMounted(() => !isEmpty(props.modelValue) && syncCheckedValue());
    return {
      ns,
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_menu = resolveComponent("el-cascader-menu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("panel"), _ctx.ns.is("bordered", _ctx.border)]),
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu, index2) => {
      return openBlock(), createBlock(_component_el_cascader_menu, {
        key: index2,
        ref_for: true,
        ref: (item) => _ctx.menuList[index2] = item,
        index: index2,
        nodes: [...menu]
      }, null, 8, ["index", "nodes"]);
    }), 128))
  ], 34);
}
var CascaderPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["render", _sfc_render$9], ["__file", "index.vue"]]);
CascaderPanel.install = (app) => {
  app.component(CascaderPanel.name, CascaderPanel);
};
const _CascaderPanel = CascaderPanel;
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$6 = defineComponent({
  name: "ElTag"
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc$1(_sfc_main$n, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
const cascaderProps = buildProps({
  ...CommonProps,
  size: useSizeProp,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: definePropType(Function),
    default: (node, keyword) => node.text.includes(keyword)
  },
  separator: {
    type: String,
    default: " / "
  },
  showAllLevels: {
    type: Boolean,
    default: true
  },
  collapseTags: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  collapseTagsTooltip: {
    type: Boolean,
    default: false
  },
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: definePropType(Function),
    default: () => true
  },
  popperClass: {
    type: String,
    default: ""
  },
  teleported: useTooltipContentProps.teleported,
  tagType: { ...tagProps.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useEmptyValuesProps
});
const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: (_2) => true,
  [CHANGE_EVENT]: (_2) => true,
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  visibleChange: (val) => isBoolean$1(val),
  expandChange: (val) => !!val,
  removeTag: (val) => !!val
};
const _hoisted_1$c = { key: 0 };
const _hoisted_2$b = ["placeholder", "onKeydown"];
const _hoisted_3$7 = ["onClick"];
const COMPONENT_NAME$2 = "ElCascader";
const __default__$5 = defineComponent({
  name: COMPONENT_NAME$2
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: cascaderProps,
  emits: cascaderEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const popperOptions = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: true,
          phase: "main",
          fn: ({ state }) => {
            const { modifiersData, placement } = state;
            if (["right", "left", "bottom", "top"].includes(placement))
              return;
            modifiersData.arrow.x = 35;
          },
          requires: ["arrow"]
        }
      ]
    };
    const attrs = useAttrs$2();
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const nsCascader = useNamespace("cascader");
    const nsInput = useNamespace("input");
    const { t: t2 } = useLocale();
    const { form, formItem } = useFormItem();
    const { valueOnClear } = useEmptyValues(props);
    const tooltipRef = ref(null);
    const input = ref(null);
    const tagWrapper = ref(null);
    const cascaderPanelRef = ref(null);
    const suggestionPanel = ref(null);
    const popperVisible = ref(false);
    const inputHover = ref(false);
    const filtering = ref(false);
    const filterFocus = ref(false);
    const inputValue = ref("");
    const searchInputValue = ref("");
    const presentTags = ref([]);
    const allPresentTags = ref([]);
    const suggestions = ref([]);
    const isOnComposition = ref(false);
    const cascaderStyle = computed(() => {
      return attrs.style;
    });
    const isDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
    const inputPlaceholder = computed(() => props.placeholder || t2("el.cascader.placeholder"));
    const currentPlaceholder = computed(() => searchInputValue.value || presentTags.value.length > 0 || isOnComposition.value ? "" : inputPlaceholder.value);
    const realSize = useFormSize();
    const tagSize = computed(() => ["small"].includes(realSize.value) ? "small" : "default");
    const multiple = computed(() => !!props.props.multiple);
    const readonly2 = computed(() => !props.filterable || multiple.value);
    const searchKeyword = computed(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = computed(() => {
      var _a2;
      return ((_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.checkedNodes) || [];
    });
    const clearBtnVisible = computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = computed(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? "" : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const checkedValue = computed({
      get() {
        return cloneDeep(props.modelValue);
      },
      set(val) {
        const value = val || valueOnClear.value;
        emit(UPDATE_MODEL_EVENT, value);
        emit(CHANGE_EVENT, value);
        if (props.validateEvent) {
          formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
        }
      }
    });
    const cascaderKls = computed(() => {
      return [
        nsCascader.b(),
        nsCascader.m(realSize.value),
        nsCascader.is("disabled", isDisabled.value),
        attrs.class
      ];
    });
    const cascaderIconKls = computed(() => {
      return [
        nsInput.e("icon"),
        "icon-arrow-down",
        nsCascader.is("reverse", popperVisible.value)
      ];
    });
    const inputClass = computed(() => {
      return nsCascader.is("focus", popperVisible.value || filterFocus.value);
    });
    const contentRef = computed(() => {
      var _a2, _b;
      return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
    });
    const togglePopperVisible = (visible) => {
      var _a2, _b, _c;
      if (isDisabled.value)
        return;
      visible = visible != null ? visible : !popperVisible.value;
      if (visible !== popperVisible.value) {
        popperVisible.value = visible;
        (_b = (_a2 = input.value) == null ? void 0 : _a2.input) == null ? void 0 : _b.setAttribute("aria-expanded", `${visible}`);
        if (visible) {
          updatePopperPosition();
          nextTick((_c = cascaderPanelRef.value) == null ? void 0 : _c.scrollToExpandingNode);
        } else if (props.filterable) {
          syncPresentTextValue();
        }
        emit("visibleChange", visible);
      }
    };
    const updatePopperPosition = () => {
      nextTick(() => {
        var _a2;
        (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper();
      });
    };
    const hideSuggestionPanel = () => {
      filtering.value = false;
    };
    const genTag2 = (node) => {
      const { showAllLevels, separator } = props;
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
        isCollapseTag: false
      };
    };
    const deleteTag = (tag) => {
      var _a2;
      const node = tag.node;
      node.doCheck(false);
      (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.calculateCheckedValue();
      emit("removeTag", node.valueByOption);
    };
    const calculatePresentTags = () => {
      if (!multiple.value)
        return;
      const nodes = checkedNodes.value;
      const tags = [];
      const allTags = [];
      nodes.forEach((node) => allTags.push(genTag2(node)));
      allPresentTags.value = allTags;
      if (nodes.length) {
        nodes.slice(0, props.maxCollapseTags).forEach((node) => tags.push(genTag2(node)));
        const rest = nodes.slice(props.maxCollapseTags);
        const restCount = rest.length;
        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true
            });
          } else {
            rest.forEach((node) => tags.push(genTag2(node)));
          }
        }
      }
      presentTags.value = tags;
    };
    const calculateSuggestions = () => {
      var _a2, _b;
      const { filterMethod, showAllLevels, separator } = props;
      const res = (_b = (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.getFlattedNodes(!props.props.checkStrictly)) == null ? void 0 : _b.filter((node) => {
        if (node.isDisabled)
          return false;
        node.calcText(showAllLevels, separator);
        return filterMethod(node, searchKeyword.value);
      });
      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
        allPresentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
      }
      filtering.value = true;
      suggestions.value = res;
      updatePopperPosition();
    };
    const focusFirstNode = () => {
      var _a2;
      let firstNode;
      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(`.${nsCascader.e("suggestion-item")}`);
      } else {
        firstNode = (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.$el.querySelector(`.${nsCascader.b("node")}[tabindex="-1"]`);
      }
      if (firstNode) {
        firstNode.focus();
        !filtering.value && firstNode.click();
      }
    };
    const updateStyle = () => {
      var _a2, _b;
      const inputInner = (_a2 = input.value) == null ? void 0 : _a2.input;
      const tagWrapperEl = tagWrapper.value;
      const suggestionPanelEl = (_b = suggestionPanel.value) == null ? void 0 : _b.$el;
      if (!isClient || !inputInner)
        return;
      if (suggestionPanelEl) {
        const suggestionList = suggestionPanelEl.querySelector(`.${nsCascader.e("suggestion-list")}`);
        suggestionList.style.minWidth = `${inputInner.offsetWidth}px`;
      }
      if (tagWrapperEl) {
        const { offsetHeight } = tagWrapperEl;
        const height = presentTags.value.length > 0 ? `${Math.max(offsetHeight + 6, inputInitialHeight)}px` : `${inputInitialHeight}px`;
        inputInner.style.height = height;
        updatePopperPosition();
      }
    };
    const getCheckedNodes = (leafOnly) => {
      var _a2;
      return (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.getCheckedNodes(leafOnly);
    };
    const handleExpandChange = (value) => {
      updatePopperPosition();
      emit("expandChange", value);
    };
    const handleComposition = (event) => {
      var _a2;
      const text = (_a2 = event.target) == null ? void 0 : _a2.value;
      if (event.type === "compositionend") {
        isOnComposition.value = false;
        nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e2) => {
      if (isOnComposition.value)
        return;
      switch (e2.code) {
        case EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case EVENT_CODE.down:
          togglePopperVisible(true);
          nextTick(focusFirstNode);
          e2.preventDefault();
          break;
        case EVENT_CODE.esc:
          if (popperVisible.value === true) {
            e2.preventDefault();
            e2.stopPropagation();
            togglePopperVisible(false);
          }
          break;
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleClear = () => {
      var _a2;
      (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.clearCheckedNodes();
      if (!popperVisible.value && props.filterable) {
        syncPresentTextValue();
      }
      togglePopperVisible(false);
    };
    const syncPresentTextValue = () => {
      const { value } = presentText;
      inputValue.value = value;
      searchInputValue.value = value;
    };
    const handleSuggestionClick = (node) => {
      var _a2, _b;
      const { checked } = node;
      if (multiple.value) {
        (_a2 = cascaderPanelRef.value) == null ? void 0 : _a2.handleCheckChange(node, !checked, false);
      } else {
        !checked && ((_b = cascaderPanelRef.value) == null ? void 0 : _b.handleCheckChange(node, true, false));
        togglePopperVisible(false);
      }
    };
    const handleSuggestionKeyDown = (e2) => {
      const target = e2.target;
      const { code } = e2;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${nsCascader.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.enter:
          target.click();
          break;
      }
    };
    const handleDelete = () => {
      const tags = presentTags.value;
      const lastTag = tags[tags.length - 1];
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1;
      if (!lastTag || !pressDeleteCount || props.collapseTags && tags.length > 1)
        return;
      if (lastTag.hitState) {
        deleteTag(lastTag);
      } else {
        lastTag.hitState = true;
      }
    };
    const handleFocus = (e2) => {
      const el = e2.target;
      const name = nsCascader.e("search-input");
      if (el.className === name) {
        filterFocus.value = true;
      }
      emit("focus", e2);
    };
    const handleBlur = (e2) => {
      filterFocus.value = false;
      emit("blur", e2);
    };
    const handleFilter = debounce(() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
        });
      } else if (passed !== false) {
        calculateSuggestions();
      } else {
        hideSuggestionPanel();
      }
    }, props.debounce);
    const handleInput = (val, e2) => {
      !popperVisible.value && togglePopperVisible(true);
      if (e2 == null ? void 0 : e2.isComposing)
        return;
      val ? handleFilter() : hideSuggestionPanel();
    };
    const getInputInnerHeight = (inputInner) => Number.parseFloat(useCssVar(nsInput.cssVarName("input-height"), inputInner).value) - 2;
    watch(filtering, updatePopperPosition);
    watch([checkedNodes, isDisabled], calculatePresentTags);
    watch(presentTags, () => {
      nextTick(() => updateStyle());
    });
    watch(realSize, async () => {
      await nextTick();
      const inputInner = input.value.input;
      inputInitialHeight = getInputInnerHeight(inputInner) || inputInitialHeight;
      updateStyle();
    });
    watch(presentText, syncPresentTextValue, { immediate: true });
    onMounted(() => {
      const inputInner = input.value.input;
      const inputInnerHeight = getInputInnerHeight(inputInner);
      inputInitialHeight = inputInner.offsetHeight || inputInnerHeight;
      useResizeObserver(inputInner, updateStyle);
    });
    expose({
      getCheckedNodes,
      cascaderPanelRef,
      togglePopperVisible,
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        visible: popperVisible.value,
        teleported: _ctx.teleported,
        "popper-class": [unref(nsCascader).e("dropdown"), _ctx.popperClass],
        "popper-options": popperOptions,
        "fallback-placements": [
          "bottom-start",
          "bottom",
          "top-start",
          "top",
          "right",
          "left"
        ],
        "stop-popper-mouse-event": false,
        "gpu-acceleration": false,
        placement: "bottom-start",
        transition: `${unref(nsCascader).namespace.value}-zoom-in-top`,
        effect: "light",
        pure: "",
        persistent: "",
        onHide: hideSuggestionPanel
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(cascaderKls)),
            style: normalizeStyle(unref(cascaderStyle)),
            onClick: _cache[5] || (_cache[5] = () => togglePopperVisible(unref(readonly2) ? void 0 : true)),
            onKeydown: handleKeyDown,
            onMouseenter: _cache[6] || (_cache[6] = ($event) => inputHover.value = true),
            onMouseleave: _cache[7] || (_cache[7] = ($event) => inputHover.value = false)
          }, [
            createVNode(unref(ElInput), {
              ref_key: "input",
              ref: input,
              modelValue: inputValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputValue.value = $event),
              placeholder: unref(currentPlaceholder),
              readonly: unref(readonly2),
              disabled: unref(isDisabled),
              "validate-event": false,
              size: unref(realSize),
              class: normalizeClass(unref(inputClass)),
              tabindex: unref(multiple) && _ctx.filterable && !unref(isDisabled) ? -1 : void 0,
              onCompositionstart: handleComposition,
              onCompositionupdate: handleComposition,
              onCompositionend: handleComposition,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onInput: handleInput
            }, {
              suffix: withCtx(() => [
                unref(clearBtnVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: "clear",
                  class: normalizeClass([unref(nsInput).e("icon"), "icon-circle-close"]),
                  onClick: withModifiers(handleClear, ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : (openBlock(), createBlock(unref(ElIcon), {
                  key: "arrow-down",
                  class: normalizeClass(unref(cascaderIconKls)),
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => togglePopperVisible(), ["stop"]))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_down_default))
                  ]),
                  _: 1
                }, 8, ["class"]))
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex"]),
            unref(multiple) ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "tagWrapper",
              ref: tagWrapper,
              class: normalizeClass([
                unref(nsCascader).e("tags"),
                unref(nsCascader).is("validate", Boolean(unref(validateState)))
              ])
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(presentTags.value, (tag) => {
                return openBlock(), createBlock(unref(ElTag), {
                  key: tag.key,
                  type: _ctx.tagType,
                  size: unref(tagSize),
                  hit: tag.hitState,
                  closable: tag.closable,
                  "disable-transitions": "",
                  onClose: ($event) => deleteTag(tag)
                }, {
                  default: withCtx(() => [
                    tag.isCollapseTag === false ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(tag.text), 1)) : (openBlock(), createBlock(unref(ElTooltip), {
                      key: 1,
                      disabled: popperVisible.value || !_ctx.collapseTagsTooltip,
                      "fallback-placements": ["bottom", "top", "right", "left"],
                      placement: "bottom",
                      effect: "light"
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", null, toDisplayString(tag.text), 1)
                      ]),
                      content: withCtx(() => [
                        createElementVNode("div", {
                          class: normalizeClass(unref(nsCascader).e("collapse-tags"))
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(allPresentTags.value.slice(_ctx.maxCollapseTags), (tag2, idx) => {
                            return openBlock(), createElementBlock("div", {
                              key: idx,
                              class: normalizeClass(unref(nsCascader).e("collapse-tag"))
                            }, [
                              (openBlock(), createBlock(unref(ElTag), {
                                key: tag2.key,
                                class: "in-tooltip",
                                type: _ctx.tagType,
                                size: unref(tagSize),
                                hit: tag2.hitState,
                                closable: tag2.closable,
                                "disable-transitions": "",
                                onClose: ($event) => deleteTag(tag2)
                              }, {
                                default: withCtx(() => [
                                  createElementVNode("span", null, toDisplayString(tag2.text), 1)
                                ]),
                                _: 2
                              }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                            ], 2);
                          }), 128))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["disabled"]))
                  ]),
                  _: 2
                }, 1032, ["type", "size", "hit", "closable", "onClose"]);
              }), 128)),
              _ctx.filterable && !unref(isDisabled) ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchInputValue.value = $event),
                type: "text",
                class: normalizeClass(unref(nsCascader).e("search-input")),
                placeholder: unref(presentText) ? "" : unref(inputPlaceholder),
                onInput: _cache[3] || (_cache[3] = (e2) => handleInput(searchInputValue.value, e2)),
                onClick: _cache[4] || (_cache[4] = withModifiers(($event) => togglePopperVisible(true), ["stop"])),
                onKeydown: withKeys(handleDelete, ["delete"]),
                onCompositionstart: handleComposition,
                onCompositionupdate: handleComposition,
                onCompositionend: handleComposition,
                onFocus: handleFocus,
                onBlur: handleBlur
              }, null, 42, _hoisted_2$b)), [
                [vModelText, searchInputValue.value]
              ]) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ], 38)), [
            [unref(ClickOutside), () => togglePopperVisible(false), unref(contentRef)]
          ])
        ]),
        content: withCtx(() => [
          withDirectives(createVNode(unref(_CascaderPanel), {
            ref_key: "cascaderPanelRef",
            ref: cascaderPanelRef,
            modelValue: unref(checkedValue),
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(checkedValue) ? checkedValue.value = $event : null),
            options: _ctx.options,
            props: props.props,
            border: false,
            "render-label": _ctx.$slots.default,
            onExpandChange: handleExpandChange,
            onClose: _cache[9] || (_cache[9] = ($event) => _ctx.$nextTick(() => togglePopperVisible(false)))
          }, null, 8, ["modelValue", "options", "props", "render-label"]), [
            [vShow, !filtering.value]
          ]),
          _ctx.filterable ? withDirectives((openBlock(), createBlock(unref(ElScrollbar), {
            key: 0,
            ref_key: "suggestionPanel",
            ref: suggestionPanel,
            tag: "ul",
            class: normalizeClass(unref(nsCascader).e("suggestion-panel")),
            "view-class": unref(nsCascader).e("suggestion-list"),
            onKeydown: handleSuggestionKeyDown
          }, {
            default: withCtx(() => [
              suggestions.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(suggestions.value, (item) => {
                return openBlock(), createElementBlock("li", {
                  key: item.uid,
                  class: normalizeClass([
                    unref(nsCascader).e("suggestion-item"),
                    unref(nsCascader).is("checked", item.checked)
                  ]),
                  tabindex: -1,
                  onClick: ($event) => handleSuggestionClick(item)
                }, [
                  createElementVNode("span", null, toDisplayString(item.text), 1),
                  item.checked ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  })) : createCommentVNode("v-if", true)
                ], 10, _hoisted_3$7);
              }), 128)) : renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
                createElementVNode("li", {
                  class: normalizeClass(unref(nsCascader).e("empty-text"))
                }, toDisplayString(unref(t2)("el.cascader.noMatch")), 3)
              ])
            ]),
            _: 3
          }, 8, ["class", "view-class"])), [
            [vShow, filtering.value]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["visible", "teleported", "popper-class", "transition"]);
    };
  }
});
var Cascader = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__file", "cascader.vue"]]);
Cascader.install = (app) => {
  app.component(Cascader.name, Cascader);
};
const _Cascader = Cascader;
const ElCascader = _Cascader;
var advancedFormat$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2) {
      var r2 = t2.prototype, n2 = r2.format;
      r2.format = function(e3) {
        var t3 = this, r3 = this.$locale();
        if (!this.isValid())
          return n2.bind(this)(e3);
        var s2 = this.$utils(), a2 = (e3 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e4) {
          switch (e4) {
            case "Q":
              return Math.ceil((t3.$M + 1) / 3);
            case "Do":
              return r3.ordinal(t3.$D);
            case "gggg":
              return t3.weekYear();
            case "GGGG":
              return t3.isoWeekYear();
            case "wo":
              return r3.ordinal(t3.week(), "W");
            case "w":
            case "ww":
              return s2.s(t3.week(), "w" === e4 ? 1 : 2, "0");
            case "W":
            case "WW":
              return s2.s(t3.isoWeek(), "W" === e4 ? 1 : 2, "0");
            case "k":
            case "kk":
              return s2.s(String(0 === t3.$H ? 24 : t3.$H), "k" === e4 ? 1 : 2, "0");
            case "X":
              return Math.floor(t3.$d.getTime() / 1e3);
            case "x":
              return t3.$d.getTime();
            case "z":
              return "[" + t3.offsetName() + "]";
            case "zzz":
              return "[" + t3.offsetName("long") + "]";
            default:
              return e4;
          }
        });
        return n2.bind(this)(a2);
      };
    };
  });
})(advancedFormat$1);
var advancedFormat = advancedFormat$1.exports;
var weekOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    var e2 = "week", t2 = "year";
    return function(i2, n2, r2) {
      var f2 = n2.prototype;
      f2.week = function(i3) {
        if (void 0 === i3 && (i3 = null), null !== i3)
          return this.add(7 * (i3 - this.week()), "day");
        var n3 = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var f3 = r2(this).startOf(t2).add(1, t2).date(n3), s2 = r2(this).endOf(e2);
          if (f3.isBefore(s2))
            return 1;
        }
        var a2 = r2(this).startOf(t2).date(n3).startOf(e2).subtract(1, "millisecond"), o2 = this.diff(a2, e2, true);
        return o2 < 0 ? r2(this).startOf("week").week() : Math.ceil(o2);
      }, f2.weeks = function(e3) {
        return void 0 === e3 && (e3 = null), this.week(e3);
      };
    };
  });
})(weekOfYear$1);
var weekOfYear = weekOfYear$1.exports;
var weekYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2) {
      t2.prototype.weekYear = function() {
        var e3 = this.month(), t3 = this.week(), n2 = this.year();
        return 1 === t3 && 11 === e3 ? n2 + 1 : 0 === e3 && t3 >= 52 ? n2 - 1 : n2;
      };
    };
  });
})(weekYear$1);
var weekYear = weekYear$1.exports;
var dayOfYear$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2, n2) {
      t2.prototype.dayOfYear = function(e3) {
        var t3 = Math.round((n2(this).startOf("day") - n2(this).startOf("year")) / 864e5) + 1;
        return null == e3 ? t3 : this.add(e3 - t3, "day");
      };
    };
  });
})(dayOfYear$1);
var dayOfYear = dayOfYear$1.exports;
var isSameOrAfter$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2, t2) {
      t2.prototype.isSameOrAfter = function(e3, t3) {
        return this.isSame(e3, t3) || this.isAfter(e3, t3);
      };
    };
  });
})(isSameOrAfter$1);
var isSameOrAfter = isSameOrAfter$1.exports;
var isSameOrBefore$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, i2) {
    module2.exports = i2();
  }(commonjsGlobal, function() {
    return function(e2, i2) {
      i2.prototype.isSameOrBefore = function(e3, i3) {
        return this.isSame(e3, i3) || this.isBefore(e3, i3);
      };
    };
  });
})(isSameOrBefore$1);
var isSameOrBefore = isSameOrBefore$1.exports;
const ROOT_PICKER_INJECTION_KEY = Symbol();
const datePickerProps = buildProps({
  ...timePickerDefaultProps,
  type: {
    type: definePropType(String),
    default: "date"
  }
});
const selectionModes = [
  "date",
  "dates",
  "year",
  "years",
  "month",
  "week",
  "range"
];
const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType(Function)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  minDate: {
    type: definePropType(Object)
  },
  maxDate: {
    type: definePropType(Object)
  },
  parsedValue: {
    type: definePropType([Object, Array])
  },
  rangeState: {
    type: definePropType(Object),
    default: () => ({
      endDate: null,
      selecting: false
    })
  }
});
const panelSharedProps = buildProps({
  type: {
    type: definePropType(String),
    required: true,
    values: datePickTypes
  },
  dateFormat: String,
  timeFormat: String
});
const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType(Array)
  }
});
const selectionModeWithDefault = (mode) => {
  return {
    type: String,
    values: selectionModes,
    default: mode
  };
};
const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
});
const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault("date")
});
const basicDateTableEmits = ["changerange", "pick", "select"];
const isValidRange = (range) => {
  if (!isArray$2(range))
    return false;
  const [left, right] = range;
  return dayjs.isDayjs(left) && dayjs.isDayjs(right) && left.isSameOrBefore(right);
};
const getDefaultValue = (defaultValue, { lang, unit: unit2, unlinkPanels }) => {
  let start;
  if (isArray$2(defaultValue)) {
    let [left, right] = defaultValue.map((d2) => dayjs(d2).locale(lang));
    if (!unlinkPanels) {
      right = left.add(1, unit2);
    }
    return [left, right];
  } else if (defaultValue) {
    start = dayjs(defaultValue);
  } else {
    start = dayjs();
  }
  start = start.locale(lang);
  return [start, start.add(1, unit2)];
};
const buildPickerTable = (dimension, rows, {
  columnIndexOffset,
  startDate,
  nextEndDate,
  now: now2,
  unit: unit2,
  relativeDateGetter,
  setCellMetadata,
  setRowMetadata
}) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex];
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset];
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: "normal",
          inRange: false,
          start: false,
          end: false
        };
      }
      const index2 = rowIndex * dimension.column + columnIndex;
      const nextStartDate = relativeDateGetter(index2);
      cell.dayjs = nextStartDate;
      cell.date = nextStartDate.toDate();
      cell.timestamp = nextStartDate.valueOf();
      cell.type = "normal";
      cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit2) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit2)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit2) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit2));
      if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
        cell.end = startDate && nextStartDate.isSame(startDate, unit2);
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit2);
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit2);
      }
      const isToday = nextStartDate.isSame(now2, unit2);
      if (isToday) {
        cell.type = "today";
      }
      setCellMetadata == null ? void 0 : setCellMetadata(cell, { rowIndex, columnIndex });
      row[columnIndex + columnIndexOffset] = cell;
    }
    setRowMetadata == null ? void 0 : setRowMetadata(row);
  }
};
const isNormalDay = (type = "") => {
  return ["normal", "today"].includes(type);
};
const useBasicDateTable = (props, emit) => {
  const { lang } = useLocale();
  const tbodyRef = ref();
  const currentCellRef = ref();
  const lastRow = ref();
  const lastColumn = ref();
  const tableRows = ref([[], [], [], [], [], []]);
  let focusWithClick = false;
  const firstDayOfWeek = props.date.$locale().weekStart || 7;
  const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_2) => _2.toLowerCase());
  const offsetDay = computed(() => {
    return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
  });
  const startDate = computed(() => {
    const startDayOfMonth = props.date.startOf("month");
    return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
  });
  const WEEKS = computed(() => {
    return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
  });
  const hasCurrent = computed(() => {
    return flatten(unref(rows)).some((row) => {
      return row.isCurrent;
    });
  });
  const days = computed(() => {
    const startOfMonth = props.date.startOf("month");
    const startOfMonthDay = startOfMonth.day() || 7;
    const dateCountOfMonth = startOfMonth.daysInMonth();
    const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
    return {
      startOfMonthDay,
      dateCountOfMonth,
      dateCountOfLastMonth
    };
  });
  const selectedDate = computed(() => {
    return props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
  });
  const setDateText = (cell, { count, rowIndex, columnIndex }) => {
    const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } = unref(days);
    const offset = unref(offsetDay);
    if (rowIndex >= 0 && rowIndex <= 1) {
      const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
      if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
        cell.text = count;
        return true;
      } else {
        cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
        cell.type = "prev-month";
      }
    } else {
      if (count <= dateCountOfMonth) {
        cell.text = count;
      } else {
        cell.text = count - dateCountOfMonth;
        cell.type = "next-month";
      }
      return true;
    }
    return false;
  };
  const setCellMetadata = (cell, { columnIndex, rowIndex }, count) => {
    const { disabledDate: disabledDate2, cellClassName } = props;
    const _selectedDate = unref(selectedDate);
    const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex });
    const cellDate = cell.dayjs.toDate();
    cell.selected = _selectedDate.find((d2) => d2.isSame(cell.dayjs, "day"));
    cell.isSelected = !!cell.selected;
    cell.isCurrent = isCurrent(cell);
    cell.disabled = disabledDate2 == null ? void 0 : disabledDate2(cellDate);
    cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
    return shouldIncrement;
  };
  const setRowMetadata = (row) => {
    if (props.selectionMode === "week") {
      const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
      const isActive = isWeekActive(row[start + 1]);
      row[start].inRange = isActive;
      row[start].start = isActive;
      row[end].inRange = isActive;
      row[end].end = isActive;
    }
  };
  const rows = computed(() => {
    const { minDate, maxDate, rangeState, showWeekNumber } = props;
    const offset = unref(offsetDay);
    const rows_ = unref(tableRows);
    const dateUnit = "day";
    let count = 1;
    if (showWeekNumber) {
      for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        if (!rows_[rowIndex][0]) {
          rows_[rowIndex][0] = {
            type: "week",
            text: unref(startDate).add(rowIndex * 7 + 1, dateUnit).week()
          };
        }
      }
    }
    buildPickerTable({ row: 6, column: 7 }, rows_, {
      startDate: minDate,
      columnIndexOffset: showWeekNumber ? 1 : 0,
      nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
      now: dayjs().locale(unref(lang)).startOf(dateUnit),
      unit: dateUnit,
      relativeDateGetter: (idx) => unref(startDate).add(idx - offset, dateUnit),
      setCellMetadata: (...args) => {
        if (setCellMetadata(...args, count)) {
          count += 1;
        }
      },
      setRowMetadata
    });
    return rows_;
  });
  watch(() => props.date, async () => {
    var _a2;
    if ((_a2 = unref(tbodyRef)) == null ? void 0 : _a2.contains(document.activeElement)) {
      await nextTick();
      await focus();
    }
  });
  const focus = async () => {
    var _a2;
    return (_a2 = unref(currentCellRef)) == null ? void 0 : _a2.focus();
  };
  const isCurrent = (cell) => {
    return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
  };
  const cellMatchesDate = (cell, date2) => {
    if (!date2)
      return false;
    return dayjs(date2).locale(unref(lang)).isSame(props.date.date(Number(cell.text)), "day");
  };
  const getDateOfCell = (row, column) => {
    const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - unref(offsetDay);
    return unref(startDate).add(offsetFromStart, "day");
  };
  const handleMouseMove = (event) => {
    var _a2;
    if (!props.rangeState.selecting)
      return;
    let target = event.target;
    if (target.tagName === "SPAN") {
      target = (_a2 = target.parentNode) == null ? void 0 : _a2.parentNode;
    }
    if (target.tagName === "DIV") {
      target = target.parentNode;
    }
    if (target.tagName !== "TD")
      return;
    const row = target.parentNode.rowIndex - 1;
    const column = target.cellIndex;
    if (unref(rows)[row][column].disabled)
      return;
    if (row !== unref(lastRow) || column !== unref(lastColumn)) {
      lastRow.value = row;
      lastColumn.value = column;
      emit("changerange", {
        selecting: true,
        endDate: getDateOfCell(row, column)
      });
    }
  };
  const isSelectedCell = (cell) => {
    return !unref(hasCurrent) && (cell == null ? void 0 : cell.text) === 1 && cell.type === "normal" || cell.isCurrent;
  };
  const handleFocus = (event) => {
    if (focusWithClick || unref(hasCurrent) || props.selectionMode !== "date")
      return;
    handlePickDate(event, true);
  };
  const handleMouseDown = (event) => {
    const target = event.target.closest("td");
    if (!target)
      return;
    focusWithClick = true;
  };
  const handleMouseUp = (event) => {
    const target = event.target.closest("td");
    if (!target)
      return;
    focusWithClick = false;
  };
  const handleRangePick = (newDate) => {
    if (!props.rangeState.selecting || !props.minDate) {
      emit("pick", { minDate: newDate, maxDate: null });
      emit("select", true);
    } else {
      if (newDate >= props.minDate) {
        emit("pick", { minDate: props.minDate, maxDate: newDate });
      } else {
        emit("pick", { minDate: newDate, maxDate: props.minDate });
      }
      emit("select", false);
    }
  };
  const handleWeekPick = (newDate) => {
    const weekNumber = newDate.week();
    const value = `${newDate.year()}w${weekNumber}`;
    emit("pick", {
      year: newDate.year(),
      week: weekNumber,
      value,
      date: newDate.startOf("week")
    });
  };
  const handleDatesPick = (newDate, selected) => {
    const newValue = selected ? castArray(props.parsedValue).filter((d2) => (d2 == null ? void 0 : d2.valueOf()) !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
    emit("pick", newValue);
  };
  const handlePickDate = (event, isKeyboardMovement = false) => {
    const target = event.target.closest("td");
    if (!target)
      return;
    const row = target.parentNode.rowIndex - 1;
    const column = target.cellIndex;
    const cell = unref(rows)[row][column];
    if (cell.disabled || cell.type === "week")
      return;
    const newDate = getDateOfCell(row, column);
    switch (props.selectionMode) {
      case "range": {
        handleRangePick(newDate);
        break;
      }
      case "date": {
        emit("pick", newDate, isKeyboardMovement);
        break;
      }
      case "week": {
        handleWeekPick(newDate);
        break;
      }
      case "dates": {
        handleDatesPick(newDate, !!cell.selected);
        break;
      }
    }
  };
  const isWeekActive = (cell) => {
    if (props.selectionMode !== "week")
      return false;
    let newDate = props.date.startOf("day");
    if (cell.type === "prev-month") {
      newDate = newDate.subtract(1, "month");
    }
    if (cell.type === "next-month") {
      newDate = newDate.add(1, "month");
    }
    newDate = newDate.date(Number.parseInt(cell.text, 10));
    if (props.parsedValue && !Array.isArray(props.parsedValue)) {
      const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
      const weekDate = props.parsedValue.subtract(dayOffset, "day");
      return weekDate.isSame(newDate, "day");
    }
    return false;
  };
  return {
    WEEKS,
    rows,
    tbodyRef,
    currentCellRef,
    focus,
    isCurrent,
    isWeekActive,
    isSelectedCell,
    handlePickDate,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    handleFocus
  };
};
const useBasicDateTableDOM = (props, {
  isCurrent,
  isWeekActive
}) => {
  const ns = useNamespace("date-table");
  const { t: t2 } = useLocale();
  const tableKls = computed(() => [
    ns.b(),
    { "is-week-mode": props.selectionMode === "week" }
  ]);
  const tableLabel = computed(() => t2("el.datepicker.dateTablePrompt"));
  const weekLabel = computed(() => t2("el.datepicker.week"));
  const getCellClasses = (cell) => {
    const classes = [];
    if (isNormalDay(cell.type) && !cell.disabled) {
      classes.push("available");
      if (cell.type === "today") {
        classes.push("today");
      }
    } else {
      classes.push(cell.type);
    }
    if (isCurrent(cell)) {
      classes.push("current");
    }
    if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
      classes.push("in-range");
      if (cell.start) {
        classes.push("start-date");
      }
      if (cell.end) {
        classes.push("end-date");
      }
    }
    if (cell.disabled) {
      classes.push("disabled");
    }
    if (cell.selected) {
      classes.push("selected");
    }
    if (cell.customClass) {
      classes.push(cell.customClass);
    }
    return classes.join(" ");
  };
  const getRowKls = (cell) => [
    ns.e("row"),
    { current: isWeekActive(cell) }
  ];
  return {
    tableKls,
    tableLabel,
    weekLabel,
    getCellClasses,
    getRowKls,
    t: t2
  };
};
const basicCellProps = buildProps({
  cell: {
    type: definePropType(Object)
  }
});
var ElDatePickerCell = defineComponent({
  name: "ElDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace("date-table-cell");
    const {
      slots
    } = inject(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const {
        cell
      } = props;
      return renderSlot(slots, "default", {
        ...cell
      }, () => [createVNode("div", {
        "class": ns.b()
      }, [createVNode("span", {
        "class": ns.e("text")
      }, [cell == null ? void 0 : cell.text])])]);
    };
  }
});
const _hoisted_1$b = ["aria-label"];
const _hoisted_2$a = {
  key: 0,
  scope: "col"
};
const _hoisted_3$6 = ["aria-label"];
const _hoisted_4$4 = ["aria-current", "aria-selected", "tabindex"];
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "basic-date-table",
  props: basicDateTableProps,
  emits: basicDateTableEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      WEEKS,
      rows,
      tbodyRef,
      currentCellRef,
      focus,
      isCurrent,
      isWeekActive,
      isSelectedCell,
      handlePickDate,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      handleFocus
    } = useBasicDateTable(props, emit);
    const { tableLabel, tableKls, weekLabel, getCellClasses, getRowKls, t: t2 } = useBasicDateTableDOM(props, {
      isCurrent,
      isWeekActive
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        "aria-label": unref(tableLabel),
        class: normalizeClass(unref(tableKls)),
        cellspacing: "0",
        cellpadding: "0",
        role: "grid",
        onClick: _cache[1] || (_cache[1] = (...args) => unref(handlePickDate) && unref(handlePickDate)(...args)),
        onMousemove: _cache[2] || (_cache[2] = (...args) => unref(handleMouseMove) && unref(handleMouseMove)(...args)),
        onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => unref(handleMouseDown) && unref(handleMouseDown)(...args), ["prevent"])),
        onMouseup: _cache[4] || (_cache[4] = (...args) => unref(handleMouseUp) && unref(handleMouseUp)(...args))
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          createElementVNode("tr", null, [
            _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_2$a, toDisplayString(unref(weekLabel)), 1)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(WEEKS), (week, key2) => {
              return openBlock(), createElementBlock("th", {
                key: key2,
                "aria-label": unref(t2)("el.datepicker.weeksFull." + week),
                scope: "col"
              }, toDisplayString(unref(t2)("el.datepicker.weeks." + week)), 9, _hoisted_3$6);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, rowKey) => {
            return openBlock(), createElementBlock("tr", {
              key: rowKey,
              class: normalizeClass(unref(getRowKls)(row[1]))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, columnKey) => {
                return openBlock(), createElementBlock("td", {
                  key: `${rowKey}.${columnKey}`,
                  ref_for: true,
                  ref: (el) => unref(isSelectedCell)(cell) && (currentCellRef.value = el),
                  class: normalizeClass(unref(getCellClasses)(cell)),
                  "aria-current": cell.isCurrent ? "date" : void 0,
                  "aria-selected": cell.isCurrent,
                  tabindex: unref(isSelectedCell)(cell) ? 0 : -1,
                  onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args))
                }, [
                  createVNode(unref(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, _hoisted_4$4);
              }), 128))
            ], 2);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$b);
    };
  }
});
var DateTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__file", "basic-date-table.vue"]]);
const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month")
});
const _hoisted_1$a = ["aria-label"];
const _hoisted_2$9 = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
const _hoisted_3$5 = { class: "cell" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "basic-month-table",
  props: basicMonthTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInMonth = (year, month, lang2) => {
      const firstDay = dayjs().locale(lang2).startOf("month").month(month).year(year);
      const numOfDays = firstDay.daysInMonth();
      return rangeArr(numOfDays).map((n2) => firstDay.add(n2, "day").toDate());
    };
    const ns = useNamespace("month-table");
    const { t: t2, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const months = ref(props.date.locale("en").localeData().monthsShort().map((_2) => _2.toLowerCase()));
    const tableRows = ref([
      [],
      [],
      []
    ]);
    const lastRow = ref();
    const lastColumn = ref();
    const rows = computed(() => {
      var _a2, _b;
      const rows2 = tableRows.value;
      const now2 = dayjs().locale(lang.value).startOf("month");
      for (let i2 = 0; i2 < 3; i2++) {
        const row = rows2[i2];
        for (let j2 = 0; j2 < 4; j2++) {
          const cell = row[j2] || (row[j2] = {
            row: i2,
            column: j2,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          cell.type = "normal";
          const index2 = i2 * 4 + j2;
          const calTime = props.date.startOf("year").month(index2);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
          if ((_a2 = props.minDate) == null ? void 0 : _a2.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
          }
          const isToday = now2.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index2;
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, calTime.toDate())) || false;
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a2;
      (_a2 = currentCellRef.value) == null ? void 0 : _a2.focus();
    };
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = new Date();
      const month = cell.text;
      style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
      style.current = castArray(props.parsedValue).findIndex((date2) => dayjs.isDayjs(date2) && date2.year() === year && date2.month() === month) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const isSelectedCell = (cell) => {
      const year = props.date.year();
      const month = cell.text;
      return castArray(props.date).findIndex((date2) => date2.year() === year && date2.month() === month) >= 0;
    };
    const handleMouseMove = (event) => {
      var _a2;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = (_a2 = target.parentNode) == null ? void 0 : _a2.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      var _a2;
      const target = (_a2 = event.target) == null ? void 0 : _a2.closest("td");
      if ((target == null ? void 0 : target.tagName) !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else {
        emit("pick", month);
      }
    };
    watch(() => props.date, async () => {
      var _a2, _b;
      if ((_a2 = tbodyRef.value) == null ? void 0 : _a2.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t2)("el.datepicker.monthTablePrompt"),
        class: normalizeClass(unref(ns).b()),
        onClick: handleMonthTableClick,
        onMousemove: handleMouseMove
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (row, key2) => {
            return openBlock(), createElementBlock("tr", { key: key2 }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
                return openBlock(), createElementBlock("td", {
                  key: key_,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: normalizeClass(getCellStyle(cell)),
                  "aria-selected": `${isSelectedCell(cell)}`,
                  "aria-label": unref(t2)(`el.datepicker.month${+cell.text + 1}`),
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onKeydown: [
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["space"]),
                    withKeys(withModifiers(handleMonthTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  createElementVNode("div", null, [
                    createElementVNode("span", _hoisted_3$5, toDisplayString(unref(t2)("el.datepicker.months." + months.value[cell.text])), 1)
                  ])
                ], 42, _hoisted_2$9);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, _hoisted_1$a);
    };
  }
});
var MonthTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__file", "basic-month-table.vue"]]);
const { date, disabledDate, parsedValue } = datePickerSharedProps;
const basicYearTableProps = buildProps({
  date,
  disabledDate,
  parsedValue,
  selectionMode: selectionModeWithDefault("year")
});
const _hoisted_1$9 = ["aria-label"];
const _hoisted_2$8 = ["aria-selected", "tabindex", "onKeydown"];
const _hoisted_3$4 = { class: "cell" };
const _hoisted_4$3 = { key: 1 };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "basic-year-table",
  props: basicYearTableProps,
  emits: ["pick"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInYear = (year, lang2) => {
      const firstDay = dayjs(String(year)).locale(lang2).startOf("year");
      const lastDay = firstDay.endOf("year");
      const numOfDays = lastDay.dayOfYear();
      return rangeArr(numOfDays).map((n2) => firstDay.add(n2, "day").toDate());
    };
    const ns = useNamespace("year-table");
    const { t: t2, lang } = useLocale();
    const tbodyRef = ref();
    const currentCellRef = ref();
    const startYear = computed(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const focus = () => {
      var _a2;
      (_a2 = currentCellRef.value) == null ? void 0 : _a2.focus();
    };
    const getCellKls = (year) => {
      const kls = {};
      const today = dayjs().locale(lang.value);
      kls.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
      kls.current = castArray(props.parsedValue).findIndex((d2) => d2.year() === year) >= 0;
      kls.today = today.year() === year;
      return kls;
    };
    const isSelectedCell = (year) => {
      return year === startYear.value && props.date.year() < startYear.value && props.date.year() > startYear.value + 9 || castArray(props.date).findIndex((date2) => date2.year() === year) >= 0 || castArray(props.parsedValue).findIndex((date2) => (date2 == null ? void 0 : date2.year()) === year) >= 0;
    };
    const handleYearTableClick = (event) => {
      const clickTarget = event.target;
      const target = clickTarget.closest("td");
      if (target && target.textContent) {
        if (hasClass(target, "disabled"))
          return;
        const year = target.textContent || target.innerText;
        if (props.selectionMode === "years") {
          if (event.type === "keydown") {
            emit("pick", castArray(props.parsedValue), false);
            return;
          }
          const newValue = hasClass(target, "current") ? castArray(props.parsedValue).filter((d2) => (d2 == null ? void 0 : d2.year()) !== Number(year)) : castArray(props.parsedValue).concat([dayjs(year)]);
          emit("pick", newValue);
        } else {
          emit("pick", Number(year));
        }
      }
    };
    watch(() => props.date, async () => {
      var _a2, _b;
      if ((_a2 = tbodyRef.value) == null ? void 0 : _a2.contains(document.activeElement)) {
        await nextTick();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", {
        role: "grid",
        "aria-label": unref(t2)("el.datepicker.yearTablePrompt"),
        class: normalizeClass(unref(ns).b()),
        onClick: handleYearTableClick
      }, [
        createElementVNode("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(3, (_2, i2) => {
            return createElementVNode("tr", { key: i2 }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(4, (__, j2) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: i2 + "_" + j2
                }, [
                  i2 * 4 + j2 < 10 ? (openBlock(), createElementBlock("td", {
                    key: 0,
                    ref_for: true,
                    ref: (el) => isSelectedCell(unref(startYear) + i2 * 4 + j2) && (currentCellRef.value = el),
                    class: normalizeClass(["available", getCellKls(unref(startYear) + i2 * 4 + j2)]),
                    "aria-selected": `${isSelectedCell(unref(startYear) + i2 * 4 + j2)}`,
                    tabindex: isSelectedCell(unref(startYear) + i2 * 4 + j2) ? 0 : -1,
                    onKeydown: [
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["space"]),
                      withKeys(withModifiers(handleYearTableClick, ["prevent", "stop"]), ["enter"])
                    ]
                  }, [
                    createElementVNode("div", null, [
                      createElementVNode("span", _hoisted_3$4, toDisplayString(unref(startYear) + i2 * 4 + j2), 1)
                    ])
                  ], 42, _hoisted_2$8)) : (openBlock(), createElementBlock("td", _hoisted_4$3))
                ], 64);
              }), 64))
            ]);
          }), 64))
        ], 512)
      ], 10, _hoisted_1$9);
    };
  }
});
var YearTable = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__file", "basic-year-table.vue"]]);
const _hoisted_1$8 = ["onClick"];
const _hoisted_2$7 = ["aria-label"];
const _hoisted_3$3 = ["aria-label"];
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$2 = ["aria-label"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "panel-date-pick",
  props: panelDatePickProps,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(__props, { emit: contextEmit }) {
    const props = __props;
    const timeWithinRange = (_2, __, ___) => true;
    const ppNs = useNamespace("picker-panel");
    const dpNs = useNamespace("date-picker");
    const attrs = useAttrs$2();
    const slots = useSlots();
    const { t: t2, lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const popper = inject(TOOLTIP_INJECTION_KEY);
    const { shortcuts, disabledDate: disabledDate2, cellClassName, defaultTime } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const currentViewRef = ref();
    const innerDate = ref(dayjs().locale(lang.value));
    const isChangeToNow = ref(false);
    let isShortcut = false;
    const defaultTimeD = computed(() => {
      return dayjs(defaultTime).locale(lang.value);
    });
    const month = computed(() => {
      return innerDate.value.month();
    });
    const year = computed(() => {
      return innerDate.value.year();
    });
    const selectableRange = ref([]);
    const userInputDate = ref(null);
    const userInputTime = ref(null);
    const checkDateWithinRange = (date2) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date2, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value && !isChangeToNow.value && !isShortcut) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        contextEmit("pick", value, ...args);
      } else if (isArray$2(value)) {
        const dates = value.map(formatEmit);
        contextEmit("pick", dates, ...args);
      } else {
        contextEmit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
      isChangeToNow.value = false;
      isShortcut = false;
    };
    const handleDatePick = async (value, keepOpen) => {
      if (selectionMode.value === "date") {
        value = value;
        let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) {
          newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
        }
        innerDate.value = newDate;
        emit(newDate, showTime.value || keepOpen);
        if (props.type === "datetime") {
          await nextTick();
          handleFocusPicker();
        }
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const moveByMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      innerDate.value = innerDate.value[action](1, "month");
      handlePanelChange("month");
    };
    const moveByYear = (forward) => {
      const currentDate = innerDate.value;
      const action = forward ? "add" : "subtract";
      innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
      handlePanelChange("year");
    };
    const currentView = ref("date");
    const yearLabel = computed(() => {
      const yearTranslation = t2("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = isFunction$2(shortcut.value) ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        isShortcut = true;
        emit(dayjs(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick({
          attrs,
          slots,
          emit: contextEmit
        });
      }
    };
    const selectionMode = computed(() => {
      const { type } = props;
      if (["week", "month", "year", "years", "dates"].includes(type))
        return type;
      return "date";
    });
    const keyboardMode = computed(() => {
      return selectionMode.value === "date" ? currentView.value : selectionMode.value;
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const handleMonthPick = async (month2) => {
      innerDate.value = innerDate.value.startOf("month").month(month2);
      if (selectionMode.value === "month") {
        emit(innerDate.value, false);
      } else {
        currentView.value = "date";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("month");
    };
    const handleYearPick = async (year2, keepOpen) => {
      if (selectionMode.value === "year") {
        innerDate.value = innerDate.value.startOf("year").year(year2);
        emit(innerDate.value, false);
      } else if (selectionMode.value === "years") {
        emit(year2, keepOpen != null ? keepOpen : true);
      } else {
        innerDate.value = innerDate.value.year(year2);
        currentView.value = "month";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await nextTick();
          handleFocusPicker();
        }
      }
      handlePanelChange("year");
    };
    const showPicker = async (view) => {
      currentView.value = view;
      await nextTick();
      handleFocusPicker();
    };
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = computed(() => {
      const showDateFooter = showTime.value || selectionMode.value === "dates";
      const showYearFooter = selectionMode.value === "years";
      const isDateView = currentView.value === "date";
      const isYearView = currentView.value === "year";
      return showDateFooter && isDateView || showYearFooter && isYearView;
    });
    const disabledConfirm = computed(() => {
      if (!disabledDate2)
        return false;
      if (!props.parsedValue)
        return true;
      if (isArray$2(props.parsedValue)) {
        return disabledDate2(props.parsedValue[0].toDate());
      }
      return disabledDate2(props.parsedValue.toDate());
    });
    const onConfirm = () => {
      if (selectionMode.value === "dates" || selectionMode.value === "years") {
        emit(props.parsedValue);
      } else {
        let result = props.parsedValue;
        if (!result) {
          const defaultTimeD2 = dayjs(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue2();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const disabledNow = computed(() => {
      if (!disabledDate2)
        return false;
      return disabledDate2(dayjs().locale(lang.value).toDate());
    });
    const changeToNow = () => {
      const now2 = dayjs().locale(lang.value);
      const nowDate = now2.toDate();
      isChangeToNow.value = true;
      if ((!disabledDate2 || !disabledDate2(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = computed(() => {
      return props.timeFormat || extractTimeFormat(props.format);
    });
    const dateFormat = computed(() => {
      return props.dateFormat || extractDateFormat(props.format);
    });
    const visibleTime = computed(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(timeFormat.value);
    });
    const visibleDate = computed(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(dateFormat.value);
    });
    const timePickerVisible = ref(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const getUnits = (date2) => {
      return {
        hour: date2.hour(),
        minute: date2.minute(),
        second: date2.second(),
        year: date2.year(),
        month: date2.month(),
        date: date2.date()
      };
    };
    const handleTimePick = (value, visible, first) => {
      const { hour, minute, second } = getUnits(value);
      const newDate = props.parsedValue ? props.parsedValue.hour(hour).minute(minute).second(second) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        const { year: year2, month: month2, date: date2 } = getUnits(innerDate.value);
        innerDate.value = newDate.year(year2).month(month2).date(date2);
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = dayjs(value, dateFormat.value).locale(lang.value);
      if (newDate.isValid()) {
        if (disabledDate2 && disabledDate2(newDate.toDate())) {
          return;
        }
        const { hour, minute, second } = getUnits(innerDate.value);
        innerDate.value = newDate.hour(hour).minute(minute).second(second);
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue = (date2) => {
      return dayjs.isDayjs(date2) && date2.isValid() && (disabledDate2 ? !disabledDate2(date2.toDate()) : true);
    };
    const formatToString = (value) => {
      return isArray$2(value) ? value.map((_2) => _2.format(props.format)) : value.format(props.format);
    };
    const parseUserInput = (value) => {
      return dayjs(value, props.format).locale(lang.value);
    };
    const getDefaultValue2 = () => {
      const parseDate2 = dayjs(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate2;
    };
    const handleFocusPicker = async () => {
      var _a2;
      if (["week", "month", "year", "date"].includes(selectionMode.value)) {
        (_a2 = currentViewRef.value) == null ? void 0 : _a2.focus();
        if (selectionMode.value === "week") {
          handleKeyControl(EVENT_CODE.down);
        }
      }
    };
    const handleKeydownTable = (event) => {
      const { code } = event;
      const validCode = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown
      ];
      if (validCode.includes(code)) {
        handleKeyControl(code);
        event.stopPropagation();
        event.preventDefault();
      }
      if ([EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.numpadEnter].includes(code) && userInputDate.value === null && userInputTime.value === null) {
        event.preventDefault();
        emit(innerDate.value, false);
      }
    };
    const handleKeyControl = (code) => {
      var _a2;
      const { up, down, left, right, home, end, pageUp, pageDown } = EVENT_CODE;
      const mapping = {
        year: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setFullYear(date2.getFullYear() + step)
        },
        month: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setMonth(date2.getMonth() + step)
        },
        week: {
          [up]: -1,
          [down]: 1,
          [left]: -1,
          [right]: 1,
          offset: (date2, step) => date2.setDate(date2.getDate() + step * 7)
        },
        date: {
          [up]: -7,
          [down]: 7,
          [left]: -1,
          [right]: 1,
          [home]: (date2) => -date2.getDay(),
          [end]: (date2) => -date2.getDay() + 6,
          [pageUp]: (date2) => -new Date(date2.getFullYear(), date2.getMonth(), 0).getDate(),
          [pageDown]: (date2) => new Date(date2.getFullYear(), date2.getMonth() + 1, 0).getDate(),
          offset: (date2, step) => date2.setDate(date2.getDate() + step)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map = mapping[keyboardMode.value];
        if (!map)
          return;
        map.offset(newDate, isFunction$2(map[code]) ? map[code](newDate) : (_a2 = map[code]) != null ? _a2 : 0);
        if (disabledDate2 && disabledDate2(newDate)) {
          break;
        }
        const result = dayjs(newDate).locale(lang.value);
        innerDate.value = result;
        contextEmit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    watch(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      } else if (val === "years") {
        currentView.value = "year";
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    watch(() => currentView.value, () => {
      popper == null ? void 0 : popper.updatePopper();
    });
    watch(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    watch(() => props.parsedValue, (val) => {
      if (val) {
        if (selectionMode.value === "dates" || selectionMode.value === "years")
          return;
        if (Array.isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue2();
      }
    }, { immediate: true });
    contextEmit("set-picker-option", ["isValidValue", isValidValue]);
    contextEmit("set-picker-option", ["formatToString", formatToString]);
    contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
    contextEmit("set-picker-option", ["handleFocusPicker", handleFocusPicker]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(dpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key2) => {
              return openBlock(), createElementBlock("button", {
                key: key2,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => handleShortcutClick(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$8);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(dpNs).e("time-header"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t2)("el.datepicker.selectDate"),
                  "model-value": unref(visibleDate),
                  size: "small",
                  "validate-event": false,
                  onInput: _cache[0] || (_cache[0] = (val) => userInputDate.value = val),
                  onChange: handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(dpNs).e("editor-wrap"))
              }, [
                createVNode(unref(ElInput), {
                  placeholder: unref(t2)("el.datepicker.selectTime"),
                  "model-value": unref(visibleTime),
                  size: "small",
                  "validate-event": false,
                  onFocus: onTimePickerInputFocus,
                  onInput: _cache[1] || (_cache[1] = (val) => userInputTime.value = val),
                  onChange: handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value"]),
                createVNode(unref(TimePickPanel), {
                  visible: timePickerVisible.value,
                  format: unref(timeFormat),
                  "parsed-value": innerDate.value,
                  onPick: handleTimePick
                }, null, 8, ["visible", "format", "parsed-value"])
              ], 2)), [
                [unref(ClickOutside), handleTimePickClose]
              ])
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createElementVNode("div", {
              class: normalizeClass([
                unref(dpNs).e("header"),
                (currentView.value === "year" || currentView.value === "month") && unref(dpNs).e("header--bordered")
              ])
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("prev-btn"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.prevYear`),
                  class: normalizeClass(["d-arrow-left", unref(ppNs).e("icon-btn")]),
                  onClick: _cache[2] || (_cache[2] = ($event) => moveByYear(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$7),
                withDirectives(createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.prevMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => moveByMonth(false))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$3), [
                  [vShow, currentView.value === "date"]
                ])
              ], 2),
              createElementVNode("span", {
                role: "button",
                class: normalizeClass(unref(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = withKeys(($event) => showPicker("year"), ["enter"])),
                onClick: _cache[5] || (_cache[5] = ($event) => showPicker("year"))
              }, toDisplayString(unref(yearLabel)), 35),
              withDirectives(createElementVNode("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: normalizeClass([
                  unref(dpNs).e("header-label"),
                  { active: currentView.value === "month" }
                ]),
                onKeydown: _cache[6] || (_cache[6] = withKeys(($event) => showPicker("month"), ["enter"])),
                onClick: _cache[7] || (_cache[7] = ($event) => showPicker("month"))
              }, toDisplayString(unref(t2)(`el.datepicker.month${unref(month) + 1}`)), 35), [
                [vShow, currentView.value === "date"]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(dpNs).e("next-btn"))
              }, [
                withDirectives(createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.nextMonth`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: _cache[8] || (_cache[8] = ($event) => moveByMonth(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$2), [
                  [vShow, currentView.value === "date"]
                ]),
                createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[9] || (_cache[9] = ($event) => moveByYear(true))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$2)
              ], 2)
            ], 2), [
              [vShow, currentView.value !== "time"]
            ]),
            createElementVNode("div", {
              class: normalizeClass(unref(ppNs).e("content")),
              onKeydown: handleKeydownTable
            }, [
              currentView.value === "date" ? (openBlock(), createBlock(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true),
              currentView.value === "year" ? (openBlock(), createBlock(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": unref(selectionMode),
                date: innerDate.value,
                "disabled-date": unref(disabledDate2),
                "parsed-value": _ctx.parsedValue,
                onPick: handleYearPick
              }, null, 8, ["selection-mode", "date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true),
              currentView.value === "month" ? (openBlock(), createBlock(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": unref(disabledDate2),
                onPick: handleMonthPick
              }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)
            ], 34)
          ], 2)
        ], 2),
        withDirectives(createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          withDirectives(createVNode(unref(ElButton), {
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(disabledNow),
            onClick: changeToNow
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.now")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"]), [
            [vShow, unref(selectionMode) !== "dates" && unref(selectionMode) !== "years"]
          ]),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(disabledConfirm),
            onClick: onConfirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ], 2), [
          [vShow, unref(footerVisible)]
        ])
      ], 2);
    };
  }
});
var DatePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__file", "panel-date-pick.vue"]]);
const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps
});
const useShortcut = (lang) => {
  const { emit } = getCurrentInstance();
  const attrs = useAttrs$2();
  const slots = useSlots();
  const handleShortcutClick = (shortcut) => {
    const shortcutValues = isFunction$2(shortcut.value) ? shortcut.value() : shortcut.value;
    if (shortcutValues) {
      emit("pick", [
        dayjs(shortcutValues[0]).locale(lang.value),
        dayjs(shortcutValues[1]).locale(lang.value)
      ]);
      return;
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit
      });
    }
  };
  return handleShortcutClick;
};
const useRangePicker = (props, {
  defaultValue,
  leftDate,
  rightDate,
  unit: unit2,
  onParsedValueChanged
}) => {
  const { emit } = getCurrentInstance();
  const { pickerNs } = inject(ROOT_PICKER_INJECTION_KEY);
  const drpNs = useNamespace("date-range-picker");
  const { t: t2, lang } = useLocale();
  const handleShortcutClick = useShortcut(lang);
  const minDate = ref();
  const maxDate = ref();
  const rangeState = ref({
    endDate: null,
    selecting: false
  });
  const handleChangeRange = (val) => {
    rangeState.value = val;
  };
  const handleRangeConfirm = (visible = false) => {
    const _minDate = unref(minDate);
    const _maxDate = unref(maxDate);
    if (isValidRange([_minDate, _maxDate])) {
      emit("pick", [_minDate, _maxDate], visible);
    }
  };
  const onSelect = (selecting) => {
    rangeState.value.selecting = selecting;
    if (!selecting) {
      rangeState.value.endDate = null;
    }
  };
  const restoreDefault = () => {
    const [start, end] = getDefaultValue(unref(defaultValue), {
      lang: unref(lang),
      unit: unit2,
      unlinkPanels: props.unlinkPanels
    });
    minDate.value = void 0;
    maxDate.value = void 0;
    leftDate.value = start;
    rightDate.value = end;
  };
  watch(defaultValue, (val) => {
    if (val) {
      restoreDefault();
    }
  }, { immediate: true });
  watch(() => props.parsedValue, (parsedValue2) => {
    if (isArray$2(parsedValue2) && parsedValue2.length === 2) {
      const [start, end] = parsedValue2;
      minDate.value = start;
      leftDate.value = start;
      maxDate.value = end;
      onParsedValueChanged(unref(minDate), unref(maxDate));
    } else {
      restoreDefault();
    }
  }, { immediate: true });
  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,
    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    t: t2
  };
};
const _hoisted_1$7 = ["onClick"];
const _hoisted_2$6 = ["aria-label"];
const _hoisted_3$2 = ["aria-label"];
const _hoisted_4$1 = ["disabled", "aria-label"];
const _hoisted_5$1 = ["disabled", "aria-label"];
const _hoisted_6 = ["disabled", "aria-label"];
const _hoisted_7 = ["disabled", "aria-label"];
const _hoisted_8 = ["aria-label"];
const _hoisted_9 = ["aria-label"];
const unit$1 = "month";
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "panel-date-range",
  props: panelDateRangeProps,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = inject("EP_PICKER_BASE");
    const { disabledDate: disabledDate2, cellClassName, format, defaultTime, clearable } = pickerBase.props;
    const shortcuts = toRef(pickerBase.props, "shortcuts");
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const { lang } = useLocale();
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit$1));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      t: t2
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit: unit$1,
      onParsedValueChanged
    });
    const dateUserInput = ref({
      min: null,
      max: null
    });
    const timeUserInput = ref({
      min: null,
      max: null
    });
    const leftLabel = computed(() => {
      return `${leftDate.value.year()} ${t2("el.datepicker.year")} ${t2(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
    });
    const rightLabel = computed(() => {
      return `${rightDate.value.year()} ${t2("el.datepicker.year")} ${t2(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
    });
    const leftYear = computed(() => {
      return leftDate.value.year();
    });
    const leftMonth = computed(() => {
      return leftDate.value.month();
    });
    const rightYear = computed(() => {
      return rightDate.value.year();
    });
    const rightMonth = computed(() => {
      return rightDate.value.month();
    });
    const hasShortcuts = computed(() => !!shortcuts.value.length);
    const minVisibleDate = computed(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = computed(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = computed(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = computed(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = computed(() => {
      return props.timeFormat || extractTimeFormat(format);
    });
    const dateFormat = computed(() => {
      return props.dateFormat || extractDateFormat(format);
    });
    const isValidValue = (date2) => {
      return isValidRange(date2) && (disabledDate2 ? !disabledDate2(date2[0].toDate()) && !disabledDate2(date2[1].toDate()) : true);
    };
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const handlePanelChange = (mode) => {
      emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
    };
    const enableMonthArrow = computed(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const btnDisabled = computed(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
    });
    const showTime = computed(() => props.type === "datetime" || props.type === "datetimerange");
    const formatEmit = (emitDayjs, index2) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs(defaultTime[index2] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close || showTime.value)
        return;
      handleRangeConfirm();
    };
    const minTimePickerVisible = ref(false);
    const maxTimePickerVisible = ref(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value;
      const parsedValueD = dayjs(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate2 && disabledDate2(parsedValueD.toDate())) {
          return;
        }
        if (type === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels && (!maxDate.value || maxDate.value.isBefore(minDate.value))) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels && (!minDate.value || minDate.value.isAfter(maxDate.value))) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
      }
    };
    const handleDateChange = (_2, type) => {
      dateUserInput.value[type] = null;
    };
    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value;
      const parsedValueD = dayjs(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value;
          }
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value;
          }
        }
      }
    };
    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null;
      if (type === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
      }
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
      }
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
    };
    const handleClear = () => {
      leftDate.value = getDefaultValue(unref(defaultValue), {
        lang: unref(lang),
        unit: "month",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "month");
      maxDate.value = void 0;
      minDate.value = void 0;
      emit("pick", null);
    };
    const formatToString = (value) => {
      return isArray$2(value) ? value.map((_2) => _2.format(format)) : value.format(format);
    };
    const parseUserInput = (value) => {
      return isArray$2(value) ? value.map((_2) => dayjs(_2, format).locale(lang.value)) : dayjs(value, format).locale(lang.value);
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
        const maxDateYear = maxDate2.year();
        const maxDateMonth = maxDate2.month();
        rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit$1) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit$1);
        if (maxDate2) {
          rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
        }
      }
    }
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || unref(hasShortcuts),
            "has-time": unref(showTime)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key2) => {
              return openBlock(), createElementBlock("button", {
                key: key2,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$7);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            unref(showTime) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(drpNs).e("time-header"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(drpNs).e("editors-wrap"))
              }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.startDate"),
                    class: normalizeClass(unref(drpNs).e("editor")),
                    "model-value": unref(minVisibleDate),
                    "validate-event": false,
                    onInput: _cache[0] || (_cache[0] = (val) => handleDateInput(val, "min")),
                    onChange: _cache[1] || (_cache[1] = (val) => handleDateChange(val, "min"))
                  }, null, 8, ["disabled", "placeholder", "class", "model-value"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.startTime"),
                    "model-value": unref(minVisibleTime),
                    "validate-event": false,
                    onFocus: _cache[2] || (_cache[2] = ($event) => minTimePickerVisible.value = true),
                    onInput: _cache[3] || (_cache[3] = (val) => handleTimeInput(val, "min")),
                    onChange: _cache[4] || (_cache[4] = (val) => handleTimeChange(val, "min"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                  createVNode(unref(TimePickPanel), {
                    visible: minTimePickerVisible.value,
                    format: unref(timeFormat),
                    "datetime-role": "start",
                    "parsed-value": leftDate.value,
                    onPick: handleMinTimePick
                  }, null, 8, ["visible", "format", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMinTimeClose]
                ])
              ], 2),
              createElementVNode("span", null, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_right_default))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("span", {
                class: normalizeClass([unref(drpNs).e("editors-wrap"), "is-right"])
              }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.endDate"),
                    "model-value": unref(maxVisibleDate),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onInput: _cache[5] || (_cache[5] = (val) => handleDateInput(val, "max")),
                    onChange: _cache[6] || (_cache[6] = (val) => handleDateChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
                ], 2),
                withDirectives((openBlock(), createElementBlock("span", {
                  class: normalizeClass(unref(drpNs).e("time-picker-wrap"))
                }, [
                  createVNode(unref(ElInput), {
                    size: "small",
                    class: normalizeClass(unref(drpNs).e("editor")),
                    disabled: unref(rangeState).selecting,
                    placeholder: unref(t2)("el.datepicker.endTime"),
                    "model-value": unref(maxVisibleTime),
                    readonly: !unref(minDate),
                    "validate-event": false,
                    onFocus: _cache[7] || (_cache[7] = ($event) => unref(minDate) && (maxTimePickerVisible.value = true)),
                    onInput: _cache[8] || (_cache[8] = (val) => handleTimeInput(val, "max")),
                    onChange: _cache[9] || (_cache[9] = (val) => handleTimeChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                  createVNode(unref(TimePickPanel), {
                    "datetime-role": "end",
                    visible: maxTimePickerVisible.value,
                    format: unref(timeFormat),
                    "parsed-value": rightDate.value,
                    onPick: handleMaxTimePick
                  }, null, 8, ["visible", "format", "parsed-value"])
                ], 2)), [
                  [unref(ClickOutside), handleMaxTimeClose]
                ])
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  "aria-label": unref(t2)(`el.datepicker.prevYear`),
                  onClick: leftPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$6),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-left"]),
                  "aria-label": unref(t2)(`el.datepicker.prevMonth`),
                  onClick: leftPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-right"]),
                  "aria-label": unref(t2)(`el.datepicker.nextYear`),
                  onClick: leftNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_4$1)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-right"]),
                  "aria-label": unref(t2)(`el.datepicker.nextMonth`),
                  onClick: leftNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_5$1)) : createCommentVNode("v-if", true),
                createElementVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  "aria-label": unref(t2)(`el.datepicker.prevYear`),
                  onClick: rightPrevYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_6)) : createCommentVNode("v-if", true),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  disabled: !unref(enableMonthArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { "is-disabled": !unref(enableMonthArrow) }
                  ], "arrow-left"]),
                  "aria-label": unref(t2)(`el.datepicker.prevMonth`),
                  onClick: rightPrevMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_7)) : createCommentVNode("v-if", true),
                createElementVNode("button", {
                  type: "button",
                  "aria-label": unref(t2)(`el.datepicker.nextYear`),
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: rightNextYear
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_8),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "arrow-right"]),
                  "aria-label": unref(t2)(`el.datepicker.nextMonth`),
                  onClick: rightNextMonth
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_9),
                createElementVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(DateTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                "cell-class-name": unref(cellClassName),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2),
        unref(showTime) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(ppNs).e("footer"))
        }, [
          unref(clearable) ? (openBlock(), createBlock(unref(ElButton), {
            key: 0,
            text: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            onClick: handleClear
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          createVNode(unref(ElButton), {
            plain: "",
            size: "small",
            class: normalizeClass(unref(ppNs).e("link-btn")),
            disabled: unref(btnDisabled),
            onClick: _cache[10] || (_cache[10] = ($event) => unref(handleRangeConfirm)(false))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t2)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ], 2)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var DateRangePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__file", "panel-date-range.vue"]]);
const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelMonthRangeEmits = [
  "pick",
  "set-picker-option",
  "calendar-change"
];
const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const { t: t2 } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels.value) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels.value) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = computed(() => {
    return `${leftDate.value.year()} ${t2("el.datepicker.year")}`;
  });
  const rightLabel = computed(() => {
    return `${rightDate.value.year()} ${t2("el.datepicker.year")}`;
  });
  const leftYear = computed(() => {
    return leftDate.value.year();
  });
  const rightYear = computed(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};
const _hoisted_1$6 = ["onClick"];
const _hoisted_2$5 = ["disabled"];
const _hoisted_3$1 = ["disabled"];
const unit = "year";
const __default__$4 = defineComponent({
  name: "DatePickerMonthRange"
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: panelMonthRangeProps,
  emits: panelMonthRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { lang } = useLocale();
    const pickerBase = inject("EP_PICKER_BASE");
    const { shortcuts, disabledDate: disabledDate2, format } = pickerBase.props;
    const defaultValue = toRef(pickerBase.props, "defaultValue");
    const leftDate = ref(dayjs().locale(lang.value));
    const rightDate = ref(dayjs().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const hasShortcuts = computed(() => !!shortcuts.length);
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useMonthRangeHeader({
      unlinkPanels: toRef(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const enableYearArrow = computed(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [minDate_.toDate(), maxDate_ && maxDate_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const formatToString = (days) => {
      return days.map((day) => day.format(format));
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear === maxDateYear ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
      }
    }
    emit("set-picker-option", ["formatToString", formatToString]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ppNs).b(),
          unref(drpNs).b(),
          {
            "has-sidebar": Boolean(_ctx.$slots.sidebar) || unref(hasShortcuts)
          }
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ppNs).e("body-wrapper"))
        }, [
          renderSlot(_ctx.$slots, "sidebar", {
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }),
          unref(hasShortcuts) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ppNs).e("sidebar"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(shortcuts), (shortcut, key2) => {
              return openBlock(), createElementBlock("button", {
                key: key2,
                type: "button",
                class: normalizeClass(unref(ppNs).e("shortcut")),
                onClick: ($event) => unref(handleShortcutClick)(shortcut)
              }, toDisplayString(shortcut.text), 11, _hoisted_1$6);
            }), 128))
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ppNs).e("body"))
          }, [
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-left"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(leftPrevYear) && unref(leftPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[
                    unref(ppNs).e("icon-btn"),
                    { [unref(ppNs).is("disabled")]: !unref(enableYearArrow) }
                  ], "d-arrow-right"]),
                  onClick: _cache[1] || (_cache[1] = (...args) => unref(leftNextYear) && unref(leftNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_2$5)) : createCommentVNode("v-if", true),
                createElementVNode("div", null, toDisplayString(unref(leftLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2),
            createElementVNode("div", {
              class: normalizeClass([[unref(ppNs).e("content"), unref(drpNs).e("content")], "is-right"])
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  disabled: !unref(enableYearArrow),
                  class: normalizeClass([[unref(ppNs).e("icon-btn"), { "is-disabled": !unref(enableYearArrow) }], "d-arrow-left"]),
                  onClick: _cache[2] || (_cache[2] = (...args) => unref(rightPrevYear) && unref(rightPrevYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 10, _hoisted_3$1)) : createCommentVNode("v-if", true),
                createElementVNode("button", {
                  type: "button",
                  class: normalizeClass([unref(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[3] || (_cache[3] = (...args) => unref(rightNextYear) && unref(rightNextYear)(...args))
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(d_arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("div", null, toDisplayString(unref(rightLabel)), 1)
              ], 2),
              createVNode(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": unref(minDate),
                "max-date": unref(maxDate),
                "range-state": unref(rangeState),
                "disabled-date": unref(disabledDate2),
                onChangerange: unref(handleChangeRange),
                onPick: handleRangePick,
                onSelect: unref(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__file", "panel-month-range.vue"]]);
const getPanel = function(type) {
  switch (type) {
    case "daterange":
    case "datetimerange": {
      return DateRangePickPanel;
    }
    case "monthrange": {
      return MonthRangePickPanel;
    }
    default: {
      return DatePickPanel;
    }
  }
};
dayjs.extend(localeData);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var DatePicker = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: datePickerProps,
  emits: ["update:modelValue"],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const ns = useNamespace("picker-panel");
    provide("ElPopperOptions", reactive(toRef(props, "popperOptions")));
    provide(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns
    });
    const commonPicker = ref();
    const refProps = {
      focus: (focusStartInput = true) => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.focus(focusStartInput);
      },
      handleOpen: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleOpen();
      },
      handleClose: () => {
        var _a2;
        (_a2 = commonPicker.value) == null ? void 0 : _a2.handleClose();
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit("update:modelValue", val);
    };
    return () => {
      var _a2;
      const format = (_a2 = props.format) != null ? _a2 : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      const Component = getPanel(props.type);
      return createVNode(CommonPicker, mergeProps(props, {
        "format": format,
        "type": props.type,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => createVNode(Component, scopedProps, null),
        "range-separator": slots["range-separator"]
      });
    };
  }
});
const _DatePicker = DatePicker;
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;
const inputNumberProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  readonly: Boolean,
  disabled: Boolean,
  size: useSizeProp,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (val) => val === null || isNumber$1(val) || ["min", "max"].includes(val),
    default: null
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const inputNumberEmits = {
  [CHANGE_EVENT]: (cur, prev) => prev !== cur,
  blur: (e2) => e2 instanceof FocusEvent,
  focus: (e2) => e2 instanceof FocusEvent,
  [INPUT_EVENT]: (val) => isNumber$1(val) || isNil(val),
  [UPDATE_MODEL_EVENT]: (val) => isNumber$1(val) || isNil(val)
};
const _hoisted_1$5 = ["aria-label", "onKeydown"];
const _hoisted_2$4 = ["aria-label", "onKeydown"];
const __default__$3 = defineComponent({
  name: "ElInputNumber"
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { t: t2 } = useLocale();
    const ns = useNamespace("input-number");
    const input = ref();
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = useFormItem();
    const minDisabled = computed(() => isNumber$1(props.modelValue) && props.modelValue <= props.min);
    const maxDisabled = computed(() => isNumber$1(props.modelValue) && props.modelValue >= props.max);
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (!isUndefined(props.precision)) {
        if (stepPrecision > props.precision)
          ;
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = useFormSize();
    const inputNumberDisabled = useFormDisabled();
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (isNil(currentValue))
        return "";
      if (isNumber$1(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (!isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (isUndefined(pre))
        pre = numPrecision.value;
      if (pre === 0)
        return Math.round(num);
      let snum = String(num);
      const pointPos = snum.indexOf(".");
      if (pointPos === -1)
        return num;
      const nums = snum.replace(".", "").split("");
      const datum = nums[pointPos + pre];
      if (!datum)
        return num;
      const length = snum.length;
      if (snum.charAt(length - 1) === "5") {
        snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
      }
      return Number.parseFloat(Number(snum).toFixed(pre));
    };
    const getPrecision = (value) => {
      if (isNil(value))
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!isNumber$1(val))
        return data.currentValue;
      return toPrecision(val + props.step * coefficient);
    };
    const increase = () => {
      if (props.readonly || inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const decrease = () => {
      if (props.readonly || inputNumberDisabled.value || minDisabled.value)
        return;
      const value = Number(displayValue.value) || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
      emit(INPUT_EVENT, data.currentValue);
      setCurrentValueToModelValue();
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly, valueOnClear } = props;
      if (max < min) {
        throwError("InputNumber", "min should not be greater than max.");
      }
      let newVal = Number(value);
      if (isNil(value) || Number.isNaN(newVal)) {
        return null;
      }
      if (value === "") {
        if (valueOnClear === null) {
          return null;
        }
        newVal = isString$1(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
      }
      if (stepStrictly) {
        newVal = toPrecision(Math.round(newVal / step) * step, precision);
      }
      if (!isUndefined(precision)) {
        newVal = toPrecision(newVal, precision);
      }
      if (newVal > max || newVal < min) {
        newVal = newVal > max ? max : min;
        update && emit(UPDATE_MODEL_EVENT, newVal);
      }
      return newVal;
    };
    const setCurrentValue = (value, emitChange = true) => {
      var _a2;
      const oldVal = data.currentValue;
      const newVal = verifyValue(value);
      if (!emitChange) {
        emit(UPDATE_MODEL_EVENT, newVal);
        return;
      }
      if (oldVal === newVal && value)
        return;
      data.userInput = null;
      emit(UPDATE_MODEL_EVENT, newVal);
      if (oldVal !== newVal) {
        emit(CHANGE_EVENT, newVal, oldVal);
      }
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
      }
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      data.userInput = value;
      const newVal = value === "" ? null : Number(value);
      emit(INPUT_EVENT, newVal);
      setCurrentValue(newVal, false);
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number(value) : "";
      if (isNumber$1(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      setCurrentValueToModelValue();
      data.userInput = null;
    };
    const focus = () => {
      var _a2, _b;
      (_b = (_a2 = input.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    };
    const blur = () => {
      var _a2, _b;
      (_b = (_a2 = input.value) == null ? void 0 : _a2.blur) == null ? void 0 : _b.call(_a2);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a2;
      data.userInput = null;
      emit("blur", event);
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "blur").catch((err) => debugWarn());
      }
    };
    const setCurrentValueToModelValue = () => {
      if (data.currentValue !== props.modelValue) {
        data.currentValue = props.modelValue;
      }
    };
    const handleWheel = (e2) => {
      if (document.activeElement === e2.target)
        e2.preventDefault();
    };
    watch(() => props.modelValue, (value, oldValue) => {
      const newValue = verifyValue(value, true);
      if (data.userInput === null && newValue !== oldValue) {
        data.currentValue = newValue;
      }
    }, { immediate: true });
    onMounted(() => {
      var _a2;
      const { min, max, modelValue } = props;
      const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
      innerInput.setAttribute("role", "spinbutton");
      if (Number.isFinite(max)) {
        innerInput.setAttribute("aria-valuemax", String(max));
      } else {
        innerInput.removeAttribute("aria-valuemax");
      }
      if (Number.isFinite(min)) {
        innerInput.setAttribute("aria-valuemin", String(min));
      } else {
        innerInput.removeAttribute("aria-valuemin");
      }
      innerInput.setAttribute("aria-valuenow", data.currentValue || data.currentValue === 0 ? String(data.currentValue) : "");
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!isNumber$1(modelValue) && modelValue != null) {
        let val = Number(modelValue);
        if (Number.isNaN(val)) {
          val = null;
        }
        emit(UPDATE_MODEL_EVENT, val);
      }
      innerInput.addEventListener("wheel", handleWheel, { passive: false });
    });
    onUpdated(() => {
      var _a2, _b;
      const innerInput = (_a2 = input.value) == null ? void 0 : _a2.input;
      innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", `${(_b = data.currentValue) != null ? _b : ""}`);
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-input-number",
      ref: "https://element-plus.org/en-US/component/input-number.html"
    }, computed(() => !!props.label));
    expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(unref(inputNumberSize)),
          unref(ns).is("disabled", unref(inputNumberDisabled)),
          unref(ns).is("without-controls", !_ctx.controls),
          unref(ns).is("controls-right", unref(controlsAtRight))
        ]),
        onDragstart: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 0,
          role: "button",
          "aria-label": unref(t2)("el.inputNumber.decrease"),
          class: normalizeClass([unref(ns).e("decrease"), unref(ns).is("disabled", unref(minDisabled))]),
          onKeydown: withKeys(decrease, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "decrease-icon", {}, () => [
            createVNode(unref(ElIcon), null, {
              default: withCtx(() => [
                unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_down_default), { key: 0 })) : (openBlock(), createBlock(unref(minus_default), { key: 1 }))
              ]),
              _: 1
            })
          ])
        ], 42, _hoisted_1$5)), [
          [unref(vRepeatClick), decrease]
        ]) : createCommentVNode("v-if", true),
        _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
          key: 1,
          role: "button",
          "aria-label": unref(t2)("el.inputNumber.increase"),
          class: normalizeClass([unref(ns).e("increase"), unref(ns).is("disabled", unref(maxDisabled))]),
          onKeydown: withKeys(increase, ["enter"])
        }, [
          renderSlot(_ctx.$slots, "increase-icon", {}, () => [
            createVNode(unref(ElIcon), null, {
              default: withCtx(() => [
                unref(controlsAtRight) ? (openBlock(), createBlock(unref(arrow_up_default), { key: 0 })) : (openBlock(), createBlock(unref(plus_default), { key: 1 }))
              ]),
              _: 1
            })
          ])
        ], 42, _hoisted_2$4)), [
          [unref(vRepeatClick), increase]
        ]) : createCommentVNode("v-if", true),
        createVNode(unref(ElInput), {
          id: _ctx.id,
          ref_key: "input",
          ref: input,
          type: "number",
          step: _ctx.step,
          "model-value": unref(displayValue),
          placeholder: _ctx.placeholder,
          readonly: _ctx.readonly,
          disabled: unref(inputNumberDisabled),
          size: unref(inputNumberSize),
          max: _ctx.max,
          min: _ctx.min,
          name: _ctx.name,
          "aria-label": _ctx.label || _ctx.ariaLabel,
          "validate-event": false,
          onKeydown: [
            withKeys(withModifiers(increase, ["prevent"]), ["up"]),
            withKeys(withModifiers(decrease, ["prevent"]), ["down"])
          ],
          onBlur: handleBlur,
          onFocus: handleFocus,
          onInput: handleInput,
          onChange: handleInputChange
        }, null, 8, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
      ], 34);
    };
  }
});
var InputNumber = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["__file", "input-number.vue"]]);
const ElInputNumber = withInstall(InputNumber);
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    if (select.props.multiple) {
      return contains(select.props.modelValue, props.value);
    } else {
      return contains([select.props.modelValue], props.value);
    }
  });
  const limitReached = computed(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject$2(props.value) ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject$2(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!isEqual(val, oldVal)) {
      select.onOptionDestroy(oldVal, instance.proxy);
      select.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject$2(val) && isObject$2(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$e = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key2 = vm.value;
      const { selected } = select.states;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      nextTick(() => {
        if (select.states.cachedOptions.get(key2) === vm && !doesSelected) {
          select.states.cachedOptions.delete(key2);
        }
      });
      select.onOptionDestroy(key2, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
const _hoisted_1$4 = ["id", "aria-disabled", "aria-selected"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, _hoisted_1$4)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["render", _sfc_render$8], ["__file", "option.vue"]]);
const _sfc_main$d = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a2;
      minWidth.value = `${(_a2 = select.selectRef) == null ? void 0 : _a2.offsetWidth}px`;
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectRef, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["render", _sfc_render$7], ["__file", "select-dropdown.vue"]]);
function useInput(handleInput) {
  const isComposing = ref(false);
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    const text = event.target.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    if (isComposing.value) {
      isComposing.value = false;
      if (isFunction$2(handleInput)) {
        handleInput(event);
      }
    }
  };
  return {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
const MINIMUM_INPUT_WIDTH = 11;
const useSelect = (props, emit) => {
  const { t: t2 } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: props.multiple ? [] : {},
    selectionWidth: 0,
    calculatorWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const tooltipRef = ref(null);
  const tagTooltipRef = ref(null);
  const inputRef = ref(null);
  const calculatorRef = ref(null);
  const prefixRef = ref(null);
  const suffixRef = ref(null);
  const menuRef = ref(null);
  const tagMenuRef = ref(null);
  const collapseItemRef = ref(null);
  const scrollbarRef = ref(null);
  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a2, _b;
      return ((_a2 = tooltipRef.value) == null ? void 0 : _a2.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      expanded.value = false;
      states.menuVisibleOnFocus = false;
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return props.multiple ? isArray$2(props.modelValue) && props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", iconComponent.value && expanded.value));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t2("el.select.loading");
    } else {
      if (props.remote && !states.inputValue && states.options.size === 0)
        return false;
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t2("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t2("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option) => option.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index2 = list.findIndex((i2) => i2.value === item);
      if (index2 > -1) {
        newList.push(list[index2]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction$2(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction$2(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a2;
      (_a2 = option.updateOption) == null ? void 0 : _a2.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (isArray$2(props.modelValue)) {
      return props.modelValue.length === 0 && !states.inputValue;
    }
    return props.filterable ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a2;
    const _placeholder = (_a2 = props.placeholder) != null ? _a2 : t2("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    var _a2;
    if (!isClient)
      return;
    const inputs = ((_a2 = selectRef.value) == null ? void 0 : _a2.querySelectorAll("input")) || [];
    if (!props.filterable && !props.defaultFirstOption && !isUndefined(props.modelValue) || !Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  watch(() => states.hoveringIndex, (val) => {
    if (isNumber$1(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction$2(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction$2(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n2) => n2.visible && !n2.disabled && !n2.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n2) => n2.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoveringIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (isArray$2(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i2 = states.cachedOptions.size - 1; i2 >= 0; i2--) {
      const cachedOption = cachedOptionsArray.value[i2];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    if (!props.multiple) {
      states.hoveringIndex = optionsArray.value.findIndex((item) => {
        return getValueKey(item) === getValueKey(states.selected);
      });
    } else {
      states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
    }
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width;
  };
  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width;
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a2, _b;
    (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
  };
  const updateTagTooltip = () => {
    var _a2, _b;
    (_b = (_a2 = tagTooltipRef.value) == null ? void 0 : _a2.updatePopper) == null ? void 0 : _b.call(_a2);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it2) => !states.disabledOptions.has(it2));
  const deletePrevTag = (e2) => {
    if (!props.multiple)
      return;
    if (e2.code === EVENT_CODE.delete)
      return;
    if (e2.target.value.length <= 0) {
      const value = props.modelValue.slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
  };
  const deleteTag = (event, tag) => {
    const index2 = states.selected.indexOf(tag);
    if (index2 > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index2, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject$2(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index2 = -1;
    arr.some((item, i2) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index2 = i2;
        return true;
      }
      return false;
    });
    return index2;
  };
  const scrollToOption = (option) => {
    var _a2, _b, _c, _d, _e;
    const targetOption = isArray$2(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
    vm.disabled && states.disabledOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key2, vm) => {
    if (states.options.get(key2) === vm) {
      states.options.delete(key2);
    }
  };
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useInput((e2) => onInput(e2));
  const popperRef = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => scrollToOption(states.selected));
  };
  const focus = () => {
    var _a2;
    (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
  };
  const blur = () => {
    handleClickOutside();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event2 = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event2));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoveringIndex]) {
        handleOptionSelect(optionsArray.value[states.hoveringIndex]);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$2(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = window.getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`
  }));
  if (props.multiple && !isArray$2(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, []);
  }
  if (!props.multiple && isArray$2(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, "");
  }
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  onMounted(() => {
    setSelected();
  });
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    resetCalculatorWidth,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    focus,
    blur,
    handleBlur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    tagStyle,
    collapseTagStyle,
    inputStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    calculatorRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_2, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a2, _b;
      const children = (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray$2(children2))
          return;
        children2.forEach((item) => {
          var _a22, _b2, _c, _d;
          const name = (_a22 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a22.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString$1(item.children) && !isArray$2(item.children) && isFunction$2((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray$2(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const COMPONENT_NAME$1 = "ElSelect";
const _sfc_main$c = defineComponent({
  name: COMPONENT_NAME$1,
  componentName: COMPONENT_NAME$1,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect(props, emit);
    provide(selectKey, reactive({
      props,
      states: API.states,
      optionsArray: API.optionsArray,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy,
      selectRef: API.selectRef,
      setSelected: API.setSelected
    }));
    return {
      ...API
    };
  }
});
const _hoisted_1$3 = ["id", "disabled", "autocomplete", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"];
const _hoisted_2$3 = ["textContent"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    onMouseenter: _cache[16] || (_cache[16] = ($event) => _ctx.states.inputHovering = true),
    onMouseleave: _cache[17] || (_cache[17] = ($event) => _ctx.states.inputHovering = false),
    onClick: _cache[18] || (_cache[18] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["prevent", "stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: _cache[15] || (_cache[15] = ($event) => _ctx.states.isBeforeHide = false)
    }, {
      default: withCtx(() => {
        var _a2;
        return [
          createElementVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, toDisplayString(item.currentLabel), 3)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, toDisplayString(item.currentLabel), 3)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              !_ctx.selectDisabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.states.inputValue = $event),
                  type: "text",
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a2 = _ctx.hoverOption) == null ? void 0 : _a2.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                  onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
                  onKeydown: [
                    _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                    _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                    _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"])),
                    _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                    _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["stop"]), ["delete"]))
                  ],
                  onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                  onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                  onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                  onInput: _cache[11] || (_cache[11] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                  onClick: _cache[12] || (_cache[12] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
                }, null, 46, _hoisted_1$3), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, _hoisted_2$3)) : createCommentVNode("v-if", true)
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                createElementVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createElementVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: _cache[13] || (_cache[13] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createElementVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: _cache[14] || (_cache[14] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "onBeforeShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["render", _sfc_render$6], ["__file", "select.vue"]]);
const _sfc_main$b = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref(null);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option) => option.visible === true));
    const isOption = (node) => {
      var _a2, _b;
      return ((_a2 = node.type) == null ? void 0 : _a2.name) === "ElOption" && !!((_b = node.component) == null ? void 0 : _b.proxy);
    };
    const flattedChildren = (node) => {
      const Nodes = castArray$1(node);
      const children2 = [];
      Nodes.forEach((child) => {
        var _a2, _b;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if ((_a2 = child.children) == null ? void 0 : _a2.length) {
          children2.push(...flattedChildren(child.children));
        } else if ((_b = child.component) == null ? void 0 : _b.subTree) {
          children2.push(...flattedChildren(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree);
    };
    onMounted(() => {
      updateChildren();
    });
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["render", _sfc_render$5], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
withNoopInstall(Option);
withNoopInstall(OptionGroup);
const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    default: void 0
  },
  lowThreshold: {
    type: Number,
    default: 2
  },
  highThreshold: {
    type: Number,
    default: 4
  },
  max: {
    type: Number,
    default: 5
  },
  colors: {
    type: definePropType([Array, Object]),
    default: () => mutable(["", "", ""])
  },
  voidColor: {
    type: String,
    default: ""
  },
  disabledVoidColor: {
    type: String,
    default: ""
  },
  icons: {
    type: definePropType([Array, Object]),
    default: () => [star_filled_default, star_filled_default, star_filled_default]
  },
  voidIcon: {
    type: iconPropType,
    default: () => star_default
  },
  disabledVoidIcon: {
    type: iconPropType,
    default: () => star_filled_default
  },
  disabled: Boolean,
  allowHalf: Boolean,
  showText: Boolean,
  showScore: Boolean,
  textColor: {
    type: String,
    default: ""
  },
  texts: {
    type: definePropType(Array),
    default: () => mutable([
      "Extremely bad",
      "Disappointed",
      "Fair",
      "Satisfied",
      "Surprise"
    ])
  },
  scoreTemplate: {
    type: String,
    default: "{value}"
  },
  size: useSizeProp,
  label: {
    type: String,
    default: void 0
  },
  clearable: {
    type: Boolean,
    default: false
  },
  ...useAriaProps(["ariaLabel"])
});
const rateEmits = {
  [CHANGE_EVENT]: (value) => isNumber$1(value),
  [UPDATE_MODEL_EVENT]: (value) => isNumber$1(value)
};
const _hoisted_1$2 = ["id", "aria-label", "aria-labelledby", "aria-valuenow", "aria-valuetext", "aria-valuemax"];
const _hoisted_2$2 = ["onMousemove", "onClick"];
const __default__$2 = defineComponent({
  name: "ElRate"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: rateProps,
  emits: rateEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    function getValueFromMap(value, map) {
      const isExcludedObject = (val) => isObject$2(val);
      const matchedKeys = Object.keys(map).map((key2) => +key2).filter((key2) => {
        const val = map[key2];
        const excluded = isExcludedObject(val) ? val.excluded : false;
        return excluded ? value < key2 : value <= key2;
      }).sort((a2, b2) => a2 - b2);
      const matchedValue = map[matchedKeys[0]];
      return isExcludedObject(matchedValue) && matchedValue.value || matchedValue;
    }
    const formContext = inject(formContextKey, void 0);
    const formItemContext = inject(formItemContextKey, void 0);
    const rateSize = useFormSize();
    const ns = useNamespace("rate");
    const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext
    });
    const currentValue = ref(props.modelValue);
    const hoverIndex = ref(-1);
    const pointerAtLeftHalf = ref(true);
    const rateClasses = computed(() => [ns.b(), ns.m(rateSize.value)]);
    const rateDisabled = computed(() => props.disabled || (formContext == null ? void 0 : formContext.disabled));
    const rateStyles = computed(() => {
      return ns.cssVarBlock({
        "void-color": props.voidColor,
        "disabled-void-color": props.disabledVoidColor,
        "fill-color": activeColor.value
      });
    });
    const text = computed(() => {
      let result = "";
      if (props.showScore) {
        result = props.scoreTemplate.replace(/\{\s*value\s*\}/, rateDisabled.value ? `${props.modelValue}` : `${currentValue.value}`);
      } else if (props.showText) {
        result = props.texts[Math.ceil(currentValue.value) - 1];
      }
      return result;
    });
    const valueDecimal = computed(() => props.modelValue * 100 - Math.floor(props.modelValue) * 100);
    const colorMap = computed(() => isArray$2(props.colors) ? {
      [props.lowThreshold]: props.colors[0],
      [props.highThreshold]: { value: props.colors[1], excluded: true },
      [props.max]: props.colors[2]
    } : props.colors);
    const activeColor = computed(() => {
      const color = getValueFromMap(currentValue.value, colorMap.value);
      return isObject$2(color) ? "" : color;
    });
    const decimalStyle = computed(() => {
      let width = "";
      if (rateDisabled.value) {
        width = `${valueDecimal.value}%`;
      } else if (props.allowHalf) {
        width = "50%";
      }
      return {
        color: activeColor.value,
        width
      };
    });
    const componentMap2 = computed(() => {
      let icons = isArray$2(props.icons) ? [...props.icons] : { ...props.icons };
      icons = markRaw(icons);
      return isArray$2(icons) ? {
        [props.lowThreshold]: icons[0],
        [props.highThreshold]: {
          value: icons[1],
          excluded: true
        },
        [props.max]: icons[2]
      } : icons;
    });
    const decimalIconComponent = computed(() => getValueFromMap(props.modelValue, componentMap2.value));
    const voidComponent = computed(() => rateDisabled.value ? isString$1(props.disabledVoidIcon) ? props.disabledVoidIcon : markRaw(props.disabledVoidIcon) : isString$1(props.voidIcon) ? props.voidIcon : markRaw(props.voidIcon));
    const activeComponent = computed(() => getValueFromMap(currentValue.value, componentMap2.value));
    function showDecimalIcon(item) {
      const showWhenDisabled = rateDisabled.value && valueDecimal.value > 0 && item - 1 < props.modelValue && item > props.modelValue;
      const showWhenAllowHalf = props.allowHalf && pointerAtLeftHalf.value && item - 0.5 <= currentValue.value && item > currentValue.value;
      return showWhenDisabled || showWhenAllowHalf;
    }
    function emitValue(value) {
      if (props.clearable && value === props.modelValue) {
        value = 0;
      }
      emit(UPDATE_MODEL_EVENT, value);
      if (props.modelValue !== value) {
        emit("change", value);
      }
    }
    function selectValue(value) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && pointerAtLeftHalf.value) {
        emitValue(currentValue.value);
      } else {
        emitValue(value);
      }
    }
    function handleKey(e2) {
      if (rateDisabled.value) {
        return;
      }
      let _currentValue = currentValue.value;
      const code = e2.code;
      if (code === EVENT_CODE.up || code === EVENT_CODE.right) {
        if (props.allowHalf) {
          _currentValue += 0.5;
        } else {
          _currentValue += 1;
        }
        e2.stopPropagation();
        e2.preventDefault();
      } else if (code === EVENT_CODE.left || code === EVENT_CODE.down) {
        if (props.allowHalf) {
          _currentValue -= 0.5;
        } else {
          _currentValue -= 1;
        }
        e2.stopPropagation();
        e2.preventDefault();
      }
      _currentValue = _currentValue < 0 ? 0 : _currentValue;
      _currentValue = _currentValue > props.max ? props.max : _currentValue;
      emit(UPDATE_MODEL_EVENT, _currentValue);
      emit("change", _currentValue);
      return _currentValue;
    }
    function setCurrentValue(value, event) {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf && event) {
        let target = event.target;
        if (hasClass(target, ns.e("item"))) {
          target = target.querySelector(`.${ns.e("icon")}`);
        }
        if (target.clientWidth === 0 || hasClass(target, ns.e("decimal"))) {
          target = target.parentNode;
        }
        pointerAtLeftHalf.value = event.offsetX * 2 <= target.clientWidth;
        currentValue.value = pointerAtLeftHalf.value ? value - 0.5 : value;
      } else {
        currentValue.value = value;
      }
      hoverIndex.value = value;
    }
    function resetCurrentValue() {
      if (rateDisabled.value) {
        return;
      }
      if (props.allowHalf) {
        pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
      }
      currentValue.value = props.modelValue;
      hoverIndex.value = -1;
    }
    watch(() => props.modelValue, (val) => {
      currentValue.value = val;
      pointerAtLeftHalf.value = props.modelValue !== Math.floor(props.modelValue);
    });
    if (!props.modelValue) {
      emit(UPDATE_MODEL_EVENT, 0);
    }
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-rate",
      ref: "https://element-plus.org/en-US/component/rate.html"
    }, computed(() => !!props.label));
    expose({
      setCurrentValue,
      resetCurrentValue
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", {
        id: unref(inputId),
        class: normalizeClass([unref(rateClasses), unref(ns).is("disabled", unref(rateDisabled))]),
        role: "slider",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "rating" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a2 = unref(formItemContext)) == null ? void 0 : _a2.labelId : void 0,
        "aria-valuenow": currentValue.value,
        "aria-valuetext": unref(text) || void 0,
        "aria-valuemin": "0",
        "aria-valuemax": _ctx.max,
        tabindex: "0",
        style: normalizeStyle(unref(rateStyles)),
        onKeydown: handleKey
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.max, (item, key2) => {
          return openBlock(), createElementBlock("span", {
            key: key2,
            class: normalizeClass(unref(ns).e("item")),
            onMousemove: ($event) => setCurrentValue(item, $event),
            onMouseleave: resetCurrentValue,
            onClick: ($event) => selectValue(item)
          }, [
            createVNode(unref(ElIcon), {
              class: normalizeClass([
                unref(ns).e("icon"),
                { hover: hoverIndex.value === item },
                unref(ns).is("active", item <= currentValue.value)
              ])
            }, {
              default: withCtx(() => [
                !showDecimalIcon(item) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(activeComponent)), null, null, 512)), [
                    [vShow, item <= currentValue.value]
                  ]),
                  withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(voidComponent)), null, null, 512)), [
                    [vShow, !(item <= currentValue.value)]
                  ])
                ], 64)) : createCommentVNode("v-if", true),
                showDecimalIcon(item) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(voidComponent)), {
                    class: normalizeClass([unref(ns).em("decimal", "box")])
                  }, null, 8, ["class"])),
                  createVNode(unref(ElIcon), {
                    style: normalizeStyle(unref(decimalStyle)),
                    class: normalizeClass([unref(ns).e("icon"), unref(ns).e("decimal")])
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(decimalIconComponent))))
                    ]),
                    _: 1
                  }, 8, ["style", "class"])
                ], 64)) : createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ], 42, _hoisted_2$2);
        }), 128)),
        _ctx.showText || _ctx.showScore ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(ns).e("text")),
          style: normalizeStyle({ color: _ctx.textColor })
        }, toDisplayString(unref(text)), 7)) : createCommentVNode("v-if", true)
      ], 46, _hoisted_1$2);
    };
  }
});
var Rate = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "rate.vue"]]);
const ElRate = withInstall(Rate);
const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: isValidComponentSize
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  inactiveActionIcon: {
    type: iconPropType
  },
  activeActionIcon: {
    type: iconPropType
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: definePropType(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  label: {
    type: String,
    default: void 0
  },
  ...useAriaProps(["ariaLabel"])
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean$1(val) || isString$1(val) || isNumber$1(val),
  [CHANGE_EVENT]: (val) => isBoolean$1(val) || isString$1(val) || isNumber$1(val),
  [INPUT_EVENT]: (val) => isBoolean$1(val) || isString$1(val) || isNumber$1(val)
};
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const COMPONENT_NAME = "ElSwitch";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { formItem } = useFormItem();
    const switchSize = useFormSize();
    const ns = useNamespace("switch");
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useFormDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const labelLeftKls = computed(() => [
      ns.e("label"),
      ns.em("label", "left"),
      ns.is("active", !checked.value)
    ]);
    const labelRightKls = computed(() => [
      ns.e("label"),
      ns.em("label", "right"),
      ns.is("active", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : false;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a2;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a2 = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a2.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean$1(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e2) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const focus = () => {
      var _a2, _b;
      (_b = (_a2 = input.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    };
    onMounted(() => {
      input.value.checked = checked.value;
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-switch",
      ref: "https://element-plus.org/en-US/component/switch.html"
    }, computed(() => !!props.label));
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createElementVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          "aria-label": _ctx.label || _ctx.ariaLabel,
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, _hoisted_2$1),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(labelLeftKls))
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, _hoisted_4)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : unref(checked) ? renderSlot(_ctx.$slots, "active-action", { key: 1 }, () => [
              _ctx.activeActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : !unref(checked) ? renderSlot(_ctx.$slots, "inactive-action", { key: 2 }, () => [
              _ctx.inactiveActionIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ]) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(labelRightKls))
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, _hoisted_5)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1$1);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "switch.vue"]]);
const ElSwitch = withInstall(Switch);
const timeSelectProps = buildProps({
  format: {
    type: String,
    default: "HH:mm"
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: true
  },
  effect: {
    type: String,
    default: "light"
  },
  clearable: {
    type: Boolean,
    default: true
  },
  size: useSizeProp,
  placeholder: String,
  start: {
    type: String,
    default: "09:00"
  },
  end: {
    type: String,
    default: "18:00"
  },
  step: {
    type: String,
    default: "00:30"
  },
  minTime: String,
  maxTime: String,
  name: String,
  prefixIcon: {
    type: definePropType([String, Object]),
    default: () => clock_default
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: () => circle_close_default
  },
  ...useEmptyValuesProps
});
const parseTime = (time) => {
  const values = (time || "").split(":");
  if (values.length >= 2) {
    let hours = Number.parseInt(values[0], 10);
    const minutes = Number.parseInt(values[1], 10);
    const timeUpper = time.toUpperCase();
    if (timeUpper.includes("AM") && hours === 12) {
      hours = 0;
    } else if (timeUpper.includes("PM") && hours !== 12) {
      hours += 12;
    }
    return {
      hours,
      minutes
    };
  }
  return null;
};
const compareTime = (time1, time2) => {
  const value1 = parseTime(time1);
  if (!value1)
    return -1;
  const value2 = parseTime(time2);
  if (!value2)
    return -1;
  const minutes1 = value1.minutes + value1.hours * 60;
  const minutes2 = value2.minutes + value2.hours * 60;
  if (minutes1 === minutes2) {
    return 0;
  }
  return minutes1 > minutes2 ? 1 : -1;
};
const padTime = (time) => {
  return `${time}`.padStart(2, "0");
};
const formatTime = (time) => {
  return `${padTime(time.hours)}:${padTime(time.minutes)}`;
};
const nextTime = (time, step) => {
  const timeValue = parseTime(time);
  if (!timeValue)
    return "";
  const stepValue = parseTime(step);
  if (!stepValue)
    return "";
  const next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };
  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;
  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;
  return formatTime(next);
};
const __default__ = defineComponent({
  name: "ElTimeSelect"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: timeSelectProps,
  emits: ["change", "blur", "focus", "update:modelValue"],
  setup(__props, { expose }) {
    const props = __props;
    dayjs.extend(customParseFormat);
    const { Option: ElOption } = ElSelect;
    const nsInput = useNamespace("input");
    const select = ref();
    const _disabled = useFormDisabled();
    const { lang } = useLocale();
    const value = computed(() => props.modelValue);
    const start = computed(() => {
      const time = parseTime(props.start);
      return time ? formatTime(time) : null;
    });
    const end = computed(() => {
      const time = parseTime(props.end);
      return time ? formatTime(time) : null;
    });
    const step = computed(() => {
      const time = parseTime(props.step);
      return time ? formatTime(time) : null;
    });
    const minTime = computed(() => {
      const time = parseTime(props.minTime || "");
      return time ? formatTime(time) : null;
    });
    const maxTime = computed(() => {
      const time = parseTime(props.maxTime || "");
      return time ? formatTime(time) : null;
    });
    const items = computed(() => {
      const result = [];
      if (props.start && props.end && props.step) {
        let current = start.value;
        let currentTime;
        while (current && end.value && compareTime(current, end.value) <= 0) {
          currentTime = dayjs(current, "HH:mm").locale(lang.value).format(props.format);
          result.push({
            value: currentTime,
            disabled: compareTime(current, minTime.value || "-1:-1") <= 0 || compareTime(current, maxTime.value || "100:100") >= 0
          });
          current = nextTime(current, step.value);
        }
      }
      return result;
    });
    const blur = () => {
      var _a2, _b;
      (_b = (_a2 = select.value) == null ? void 0 : _a2.blur) == null ? void 0 : _b.call(_a2);
    };
    const focus = () => {
      var _a2, _b;
      (_b = (_a2 = select.value) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    };
    expose({
      blur,
      focus
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElSelect), {
        ref_key: "select",
        ref: select,
        "model-value": unref(value),
        disabled: unref(_disabled),
        clearable: _ctx.clearable,
        "clear-icon": _ctx.clearIcon,
        size: _ctx.size,
        effect: _ctx.effect,
        placeholder: _ctx.placeholder,
        "default-first-option": "",
        filterable: _ctx.editable,
        "empty-values": _ctx.emptyValues,
        "value-on-clear": _ctx.valueOnClear,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event)),
        onChange: _cache[1] || (_cache[1] = (event) => _ctx.$emit("change", event)),
        onBlur: _cache[2] || (_cache[2] = (event) => _ctx.$emit("blur", event)),
        onFocus: _cache[3] || (_cache[3] = (event) => _ctx.$emit("focus", event))
      }, {
        prefix: withCtx(() => [
          _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
            key: 0,
            class: normalizeClass(unref(nsInput).e("prefix-icon"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item) => {
            return openBlock(), createBlock(unref(ElOption), {
              key: item.value,
              label: item.value,
              value: item.value,
              disabled: item.disabled
            }, null, 8, ["label", "value", "disabled"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "clearable", "clear-icon", "size", "effect", "placeholder", "filterable", "empty-values", "value-on-clear"]);
    };
  }
});
var TimeSelect = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "time-select.vue"]]);
TimeSelect.install = (app) => {
  app.component(TimeSelect.name, TimeSelect);
};
const _TimeSelect = TimeSelect;
const ElTimeSelect = _TimeSelect;
const isFunction = (val) => {
  return typeof val === "function";
};
const isNumber = (val) => {
  return typeof val === "number";
};
const isObject = (val) => {
  return typeof val == "object";
};
const isString = (val) => {
  return typeof val == "string";
};
const isNullOrUnDef = (val) => {
  return val === null || typeof val === "undefined";
};
const isBoolean = (val) => {
  return typeof val === "boolean";
};
function handleInputNumberValue(component, val) {
  if (!component)
    return val;
  if (["Input", "InputPassword", "InputSearch", "InputTextArea"].includes(component)) {
    return val && isNumber(val) ? `${val}` : val;
  }
  return val;
}
const genType = () => {
  return ["DatePicker", "TimeSelect", "RangePicker", "TimePicker"];
};
function createPlaceholderMessage(component) {
  if (component.includes("Input")) {
    return "enter value";
  }
  if (component.includes("DatePicker")) {
    return "select time";
  }
}
const DATE_FORMAT = "YYYY-MM-DD ";
const dateUtil = (date2 = null, formate = DATE_FORMAT) => {
  return dayjs(new Date(date2)).format(formate);
};
function getSlot(slots, slot = "default", data) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.log(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn)
    return null;
  return slotFn(data);
}
function deepMerge(src = {}, target = {}) {
  let key2 = "";
  for (key2 in target) {
    src[key2] = isObject(src[key2]) ? deepMerge(src[key2], target[key2]) : src[key2] = target[key2];
  }
  return src;
}
function getDynamicProps(props) {
  const ret = {};
  Object.keys(props).map((key2) => {
    ret[key2] = unref(props)[key2];
  });
  return ret;
}
const dateItemType = genType();
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
function entries(obj) {
  return Object.keys(obj).map((key2) => [key2, obj[key2]]);
}
function useAttrs(params = {}) {
  const instance = getCurrentInstance();
  if (!instance)
    return {};
  const { excludeListeners = false, excludeKeys = [] } = params;
  const attrs = shallowRef({});
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS);
  instance.attrs = reactive(instance.attrs);
  watchEffect(() => {
    const res = entries(instance.attrs).reduce((acm, [key2, val]) => {
      if (!allExcludeKeys.includes(key2) && !(excludeListeners && LISTENER_PREFIX.test(key2))) {
        acm[key2] = val;
      }
      return acm;
    }, {});
    attrs.value = res;
  });
  return attrs;
}
function useRuleFormItem(props, key2 = "value", changeEvent = "change") {
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const innerState = reactive({
    value: props[key2]
  });
  const defaultState = readonly(innerState);
  const setState = (val) => {
    innerState.value = val;
  };
  watchEffect(() => {
    innerState.value = props[key2];
  });
  const state = computed({
    get() {
      return innerState.value;
    },
    set(value) {
      if (isEqual(value, defaultState.value))
        return;
      innerState.value = value;
      emit(changeEvent, value);
    }
  });
  return [state, setState, defaultState];
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const _sfc_main$7 = defineComponent({
  name: "ApiSelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => {
      }
    },
    optionKey: {
      type: Object,
      default: function() {
        return {
          label: "label",
          value: "value",
          disabled: "disabled"
        };
      }
    },
    immediate: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const loading = ref(false);
    const apiOptions = ref([]);
    const attrs = useAttrs();
    const isFirstLoad = ref(true);
    const [state] = useRuleFormItem(props);
    const getOptions = computed(() => {
      const { options } = props;
      if (!options || (options == null ? void 0 : options.length) === 0)
        return unref(apiOptions);
      return options;
    });
    watchEffect(() => {
      props.immediate && fetch();
    });
    async function fetch() {
      const api = props.api;
      if (!api || !isFunction(api))
        return;
      try {
        loading.value = true;
        const res = await api(props.params);
        apiOptions.value = res;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function visibleChange() {
      if (!props.immediate && unref(isFirstLoad)) {
        await fetch();
        isFirstLoad.value = false;
      }
    }
    return { loading, state, getOptions, attrs, visibleChange };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createBlock(_component_el_select, mergeProps({
    loading: _ctx.loading,
    onVisibleChange: _ctx.visibleChange,
    value: _ctx.state,
    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }, _ctx.attrs), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getOptions, (item, idx) => {
        return openBlock(), createBlock(_component_el_option, {
          key: item[_ctx.optionKey.value] + idx,
          label: item[_ctx.optionKey.label],
          value: item[_ctx.optionKey.value],
          disabled: !!item[_ctx.optionKey.disabled]
        }, {
          default: withCtx(() => [
            createElementVNode("span", null, toDisplayString(item[_ctx.optionKey.label]), 1)
          ]),
          _: 2
        }, 1032, ["label", "value", "disabled"]);
      }), 128))
    ]),
    _: 1
  }, 16, ["loading", "onVisibleChange", "value"]);
}
var ApiSelect = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4]]);
function _isSlot$1(s2) {
  return typeof s2 === "function" || Object.prototype.toString.call(s2) === "[object Object]" && !isVNode(s2);
}
var _sfc_main$6 = defineComponent({
  name: "RadioGroup",
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const attrs = useAttrs();
    const [state] = useRuleFormItem(props);
    const getOptions = computed(() => {
      const {
        options
      } = props;
      if (!options || (options == null ? void 0 : options.length) === 0)
        return [];
      const isStringArr = options.some((item) => isString(item));
      if (!isStringArr)
        return options;
      return options.map((item) => ({
        label: item,
        value: item
      }));
    });
    const compAttr = {
      ...attrs,
      "modelValue": state
    };
    function getContent() {
      const {
        type,
        border,
        size
      } = props;
      return getOptions.value.map((item) => {
        return type === "button" ? createVNode(resolveComponent("el-radio-button"), {
          "size": size,
          "label": item.value
        }, {
          default: () => [item.label]
        }) : createVNode(resolveComponent("el-radio"), {
          "border": border,
          "size": size,
          "label": item.value
        }, {
          default: () => [item.label]
        });
      });
    }
    return () => {
      let _slot;
      return createVNode(resolveComponent("el-radio-group"), compAttr, _isSlot$1(_slot = getContent()) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
var _sfc_main$5 = defineComponent({
  props: {
    value: {
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    formValues: {
      type: Object,
      default: () => {
      }
    }
  },
  inheritAttrs: false,
  setup(props) {
    const {
      model,
      field
    } = props.formValues;
    const attrs = useAttrs({
      excludeKeys: ["modelValue"]
    });
    const [state, setState] = useRuleFormItem(props);
    const initState = computed(() => {
      const {
        formValues,
        options
      } = props;
      if (!formValues.schema.defaultValue)
        return;
      let opt = [], def = formValues.schema.defaultValue, isStringArr = options.some((item) => isString(item));
      if (isStringArr)
        opt = options;
      else
        options.forEach((item) => {
          opt.push(item.value);
        });
      for (let val of def) {
        if (!opt.includes(val))
          return [];
      }
      return def;
    });
    watch(() => model[field], (val) => {
      setState(val || initState.value);
    });
    if (initState.value && Array.isArray(initState.value)) {
      setState(initState.value);
    }
    const getOptions = computed(() => {
      const {
        options
      } = props;
      if (!options || (options == null ? void 0 : options.length) === 0)
        return [];
      const isStringArr = options.some((item) => isString(item));
      if (!isStringArr)
        return options;
      return options.map((item) => ({
        label: item,
        value: item
      }));
    });
    return {
      state,
      attrs,
      getOptions
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  return openBlock(), createBlock(_component_el_checkbox_group, mergeProps({
    modelValue: _ctx.state,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }, _ctx.attrs), {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getOptions, (item) => {
        return openBlock(), createBlock(_component_el_checkbox, {
          label: item.value,
          key: item.value
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(item.label), 1)
          ]),
          _: 2
        }, 1032, ["label"]);
      }), 128))
    ]),
    _: 1
  }, 16, ["modelValue"]);
}
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
const _sfc_main$4 = defineComponent({
  setup(props) {
    const attrs = useAttrs({ excludeKeys: ["modelValue"] });
    const [state] = useRuleFormItem(props);
    return { attrs, state };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_slider = resolveComponent("el-slider");
  return openBlock(), createBlock(_component_el_slider, mergeProps(_ctx.attrs, {
    modelValue: _ctx.state,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.state = $event)
  }), null, 16, ["modelValue"]);
}
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
const componentMap = /* @__PURE__ */ new Map();
componentMap.set("Input", ElInput);
componentMap.set("InputNumber", ElInputNumber);
componentMap.set("Select", ApiSelect);
componentMap.set("Switch", ElSwitch);
componentMap.set("Cascader", ElCascader);
componentMap.set("Slider", Slider);
componentMap.set("Rate", ElRate);
componentMap.set("DatePicker", ElDatePicker);
componentMap.set("TimeSelect", ElTimeSelect);
componentMap.set("TimePicker", ElTimePicker);
componentMap.set("RangePicker", ElDatePicker);
componentMap.set("Checkbox", ElCheckbox);
componentMap.set("CheckboxGroup", CheckboxGroup);
componentMap.set("Radio", ElRadio);
componentMap.set("RadioGroup", _sfc_main$6);
function add(compName, component) {
  componentMap.set(compName, component);
}
function del(compName) {
  componentMap.delete(compName);
}
var _sfc_main$3 = defineComponent({
  name: "BasicHelp",
  props: {
    content: {
      type: String,
      default: "tooltip info"
    },
    icon: {
      type: String,
      default: "el-icon-warning"
    }
  },
  setup(props) {
    return () => {
      return createVNode(resolveComponent("el-tooltip"), {
        "content": props.content
      }, {
        default: () => [createVNode("i", {
          "class": [props.icon, "schema-basic-help"]
        }, null)]
      });
    };
  }
});
var BasicHelp_vue_vue_type_style_index_0_scoped_true_lang = "";
var BasicHelp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-71ce645e"]]);
function _isSlot(s2) {
  return typeof s2 === "function" || Object.prototype.toString.call(s2) === "[object Object]" && !isVNode(s2);
}
var _sfc_main$2 = defineComponent({
  components: {
    BasicHelp
  },
  name: "SchemaFormItem",
  inheritAttrs: false,
  props: {
    schema: {
      type: Object,
      default: () => {
      }
    },
    formProps: {
      type: Object,
      default: () => {
      }
    },
    formModel: {
      type: Object,
      default: () => {
      }
    },
    showAdvancedButton: {
      type: Boolean,
      default: false
    },
    setFormModel: {
      type: Function,
      default: null
    },
    allDefaultValues: {
      type: Object,
      default: () => {
      }
    },
    formActionType: {
      type: Object
    },
    formElRef: {
      type: Object
    }
  },
  setup(props, {
    slots
  }) {
    const getValues = computed(() => {
      const {
        formModel,
        schema,
        allDefaultValues
      } = props;
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...allDefaultValues,
          ...formModel
        },
        schema
      };
    });
    const getComponentsProps = computed(() => {
      const {
        schema,
        formModel,
        formActionType
      } = props;
      const {
        componentProps = {}
      } = schema;
      if (!isFunction(componentProps)) {
        return componentProps;
      }
      return componentProps({
        schema,
        formModel,
        formActionType
      });
    });
    const getDisable = computed(() => {
      const {
        disabled: globDisabled
      } = props.formProps;
      const {
        dynamicDisabled
      } = props.schema;
      const {
        disabled: itemDisabled = false
      } = unref(getComponentsProps);
      let disabled = !!globDisabled || !!itemDisabled;
      if (isBoolean(dynamicDisabled)) {
        disabled = dynamicDisabled;
      }
      if (isFunction(dynamicDisabled)) {
        disabled = dynamicDisabled(unref(getValues));
      }
      return disabled;
    });
    function renderComponent() {
      const {
        component,
        changeEvent = "change",
        renderComponentContent,
        valueField,
        field
      } = props.schema;
      const isCheck = component && ["Switch", "Checkbox", "CheckboxGroup"].includes(component);
      const isInput = component && ["Input"].includes(component);
      const Comp = componentMap.get(component);
      const propsData = {
        ...unref(getComponentsProps),
        disabled: unref(getDisable)
      };
      let placeholder = unref(getComponentsProps).placeholder || createPlaceholderMessage(component);
      propsData.placeholder = placeholder;
      if (isCheck) {
        propsData.formValues = getValues.value;
      }
      const eventKey = isInput ? "onInput" : `on${upperFirst$1(changeEvent)}`;
      const on2 = {
        [eventKey]: (e2) => {
          if (propsData[eventKey]) {
            propsData[eventKey](e2);
          }
          const target = e2 ? e2.target : null;
          const value = target ? isCheck ? target.checked : target.value : e2;
          props.setFormModel(field, value);
        }
      };
      if (isInput) {
        Object.assign(on2, {
          onClear: () => {
            props.setFormModel(field, "");
          }
        });
      }
      const bindValue = {
        [valueField || "modelValue"]: props.formModel[field]
      };
      const compAttr = {
        ...propsData,
        ...on2,
        ...bindValue
      };
      if (!renderComponentContent) {
        return createVNode(Comp, compAttr, null);
      }
      const compSlot = isFunction(renderComponentContent) ? {
        ...renderComponentContent(unref(getValues))
      } : {
        default: () => renderComponentContent
      };
      return createVNode(Comp, compAttr, _isSlot(compSlot) ? compSlot : {
        default: () => [compSlot]
      });
    }
    function getShow() {
      var _a2;
      const {
        ifShow,
        show
      } = props.schema;
      let isShow = true, isIfShow = true;
      const itemIsAdvanced = ((_a2 = props.formProps) == null ? void 0 : _a2.showAdvancedButton) ? isBoolean(props.schema.isAdvanced) ? props.schema.isAdvanced : true : true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow;
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues));
      }
      isShow = isShow && itemIsAdvanced;
      return {
        isShow,
        isIfShow
      };
    }
    function handleRules() {
      const {
        rules: defRules = [],
        dynamicRules,
        required,
        label
      } = props.schema;
      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues));
      }
      let rules = cloneDeep(defRules);
      if ((!rules || rules.length === 0) && required) {
        rules = [{
          required,
          message: `${label}\u4E0D\u4E3A\u7A7A`,
          trigger: "change"
        }];
      }
      const requiredRuleIndex = rules.findIndex((rule) => Reflect.has(rule, "required") || Reflect.has(rule, "validator"));
      if (requiredRuleIndex !== -1) {
        const {
          isShow
        } = getShow();
        if (!isShow) {
          rules = [];
        }
      }
      return rules;
    }
    function renderLabelHelpMessage() {
      const {
        label,
        helpMessage,
        helpComponentProps
      } = props.schema;
      if (!helpMessage)
        return label;
      return createVNode(Fragment, null, [label, createVNode(BasicHelp, mergeProps({
        "content": helpMessage
      }, helpComponentProps), null)]);
    }
    function renderItem() {
      const {
        slot,
        render,
        field,
        labelWidth
      } = props.schema;
      const getContent = () => {
        return slot ? getSlot(slots, slot, unref(getValues)) : render ? render(unref(getValues)) : renderComponent();
      };
      return createVNode(resolveComponent("el-form-item"), {
        "prop": field,
        "rules": handleRules(),
        "labelWidth": labelWidth
      }, {
        default: () => [getContent()],
        label: () => renderLabelHelpMessage()
      });
    }
    return () => {
      let _slot;
      const {
        colProps = {},
        colSlot,
        renderColContent
      } = props.schema;
      const {
        isShow,
        isIfShow
      } = getShow();
      const getContent = () => {
        return colSlot ? "" : renderColContent ? renderColContent() : renderItem();
      };
      return isIfShow && withDirectives(createVNode(resolveComponent("el-col"), colProps, _isSlot(_slot = getContent()) ? _slot : {
        default: () => [_slot]
      }), [[vShow, isShow]]);
    };
  }
});
function useFormValues({
  getSchema,
  defaultValueRef,
  formModel
}) {
  function handleFormValues(values) {
    if (!isObject(values))
      return {};
    const res = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key2] = item;
      if (value instanceof Date) {
        const schema = unref(getSchema).find((item2) => item2.field === key2);
        value = dateUtil(value, schema.valueFormate);
      }
      if (isString(value))
        value = value.trim();
      res[key2] = toRaw(value);
    }
    return handleRangeTimeValue(res);
  }
  function handleRangeTimeValue(values) {
    const rangeSchema = unref(getSchema).find((item) => item.component === "RangePicker");
    if (!rangeSchema || isNullOrUnDef(values[rangeSchema.field])) {
      return values;
    }
    const { field, fieldMapToTime, valueFormate } = rangeSchema;
    const value = toRaw(values[field]);
    if (Array.isArray(value)) {
      const arr = [];
      for (const ele of value) {
        arr.push(dateUtil(ele, valueFormate));
      }
      values[field] = arr;
    }
    if (fieldMapToTime && Array.isArray(fieldMapToTime)) {
      const [startTimeKey, endTimeKey] = fieldMapToTime;
      const [startTime, endTime] = value;
      values[startTimeKey] = dateUtil(startTime, valueFormate);
      values[endTimeKey] = dateUtil(endTime, valueFormate);
    }
    return values;
  }
  function initDefault() {
    const schemas = unref(getSchema);
    const obj = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }
  return { handleFormValues, initDefault };
}
function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  schemaRef,
  formElRef,
  defaultValueRef,
  handleFormValues
}) {
  function itemIsDateType(key2) {
    return unref(getSchema).some((item) => {
      return item.field === key2 ? dateItemType.includes(item.component) : false;
    });
  }
  async function removeSchemaByFiled(fields) {
    if (!fields)
      return;
    const schemaList = cloneDeep(unref(getSchema));
    const fieldList = isString(fields) ? [fields] : fields;
    for (const field of fieldList) {
      _removeSchemaByFiled(field, schemaList);
    }
    schemaRef.value = schemaList;
  }
  function _removeSchemaByFiled(field, schemaList) {
    const index2 = schemaList.findIndex((schema) => schema.field === field);
    if (index2 !== -1) {
      delete formModel[field];
      schemaList.splice(index2, 1);
    }
  }
  async function appendSchemaByField(schema, prefixField, first = false) {
    const schemaList = cloneDeep(unref(getSchema));
    const index2 = schemaList.findIndex((schema2) => schema2.field === prefixField);
    const hasInlist = schemaList.some((item) => item.field === prefixField || schema.field);
    if (!hasInlist)
      return;
    if (!prefixField || index2 === -1) {
      first ? schemaList.unshift(schema) : schemaList.push(schema);
      schemaRef.value = schemaList;
      return;
    }
    if (index2 !== -1) {
      schemaList.splice(index2 + 1, 0, schema);
    }
    schemaRef.value = schemaList;
  }
  function getFieldsValue() {
    const formEl = unref(formElRef);
    if (!formEl)
      return {};
    return handleFormValues(formModel);
  }
  async function validate() {
    const valid = await unref(formElRef).validate();
    return valid ? handleFormValues(formModel) : false;
  }
  async function clearValidate(name) {
    await unref(formElRef).clearValidate(name);
  }
  async function validateFields(nameList) {
    console.log(nameList);
    return await unref(formElRef).validateField(nameList);
  }
  async function resetFields() {
    const { resetFunc } = unref(getProps);
    resetFunc && isFunction(resetFunc) && await resetFunc();
    const formEl = unref(formElRef);
    if (!formEl)
      return;
    unref(formElRef).resetFields();
    Object.keys(formModel).forEach((key2) => {
      formModel[key2] = defaultValueRef.value[key2];
    });
    emit("reset", toRaw(formModel));
  }
  async function handleSubmit(e2) {
    e2 && e2.preventDefault();
    const { submitFunc } = unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = unref(formElRef);
    if (!formEl)
      return;
    try {
      const isAdopt = await validate();
      if (isAdopt) {
        const res = handleFormValues(formModel);
        emit("submit", res);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function setFieldsValue(values) {
    const fields = unref(getSchema).map((item) => item.field).filter(Boolean);
    const validKeys = [];
    Object.keys(values).forEach((key2) => {
      const schema = unref(getSchema).find((item) => item.field === key2);
      let value = values[key2];
      const hasKey = Reflect.has(values, key2);
      value = handleInputNumberValue(schema == null ? void 0 : schema.component, value);
      if (hasKey && fields.includes(key2)) {
        if (itemIsDateType(key2)) {
          if (Array.isArray(value)) {
            const arr = [];
            for (const ele of value) {
              arr.push(dateUtil(ele));
            }
            formModel[key2] = arr;
          } else {
            formModel[key2] = dateUtil(value);
          }
        } else {
          formModel[key2] = value;
        }
        validKeys.push(key2);
      }
    });
    validateFields(validKeys);
  }
  return {
    removeSchemaByFiled,
    appendSchemaByField,
    validate,
    resetFields,
    clearValidate,
    validateFields,
    getFieldsValue,
    handleSubmit,
    setFieldsValue
  };
}
function createContext(context, key2 = Symbol(), options = {}) {
  const { readonly: readonly$1 = true, createProvider = false, native = false } = options;
  const state = reactive(context);
  const provideData = readonly$1 ? readonly(state) : state;
  !createProvider && provide(key2, native ? context : provideData);
  return {
    state
  };
}
function useContext(key2 = Symbol(), defaultValue) {
  return inject(key2, defaultValue);
}
const key = Symbol();
function createFormContext(context) {
  return createContext(context, key);
}
function useFormContext() {
  return useContext(key);
}
const BASIC_COL_LEN = 24;
function useAdvanced({
  advanceState,
  emit,
  getProps,
  getSchema,
  formModel,
  defaultValueRef
}) {
  watch(
    [() => unref(getSchema), () => advanceState.isAdvanced],
    () => {
      const { showAdvancedButton } = unref(getProps);
      if (showAdvancedButton) {
        updateAdvanced();
      }
    },
    { immediate: true }
  );
  function updateAdvanced() {
    let itemColSum = 0;
    for (const schema of unref(getSchema)) {
      const { show, colProps } = schema;
      let isShow = true;
      if (isBoolean(show)) {
        isShow = show;
      }
      if (isFunction(show)) {
        isShow = show({
          schema,
          model: formModel,
          field: schema.field,
          values: {
            ...unref(defaultValueRef),
            ...formModel
          }
        });
      }
      if (isShow && colProps) {
        const { itemColSum: sum, isAdvanced } = getAdvanced({ ...colProps }, itemColSum);
        itemColSum = sum || 0;
        schema.isAdvanced = isAdvanced;
      }
    }
    getAdvanced(BASIC_COL_LEN, itemColSum, true);
    emit("advanced-change");
  }
  function getAdvanced(itemCol, itemColSum = 0, isLastAction = false) {
    const mdWidth = itemCol.span || BASIC_COL_LEN;
    itemColSum += mdWidth;
    if (isLastAction) {
      if (itemColSum <= BASIC_COL_LEN * 2) {
        advanceState.hideAdvanceBtn = true;
        advanceState.isAdvanced = true;
      } else if (itemColSum > BASIC_COL_LEN * 2 && itemColSum <= BASIC_COL_LEN * (unref(getProps).autoAdvancedLine || 3)) {
        advanceState.hideAdvanceBtn = false;
      } else if (!advanceState.isLoad) {
        advanceState.isLoad = true;
        advanceState.isAdvanced = !advanceState.isAdvanced;
      }
      return { isAdvanced: advanceState.isAdvanced, itemColSum };
    }
    if (itemColSum > BASIC_COL_LEN) {
      return { isAdvanced: advanceState.isAdvanced, itemColSum };
    } else {
      return { isAdvanced: true, itemColSum };
    }
  }
  function handleToggleAdvanced() {
    advanceState.isAdvanced = !advanceState.isAdvanced;
  }
  return {
    handleToggleAdvanced
  };
}
var FormAction_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  props: {
    actionColOptions: {
      type: Object,
      default: () => {
      }
    },
    isAdvanced: {
      type: Boolean,
      default: true
    },
    hideAdvanceBtn: {
      type: Boolean,
      default: true
    },
    showActionButtonGroup: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: "left"
    },
    showAdvancedButton: {
      type: Boolean,
      default: true
    },
    showResetButton: {
      type: Boolean,
      default: true
    },
    resetButtonOptions: {
      type: Object,
      default: () => {
      }
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    submitButtonOptions: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["toggle-advanced"],
  setup(props, { emit }) {
    const actionColOpt = computed(() => {
      const { actionColOptions, showAdvancedButton } = props;
      const actionColOpt2 = {
        ...actionColOptions
      };
      return actionColOpt2;
    });
    const getClass = computed(() => {
      return [
        "basic-arrow",
        {
          "basic-arrow--active": props.isAdvanced
        }
      ];
    });
    const getSubmitBtnOptions = computed(() => {
      return Object.assign({ text: props.showAdvancedButton ? "Query" : "Submit" }, props.submitButtonOptions);
    });
    const getResetBtnOptions = computed(() => {
      return Object.assign({ text: "Reset" }, props.resetButtonOptions);
    });
    function toggleAdvanced() {
      emit("toggle-advanced");
    }
    return {
      actionColOpt,
      getSubmitBtnOptions,
      getResetBtnOptions,
      toggleAdvanced,
      getClass,
      ...useFormContext()
    };
  }
});
const _withScopeId = (n2) => (pushScopeId("data-v-6794ea32"), n2 = n2(), popScopeId(), n2);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("i", { class: "el-icon-arrow-down" }, null, -1));
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_Button = resolveComponent("el-Button");
  const _component_el_button = resolveComponent("el-button");
  const _component_el_form_item = resolveComponent("el-form-item");
  const _component_el_col = resolveComponent("el-col");
  return _ctx.showActionButtonGroup ? (openBlock(), createBlock(_component_el_col, mergeProps({
    key: 0,
    style: { textAlign: _ctx.textAlign }
  }, _ctx.actionColOpt), {
    default: withCtx(() => [
      createVNode(_component_el_form_item, null, {
        default: withCtx(() => [
          _ctx.showResetButton ? (openBlock(), createBlock(_component_el_Button, mergeProps({
            key: 0,
            onClick: _ctx.resetAction
          }, _ctx.getResetBtnOptions), {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.getResetBtnOptions.text), 1)
            ]),
            _: 1
          }, 16, ["onClick"])) : createCommentVNode("", true),
          _ctx.showSubmitButton ? (openBlock(), createBlock(_component_el_Button, mergeProps({
            key: 1,
            type: "primary"
          }, _ctx.getSubmitBtnOptions, { onClick: _ctx.submitAction }), {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.getSubmitBtnOptions.text), 1)
            ]),
            _: 1
          }, 16, ["onClick"])) : createCommentVNode("", true),
          _ctx.showAdvancedButton && !_ctx.hideAdvanceBtn ? (openBlock(), createBlock(_component_el_button, {
            key: 2,
            type: "text",
            underline: false,
            class: "options-advance",
            onClick: _ctx.toggleAdvanced
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.isAdvanced ? "Collapse" : "Expand") + " ", 1),
              createElementVNode("span", {
                class: normalizeClass(_ctx.getClass)
              }, _hoisted_2, 2)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 16, ["style"])) : createCommentVNode("", true);
}
var FormAction = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6794ea32"]]);
const _sfc_main = defineComponent({
  components: { SchemaFormItem: _sfc_main$2, FormAction },
  props: basicProps,
  emits: ["advanced-change", "submit", "reset", "register"],
  setup(props, { emit }) {
    const formModel = reactive({});
    const schemaRef = ref(null);
    const formElRef = ref(null);
    const propsRef = ref({});
    const defaultValueRef = ref({});
    const getProps = computed(() => {
      return { ...props, ...unref(propsRef) };
    });
    const advanceState = reactive({
      isAdvanced: true,
      hideAdvanceBtn: false,
      isLoad: false
    });
    const getRowWrapStyle = computed(() => {
      const { baseRowStyle = {} } = unref(getProps);
      return baseRowStyle;
    });
    const getSchema = computed(() => {
      const schemas = unref(schemaRef) || unref(getProps).schemas;
      const passRules = unref(getProps).rules;
      for (const schema of schemas) {
        const { field, rules = [] } = schema;
        if (passRules) {
          schema.rules = unref(getProps).rules[field] || rules;
        }
      }
      return schemas;
    });
    const { handleToggleAdvanced } = useAdvanced({
      advanceState,
      emit,
      getProps,
      getSchema,
      formModel,
      defaultValueRef
    });
    const {
      initDefault,
      handleFormValues
    } = useFormValues({
      defaultValueRef,
      getSchema,
      formModel
    });
    const {
      setFieldsValue,
      handleSubmit,
      validate,
      validateFields,
      clearValidate,
      removeSchemaByFiled,
      appendSchemaByField,
      resetFields,
      getFieldsValue
    } = useFormEvents({
      emit,
      formElRef,
      getProps,
      formModel,
      schemaRef,
      getSchema,
      defaultValueRef,
      handleFormValues
    });
    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit
    });
    watch(
      () => unref(getProps).model,
      () => {
        const { model } = unref(getProps);
        if (!model)
          return;
        setFieldsValue(model);
      },
      {
        immediate: true
      }
    );
    watch(
      () => {
        getSchema.value;
      },
      (schema) => {
        if (schema.length >= 0) {
          initDefault();
        }
      }
    );
    function setFormModel(key2, value) {
      formModel[key2] = value;
    }
    async function setProps(formProps) {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
    }
    const formActionType = {
      getFieldsValue,
      setProps,
      validate,
      validateFields,
      clearValidate,
      setFieldsValue,
      resetFields,
      removeSchemaByFiled,
      appendSchemaByField,
      submit: handleSubmit
    };
    onMounted(() => {
      emit("register", formActionType);
      initDefault();
    });
    return {
      formElRef,
      formModel,
      formActionType,
      getSchema,
      advanceState,
      handleToggleAdvanced,
      getProps,
      defaultValueRef,
      setFormModel,
      getRowWrapStyle,
      ...formActionType
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SchemaFormItem = resolveComponent("SchemaFormItem");
  const _component_FormAction = resolveComponent("FormAction");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");
  return openBlock(), createBlock(_component_el_form, mergeProps({ ..._ctx.$attrs, ..._ctx.$props, ..._ctx.getProps }, {
    ref: "formElRef",
    model: _ctx.formModel
  }), {
    default: withCtx(() => [
      createVNode(_component_el_row, {
        style: normalizeStyle(_ctx.getRowWrapStyle)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.getSchema, (schema) => {
            return openBlock(), createBlock(_component_SchemaFormItem, {
              key: schema.field,
              schema,
              formProps: _ctx.getProps,
              formElRef: _ctx.formElRef,
              formActionType: _ctx.formActionType,
              formModel: _ctx.formModel,
              allDefaultValues: _ctx.defaultValueRef,
              setFormModel: _ctx.setFormModel
            }, createSlots({ _: 2 }, [
              renderList(Object.keys(_ctx.$slots), (item) => {
                return {
                  name: item,
                  fn: withCtx((data) => [
                    renderSlot(_ctx.$slots, item, mergeProps({ ref_for: true }, data))
                  ])
                };
              })
            ]), 1032, ["schema", "formProps", "formElRef", "formActionType", "formModel", "allDefaultValues", "setFormModel"]);
          }), 128)),
          createVNode(_component_FormAction, mergeProps({ ..._ctx.getProps, ..._ctx.advanceState }, { onToggleAdvanced: _ctx.handleToggleAdvanced }), null, 16, ["onToggleAdvanced"])
        ]),
        _: 3
      }, 8, ["style"])
    ]),
    _: 3
  }, 16, ["model"]);
}
var SchemaForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
function tryOnUnmounted(fn2) {
  if (getCurrentInstance())
    onUnmounted(fn2);
}
function useComponentRegister(compName, comp) {
  add(compName, comp);
  tryOnUnmounted(() => {
    del(compName);
  });
}
function useForm(props) {
  const formRef = ref(null);
  const loadedRef = ref(null);
  async function getForm() {
    const form = unref(formRef);
    await nextTick();
    return form;
  }
  function register(instance) {
    onUnmounted(() => {
      formRef.value = null;
      loadedRef.value = null;
    });
    if (unref(loadedRef) && instance === unref(formRef))
      return;
    formRef.value = instance;
    loadedRef.value = true;
    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props));
      },
      {
        immediate: true,
        deep: true
      }
    );
  }
  const methods = {
    setProps: async (formProps) => {
      const form = await getForm();
      form.setProps(formProps);
    },
    getFieldsValue: () => {
      return unref(formRef).getFieldsValue();
    },
    resetFields: () => {
      return unref(formRef).resetFields();
    },
    validateFields: (fields) => {
      return unref(formRef).validateFields(fields);
    },
    validate: async () => {
      const form = await getForm();
      return form.validate();
    },
    clearValidate: async (name) => {
      const form = await getForm();
      form.clearValidate(name);
    },
    setFieldsValue: async (values) => {
      const form = await getForm();
      form.setFieldsValue(values);
    },
    removeSchemaByFiled: async (field) => {
      unref(formRef).removeSchemaByFiled(field);
    },
    appendSchemaByField: async (schema, prefixField, first) => {
      const form = await getForm();
      form.appendSchemaByField(schema, prefixField, first);
    },
    submit: async () => {
      const form = await getForm();
      return form.submit();
    }
  };
  return [register, methods];
}
const version = "0.0.4";
const components = [SchemaForm];
const install = function(Vue) {
  components.forEach((component) => {
    if (component.install) {
      Vue.use(component);
    } else if (component.name) {
      Vue.component(component.name, component);
    }
  });
};
var index = { version, install };
export { SchemaForm, index as default, useComponentRegister, useForm };
