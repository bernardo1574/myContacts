import { Router } from 'express';
import multer from 'multer';
import { EnsureAuthenticated } from '../middlewares/EnsureAuthenticated';
import { CreateClientController } from '../modules/ClientVarejao/useCases/createClient/CreateClientController';
import { DeleteClientController } from '../modules/ClientVarejao/useCases/DeleteClient/DeleteClientController';
import { UpdateClientController } from '../modules/ClientVarejao/useCases/UpdateClient/UpdateCLientController';
import { ListClientController } from '../modules/ClientVarejao/useCases/listClient/ListClientController';
import { ImportClientController } from '../modules/ClientVarejao/useCases/ImportClient/ImportClientController';

const upload = multer({
  storage: multer.memoryStorage(),
});

const clientVarejaoRoutes = Router();

const createClientController = new CreateClientController();
const updateClientController = new UpdateClientController();
const listClientController = new ListClientController();
const deleteClientController = new DeleteClientController();
const importClientController = new ImportClientController();

clientVarejaoRoutes.post(
  '/',
  EnsureAuthenticated,
  createClientController.handle,
);
clientVarejaoRoutes.put(
  '/:id',
  EnsureAuthenticated,
  updateClientController.handle,
);
clientVarejaoRoutes.get('/', EnsureAuthenticated, listClientController.handle);
clientVarejaoRoutes.delete(
  '/:id',
  EnsureAuthenticated,
  deleteClientController.handle,
);
clientVarejaoRoutes.post(
  '/import',
  EnsureAuthenticated,
  upload.single('file'),
  importClientController.handle,
);

export { clientVarejaoRoutes };
