import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

export function EnsureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const dados = verify(token, '3b805f339b96c8e1457d4a4496a3a79d');
    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
