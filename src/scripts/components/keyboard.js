import { createTag } from "../templates.js";

export function createKeyboard() {
  const table = createTag('div', ['keyboard']);
  for (let i = 0; i < 5; i++) {
    const row = createTag('div', ['keyboard__row', `row-${i}`]);
    table.appendChild(row);
  }
  return table;
}
