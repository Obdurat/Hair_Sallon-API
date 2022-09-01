import {
  ErrorRequestHandler, Response, Request,
} from 'express';

const ErrHndlr
: ErrorRequestHandler = (err, _req: Request, res: Response): Response => res
  .status(err.status).json({ message: err.message });

export default ErrHndlr;
