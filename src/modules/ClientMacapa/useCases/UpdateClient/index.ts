import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { UpdateClientController } from './UpdateCLientController';
import { UpdateClientUseCase } from './UpdateClientUseCase';

const clientsRepository = ClientsRepository.getInstance();
const updateClientUseCase = new UpdateClientUseCase(clientsRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };
