FROM node:12-alpine
WORKDIR /usr/app
COPY package*.json ./
COPY .env ./
COPY . .
RUN npm install
RUN npm run migration
EXPOSE 4000
CMD npm run dev