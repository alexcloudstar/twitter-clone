import { UpTweet } from '../entities/UpTweet';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { Tweet } from '../entities/Tweet';
import { User } from '../entities/User';
import { MyContext } from '../types/MyContext';
import { getConnection } from 'typeorm';

@InputType()
export class TweetFields {
  @Field()
  tweet: string;
}

@Resolver(Tweet)
export class TweetResolver {
  @Query(() => [Tweet])
  async getTweets(): Promise<Tweet[]> {
    const allTweets = await Tweet.find();
    console.log(allTweets);

    return allTweets;
  }
  @Query(() => Tweet)
  async getTweet(@Arg('tweetId') tweetId: number): Promise<Tweet | undefined> {
    let selectedTweet;

    try {
      selectedTweet = await Tweet.findOne(tweetId);
    } catch (error) {
      throw new Error(error.message);
    }

    return selectedTweet;
  }
  @Mutation(() => Tweet)
  async createTweet(
    @Arg('options') options: TweetFields,
    @Ctx() { req }: MyContext
  ) {
    const creator = await User.findOne(req.session.userId);

    return Tweet.create({
      ...options,
      creatorId: req.session.uerId,
      creator: { ...creator },
    }).save();
  }
  @Mutation(() => Boolean)
  async upVoteTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const isUpTweet = value !== -1;
    const realValue = isUpTweet ? 1 : -1;
    const { userId } = req.session;
    const upTweet = await UpTweet.findOne({ where: { tweetId, userId } });

    if (upTweet && upTweet.value !== realValue) {
      await getConnection()
        .createQueryBuilder()
        .update(UpTweet)
        .set({
          userId,
          tweetId,
          value: realValue,
        })
        .where('tweetId = :tweetId', { tweetId })
        .execute();

      await getConnection()
        .createQueryBuilder()
        .update(Tweet)
        .set({
          points: realValue,
        })
        .where('id = :id', { id: tweetId })
        .execute();
    } else if (!upTweet) {
      await UpTweet.insert({
        userId,
        tweetId,
        value: realValue,
      });

      await getConnection()
        .createQueryBuilder()
        .update(Tweet)
        .set({
          points: realValue,
        })
        .where('id = :id', { id: tweetId })
        .execute();
    }

    return true;
  }
}
