import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

// Attach a unique correlation ID to every incoming request.
// The ID travels with all log lines for that request so you can
// trace a full user action across multiple log entries.
export function requestId(req: Request, res: Response, next: NextFunction): void {
  const id = (req.headers['x-request-id'] as string) || uuidv4();
  req.requestId = id;
  res.setHeader('x-request-id', id);
  next();
}

// Augment the Express Request type so TypeScript is happy everywhere
declare global {
  namespace Express {
    interface Request {
      requestId: string;
    }
  }
}
