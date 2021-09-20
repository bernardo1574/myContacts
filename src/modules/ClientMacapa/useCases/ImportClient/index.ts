import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { ImportClientController } from './ImportClientController';
import { ImportClientUseCase } from './ImportClientUseCase';

const clientRepository = ClientsRepository.getInstance();
const importClientUseCase = new ImportClientUseCase(clientRepository);
const importClientController = new ImportClientController(importClientUseCase);

export { importClientController };
