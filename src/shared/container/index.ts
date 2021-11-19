import { container } from 'tsyringe';
import { IClientsRepository as IClientsRepositoryVarejao } from '../../modules/ClientVarejao/repositories/IClientsRepository';
import { ClientsRepository as ClientsRepositoryVarejao } from '../../modules/ClientVarejao/repositories/implementations/ClientsRepository';

import { IClientsRepository as IClientsRepositoryMacapa } from '../../modules/ClientMacapa/repositories/IClientsRepository';
import { ClientsRepository as ClientsRepositoryMacapa } from '../../modules/ClientMacapa/repositories/implementations/ClientsRepository';

container.registerSingleton<IClientsRepositoryVarejao>(
  'ClientsRepositoryVarejao',
  ClientsRepositoryVarejao,
);

container.registerSingleton<IClientsRepositoryMacapa>(
  'ClientsRepositoryMacapa',
  ClientsRepositoryMacapa,
);
