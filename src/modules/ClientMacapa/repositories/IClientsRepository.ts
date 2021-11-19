import { ClientMacapa } from '../entities/ClientMacapa';

interface ICreateClientDTO {
  id?: string;
  name: string;
  cellphone: string;
}
interface IClientsRepository {
  findByCellphone(cellphone: string): Promise<ClientMacapa>;
  maskPhone(cellphone: string): string;
  list(): Promise<ClientMacapa[]>;
  create({ name, cellphone }: ICreateClientDTO): Promise<void>;
  update({ name, cellphone, id }: ICreateClientDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
export { IClientsRepository, ICreateClientDTO };
