# ─────────────────────────────────────────────────────────────
# Stage 1 — deps: install production + dev dependencies
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
# Install openssl for Prisma compatibility on Alpine
RUN apk add --no-cache openssl
COPY package*.json ./
RUN npm ci

# ─────────────────────────────────────────────────────────────
# Stage 2 — builder: compile TypeScript
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate Prisma client (skips gracefully if no models are defined yet)
RUN npx prisma generate || true
RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3 — runner: lean production image
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl

ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output and Prisma client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy Prisma schema (needed for migrate deploy at startup)
COPY prisma ./prisma

# Non-root user for security
RUN addgroup -S sahak && adduser -S sahak -G sahak
USER sahak

EXPOSE 4000

# Run migrations then start the server
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]
