import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  name: string;
  cellphone: string;
}
@injectable()
class CreateClientUseCase {
  constructor(
    @inject('ClientsRepositoryMacapa')
    private clientRepository: IClientsRepository,
  ) { }

  async execute({ name, cellphone }: IRequest): Promise<void> {
    const client = {
      name: name.toUpperCase(),
      cellphone: this.clientRepository.maskPhone(cellphone),
    };

    const clientExists = await this.clientRepository.findByCellphone(
      client.cellphone,
    );
    if (clientExists) {
      throw new AppError(`Cellphone already exists`);
    }
    this.clientRepository.create(client);
  }
}

export { CreateClientUseCase };
