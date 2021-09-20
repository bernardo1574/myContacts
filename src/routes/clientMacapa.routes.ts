import { Router } from 'express';
import multer from 'multer';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { createClientController } from '../modules/ClientMacapa/useCases/createClient';
import { deleteCLientController } from '../modules/ClientMacapa/useCases/DeleteClient';
import { updateClientController } from '../modules/ClientMacapa/useCases/UpdateClient';
import { listClientController } from '../modules/ClientMacapa/useCases/listClient';
import { importClientController } from '../modules/ClientMacapa/useCases/ImportClient';

const upload = multer({
  storage: multer.memoryStorage(),
});

const clientMacapaRoutes = Router();

clientMacapaRoutes.post('/', EnsureAuthenticated, (request, response) =>
  createClientController.handle(request, response),
);

clientMacapaRoutes.put('/:id', EnsureAuthenticated, (request, response) =>
  updateClientController.handle(request, response),
);

clientMacapaRoutes.get('/', EnsureAuthenticated, (request, response) =>
  listClientController.handle(request, response),
);

clientMacapaRoutes.delete('/:id', EnsureAuthenticated, (request, response) =>
  deleteCLientController.handle(request, response),
);

clientMacapaRoutes.post(
  '/import',
  EnsureAuthenticated,
  upload.single('file'),
  (request, response) => importClientController.handle(request, response),
);

export { clientMacapaRoutes };
