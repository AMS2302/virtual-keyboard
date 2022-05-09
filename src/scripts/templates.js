export function createTag(tag, classes) {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  return element;
}
