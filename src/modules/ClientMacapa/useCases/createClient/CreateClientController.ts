import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}
  handle(req: Request, res: Response): Response {
    const { name, cellphone } = req.body;
    this.createClientUseCase.execute({ name, cellphone });
    return res.status(201).send();
  }
}

export { CreateClientController };
