import { inject, injectable } from 'tsyringe';
import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

interface IJsonContacts {
  name: string;
  cellphone: string;
}

interface IJsonParser {
  contacts: IJsonContacts[];
}

@injectable()
class ImportClientUseCase {
  constructor(
    @inject('ClientsRepositoryVarejao')
    private clientRepository: ClientsRepository,
  ) {}
  async execute(file: Express.Multer.File): Promise<void> {
    const jsonParser: IJsonParser = JSON.parse(file.buffer.toString());
    await this.clientRepository.createMultiple(jsonParser.contacts);
  }
}
export { ImportClientUseCase };
