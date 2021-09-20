import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { CreateClientController } from './CreateClientController';
import { CreateClientUseCase } from './CreateClientUseCase';

const clientRepository = ClientsRepository.getInstance();
const createClientUseCase = new CreateClientUseCase(clientRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
