import { User } from '../entities/User';
import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { getConnection, getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { MyContext } from 'src/types/MyContext';
import { EditUserProfile } from './EditUserProfile';
import { Tweet } from '../entities/Tweet';
import { Replies } from '../entities/Reply';

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class UsersResponse {
  @Field(() => [User])
  users: User[];
}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne(
      usernameOrEmail.includes('@')
        ? { where: { email: usernameOrEmail } }
        : { where: { username: usernameOrEmail } }
    );

    if (!user) {
      throw new Error('User not found');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('Wrong password');
    }

    req.session.userId = user.id;

    return { user };
  }
  @Mutation(() => UserResponse)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { req }: any
  ): Promise<UserResponse> {
    const hashedPassword = await bcrypt.hash(options.password, 12);
    const { email, username } = options;

    let user;

    const alreadyExistUser = await User.findOne({ email });

    if (alreadyExistUser) {
      throw new Error('Account already exist');
    }

    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username,
          email,
          password: hashedPassword,
        })
        .returning('*')
        .execute();

      user = result.raw[0];
    } catch (error) {
      throw new Error(error.message);
    }

    req.session.userId = user.id;

    return { user };
  }
  @Mutation(() => User)
  async editProfile(
    @Arg('userId', () => Int) userId: number,
    @Arg('options') options: EditUserProfile,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const currentUser = await User.findOne(userId);

    try {
      if (!currentUser) throw new Error('User not found');

      if (currentUser.id !== req.session.userId) {
        throw new Error('You are not allowed to edit this profile');
      }

      const result = await getConnection()
        .createQueryBuilder()
        .update(User)
        .set({
          ...options,
        })
        .where('id = :id', { id: userId })
        .returning('*')
        .execute();

      return result.raw[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  @Query(() => UserResponse)
  async getUser(@Arg('username') username: string): Promise<UserResponse> {
    const user = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.username = :username', { username })
      .getOne();

    if (user) return { user };

    throw new Error('User not found');
  }

  @Query(() => UsersResponse)
  async getAllUsers(): Promise<UsersResponse> {
    const users = await getRepository(User)
      .createQueryBuilder('user')
      .getMany();

    return { users };
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }

    return User.findOne(req.session.userId);
  }

  @Query(() => [Tweet], { nullable: true })
  async getUserTweets(
    @Arg('username', () => String) username: string
  ): Promise<Tweet[] | undefined> {
    const tweets = await Tweet.find({ where: { creatorUsername: username } });

    if (!tweets) {
      throw new Error('User has no tweets yet');
    }

    return tweets;
  }
  @Query(() => [Replies], { nullable: true })
  async getUserReplies(
    @Arg('username', () => String) username: string
  ): Promise<Replies[] | undefined> {
    const replies = await Replies.find({
      where: { creatorUsername: username },
    });

    if (!replies) {
      throw new Error('User has no replies yet');
    }

    return replies;
  }
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise(resolve =>
      req.session.destroy((err: any) => {
        res.clearCookie('qid');
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
