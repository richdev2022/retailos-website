# RetailOS — Website

Marketing landing page for RetailOS, a multi-tenant retail inventory, POS and business management SaaS.

## Tech stack
- Vite + React 18 + TypeScript
- TailwindCSS
- lucide-react icons
- react-router-dom (for any sub-pages)

## Quick start
```bash
npm install
cp .env.example .env   # set VITE_WEBAPP_URL to your web app
npm run dev            # http://localhost:3000
npm run build
```

## Environment
| Variable | Description | Default |
| --- | --- | --- |
| `VITE_WEBAPP_URL` | Web app URL (Login / Get Started redirects here) | `https://app.retailos.com` |
| `VITE_API_URL` | API URL (optional) | `https://api.retailos.com` |

## Connect to the web app
The "Login" and "Get Started" buttons in the navbar and hero redirect to `${VITE_WEBAPP_URL}/login` and `${VITE_WEBAPP_URL}/register` respectively. Set `VITE_WEBAPP_URL` to your deployed web app.

## Docker
```bash
docker build -t retailos-website .
docker run -p 3000:80 retailos-website
```

## Deploy
Static SPA — deploy `dist/` to Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, or Nginx.
