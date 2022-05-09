import { createTag } from "../templates.js";

function createButton(id, text, additionalClasses) {
  const button = createTag('div', ['button', ...additionalClasses]);
  button.innerHTML = text;
  button.id = id;
  return button;
}

export function showButtons(data) {
  for (let i = 0; i < data.length; i++) {
    const arr = data[i];
    const row = document.querySelector(`.row-${i}`);
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      const button = createButton(item.id, item.textEng.low, item.additionalClasses);
      row.appendChild(button);
    }
  }
}
