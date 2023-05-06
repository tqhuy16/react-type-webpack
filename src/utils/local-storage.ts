const loginStorage = (key: string, value: string) => {
  window.localStorage.setItem(key, value)
}

export { loginStorage }
