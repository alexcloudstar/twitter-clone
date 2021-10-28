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

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet: Tweet;
  deleteReply: Scalars['Boolean'];
  deleteTweet: Scalars['Boolean'];
  editProfile: User;
  editTweet: Tweet;
  login: UserResponse;
  register: UserResponse;
  replyToTweet: Scalars['Boolean'];
  upVoteReply: Scalars['Boolean'];
  upVoteTweet: Scalars['Boolean'];
};


export type MutationCreateTweetArgs = {
  options: TweetFields;
};


export type MutationDeleteReplyArgs = {
  replyId: Scalars['Int'];
};


export type MutationDeleteTweetArgs = {
  tweetId: Scalars['Int'];
};


export type MutationEditProfileArgs = {
  userId: Scalars['Int'];
  username: Scalars['String'];
};


export type MutationEditTweetArgs = {
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
  getTweet: Tweet;
  getTweetReplies: Array<Replies>;
  getTweets: Array<Tweet>;
  getUser: UserResponse;
  hello: Scalars['String'];
  me?: Maybe<User>;
};


export type QueryGetTweetArgs = {
  tweetId: Scalars['Float'];
};


export type QueryGetTweetRepliesArgs = {
  tweetId: Scalars['Int'];
};


export type QueryGetUserArgs = {
  user_id: Scalars['Float'];
};

export type Replies = {
  __typename?: 'Replies';
  createdAt: Scalars['String'];
  creator?: Maybe<User>;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  reply: Scalars['String'];
  tweet?: Maybe<Tweet>;
  tweetId: Scalars['Float'];
  updatedAt: Scalars['String'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type Tweet = {
  __typename?: 'Tweet';
  createdAt: Scalars['String'];
  creator?: Maybe<User>;
  creatorId: Scalars['Float'];
  creatorUsername: Scalars['String'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  replies?: Maybe<Array<Replies>>;
  tweet: Scalars['String'];
  updatedAt: Scalars['String'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type TweetFields = {
  tweet: Scalars['String'];
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

export type RegularTweetFragment = { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: Maybe<number>, creatorUsername: string };

export type RegularUserFragment = { __typename?: 'User', id: number, username: string };

export type CreateTweetMutationVariables = Exact<{
  tweet: Scalars['String'];
}>;


export type CreateTweetMutation = { __typename?: 'Mutation', createTweet: { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: Maybe<number>, creatorUsername: string } };

export type DeleteTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type DeleteTweetMutation = { __typename?: 'Mutation', deleteTweet: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', username: string, id: number }> } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', username: string, id: number, email: string, createdAt: string, updatedAt: string }> } };

export type ReplyToTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
  reply: Scalars['String'];
}>;


export type ReplyToTweetMutation = { __typename?: 'Mutation', replyToTweet: boolean };

export type UpVoteTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type UpVoteTweetMutation = { __typename?: 'Mutation', upVoteTweet: boolean };

export type UpVoteReplyMutationVariables = Exact<{
  replyId: Scalars['Int'];
}>;


export type UpVoteReplyMutation = { __typename?: 'Mutation', upVoteReply: boolean };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: { __typename?: 'UsersResponse', users: Array<{ __typename?: 'User', id: number, username: string, createdAt: string }> } };

export type GetTweetQueryVariables = Exact<{
  tweetId: Scalars['Float'];
}>;


export type GetTweetQuery = { __typename?: 'Query', getTweet: { __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: Maybe<number>, creatorUsername: string } };

export type GetTweetRepliesQueryVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type GetTweetRepliesQuery = { __typename?: 'Query', getTweetReplies: Array<{ __typename?: 'Replies', id: number, reply: string, creatorId: number, tweetId: number, points: number }> };

export type GetTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTweetsQuery = { __typename?: 'Query', getTweets: Array<{ __typename?: 'Tweet', id: number, tweet: string, points: number, createdAt: string, creatorId: number, updatedAt: string, voteStatus?: Maybe<number>, creatorUsername: string }> };

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['Float'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserResponse', user?: Maybe<{ __typename?: 'User', id: number, username: string, email: string, avatarUrl: string, coverPhotoUrl: string, name: string, location: string, website: string, birthday: any, bio: string, createdAt: string }> } };

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: Maybe<{ __typename?: 'User', id: number, username: string }> };

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
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
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
export const ReplyToTweetDocument = gql`
    mutation replyToTweet($tweetId: Int!, $reply: String!) {
  replyToTweet(tweetId: $tweetId, reply: $reply)
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
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    users {
      id
      username
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
export const GetUserDocument = gql`
    query GetUser($user_id: Float!) {
  getUser(user_id: $user_id) {
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
 *      user_id: // value for 'user_id'
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
export const MeDocument = gql`
    query Me {
  me {
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