import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type EditUserProfile = {
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  coverPhotoUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStory: Story;
  createTweet: Tweet;
  deleteReply: Scalars['Boolean'];
  deleteStory: Scalars['Boolean'];
  deleteTweet: Scalars['Boolean'];
  editProfile: User;
  editReply: Array<Replies>;
  editTweet: Array<Tweet>;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  replyToTweet: Replies;
  upVoteReply: Scalars['Boolean'];
  upVoteTweet: Scalars['Boolean'];
};


export type MutationCreateStoryArgs = {
  storyImageUrl: Scalars['String'];
};


export type MutationCreateTweetArgs = {
  options: TweetFields;
};


export type MutationDeleteReplyArgs = {
  replyId: Scalars['Int'];
};


export type MutationDeleteStoryArgs = {
  storyId: Scalars['String'];
};


export type MutationDeleteTweetArgs = {
  tweetId: Scalars['Int'];
};


export type MutationEditProfileArgs = {
  options: EditUserProfile;
  userId: Scalars['Int'];
};


export type MutationEditReplyArgs = {
  newReplyValue: Scalars['String'];
  replyId: Scalars['Int'];
};


export type MutationEditTweetArgs = {
  newTweetImage?: Maybe<Scalars['String']>;
  newTweetValue: Scalars['String'];
  tweetId: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationReplyToTweetArgs = {
  reply: Scalars['String'];
  tweetId: Scalars['Int'];
};


export type MutationUpVoteReplyArgs = {
  replyId: Scalars['Int'];
};


export type MutationUpVoteTweetArgs = {
  tweetId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: UsersResponse;
  getReplies: Array<Replies>;
  getStories: Array<Story>;
  getStory: Story;
  getTweet: Tweet;
  getTweetReplies: Array<Replies>;
  getTweets: Array<Tweet>;
  getUser: UserResponse;
  getUserReplies?: Maybe<Array<Replies>>;
  getUserTweets?: Maybe<Array<Tweet>>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  search: Array<SearchResult>;
};


export type QueryGetStoryArgs = {
  storyId: Scalars['String'];
};


export type QueryGetTweetArgs = {
  tweetId: Scalars['Float'];
};


export type QueryGetTweetRepliesArgs = {
  tweetId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};


export type QueryGetUserRepliesArgs = {
  username: Scalars['String'];
};


export type QueryGetUserTweetsArgs = {
  username: Scalars['String'];
};


export type QuerySearchArgs = {
  searchTerm: Scalars['String'];
};

export type Replies = {
  __typename?: 'Replies';
  createdAt: Scalars['String'];
  creator?: Maybe<User>;
  creatorId: Scalars['Float'];
  creatorUsername: Scalars['String'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  reply: Scalars['String'];
  tweet?: Maybe<Tweet>;
  tweetId: Scalars['Float'];
  updatedAt: Scalars['String'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type SearchResult = Replies | Tweet | User;

export type Story = {
  __typename?: 'Story';
  createdAt: Scalars['String'];
  creatorId: Scalars['Float'];
  creatorUsername: Scalars['String'];
  id: Scalars['Float'];
  storyUrl: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Tweet = {
  __typename?: 'Tweet';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  creatorName: Scalars['String'];
  creatorUsername: Scalars['String'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  tweet: Scalars['String'];
  tweetImage: Scalars['String'];
  updatedAt: Scalars['String'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type TweetFields = {
  tweet: Scalars['String'];
  tweetImage?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  bio: Scalars['String'];
  birthday: Scalars['DateTime'];
  coverPhotoUrl: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  location: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  website: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  users: Array<User>;
};

export type RegularEditProfileFragment = { __typename?: 'User', id: number, name: string, website: string, location: string, email: string, coverPhotoUrl: string, birthday: any, bio: string, avatarUrl: string };

export type RegularReplyFragment = { __typename?: 'Replies', creatorId: number, id: number, points: number, reply: string, tweetId: number };

export type RegularTweetFragment = { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: number | null | undefined, creatorUsername: string, creatorName: string, tweetImage: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string, avatarUrl: string };

export type CreateStoryMutationVariables = Exact<{
  storyImageUrl: Scalars['String'];
}>;


export type CreateStoryMutation = { __typename?: 'Mutation', createStory: { __typename?: 'Story', createdAt: string, creatorId: number, creatorUsername: string, id: number, storyUrl: string, updatedAt: string } };

export type EditProfileMutationVariables = Exact<{
  userId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  coverPhotoUrl?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', editProfile: { __typename?: 'User', id: number, name: string, website: string, location: string, email: string, coverPhotoUrl: string, birthday: any, bio: string, avatarUrl: string } };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', username: string, id: number } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', username: string, id: number, email: string, createdAt: string, updatedAt: string } | null | undefined } };

export type DeleteReplyMutationVariables = Exact<{
  replyId: Scalars['Int'];
}>;


export type DeleteReplyMutation = { __typename?: 'Mutation', deleteReply: boolean };

export type EditReplyMutationVariables = Exact<{
  replyId: Scalars['Int'];
  newReplyValue: Scalars['String'];
}>;


export type EditReplyMutation = { __typename?: 'Mutation', editReply: Array<{ __typename?: 'Replies', creatorId: number, id: number, points: number, reply: string, tweetId: number }> };

export type ReplyToTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
  reply: Scalars['String'];
}>;


export type ReplyToTweetMutation = { __typename?: 'Mutation', replyToTweet: { __typename?: 'Replies', id: number, reply: string, points: number } };

export type UpVoteReplyMutationVariables = Exact<{
  replyId: Scalars['Int'];
}>;


export type UpVoteReplyMutation = { __typename?: 'Mutation', upVoteReply: boolean };

export type CreateTweetMutationVariables = Exact<{
  tweet: Scalars['String'];
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', createTweet: { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: number | null | undefined, creatorUsername: string, creatorName: string, tweetImage: string } };

export type DeleteTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type DeleteTweetMutation = { __typename?: 'Mutation', deleteTweet: boolean };

export type EditTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
  newTweetValue: Scalars['String'];
  newTweetImage?: Maybe<Scalars['String']>;
}>;


export type EditTweetMutation = { __typename?: 'Mutation', editTweet: Array<{ __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: number | null | undefined, creatorUsername: string, creatorName: string, tweetImage: string }> };

export type UpVoteTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type UpVoteTweetMutation = { __typename?: 'Mutation', upVoteTweet: boolean };

export type GetAllStoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStoriesQuery = { __typename?: 'Query', getStories: Array<{ __typename?: 'Story', id: number, storyUrl: string, creatorId: number, creatorUsername: string }> };

export type GlobalSearchQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type GlobalSearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Replies', tweetId: number, reply: string } | { __typename?: 'Tweet', id: number, tweet: string } | { __typename?: 'User', username: string }> };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type GetTweetQueryVariables = Exact<{
  tweetId: Scalars['Float'];
}>;


export type GetTweetQuery = { __typename?: 'Query', getTweet: { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: number | null | undefined, creatorUsername: string, creatorName: string, tweetImage: string } };

export type GetTweetRepliesQueryVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type GetTweetRepliesQuery = { __typename?: 'Query', getTweetReplies: Array<{ __typename?: 'Replies', id: number, reply: string, creatorId: number, tweetId: number, points: number }> };

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = { __typename?: 'Query', getTweets: Array<{ __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: number | null | undefined, creatorUsername: string, creatorName: string, tweetImage: string }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: { __typename?: 'UsersResponse', users: Array<{ __typename?: 'User', id: number, username: string, name: string, createdAt: string }> } };

export type GetUserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, username: string, email: string, avatarUrl: string, coverPhotoUrl: string, name: string, location: string, website: string, birthday: any, bio: string, createdAt: string } | null | undefined } };

export type GetUserRepliesQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserRepliesQuery = { __typename?: 'Query', getUserReplies?: Array<{ __typename?: 'Replies', id: number, reply: string }> | null | undefined };

export type GetUserTweetsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserTweetsQuery = { __typename?: 'Query', getUserTweets?: Array<{ __typename?: 'Tweet', id: number, tweet: string, tweetImage: string }> | null | undefined };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', name: string, id: number, username: string, avatarUrl: string } | null | undefined };

export const RegularEditProfileFragmentDoc = gql`
    fragment RegularEditProfile on User {
  id
  name
  website
  location
  email
  coverPhotoUrl
  birthday
  bio
  avatarUrl
}
    `;
export const RegularReplyFragmentDoc = gql`
    fragment RegularReply on Replies {
  creatorId
  id
  points
  reply
  tweetId
}
    `;
export const RegularTweetFragmentDoc = gql`
    fragment RegularTweet on Tweet {
  id
  tweet
  points
  createdAt
  creatorId
  updatedAt
  voteStatus
  creatorUsername
  creatorName
  tweetImage
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
  avatarUrl
}
    `;
export const CreateStoryDocument = gql`
    mutation CreateStory($storyImageUrl: String!) {
  createStory(storyImageUrl: $storyImageUrl) {
    createdAt
    creatorId
    creatorUsername
    id
    storyUrl
    updatedAt
  }
}
    `;
export type CreateStoryMutationFn = Apollo.MutationFunction<CreateStoryMutation, CreateStoryMutationVariables>;
export type CreateStoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateStoryMutation, CreateStoryMutationVariables>
    } & TChildProps;
export function withCreateStory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateStoryMutation,
  CreateStoryMutationVariables,
  CreateStoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateStoryMutation, CreateStoryMutationVariables, CreateStoryProps<TChildProps, TDataName>>(CreateStoryDocument, {
      alias: 'createStory',
      ...operationOptions
    });
};

/**
 * __useCreateStoryMutation__
 *
 * To run a mutation, you first call `useCreateStoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStoryMutation, { data, loading, error }] = useCreateStoryMutation({
 *   variables: {
 *      storyImageUrl: // value for 'storyImageUrl'
 *   },
 * });
 */
export function useCreateStoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateStoryMutation, CreateStoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStoryMutation, CreateStoryMutationVariables>(CreateStoryDocument, options);
      }
