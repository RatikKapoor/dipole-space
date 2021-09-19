/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  GraphbackObjectID: string;
};

/** @model */
export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  /** @manyToOne(field: 'comments', key: 'noteId') */
  note?: Maybe<Note>;
  text?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<CommentFilter>>;
  description?: Maybe<StringInput>;
  not?: Maybe<CommentFilter>;
  noteId?: Maybe<GraphbackObjectIdInput>;
  or?: Maybe<Array<CommentFilter>>;
  text?: Maybe<StringInput>;
};

export type CommentResultList = {
  __typename?: 'CommentResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Comment>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type CommentSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<CommentSubscriptionFilter>>;
  description?: Maybe<StringInput>;
  not?: Maybe<CommentSubscriptionFilter>;
  or?: Maybe<Array<CommentSubscriptionFilter>>;
  text?: Maybe<StringInput>;
};

export type CreateCommentInput = {
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
  text?: Maybe<Scalars['String']>;
};

export type CreateHobbyInput = {
  rate: Scalars['Int'];
  total?: Maybe<Scalars['Int']>;
  type: HobbyType;
  unit: Scalars['String'];
  usersHobbyId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateMatchNodeInput = {
  user1: Scalars['String'];
  user2: Scalars['String'];
};

export type CreateNoteInput = {
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreatePlanInput = {
  address: Scalars['String'];
  date: Scalars['String'];
  hobbyType: HobbyType;
  venue: Scalars['String'];
};

export type CreateUserInput = {
  authId: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  birthDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  lastName: Scalars['String'];
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  rejected?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateUserPlanNodeInput = {
  planId?: Maybe<Scalars['GraphbackObjectID']>;
  userId?: Maybe<Scalars['GraphbackObjectID']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Other = 'Other'
}


export type GraphbackObjectIdInput = {
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ne?: Maybe<Scalars['GraphbackObjectID']>;
};

/** @model */
export type Hobby = {
  __typename?: 'Hobby';
  _id: Scalars['GraphbackObjectID'];
  rate: Scalars['Int'];
  total?: Maybe<Scalars['Int']>;
  type: HobbyType;
  unit: Scalars['String'];
  /** @manyToOne(field: 'hobbies', key: 'usersHobbyId') */
  usersHobby?: Maybe<User>;
};

export type HobbyFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<HobbyFilter>>;
  not?: Maybe<HobbyFilter>;
  or?: Maybe<Array<HobbyFilter>>;
  rate?: Maybe<IntInput>;
  total?: Maybe<IntInput>;
  type?: Maybe<StringInput>;
  unit?: Maybe<StringInput>;
  usersHobbyId?: Maybe<GraphbackObjectIdInput>;
};

export type HobbyResultList = {
  __typename?: 'HobbyResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Hobby>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type HobbySubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<HobbySubscriptionFilter>>;
  not?: Maybe<HobbySubscriptionFilter>;
  or?: Maybe<Array<HobbySubscriptionFilter>>;
  rate?: Maybe<IntInput>;
  total?: Maybe<IntInput>;
  type?: Maybe<StringInput>;
  unit?: Maybe<StringInput>;
};

export enum HobbyType {
  Cycling = 'Cycling',
  Hiking = 'Hiking',
  Music = 'Music',
  Painting = 'Painting',
  Rowing = 'Rowing',
  Running = 'Running',
  Studying = 'Studying',
  Swimming = 'Swimming',
  Weightlifting = 'Weightlifting',
  Yoga = 'Yoga'
}

export type IntInput = {
  between?: Maybe<Array<Scalars['Int']>>;
  eq?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
};

/** @model */
export type MatchNode = {
  __typename?: 'MatchNode';
  _id: Scalars['GraphbackObjectID'];
  user1: Scalars['String'];
  user2: Scalars['String'];
};

export type MatchNodeFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<MatchNodeFilter>>;
  not?: Maybe<MatchNodeFilter>;
  or?: Maybe<Array<MatchNodeFilter>>;
  user1?: Maybe<StringInput>;
  user2?: Maybe<StringInput>;
};

export type MatchNodeResultList = {
  __typename?: 'MatchNodeResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<MatchNode>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type MatchNodeSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<MatchNodeSubscriptionFilter>>;
  not?: Maybe<MatchNodeSubscriptionFilter>;
  or?: Maybe<Array<MatchNodeSubscriptionFilter>>;
  user1?: Maybe<StringInput>;
  user2?: Maybe<StringInput>;
};

export type MutateCommentInput = {
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  noteId?: Maybe<Scalars['GraphbackObjectID']>;
  text?: Maybe<Scalars['String']>;
};

export type MutateHobbyInput = {
  _id: Scalars['GraphbackObjectID'];
  rate?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  type?: Maybe<HobbyType>;
  unit?: Maybe<Scalars['String']>;
  usersHobbyId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateMatchNodeInput = {
  _id: Scalars['GraphbackObjectID'];
  user1?: Maybe<Scalars['String']>;
  user2?: Maybe<Scalars['String']>;
};

export type MutateNoteInput = {
  _id: Scalars['GraphbackObjectID'];
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MutatePlanInput = {
  _id: Scalars['GraphbackObjectID'];
  address?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  hobbyType?: Maybe<HobbyType>;
  venue?: Maybe<Scalars['String']>;
};

export type MutateUserInput = {
  _id: Scalars['GraphbackObjectID'];
  authId?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  lastName?: Maybe<Scalars['String']>;
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  rejected?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutateUserPlanNodeInput = {
  _id: Scalars['GraphbackObjectID'];
  planId?: Maybe<Scalars['GraphbackObjectID']>;
  userId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createHobby?: Maybe<Hobby>;
  createMatchNode?: Maybe<MatchNode>;
  createNote?: Maybe<Note>;
  createPlan?: Maybe<Plan>;
  createUser?: Maybe<User>;
  createUserPlanNode?: Maybe<UserPlanNode>;
  deleteComment?: Maybe<Comment>;
  deleteHobby?: Maybe<Hobby>;
  deleteMatchNode?: Maybe<MatchNode>;
  deleteNote?: Maybe<Note>;
  deletePlan?: Maybe<Plan>;
  deleteUser?: Maybe<User>;
  deleteUserPlanNode?: Maybe<UserPlanNode>;
  updateComment?: Maybe<Comment>;
  updateHobby?: Maybe<Hobby>;
  updateMatchNode?: Maybe<MatchNode>;
  updateNote?: Maybe<Note>;
  updatePlan?: Maybe<Plan>;
  updateUser?: Maybe<User>;
  updateUserPlanNode?: Maybe<UserPlanNode>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateHobbyArgs = {
  input: CreateHobbyInput;
};


export type MutationCreateMatchNodeArgs = {
  input: CreateMatchNodeInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreatePlanArgs = {
  input: CreatePlanInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserPlanNodeArgs = {
  input: CreateUserPlanNodeInput;
};


export type MutationDeleteCommentArgs = {
  input: MutateCommentInput;
};


export type MutationDeleteHobbyArgs = {
  input: MutateHobbyInput;
};


export type MutationDeleteMatchNodeArgs = {
  input: MutateMatchNodeInput;
};


export type MutationDeleteNoteArgs = {
  input: MutateNoteInput;
};


export type MutationDeletePlanArgs = {
  input: MutatePlanInput;
};


export type MutationDeleteUserArgs = {
  input: MutateUserInput;
};


export type MutationDeleteUserPlanNodeArgs = {
  input: MutateUserPlanNodeInput;
};


export type MutationUpdateCommentArgs = {
  input: MutateCommentInput;
};


export type MutationUpdateHobbyArgs = {
  input: MutateHobbyInput;
};


export type MutationUpdateMatchNodeArgs = {
  input: MutateMatchNodeInput;
};


export type MutationUpdateNoteArgs = {
  input: MutateNoteInput;
};


export type MutationUpdatePlanArgs = {
  input: MutatePlanInput;
};


export type MutationUpdateUserArgs = {
  input: MutateUserInput;
};


export type MutationUpdateUserPlanNodeArgs = {
  input: MutateUserPlanNodeInput;
};

/** @model */
export type Note = {
  __typename?: 'Note';
  _id: Scalars['GraphbackObjectID'];
  /**
   * @oneToMany(field: 'note', key: 'noteId')
   * @oneToMany(field: 'note')
   */
  comments: Array<Maybe<Comment>>;
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


/** @model */
export type NoteCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};

export type NoteFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<NoteFilter>>;
  description?: Maybe<StringInput>;
  not?: Maybe<NoteFilter>;
  or?: Maybe<Array<NoteFilter>>;
  title?: Maybe<StringInput>;
};

export type NoteResultList = {
  __typename?: 'NoteResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Note>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type NoteSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<NoteSubscriptionFilter>>;
  description?: Maybe<StringInput>;
  not?: Maybe<NoteSubscriptionFilter>;
  or?: Maybe<Array<NoteSubscriptionFilter>>;
  title?: Maybe<StringInput>;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** @model */
export type Plan = {
  __typename?: 'Plan';
  _id: Scalars['GraphbackObjectID'];
  address: Scalars['String'];
  date: Scalars['String'];
  hobbyType: HobbyType;
  /**
   * @oneToMany(field: 'plan', key: 'planId')
   * @oneToMany(field: 'plan')
   */
  users?: Maybe<Array<Maybe<UserPlanNode>>>;
  venue: Scalars['String'];
};


/** @model */
export type PlanUsersArgs = {
  filter?: Maybe<UserPlanNodeFilter>;
};

export type PlanFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  address?: Maybe<StringInput>;
  and?: Maybe<Array<PlanFilter>>;
  date?: Maybe<StringInput>;
  hobbyType?: Maybe<StringInput>;
  not?: Maybe<PlanFilter>;
  or?: Maybe<Array<PlanFilter>>;
  venue?: Maybe<StringInput>;
};

export type PlanResultList = {
  __typename?: 'PlanResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<Plan>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PlanSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  address?: Maybe<StringInput>;
  and?: Maybe<Array<PlanSubscriptionFilter>>;
  date?: Maybe<StringInput>;
  hobbyType?: Maybe<StringInput>;
  not?: Maybe<PlanSubscriptionFilter>;
  or?: Maybe<Array<PlanSubscriptionFilter>>;
  venue?: Maybe<StringInput>;
};

export type Query = {
  __typename?: 'Query';
  findComments: CommentResultList;
  findHobbies: HobbyResultList;
  findMatchNodes: MatchNodeResultList;
  findNotes: NoteResultList;
  findPlans: PlanResultList;
  findUserPlanNodes: UserPlanNodeResultList;
  findUsers: UserResultList;
  getComment?: Maybe<Comment>;
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getHobby?: Maybe<Hobby>;
  getMatchNode?: Maybe<MatchNode>;
  getNote?: Maybe<Note>;
  getPlan?: Maybe<Plan>;
  getUser?: Maybe<User>;
  getUserPlanNode?: Maybe<UserPlanNode>;
};


export type QueryFindCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindHobbiesArgs = {
  filter?: Maybe<HobbyFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindMatchNodesArgs = {
  filter?: Maybe<MatchNodeFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindNotesArgs = {
  filter?: Maybe<NoteFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindPlansArgs = {
  filter?: Maybe<PlanFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindUserPlanNodesArgs = {
  filter?: Maybe<UserPlanNodeFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryFindUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<OrderByInput>;
  page?: Maybe<PageRequest>;
};


export type QueryGetCommentArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetHobbyArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetMatchNodeArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetNoteArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetPlanArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetUserArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryGetUserPlanNodeArgs = {
  id: Scalars['GraphbackObjectID'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringInput = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  deletedComment: Comment;
  deletedHobby: Hobby;
  deletedMatchNode: MatchNode;
  deletedNote: Note;
  deletedPlan: Plan;
  deletedUser: User;
  deletedUserPlanNode: UserPlanNode;
  newComment: Comment;
  newHobby: Hobby;
  newMatchNode: MatchNode;
  newNote: Note;
  newPlan: Plan;
  newUser: User;
  newUserPlanNode: UserPlanNode;
  updatedComment: Comment;
  updatedHobby: Hobby;
  updatedMatchNode: MatchNode;
  updatedNote: Note;
  updatedPlan: Plan;
  updatedUser: User;
  updatedUserPlanNode: UserPlanNode;
};


export type SubscriptionDeletedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionDeletedHobbyArgs = {
  filter?: Maybe<HobbySubscriptionFilter>;
};


export type SubscriptionDeletedMatchNodeArgs = {
  filter?: Maybe<MatchNodeSubscriptionFilter>;
};


export type SubscriptionDeletedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionDeletedPlanArgs = {
  filter?: Maybe<PlanSubscriptionFilter>;
};


export type SubscriptionDeletedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionDeletedUserPlanNodeArgs = {
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
};


export type SubscriptionNewCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionNewHobbyArgs = {
  filter?: Maybe<HobbySubscriptionFilter>;
};


export type SubscriptionNewMatchNodeArgs = {
  filter?: Maybe<MatchNodeSubscriptionFilter>;
};


export type SubscriptionNewNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionNewPlanArgs = {
  filter?: Maybe<PlanSubscriptionFilter>;
};


export type SubscriptionNewUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionNewUserPlanNodeArgs = {
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
};


export type SubscriptionUpdatedCommentArgs = {
  filter?: Maybe<CommentSubscriptionFilter>;
};


export type SubscriptionUpdatedHobbyArgs = {
  filter?: Maybe<HobbySubscriptionFilter>;
};


export type SubscriptionUpdatedMatchNodeArgs = {
  filter?: Maybe<MatchNodeSubscriptionFilter>;
};


export type SubscriptionUpdatedNoteArgs = {
  filter?: Maybe<NoteSubscriptionFilter>;
};


export type SubscriptionUpdatedPlanArgs = {
  filter?: Maybe<PlanSubscriptionFilter>;
};


export type SubscriptionUpdatedUserArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};


export type SubscriptionUpdatedUserPlanNodeArgs = {
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
};

/** @model */
export type User = {
  __typename?: 'User';
  _id: Scalars['GraphbackObjectID'];
  authId: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  birthDate: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender: Gender;
  /**
   * @oneToMany(field: 'usersHobby', key: 'usersHobbyId')
   * @oneToMany(field: 'usersHobby')
   */
  hobbies?: Maybe<Array<Maybe<Hobby>>>;
  lastName: Scalars['String'];
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'user', key: 'userId')
   * @oneToMany(field: 'user')
   */
  plans?: Maybe<Array<Maybe<UserPlanNode>>>;
  rejected?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** @model */
export type UserHobbiesArgs = {
  filter?: Maybe<HobbyFilter>;
};


/** @model */
export type UserPlansArgs = {
  filter?: Maybe<UserPlanNodeFilter>;
};

export type UserFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<UserFilter>>;
  authId?: Maybe<StringInput>;
  bio?: Maybe<StringInput>;
  birthDate?: Maybe<StringInput>;
  email?: Maybe<StringInput>;
  firstName?: Maybe<StringInput>;
  gender?: Maybe<StringInput>;
  lastName?: Maybe<StringInput>;
  likes?: Maybe<StringInput>;
  not?: Maybe<UserFilter>;
  or?: Maybe<Array<UserFilter>>;
  phoneNumber?: Maybe<StringInput>;
  photoUrl?: Maybe<StringInput>;
  rejected?: Maybe<StringInput>;
};

/** @model */
export type UserPlanNode = {
  __typename?: 'UserPlanNode';
  _id: Scalars['GraphbackObjectID'];
  /** @manyToOne(field: 'users', key: 'planId') */
  plan?: Maybe<Plan>;
  /** @manyToOne(field: 'plans', key: 'userId') */
  user?: Maybe<User>;
};

export type UserPlanNodeFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<UserPlanNodeFilter>>;
  not?: Maybe<UserPlanNodeFilter>;
  or?: Maybe<Array<UserPlanNodeFilter>>;
  planId?: Maybe<GraphbackObjectIdInput>;
  userId?: Maybe<GraphbackObjectIdInput>;
};

export type UserPlanNodeResultList = {
  __typename?: 'UserPlanNodeResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<UserPlanNode>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserPlanNodeSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<UserPlanNodeSubscriptionFilter>>;
  not?: Maybe<UserPlanNodeSubscriptionFilter>;
  or?: Maybe<Array<UserPlanNodeSubscriptionFilter>>;
};

export type UserResultList = {
  __typename?: 'UserResultList';
  count?: Maybe<Scalars['Int']>;
  items: Array<Maybe<User>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserSubscriptionFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<UserSubscriptionFilter>>;
  authId?: Maybe<StringInput>;
  bio?: Maybe<StringInput>;
  birthDate?: Maybe<StringInput>;
  email?: Maybe<StringInput>;
  firstName?: Maybe<StringInput>;
  gender?: Maybe<StringInput>;
  lastName?: Maybe<StringInput>;
  likes?: Maybe<StringInput>;
  not?: Maybe<UserSubscriptionFilter>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  phoneNumber?: Maybe<StringInput>;
  photoUrl?: Maybe<StringInput>;
  rejected?: Maybe<StringInput>;
};

export type GetDraftNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDraftNotesQuery = (
  { __typename?: 'Query' }
  & { getDraftNotes?: Maybe<Array<Maybe<(
    { __typename?: 'Note' }
    & NoteExpandedFieldsFragment
  )>>> }
);

export type NoteFieldsFragment = (
  { __typename?: 'Note' }
  & Pick<Note, '_id' | 'title' | 'description'>
);

export type NoteExpandedFieldsFragment = (
  { __typename?: 'Note' }
  & Pick<Note, '_id' | 'title' | 'description'>
  & { comments: Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, '_id' | 'text' | 'description'>
  )>> }
);

export type CommentFieldsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, '_id' | 'text' | 'description'>
);

export type CommentExpandedFieldsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, '_id' | 'text' | 'description'>
  & { note?: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, '_id' | 'title' | 'description'>
  )> }
);

export type HobbyFieldsFragment = (
  { __typename?: 'Hobby' }
  & Pick<Hobby, '_id' | 'type' | 'rate' | 'unit' | 'total'>
);

export type HobbyExpandedFieldsFragment = (
  { __typename?: 'Hobby' }
  & Pick<Hobby, '_id' | 'type' | 'rate' | 'unit' | 'total'>
  & { usersHobby?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'authId' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'gender' | 'birthDate' | 'photoUrl' | 'bio' | 'likes' | 'rejected'>
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'authId' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'gender' | 'birthDate' | 'photoUrl' | 'bio' | 'likes' | 'rejected'>
);

export type UserExpandedFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'authId' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'gender' | 'birthDate' | 'photoUrl' | 'bio' | 'likes' | 'rejected'>
  & { hobbies?: Maybe<Array<Maybe<(
    { __typename?: 'Hobby' }
    & Pick<Hobby, '_id' | 'type' | 'rate' | 'unit' | 'total'>
  )>>>, plans?: Maybe<Array<Maybe<(
    { __typename?: 'UserPlanNode' }
    & Pick<UserPlanNode, '_id'>
  )>>> }
);

export type UserPlanNodeFieldsFragment = (
  { __typename?: 'UserPlanNode' }
  & Pick<UserPlanNode, '_id'>
);

export type UserPlanNodeExpandedFieldsFragment = (
  { __typename?: 'UserPlanNode' }
  & Pick<UserPlanNode, '_id'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'authId' | 'firstName' | 'lastName' | 'email' | 'phoneNumber' | 'gender' | 'birthDate' | 'photoUrl' | 'bio' | 'likes' | 'rejected'>
  )>, plan?: Maybe<(
    { __typename?: 'Plan' }
    & Pick<Plan, '_id' | 'hobbyType' | 'venue' | 'address' | 'date'>
  )> }
);

export type PlanFieldsFragment = (
  { __typename?: 'Plan' }
  & Pick<Plan, '_id' | 'hobbyType' | 'venue' | 'address' | 'date'>
);

export type PlanExpandedFieldsFragment = (
  { __typename?: 'Plan' }
  & Pick<Plan, '_id' | 'hobbyType' | 'venue' | 'address' | 'date'>
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'UserPlanNode' }
    & Pick<UserPlanNode, '_id'>
  )>>> }
);

