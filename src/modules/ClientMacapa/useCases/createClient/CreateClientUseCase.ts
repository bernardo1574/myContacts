import { AppError } from '../../../../errors/AppError';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  name: string;
  cellphone: string;
}

class CreateClientUseCase {
  constructor(private clientRepository: IClientsRepository) {}

  execute({ name, cellphone }: IRequest): void {
    const client = {
      name: name.toUpperCase(),
      cellphone: this.clientRepository.maskPhone(cellphone),
    };

    if (this.clientRepository.findByCellphone(client.cellphone)) {
      throw new AppError(`Cellphone already exists`);
    }

    this.clientRepository.create(client);
  }
}

export { CreateClientUseCase };
