function setLocalStorageItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageItem(key) {
  return JSON.parse(localStorage.getItem(key)) ?? '';
}

function deleteLocalStorageItem(key) {
  localStorage.removeItem(key);
}

export { setLocalStorageItem, getLocalStorageItem, deleteLocalStorageItem };
