FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG PUBLIC_MAPBOX_TOKEN
RUN test -n "$PUBLIC_MAPBOX_TOKEN" && npm run build

FROM node:22-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=9000
COPY --from=build /app/dist ./dist
COPY server ./server
USER node
EXPOSE 9000
CMD ["node", "server/index.mjs"]
