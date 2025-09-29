import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

import { errors } from 'celebrate';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(logger);
app.use(
  express.json({
    type: ['application/json', 'application/vnd.api+json'],
    limit: '100kb',
  }),
);
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello user' });
});

app.use(authRoutes);
app.use(notesRoutes);

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
