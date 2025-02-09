const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, value)
}

const getLocalStorage = (key) => {
    return localStorage.getItem(key)
}

const removeFromLocalStorage = (key) => {
    return localStorage.setItem(key, '')
}

export { setLocalStorage, getLocalStorage, removeFromLocalStorage, }