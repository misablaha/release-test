FROM node:18-alpine
WORKDIR /usr/src/app
COPY *.js /usr/src/app/
CMD node index.js
