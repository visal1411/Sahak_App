import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './config/env';
import { requestId } from './middleware/requestId';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './config/logger';

export function createApp() {
  const app = express();

  // ── Security headers ─────────────────────────────────────────
  app.use(helmet());

  // ── CORS — only allow the known frontend origin ──────────────
  app.use(
    cors({
      origin: env.FRONTEND_URL,
      credentials: true, // allow cookies cross-origin
    }),
  );

  // ── Body parsing ─────────────────────────────────────────────
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // ── Correlation ID on every request ──────────────────────────
  app.use(requestId);

  // ── Request logging ───────────────────────────────────────────
  app.use((req: Request, res: Response, next) => {
    const start = Date.now();
    res.on('finish', () => {
      logger.info(
        {
          requestId: req.requestId,
          method: req.method,
          url: req.url,
          statusCode: res.statusCode,
          durationMs: Date.now() - start,
        },
        'HTTP request',
      );
    });
    next();
  });

  // ── Healthcheck ───────────────────────────────────────────────
  // Kept on the app directly (before /api/v1 prefix) for Docker healthchecks.
  app.get('/health', async (_req: Request, res: Response) => {
    // Will be expanded later to check DB + Redis connectivity.
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version ?? '0.0.1',
      uptime: process.uptime(),
    });
  });

  // ── API routes (to be added per phase) ────────────────────────
  // app.use('/api/v1', apiRouter);

  // ── 404 handler ───────────────────────────────────────────────
  app.use((_req: Request, res: Response) => {
    res.status(404).json({ status: 'error', message: 'Route not found' });
  });

  // ── Global error handler (must be last) ───────────────────────
  app.use(errorHandler);

  return app;
}
