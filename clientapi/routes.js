import express from 'express';

import { validateJWT } from './middleware/jwt-validator.js';
import * as clientService from './service/client.js';
import * as userService from './service/user.js';

export const router = express.Router();

router.post('/login', userService.login);
router.get('/clients', validateJWT, clientService.getUserClients);
router.put('/clients', validateJWT, clientService.updateClient);