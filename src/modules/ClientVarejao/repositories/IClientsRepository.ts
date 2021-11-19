import { Client } from '../entities/ClientVarejao';

interface ICreateClientDTO {
  id?: string;
  name: string;
  cellphone: string;
}
interface IClientsRepository {
  findByCellphone(cellphone: string): Promise<Client>;
  list(): Promise<Client[]>;
  create({ name, cellphone }: ICreateClientDTO): Promise<void>;
  createMultiple(contacts: ICreateClientDTO[]): Promise<void>;
  update({ name, cellphone, id }: ICreateClientDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
export { IClientsRepository, ICreateClientDTO };