export type MatchNodeFieldsFragment = (
  { __typename?: 'MatchNode' }
  & Pick<MatchNode, '_id' | 'user1' | 'user2'>
);

export type MatchNodeExpandedFieldsFragment = (
  { __typename?: 'MatchNode' }
  & Pick<MatchNode, '_id' | 'user1' | 'user2'>
);

export type FindNotesQueryVariables = Exact<{
  filter?: Maybe<NoteFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindNotesQuery = (
  { __typename?: 'Query' }
  & { findNotes: (
    { __typename?: 'NoteResultList' }
    & Pick<NoteResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Note' }
      & NoteExpandedFieldsFragment
    )>> }
  ) }
);

export type GetNoteQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetNoteQuery = (
  { __typename?: 'Query' }
  & { getNote?: Maybe<(
    { __typename?: 'Note' }
    & NoteExpandedFieldsFragment
  )> }
);

export type FindCommentsQueryVariables = Exact<{
  filter?: Maybe<CommentFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindCommentsQuery = (
  { __typename?: 'Query' }
  & { findComments: (
    { __typename?: 'CommentResultList' }
    & Pick<CommentResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Comment' }
      & CommentExpandedFieldsFragment
    )>> }
  ) }
);

export type GetCommentQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetCommentQuery = (
  { __typename?: 'Query' }
  & { getComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentExpandedFieldsFragment
  )> }
);

