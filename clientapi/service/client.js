import { getClientsByUserId } from '../model.js';

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
    res.json({ message: 'ok' });
}