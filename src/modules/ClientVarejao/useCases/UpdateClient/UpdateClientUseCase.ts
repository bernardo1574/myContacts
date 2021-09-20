import { injectable, inject } from 'tsyringe';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  name: string;
  cellphone: string;
  id: string;
}
@injectable()
class UpdateClientUseCase {
  constructor(
    @inject('ClientsRepositoryVarejao')
    private clientsRepository: IClientsRepository,
  ) {}
  async execute({ cellphone, id, name }: IRequest): Promise<void> {
    await this.clientsRepository.update({ cellphone, name, id });
  }
}

export { UpdateClientUseCase };
