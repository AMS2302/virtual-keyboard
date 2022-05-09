/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/scss/style.scss":
/*!*******************************************!*\
  !*** ./src/assets/styles/scss/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/styles/css/style.css":
/*!*****************************************!*\
  !*** ./src/assets/styles/css/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/components/buttons.js":
/*!*******************************************!*\
  !*** ./src/scripts/components/buttons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showButtons": () => (/* binding */ showButtons)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state.js */ "./src/scripts/state.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates.js */ "./src/scripts/templates.js");



function createButton(id, text, additionalClasses) {
  const button = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.createTag)('div', ['button', ...additionalClasses]);
  button.innerHTML = text;
  button.id = id;
  return button;
}

function showButtons(data) {
  const lang = _state_js__WEBPACK_IMPORTED_MODULE_0__["default"].lang;
  for (let i = 0; i < data.length; i++) {
    const arr = data[i];
    const row = document.querySelector(`.row-${i}`);
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      const button = createButton(item.id, item[lang].low, item.additionalClasses);
      row.appendChild(button);
    }
  }
}


/***/ }),

/***/ "./src/scripts/components/keyboard.js":
/*!********************************************!*\
  !*** ./src/scripts/components/keyboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createKeyboard": () => (/* binding */ createKeyboard),
/* harmony export */   "handleKeyboardEvent": () => (/* binding */ handleKeyboardEvent)
/* harmony export */ });
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates.js */ "./src/scripts/templates.js");


function createKeyboard() {
  const table = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('div', ['keyboard']);
  for (let i = 0; i < 5; i++) {
    const row = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('div', ['keyboard__row', `row-${i}`]);
    table.appendChild(row);
  }
  return table;
}

function handleEvent(event) {
  const button = document.getElementById(event.code);
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  if (event.key === 'Alt' || event.key === 'Control' || event.key === 'Tab') {
    event.preventDefault();
  }
  button.classList.add('button_active');
  document.addEventListener('keyup', () => {
    button.classList.remove('button_active');
  });
}

function handleKeyboardEvent() {
  document.addEventListener('keydown', handleEvent);

}


/***/ }),

