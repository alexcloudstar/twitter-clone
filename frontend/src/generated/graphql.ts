export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTweet: Tweet;
  editProfile: User;
  editTweet: Tweet;
  login: UserResponse;
  register: UserResponse;
  upVoteTweet: Scalars['Boolean'];
};


export type MutationCreateTweetArgs = {
  options: TweetFields;
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


export type MutationUpVoteTweetArgs = {
  tweetId: Scalars['Int'];
  value: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: UsersResponse;
  getTweet: Tweet;
  getTweets: Array<Tweet>;
  getUser: UserResponse;
  hello: Scalars['String'];
};


export type QueryGetTweetArgs = {
  tweetId: Scalars['Float'];
};


export type QueryGetUserArgs = {
  username: Scalars['String'];
};

export type Tweet = {
  __typename?: 'Tweet';
  createdAt: Scalars['String'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  points: Scalars['Float'];
  tweet: Scalars['String'];
  updatedAt: Scalars['String'];
  voteStatus?: Maybe<Scalars['Int']>;
};

export type TweetFields = {
  tweet: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
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
