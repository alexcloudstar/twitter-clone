import { Arg, createUnionType, Query, Resolver } from 'type-graphql';
import { Replies } from '../entities/Reply';
import { Tweet } from '../entities/Tweet';
import { User } from '../entities/User';

const SearchResultUnion = createUnionType({
  name: 'SearchResult', // the name of the GraphQL union
  types: () => [User, Tweet, Replies] as const, // function that returns tuple of object types classes
  resolveType: value => {
    if (value instanceof User) {
      return 'User';
    } else if (value instanceof Tweet) {
      return 'Tweet';
    } else if (value instanceof Replies) {
      return 'Replies';
    }
    return null;
  },
});

@Resolver()
export class GlobalSearchResolver {
  @Query(() => [SearchResultUnion])
  async search(@Arg('searchTerm', () => String) searchTerm: string) {
    const tweets = await Tweet.find({
      where: { tweet: searchTerm },
    });

    const users = await User.find({
      where: { username: searchTerm },
    });

    const replies = await Replies.find({
      where: { reply: searchTerm },
    });

    return [...tweets, ...users, ...replies];
  }
}
