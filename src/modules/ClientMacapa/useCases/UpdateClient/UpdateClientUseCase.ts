import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  name: string;
  cellphone: string;
  id: string;
}
class UpdateClientUseCase {
  constructor(private clientsRepository: IClientsRepository) {}
  execute({ cellphone, id, name }: IRequest): void {
    const client = {
      cellphone: this.clientsRepository.maskPhone(cellphone),
      name: name.toUpperCase(),
      id,
    };
    this.clientsRepository.update(client);
  }
}

export { UpdateClientUseCase };
