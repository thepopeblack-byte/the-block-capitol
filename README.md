# The Block Capitol

React + Vite website for The Block Capitol.

## Local development

```bash
npm ci
npm run dev
```

## Production build test

```bash
npm run lint
npm run build
npm run preview
```

## Docker test locally

```bash
docker compose -f docker-compose.local.yml up -d --build
```

Open: http://localhost:3000

## Push source code to GitHub

```bash
git init
git add .
git commit -m "Initial The Block Capitol website deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
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
