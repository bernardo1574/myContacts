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
    @inject('ClientsRepositoryVarejao')
    private clientRepository: IClientsRepository,
  ) {}

  async execute({ name, cellphone }: IRequest): Promise<void> {
    const clientExists = await this.clientRepository.findByCellphone(cellphone);
    if (clientExists) {
      // throw new AppError(`Cellphone already exists`);
      return;
    }

    this.clientRepository.create({ name, cellphone });
  }
}

export { CreateClientUseCase };
