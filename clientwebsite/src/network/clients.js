import { endpoints } from '@helpers/constants';
import { getData } from './network';

export const getClients = async (token) => {
    return await getData(endpoints.clients.list, token);
};