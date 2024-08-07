import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import { router } from './routes.js';
import { notFound } from './middleware/error.js';
import { problemTypes } from './config/problem-types.js';
import { configureProblemDetailsResponse } from './middleware/problem-details-response.js';

const corsOptions = {
  origin: process.env.ORIGIN,
};

const app = express();
const port = 3000;

app.use(cors(corsOptions));

const problemDetailsResponseMiddleware
    = configureProblemDetailsResponse(problemTypes);

app.use(logger('dev'));
app.use(express.json());
app.use(router);
app.use(notFound);
app.use(problemDetailsResponseMiddleware);

app.listen(port, () => console.log(`App listening on port ${port}`));
