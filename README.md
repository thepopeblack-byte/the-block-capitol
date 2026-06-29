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

Replace `YOUR_REGISTRY_USERNAME` with your Docker Hub username or use `ghcr.io/YOUR_GITHUB_USERNAME/the-block-capitol` for GitHub Container Registry.

```bash
docker login
docker build -t YOUR_REGISTRY_USERNAME/the-block-capitol:latest .
docker push YOUR_REGISTRY_USERNAME/the-block-capitol:latest
```

Then update `docker-compose.secretvm.yml` to use the same image name.

## SecretVM deployment

Recommended production path:

1. Build and push the Docker image to Docker Hub or GHCR.
2. Update `docker-compose.secretvm.yml` with the pushed image.
3. In the SecretAI portal, create a SecretVM and upload `docker-compose.secretvm.yml`.
4. Map port `3000` in the SecretVM/public endpoint to container port `80`.
5. Add any runtime environment variables in the portal only if needed.

Local build compose is included as `docker-compose.local.yml`; the SecretVM compose should pull a registry image unless you are using SecretVM's additional-file/archive flow.
