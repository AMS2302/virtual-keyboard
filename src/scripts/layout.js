import { createTag } from "./templates.js";
import { createKeyboard } from "./components/keyboard.js";

const body = document.getElementById('body');

export function showLayout() {
  const mainElements = ['header', 'main', 'footer'];

  mainElements.forEach((item) => {
    const element = createTag(item, [item]);
    const container = createTag('div', ['container', `container_${item}`]);
    element.appendChild(container);
    if (item === 'header') {
      const title = createTag('h1', ['header__title']);
      title.innerHTML = 'RSS Virtual Keyboard';
      container.appendChild(title);
    }
    if (item === 'main') {
      const textarea = createTag('textarea', ['textarea']);
      container.appendChild(textarea);
      const keyboard = createKeyboard();
      container.appendChild(keyboard);
    }
    if (item === 'footer') {
      const content = createTag('p', ['footer__content']);
      content.innerHTML = `
      Клавиатура создана в операционной системе Windows.<br>
      Для переключения языка: Alt + Shift.
      `;
      container.appendChild(content)
    }
    body.appendChild(element);
  })
}
