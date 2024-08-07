import express from 'express';

import { validateJWT } from './middleware/jwt-validator.js';
import { validateSchema } from './middleware/json-validator.js';
import { loginSchema, clientSchema } from './schema.js';
import * as clientService from './service/client.js';
import * as userService from './service/user.js';

export const router = express.Router();

router.post('/login', validateSchema({ body: loginSchema }), userService.login);
router.get('/clients', validateJWT, clientService.getUserClients);
router.put('/clients', validateJWT, validateSchema({ body: clientSchema }), clientService.updateClient);
