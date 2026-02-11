# Futuristic Portfolio Revamp

This codebase is a full Next.js portfolio experience with preserved dark aesthetic, accent neon/red theme, globe-first hero, and upgraded 3D/motion interactions.

## Stack

- Next.js 13 (Pages Router)
- React 18
- Tailwind CSS
- Framer Motion
- Swiper
- react-globe.gl

## Quick Start (Local)

1. Install Node.js 18 or newer.
2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

macOS/Linux:

```bash
cp .env.example .env.local
```

4. Fill `.env.local` values:

- `NEXT_PUBLIC_SITE_URL` (your local or production URL)
- `NEXT_PUBLIC_MEASUREMENT_ID` (optional, for Google Analytics)
- `EMAIL_USER` and `EMAIL_PASS` (required only if you want the contact form email API to send mail)

5. Run development server:

```bash
npm run dev
```

6. Open:

- http://localhost:3000

## Build and Production Check

```bash
npm run lint
npm run build
npm run start
```

## Pages

- `/` Home
- `/about`
- `/services`
- `/designs`
- `/testimonials`
- `/contact`

## Contact API Notes

`pages/api/contact.js` sends mail through Zoho SMTP.

If `EMAIL_USER` / `EMAIL_PASS` are missing, UI still loads but sending messages will fail.

## Performance Highlights in This Revamp

- Reduced duplicate/legacy runtime work in app shell and analytics setup
- Streamlined Tailwind/global CSS configuration and removed CSS nesting issues
- Improved globe lifecycle and responsive render settings
- Optimized transition and particle layers for lower overhead
- Reduced shared first-load JavaScript in production build

## Troubleshooting

- If install fails due lock sync mismatch, run `npm install`.
- If browserslist warning appears, run:

```bash
npx update-browserslist-db@latest
```

## License

MIT
