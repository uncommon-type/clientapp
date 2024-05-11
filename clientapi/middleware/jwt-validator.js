import jwt from 'jsonwebtoken';

export const secretKey = process.env.SECRET_KEY;

export const validateJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            throw new Error('Authentication error');
        }

        let userId;

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                throw new Error('Authentication error');
            }

            userId = decoded.userId
        });

        req.userId = userId;
        next();
    } catch (err) {
        next(err);
    }
};
