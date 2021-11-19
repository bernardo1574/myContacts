import { container } from 'tsyringe';
import { Response, Request } from 'express';
import { UpdateClientUseCase } from './UpdateClientUseCase';

class UpdateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cellphone } = req.body;
    const { id } = req.params;
    const updateClientUseCase = container.resolve(UpdateClientUseCase);
    await updateClientUseCase.execute({ cellphone, id, name });

    return res.status(200).send();
  }
}
export { UpdateClientController };
