# https://www.youtube.com/watch?v=82gwumVIXFo&t=659s&ab_channel=BenAwad

FROM node:14

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

COPY ormconfig.json /app/dist
COPY .env /app/

ENV NODE_ENV production

EXPOSE 4000

CMD [ "npm", "run", "dev3" ]

USER node