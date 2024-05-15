const localStorageKey = 'auth';

export const writeToCache = (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}