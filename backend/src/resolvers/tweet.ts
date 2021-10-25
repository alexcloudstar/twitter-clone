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
import { Replies } from '../entities/Replies';
import { UpReply } from '../entities/UpReply';

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
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const isUpTweet = value !== -1;
    const realValue = isUpTweet ? 1 : -1;
    const { userId } = req.session;
    const upTweet = await UpTweet.findOne({ where: { tweetId, userId } });

    if (upTweet && upTweet.value !== realValue) {
      await getConnection().transaction(async tm => {
        await tm.query(
          `
            update up_tweet
            set value = $1
            where "tweetId" = $2 and "userId"= $3
          `,
          [realValue, tweetId, userId]
        );

        await tm.query(
          `
            update tweet
            set points = points + $1
            where id = $2;
        `,
          [realValue, tweetId]
        );
      });
    } else if (!upTweet) {
      // has never voted before
      await getConnection().transaction(async tm => {
        await tm.query(
          `insert into up_tweet ("userId", "tweetId", value)
          values ($1, $2, $3)`,
          [userId, tweetId, realValue]
        );

        await tm.query(
          `
        update tweet
        set points = points + $1
        where id = $2;
        `,
          [realValue, tweetId]
        );
      });
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

  @Mutation(() => Boolean)
  async replyToTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('reply', () => String) reply: string,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const tweet = await Tweet.findOne(tweetId);

    try {
      await Replies.create({
        creatorId: req.session.userId,
        tweetId,
        reply,
        tweet,
      }).save();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Query(() => [Replies])
  async getReplies(): Promise<Replies[]> {
    const replies = await Replies.find();

    return replies;
  }

  @Mutation(() => Boolean)
  async deleteReply(
    @Arg('replyId', () => Int) replyId: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const reply = await Replies.findOne(replyId);

    try {
      if (req.session.userId !== reply?.creatorId)
        throw new Error('Not authorized');
      await reply?.remove();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Query(() => [Replies])
  async getTweetReplies(
    @Arg('tweetId', () => Int) tweetId: number
  ): Promise<Replies[] | boolean> {
    let replies;

    try {
      replies = await Replies.find({ where: { tweetId } });
    } catch (error) {
      console.log(error);
      return false;
    }

    return replies;
  }

  @Mutation(() => Boolean)
  async upVoteReply(
    @Arg('replyId', () => Int) replyId: number,
    @Arg('value', () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const isUpReply = value !== -1;
    const realValue = isUpReply ? 1 : -1;
    const { userId } = req.session;
    const upReply = await UpReply.findOne({ where: { replyId, userId } });

    if (upReply && upReply.value !== realValue) {
      await getConnection().transaction(async tm => {
        await tm.query(
          `
            update up_reply
            set value = $1
            where "replyId" = $2 and "userId"= $3
          `,
          [realValue, replyId, userId]
        );

        await tm.query(
          `
            update replies
            set points = points + $1
            where id = $2;
        `,
          [realValue, replyId]
        );
      });
    } else if (!upReply) {
      // has never voted before
      await getConnection().transaction(async tm => {
        await tm.query(
          `insert into up_reply ("userId", "replyId", value)
          values ($1, $2, $3)`,
          [userId, replyId, realValue]
        );

        await tm.query(
          `
        update replies
        set points = points + $1
        where id = $2;
        `,
          [realValue, replyId]
        );
      });
    }

    return isUpReply;
  }
}
