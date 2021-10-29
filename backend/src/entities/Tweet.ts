import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Replies } from './Replies';
import { UpTweet } from './UpTweet';
import { User } from './User';

@ObjectType()
@Entity()
export class Tweet extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  tweet!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @Column()
  creatorUsername: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.tweets)
  creator: User;

  @OneToMany(() => Replies, replies => replies.tweet)
  replies?: Replies[];

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @OneToMany(() => UpTweet, uptweet => uptweet.tweet)
  uptweets: UpTweet[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;
}