/***/ "./src/scripts/config.js":
/*!*******************************!*\
  !*** ./src/scripts/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = [
  [
    {
      id: 'Backquote',
      eng: {
        low: '`',
        up: '~'
      },
      ru: {
        low: 'ё',
        up: 'Ё'
      },
      additionalClasses: []
    },
    {
      id: 'Digit1',
      eng: {
        low: '1',
        up: '!'
      },
      ru: {
        low: '1',
        up: '!'
      },
      additionalClasses: []
    },
    {
      id: 'Digit2',
      eng: {
        low: '2',
        up: '@'
      },
      ru: {
        low: '2',
        up: '"'
      },
      additionalClasses: []
    },
    {
      id: 'Digit3',
      eng: {
        low: '3',
        up: '#'
      },
      ru: {
        low: '3',
        up: '№'
      },
      additionalClasses: []
    },
    {
      id: 'Digit4',
      eng: {
        low: '4',
        up: '$'
      },
      ru: {
        low: '4',
        up: ';'
      },
      additionalClasses: []
    },
    {
      id: 'Digit5',
      eng: {
        low: '5',
        up: '%'
      },
      ru: {
        low: '5',
        up: '%'
      },
      additionalClasses: []
    },
    {
      id: 'Digit6',
      eng: {
        low: '6',
        up: '^'
      },
      ru: {
        low: '6',
        up: ':'
      },
      additionalClasses: []
    },
    {
      id: 'Digit7',
      eng: {
        low: '7',
        up: '&'
      },
      ru: {
        low: '7',
        up: '?'
      },
      additionalClasses: []
    },
    {
      id: 'Digit8',
      eng: {
        low: '8',
        up: '*'
      },
      ru: {
        low: '8',
        up: '*'
      },
      additionalClasses: []
    },
    {
      id: 'Digit9',
      eng: {
        low: '9',
        up: '('
      },
      ru: {
        low: '9',
        up: '('
      },
      additionalClasses: []
    },
    {
      id: 'Digit0',
      eng: {
        low: '0',
        up: ')'
      },
      ru: {
        low: '0',
        up: ')'
      },
      additionalClasses: []
    },
    {
      id: 'Minus',
      eng: {
        low: '-',
        up: '_'
      },
      ru: {
        low: '-',
        up: '_'
      },
      additionalClasses: []
    },
    {
      id: 'Equal',
      eng: {
        low: '=',
        up: '+'
      },
      ru: {
        low: '=',
        up: '+'
      },
      additionalClasses: []
    },
    {
      id: 'Backspace',
      eng: {
        low: 'Backspace',
        up: 'Backspace'
      },
      ru: {
        low: 'Backspace',
        up: 'Backspace'
      },
      additionalClasses: ['button_wide']
    }
  ],
  [
    {
      id: 'Tab',
      eng: {
        low: 'Tab',
        up: 'Tab'
      },
      ru: {
        low: 'Tab',
        up: 'Tab'
      },
      additionalClasses: ['button_wide']
    },
    {
      id: 'KeyQ',
      eng: {
        low: 'q',
        up: 'Q'
      },
      ru: {
        low: 'й',
        up: 'Й'
      },
      additionalClasses: []
    },
    {
      id: 'KeyW',
      eng: {
        low: 'w',
        up: 'W'
      },
      ru: {
        low: 'ц',
        up: 'Ц'
      },
      additionalClasses: []
    },
    {
      id: 'KeyE',
      eng: {
        low: 'e',
        up: 'E'
      },
      ru: {
        low: 'у',
        up: 'У'
      },
      additionalClasses: []
    },
    {
      id: 'KeyR',
      eng: {
        low: 'r',
        up: 'R'
      },
      ru: {
        low: 'к',
        up: 'К'
      },
      additionalClasses: []
    },
    {
      id: 'KeyT',
      eng: {
        low: 't',
        up: 'T'
      },
      ru: {
        low: 'е',
        up: 'Е'
      },
      additionalClasses: []
    },
    {
      id: 'KeyY',
      eng: {
        low: 'y',
        up: 'Y'
      },
      ru: {
        low: 'н',
        up: 'Н'
      },
      additionalClasses: []
    },
    {
      id: 'KeyU',
      eng: {
        low: 'u',
        up: 'U'
      },
      ru: {
        low: 'г',
        up: 'Г'
      },
      additionalClasses: []
    },
    {
      id: 'KeyI',
      eng: {
        low: 'i',
        up: 'I'
      },
      ru: {
        low: 'ш',
        up: 'Ш'
      },
      additionalClasses: []
    },
    {
      id: 'KeyO',
      eng: {
        low: 'o',
        up: 'O'
      },
      ru: {
        low: 'щ',
        up: 'Щ'
      },
      additionalClasses: []
    },
    {
      id: 'KeyP',
      eng: {
        low: 'p',
        up: 'P'
      },
      ru: {
        low: 'з',
        up: 'З'
      },
      additionalClasses: []
    },
    {
      id: 'BracketLeft',
      eng: {
        low: '[',
        up: '{'
      },
      ru: {
        low: 'х',
        up: 'Х'
      },
      additionalClasses: []
    },
    {
      id: 'BracketRight',
      eng: {
        low: ']',
        up: '}'
      },
      ru: {
        low: 'ъ',
        up: 'Ъ'
      },
      additionalClasses: []
    },
    {
      id: 'Backslash',
      eng: {
        low: '\\',
        up: '|'
      },
      ru: {
        low: '\\',
        up: '/'
      },
      additionalClasses: []
    },
    {
      id: 'Delete',
      eng: {
        low: 'Del',
        up: 'Del'
      },
      ru: {
        low: 'Del',
        up: 'Del'
      },
      additionalClasses: ['button_wide']
    },
  ],
  [
    {
      id: 'CapsLock',
      eng: {
        low: 'CapsLock',
        up: 'CapsLock'
      },
      ru: {
        low: 'CapsLock',
        up: 'CapsLock'
      },
      additionalClasses: ['button_wide']
    },
    {
      id: 'KeyA',
      eng: {
        low: 'a',
        up: 'A'
      },
      ru: {
        low: 'ф',
        up: 'Ф'
      },
      additionalClasses: []
    },
    {
      id: 'KeyS',
      eng: {
        low: 's',
        up: 'S'
      },
      ru: {
        low: 'ы',
        up: 'Ы'
      },
      additionalClasses: []
    },
    {
      id: 'KeyD',
      eng: {
        low: 'd',
        up: 'D'
      },
      ru: {
        low: 'в',
        up: 'В'
      },
      additionalClasses: []
    },
    {
      id: 'KeyF',
      eng: {
        low: 'f',
        up: 'F'
      },
      ru: {
        low: 'а',
        up: 'А'
      },
      additionalClasses: []
    },
    {
      id: 'KeyG',
      eng: {
        low: 'g',
        up: 'G'
      },
      ru: {
        low: 'п',
        up: 'П'
      },
      additionalClasses: []
    },
    {
      id: 'KeyH',
      eng: {
        low: 'h',
        up: 'H'
      },
      ru: {
        low: 'р',
        up: 'Р'
      },
      additionalClasses: []
    },
    {
      id: 'KeyJ',
      eng: {
        low: 'j',
        up: 'J'
      },
      ru: {
        low: 'о',
        up: 'О'
      },
      additionalClasses: []
    },
    {
      id: 'KeyK',
      eng: {
        low: 'k',
        up: 'K'
      },
      ru: {
        low: 'л',
        up: 'Л'
      },
      additionalClasses: []
    },
    {
      id: 'KeyL',
      eng: {
        low: 'l',
        up: 'L'
      },
      ru: {
        low: 'д',
        up: 'Д'
      },
      additionalClasses: []
    },
    {
      id: 'Semicolon',
      eng: {
        low: ';',
        up: ':'
      },
      ru: {
        low: 'ж',
        up: 'Ж'
      },
      additionalClasses: []
    },
    {
      id: 'Quote',
      eng: {
        low: '\'',
        up: '"'
      },
      ru: {
        low: 'э',
        up: 'Э'
      },
      additionalClasses: []
    },
    {
      id: 'Enter',
      eng: {
        low: 'Enter',
        up: 'Enter'
      },
      ru: {
        low: 'Enter',
        up: 'Enter'
      },
      additionalClasses: ['button_wide']
    },
  ],
  [
    {
      id: 'ShiftLeft',
      eng: {
        low: 'Shift',
        up: 'Shift'
      },
      ru: {
        low: 'Shift',
        up: 'Shift'
      },
      additionalClasses: ['button_wide']
    },
    {
      id: 'KeyZ',
      eng: {
        low: 'z',
        up: 'Z'
      },
      ru: {
        low: 'я',
        up: 'Я'
      },
      additionalClasses: []
    },
    {
      id: 'KeyX',
      eng: {
        low: 'x',
        up: 'X'
      },
      ru: {
        low: 'ч',
        up: 'Ч'
      },
      additionalClasses: []
    },
    {
      id: 'KeyC',
      eng: {
        low: 'c',
        up: 'C'
      },
      ru: {
        low: 'с',
        up: 'С'
      },
      additionalClasses: []
    },
    {
      id: 'KeyV',
      eng: {
        low: 'v',
        up: 'V'
      },
      ru: {
        low: 'м',
        up: 'М'
      },
      additionalClasses: []
    },
    {
      id: 'KeyB',
      eng: {
        low: 'b',
        up: 'B'
      },
      ru: {
        low: 'и',
        up: 'И'
      },
      additionalClasses: []
    },
    {
      id: 'KeyN',
      eng: {
        low: 'n',
        up: 'N'
      },
      ru: {
        low: 'т',
        up: 'Т'
      },
      additionalClasses: []
    },
    {
      id: 'KeyM',
      eng: {
        low: 'm',
        up: 'M'
      },
      ru: {
        low: 'ь',
        up: 'Ь'
      },
      additionalClasses: []
    },
    {
      id: 'Comma',
      eng: {
        low: ',',
        up: '<'
      },
      ru: {
        low: 'б',
        up: 'Б'
      },
      additionalClasses: []
    },
    {
      id: 'Period',
      eng: {
        low: '.',
        up: '>'
      },
      ru: {
        low: 'ю',
        up: 'Ю'
      },
      additionalClasses: []
    },
    {
      id: 'Slash',
      eng: {
        low: '/',
        up: '?'
      },
      ru: {
        low: '.',
        up: ','
      },
      additionalClasses: []
    },
    {
      id: 'ArrowUp',
      eng: {
        low: '&#8593;',
        up: '&#8593;'
      },
      ru: {
        low: '&#8593;',
        up: '&#8593;'
      },
      additionalClasses: []
    },
    {
      id: 'ShiftRight',
      eng: {
        low: 'Shift',
        up: 'Shift'
      },
      ru: {
        low: 'Shift',
        up: 'Shift'
      },
      additionalClasses: ['button_wide']
    },
  ],
  [
    {
      id: 'ControlLeft',
      eng: {
        low: 'Ctrl',
        up: 'Ctrl'
      },
      ru: {
        low: 'Ctrl',
        up: 'Ctrl'
      },
      additionalClasses: []
    },
    {
      id: 'MetaLeft',
      eng: {
        low: 'Win',
        up: 'Win'
      },
      ru: {
        low: 'Win',
        up: 'Win'
      },
      additionalClasses: []
    },
    {
      id: 'AltLeft',
      eng: {
        low: 'Alt',
        up: 'Alt'
      },
      ru: {
        low: 'Alt',
        up: 'Alt'
      },
      additionalClasses: []
    },
    {
      id: 'Space',
      eng: {
        low: '',
        up: ''
      },
      ru: {
        low: '',
        up: ''
      },
      additionalClasses: ['button_wide']
    },
    {
      id: 'AltRight',
      eng: {
        low: 'Alt',
        up: 'Alt'
      },
      ru: {
        low: 'Alt',
        up: 'Alt'
      },
      additionalClasses: []
    },
    {
      id: 'ArrowLeft',
      eng: {
        low: '&#8592;',
        up: '&#8592;'
      },
      ru: {
        low: '&#8592;',
        up: '&#8592;'
      },
      additionalClasses: []
    },
    {
      id: 'ArrowDown',
      eng: {
        low: '&#8595;',
        up: '&#8595;'
      },
      ru: {
        low: '&#8595;',
        up: '&#8595;'
      },
      additionalClasses: []
    },
    {
      id: 'ArrowRight',
      eng: {
        low: '&#8594;',
        up: '&#8594;'
      },
      ru: {
        low: '&#8594;',
        up: '&#8594;'
      },
      additionalClasses: []
    },
    {
      id: 'ControlRight',
      eng: {
        low: 'Ctrl',
        up: 'Ctrl'
      },
      ru: {
        low: 'Ctrl',
        up: 'Ctrl'
      },
      additionalClasses: []
    },
  ]
]


/***/ }),

