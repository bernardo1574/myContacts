import { inject, injectable } from 'tsyringe';
import { ClientMacapa } from '../../entities/ClientMacapa';
import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

@injectable()
class ListClientUseCase {
  constructor(
    @inject('ClientsRepositoryMacapa')
    private clientRepository: ClientsRepository,
  ) { }

  async execute(): Promise<ClientMacapa[]> {
    const allCLients = await this.clientRepository.list();
    return allCLients;
  }
}
export { ListClientUseCase };
