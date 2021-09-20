import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { DeleteClientController } from './DeleteClientController';
import { DeleteClientUseCase } from './DeleteClientUseCase';

const clientRepository = ClientsRepository.getInstance();
const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
const deleteCLientController = new DeleteClientController(deleteClientUseCase);

export { deleteCLientController };