export type CreateStoryMutationHookResult = ReturnType<typeof useCreateStoryMutation>;
export type CreateStoryMutationResult = Apollo.MutationResult<CreateStoryMutation>;
export type CreateStoryMutationOptions = Apollo.BaseMutationOptions<CreateStoryMutation, CreateStoryMutationVariables>;
export const EditProfileDocument = gql`
    mutation EditProfile($userId: Int!, $name: String, $website: String, $location: String, $email: String, $coverPhotoUrl: String, $birthday: String, $bio: String, $avatarUrl: String) {
  editProfile(
    userId: $userId
    options: {name: $name, website: $website, location: $location, email: $email, coverPhotoUrl: $coverPhotoUrl, birthday: $birthday, bio: $bio, avatarUrl: $avatarUrl}
  ) {
    ...RegularEditProfile
  }
}
    ${RegularEditProfileFragmentDoc}`;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;
export type EditProfileProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>
    } & TChildProps;
export function withEditProfile<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditProfileMutation,
  EditProfileMutationVariables,
  EditProfileProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditProfileMutation, EditProfileMutationVariables, EditProfileProps<TChildProps, TDataName>>(EditProfileDocument, {
      alias: 'editProfile',
      ...operationOptions
    });
};

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *      website: // value for 'website'
 *      location: // value for 'location'
 *      email: // value for 'email'
 *      coverPhotoUrl: // value for 'coverPhotoUrl'
 *      birthday: // value for 'birthday'
 *      bio: // value for 'bio'
 *      avatarUrl: // value for 'avatarUrl'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    user {
      username
      id
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>
    } & TChildProps;
