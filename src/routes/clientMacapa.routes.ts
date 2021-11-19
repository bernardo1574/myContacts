import { Router } from 'express';
import multer from 'multer';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { CreateClientController } from '../modules/ClientMacapa/useCases/createClient/CreateClientController';
import { DeleteClientController } from '../modules/ClientMacapa/useCases/DeleteClient/DeleteClientController';
import { UpdateClientController } from '../modules/ClientMacapa/useCases/UpdateClient/UpdateCLientController';
import { ListClientController } from '../modules/ClientMacapa/useCases/listClient/ListClientController';
import { ImportClientController } from '../modules/ClientMacapa/useCases/ImportClient/ImportClientController';

const upload = multer({
  storage: multer.memoryStorage(),
});
const createClientController = new CreateClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();
const listClientController = new ListClientController();
const importClientController = new ImportClientController();

const clientMacapaRoutes = Router();

clientMacapaRoutes.post(
  '/',
  EnsureAuthenticated,
  createClientController.handle,
);
clientMacapaRoutes.put(
  '/:id',
  EnsureAuthenticated,
  updateClientController.handle,
);
clientMacapaRoutes.get('/', EnsureAuthenticated, listClientController.handle);
clientMacapaRoutes.delete(
  '/:id',
  EnsureAuthenticated,
  deleteClientController.handle,
);
clientMacapaRoutes.post(
  '/import',
  EnsureAuthenticated,
  upload.single('file'),
  importClientController.handle,
);

export { clientMacapaRoutes };
