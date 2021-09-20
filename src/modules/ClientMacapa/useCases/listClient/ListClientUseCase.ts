import { Client } from '../../entities/Client';
import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

class ListClientUseCase {
  constructor(private clientRepository: ClientsRepository) {}

  execute(): Client[] {
    return this.clientRepository.list();
  }
}
export { ListClientUseCase };
