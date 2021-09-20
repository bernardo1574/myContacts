import { inject, injectable } from 'tsyringe';
import { Client } from '../../entities/Client';
import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

@injectable()
class ListClientUseCase {
  constructor(
    @inject('ClientsRepositoryVarejao')
    private clientRepository: ClientsRepository,
  ) {}

  async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.list();
    return clients;
  }
}
export { ListClientUseCase };
