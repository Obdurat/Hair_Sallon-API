import {
  ErrorRequestHandler, Response, Request, NextFunction,
} from 'express';

const ErrorHandler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
: ErrorRequestHandler = (err, _req: Request, res: Response, _next: NextFunction): Response => res
  .status(err.status).json({ error: err.message });

export default ErrorHandler;
