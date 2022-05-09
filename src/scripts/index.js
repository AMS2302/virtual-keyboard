import '../assets/styles/css/style.css';
import '../assets/styles/scss/style.scss';

import { config } from './config.js';

import { showLayout } from './layout.js';
import { showButtons } from './components/buttons.js';
import { handleKeyboardEvent } from './components/keyboard.js'

showLayout();
showButtons(config);
handleKeyboardEvent();


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
