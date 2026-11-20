# Deploy CI/CD Pipeline 1: Express in Docker

A small Express app that returns a JSON list of users at `GET /`, used to practice **Docker** and **Docker Compose**.

## Tech Stack

Node.js · Express · nodemon · Docker · Docker Compose

## Run with Docker Compose

```bash
git clone https://github.com/KahafSameer/Deploy_CICD_pipeline1.git
cd Deploy_CICD_pipeline1
docker compose up --build
```

`compose.yaml` builds the image from `dockerfile` and starts the `my_container` container on port **5000**. Open http://localhost:5000.

## Run with Docker only

```bash
docker build -f dockerfile -t deploy-cicd-pipeline1 .
docker run -p 5000:5000 deploy-cicd-pipeline1
```

The image (`node:latest`) installs nodemon globally and runs `npm run dev` (`nodemon --legacy-watch index.js`).

## Run without Docker

```bash
npm install
npm run dev
```

## Files

| File | Purpose |
|---|---|
| `index.js` | Express server (port 5000) |
| `dockerfile`, `.dockerignore` | Image definition |
| `compose.yaml` | Compose service |
| `read.html`, `java.html`, `style.css`, `ali.txt` | Static practice files |
