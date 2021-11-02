import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Tweet } from '../entities/Tweet';
import { UpTweet } from '../entities/UpTweet';
import { User } from '../entities/User';
import { MyContext } from '../types/MyContext';
import { TweetFields } from './TweetFields';

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
  @Mutation(() => Tweet || Boolean)
  async createTweet(
    @Arg('options') options: TweetFields,
    @Ctx() { req }: MyContext
  ): Promise<Tweet | boolean> {
    const creator = await User.findOne(req.session.userId);

    return Tweet.create({
      ...options,
      creatorId: req.session.uerId,
      creatorUsername: creator?.username,
      creatorName: creator?.name,
      creator: { ...creator },
    }).save();
  }
  @Mutation(() => [Tweet])
  async editTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('newTweetValue', () => String) newTweetValue: string,
    @Arg('newTweetImage', () => String, { nullable: true })
    newTweetImage: string,
    @Ctx() { req }: MyContext
  ): Promise<Tweet[]> {
    let selectedTweet;

    try {
      selectedTweet = await Tweet.findOne(tweetId);

      if (!selectedTweet) throw new Error('Tweet not found');

      if (selectedTweet.creatorId !== req.session.userId) {
        throw new Error('You are not allowed to edit this tweet');
      }

      await getConnection()
        .createQueryBuilder()
        .update(Tweet)
        .set({
          tweet: newTweetValue,
          tweetImage: newTweetImage,
        })
        .where('id = :id', { id: tweetId })
        .returning('*')
        .execute();

      const tweets = await Tweet.find();

      return tweets;
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

      return false;
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

    throw new Error('Something went wrong');
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

      if (!tweet) throw new Error('Tweet was not found');

      await tweet?.remove();

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