export type FindHobbiesQueryVariables = Exact<{
  filter?: Maybe<HobbyFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindHobbiesQuery = (
  { __typename?: 'Query' }
  & { findHobbies: (
    { __typename?: 'HobbyResultList' }
    & Pick<HobbyResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Hobby' }
      & HobbyExpandedFieldsFragment
    )>> }
  ) }
);

export type GetHobbyQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetHobbyQuery = (
  { __typename?: 'Query' }
  & { getHobby?: Maybe<(
    { __typename?: 'Hobby' }
    & HobbyExpandedFieldsFragment
  )> }
);

export type FindUsersQueryVariables = Exact<{
  filter?: Maybe<UserFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindUsersQuery = (
  { __typename?: 'Query' }
  & { findUsers: (
    { __typename?: 'UserResultList' }
    & Pick<UserResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'User' }
      & UserExpandedFieldsFragment
    )>> }
  ) }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & UserExpandedFieldsFragment
  )> }
);

export type FindUserPlanNodesQueryVariables = Exact<{
  filter?: Maybe<UserPlanNodeFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindUserPlanNodesQuery = (
  { __typename?: 'Query' }
  & { findUserPlanNodes: (
    { __typename?: 'UserPlanNodeResultList' }
    & Pick<UserPlanNodeResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'UserPlanNode' }
      & UserPlanNodeExpandedFieldsFragment
    )>> }
  ) }
);

export type GetUserPlanNodeQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetUserPlanNodeQuery = (
  { __typename?: 'Query' }
  & { getUserPlanNode?: Maybe<(
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeExpandedFieldsFragment
  )> }
);

export type FindPlansQueryVariables = Exact<{
  filter?: Maybe<PlanFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindPlansQuery = (
  { __typename?: 'Query' }
  & { findPlans: (
    { __typename?: 'PlanResultList' }
    & Pick<PlanResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Plan' }
      & PlanExpandedFieldsFragment
    )>> }
  ) }
);

export type GetPlanQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetPlanQuery = (
  { __typename?: 'Query' }
  & { getPlan?: Maybe<(
    { __typename?: 'Plan' }
    & PlanExpandedFieldsFragment
  )> }
);

export type FindMatchNodesQueryVariables = Exact<{
  filter?: Maybe<MatchNodeFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindMatchNodesQuery = (
  { __typename?: 'Query' }
  & { findMatchNodes: (
    { __typename?: 'MatchNodeResultList' }
    & Pick<MatchNodeResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'MatchNode' }
      & MatchNodeExpandedFieldsFragment
    )>> }
  ) }
);

export type GetMatchNodeQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetMatchNodeQuery = (
  { __typename?: 'Query' }
  & { getMatchNode?: Maybe<(
    { __typename?: 'MatchNode' }
    & MatchNodeExpandedFieldsFragment
  )> }
);

export type CreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote?: Maybe<(
    { __typename?: 'Note' }
    & NoteFieldsFragment
  )> }
);

export type UpdateNoteMutationVariables = Exact<{
  input: MutateNoteInput;
}>;


export type UpdateNoteMutation = (
  { __typename?: 'Mutation' }
  & { updateNote?: Maybe<(
    { __typename?: 'Note' }
    & NoteFieldsFragment
  )> }
);

export type DeleteNoteMutationVariables = Exact<{
  input: MutateNoteInput;
}>;


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & { deleteNote?: Maybe<(
    { __typename?: 'Note' }
    & NoteFieldsFragment
  )> }
);

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  )> }
);

export type UpdateCommentMutationVariables = Exact<{
  input: MutateCommentInput;
}>;


export type UpdateCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  )> }
);

export type DeleteCommentMutationVariables = Exact<{
  input: MutateCommentInput;
}>;


export type DeleteCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  )> }
);

export type CreateHobbyMutationVariables = Exact<{
  input: CreateHobbyInput;
}>;


export type CreateHobbyMutation = (
  { __typename?: 'Mutation' }
  & { createHobby?: Maybe<(
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  )> }
);

export type UpdateHobbyMutationVariables = Exact<{
  input: MutateHobbyInput;
}>;


export type UpdateHobbyMutation = (
  { __typename?: 'Mutation' }
  & { updateHobby?: Maybe<(
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  )> }
);

export type DeleteHobbyMutationVariables = Exact<{
  input: MutateHobbyInput;
}>;


