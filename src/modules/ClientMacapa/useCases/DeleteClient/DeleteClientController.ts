import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';

class DeleteClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteClientUseCase = container.resolve(DeleteClientUseCase);
    await deleteClientUseCase.execute({ id });
    return res.status(201).send();
  }
}
export { DeleteClientController };
