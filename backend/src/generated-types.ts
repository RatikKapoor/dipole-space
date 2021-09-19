/* eslint-disable */
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
  usersId?: Maybe<Scalars['GraphbackObjectID']>;
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
  phoneNumber: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['GraphbackObjectID']>;
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
  /** @manyToOne(field: 'hobbies', key: 'usersId') */
  users?: Maybe<User>;
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
  usersId?: Maybe<GraphbackObjectIdInput>;
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
  usersId?: Maybe<Scalars['GraphbackObjectID']>;
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
  phoneNumber?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  usersId?: Maybe<Scalars['GraphbackObjectID']>;
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
  createNote?: Maybe<Note>;
  createPlan?: Maybe<Plan>;
  createUser?: Maybe<User>;
  createUserPlanNode?: Maybe<UserPlanNode>;
  deleteComment?: Maybe<Comment>;
  deleteHobby?: Maybe<Hobby>;
  deleteNote?: Maybe<Note>;
  deletePlan?: Maybe<Plan>;
  deleteUser?: Maybe<User>;
  deleteUserPlanNode?: Maybe<UserPlanNode>;
  updateComment?: Maybe<Comment>;
  updateHobby?: Maybe<Hobby>;
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
  findNotes: NoteResultList;
  findPlans: PlanResultList;
  findUserPlanNodes: UserPlanNodeResultList;
  findUsers: UserResultList;
  getComment?: Maybe<Comment>;
  getDraftNotes?: Maybe<Array<Maybe<Note>>>;
  getHobby?: Maybe<Hobby>;
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
  deletedNote: Note;
  deletedPlan: Plan;
  deletedUser: User;
  deletedUserPlanNode: UserPlanNode;
  newComment: Comment;
  newHobby: Hobby;
  newNote: Note;
  newPlan: Plan;
  newUser: User;
  newUserPlanNode: UserPlanNode;
  updatedComment: Comment;
  updatedHobby: Hobby;
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
   * @oneToMany(field: 'users', key: 'usersId')
   * @oneToMany(field: 'users')
   */
  hobbies?: Maybe<Array<Maybe<Hobby>>>;
  lastName: Scalars['String'];
  /**
   * @oneToMany(field: 'users', key: 'usersId')
   * @oneToMany(field: 'users')
   */
  likes?: Maybe<Array<Maybe<User>>>;
  /**
   * @oneToMany(field: 'users', key: 'usersId')
   * @oneToMany(field: 'users')
   */
  matches?: Maybe<Array<Maybe<User>>>;
  phoneNumber: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  /**
   * @oneToMany(field: 'user', key: 'userId')
   * @oneToMany(field: 'user')
   */
  plans?: Maybe<Array<Maybe<UserPlanNode>>>;
  /**
   * @oneToMany(field: 'users', key: 'usersId')
   * @oneToMany(field: 'users')
   */
  rejected?: Maybe<Array<Maybe<User>>>;
  /** @manyToOne(field: 'rejected', key: 'usersId') */
  users?: Maybe<User>;
};


/** @model */
export type UserHobbiesArgs = {
  filter?: Maybe<HobbyFilter>;
};


/** @model */
export type UserLikesArgs = {
  filter?: Maybe<UserFilter>;
};


/** @model */
export type UserMatchesArgs = {
  filter?: Maybe<UserFilter>;
};


/** @model */
export type UserPlansArgs = {
  filter?: Maybe<UserPlanNodeFilter>;
};


/** @model */
export type UserRejectedArgs = {
  filter?: Maybe<UserFilter>;
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
  not?: Maybe<UserFilter>;
  or?: Maybe<Array<UserFilter>>;
  phoneNumber?: Maybe<StringInput>;
  photoUrl?: Maybe<StringInput>;
  usersId?: Maybe<GraphbackObjectIdInput>;
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
  not?: Maybe<UserSubscriptionFilter>;
  or?: Maybe<Array<UserSubscriptionFilter>>;
  phoneNumber?: Maybe<StringInput>;
  photoUrl?: Maybe<StringInput>;
};
