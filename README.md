# Microservices

A monorepo with a microservices architecture is a single repository that houses the code for multiple microservices. We have a backend service using express and a frontend vue js application on this repository.

## Requirements

Mongo DB

or

Docker with Mongo image running on it.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file under

1. vue-app

```
VITE_LOGIN_SERVICE=http://localhost:3000/api/auth
```

2. login-service

```
PORT=3000
MONGO_URI=mongodb://root:rootPassword@localhost:27017/auth?authSource=admin
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/selvaprasath2706/Microservices
```

Go to the project directory

```bash
  cd Microservices
```

Install dependencies

```bash
  npm install
```

To start the backend server

```bash
  npm run start:login
```

To start the frontend

```bash
  npm run start:app
```

## To run using Docker Compose:

To build the docker images

```bash
  docker compose build
```

To run the application in Local

```bash
  docker compose up
```

## To Build Docker Image standalone

To build an image for login service

```bash
  docker build -t {image name} -f ./services/login-service/DockerFile ./services/login-service
```

To build an image for Vue js app

```bash
  docker build -t {image name} -f ./services/vue-app/DockerFile ./services/vue-app
```