export function withLogout<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps, TDataName>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password: String!) {
  register(options: {email: $email, username: $username, password: $password}) {
    user {
      username
      id
      email
      createdAt
      updatedAt
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const DeleteReplyDocument = gql`
    mutation DeleteReply($replyId: Int!) {
  deleteReply(replyId: $replyId)
}
    `;
export type DeleteReplyMutationFn = Apollo.MutationFunction<DeleteReplyMutation, DeleteReplyMutationVariables>;
export type DeleteReplyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteReplyMutation, DeleteReplyMutationVariables>
    } & TChildProps;
export function withDeleteReply<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteReplyMutation,
  DeleteReplyMutationVariables,
  DeleteReplyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteReplyMutation, DeleteReplyMutationVariables, DeleteReplyProps<TChildProps, TDataName>>(DeleteReplyDocument, {
      alias: 'deleteReply',
      ...operationOptions
    });
};

/**
 * __useDeleteReplyMutation__
 *
 * To run a mutation, you first call `useDeleteReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReplyMutation, { data, loading, error }] = useDeleteReplyMutation({
 *   variables: {
 *      replyId: // value for 'replyId'
 *   },
 * });
 */
export function useDeleteReplyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReplyMutation, DeleteReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReplyMutation, DeleteReplyMutationVariables>(DeleteReplyDocument, options);
      }
