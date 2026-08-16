# ─────────────────────────────────────────────────────────────
# Stage 1 — deps
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ─────────────────────────────────────────────────────────────
# Stage 2 — builder
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env vars (public ones only — NEXT_PUBLIC_*)
ARG NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000

ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}

RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3 — runner (Next.js standalone output)
# ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Non-root user
RUN addgroup -S sahak && adduser -S sahak -G sahak

# Copy standalone Next.js build
COPY --from=builder --chown=sahak:sahak /app/.next/standalone ./
COPY --from=builder --chown=sahak:sahak /app/.next/static ./.next/static
COPY --from=builder --chown=sahak:sahak /app/public ./public

USER sahak

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
