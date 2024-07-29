export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const endpoints = {
  login: `${BASE_URL}/login`,
  clients: {
    list: `${BASE_URL}/clients`,
  },
};

export const links = {
  login: '/',
  clients: {
    list: '/clients',
  },
};