export type DeleteReplyMutationHookResult = ReturnType<typeof useDeleteReplyMutation>;
export type DeleteReplyMutationResult = Apollo.MutationResult<DeleteReplyMutation>;
export type DeleteReplyMutationOptions = Apollo.BaseMutationOptions<DeleteReplyMutation, DeleteReplyMutationVariables>;
export const EditReplyDocument = gql`
    mutation EditReply($replyId: Int!, $newReplyValue: String!) {
  editReply(replyId: $replyId, newReplyValue: $newReplyValue) {
    ...RegularReply
  }
}
    ${RegularReplyFragmentDoc}`;
export type EditReplyMutationFn = Apollo.MutationFunction<EditReplyMutation, EditReplyMutationVariables>;
export type EditReplyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditReplyMutation, EditReplyMutationVariables>
    } & TChildProps;
export function withEditReply<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditReplyMutation,
  EditReplyMutationVariables,
  EditReplyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditReplyMutation, EditReplyMutationVariables, EditReplyProps<TChildProps, TDataName>>(EditReplyDocument, {
      alias: 'editReply',
      ...operationOptions
    });
};

/**
 * __useEditReplyMutation__
 *
 * To run a mutation, you first call `useEditReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editReplyMutation, { data, loading, error }] = useEditReplyMutation({
 *   variables: {
 *      replyId: // value for 'replyId'
 *      newReplyValue: // value for 'newReplyValue'
 *   },
 * });
 */
export function useEditReplyMutation(baseOptions?: Apollo.MutationHookOptions<EditReplyMutation, EditReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditReplyMutation, EditReplyMutationVariables>(EditReplyDocument, options);
      }
export type EditReplyMutationHookResult = ReturnType<typeof useEditReplyMutation>;
export type EditReplyMutationResult = Apollo.MutationResult<EditReplyMutation>;
export type EditReplyMutationOptions = Apollo.BaseMutationOptions<EditReplyMutation, EditReplyMutationVariables>;
export const ReplyToTweetDocument = gql`
    mutation replyToTweet($tweetId: Int!, $reply: String!) {
  replyToTweet(tweetId: $tweetId, reply: $reply) {
    id
    reply
    points
  }
}
    `;
export type ReplyToTweetMutationFn = Apollo.MutationFunction<ReplyToTweetMutation, ReplyToTweetMutationVariables>;
export type ReplyToTweetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<ReplyToTweetMutation, ReplyToTweetMutationVariables>
    } & TChildProps;
export function withReplyToTweet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ReplyToTweetMutation,
  ReplyToTweetMutationVariables,
  ReplyToTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ReplyToTweetMutation, ReplyToTweetMutationVariables, ReplyToTweetProps<TChildProps, TDataName>>(ReplyToTweetDocument, {
      alias: 'replyToTweet',
      ...operationOptions
    });
};

/**
 * __useReplyToTweetMutation__
 *
 * To run a mutation, you first call `useReplyToTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReplyToTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [replyToTweetMutation, { data, loading, error }] = useReplyToTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *      reply: // value for 'reply'
 *   },
 * });
 */
export function useReplyToTweetMutation(baseOptions?: Apollo.MutationHookOptions<ReplyToTweetMutation, ReplyToTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReplyToTweetMutation, ReplyToTweetMutationVariables>(ReplyToTweetDocument, options);
      }
export type ReplyToTweetMutationHookResult = ReturnType<typeof useReplyToTweetMutation>;
export type ReplyToTweetMutationResult = Apollo.MutationResult<ReplyToTweetMutation>;
export type ReplyToTweetMutationOptions = Apollo.BaseMutationOptions<ReplyToTweetMutation, ReplyToTweetMutationVariables>;
export const UpVoteReplyDocument = gql`
    mutation UpVoteReply($replyId: Int!) {
  upVoteReply(replyId: $replyId)
}
    `;
export type UpVoteReplyMutationFn = Apollo.MutationFunction<UpVoteReplyMutation, UpVoteReplyMutationVariables>;
export type UpVoteReplyProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpVoteReplyMutation, UpVoteReplyMutationVariables>
    } & TChildProps;
export function withUpVoteReply<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpVoteReplyMutation,
  UpVoteReplyMutationVariables,
  UpVoteReplyProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpVoteReplyMutation, UpVoteReplyMutationVariables, UpVoteReplyProps<TChildProps, TDataName>>(UpVoteReplyDocument, {
      alias: 'upVoteReply',
      ...operationOptions
    });
};

