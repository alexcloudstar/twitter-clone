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
  // TODO: Fix UpVote system
  @Mutation(() => Boolean)
  async upVoteTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const isUpTweet = value !== -1;
    const { userId } = req.session;
    const upTweet = await UpTweet.findOne({ where: { tweetId, userId } });
    const addUpTweet =
      upTweet?.value || upTweet?.value === 0 ? upTweet.value + value : 0;
    const substractUpTweet = upTweet?.value ? upTweet.value - 1 : 0;
    const realValue = isUpTweet ? addUpTweet : substractUpTweet;

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
    } catch (error) {
      throw new Error(error);
    }

    return true;
  }
}
