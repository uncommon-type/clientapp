import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';

import { secretKey } from '../middleware/jwt-validator.js';
import { getUserByLogin } from '../model.js';
import { LoginError } from '../config/problem-types.js';

const salt = process.env.SALT;

export const login = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const user = await getUserByLogin(login);

    if (user) {
      const hash = createHash('sha256')
        .update(password + salt)
        .digest('hex');

      if (hash === user.password) {
        const token = jwt.sign(
          { userId: user.id },
          secretKey,
          { expiresIn: '1h' },
        );

        return res.json({ token, userName: user.fullName });
      }
    }
    throw new LoginError();
  }
  catch (err) {
    next(err);
  }
};