/**
 * __useUpVoteReplyMutation__
 *
 * To run a mutation, you first call `useUpVoteReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpVoteReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upVoteReplyMutation, { data, loading, error }] = useUpVoteReplyMutation({
 *   variables: {
 *      replyId: // value for 'replyId'
 *   },
 * });
 */
export function useUpVoteReplyMutation(baseOptions?: Apollo.MutationHookOptions<UpVoteReplyMutation, UpVoteReplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpVoteReplyMutation, UpVoteReplyMutationVariables>(UpVoteReplyDocument, options);
      }
export type UpVoteReplyMutationHookResult = ReturnType<typeof useUpVoteReplyMutation>;
export type UpVoteReplyMutationResult = Apollo.MutationResult<UpVoteReplyMutation>;
export type UpVoteReplyMutationOptions = Apollo.BaseMutationOptions<UpVoteReplyMutation, UpVoteReplyMutationVariables>;
export const CreateTweetDocument = gql`
    mutation CreateTweet($tweet: String!) {
  createTweet(options: {tweet: $tweet}) {
    ...RegularTweet
  }
}
    ${RegularTweetFragmentDoc}`;
export type CreateTweetMutationFn = Apollo.MutationFunction<CreateTweetMutation, CreateTweetMutationVariables>;
export type CreateTweetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateTweetMutation, CreateTweetMutationVariables>
    } & TChildProps;
export function withCreateTweet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateTweetMutation,
  CreateTweetMutationVariables,
  CreateTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateTweetMutation, CreateTweetMutationVariables, CreateTweetProps<TChildProps, TDataName>>(CreateTweetDocument, {
      alias: 'createTweet',
      ...operationOptions
    });
};

/**
 * __useCreateTweetMutation__
 *
 * To run a mutation, you first call `useCreateTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTweetMutation, { data, loading, error }] = useCreateTweetMutation({
 *   variables: {
 *      tweet: // value for 'tweet'
 *   },
 * });
 */
export function useCreateTweetMutation(baseOptions?: Apollo.MutationHookOptions<CreateTweetMutation, CreateTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTweetMutation, CreateTweetMutationVariables>(CreateTweetDocument, options);
      }
export type CreateTweetMutationHookResult = ReturnType<typeof useCreateTweetMutation>;
export type CreateTweetMutationResult = Apollo.MutationResult<CreateTweetMutation>;
export type CreateTweetMutationOptions = Apollo.BaseMutationOptions<CreateTweetMutation, CreateTweetMutationVariables>;
export const DeleteTweetDocument = gql`
    mutation DeleteTweet($tweetId: Int!) {
  deleteTweet(tweetId: $tweetId)
}
    `;
export type DeleteTweetMutationFn = Apollo.MutationFunction<DeleteTweetMutation, DeleteTweetMutationVariables>;
export type DeleteTweetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<DeleteTweetMutation, DeleteTweetMutationVariables>
    } & TChildProps;
export function withDeleteTweet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteTweetMutation,
  DeleteTweetMutationVariables,
  DeleteTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteTweetMutation, DeleteTweetMutationVariables, DeleteTweetProps<TChildProps, TDataName>>(DeleteTweetDocument, {
      alias: 'deleteTweet',
      ...operationOptions
    });
};

/**
 * __useDeleteTweetMutation__
 *
 * To run a mutation, you first call `useDeleteTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTweetMutation, { data, loading, error }] = useDeleteTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useDeleteTweetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTweetMutation, DeleteTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument, options);
      }
export type DeleteTweetMutationHookResult = ReturnType<typeof useDeleteTweetMutation>;
export type DeleteTweetMutationResult = Apollo.MutationResult<DeleteTweetMutation>;
export type DeleteTweetMutationOptions = Apollo.BaseMutationOptions<DeleteTweetMutation, DeleteTweetMutationVariables>;
export const EditTweetDocument = gql`
    mutation EditTweet($tweetId: Int!, $newTweetValue: String!, $newTweetImage: String) {
  editTweet(
    tweetId: $tweetId
    newTweetValue: $newTweetValue
    newTweetImage: $newTweetImage
  ) {
    ...RegularTweet
  }
}
    ${RegularTweetFragmentDoc}`;
export type EditTweetMutationFn = Apollo.MutationFunction<EditTweetMutation, EditTweetMutationVariables>;
export type EditTweetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<EditTweetMutation, EditTweetMutationVariables>
    } & TChildProps;
export function withEditTweet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditTweetMutation,
  EditTweetMutationVariables,
  EditTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, EditTweetMutation, EditTweetMutationVariables, EditTweetProps<TChildProps, TDataName>>(EditTweetDocument, {
      alias: 'editTweet',
      ...operationOptions
    });
};

/**
 * __useEditTweetMutation__
 *
 * To run a mutation, you first call `useEditTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTweetMutation, { data, loading, error }] = useEditTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *      newTweetValue: // value for 'newTweetValue'
 *      newTweetImage: // value for 'newTweetImage'
 *   },
 * });
 */
