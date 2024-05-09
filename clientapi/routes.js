import express from 'express';

import * as clientService from './service/client.js';
import * as userService from './service/user.js';

export const router = express.Router();

router.post('/login', userService.login);
router.get('/clients', clientService.getUserClients);
router.put('/clients', clientService.updateClient);
