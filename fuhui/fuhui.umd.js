(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fuhui"] = factory();
	else
		root["fuhui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 181:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbVJREFUWEftlr8uRUEQxn/3AYiWRIGEBB2NaIiWkkbrzwPQ0KCh4QH8aTWUtEIjGjokJCgktMILyJeclZPNzt2990r2FneTbc7Oznz7fXNmpkLmVckcnxaAWhnoAaaAeaAL6Cwk/AQ+gGPgAnhLlTYVwAiwVOwU3weA9l3MOAXAGrAdc2ScrwM71e7GAGwCG3UGd9e2APkJrmoAZoGTBoO763PAaciXBUCa3/5TcOdmNJQTFoB9I+GUVH1AhwHuC3gB9AB/KSmX/Y8hAP3AU8DBAzAMDBbSDHk2OhfVj8A94J/LfAB4Lt8LAVgBdgMA9LrxIoAPohxcZ9cGS6vAXgzAJTBhUOwHcknqXm6x49xdAZMxAKJfMljLByE70R4LLjvRLxn+VkiCb6At8geUQcg0JbjsfoD2pgeQXYLsSbgAHAZyQLkxlvgb3vhaF/4WgaNYDqjnvwYAqAqqnKYUIpXxUDXs9WeFWkuxsr/beJ0wi6V3owoml2I5yt6MBKKRQcRX0BxMmnogca9oZDAxBxHnPMaAs8s6lJb1VJOaAaaNsfwcOPN7frW+kspApDfVf9wCkJ2BX0QabCGIUdXCAAAAAElFTkSuQmCC";

/***/ }),

/***/ 293:
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
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

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-image-preview/index.vue?vue&type=template&id=2a5a563e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "f-image-preview",
    staticStyle: {
      "margin": "5px"
    }
  }, [_c('div', {
    staticClass: "imgbox",
    class: [_vm.borderRadius ? 'borderRadius' : ''],
    style: {
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    }
  }, [_c('img', {
    staticClass: "img",
    class: [_vm.borderRadius ? 'borderRadius' : ''],
    attrs: {
      "src": _vm.src
    },
    on: {
      "click": _vm.onPreview
    }
  })]), _vm.toggle ? _c('div', {
    staticClass: "popup"
  }, [_c('div', {
    staticClass: "popup-bg",
    on: {
      "click": _vm.onPreview
    }
  }), _c('img', {
    staticClass: "popup-img",
    attrs: {
      "src": _vm.src
    }
  })]) : _vm._e()]);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-image-preview/index.vue?vue&type=script&lang=js&
/* harmony default export */ var f_image_previewvue_type_script_lang_js_ = ({
  name: "FImagePreview",
  props: {
    src: {
      type: String,
      default: __webpack_require__(293)
    },
    width: {
      type: String,
      default: "220"
    },
    height: {
      type: String,
      default: "220"
    },
    borderRadius: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      toggle: false
    };
  },

  methods: {
    onPreview() {
      this.toggle = !this.toggle;
    }

  }
});
;// CONCATENATED MODULE: ./src/packages/f-image-preview/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_f_image_previewvue_type_script_lang_js_ = (f_image_previewvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-image-preview/index.vue?vue&type=style&index=0&id=2a5a563e&prod&scoped=true&lang=less&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/f-image-preview/index.vue?vue&type=style&index=0&id=2a5a563e&prod&scoped=true&lang=less&

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

;// CONCATENATED MODULE: ./src/packages/f-image-preview/index.vue



;


/* normalize component */

var component = normalizeComponent(
  packages_f_image_previewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2a5a563e",
  null
  
)

