import { readFromCache, clearCache } from './cache';

const isTokenExpired = (token) => {
    if (!token) return true;
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
};

export const isValidAuthData = (authData) => {
    if (!authData || !authData.token || !authData.userName) {
        return false;
    }

    if (isTokenExpired(authData.token)) {
        return false;
    }

    return true;
}

const getAuthDataFromCache = () => {
    return readFromCache();
}

const getAuthData = () => {
    const authData = getAuthDataFromCache();

    if (!isValidAuthData(authData)) {
        clearCache();
        return;
    }
    return authData;
};

export const authenticate = () => {
    return getAuthData();
};
