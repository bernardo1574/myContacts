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
    @inject('ClientsRepositoryMacapa')
    private clientRepository: ClientsRepository,
  ) { }

  async execute(file: Express.Multer.File): Promise<void> {
    const jsonParser: IJsonParser = JSON.parse(file.buffer.toString());
    const contacts = jsonParser.contacts.map(contact => {
      return {
        name: contact.name.toUpperCase(),
        cellphone: this.clientRepository.maskPhone(contact.cellphone),
      };
    });
    await this.clientRepository.createMultiple(contacts);
  }
}
export { ImportClientUseCase };
