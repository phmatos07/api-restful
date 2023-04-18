FROM node:14

WORKDIR /app

ARG PORT_BUILD=3000
ENV PORT_CONTAINER=$PORT_BUILD
EXPOSE $PORT_BUILD

COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]
