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
import { getConnection } from 'typeorm';
import { Tweet } from '../entities/Tweet';
import { UpTweet } from '../entities/UpTweet';
import { User } from '../entities/User';
import { MyContext } from '../types/MyContext';

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
      creatorUsername: creator?.username,
      creator: { ...creator },
    }).save();
  }
  @Mutation(() => Tweet)
  async editTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('newTweetValue', () => String) newTweetValue: string,
    @Ctx() { req }: MyContext
  ): Promise<Tweet> {
    let selectedTweet;

    try {
      selectedTweet = await Tweet.findOne(tweetId);

      if (!selectedTweet) throw new Error('Tweet not found');

      if (selectedTweet.creatorId !== req.session.userId) {
        throw new Error('You are not allowed to edit this tweet');
      }

      const result = await getConnection()
        .createQueryBuilder()
        .update(Tweet)
        .set({
          tweet: newTweetValue,
        })
        .where('id = :id', { id: tweetId })
        .returning('*')
        .execute();

      return result.raw[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => Boolean)
  async upVoteTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const realValue: number = 1;
    const { userId } = req.session;
    const upTweet = await UpTweet.findOne({ where: { tweetId, userId } });

    if (upTweet) {
      await upTweet.remove();

      await getConnection().transaction(async tm => {
        await tm.query(
          `
            update tweet
            set points = points - $1
            where id = $2;
        `,
          [realValue, tweetId]
        );
      });

      return true;
    } else if (!upTweet) {
      // has never voted before
      await UpTweet.create({
        userId,
        tweetId,
        value: realValue,
      }).save();
      await getConnection().transaction(async tm => {
        await tm.query(
          `
        update tweet
        set points = points + $1
        where id = $2;
        `,
          [realValue, tweetId]
        );
      });

      return true;
    }

    return false;
  }

  @Mutation(() => Boolean)
  async deleteTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const tweet = await Tweet.findOne(tweetId);

    try {
      if (req.session.userId !== tweet?.creatorId)
        throw new Error('Not authorized');

      await tweet?.remove();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
