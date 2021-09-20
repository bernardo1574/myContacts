import { Client } from '../../entities/Client';

import { IClientsRepository, ICreateClientDTO } from '../IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private clients: Client[];

  private static INSTANCE: ClientsRepository;

  private constructor() {
    this.clients = [];
  }
  maskPhone(cellphone: string): string {
    const value = cellphone
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,2})(\d{0,5})(\d{0,4})/);
    return `+${value[1]} (${value[2]}) ${value[3]}-${value[4]}`;
  }

  public static getInstance(): ClientsRepository {
    if (!ClientsRepository.INSTANCE) {
      ClientsRepository.INSTANCE = new ClientsRepository();
    }
    return ClientsRepository.INSTANCE;
  }

  findByCellphone(cellphone: string): Client {
    return this.clients.find(c => c.cellphone === cellphone);
  }
  list(): Client[] {
    return this.clients;
  }
  create({ name, cellphone }: ICreateClientDTO): void {
    const clientVarejao: Client = new Client();
    Object.assign(clientVarejao, {
      name,
      cellphone,
      created_at: new Date(),
    });

    this.clients.push(clientVarejao);
  }
  update({ name, cellphone, id }: ICreateClientDTO): void {
    const index = this.clients.findIndex(index => index.id === id);

    this.clients[index].name = name;
    this.clients[index].cellphone = cellphone;
  }
  delete(id: string): void {
    const index = this.clients.findIndex(index => index.id === id);
    this.clients.splice(index, 1);
  }
}
export { ClientsRepository };