/***/ "./src/scripts/layout.js":
/*!*******************************!*\
  !*** ./src/scripts/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showLayout": () => (/* binding */ showLayout)
/* harmony export */ });
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates.js */ "./src/scripts/templates.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/keyboard.js */ "./src/scripts/components/keyboard.js");



const body = document.getElementById('body');

function showLayout() {
  const mainElements = ['header', 'main', 'footer'];

  mainElements.forEach((item) => {
    const element = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)(item, [item]);
    const container = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('div', ['container', `container_${item}`]);
    element.appendChild(container);
    if (item === 'header') {
      const title = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('h1', ['header__title']);
      title.innerHTML = 'RSS Virtual Keyboard';
      container.appendChild(title);
    }
    if (item === 'main') {
      const textarea = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('textarea', ['textarea']);
      container.appendChild(textarea);
      const keyboard = (0,_components_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.createKeyboard)();
      container.appendChild(keyboard);
    }
    if (item === 'footer') {
      const content = (0,_templates_js__WEBPACK_IMPORTED_MODULE_0__.createTag)('p', ['footer__content']);
      content.innerHTML = `
      Клавиатура создана в операционной системе Windows.<br>
      Для переключения языка: Alt + Shift.
      `;
      container.appendChild(content)
    }
    body.appendChild(element);
  })
}


