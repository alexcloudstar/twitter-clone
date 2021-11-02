import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import path from 'path';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { COOKIE_NAME, __prod__ } from './constants';
import { HelloResolver } from './resolvers/hello';
import { RepliesResolver } from './resolvers/reply';
import { StoryResolver } from './resolvers/story';
import { TweetResolver } from './resolvers/tweet';
import { UserResolver } from './resolvers/user';
const {
  PORT,
  DATABASE_URL,
  CORS_ORIGIN,
  REDIS_URL,
  SESSION_SECRET,
} = require('../config');

const main = async () => {
  // @ts-ignore
  const conn = await createConnection({
    type: 'postgres',
    url: DATABASE_URL,
    logging: false,
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [path.join(__dirname, './entities/*')],
  });

  await conn.runMigrations();

  const app = express();

  const redisStore = connectRedis(session);
  const redis = new Redis(REDIS_URL);

  app.use(
    cors({
      origin: CORS_ORIGIN,
      credentials: true,
    })
  );

  app.set('trust proxy', 1);

  app.use(
    session({
      name: COOKIE_NAME,
      store: new redisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? '.alexcloudstar.com' : undefined, // => specify domain in prod
      },
      saveUninitialized: false,
      secret: SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver,
        TweetResolver,
        RepliesResolver,
        StoryResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const server = app.listen(parseInt(PORT), () => {
    console.log(`Server started on http://localhost:${PORT}/graphql`);
  });

  const io = require('socket.io')(server, {
    cors: {
      origin: CORS_ORIGIN,
      credentials: true,
    },
  });

  // eslint-disable @typescript-eslint/no-explicit-any
  io.on('connection', (socket: any) => {
    socket.on('addStory', (data: any) => {
      io.sockets.emit('addStory', data);
    });

    socket.on('addTweet', (data: any) => {
      io.sockets.emit('addTweet', data);
    });

    socket.on('deleteTweet', (data: any) => {
      io.sockets.emit('deleteTweet', data);
    });

    socket.on('editTweet', (data: any) => {
      io.sockets.emit('editTweet', data);
    });

    socket.on('upTweet', (data: any) => {
      io.sockets.emit('upTweet', data);
    });

    socket.on('addTweetReply', (data: any) => {
      io.sockets.emit('addTweetReply', data);
    });
  });
};

main().catch(err => console.log(err));
