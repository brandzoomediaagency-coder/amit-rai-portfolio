# Amit Rai / Brandzoo Media Portfolio

Premium Next.js portfolio and CMS-ready authority platform for Amit Rai, Founder & CEO of Brandzoo Media.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion for React
- Three.js + React Three Fiber
- Recharts
- Supabase-ready CMS schema

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Supabase Setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add Supabase URL, anon key, and service role key.
4. Run the migration in `supabase/migrations/0001_brandzoo_cms.sql`.
5. Add your admin user ID to `admin_users`.

Until Supabase is connected, the site runs in demo mode with seed content and validated contact form behavior.
