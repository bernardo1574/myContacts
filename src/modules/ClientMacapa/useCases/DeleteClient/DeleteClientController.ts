import { Request, Response } from 'express';
import { DeleteClientUseCase } from './DeleteClientUseCase';

class DeleteClientController {
  constructor(private deleteClientUseCase: DeleteClientUseCase) {}
  handle(req: Request, res: Response): Response {
    const { id } = req.params;
    this.deleteClientUseCase.execute({ id });
    return res.status(201).send();
  }
}
export { DeleteClientController };
