import { ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Tweet } from './Tweet';
import { User } from './User';

@ObjectType()
@Entity()
export class UpTweet extends BaseEntity {
  @Column({ type: 'int' })
  value: number;

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, user => user.uptweets)
  user: User;

  @PrimaryColumn()
  tweetId: number;

  @ManyToOne(() => Tweet, tweet => tweet.uptweets, {
    onDelete: 'CASCADE',
  })
  tweet: Tweet;
}
