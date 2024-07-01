FROM node:18.17.1 as build-stage

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV VITE_LOGIN_SERVICE=http://localhost:3000/api/auth


RUN npm run build

FROM node:18.17.1 as production-stage

WORKDIR /app


RUN npm install -g http-server

COPY --from=build-stage /app/dist /app

EXPOSE 8080

CMD ["http-server", "-p", "8080"]