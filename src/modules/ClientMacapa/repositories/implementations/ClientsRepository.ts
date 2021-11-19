import { Repository, getRepository } from 'typeorm';
import { ClientMacapa } from '../../entities/ClientMacapa';
import { IClientsRepository, ICreateClientDTO } from '../IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private repository: Repository<ClientMacapa>;

  constructor() {
    this.repository = getRepository(ClientMacapa);
  }
  async list(): Promise<ClientMacapa[]> {
    const clients = await this.repository.find();
    return clients;
  }
  maskPhone(cellphone: string): string {
    const value = cellphone
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,2})(\d{0,5})(\d{0,4})/);
    return `+${value[1]} (${value[2]}) ${value[3]}-${value[4]}`;
  }

  async findByCellphone(cellphone: string): Promise<ClientMacapa> {
    const client = await this.repository.findOne({ where: { cellphone } });
    return client;
  }

  async createMultiple(contacts: ClientMacapa[]): Promise<void> {
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
