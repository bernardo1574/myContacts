import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

interface IPayload {
  sub: string;
}
async function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [_, token] = authHeader.split(' ');

  try {
    verify(token, '3b805f339b96c8e1457d4a4496a3a79d') as IPayload;
    next();
  } catch (error) {
    throw new AppError('Invalid Token!', 401);
  }
}

export { EnsureAuthenticated };