export function useEditTweetMutation(baseOptions?: Apollo.MutationHookOptions<EditTweetMutation, EditTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTweetMutation, EditTweetMutationVariables>(EditTweetDocument, options);
      }
export type EditTweetMutationHookResult = ReturnType<typeof useEditTweetMutation>;
export type EditTweetMutationResult = Apollo.MutationResult<EditTweetMutation>;
export type EditTweetMutationOptions = Apollo.BaseMutationOptions<EditTweetMutation, EditTweetMutationVariables>;
export const UpVoteTweetDocument = gql`
    mutation UpVoteTweet($tweetId: Int!) {
  upVoteTweet(tweetId: $tweetId)
}
    `;
export type UpVoteTweetMutationFn = Apollo.MutationFunction<UpVoteTweetMutation, UpVoteTweetMutationVariables>;
export type UpVoteTweetProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<UpVoteTweetMutation, UpVoteTweetMutationVariables>
    } & TChildProps;
export function withUpVoteTweet<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpVoteTweetMutation,
  UpVoteTweetMutationVariables,
  UpVoteTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpVoteTweetMutation, UpVoteTweetMutationVariables, UpVoteTweetProps<TChildProps, TDataName>>(UpVoteTweetDocument, {
      alias: 'upVoteTweet',
      ...operationOptions
    });
};