/***/ }),

/***/ "./src/scripts/state.js":
/*!******************************!*\
  !*** ./src/scripts/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let state = {
  lang: 'eng',
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);


/***/ }),

/***/ "./src/scripts/templates.js":
/*!**********************************!*\
  !*** ./src/scripts/templates.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTag": () => (/* binding */ createTag)
/* harmony export */ });
function createTag(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
}


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/css/style.css */ "./src/assets/styles/css/style.css");
/* harmony import */ var _assets_styles_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/scss/style.scss */ "./src/assets/styles/scss/style.scss");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./src/scripts/config.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.js */ "./src/scripts/layout.js");
/* harmony import */ var _components_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buttons.js */ "./src/scripts/components/buttons.js");
/* harmony import */ var _components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/keyboard.js */ "./src/scripts/components/keyboard.js");









(0,_layout_js__WEBPACK_IMPORTED_MODULE_3__.showLayout)();
(0,_components_buttons_js__WEBPACK_IMPORTED_MODULE_4__.showButtons)(_config_js__WEBPACK_IMPORTED_MODULE_2__.config);
(0,_components_keyboard_js__WEBPACK_IMPORTED_MODULE_5__.handleKeyboardEvent)();


// ==================== try new functionality ==========================

// const button = document.getElementById('KeyG');

// button.addEventListener('mousedown', function (event) {
//   event.preventDefault();
//   document.dispatchEvent(
//     new KeyboardEvent("keydown", {
//       code: "KeyG",
//       key: "KeyG",
//       bubbles: true,
//       // composed: true,
//     })
//   );
// });

