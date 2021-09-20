import { container } from 'tsyringe';
import { IClientsRepository as IClientsRepositoryVarejao } from '../../modules/ClientVarejao/repositories/IClientsRepository';
import { ClientsRepository as ClientsRepositoryVarejao } from '../../modules/ClientVarejao/repositories/implementations/ClientsRepository';

container.registerSingleton<IClientsRepositoryVarejao>(
  'ClientsRepositoryVarejao',
  ClientsRepositoryVarejao,
);
