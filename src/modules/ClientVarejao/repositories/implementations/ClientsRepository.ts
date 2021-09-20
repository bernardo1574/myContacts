import { Repository, getRepository, getConnection } from 'typeorm';
import { Client } from '../../entities/Client';
import { IClientsRepository, ICreateClientDTO } from '../IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async findByCellphone(cellphone: string): Promise<Client> {
    const client = await this.repository.findOne({ cellphone });
    return client;
  }
  async list(): Promise<Client[]> {
    const clients = await this.repository.find();
    return clients;
  }
  async createMultiple(contacts: Client[]): Promise<void> {
    const clients = this.repository.create(contacts);

    await this.repository.save(clients);
  }
  async create({ name, cellphone }: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({ name, cellphone });

    await this.repository.save(client);
  }
  async update({ name, cellphone, id }: ICreateClientDTO): Promise<void> {
    await this.repository.update({ id }, { name, cellphone });
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
export { ClientsRepository };
