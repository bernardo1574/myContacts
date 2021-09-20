import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportClientUseCase } from './ImportClientUseCase';

class ImportClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;
    const importClientUseCase = container.resolve(ImportClientUseCase);
    importClientUseCase.execute(file);

    return res.status(201).send();
  }
}
export { ImportClientController };
