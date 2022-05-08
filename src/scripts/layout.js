import { createTag } from "./templates.js";
import { createKeyboard } from "./components/keyboard.js";

const body = document.getElementById('body');

export function showLayout() {
  const mainElements = ['header', 'main', 'footer'];

  mainElements.forEach((item) => {
    const element = createTag(item, [item]);
    const container = createTag('div', ['container', `container_${item}`]);
    element.appendChild(container);
    if (item === 'main') {
      const keyboard = createKeyboard();
      container.appendChild(keyboard);
    }
    body.appendChild(element);
  })
}
