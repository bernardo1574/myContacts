import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListClientUseCase } from './ListClientUseCase';

class ListClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listClientUseCase = container.resolve(ListClientUseCase);
    const all = await listClientUseCase.execute();
    return res.json(all);
  }
}
export { ListClientController };
