FROM node:26.13.1-trixie AS dev

WORKDIR /src
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

FROM node:26.13.1-trixie-slim AS prod

WORKDIR /src
COPY --from=dev /src .
CMD ["node", "server.js"]
