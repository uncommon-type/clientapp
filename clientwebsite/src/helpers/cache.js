const localStorageKey = 'auth';

export const writeToCache = (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export const readFromCache = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {
        token: null,
        userName: null,
    };
}

export const clearCache = () => {
    localStorage.removeItem(localStorageKey);
}