function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { setLocalStorage as default };