/**
 * __useUpVoteTweetMutation__
 *
 * To run a mutation, you first call `useUpVoteTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpVoteTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upVoteTweetMutation, { data, loading, error }] = useUpVoteTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useUpVoteTweetMutation(baseOptions?: Apollo.MutationHookOptions<UpVoteTweetMutation, UpVoteTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpVoteTweetMutation, UpVoteTweetMutationVariables>(UpVoteTweetDocument, options);
      }
export type UpVoteTweetMutationHookResult = ReturnType<typeof useUpVoteTweetMutation>;
export type UpVoteTweetMutationResult = Apollo.MutationResult<UpVoteTweetMutation>;
export type UpVoteTweetMutationOptions = Apollo.BaseMutationOptions<UpVoteTweetMutation, UpVoteTweetMutationVariables>;
export const GetAllStoriesDocument = gql`
    query GetAllStories {
  getStories {
    id
    storyUrl
    creatorId
    creatorUsername
  }
}
    `;
export type GetAllStoriesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllStoriesQuery, GetAllStoriesQueryVariables>
    } & TChildProps;
export function withGetAllStories<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllStoriesQuery,
  GetAllStoriesQueryVariables,
  GetAllStoriesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllStoriesQuery, GetAllStoriesQueryVariables, GetAllStoriesProps<TChildProps, TDataName>>(GetAllStoriesDocument, {
      alias: 'getAllStories',
      ...operationOptions
    });
};

/**
 * __useGetAllStoriesQuery__
 *
 * To run a query within a React component, call `useGetAllStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStoriesQuery, GetAllStoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStoriesQuery, GetAllStoriesQueryVariables>(GetAllStoriesDocument, options);
      }
export function useGetAllStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStoriesQuery, GetAllStoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStoriesQuery, GetAllStoriesQueryVariables>(GetAllStoriesDocument, options);
        }
export type GetAllStoriesQueryHookResult = ReturnType<typeof useGetAllStoriesQuery>;
export type GetAllStoriesLazyQueryHookResult = ReturnType<typeof useGetAllStoriesLazyQuery>;
export type GetAllStoriesQueryResult = Apollo.QueryResult<GetAllStoriesQuery, GetAllStoriesQueryVariables>;
export const GlobalSearchDocument = gql`
    query GlobalSearch($searchTerm: String!) {
  search(searchTerm: $searchTerm) {
    ... on User {
      username
    }
    ... on Tweet {
      id
      tweet
    }
    ... on Replies {
      tweetId
      reply
    }
  }
}
    `;
export type GlobalSearchProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GlobalSearchQuery, GlobalSearchQueryVariables>
    } & TChildProps;
export function withGlobalSearch<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GlobalSearchQuery,
  GlobalSearchQueryVariables,
  GlobalSearchProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GlobalSearchQuery, GlobalSearchQueryVariables, GlobalSearchProps<TChildProps, TDataName>>(GlobalSearchDocument, {
      alias: 'globalSearch',
      ...operationOptions
    });
};

/**
 * __useGlobalSearchQuery__
 *
 * To run a query within a React component, call `useGlobalSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalSearchQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGlobalSearchQuery(baseOptions: Apollo.QueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(GlobalSearchDocument, options);
      }
export function useGlobalSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalSearchQuery, GlobalSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalSearchQuery, GlobalSearchQueryVariables>(GlobalSearchDocument, options);
        }
export type GlobalSearchQueryHookResult = ReturnType<typeof useGlobalSearchQuery>;
export type GlobalSearchLazyQueryHookResult = ReturnType<typeof useGlobalSearchLazyQuery>;
export type GlobalSearchQueryResult = Apollo.QueryResult<GlobalSearchQuery, GlobalSearchQueryVariables>;
export const HelloDocument = gql`
    query hello {
  hello
}
    `;
export type HelloProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HelloQuery, HelloQueryVariables>
    } & TChildProps;
export function withHello<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HelloQuery,
  HelloQueryVariables,
  HelloProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HelloQuery, HelloQueryVariables, HelloProps<TChildProps, TDataName>>(HelloDocument, {
      alias: 'hello',
      ...operationOptions
    });
};

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;
export const GetTweetDocument = gql`
    query GetTweet($tweetId: Float!) {
  getTweet(tweetId: $tweetId) {
    ...RegularTweet
  }
}
    ${RegularTweetFragmentDoc}`;
export type GetTweetProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTweetQuery, GetTweetQueryVariables>
    } & TChildProps;
export function withGetTweet<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTweetQuery,
  GetTweetQueryVariables,
  GetTweetProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTweetQuery, GetTweetQueryVariables, GetTweetProps<TChildProps, TDataName>>(GetTweetDocument, {
      alias: 'getTweet',
      ...operationOptions
    });
};

/**
 * __useGetTweetQuery__
 *
 * To run a query within a React component, call `useGetTweetQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetQuery(baseOptions: Apollo.QueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
      }
export function useGetTweetLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetQuery, GetTweetQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetQuery, GetTweetQueryVariables>(GetTweetDocument, options);
        }
export type GetTweetQueryHookResult = ReturnType<typeof useGetTweetQuery>;
export type GetTweetLazyQueryHookResult = ReturnType<typeof useGetTweetLazyQuery>;
export type GetTweetQueryResult = Apollo.QueryResult<GetTweetQuery, GetTweetQueryVariables>;
export const GetTweetRepliesDocument = gql`
    query GetTweetReplies($tweetId: Int!) {
  getTweetReplies(tweetId: $tweetId) {
    id
    reply
    creatorId
    tweetId
    points
  }
}
    `;
export type GetTweetRepliesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>
    } & TChildProps;
export function withGetTweetReplies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTweetRepliesQuery,
  GetTweetRepliesQueryVariables,
  GetTweetRepliesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTweetRepliesQuery, GetTweetRepliesQueryVariables, GetTweetRepliesProps<TChildProps, TDataName>>(GetTweetRepliesDocument, {
      alias: 'getTweetReplies',
      ...operationOptions
    });
};

/**
 * __useGetTweetRepliesQuery__
 *
 * To run a query within a React component, call `useGetTweetRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetRepliesQuery({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useGetTweetRepliesQuery(baseOptions: Apollo.QueryHookOptions<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>(GetTweetRepliesDocument, options);
      }
export function useGetTweetRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>(GetTweetRepliesDocument, options);
        }
export type GetTweetRepliesQueryHookResult = ReturnType<typeof useGetTweetRepliesQuery>;
export type GetTweetRepliesLazyQueryHookResult = ReturnType<typeof useGetTweetRepliesLazyQuery>;
export type GetTweetRepliesQueryResult = Apollo.QueryResult<GetTweetRepliesQuery, GetTweetRepliesQueryVariables>;
export const GetTweetsDocument = gql`
    query GetTweets {
  getTweets {
    ...RegularTweet
  }
}
    ${RegularTweetFragmentDoc}`;
export type GetTweetsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetTweetsQuery, GetTweetsQueryVariables>
    } & TChildProps;
export function withGetTweets<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetTweetsQuery,
  GetTweetsQueryVariables,
  GetTweetsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetTweetsQuery, GetTweetsQueryVariables, GetTweetsProps<TChildProps, TDataName>>(GetTweetsDocument, {
      alias: 'getTweets',
      ...operationOptions
    });
};

/**
 * __useGetTweetsQuery__
 *
 * To run a query within a React component, call `useGetTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTweetsQuery(baseOptions?: Apollo.QueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
      }
export function useGetTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
        }
export type GetTweetsQueryHookResult = ReturnType<typeof useGetTweetsQuery>;
export type GetTweetsLazyQueryHookResult = ReturnType<typeof useGetTweetsLazyQuery>;
export type GetTweetsQueryResult = Apollo.QueryResult<GetTweetsQuery, GetTweetsQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    users {
      id
      username
      name
      createdAt
    }
  }
}
    `;
export type GetAllUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllUsersQuery, GetAllUsersQueryVariables>
    } & TChildProps;
export function withGetAllUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetAllUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllUsersQuery, GetAllUsersQueryVariables, GetAllUsersProps<TChildProps, TDataName>>(GetAllUsersDocument, {
      alias: 'getAllUsers',
      ...operationOptions
    });
};

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($username: String!) {
  getUser(username: $username) {
    user {
      id
      username
      email
      avatarUrl
      coverPhotoUrl
      name
      location
      website
      birthday
      bio
      createdAt
    }
  }
}
    `;
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserRepliesDocument = gql`
    query GetUserReplies($username: String!) {
  getUserReplies(username: $username) {
    id
    reply
  }
}
    `;
export type GetUserRepliesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserRepliesQuery, GetUserRepliesQueryVariables>
    } & TChildProps;
export function withGetUserReplies<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserRepliesQuery,
  GetUserRepliesQueryVariables,
  GetUserRepliesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserRepliesQuery, GetUserRepliesQueryVariables, GetUserRepliesProps<TChildProps, TDataName>>(GetUserRepliesDocument, {
      alias: 'getUserReplies',
      ...operationOptions
    });
};

/**
 * __useGetUserRepliesQuery__
 *
 * To run a query within a React component, call `useGetUserRepliesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserRepliesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserRepliesQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserRepliesQuery(baseOptions: Apollo.QueryHookOptions<GetUserRepliesQuery, GetUserRepliesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserRepliesQuery, GetUserRepliesQueryVariables>(GetUserRepliesDocument, options);
      }
export function useGetUserRepliesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserRepliesQuery, GetUserRepliesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserRepliesQuery, GetUserRepliesQueryVariables>(GetUserRepliesDocument, options);
        }
export type GetUserRepliesQueryHookResult = ReturnType<typeof useGetUserRepliesQuery>;
export type GetUserRepliesLazyQueryHookResult = ReturnType<typeof useGetUserRepliesLazyQuery>;
export type GetUserRepliesQueryResult = Apollo.QueryResult<GetUserRepliesQuery, GetUserRepliesQueryVariables>;
export const GetUserTweetsDocument = gql`
    query GetUserTweets($username: String!) {
  getUserTweets(username: $username) {
    id
    tweet
    tweetImage
  }
}
    `;
export type GetUserTweetsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserTweetsQuery, GetUserTweetsQueryVariables>
    } & TChildProps;
export function withGetUserTweets<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserTweetsQuery,
  GetUserTweetsQueryVariables,
  GetUserTweetsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserTweetsQuery, GetUserTweetsQueryVariables, GetUserTweetsProps<TChildProps, TDataName>>(GetUserTweetsDocument, {
      alias: 'getUserTweets',
      ...operationOptions
    });
};

/**
 * __useGetUserTweetsQuery__
 *
 * To run a query within a React component, call `useGetUserTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTweetsQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserTweetsQuery(baseOptions: Apollo.QueryHookOptions<GetUserTweetsQuery, GetUserTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTweetsQuery, GetUserTweetsQueryVariables>(GetUserTweetsDocument, options);
      }
export function useGetUserTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTweetsQuery, GetUserTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTweetsQuery, GetUserTweetsQueryVariables>(GetUserTweetsDocument, options);
        }
export type GetUserTweetsQueryHookResult = ReturnType<typeof useGetUserTweetsQuery>;
export type GetUserTweetsLazyQueryHookResult = ReturnType<typeof useGetUserTweetsLazyQuery>;
export type GetUserTweetsQueryResult = Apollo.QueryResult<GetUserTweetsQuery, GetUserTweetsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    name
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;