export type DeleteHobbyMutation = (
  { __typename?: 'Mutation' }
  & { deleteHobby?: Maybe<(
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  input: MutateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  input: MutateUserInput;
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type CreateUserPlanNodeMutationVariables = Exact<{
  input: CreateUserPlanNodeInput;
}>;


export type CreateUserPlanNodeMutation = (
  { __typename?: 'Mutation' }
  & { createUserPlanNode?: Maybe<(
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  )> }
);

export type UpdateUserPlanNodeMutationVariables = Exact<{
  input: MutateUserPlanNodeInput;
}>;


export type UpdateUserPlanNodeMutation = (
  { __typename?: 'Mutation' }
  & { updateUserPlanNode?: Maybe<(
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  )> }
);

export type DeleteUserPlanNodeMutationVariables = Exact<{
  input: MutateUserPlanNodeInput;
}>;


export type DeleteUserPlanNodeMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserPlanNode?: Maybe<(
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  )> }
);

export type CreatePlanMutationVariables = Exact<{
  input: CreatePlanInput;
}>;


export type CreatePlanMutation = (
  { __typename?: 'Mutation' }
  & { createPlan?: Maybe<(
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  )> }
);

export type UpdatePlanMutationVariables = Exact<{
  input: MutatePlanInput;
}>;


export type UpdatePlanMutation = (
  { __typename?: 'Mutation' }
  & { updatePlan?: Maybe<(
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  )> }
);

export type DeletePlanMutationVariables = Exact<{
  input: MutatePlanInput;
}>;


export type DeletePlanMutation = (
  { __typename?: 'Mutation' }
  & { deletePlan?: Maybe<(
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  )> }
);

export type CreateMatchNodeMutationVariables = Exact<{
  input: CreateMatchNodeInput;
}>;


export type CreateMatchNodeMutation = (
  { __typename?: 'Mutation' }
  & { createMatchNode?: Maybe<(
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  )> }
);

export type UpdateMatchNodeMutationVariables = Exact<{
  input: MutateMatchNodeInput;
}>;


export type UpdateMatchNodeMutation = (
  { __typename?: 'Mutation' }
  & { updateMatchNode?: Maybe<(
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  )> }
);

export type DeleteMatchNodeMutationVariables = Exact<{
  input: MutateMatchNodeInput;
}>;


export type DeleteMatchNodeMutation = (
  { __typename?: 'Mutation' }
  & { deleteMatchNode?: Maybe<(
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  )> }
);

export type NewNoteSubscriptionVariables = Exact<{
  filter?: Maybe<NoteSubscriptionFilter>;
}>;


export type NewNoteSubscription = (
  { __typename?: 'Subscription' }
  & { newNote: (
    { __typename?: 'Note' }
    & NoteFieldsFragment
  ) }
);

export type UpdatedNoteSubscriptionVariables = Exact<{
  filter?: Maybe<NoteSubscriptionFilter>;
}>;


export type UpdatedNoteSubscription = (
  { __typename?: 'Subscription' }
  & { updatedNote: (
    { __typename?: 'Note' }
    & NoteFieldsFragment
  ) }
);

export type DeletedNoteSubscriptionVariables = Exact<{
  filter?: Maybe<NoteSubscriptionFilter>;
}>;


export type DeletedNoteSubscription = (
  { __typename?: 'Subscription' }
  & { deletedNote: (
    { __typename?: 'Note' }
    & NoteFieldsFragment
  ) }
);

export type NewCommentSubscriptionVariables = Exact<{
  filter?: Maybe<CommentSubscriptionFilter>;
}>;


export type NewCommentSubscription = (
  { __typename?: 'Subscription' }
  & { newComment: (
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  ) }
);

export type UpdatedCommentSubscriptionVariables = Exact<{
  filter?: Maybe<CommentSubscriptionFilter>;
}>;


export type UpdatedCommentSubscription = (
  { __typename?: 'Subscription' }
  & { updatedComment: (
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  ) }
);

export type DeletedCommentSubscriptionVariables = Exact<{
  filter?: Maybe<CommentSubscriptionFilter>;
}>;


export type DeletedCommentSubscription = (
  { __typename?: 'Subscription' }
  & { deletedComment: (
    { __typename?: 'Comment' }
    & CommentFieldsFragment
  ) }
);

export type NewHobbySubscriptionVariables = Exact<{
  filter?: Maybe<HobbySubscriptionFilter>;
}>;


export type NewHobbySubscription = (
  { __typename?: 'Subscription' }
  & { newHobby: (
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  ) }
);

export type UpdatedHobbySubscriptionVariables = Exact<{
  filter?: Maybe<HobbySubscriptionFilter>;
}>;


export type UpdatedHobbySubscription = (
  { __typename?: 'Subscription' }
  & { updatedHobby: (
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  ) }
);

export type DeletedHobbySubscriptionVariables = Exact<{
  filter?: Maybe<HobbySubscriptionFilter>;
}>;


export type DeletedHobbySubscription = (
  { __typename?: 'Subscription' }
  & { deletedHobby: (
    { __typename?: 'Hobby' }
    & HobbyFieldsFragment
  ) }
);

export type NewUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;


export type NewUserSubscription = (
  { __typename?: 'Subscription' }
  & { newUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type UpdatedUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;


export type UpdatedUserSubscription = (
  { __typename?: 'Subscription' }
  & { updatedUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type DeletedUserSubscriptionVariables = Exact<{
  filter?: Maybe<UserSubscriptionFilter>;
}>;


export type DeletedUserSubscription = (
  { __typename?: 'Subscription' }
  & { deletedUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type NewUserPlanNodeSubscriptionVariables = Exact<{
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
}>;


export type NewUserPlanNodeSubscription = (
  { __typename?: 'Subscription' }
  & { newUserPlanNode: (
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  ) }
);

export type UpdatedUserPlanNodeSubscriptionVariables = Exact<{
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
}>;


export type UpdatedUserPlanNodeSubscription = (
  { __typename?: 'Subscription' }
  & { updatedUserPlanNode: (
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  ) }
);

export type DeletedUserPlanNodeSubscriptionVariables = Exact<{
  filter?: Maybe<UserPlanNodeSubscriptionFilter>;
}>;


export type DeletedUserPlanNodeSubscription = (
  { __typename?: 'Subscription' }
  & { deletedUserPlanNode: (
    { __typename?: 'UserPlanNode' }
    & UserPlanNodeFieldsFragment
  ) }
);

export type NewPlanSubscriptionVariables = Exact<{
  filter?: Maybe<PlanSubscriptionFilter>;
}>;


export type NewPlanSubscription = (
  { __typename?: 'Subscription' }
  & { newPlan: (
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  ) }
);

export type UpdatedPlanSubscriptionVariables = Exact<{
  filter?: Maybe<PlanSubscriptionFilter>;
}>;


export type UpdatedPlanSubscription = (
  { __typename?: 'Subscription' }
  & { updatedPlan: (
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  ) }
);

export type DeletedPlanSubscriptionVariables = Exact<{
  filter?: Maybe<PlanSubscriptionFilter>;
}>;


export type DeletedPlanSubscription = (
  { __typename?: 'Subscription' }
  & { deletedPlan: (
    { __typename?: 'Plan' }
    & PlanFieldsFragment
  ) }
);

export type NewMatchNodeSubscriptionVariables = Exact<{
  filter?: Maybe<MatchNodeSubscriptionFilter>;
}>;


export type NewMatchNodeSubscription = (
  { __typename?: 'Subscription' }
  & { newMatchNode: (
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  ) }
);

export type UpdatedMatchNodeSubscriptionVariables = Exact<{
  filter?: Maybe<MatchNodeSubscriptionFilter>;
}>;


export type UpdatedMatchNodeSubscription = (
  { __typename?: 'Subscription' }
  & { updatedMatchNode: (
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  ) }
);

export type DeletedMatchNodeSubscriptionVariables = Exact<{
  filter?: Maybe<MatchNodeSubscriptionFilter>;
}>;


export type DeletedMatchNodeSubscription = (
  { __typename?: 'Subscription' }
  & { deletedMatchNode: (
    { __typename?: 'MatchNode' }
    & MatchNodeFieldsFragment
  ) }
);

export const NoteFieldsFragmentDoc = gql`
    fragment NoteFields on Note {
  _id
  title
  description
}
    `;
export const NoteExpandedFieldsFragmentDoc = gql`
    fragment NoteExpandedFields on Note {
  _id
  title
  description
  comments {
    _id
    text
    description
  }
}
    `;
export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  _id
  text
  description
}
    `;
export const CommentExpandedFieldsFragmentDoc = gql`
    fragment CommentExpandedFields on Comment {
  _id
  text
  description
  note {
    _id
    title
    description
  }
}
    `;
export const HobbyFieldsFragmentDoc = gql`
    fragment HobbyFields on Hobby {
  _id
  type
  rate
  unit
  total
}
    `;
export const HobbyExpandedFieldsFragmentDoc = gql`
    fragment HobbyExpandedFields on Hobby {
  _id
  type
  rate
  unit
  total
  usersHobby {
    _id
    authId
    firstName
    lastName
    email
    phoneNumber
    gender
    birthDate
    photoUrl
    bio
    likes
    rejected
  }
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  _id
  authId
  firstName
  lastName
  email
  phoneNumber
  gender
  birthDate
  photoUrl
  bio
  likes
  rejected
}
    `;
export const UserExpandedFieldsFragmentDoc = gql`
    fragment UserExpandedFields on User {
  _id
  authId
  firstName
  lastName
  email
  phoneNumber
  gender
  birthDate
  photoUrl
  bio
  hobbies {
    _id
    type
    rate
    unit
    total
  }
  plans {
    _id
  }
  likes
  rejected
}
    `;
export const UserPlanNodeFieldsFragmentDoc = gql`
    fragment UserPlanNodeFields on UserPlanNode {
  _id
}
    `;
export const UserPlanNodeExpandedFieldsFragmentDoc = gql`
    fragment UserPlanNodeExpandedFields on UserPlanNode {
  _id
  user {
    _id
    authId
    firstName
    lastName
    email
    phoneNumber
    gender
    birthDate
    photoUrl
    bio
    likes
    rejected
  }
  plan {
    _id
    hobbyType
    venue
    address
    date
  }
}
    `;
export const PlanFieldsFragmentDoc = gql`
    fragment PlanFields on Plan {
  _id
  hobbyType
  venue
  address
  date
}
    `;
export const PlanExpandedFieldsFragmentDoc = gql`
    fragment PlanExpandedFields on Plan {
  _id
  users {
    _id
  }
  hobbyType
  venue
  address
  date
}
    `;
export const MatchNodeFieldsFragmentDoc = gql`
    fragment MatchNodeFields on MatchNode {
  _id
  user1
  user2
}
    `;
export const MatchNodeExpandedFieldsFragmentDoc = gql`
    fragment MatchNodeExpandedFields on MatchNode {
  _id
  user1
  user2
}
    `;
export const GetDraftNotesDocument = gql`
    query getDraftNotes {
  getDraftNotes {
    ...NoteExpandedFields
  }
}
    ${NoteExpandedFieldsFragmentDoc}`;

/**
 * __useGetDraftNotesQuery__
 *
 * To run a query within a React component, call `useGetDraftNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDraftNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDraftNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDraftNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetDraftNotesQuery, GetDraftNotesQueryVariables>) {
        return Apollo.useQuery<GetDraftNotesQuery, GetDraftNotesQueryVariables>(GetDraftNotesDocument, baseOptions);
      }
export function useGetDraftNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDraftNotesQuery, GetDraftNotesQueryVariables>) {
          return Apollo.useLazyQuery<GetDraftNotesQuery, GetDraftNotesQueryVariables>(GetDraftNotesDocument, baseOptions);
        }
export type GetDraftNotesQueryHookResult = ReturnType<typeof useGetDraftNotesQuery>;
export type GetDraftNotesLazyQueryHookResult = ReturnType<typeof useGetDraftNotesLazyQuery>;
export type GetDraftNotesQueryResult = Apollo.QueryResult<GetDraftNotesQuery, GetDraftNotesQueryVariables>;
export const FindNotesDocument = gql`
    query findNotes($filter: NoteFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findNotes(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...NoteExpandedFields
    }
    offset
    limit
    count
  }
}
    ${NoteExpandedFieldsFragmentDoc}`;

/**
 * __useFindNotesQuery__
 *
 * To run a query within a React component, call `useFindNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNotesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindNotesQuery(baseOptions?: Apollo.QueryHookOptions<FindNotesQuery, FindNotesQueryVariables>) {
        return Apollo.useQuery<FindNotesQuery, FindNotesQueryVariables>(FindNotesDocument, baseOptions);
      }
export function useFindNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindNotesQuery, FindNotesQueryVariables>) {
          return Apollo.useLazyQuery<FindNotesQuery, FindNotesQueryVariables>(FindNotesDocument, baseOptions);
        }
export type FindNotesQueryHookResult = ReturnType<typeof useFindNotesQuery>;
export type FindNotesLazyQueryHookResult = ReturnType<typeof useFindNotesLazyQuery>;
export type FindNotesQueryResult = Apollo.QueryResult<FindNotesQuery, FindNotesQueryVariables>;
export const GetNoteDocument = gql`
    query getNote($id: GraphbackObjectID!) {
  getNote(id: $id) {
    ...NoteExpandedFields
  }
}
    ${NoteExpandedFieldsFragmentDoc}`;

/**
 * __useGetNoteQuery__
 *
 * To run a query within a React component, call `useGetNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetNoteQuery(baseOptions: Apollo.QueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
        return Apollo.useQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, baseOptions);
      }
export function useGetNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
          return Apollo.useLazyQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, baseOptions);
        }
export type GetNoteQueryHookResult = ReturnType<typeof useGetNoteQuery>;
export type GetNoteLazyQueryHookResult = ReturnType<typeof useGetNoteLazyQuery>;
export type GetNoteQueryResult = Apollo.QueryResult<GetNoteQuery, GetNoteQueryVariables>;
export const FindCommentsDocument = gql`
    query findComments($filter: CommentFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findComments(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...CommentExpandedFields
    }
    offset
    limit
    count
  }
}
    ${CommentExpandedFieldsFragmentDoc}`;

/**
 * __useFindCommentsQuery__
 *
 * To run a query within a React component, call `useFindCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCommentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindCommentsQuery(baseOptions?: Apollo.QueryHookOptions<FindCommentsQuery, FindCommentsQueryVariables>) {
        return Apollo.useQuery<FindCommentsQuery, FindCommentsQueryVariables>(FindCommentsDocument, baseOptions);
      }
export function useFindCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCommentsQuery, FindCommentsQueryVariables>) {
          return Apollo.useLazyQuery<FindCommentsQuery, FindCommentsQueryVariables>(FindCommentsDocument, baseOptions);
        }
export type FindCommentsQueryHookResult = ReturnType<typeof useFindCommentsQuery>;
export type FindCommentsLazyQueryHookResult = ReturnType<typeof useFindCommentsLazyQuery>;
export type FindCommentsQueryResult = Apollo.QueryResult<FindCommentsQuery, FindCommentsQueryVariables>;
export const GetCommentDocument = gql`
    query getComment($id: GraphbackObjectID!) {
  getComment(id: $id) {
    ...CommentExpandedFields
  }
}
    ${CommentExpandedFieldsFragmentDoc}`;

/**
 * __useGetCommentQuery__
 *
 * To run a query within a React component, call `useGetCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentQuery(baseOptions: Apollo.QueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
        return Apollo.useQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
      }
export function useGetCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentQuery, GetCommentQueryVariables>) {
          return Apollo.useLazyQuery<GetCommentQuery, GetCommentQueryVariables>(GetCommentDocument, baseOptions);
        }
export type GetCommentQueryHookResult = ReturnType<typeof useGetCommentQuery>;
export type GetCommentLazyQueryHookResult = ReturnType<typeof useGetCommentLazyQuery>;
export type GetCommentQueryResult = Apollo.QueryResult<GetCommentQuery, GetCommentQueryVariables>;
export const FindHobbiesDocument = gql`
    query findHobbies($filter: HobbyFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findHobbies(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...HobbyExpandedFields
    }
    offset
    limit
    count
  }
}
    ${HobbyExpandedFieldsFragmentDoc}`;

/**
 * __useFindHobbiesQuery__
 *
 * To run a query within a React component, call `useFindHobbiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindHobbiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindHobbiesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindHobbiesQuery(baseOptions?: Apollo.QueryHookOptions<FindHobbiesQuery, FindHobbiesQueryVariables>) {
        return Apollo.useQuery<FindHobbiesQuery, FindHobbiesQueryVariables>(FindHobbiesDocument, baseOptions);
      }
export function useFindHobbiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindHobbiesQuery, FindHobbiesQueryVariables>) {
          return Apollo.useLazyQuery<FindHobbiesQuery, FindHobbiesQueryVariables>(FindHobbiesDocument, baseOptions);
        }
export type FindHobbiesQueryHookResult = ReturnType<typeof useFindHobbiesQuery>;
export type FindHobbiesLazyQueryHookResult = ReturnType<typeof useFindHobbiesLazyQuery>;
export type FindHobbiesQueryResult = Apollo.QueryResult<FindHobbiesQuery, FindHobbiesQueryVariables>;
export const GetHobbyDocument = gql`
    query getHobby($id: GraphbackObjectID!) {
  getHobby(id: $id) {
    ...HobbyExpandedFields
  }
}
    ${HobbyExpandedFieldsFragmentDoc}`;

/**
 * __useGetHobbyQuery__
 *
 * To run a query within a React component, call `useGetHobbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHobbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHobbyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetHobbyQuery(baseOptions: Apollo.QueryHookOptions<GetHobbyQuery, GetHobbyQueryVariables>) {
        return Apollo.useQuery<GetHobbyQuery, GetHobbyQueryVariables>(GetHobbyDocument, baseOptions);
      }
export function useGetHobbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHobbyQuery, GetHobbyQueryVariables>) {
          return Apollo.useLazyQuery<GetHobbyQuery, GetHobbyQueryVariables>(GetHobbyDocument, baseOptions);
        }
export type GetHobbyQueryHookResult = ReturnType<typeof useGetHobbyQuery>;
export type GetHobbyLazyQueryHookResult = ReturnType<typeof useGetHobbyLazyQuery>;
export type GetHobbyQueryResult = Apollo.QueryResult<GetHobbyQuery, GetHobbyQueryVariables>;
export const FindUsersDocument = gql`
    query findUsers($filter: UserFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findUsers(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...UserExpandedFields
    }
    offset
    limit
    count
  }
}
    ${UserExpandedFieldsFragmentDoc}`;

/**
 * __useFindUsersQuery__
 *
 * To run a query within a React component, call `useFindUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
        return Apollo.useQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, baseOptions);
      }
export function useFindUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUsersQuery, FindUsersQueryVariables>) {
          return Apollo.useLazyQuery<FindUsersQuery, FindUsersQueryVariables>(FindUsersDocument, baseOptions);
        }
export type FindUsersQueryHookResult = ReturnType<typeof useFindUsersQuery>;
export type FindUsersLazyQueryHookResult = ReturnType<typeof useFindUsersLazyQuery>;
export type FindUsersQueryResult = Apollo.QueryResult<FindUsersQuery, FindUsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: GraphbackObjectID!) {
  getUser(id: $id) {
    ...UserExpandedFields
  }
}
    ${UserExpandedFieldsFragmentDoc}`;

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
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const FindUserPlanNodesDocument = gql`
    query findUserPlanNodes($filter: UserPlanNodeFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findUserPlanNodes(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...UserPlanNodeExpandedFields
    }
    offset
    limit
    count
  }
}
    ${UserPlanNodeExpandedFieldsFragmentDoc}`;

/**
 * __useFindUserPlanNodesQuery__
 *
 * To run a query within a React component, call `useFindUserPlanNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserPlanNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserPlanNodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindUserPlanNodesQuery(baseOptions?: Apollo.QueryHookOptions<FindUserPlanNodesQuery, FindUserPlanNodesQueryVariables>) {
        return Apollo.useQuery<FindUserPlanNodesQuery, FindUserPlanNodesQueryVariables>(FindUserPlanNodesDocument, baseOptions);
      }
export function useFindUserPlanNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserPlanNodesQuery, FindUserPlanNodesQueryVariables>) {
          return Apollo.useLazyQuery<FindUserPlanNodesQuery, FindUserPlanNodesQueryVariables>(FindUserPlanNodesDocument, baseOptions);
        }
export type FindUserPlanNodesQueryHookResult = ReturnType<typeof useFindUserPlanNodesQuery>;
export type FindUserPlanNodesLazyQueryHookResult = ReturnType<typeof useFindUserPlanNodesLazyQuery>;
export type FindUserPlanNodesQueryResult = Apollo.QueryResult<FindUserPlanNodesQuery, FindUserPlanNodesQueryVariables>;
export const GetUserPlanNodeDocument = gql`
    query getUserPlanNode($id: GraphbackObjectID!) {
  getUserPlanNode(id: $id) {
    ...UserPlanNodeExpandedFields
  }
}
    ${UserPlanNodeExpandedFieldsFragmentDoc}`;

/**
 * __useGetUserPlanNodeQuery__
 *
 * To run a query within a React component, call `useGetUserPlanNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPlanNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPlanNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPlanNodeQuery(baseOptions: Apollo.QueryHookOptions<GetUserPlanNodeQuery, GetUserPlanNodeQueryVariables>) {
        return Apollo.useQuery<GetUserPlanNodeQuery, GetUserPlanNodeQueryVariables>(GetUserPlanNodeDocument, baseOptions);
      }
export function useGetUserPlanNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPlanNodeQuery, GetUserPlanNodeQueryVariables>) {
          return Apollo.useLazyQuery<GetUserPlanNodeQuery, GetUserPlanNodeQueryVariables>(GetUserPlanNodeDocument, baseOptions);
        }
export type GetUserPlanNodeQueryHookResult = ReturnType<typeof useGetUserPlanNodeQuery>;
export type GetUserPlanNodeLazyQueryHookResult = ReturnType<typeof useGetUserPlanNodeLazyQuery>;
export type GetUserPlanNodeQueryResult = Apollo.QueryResult<GetUserPlanNodeQuery, GetUserPlanNodeQueryVariables>;
export const FindPlansDocument = gql`
    query findPlans($filter: PlanFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findPlans(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...PlanExpandedFields
    }
    offset
    limit
    count
  }
}
    ${PlanExpandedFieldsFragmentDoc}`;

/**
 * __useFindPlansQuery__
 *
 * To run a query within a React component, call `useFindPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPlansQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindPlansQuery(baseOptions?: Apollo.QueryHookOptions<FindPlansQuery, FindPlansQueryVariables>) {
        return Apollo.useQuery<FindPlansQuery, FindPlansQueryVariables>(FindPlansDocument, baseOptions);
      }
export function useFindPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPlansQuery, FindPlansQueryVariables>) {
          return Apollo.useLazyQuery<FindPlansQuery, FindPlansQueryVariables>(FindPlansDocument, baseOptions);
        }
export type FindPlansQueryHookResult = ReturnType<typeof useFindPlansQuery>;
export type FindPlansLazyQueryHookResult = ReturnType<typeof useFindPlansLazyQuery>;
export type FindPlansQueryResult = Apollo.QueryResult<FindPlansQuery, FindPlansQueryVariables>;
export const GetPlanDocument = gql`
    query getPlan($id: GraphbackObjectID!) {
  getPlan(id: $id) {
    ...PlanExpandedFields
  }
}
    ${PlanExpandedFieldsFragmentDoc}`;

/**
 * __useGetPlanQuery__
 *
 * To run a query within a React component, call `useGetPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlanQuery(baseOptions: Apollo.QueryHookOptions<GetPlanQuery, GetPlanQueryVariables>) {
        return Apollo.useQuery<GetPlanQuery, GetPlanQueryVariables>(GetPlanDocument, baseOptions);
      }
export function useGetPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlanQuery, GetPlanQueryVariables>) {
          return Apollo.useLazyQuery<GetPlanQuery, GetPlanQueryVariables>(GetPlanDocument, baseOptions);
        }
export type GetPlanQueryHookResult = ReturnType<typeof useGetPlanQuery>;
export type GetPlanLazyQueryHookResult = ReturnType<typeof useGetPlanLazyQuery>;
export type GetPlanQueryResult = Apollo.QueryResult<GetPlanQuery, GetPlanQueryVariables>;
export const FindMatchNodesDocument = gql`
    query findMatchNodes($filter: MatchNodeFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findMatchNodes(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...MatchNodeExpandedFields
    }
    offset
    limit
    count
  }
}
    ${MatchNodeExpandedFieldsFragmentDoc}`;

/**
 * __useFindMatchNodesQuery__
 *
 * To run a query within a React component, call `useFindMatchNodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMatchNodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMatchNodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindMatchNodesQuery(baseOptions?: Apollo.QueryHookOptions<FindMatchNodesQuery, FindMatchNodesQueryVariables>) {
        return Apollo.useQuery<FindMatchNodesQuery, FindMatchNodesQueryVariables>(FindMatchNodesDocument, baseOptions);
      }
export function useFindMatchNodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMatchNodesQuery, FindMatchNodesQueryVariables>) {
          return Apollo.useLazyQuery<FindMatchNodesQuery, FindMatchNodesQueryVariables>(FindMatchNodesDocument, baseOptions);
        }
export type FindMatchNodesQueryHookResult = ReturnType<typeof useFindMatchNodesQuery>;
export type FindMatchNodesLazyQueryHookResult = ReturnType<typeof useFindMatchNodesLazyQuery>;
export type FindMatchNodesQueryResult = Apollo.QueryResult<FindMatchNodesQuery, FindMatchNodesQueryVariables>;
export const GetMatchNodeDocument = gql`
    query getMatchNode($id: GraphbackObjectID!) {
  getMatchNode(id: $id) {
    ...MatchNodeExpandedFields
  }
}
    ${MatchNodeExpandedFieldsFragmentDoc}`;

/**
 * __useGetMatchNodeQuery__
 *
 * To run a query within a React component, call `useGetMatchNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMatchNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMatchNodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMatchNodeQuery(baseOptions: Apollo.QueryHookOptions<GetMatchNodeQuery, GetMatchNodeQueryVariables>) {
        return Apollo.useQuery<GetMatchNodeQuery, GetMatchNodeQueryVariables>(GetMatchNodeDocument, baseOptions);
      }
export function useGetMatchNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMatchNodeQuery, GetMatchNodeQueryVariables>) {
          return Apollo.useLazyQuery<GetMatchNodeQuery, GetMatchNodeQueryVariables>(GetMatchNodeDocument, baseOptions);
        }
export type GetMatchNodeQueryHookResult = ReturnType<typeof useGetMatchNodeQuery>;
export type GetMatchNodeLazyQueryHookResult = ReturnType<typeof useGetMatchNodeLazyQuery>;
export type GetMatchNodeQueryResult = Apollo.QueryResult<GetMatchNodeQuery, GetMatchNodeQueryVariables>;
export const CreateNoteDocument = gql`
    mutation createNote($input: CreateNoteInput!) {
  createNote(input: $input) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;
export type CreateNoteMutationFn = Apollo.MutationFunction<CreateNoteMutation, CreateNoteMutationVariables>;

/**
 * __useCreateNoteMutation__
 *
 * To run a mutation, you first call `useCreateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNoteMutation, { data, loading, error }] = useCreateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateNoteMutation, CreateNoteMutationVariables>) {
        return Apollo.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument, baseOptions);
      }
export type CreateNoteMutationHookResult = ReturnType<typeof useCreateNoteMutation>;
export type CreateNoteMutationResult = Apollo.MutationResult<CreateNoteMutation>;
export type CreateNoteMutationOptions = Apollo.BaseMutationOptions<CreateNoteMutation, CreateNoteMutationVariables>;
export const UpdateNoteDocument = gql`
    mutation updateNote($input: MutateNoteInput!) {
  updateNote(input: $input) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;
export type UpdateNoteMutationFn = Apollo.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        return Apollo.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, baseOptions);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = Apollo.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = Apollo.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation deleteNote($input: MutateNoteInput!) {
  deleteNote(input: $input) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, baseOptions);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, baseOptions);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation updateComment($input: MutateCommentInput!) {
  updateComment(input: $input) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, baseOptions);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($input: MutateCommentInput!) {
  deleteComment(input: $input) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, baseOptions);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const CreateHobbyDocument = gql`
    mutation createHobby($input: CreateHobbyInput!) {
  createHobby(input: $input) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;
export type CreateHobbyMutationFn = Apollo.MutationFunction<CreateHobbyMutation, CreateHobbyMutationVariables>;

/**
 * __useCreateHobbyMutation__
 *
 * To run a mutation, you first call `useCreateHobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHobbyMutation, { data, loading, error }] = useCreateHobbyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHobbyMutation(baseOptions?: Apollo.MutationHookOptions<CreateHobbyMutation, CreateHobbyMutationVariables>) {
        return Apollo.useMutation<CreateHobbyMutation, CreateHobbyMutationVariables>(CreateHobbyDocument, baseOptions);
      }
export type CreateHobbyMutationHookResult = ReturnType<typeof useCreateHobbyMutation>;
export type CreateHobbyMutationResult = Apollo.MutationResult<CreateHobbyMutation>;
export type CreateHobbyMutationOptions = Apollo.BaseMutationOptions<CreateHobbyMutation, CreateHobbyMutationVariables>;
export const UpdateHobbyDocument = gql`
    mutation updateHobby($input: MutateHobbyInput!) {
  updateHobby(input: $input) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;
export type UpdateHobbyMutationFn = Apollo.MutationFunction<UpdateHobbyMutation, UpdateHobbyMutationVariables>;

/**
 * __useUpdateHobbyMutation__
 *
 * To run a mutation, you first call `useUpdateHobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHobbyMutation, { data, loading, error }] = useUpdateHobbyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHobbyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHobbyMutation, UpdateHobbyMutationVariables>) {
        return Apollo.useMutation<UpdateHobbyMutation, UpdateHobbyMutationVariables>(UpdateHobbyDocument, baseOptions);
      }
export type UpdateHobbyMutationHookResult = ReturnType<typeof useUpdateHobbyMutation>;
export type UpdateHobbyMutationResult = Apollo.MutationResult<UpdateHobbyMutation>;
export type UpdateHobbyMutationOptions = Apollo.BaseMutationOptions<UpdateHobbyMutation, UpdateHobbyMutationVariables>;
export const DeleteHobbyDocument = gql`
    mutation deleteHobby($input: MutateHobbyInput!) {
  deleteHobby(input: $input) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;
export type DeleteHobbyMutationFn = Apollo.MutationFunction<DeleteHobbyMutation, DeleteHobbyMutationVariables>;

/**
 * __useDeleteHobbyMutation__
 *
 * To run a mutation, you first call `useDeleteHobbyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHobbyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHobbyMutation, { data, loading, error }] = useDeleteHobbyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteHobbyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHobbyMutation, DeleteHobbyMutationVariables>) {
        return Apollo.useMutation<DeleteHobbyMutation, DeleteHobbyMutationVariables>(DeleteHobbyDocument, baseOptions);
      }
export type DeleteHobbyMutationHookResult = ReturnType<typeof useDeleteHobbyMutation>;
export type DeleteHobbyMutationResult = Apollo.MutationResult<DeleteHobbyMutation>;
export type DeleteHobbyMutationOptions = Apollo.BaseMutationOptions<DeleteHobbyMutation, DeleteHobbyMutationVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: MutateUserInput!) {
  updateUser(input: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation deleteUser($input: MutateUserInput!) {
  deleteUser(input: $input) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateUserPlanNodeDocument = gql`
    mutation createUserPlanNode($input: CreateUserPlanNodeInput!) {
  createUserPlanNode(input: $input) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;
export type CreateUserPlanNodeMutationFn = Apollo.MutationFunction<CreateUserPlanNodeMutation, CreateUserPlanNodeMutationVariables>;

/**
 * __useCreateUserPlanNodeMutation__
 *
 * To run a mutation, you first call `useCreateUserPlanNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserPlanNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserPlanNodeMutation, { data, loading, error }] = useCreateUserPlanNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserPlanNodeMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserPlanNodeMutation, CreateUserPlanNodeMutationVariables>) {
        return Apollo.useMutation<CreateUserPlanNodeMutation, CreateUserPlanNodeMutationVariables>(CreateUserPlanNodeDocument, baseOptions);
      }
export type CreateUserPlanNodeMutationHookResult = ReturnType<typeof useCreateUserPlanNodeMutation>;
export type CreateUserPlanNodeMutationResult = Apollo.MutationResult<CreateUserPlanNodeMutation>;
export type CreateUserPlanNodeMutationOptions = Apollo.BaseMutationOptions<CreateUserPlanNodeMutation, CreateUserPlanNodeMutationVariables>;
export const UpdateUserPlanNodeDocument = gql`
    mutation updateUserPlanNode($input: MutateUserPlanNodeInput!) {
  updateUserPlanNode(input: $input) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;
export type UpdateUserPlanNodeMutationFn = Apollo.MutationFunction<UpdateUserPlanNodeMutation, UpdateUserPlanNodeMutationVariables>;

/**
 * __useUpdateUserPlanNodeMutation__
 *
 * To run a mutation, you first call `useUpdateUserPlanNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserPlanNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserPlanNodeMutation, { data, loading, error }] = useUpdateUserPlanNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserPlanNodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserPlanNodeMutation, UpdateUserPlanNodeMutationVariables>) {
        return Apollo.useMutation<UpdateUserPlanNodeMutation, UpdateUserPlanNodeMutationVariables>(UpdateUserPlanNodeDocument, baseOptions);
      }
export type UpdateUserPlanNodeMutationHookResult = ReturnType<typeof useUpdateUserPlanNodeMutation>;
export type UpdateUserPlanNodeMutationResult = Apollo.MutationResult<UpdateUserPlanNodeMutation>;
export type UpdateUserPlanNodeMutationOptions = Apollo.BaseMutationOptions<UpdateUserPlanNodeMutation, UpdateUserPlanNodeMutationVariables>;
export const DeleteUserPlanNodeDocument = gql`
    mutation deleteUserPlanNode($input: MutateUserPlanNodeInput!) {
  deleteUserPlanNode(input: $input) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;
export type DeleteUserPlanNodeMutationFn = Apollo.MutationFunction<DeleteUserPlanNodeMutation, DeleteUserPlanNodeMutationVariables>;

/**
 * __useDeleteUserPlanNodeMutation__
 *
 * To run a mutation, you first call `useDeleteUserPlanNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserPlanNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserPlanNodeMutation, { data, loading, error }] = useDeleteUserPlanNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserPlanNodeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserPlanNodeMutation, DeleteUserPlanNodeMutationVariables>) {
        return Apollo.useMutation<DeleteUserPlanNodeMutation, DeleteUserPlanNodeMutationVariables>(DeleteUserPlanNodeDocument, baseOptions);
      }
export type DeleteUserPlanNodeMutationHookResult = ReturnType<typeof useDeleteUserPlanNodeMutation>;
export type DeleteUserPlanNodeMutationResult = Apollo.MutationResult<DeleteUserPlanNodeMutation>;
export type DeleteUserPlanNodeMutationOptions = Apollo.BaseMutationOptions<DeleteUserPlanNodeMutation, DeleteUserPlanNodeMutationVariables>;
export const CreatePlanDocument = gql`
    mutation createPlan($input: CreatePlanInput!) {
  createPlan(input: $input) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;
export type CreatePlanMutationFn = Apollo.MutationFunction<CreatePlanMutation, CreatePlanMutationVariables>;

/**
 * __useCreatePlanMutation__
 *
 * To run a mutation, you first call `useCreatePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlanMutation, { data, loading, error }] = useCreatePlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlanMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlanMutation, CreatePlanMutationVariables>) {
        return Apollo.useMutation<CreatePlanMutation, CreatePlanMutationVariables>(CreatePlanDocument, baseOptions);
      }
export type CreatePlanMutationHookResult = ReturnType<typeof useCreatePlanMutation>;
export type CreatePlanMutationResult = Apollo.MutationResult<CreatePlanMutation>;
export type CreatePlanMutationOptions = Apollo.BaseMutationOptions<CreatePlanMutation, CreatePlanMutationVariables>;
export const UpdatePlanDocument = gql`
    mutation updatePlan($input: MutatePlanInput!) {
  updatePlan(input: $input) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;
export type UpdatePlanMutationFn = Apollo.MutationFunction<UpdatePlanMutation, UpdatePlanMutationVariables>;

/**
 * __useUpdatePlanMutation__
 *
 * To run a mutation, you first call `useUpdatePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlanMutation, { data, loading, error }] = useUpdatePlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePlanMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlanMutation, UpdatePlanMutationVariables>) {
        return Apollo.useMutation<UpdatePlanMutation, UpdatePlanMutationVariables>(UpdatePlanDocument, baseOptions);
      }
export type UpdatePlanMutationHookResult = ReturnType<typeof useUpdatePlanMutation>;
export type UpdatePlanMutationResult = Apollo.MutationResult<UpdatePlanMutation>;
export type UpdatePlanMutationOptions = Apollo.BaseMutationOptions<UpdatePlanMutation, UpdatePlanMutationVariables>;
export const DeletePlanDocument = gql`
    mutation deletePlan($input: MutatePlanInput!) {
  deletePlan(input: $input) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;
export type DeletePlanMutationFn = Apollo.MutationFunction<DeletePlanMutation, DeletePlanMutationVariables>;

/**
 * __useDeletePlanMutation__
 *
 * To run a mutation, you first call `useDeletePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlanMutation, { data, loading, error }] = useDeletePlanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeletePlanMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlanMutation, DeletePlanMutationVariables>) {
        return Apollo.useMutation<DeletePlanMutation, DeletePlanMutationVariables>(DeletePlanDocument, baseOptions);
      }
export type DeletePlanMutationHookResult = ReturnType<typeof useDeletePlanMutation>;
export type DeletePlanMutationResult = Apollo.MutationResult<DeletePlanMutation>;
export type DeletePlanMutationOptions = Apollo.BaseMutationOptions<DeletePlanMutation, DeletePlanMutationVariables>;
export const CreateMatchNodeDocument = gql`
    mutation createMatchNode($input: CreateMatchNodeInput!) {
  createMatchNode(input: $input) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;
export type CreateMatchNodeMutationFn = Apollo.MutationFunction<CreateMatchNodeMutation, CreateMatchNodeMutationVariables>;

/**
 * __useCreateMatchNodeMutation__
 *
 * To run a mutation, you first call `useCreateMatchNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMatchNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMatchNodeMutation, { data, loading, error }] = useCreateMatchNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMatchNodeMutation(baseOptions?: Apollo.MutationHookOptions<CreateMatchNodeMutation, CreateMatchNodeMutationVariables>) {
        return Apollo.useMutation<CreateMatchNodeMutation, CreateMatchNodeMutationVariables>(CreateMatchNodeDocument, baseOptions);
      }
export type CreateMatchNodeMutationHookResult = ReturnType<typeof useCreateMatchNodeMutation>;
export type CreateMatchNodeMutationResult = Apollo.MutationResult<CreateMatchNodeMutation>;
export type CreateMatchNodeMutationOptions = Apollo.BaseMutationOptions<CreateMatchNodeMutation, CreateMatchNodeMutationVariables>;
export const UpdateMatchNodeDocument = gql`
    mutation updateMatchNode($input: MutateMatchNodeInput!) {
  updateMatchNode(input: $input) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;
export type UpdateMatchNodeMutationFn = Apollo.MutationFunction<UpdateMatchNodeMutation, UpdateMatchNodeMutationVariables>;

/**
 * __useUpdateMatchNodeMutation__
 *
 * To run a mutation, you first call `useUpdateMatchNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMatchNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMatchNodeMutation, { data, loading, error }] = useUpdateMatchNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMatchNodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMatchNodeMutation, UpdateMatchNodeMutationVariables>) {
        return Apollo.useMutation<UpdateMatchNodeMutation, UpdateMatchNodeMutationVariables>(UpdateMatchNodeDocument, baseOptions);
      }
export type UpdateMatchNodeMutationHookResult = ReturnType<typeof useUpdateMatchNodeMutation>;
export type UpdateMatchNodeMutationResult = Apollo.MutationResult<UpdateMatchNodeMutation>;
export type UpdateMatchNodeMutationOptions = Apollo.BaseMutationOptions<UpdateMatchNodeMutation, UpdateMatchNodeMutationVariables>;
export const DeleteMatchNodeDocument = gql`
    mutation deleteMatchNode($input: MutateMatchNodeInput!) {
  deleteMatchNode(input: $input) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;
export type DeleteMatchNodeMutationFn = Apollo.MutationFunction<DeleteMatchNodeMutation, DeleteMatchNodeMutationVariables>;

/**
 * __useDeleteMatchNodeMutation__
 *
 * To run a mutation, you first call `useDeleteMatchNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMatchNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMatchNodeMutation, { data, loading, error }] = useDeleteMatchNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMatchNodeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMatchNodeMutation, DeleteMatchNodeMutationVariables>) {
        return Apollo.useMutation<DeleteMatchNodeMutation, DeleteMatchNodeMutationVariables>(DeleteMatchNodeDocument, baseOptions);
      }
export type DeleteMatchNodeMutationHookResult = ReturnType<typeof useDeleteMatchNodeMutation>;
export type DeleteMatchNodeMutationResult = Apollo.MutationResult<DeleteMatchNodeMutation>;
export type DeleteMatchNodeMutationOptions = Apollo.BaseMutationOptions<DeleteMatchNodeMutation, DeleteMatchNodeMutationVariables>;
export const NewNoteDocument = gql`
    subscription newNote($filter: NoteSubscriptionFilter) {
  newNote(filter: $filter) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;

/**
 * __useNewNoteSubscription__
 *
 * To run a query within a React component, call `useNewNoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewNoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewNoteSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewNoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewNoteSubscription, NewNoteSubscriptionVariables>) {
        return Apollo.useSubscription<NewNoteSubscription, NewNoteSubscriptionVariables>(NewNoteDocument, baseOptions);
      }
export type NewNoteSubscriptionHookResult = ReturnType<typeof useNewNoteSubscription>;
export type NewNoteSubscriptionResult = Apollo.SubscriptionResult<NewNoteSubscription>;
export const UpdatedNoteDocument = gql`
    subscription updatedNote($filter: NoteSubscriptionFilter) {
  updatedNote(filter: $filter) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;

/**
 * __useUpdatedNoteSubscription__
 *
 * To run a query within a React component, call `useUpdatedNoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedNoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedNoteSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedNoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedNoteSubscription, UpdatedNoteSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedNoteSubscription, UpdatedNoteSubscriptionVariables>(UpdatedNoteDocument, baseOptions);
      }
export type UpdatedNoteSubscriptionHookResult = ReturnType<typeof useUpdatedNoteSubscription>;
export type UpdatedNoteSubscriptionResult = Apollo.SubscriptionResult<UpdatedNoteSubscription>;
export const DeletedNoteDocument = gql`
    subscription deletedNote($filter: NoteSubscriptionFilter) {
  deletedNote(filter: $filter) {
    ...NoteFields
  }
}
    ${NoteFieldsFragmentDoc}`;

/**
 * __useDeletedNoteSubscription__
 *
 * To run a query within a React component, call `useDeletedNoteSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedNoteSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedNoteSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedNoteSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedNoteSubscription, DeletedNoteSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedNoteSubscription, DeletedNoteSubscriptionVariables>(DeletedNoteDocument, baseOptions);
      }
export type DeletedNoteSubscriptionHookResult = ReturnType<typeof useDeletedNoteSubscription>;
export type DeletedNoteSubscriptionResult = Apollo.SubscriptionResult<DeletedNoteSubscription>;
export const NewCommentDocument = gql`
    subscription newComment($filter: CommentSubscriptionFilter) {
  newComment(filter: $filter) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

/**
 * __useNewCommentSubscription__
 *
 * To run a query within a React component, call `useNewCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewCommentSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewCommentSubscription, NewCommentSubscriptionVariables>) {
        return Apollo.useSubscription<NewCommentSubscription, NewCommentSubscriptionVariables>(NewCommentDocument, baseOptions);
      }
export type NewCommentSubscriptionHookResult = ReturnType<typeof useNewCommentSubscription>;
export type NewCommentSubscriptionResult = Apollo.SubscriptionResult<NewCommentSubscription>;
export const UpdatedCommentDocument = gql`
    subscription updatedComment($filter: CommentSubscriptionFilter) {
  updatedComment(filter: $filter) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

/**
 * __useUpdatedCommentSubscription__
 *
 * To run a query within a React component, call `useUpdatedCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedCommentSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedCommentSubscription, UpdatedCommentSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedCommentSubscription, UpdatedCommentSubscriptionVariables>(UpdatedCommentDocument, baseOptions);
      }
export type UpdatedCommentSubscriptionHookResult = ReturnType<typeof useUpdatedCommentSubscription>;
export type UpdatedCommentSubscriptionResult = Apollo.SubscriptionResult<UpdatedCommentSubscription>;
export const DeletedCommentDocument = gql`
    subscription deletedComment($filter: CommentSubscriptionFilter) {
  deletedComment(filter: $filter) {
    ...CommentFields
  }
}
    ${CommentFieldsFragmentDoc}`;

/**
 * __useDeletedCommentSubscription__
 *
 * To run a query within a React component, call `useDeletedCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedCommentSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedCommentSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedCommentSubscription, DeletedCommentSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedCommentSubscription, DeletedCommentSubscriptionVariables>(DeletedCommentDocument, baseOptions);
      }
export type DeletedCommentSubscriptionHookResult = ReturnType<typeof useDeletedCommentSubscription>;
export type DeletedCommentSubscriptionResult = Apollo.SubscriptionResult<DeletedCommentSubscription>;
export const NewHobbyDocument = gql`
    subscription newHobby($filter: HobbySubscriptionFilter) {
  newHobby(filter: $filter) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;

/**
 * __useNewHobbySubscription__
 *
 * To run a query within a React component, call `useNewHobbySubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewHobbySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewHobbySubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewHobbySubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewHobbySubscription, NewHobbySubscriptionVariables>) {
        return Apollo.useSubscription<NewHobbySubscription, NewHobbySubscriptionVariables>(NewHobbyDocument, baseOptions);
      }
export type NewHobbySubscriptionHookResult = ReturnType<typeof useNewHobbySubscription>;
export type NewHobbySubscriptionResult = Apollo.SubscriptionResult<NewHobbySubscription>;
export const UpdatedHobbyDocument = gql`
    subscription updatedHobby($filter: HobbySubscriptionFilter) {
  updatedHobby(filter: $filter) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;

/**
 * __useUpdatedHobbySubscription__
 *
 * To run a query within a React component, call `useUpdatedHobbySubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedHobbySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedHobbySubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedHobbySubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedHobbySubscription, UpdatedHobbySubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedHobbySubscription, UpdatedHobbySubscriptionVariables>(UpdatedHobbyDocument, baseOptions);
      }
export type UpdatedHobbySubscriptionHookResult = ReturnType<typeof useUpdatedHobbySubscription>;
export type UpdatedHobbySubscriptionResult = Apollo.SubscriptionResult<UpdatedHobbySubscription>;
export const DeletedHobbyDocument = gql`
    subscription deletedHobby($filter: HobbySubscriptionFilter) {
  deletedHobby(filter: $filter) {
    ...HobbyFields
  }
}
    ${HobbyFieldsFragmentDoc}`;

/**
 * __useDeletedHobbySubscription__
 *
 * To run a query within a React component, call `useDeletedHobbySubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedHobbySubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedHobbySubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedHobbySubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedHobbySubscription, DeletedHobbySubscriptionVariables>) {
        return Apollo.useSubscription<DeletedHobbySubscription, DeletedHobbySubscriptionVariables>(DeletedHobbyDocument, baseOptions);
      }
export type DeletedHobbySubscriptionHookResult = ReturnType<typeof useDeletedHobbySubscription>;
export type DeletedHobbySubscriptionResult = Apollo.SubscriptionResult<DeletedHobbySubscription>;
export const NewUserDocument = gql`
    subscription newUser($filter: UserSubscriptionFilter) {
  newUser(filter: $filter) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useNewUserSubscription__
 *
 * To run a query within a React component, call `useNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUserSubscription, NewUserSubscriptionVariables>) {
        return Apollo.useSubscription<NewUserSubscription, NewUserSubscriptionVariables>(NewUserDocument, baseOptions);
      }
export type NewUserSubscriptionHookResult = ReturnType<typeof useNewUserSubscription>;
export type NewUserSubscriptionResult = Apollo.SubscriptionResult<NewUserSubscription>;
export const UpdatedUserDocument = gql`
    subscription updatedUser($filter: UserSubscriptionFilter) {
  updatedUser(filter: $filter) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUpdatedUserSubscription__
 *
 * To run a query within a React component, call `useUpdatedUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedUserSubscription, UpdatedUserSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedUserSubscription, UpdatedUserSubscriptionVariables>(UpdatedUserDocument, baseOptions);
      }
export type UpdatedUserSubscriptionHookResult = ReturnType<typeof useUpdatedUserSubscription>;
export type UpdatedUserSubscriptionResult = Apollo.SubscriptionResult<UpdatedUserSubscription>;
export const DeletedUserDocument = gql`
    subscription deletedUser($filter: UserSubscriptionFilter) {
  deletedUser(filter: $filter) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useDeletedUserSubscription__
 *
 * To run a query within a React component, call `useDeletedUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedUserSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedUserSubscription, DeletedUserSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedUserSubscription, DeletedUserSubscriptionVariables>(DeletedUserDocument, baseOptions);
      }
export type DeletedUserSubscriptionHookResult = ReturnType<typeof useDeletedUserSubscription>;
export type DeletedUserSubscriptionResult = Apollo.SubscriptionResult<DeletedUserSubscription>;
export const NewUserPlanNodeDocument = gql`
    subscription newUserPlanNode($filter: UserPlanNodeSubscriptionFilter) {
  newUserPlanNode(filter: $filter) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;

/**
 * __useNewUserPlanNodeSubscription__
 *
 * To run a query within a React component, call `useNewUserPlanNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserPlanNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserPlanNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewUserPlanNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUserPlanNodeSubscription, NewUserPlanNodeSubscriptionVariables>) {
        return Apollo.useSubscription<NewUserPlanNodeSubscription, NewUserPlanNodeSubscriptionVariables>(NewUserPlanNodeDocument, baseOptions);
      }
export type NewUserPlanNodeSubscriptionHookResult = ReturnType<typeof useNewUserPlanNodeSubscription>;
export type NewUserPlanNodeSubscriptionResult = Apollo.SubscriptionResult<NewUserPlanNodeSubscription>;
export const UpdatedUserPlanNodeDocument = gql`
    subscription updatedUserPlanNode($filter: UserPlanNodeSubscriptionFilter) {
  updatedUserPlanNode(filter: $filter) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;

/**
 * __useUpdatedUserPlanNodeSubscription__
 *
 * To run a query within a React component, call `useUpdatedUserPlanNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedUserPlanNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedUserPlanNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedUserPlanNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedUserPlanNodeSubscription, UpdatedUserPlanNodeSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedUserPlanNodeSubscription, UpdatedUserPlanNodeSubscriptionVariables>(UpdatedUserPlanNodeDocument, baseOptions);
      }
export type UpdatedUserPlanNodeSubscriptionHookResult = ReturnType<typeof useUpdatedUserPlanNodeSubscription>;
export type UpdatedUserPlanNodeSubscriptionResult = Apollo.SubscriptionResult<UpdatedUserPlanNodeSubscription>;
export const DeletedUserPlanNodeDocument = gql`
    subscription deletedUserPlanNode($filter: UserPlanNodeSubscriptionFilter) {
  deletedUserPlanNode(filter: $filter) {
    ...UserPlanNodeFields
  }
}
    ${UserPlanNodeFieldsFragmentDoc}`;

/**
 * __useDeletedUserPlanNodeSubscription__
 *
 * To run a query within a React component, call `useDeletedUserPlanNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedUserPlanNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedUserPlanNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedUserPlanNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedUserPlanNodeSubscription, DeletedUserPlanNodeSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedUserPlanNodeSubscription, DeletedUserPlanNodeSubscriptionVariables>(DeletedUserPlanNodeDocument, baseOptions);
      }
export type DeletedUserPlanNodeSubscriptionHookResult = ReturnType<typeof useDeletedUserPlanNodeSubscription>;
export type DeletedUserPlanNodeSubscriptionResult = Apollo.SubscriptionResult<DeletedUserPlanNodeSubscription>;
export const NewPlanDocument = gql`
    subscription newPlan($filter: PlanSubscriptionFilter) {
  newPlan(filter: $filter) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;

/**
 * __useNewPlanSubscription__
 *
 * To run a query within a React component, call `useNewPlanSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewPlanSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewPlanSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewPlanSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewPlanSubscription, NewPlanSubscriptionVariables>) {
        return Apollo.useSubscription<NewPlanSubscription, NewPlanSubscriptionVariables>(NewPlanDocument, baseOptions);
      }
export type NewPlanSubscriptionHookResult = ReturnType<typeof useNewPlanSubscription>;
export type NewPlanSubscriptionResult = Apollo.SubscriptionResult<NewPlanSubscription>;
export const UpdatedPlanDocument = gql`
    subscription updatedPlan($filter: PlanSubscriptionFilter) {
  updatedPlan(filter: $filter) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;

/**
 * __useUpdatedPlanSubscription__
 *
 * To run a query within a React component, call `useUpdatedPlanSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedPlanSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedPlanSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedPlanSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedPlanSubscription, UpdatedPlanSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedPlanSubscription, UpdatedPlanSubscriptionVariables>(UpdatedPlanDocument, baseOptions);
      }
export type UpdatedPlanSubscriptionHookResult = ReturnType<typeof useUpdatedPlanSubscription>;
export type UpdatedPlanSubscriptionResult = Apollo.SubscriptionResult<UpdatedPlanSubscription>;
export const DeletedPlanDocument = gql`
    subscription deletedPlan($filter: PlanSubscriptionFilter) {
  deletedPlan(filter: $filter) {
    ...PlanFields
  }
}
    ${PlanFieldsFragmentDoc}`;

/**
 * __useDeletedPlanSubscription__
 *
 * To run a query within a React component, call `useDeletedPlanSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedPlanSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedPlanSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedPlanSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedPlanSubscription, DeletedPlanSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedPlanSubscription, DeletedPlanSubscriptionVariables>(DeletedPlanDocument, baseOptions);
      }
export type DeletedPlanSubscriptionHookResult = ReturnType<typeof useDeletedPlanSubscription>;
export type DeletedPlanSubscriptionResult = Apollo.SubscriptionResult<DeletedPlanSubscription>;
export const NewMatchNodeDocument = gql`
    subscription newMatchNode($filter: MatchNodeSubscriptionFilter) {
  newMatchNode(filter: $filter) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;

/**
 * __useNewMatchNodeSubscription__
 *
 * To run a query within a React component, call `useNewMatchNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMatchNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMatchNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewMatchNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewMatchNodeSubscription, NewMatchNodeSubscriptionVariables>) {
        return Apollo.useSubscription<NewMatchNodeSubscription, NewMatchNodeSubscriptionVariables>(NewMatchNodeDocument, baseOptions);
      }
export type NewMatchNodeSubscriptionHookResult = ReturnType<typeof useNewMatchNodeSubscription>;
export type NewMatchNodeSubscriptionResult = Apollo.SubscriptionResult<NewMatchNodeSubscription>;
export const UpdatedMatchNodeDocument = gql`
    subscription updatedMatchNode($filter: MatchNodeSubscriptionFilter) {
  updatedMatchNode(filter: $filter) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;

/**
 * __useUpdatedMatchNodeSubscription__
 *
 * To run a query within a React component, call `useUpdatedMatchNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedMatchNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedMatchNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedMatchNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedMatchNodeSubscription, UpdatedMatchNodeSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedMatchNodeSubscription, UpdatedMatchNodeSubscriptionVariables>(UpdatedMatchNodeDocument, baseOptions);
      }
export type UpdatedMatchNodeSubscriptionHookResult = ReturnType<typeof useUpdatedMatchNodeSubscription>;
export type UpdatedMatchNodeSubscriptionResult = Apollo.SubscriptionResult<UpdatedMatchNodeSubscription>;
export const DeletedMatchNodeDocument = gql`
    subscription deletedMatchNode($filter: MatchNodeSubscriptionFilter) {
  deletedMatchNode(filter: $filter) {
    ...MatchNodeFields
  }
}
    ${MatchNodeFieldsFragmentDoc}`;

/**
 * __useDeletedMatchNodeSubscription__
 *
 * To run a query within a React component, call `useDeletedMatchNodeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedMatchNodeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedMatchNodeSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedMatchNodeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedMatchNodeSubscription, DeletedMatchNodeSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedMatchNodeSubscription, DeletedMatchNodeSubscriptionVariables>(DeletedMatchNodeDocument, baseOptions);
      }
export type DeletedMatchNodeSubscriptionHookResult = ReturnType<typeof useDeletedMatchNodeSubscription>;
export type DeletedMatchNodeSubscriptionResult = Apollo.SubscriptionResult<DeletedMatchNodeSubscription>;