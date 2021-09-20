import { response, Router } from 'express';
import { sign } from 'jsonwebtoken';
import { v4 as uuidV4 } from 'uuid';
import { clientMacapaRoutes } from './clientMacapa.routes';
import { clientVarejaoRoutes } from './clientVarejao.routes';

const router = Router();

/*
  Como a idéia do projeto não é ter uma verificação de usuário cadastrado no banco, fiz a parte de auteticação no routes mesmo
*/
router.get('/login', (req, res) => {
  const token = sign({}, '3b805f339b96c8e1457d4a4496a3a79d', {
    subject: uuidV4(),
    expiresIn: '1d',
  });
  const tokenReturn = {
    token,
    user: {
      name: 'teste',
      email: 'teste@example.com',
    },
  };
  return res.status(200).json(tokenReturn);
});

router.use('/varejao', clientVarejaoRoutes);
router.use('/macapa', clientMacapaRoutes);

export { router };
