(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/Compares.vue?vue&type=template&id=492b2fff&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "slideRef",
    staticClass: "beer-slider beer-ready",
    style: _vm.size,
    attrs: {
      "id": "slider",
      "data-beer-label": _vm.textR || null
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.picR,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "beer-reveal",
    style: {
      clip: _vm.clipStyle
    },
    attrs: {
      "data-beer-label": _vm.textL || null
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.picL,
      "alt": ""
    }
  })]), _c('input', {
    staticClass: "beer-range",
    attrs: {
      "type": "range",
      "aria-label": "Percent of revealed content",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "value": "50",
      "min": "0",
      "max": "100"
    },
    on: {
      "input": _vm.handlerChange
    }
  }), _c('div', {
    staticClass: "slider-box",
    style: {
      transform: _vm.transformStyle
    }
  }, [_c('span', {
    staticClass: "beer-handle"
  }), _c('span', {
    staticClass: "line"
  })])]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/Compares.vue?vue&type=script&lang=js&
/* harmony default export */ var Comparesvue_type_script_lang_js_ = ({
  name: 'vue2-img-compare',
  props: {
    w: {
      type: String,
      default: ''
    },
    h: {
      type: String,
      default: ''
    },
    picL: {
      type: String,
      default: ''
    },
    picR: {
      type: String,
      default: ''
    },
    textR: {
      type: String,
      default: ''
    },
    textL: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      process: 0.5,
      refW: 0,
      refH: 0,
      cancalDebounce: null
    };
  },
  computed: {
    isVaildPxW() {
      return isNaN(this.w);
    },
    isVaildPxH() {
      return isNaN(this.h);
    },
    size() {
      return {
        width: this.isVaildPxW ? this.w : this.w + 'px',
        height: this.isVaildPxH ? this.h : this.h + 'px'
      };
    },
    clipStyle() {
      const w = this.isVaildPxW ? this.refW : this.w;
      return `rect(auto, ${this.process * w}px, auto, auto)`;
    },
    transformStyle() {
      const w = this.isVaildPxW ? this.refW : this.w;
      return `translate3d(${(parseFloat(this.process) - 0.5) * w}px, 0px, 0px)`;
    }
  },
  mounted() {
    const debounce = (fn, delay) => {
      let timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          fn();
        }, delay);
      };
    };
    this.cancalDebounce = debounce(this.initSize, 100);
    window.addEventListener('resize', this.cancalDebounce);
    this.initSize();
  },
  beforeDestory() {
    window.removeEventListener('resize', this.cancalDebounce);
  },
  methods: {
    handlerChange(e) {
      this.process = parseFloat(e.target.value) / 100;
    },
    initSize() {
      if (this.isVaildPxW || this.isVaildPxH) {
        const timer = setTimeout(() => {
          this.refW = this.$refs.slideRef.offsetWidth;
          this.refH = this.$refs.slideRef.offsetHeight;
          clearTimeout(timer);
        }, 300);
      } else {
        this.refW = this.$refs.slideRef.offsetWidth;
        this.refH = this.$refs.slideRef.offsetHeight;
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/package/Compares.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_Comparesvue_type_script_lang_js_ = (Comparesvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/Compares.vue?vue&type=style&index=0&id=492b2fff&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/Compares.vue?vue&type=style&index=0&id=492b2fff&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/Compares.vue



;


/* normalize component */

var component = normalizeComponent(
  package_Comparesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "492b2fff",
  null
  
)

/* harmony default export */ var Compares = (component.exports);
;// CONCATENATED MODULE: ./src/package/index.js

const coms = [Compares];
const install = function (Vue) {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};
/* harmony default export */ var src_package = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.umd.js.map