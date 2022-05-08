import '../assets/styles/css/style.css';
import '../assets/styles/scss/style.scss';

import { config } from './config.js';

import { showLayout } from './layout.js';
import { showButtons } from './components/buttons.js';

showLayout();
showButtons(config);
