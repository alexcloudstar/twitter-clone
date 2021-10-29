import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Replies } from './Reply';
import { Tweet } from './Tweet';
import { UpReply } from './UpReply';
import { UpTweet } from './UpTweet';
import { Story } from './Story';

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
  @Column({ default: 'nulll' })
  avatarUrl: string;

  @Field()
  @Column({ default: 'nulll' })
  coverPhotoUrl: string;

  @Field()
  @Column({ default: 'nulll' })
  name: string;

  @Field()
  @Column({ default: 'nulll' })
  bio: string;

  @Field()
  @Column({ default: 'nulll' })
  location: string;

  @Field()
  @Column({ default: 'nulll' })
  website: string;

  @Field()
  @Column({ type: Date, default: new Date() })
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

  @OneToMany(() => Story, story => story.storyUrl)
  story: Story[];

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;
}
