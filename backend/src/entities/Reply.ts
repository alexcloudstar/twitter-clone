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
import { Tweet } from './Tweet';
import { UpReply } from './UpReply';
import { User } from './User';

@ObjectType()
@Entity()
export class Replies extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  reply!: string;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @Column()
  tweetId: number;

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, user => user.replies)
  creator?: User;

  @Field()
  @Column({ type: 'int', default: 0 })
  points!: number;

  @Field(() => Int, { nullable: true })
  voteStatus: number | null;

  @Field(() => Tweet, { nullable: true })
  @ManyToOne(() => Tweet, tweet => tweet.replies)
  tweet: Tweet;

  @OneToMany(() => UpReply, upreply => upreply.tweet)
  upreplies: UpReply[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;
}
