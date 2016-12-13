FROM node:7

RUN npm install -g yarn

ADD ./package.json /app/package.json
ADD ./yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn install --production

ADD ./dist /app/dist

CMD [ "node", "dist/index.js" ]
