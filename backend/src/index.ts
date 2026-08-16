import { createApp } from './app';
import { env } from './config/env';
import { logger } from './config/logger';

const app = createApp();

const server = app.listen(env.PORT, () => {
  logger.info({ port: env.PORT, env: env.NODE_ENV }, 'SAHAK backend started');
});

// ── Graceful shutdown ──────────────────────────────────────────
function shutdown(signal: string) {
  logger.info({ signal }, 'Received shutdown signal, closing server…');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// ── Unhandled promise rejections ───────────────────────────────
process.on('unhandledRejection', (reason) => {
  logger.critical({ reason }, 'Unhandled promise rejection — shutting down');
  process.exit(1);
});
