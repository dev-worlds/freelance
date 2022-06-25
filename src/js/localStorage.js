export const getLocalStorageData = name => {
    const data = localStorage.getItem(name) || '[]'
    try {
        return JSON.parse(data)
    } catch (e) {
        localStorage.setItem(name, '[]')
        return []
    }
}

export const setLocalStorageData = (name, json) => {
    try {
        const data = JSON.stringify(json)
        localStorage.setItem(name, data)
    } catch (e) {
        console.log(e)
    }
}

export function addLocalStorage(name, value) {
    const data = getLocalStorageData(name) || [];
    data.push(value)
    setLocalStorageData(name, data)
}