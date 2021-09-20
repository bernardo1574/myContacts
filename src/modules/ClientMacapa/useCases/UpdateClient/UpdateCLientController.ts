import { Response, Request } from 'express';
import { UpdateClientUseCase } from './UpdateClientUseCase';

class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, cellphone } = req.body;
    const { id } = req.params;

    this.updateClientUseCase.execute({ cellphone, id, name });

    return res.status(200).send();
  }
}
export { UpdateClientController };
