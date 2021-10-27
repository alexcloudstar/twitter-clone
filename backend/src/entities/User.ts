import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Replies } from './Replies';
import { Tweet } from './Tweet';
import { UpReply } from './UpReply';
import { UpTweet } from './UpTweet';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field()
  @Column({ nullable: true })
  avatarUrl: string;

  @Field()
  @Column({ nullable: true })
  coverPhotoUrl: string;

  @Field()
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column({ nullable: true })
  location: string;

  @Field()
  @Column({ nullable: true })
  website: string;

  @Field()
  @Column({ nullable: true })
  birthday: Date;

  @Column()
  password!: string;

  @OneToMany(() => Tweet, tweet => tweet.creator)
  tweets: Tweet[];

  @OneToMany(() => UpTweet, uptweet => uptweet.user)
  uptweets: UpTweet[];

  @OneToMany(() => UpReply, upreply => upreply.user)
  upreplies: UpReply[];

  @OneToMany(() => UpTweet, uptweet => uptweet.user)
  replies: Replies[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;
}
