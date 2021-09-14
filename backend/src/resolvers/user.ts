import { User } from '../entities/User';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { UsernamePasswordInput } from './UsernamePasswordInput';
import { getConnection, getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { MyContext } from 'src/types/MyContext';

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
      console.log(req);
      console.log(error);
    }

    req.session.userId = user.id;

    return { user };
  }

  @Query(() => UserResponse)
  async getUser(@Arg('username') username: string): Promise<UserResponse> {
    const user = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.username = :username', { username })
      .getOne();

    return { user };
  }

  @Query(() => UsersResponse)
  async getAllUsers(): Promise<UsersResponse> {
    const users = await getRepository(User)
      .createQueryBuilder('user')
      .getMany();

    return { users };
  }
}
