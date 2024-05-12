import { getClientsByUserId, updateClientStatus } from '../model.js';
import { NotFoundError } from '../config/problem-types.js';

export const getUserClients = async (req, res, next) => {
    const userId = req.userId;

    let clients;
    try {
        clients = await getClientsByUserId(userId);

        if (!clients) {
            clients = [];
        }

        res.json(clients)
    } catch (err) {
        next(err);
    }
}

export const updateClient = async (req, res, next) => {
    try {
        const { body: client } = req;

        const update = await updateClientStatus(client);

        if (update === 'fail') {
            throw new NotFoundError('No record to update', 'client');
        }

        res.json(update);
    } catch (err) {
        next(err);
    }
}