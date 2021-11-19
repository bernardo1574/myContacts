import { inject, injectable } from 'tsyringe';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  name: string;
  cellphone: string;
  id: string;
}
@injectable()
class UpdateClientUseCase {
  constructor(
    @inject('ClientsRepositoryMacapa')
    private clientsRepository: IClientsRepository,
  ) { }
  async execute({ cellphone, id, name }: IRequest): Promise<void> {
    const client = {
      cellphone: this.clientsRepository.maskPhone(cellphone),
      name: name.toUpperCase(),
      id,
    };
    await this.clientsRepository.update(client);
  }
}

export { UpdateClientUseCase };
