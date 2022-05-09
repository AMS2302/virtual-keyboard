import { createTag } from "../templates.js";

export function createKeyboard() {
  const table = createTag('div', ['keyboard']);
  for (let i = 0; i < 5; i++) {
    const row = createTag('div', ['keyboard__row', `row-${i}`]);
    table.appendChild(row);
  }
  return table;
}

function handleEvent(event) {
  const button = document.getElementById(event.code);
  const textarea = document.querySelector('.textarea');
  if (button) {
    textarea.focus();
    if (event.key === 'Alt' || event.key === 'Control') {
      event.preventDefault();
      textarea.blur();
    }
    button.classList.add('button_active');
    document.addEventListener('keyup', () => {
      button.classList.remove('button_active');
    });
  }
}

export function handleKeyboardEvent() {
  document.addEventListener('keydown', handleEvent);

}
