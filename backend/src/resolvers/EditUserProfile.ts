import { Field, InputType } from 'type-graphql';

@InputType()
export class EditUserProfile {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  avatarUrl?: string;
  @Field({ nullable: true })
  coverPhotoUrl?: string;
  @Field({ nullable: true })
  location?: string;
  @Field({ nullable: true })
  website?: string;
  @Field({ nullable: true })
  birthday?: string;
  @Field({ nullable: true })
  bio?: string;
}
