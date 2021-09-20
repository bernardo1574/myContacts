import { Request, Response } from 'express';
import { ImportClientUseCase } from './ImportClientUseCase';

class ImportClientController {
  constructor(private importClientUseCase: ImportClientUseCase) {}
  handle(req: Request, res: Response): Response {
    const { file } = req;

    this.importClientUseCase.execute(file);

    return res.status(201).send();
  }
}
export { ImportClientController };
