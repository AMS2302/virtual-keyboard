export function setLocalStorage(key, param) {
  localStorage.setItem(key, param);
}

export function getLocalStorage(state, key) {
  if (localStorage.getItem(key)) {
    state.key = localStorage.getItem(key);
  }
  return state.key;
}

// export default function initialLocalStorage(state, key, param) {
//   window.addEventListener('beforeunload', setLocalStorage(key, param));
//   window.addEventListener('load', getLocalStorage(key, state));
// }
