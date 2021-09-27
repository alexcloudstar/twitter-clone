import { Request, Response } from 'express';
import { Redis } from 'ioredis';

export type MyContext = {
  // @ts-expect-error
  req: Request & { session: Express.Session };
  redis: Redis;
  res: Response;
};
