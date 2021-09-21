import { Field, InputType } from 'type-graphql';

@InputType()
export class TweetFields {
  @Field()
  tweet: string;
}