// button.addEventListener('mouseup', function (event) {
//   event.preventDefault();
//   document.dispatchEvent(
//     new KeyboardEvent("keyup", {
//       code: "KeyG",
//       key: "KeyG",
//       bubbles: true,
//     })
//   );
// });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2M0YWZkY2NkZDgwMDJlODVmOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdDO0FBQ1k7QUFDNUM7QUFDQTtBQUNBLGlCQUFpQix3REFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxlQUFlLHNEQUFVO0FBQ3pCLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQSwrQ0FBK0MsRUFBRTtBQUNqRCxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjRDO0FBQzVDO0FBQ087QUFDUCxnQkFBZ0Isd0RBQVM7QUFDekIsa0JBQWtCLE9BQU87QUFDekIsZ0JBQWdCLHdEQUFTLGlDQUFpQyxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsY0FBYztBQUNkLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixPQUFPO0FBQ1A7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixPQUFPO0FBQ1A7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLE9BQU87QUFDUDtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsT0FBTztBQUNQO0FBQ0EscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzd0IyQztBQUNlO0FBQzFEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCLHNCQUFzQix3REFBUyxtQ0FBbUMsS0FBSztBQUN2RTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFTO0FBQ2hDO0FBQ0EsdUJBQXVCLHVFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3REFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNKZDtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0U7QUFDMUM7QUFDcUM7QUFDckM7QUFDeUM7QUFDYTtBQUNRO0FBQzlEO0FBQ0Esc0RBQVU7QUFDVixtRUFBVyxDQUFDLDhDQUFNO0FBQ2xCLDRFQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVmlydHVhbCBLZXlib2FyZC8uL3NyYy9hc3NldHMvc3R5bGVzL3Njc3Mvc3R5bGUuc2Nzcz8zZGFjIiwid2VicGFjazovL1ZpcnR1YWwgS2V5Ym9hcmQvLi9zcmMvYXNzZXRzL3N0eWxlcy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL1ZpcnR1YWwgS2V5Ym9hcmQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vVmlydHVhbCBLZXlib2FyZC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vVmlydHVhbCBLZXlib2FyZC8uL3NyYy9zY3JpcHRzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9WaXJ0dWFsIEtleWJvYXJkLy4vc3JjL3NjcmlwdHMvbGF5b3V0LmpzIiwid2VicGFjazovL1ZpcnR1YWwgS2V5Ym9hcmQvLi9zcmMvc2NyaXB0cy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9WaXJ0dWFsIEtleWJvYXJkLy4vc3JjL3NjcmlwdHMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL1ZpcnR1YWwgS2V5Ym9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVmlydHVhbCBLZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVmlydHVhbCBLZXlib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1ZpcnR1YWwgS2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9WaXJ0dWFsIEtleWJvYXJkLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuLi9zdGF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVUYWcgfSBmcm9tIFwiLi4vdGVtcGxhdGVzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oaWQsIHRleHQsIGFkZGl0aW9uYWxDbGFzc2VzKSB7XHJcbiAgY29uc3QgYnV0dG9uID0gY3JlYXRlVGFnKCdkaXYnLCBbJ2J1dHRvbicsIC4uLmFkZGl0aW9uYWxDbGFzc2VzXSk7XHJcbiAgYnV0dG9uLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgYnV0dG9uLmlkID0gaWQ7XHJcbiAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdXR0b25zKGRhdGEpIHtcclxuICBjb25zdCBsYW5nID0gc3RhdGUubGFuZztcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGFyciA9IGRhdGFbaV07XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucm93LSR7aX1gKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBhcnJbal07XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihpdGVtLmlkLCBpdGVtW2xhbmddLmxvdywgaXRlbS5hZGRpdGlvbmFsQ2xhc3Nlcyk7XHJcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUYWcgfSBmcm9tIFwiLi4vdGVtcGxhdGVzLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2V5Ym9hcmQoKSB7XHJcbiAgY29uc3QgdGFibGUgPSBjcmVhdGVUYWcoJ2RpdicsIFsna2V5Ym9hcmQnXSk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IGNyZWF0ZVRhZygnZGl2JywgWydrZXlib2FyZF9fcm93JywgYHJvdy0ke2l9YF0pO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICB9XHJcbiAgcmV0dXJuIHRhYmxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFdmVudChldmVudCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LmNvZGUpO1xyXG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRhcmVhJyk7XHJcbiAgdGV4dGFyZWEuZm9jdXMoKTtcclxuICBpZiAoZXZlbnQua2V5ID09PSAnQWx0JyB8fCBldmVudC5rZXkgPT09ICdDb250cm9sJyB8fCBldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2FjdGl2ZScpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9hY3RpdmUnKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUtleWJvYXJkRXZlbnQoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUV2ZW50KTtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IFtcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnQmFja3F1b3RlJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnYCcsXHJcbiAgICAgICAgdXA6ICd+J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9GRJyxcclxuICAgICAgICB1cDogJ9CBJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGlnaXQxJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnMScsXHJcbiAgICAgICAgdXA6ICchJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJzEnLFxyXG4gICAgICAgIHVwOiAnISdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0RpZ2l0MicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJzInLFxyXG4gICAgICAgIHVwOiAnQCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICcyJyxcclxuICAgICAgICB1cDogJ1wiJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGlnaXQzJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnMycsXHJcbiAgICAgICAgdXA6ICcjJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJzMnLFxyXG4gICAgICAgIHVwOiAn4oSWJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGlnaXQ0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnNCcsXHJcbiAgICAgICAgdXA6ICckJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJzQnLFxyXG4gICAgICAgIHVwOiAnOydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0RpZ2l0NScsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJzUnLFxyXG4gICAgICAgIHVwOiAnJSdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICc1JyxcclxuICAgICAgICB1cDogJyUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdEaWdpdDYnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICc2JyxcclxuICAgICAgICB1cDogJ14nXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnNicsXHJcbiAgICAgICAgdXA6ICc6J1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGlnaXQ3JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnNycsXHJcbiAgICAgICAgdXA6ICcmJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJzcnLFxyXG4gICAgICAgIHVwOiAnPydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0RpZ2l0OCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJzgnLFxyXG4gICAgICAgIHVwOiAnKidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICc4JyxcclxuICAgICAgICB1cDogJyonXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdEaWdpdDknLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICc5JyxcclxuICAgICAgICB1cDogJygnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnOScsXHJcbiAgICAgICAgdXA6ICcoJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGlnaXQwJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnMCcsXHJcbiAgICAgICAgdXA6ICcpJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJzAnLFxyXG4gICAgICAgIHVwOiAnKSdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ01pbnVzJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnLScsXHJcbiAgICAgICAgdXA6ICdfJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJy0nLFxyXG4gICAgICAgIHVwOiAnXydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0VxdWFsJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnPScsXHJcbiAgICAgICAgdXA6ICcrJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJz0nLFxyXG4gICAgICAgIHVwOiAnKydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0JhY2tzcGFjZScsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ0JhY2tzcGFjZScsXHJcbiAgICAgICAgdXA6ICdCYWNrc3BhY2UnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnQmFja3NwYWNlJyxcclxuICAgICAgICB1cDogJ0JhY2tzcGFjZSdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFsnYnV0dG9uX3dpZGUnXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpZDogJ1RhYicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ1RhYicsXHJcbiAgICAgICAgdXA6ICdUYWInXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnVGFiJyxcclxuICAgICAgICB1cDogJ1RhYidcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFsnYnV0dG9uX3dpZGUnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlRJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAncScsXHJcbiAgICAgICAgdXA6ICdRJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C5JyxcclxuICAgICAgICB1cDogJ9CZJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5VycsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ3cnLFxyXG4gICAgICAgIHVwOiAnVydcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRhicsXHJcbiAgICAgICAgdXA6ICfQpidcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleUUnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdlJyxcclxuICAgICAgICB1cDogJ0UnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YMnLFxyXG4gICAgICAgIHVwOiAn0KMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlSJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAncicsXHJcbiAgICAgICAgdXA6ICdSJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C6JyxcclxuICAgICAgICB1cDogJ9CaJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5VCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ3QnLFxyXG4gICAgICAgIHVwOiAnVCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfQtScsXHJcbiAgICAgICAgdXA6ICfQlSdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleVknLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICd5JyxcclxuICAgICAgICB1cDogJ1knXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0L0nLFxyXG4gICAgICAgIHVwOiAn0J0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlVJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAndScsXHJcbiAgICAgICAgdXA6ICdVJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9CzJyxcclxuICAgICAgICB1cDogJ9CTJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5SScsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ2knLFxyXG4gICAgICAgIHVwOiAnSSdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRiCcsXHJcbiAgICAgICAgdXA6ICfQqCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleU8nLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdvJyxcclxuICAgICAgICB1cDogJ08nXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YknLFxyXG4gICAgICAgIHVwOiAn0KknXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlQJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAncCcsXHJcbiAgICAgICAgdXA6ICdQJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C3JyxcclxuICAgICAgICB1cDogJ9CXJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnQnJhY2tldExlZnQnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdbJyxcclxuICAgICAgICB1cDogJ3snXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YUnLFxyXG4gICAgICAgIHVwOiAn0KUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdCcmFja2V0UmlnaHQnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICddJyxcclxuICAgICAgICB1cDogJ30nXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YonLFxyXG4gICAgICAgIHVwOiAn0KonXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdCYWNrc2xhc2gnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdcXFxcJyxcclxuICAgICAgICB1cDogJ3wnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnXFxcXCcsXHJcbiAgICAgICAgdXA6ICcvJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRGVsZXRlJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnRGVsJyxcclxuICAgICAgICB1cDogJ0RlbCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICdEZWwnLFxyXG4gICAgICAgIHVwOiAnRGVsJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogWydidXR0b25fd2lkZSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpZDogJ0NhcHNMb2NrJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnQ2Fwc0xvY2snLFxyXG4gICAgICAgIHVwOiAnQ2Fwc0xvY2snXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnQ2Fwc0xvY2snLFxyXG4gICAgICAgIHVwOiAnQ2Fwc0xvY2snXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbJ2J1dHRvbl93aWRlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5QScsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ2EnLFxyXG4gICAgICAgIHVwOiAnQSdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRhCcsXHJcbiAgICAgICAgdXA6ICfQpCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleVMnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdzJyxcclxuICAgICAgICB1cDogJ1MnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YsnLFxyXG4gICAgICAgIHVwOiAn0KsnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlEJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnZCcsXHJcbiAgICAgICAgdXA6ICdEJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9CyJyxcclxuICAgICAgICB1cDogJ9CSJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5RicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ2YnLFxyXG4gICAgICAgIHVwOiAnRidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfQsCcsXHJcbiAgICAgICAgdXA6ICfQkCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleUcnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdnJyxcclxuICAgICAgICB1cDogJ0cnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0L8nLFxyXG4gICAgICAgIHVwOiAn0J8nXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlIJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnaCcsXHJcbiAgICAgICAgdXA6ICdIJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9GAJyxcclxuICAgICAgICB1cDogJ9CgJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5SicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ2onLFxyXG4gICAgICAgIHVwOiAnSidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfQvicsXHJcbiAgICAgICAgdXA6ICfQnidcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleUsnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdrJyxcclxuICAgICAgICB1cDogJ0snXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0LsnLFxyXG4gICAgICAgIHVwOiAn0JsnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlMJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnbCcsXHJcbiAgICAgICAgdXA6ICdMJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C0JyxcclxuICAgICAgICB1cDogJ9CUJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnU2VtaWNvbG9uJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnOycsXHJcbiAgICAgICAgdXA6ICc6J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C2JyxcclxuICAgICAgICB1cDogJ9CWJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnUXVvdGUnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdcXCcnLFxyXG4gICAgICAgIHVwOiAnXCInXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0Y0nLFxyXG4gICAgICAgIHVwOiAn0K0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdFbnRlcicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ0VudGVyJyxcclxuICAgICAgICB1cDogJ0VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ0VudGVyJyxcclxuICAgICAgICB1cDogJ0VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogWydidXR0b25fd2lkZSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpZDogJ1NoaWZ0TGVmdCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ1NoaWZ0JyxcclxuICAgICAgICB1cDogJ1NoaWZ0J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ1NoaWZ0JyxcclxuICAgICAgICB1cDogJ1NoaWZ0J1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogWydidXR0b25fd2lkZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleVonLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICd6JyxcclxuICAgICAgICB1cDogJ1onXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0Y8nLFxyXG4gICAgICAgIHVwOiAn0K8nXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlYJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAneCcsXHJcbiAgICAgICAgdXA6ICdYJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9GHJyxcclxuICAgICAgICB1cDogJ9CnJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5QycsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ2MnLFxyXG4gICAgICAgIHVwOiAnQydcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRgScsXHJcbiAgICAgICAgdXA6ICfQoSdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleVYnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICd2JyxcclxuICAgICAgICB1cDogJ1YnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0LwnLFxyXG4gICAgICAgIHVwOiAn0JwnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdLZXlCJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnYicsXHJcbiAgICAgICAgdXA6ICdCJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ9C4JyxcclxuICAgICAgICB1cDogJ9CYJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnS2V5TicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ24nLFxyXG4gICAgICAgIHVwOiAnTidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRgicsXHJcbiAgICAgICAgdXA6ICfQoidcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0tleU0nLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICdtJyxcclxuICAgICAgICB1cDogJ00nXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAn0YwnLFxyXG4gICAgICAgIHVwOiAn0KwnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdDb21tYScsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJywnLFxyXG4gICAgICAgIHVwOiAnPCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfQsScsXHJcbiAgICAgICAgdXA6ICfQkSdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1BlcmlvZCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJy4nLFxyXG4gICAgICAgIHVwOiAnPidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICfRjicsXHJcbiAgICAgICAgdXA6ICfQridcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1NsYXNoJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnLycsXHJcbiAgICAgICAgdXA6ICc/J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJy4nLFxyXG4gICAgICAgIHVwOiAnLCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0Fycm93VXAnLFxyXG4gICAgICBlbmc6IHtcclxuICAgICAgICBsb3c6ICcmIzg1OTM7JyxcclxuICAgICAgICB1cDogJyYjODU5MzsnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnJiM4NTkzOycsXHJcbiAgICAgICAgdXA6ICcmIzg1OTM7J1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnU2hpZnRSaWdodCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ1NoaWZ0JyxcclxuICAgICAgICB1cDogJ1NoaWZ0J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ1NoaWZ0JyxcclxuICAgICAgICB1cDogJ1NoaWZ0J1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogWydidXR0b25fd2lkZSddXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpZDogJ0NvbnRyb2xMZWZ0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnQ3RybCcsXHJcbiAgICAgICAgdXA6ICdDdHJsJ1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJ0N0cmwnLFxyXG4gICAgICAgIHVwOiAnQ3RybCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ01ldGFMZWZ0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnV2luJyxcclxuICAgICAgICB1cDogJ1dpbidcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICdXaW4nLFxyXG4gICAgICAgIHVwOiAnV2luJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnQWx0TGVmdCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ0FsdCcsXHJcbiAgICAgICAgdXA6ICdBbHQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHJ1OiB7XHJcbiAgICAgICAgbG93OiAnQWx0JyxcclxuICAgICAgICB1cDogJ0FsdCdcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1NwYWNlJyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnJyxcclxuICAgICAgICB1cDogJydcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICcnLFxyXG4gICAgICAgIHVwOiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogWydidXR0b25fd2lkZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0FsdFJpZ2h0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnQWx0JyxcclxuICAgICAgICB1cDogJ0FsdCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICdBbHQnLFxyXG4gICAgICAgIHVwOiAnQWx0J1xyXG4gICAgICB9LFxyXG4gICAgICBhZGRpdGlvbmFsQ2xhc3NlczogW11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnQXJyb3dMZWZ0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnJiM4NTkyOycsXHJcbiAgICAgICAgdXA6ICcmIzg1OTI7J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJyYjODU5MjsnLFxyXG4gICAgICAgIHVwOiAnJiM4NTkyOydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0Fycm93RG93bicsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJyYjODU5NTsnLFxyXG4gICAgICAgIHVwOiAnJiM4NTk1OydcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICcmIzg1OTU7JyxcclxuICAgICAgICB1cDogJyYjODU5NTsnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdBcnJvd1JpZ2h0JyxcclxuICAgICAgZW5nOiB7XHJcbiAgICAgICAgbG93OiAnJiM4NTk0OycsXHJcbiAgICAgICAgdXA6ICcmIzg1OTQ7J1xyXG4gICAgICB9LFxyXG4gICAgICBydToge1xyXG4gICAgICAgIGxvdzogJyYjODU5NDsnLFxyXG4gICAgICAgIHVwOiAnJiM4NTk0OydcclxuICAgICAgfSxcclxuICAgICAgYWRkaXRpb25hbENsYXNzZXM6IFtdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0NvbnRyb2xSaWdodCcsXHJcbiAgICAgIGVuZzoge1xyXG4gICAgICAgIGxvdzogJ0N0cmwnLFxyXG4gICAgICAgIHVwOiAnQ3RybCdcclxuICAgICAgfSxcclxuICAgICAgcnU6IHtcclxuICAgICAgICBsb3c6ICdDdHJsJyxcclxuICAgICAgICB1cDogJ0N0cmwnXHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZGl0aW9uYWxDbGFzc2VzOiBbXVxyXG4gICAgfSxcclxuICBdXHJcbl1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVGFnIH0gZnJvbSBcIi4vdGVtcGxhdGVzLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUtleWJvYXJkIH0gZnJvbSBcIi4vY29tcG9uZW50cy9rZXlib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xheW91dCgpIHtcclxuICBjb25zdCBtYWluRWxlbWVudHMgPSBbJ2hlYWRlcicsICdtYWluJywgJ2Zvb3RlciddO1xyXG5cclxuICBtYWluRWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZVRhZyhpdGVtLCBbaXRlbV0pO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlVGFnKCdkaXYnLCBbJ2NvbnRhaW5lcicsIGBjb250YWluZXJfJHtpdGVtfWBdKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGlmIChpdGVtID09PSAnaGVhZGVyJykge1xyXG4gICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRhZygnaDEnLCBbJ2hlYWRlcl9fdGl0bGUnXSk7XHJcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdSU1MgVmlydHVhbCBLZXlib2FyZCc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbSA9PT0gJ21haW4nKSB7XHJcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gY3JlYXRlVGFnKCd0ZXh0YXJlYScsIFsndGV4dGFyZWEnXSk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICAgIGNvbnN0IGtleWJvYXJkID0gY3JlYXRlS2V5Ym9hcmQoKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGtleWJvYXJkKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtID09PSAnZm9vdGVyJykge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlVGFnKCdwJywgWydmb290ZXJfX2NvbnRlbnQnXSk7XHJcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICDQmtC70LDQstC40LDRgtGD0YDQsCDRgdC+0LfQtNCw0L3QsCDQsiDQvtC/0LXRgNCw0YbQuNC+0L3QvdC+0Lkg0YHQuNGB0YLQtdC80LUgV2luZG93cy48YnI+XHJcbiAgICAgINCU0LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y8g0Y/Qt9GL0LrQsDogQWx0ICsgU2hpZnQuXHJcbiAgICAgIGA7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KVxyXG4gICAgfVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9KVxyXG59XHJcbiIsImxldCBzdGF0ZSA9IHtcclxuICBsYW5nOiAnZW5nJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYWcodGFnLCBjbGFzc2VzKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcuanMnO1xyXG5cclxuaW1wb3J0IHsgc2hvd0xheW91dCB9IGZyb20gJy4vbGF5b3V0LmpzJztcclxuaW1wb3J0IHsgc2hvd0J1dHRvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9ucy5qcyc7XHJcbmltcG9ydCB7IGhhbmRsZUtleWJvYXJkRXZlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMva2V5Ym9hcmQuanMnXHJcblxyXG5zaG93TGF5b3V0KCk7XHJcbnNob3dCdXR0b25zKGNvbmZpZyk7XHJcbmhhbmRsZUtleWJvYXJkRXZlbnQoKTtcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PSB0cnkgbmV3IGZ1bmN0aW9uYWxpdHkgPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdLZXlHJyk7XHJcblxyXG4vLyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4vLyAgICAgbmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcclxuLy8gICAgICAgY29kZTogXCJLZXlHXCIsXHJcbi8vICAgICAgIGtleTogXCJLZXlHXCIsXHJcbi8vICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbi8vICAgICAgIC8vIGNvbXBvc2VkOiB0cnVlLFxyXG4vLyAgICAgfSlcclxuLy8gICApO1xyXG4vLyB9KTtcclxuXHJcbi8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4vLyAgICAgbmV3IEtleWJvYXJkRXZlbnQoXCJrZXl1cFwiLCB7XHJcbi8vICAgICAgIGNvZGU6IFwiS2V5R1wiLFxyXG4vLyAgICAgICBrZXk6IFwiS2V5R1wiLFxyXG4vLyAgICAgICBidWJibGVzOiB0cnVlLFxyXG4vLyAgICAgfSlcclxuLy8gICApO1xyXG4vLyB9KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9