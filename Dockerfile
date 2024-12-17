FROM node:20-alpine
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 3000
CMD node server.js

