import { Client } from '../model/Client';

interface ICreateClientDTO {
  id?: string;
  name: string;
  cellphone: string;
}
interface IClientsRepository {
  findByCellphone(cellphone: string): Client;
  maskPhone(cellphone: string): string;
  list(): Client[];
  create({ name, cellphone }: ICreateClientDTO): void;
  update({ name, cellphone, id }: ICreateClientDTO): void;
  delete(id: string): void;
}
export { IClientsRepository, ICreateClientDTO };
