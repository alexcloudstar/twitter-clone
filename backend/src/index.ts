import path from 'path';
const {
  PORT,
  DATABASE_URL,
  CORS_ORIGIN,
  REDIS_URL,
  SESSION_SECRET,
} = require('../config');
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { HelloResolver } from './resolvers/hello';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { UserResolver } from './resolvers/user';
import { User } from './entities/User';
import connectRedis from 'connect-redis';
import cors from 'cors';
import session from 'express-session';
import Redis from 'ioredis';
import { COOKIE_NAME, __prod__ } from './constants';
import { Tweet } from './entities/Tweet';
import { TweetResolver } from './resolvers/tweet';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    url: DATABASE_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [User, Tweet],
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
      resolvers: [HelloResolver, UserResolver, TweetResolver],
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

  app.listen(parseInt(PORT), () => {
    console.log(`Server started on http://localhost:${PORT}/graphql`);
  });
};

main().catch(err => console.log(err));
