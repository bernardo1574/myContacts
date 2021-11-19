import { inject, injectable } from 'tsyringe';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  id: string;
}
@injectable()
class DeleteClientUseCase {
  constructor(
    @inject('ClientsRepositoryMacapa')
    private clientRepository: IClientsRepository,
  ) { }

  async execute({ id }: IRequest): Promise<void> {
    await this.clientRepository.delete(id);
  }
}

export { DeleteClientUseCase };
