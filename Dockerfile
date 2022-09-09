FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY next.config.js ./next.config.js

COPY . .

RUN npm run build

EXPOSE 3000
 


 