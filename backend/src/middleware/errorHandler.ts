import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { logger } from '../config/logger';
import { env } from '../config/env';

// Shape of every error response the API sends
interface ErrorResponse {
  status: 'error';
  message: string;
  code?: string;
  errors?: Record<string, string[]>;
  requestId?: string;
}

// Custom application error class — throw this from controllers/services
export class AppError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly code?: string,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void {
  const requestId = req.requestId;

  // ── Zod validation errors ───────────────────────────────────
  if (err instanceof ZodError) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of err.issues) {
      const path = issue.path.join('.') || '_root';
      fieldErrors[path] = fieldErrors[path] ?? [];
      fieldErrors[path].push(issue.message);
    }
    res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      code: 'VALIDATION_ERROR',
      errors: fieldErrors,
      requestId,
    } satisfies ErrorResponse);
    return;
  }

  // ── Known application errors ───────────────────────────────
  if (err instanceof AppError) {
    logger.warn({ requestId, code: err.code, statusCode: err.statusCode }, err.message);
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      code: err.code,
      requestId,
    } satisfies ErrorResponse);
    return;
  }

  // ── Unknown / unexpected errors ────────────────────────────
  logger.error({ err, requestId }, 'Unhandled error');

  res.status(500).json({
    status: 'error',
    message: 'An unexpected error occurred',
    code: 'INTERNAL_ERROR',
    // Never leak stack traces to the client in production
    ...(env.NODE_ENV !== 'production' && err instanceof Error
      ? { stack: err.stack }
      : {}),
    requestId,
  } satisfies ErrorResponse);
}
