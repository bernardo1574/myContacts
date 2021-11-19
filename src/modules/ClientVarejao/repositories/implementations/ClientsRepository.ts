import { Repository, getRepository } from 'typeorm';
import { ClientVarejao } from '../../entities/ClientVarejao';
import { IClientsRepository, ICreateClientDTO } from '../IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private repository: Repository<ClientVarejao>;

  constructor() {
    this.repository = getRepository(ClientVarejao);
  }

  async findByCellphone(cellphone: string): Promise<ClientVarejao> {
    const client = await this.repository.findOne({ cellphone });
    return client;
  }
  async list(): Promise<ClientVarejao[]> {
    const clients = await this.repository.find();
    return clients;
  }
  async createMultiple(contacts: ClientVarejao[]): Promise<void> {
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
