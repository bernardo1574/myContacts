import { inject, injectable } from 'tsyringe';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  id: string;
}
@injectable()
class DeleteClientUseCase {
  constructor(
    @inject('ClientsRepositoryVarejao')
    private clientRepository: IClientsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    this.clientRepository.delete(id);
  }
}

export { DeleteClientUseCase };
