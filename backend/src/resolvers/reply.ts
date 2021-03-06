import { Replies } from '../entities/Reply';
import { Tweet } from '../entities/Tweet';
import { UpReply } from '../entities/UpReply';
import { MyContext } from '../types/MyContext';
import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { User } from '../entities/User';

@Resolver(Replies)
export class RepliesResolver {
  @Mutation(() => Replies || Boolean)
  async replyToTweet(
    @Arg('tweetId', () => Int) tweetId: number,
    @Arg('reply', () => String) reply: string,
    @Ctx() { req }: MyContext
  ): Promise<Replies | Boolean> {
    const tweet = await Tweet.findOne(tweetId);
    const creator = await User.findOne(req.session.userId);

    try {
      if (creator) {
        return await Replies.create({
          creatorId: creator?.id,
          tweetId,
          reply,
          tweet,
        }).save();
      }
      throw new Error();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  @Query(() => [Replies])
  async getReplies(): Promise<Replies[]> {
    const replies = await Replies.find();

    if (replies) return replies;

    throw new Error('No replies found');
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

      if (!reply) throw new Error('Reply not found');

      await reply?.remove();

      return true;
    } catch (error) {
      console.log(error);
      throw new Error('Reply not found');
    }

    return false;
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
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const realValue = 1;
    const { userId } = req.session;
    const upReply = await UpReply.findOne({ where: { replyId, userId } });

    if (upReply) {
      await upReply.remove();

      await getConnection().transaction(async tm => {
        await tm.query(
          `
            update replies
            set points = points - $1
            where id = $2;
        `,
          [realValue, replyId]
        );
      });

      return false;
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
      return true;
    }

    throw new Error('Something went wrong');
  }

  @Mutation(() => [Replies])
  async editReply(
    @Arg('replyId', () => Int) replyId: number,
    @Arg('newReplyValue', () => String) newReplyValue: string,
    @Ctx() { req }: MyContext
  ): Promise<Replies[]> {
    let selectedReply;

    try {
      selectedReply = await Replies.findOne(replyId);

      if (!selectedReply) throw new Error('Reply not found');

      if (selectedReply.creatorId !== req.session.userId) {
        throw new Error('You are not allowed to edit this tweet');
      }

      await getConnection()
        .createQueryBuilder()
        .update(Replies)
        .set({
          reply: newReplyValue,
        })
        .where('id = :id', { id: replyId })
        .returning('*')
        .execute();

      return await Replies.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
