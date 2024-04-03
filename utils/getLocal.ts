export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    let data = JSON.parse(localStorage.getItem(key)!)
    return data
}