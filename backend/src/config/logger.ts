import pino from 'pino';
import { env } from './env';

// Custom levels — pino's default highest is 'fatal' (60).
// We add 'critical' above it at 70 to satisfy the BRD logging requirement.
const customLevels = { critical: 70 } as const;

// pino with custom levels returns a typed logger that includes those levels
const _logger = pino({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
  customLevels,
  useOnlyCustomLevels: false, // keep built-in levels too
  transport:
    env.NODE_ENV !== 'production'
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        }
      : undefined, // JSON in production
  base: { env: env.NODE_ENV },
});

// Export with explicit type that includes the 'critical' custom level
export const logger = _logger as typeof _logger & {
  critical: pino.LogFn;
};
