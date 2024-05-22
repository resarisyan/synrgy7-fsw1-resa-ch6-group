import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ResponseError } from '../handlers/response-error';
import { NotFoundError } from 'objection';

export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.errors,
    });
  } else if (error instanceof ResponseError) {
    res.status(error.status).json({
      success: false,
      message: error.message,
    });
  } else if (error instanceof NotFoundError) {
    res.status(404).json({
      success: false,
      message: 'Not found',
    });
  } else {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
