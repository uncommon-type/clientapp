import { endpoints } from '@helpers/constants';
import { getSchemaErrors } from './schemaErrors';

export const requestToken = async (userCredentials) => {
  return await sendData(endpoints.login, userCredentials);
};

class ResponseError extends Error {
  constructor(message, errors, status) {
    super(message);
    this.errors = errors;
    this.status = status;
    this.statusText = message;
  }
}

export const handleError = ({ status = '', invalid_params = {} }) => {
  if (status === 400) {
    const validationErrors = getSchemaErrors(invalid_params);

    if (validationErrors.length === 0) {
      throw new ResponseError('Нам очень жаль, но что-то пошло не так', [], status);
    }

    throw new ResponseError('Неправильный запрос', validationErrors, status);
  }

  if (status === 401) {
    throw new ResponseError('Ошибка авторизации', [], status);
  }

  if (status === 404) {
    throw new ResponseError('Не найдено', [], status);
  }

  if (status === 500) {
    throw new ResponseError('Внутренняя ошибка сервера', [], status);
  }

  throw new Error('Неизвестная ошибка', []);
};

export const callServer = async (method, url, data, token) => {
  try {
    const config = {
      method,
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Authorization': token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    };

    const res = await fetch(url, config);

    if (!res.ok) {
      const err = await res.json();
      err.status = res.status;
      throw err;
    }

    if (res.status === 204) {
      return {};
    }

    return await res.json();
  }
  catch (err) {
    handleError(err);
  }
};

export const sendData = (url, data, token) => {
  if (Object.keys(data).length === 0) {
    throw new Error('Expecting data');
  }

  return callServer('POST', url, data, token);
};

export const getData = (url, token) => {
  return callServer('GET', url, {}, token);
};

export const updateData = async (url, data, token) => {
  return await callServer('PUT', url, data, token);
};
