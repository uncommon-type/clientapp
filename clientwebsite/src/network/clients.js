import { endpoints } from '@helpers/constants';
import { getData, updateData } from './network';

export const getClients = async (token) => {
  return await getData(endpoints.clients.list, token);
};

export const updateClient = async (clientToUpdate, token) => {
  return await updateData(endpoints.clients.list, clientToUpdate, token);
};