/* harmony default export */ var f_image_preview = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-input-tag/index.vue?vue&type=template&id=5eba5f71&scoped=true&
var f_input_tagvue_type_template_id_5eba5f71_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "f-input-tag"
  }, [_vm._l(_vm.tagList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "tag",
      attrs: {
        "name": _vm.tagsType === 2 ? item[_vm.format.label] : item
      }
    }, [_c('span', {
      staticClass: "tag-txt"
    }, [_vm._v(_vm._s(_vm.tagsType === 2 ? item[_vm.format.label] : item))]), _c('img', {
      staticClass: "close",
      attrs: {
        "src": __webpack_require__(181)
      },
      on: {
        "click": function ($event) {
          return _vm.handleClose(item, index);
        }
      }
    })]);
  }), _vm.isEdit ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    ref: "input",
    staticClass: "input",
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "blur": _vm.onBlur,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.inputValue = $event.target.value;
      }
    }
  }) : _vm._e(), _c('button', {
    staticClass: "button",
    on: {
      "click": _vm.handleAdd
    }
  }, [_vm._v(_vm._s(_vm.btnTitle))])], 2);
};

var f_input_tagvue_type_template_id_5eba5f71_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./src/packages/f-input-tag/index.vue?vue&type=template&id=5eba5f71&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-input-tag/index.vue?vue&type=script&lang=js&
/* harmony default export */ var f_input_tagvue_type_script_lang_js_ = ({
  name: 'FInputTag',

  data() {
    return {
      tagList: [],
      isEdit: false,
      inputValue: "",
      tagsType: 1 // value类型 1 Array-String 2 Array-object

    };
  },

  props: {
    btnTitle: {
      type: String,
      default: "添加标签"
    },
    value: {
      type: [Array, Object],
      // Array: 元素分为纯文字和obj类型
      default: () => {
        return [];
      }
    },
    format: {
      // 数据结构格式
      type: Object,
      default: () => {
        return {
          value: "value",
          label: "label"
        };
      }
    }
  },
  watch: {
    value: {
      handler(val) {
        if (val) {
          if (typeof val === "object" && val.length > 0) {
            if (typeof val[0] === "string") {
              this.tagsType = 1;
            } else if (typeof val[0] === "object") {
              this.tagsType = 2;
            }

            this.tagList = JSON.parse(JSON.stringify(val));
          }
        }
      },

      deep: true,
      immediate: true
    }
  },

  mounted() {},

  methods: {
    handleAdd() {
      this.isEdit = true;
    },

    onBlur() {
      if (this.inputValue) {
        if (this.tagsType === 1) {
          this.tagList.push(this.inputValue);
        } else {
          this.tagList.push({
            [this.format.value]: "",
            [this.format.label]: this.inputValue
          });
        }
      }

      this.inputValue = "";
      this.isEdit = false;
      this.output();
    },

    handleClose(item, index) {
      this.tagList.splice(index, 1);
      this.output();
    },

    output() {
      this.$emit("input", this.tagList);
    }

  }
});
;// CONCATENATED MODULE: ./src/packages/f-input-tag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_f_input_tagvue_type_script_lang_js_ = (f_input_tagvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-74.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-74.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-74.use[2]!./node_modules/less-loader/dist/cjs.js??clonedRuleSet-74.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/packages/f-input-tag/index.vue?vue&type=style&index=0&id=5eba5f71&prod&scoped=true&lang=less&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/packages/f-input-tag/index.vue?vue&type=style&index=0&id=5eba5f71&prod&scoped=true&lang=less&

;// CONCATENATED MODULE: ./src/packages/f-input-tag/index.vue



;


/* normalize component */

var f_input_tag_component = normalizeComponent(
  packages_f_input_tagvue_type_script_lang_js_,
  f_input_tagvue_type_template_id_5eba5f71_scoped_true_render,
  f_input_tagvue_type_template_id_5eba5f71_scoped_true_staticRenderFns,
  false,
  null,
  "5eba5f71",
  null
  
)

/* harmony default export */ var f_input_tag = (f_input_tag_component.exports);
;// CONCATENATED MODULE: ./src/packages/index.js


const coms = [f_image_preview, f_input_tag];

const install = Vue => {
  coms.forEach(com => {
    Vue.component(com.name, com);
  });
};

/* harmony default export */ var src_packages = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_packages);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fuhui.umd.js.map