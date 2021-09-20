import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';
import { ListClientController } from './ListClientController';
import { ListClientUseCase } from './ListClientUseCase';

const clientRepository = ClientsRepository.getInstance();
const listClientUseCase = new ListClientUseCase(clientRepository);
const listClientController = new ListClientController(listClientUseCase);

export { listClientController };
