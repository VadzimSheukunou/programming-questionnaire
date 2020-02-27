FROM node:13.8.0-alpine

WORKDIR usr/app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 8000
