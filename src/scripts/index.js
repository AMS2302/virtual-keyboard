import '../assets/styles/css/style.css';
import '../assets/styles/scss/style.scss';

import { config } from './config.js';

import { showLayout } from './layout.js';
import { showButtons } from './components/buttons.js';
import {handleKeyboardEvent} from './components/keyboard.js'

showLayout();
showButtons(config);
handleKeyboardEvent();
