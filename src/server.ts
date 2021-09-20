import 'reflect-metadata';
import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import './database';
import './shared/container';

import swaggerFile from './swagger.json';

import { router } from './routes';
import { AppError } from './errors/AppError';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
