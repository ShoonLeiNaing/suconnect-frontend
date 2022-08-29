FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY next.config.js ./next.config.js
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY data ./data
COPY components ./components
COPY . .

CMD [ "npm", "run", "dev" ]


