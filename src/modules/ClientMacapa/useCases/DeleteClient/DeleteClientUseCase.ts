import { IClientsRepository } from '../../repositories/IClientsRepository';

interface IRequest {
  id: string;
}

class DeleteClientUseCase {
  constructor(private clientRepository: IClientsRepository) {}

  execute({ id }: IRequest): void {
    this.clientRepository.delete(id);
  }
}

export { DeleteClientUseCase };
