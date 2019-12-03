FROM node:8.10.0

WORKDIR /app

COPY src /app/src
COPY package.json tsconfig.json /app/

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start"]

