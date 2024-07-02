FROM node:18.18.0-alpine as build-stage

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:18.18.0-alpine as production-stage

WORKDIR /app


RUN npm install -g http-server

COPY --from=build-stage /app/dist /app

EXPOSE 8080

CMD ["http-server", "/app", "-p", "8080", "-c-1", "--proxy", "http://127.0.0.1:8080?"]