import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cellphone } = req.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    createClientUseCase.execute({ name, cellphone });

    return res.status(201).send();
  }
}

export { CreateClientController };
