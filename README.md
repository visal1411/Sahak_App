# SAHAK Platform

> **សហការ** — Peer-to-Peer Learning & Mentorship for Cambodia

SAHAK connects high school students (Grades 10–12) with university student mentors for affordable tutoring, quick-help requests, and career/scholarship guidance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, TypeScript, Tailwind CSS, MUI, Framer Motion |
| Backend | Express.js, TypeScript, Zod, Prisma |
| Database | PostgreSQL 16 |
| Cache | Redis 7 |
| Infrastructure | Docker Compose |

---

## Quick Start

### 1. Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
- Git

### 2. Clone & configure environment
```bash
git clone <repo-url>
cd sahak-app

# Copy the example env file and fill in your values
cp .env.example .env
```

Open `.env` and at minimum update:
- `JWT_ACCESS_SECRET` — run `openssl rand -base64 64` to generate
- `JWT_REFRESH_SECRET` — run `openssl rand -base64 64` to generate
- `SMTP_USER` / `SMTP_PASS` — get free dev credentials at https://ethereal.email/create

### 3. Start everything
```bash
docker compose up --build
```

Wait for all four containers to be healthy. You should see:
- ✅ `sahak_db` — PostgreSQL running
- ✅ `sahak_redis` — Redis running
- ✅ `sahak_backend` — Express API running on port 4000
- ✅ `sahak_frontend` — Next.js running on port 3000

### 4. Open the app
| URL | What |
|---|---|
| http://localhost:3000 | Frontend (SAHAK web app) |
| http://localhost:4000/health | Backend health check |

---

## Development (without Docker)

If you want faster iteration without Docker, run services locally:

### Backend
```bash
cd backend
cp .env.example .env       # edit DATABASE_URL and REDIS_URL to point to local services
npm install
npm run dev                # starts with tsx watch (hot reload)
```

### Frontend
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev                # Next.js dev server with Turbopack
```

---

## Database

### Run migrations
```bash
# Inside Docker:
docker compose exec backend npx prisma migrate deploy

# Locally:
cd backend && npx prisma migrate deploy
```

### Seed with sample data
```bash
# Inside Docker:
docker compose exec backend npm run db:seed

# Locally:
cd backend && npm run db:seed
```

### Prisma Studio (visual DB browser)
```bash
cd backend && npm run db:studio
# Opens at http://localhost:5555
```

---

## Project Structure

```
sahak-app/
├── docker-compose.yml       ← Start everything here
├── .env.example             ← Copy to .env and fill in your values
├── README.md
├── frontend/                ← Next.js 15 (App Router, TypeScript)
│   ├── Dockerfile
│   ├── src/
│   │   ├── app/             ← Pages (App Router)
│   │   ├── components/      ← UI components
│   │   ├── lib/             ← API client, realtime polling abstraction
│   │   ├── hooks/           ← Custom React hooks
│   │   ├── store/           ← Zustand state
│   │   └── i18n/            ← English + Khmer translations
│   └── ...
└── backend/                 ← Express.js (TypeScript)
    ├── Dockerfile
    ├── prisma/
    │   ├── schema.prisma    ← Database schema
    │   └── seed.ts          ← Sample data
    └── src/
        ├── config/          ← Logger, env validation
        ├── middleware/      ← Auth, CSRF, rate-limit, error handler
        └── features/        ← Auth, mentors, bookings, payments…
```

---

## Build Phases

| # | Phase | Status |
|---|---|---|
| 1 | Planning & architecture | ✅ Done |
| 2 | Infrastructure (Docker, placeholder apps) | ✅ Done |
| 3 | Auth (register, login, JWT, password reset) | 🔄 In Progress |
| 4 | Profiles & mentor discovery | ⏳ Upcoming |
| 5 | Personality quiz & compatibility score | ⏳ Upcoming |
| 6 | Booking flow | ⏳ Upcoming |
| 7 | Notifications & chat | ⏳ Upcoming |
| 8 | Payments & commission | ⏳ Upcoming |
| 9 | Reviews & ratings | ⏳ Upcoming |
| 10 | Admin panel | ⏳ Upcoming |
| 11 | Security, logging & polish | ⏳ Upcoming |

---

## Environment Variables

See `.env.example` for the full list with descriptions. Critical ones:

| Variable | Description |
|---|---|
| `JWT_ACCESS_SECRET` | Secret for signing access tokens (min 32 chars) |
| `JWT_REFRESH_SECRET` | Secret for signing refresh tokens (min 32 chars) |
| `POSTGRES_PASSWORD` | Database password |
| `COMMISSION_RATE` | Platform commission as decimal (default 0.15 = 15%) |
| `SMTP_*` | Email credentials for password reset emails |

---

## Useful Commands

```bash
# View logs for a service
docker compose logs -f backend
docker compose logs -f frontend

# Stop all services
docker compose down

# Stop and delete all data (caution — wipes the database)
docker compose down -v

# Rebuild a single service
docker compose up --build backend
```
