import { ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Replies } from './Reply';
import { Tweet } from './Tweet';
import { User } from './User';

@ObjectType()
@Entity()
export class UpReply extends BaseEntity {
  @Column({ type: 'int' })
  value: number;

  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  replyId: number;

  @ManyToOne(() => User, user => user.upreplies)
  user: User;

  @ManyToOne(() => Replies, replies => replies.upreplies, {
    onDelete: 'CASCADE',
  })
  tweet: Tweet;
}
