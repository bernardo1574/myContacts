import { ClientsRepository } from '../../repositories/implementations/ClientsRepository';

interface IJsonContacts {
  name: string;
  cellphone: string;
}

interface IJsonParser {
  contacts: IJsonContacts[];
}
class ImportClientUseCase {
  constructor(private clientRepository: ClientsRepository) {}

  execute(file: Express.Multer.File): void {
    const jsonParser: IJsonParser = JSON.parse(file.buffer.toString());
    jsonParser.contacts.forEach(contact => {
      const { name, cellphone } = contact;
      const client = {
        name: name.toUpperCase(),
        cellphone: this.clientRepository.maskPhone(cellphone),
      };
      if (!this.clientRepository.findByCellphone(client.cellphone)) {
        this.clientRepository.create(client);
      }
    });
  }
}
export { ImportClientUseCase };
