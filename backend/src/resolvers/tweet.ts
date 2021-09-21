import { Arg, Ctx, Field, InputType, Mutation, Resolver } from 'type-graphql';
import { Tweet } from '../entities/Tweet';
import { User } from '../entities/User';
import { MyContext } from '../types/MyContext';

@InputType()
export class TweetFields {
  @Field()
  tweet: string;
}

@Resolver(Tweet)
export class TweetResolver {
  @Mutation(() => Tweet)
  async createTweet(
    @Arg('options') options: TweetFields,
    @Ctx() { req }: MyContext
  ): Promise<Tweet> {
    const creator = await User.findOne(req.session.userId);

    return Tweet.create({
      ...options,
      creatorId: req.session.uerId,
      creator: { ...creator },
    });
  }
}
