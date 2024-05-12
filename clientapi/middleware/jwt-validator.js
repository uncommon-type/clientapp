import jwt from 'jsonwebtoken';

import { AuthenticationError } from '../config/problem-types.js';

export const secretKey = process.env.SECRET_KEY;

export const validateJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new AuthenticationError();
        }

        let userId;

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                throw new AuthenticationError();
            }

            userId = decoded.userId
        });

        req.userId = userId;
        next();
    } catch (err) {
        next(err);
    }
};
