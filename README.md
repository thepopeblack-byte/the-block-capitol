# The Block Capitol

React + Vite website for The BlockCapitol: a coworking space, cohort hub, incubation centre, and startup support community in Kaduna, with a focus on AI, blockchain, and Web3.

Requires Node.js 22.12 or newer. The production container builds with Node 22 and serves static files through nginx.

## Local development

```bash
npm ci
npm run dev
```

## Production build test

```bash
npm run check
npm run preview
```

## Docker test locally

```bash
docker compose -f docker-compose.local.yml up -d --build
```

Open: http://localhost:3000

## Push source code to GitHub

```bash
git add .
git commit -m "Describe the website update"
git push origin main
```

## Build and push Docker image

The production Docker Hub repository is `popeblack/the-block-capitol`. Use a new versioned tag for each release.

```bash
docker login
docker build -t popeblack/the-block-capitol:YOUR_RELEASE_TAG .
docker push popeblack/the-block-capitol:YOUR_RELEASE_TAG
```

Then update `docker-compose.secretvm.yml` to use the same image name.

## SecretVM deployment

Recommended production path:

1. Build and push the Docker image to Docker Hub or GHCR.
2. Update `docker-compose.secretvm.yml` with the pushed image.
3. Update the existing `sapphire-tarsier` SecretVM (The Blockcapitol) with `docker-compose.secretvm.yml`, preserving filesystem persistence.
4. The production compose includes Traefik on ports `80` and `443` and routes HTTPS for `theblockcapitol.com`, `www.theblockcapitol.com`, and `sapphire-tarsier.vm.scrtlabs.com` to the app on container port `80`.
5. Preserve the `letsencrypt` volume so certificates survive updates. Port `3000` is used by the local compose files only.

Local build compose is included as `docker-compose.local.yml`; the SecretVM compose should pull a registry image unless you are using SecretVM's additional-file/archive flow.

## Website content and behavior

- Edit event dates, RSVP links, the community link, and the curriculum in `src/data/site.ts`.
- Shared layout, page metadata, and route scrolling are in `src/layouts/layout.tsx`.
- The site uses existing Telegram and social links for contact. It has no newsletter subscription or payment backend.
- `npm run check` runs ESLint across JavaScript and TypeScript, then checks types and builds the production site.
- nginx serves `/` and `/events`, redirects `/events/`, and returns HTTP 404 with the React recovery page for unknown routes. Add an nginx route if you add another client-side page.
- The supplied event photo selections and placements are documented in `docs/photo-selection.md`. Optimized images are committed in `public/`; `scripts/prepare-community-photos.ps1` regenerates them from the original JPEG copies on Windows.
- Use only the original six brand colors in `src/index.css`; the exact palette and contrast choices are documented in `docs/brand-colors.md`.
