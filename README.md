# Programming Questionnaire App

The app for checking the knowledge in a certain programming area. It has a registration/auth, personal cabinet, progress on certain questionnaire and chart representation, set of preloaded questionnaires.

Frontend part for Questionnaire sandbox app

- React
- Redux
- Redux-thunk
- Formik
- Highcharts

Backend application for Questionnaire sandbox app

- PostgreSQL/Sequelize ORM
- Node.js
- Express
- Swagger API Docs
- Nodemon

### Installation via Docker

- First you need to install Docker for you OS.
- Go to https://hub.docker.com/signup and register.
- Go to https://www.docker.com/products/docker-desktop, download and install docker desktop client.
- After installation open terminal or CMD and write command

```sh
$ docker login
```

- Go to the root directory of the application and open terminal or CMD in this folder.
- Write command:

```sh
$ docker-compose up
```

- Wait for project build
- If something went wrong during building run commands one by one:

```sh
docker rm -f $(docker ps -a -q)
docker rmi -f $(docker images -q)
```

- Go to page http://localhost:3000

### Manual Installation

For manual installation instructions please go to the corresponding directory.
