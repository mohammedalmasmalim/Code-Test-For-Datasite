import { User } from "../reducers/UsersReducer";

export const REGISTERED_USERS_LOADING = "REGISTERED_USERS_LOADING";
export const REGISTERED_USERS_SUCCESS = "REGISTERED_USERS_SUCCESS";
export const REGISTERED_USERS_FAIL = "REGISTERED_USERS_FAIL";

export interface RegisteredUsersLoading {
  type: typeof REGISTERED_USERS_LOADING;
}

export interface UserPayload {
  users: User[];
  isRegisteredUser: boolean;
}

export interface RegisteredUsersFail {
  type: typeof REGISTERED_USERS_FAIL;
}

export interface RegisteredUsersSuccess {
  type: typeof REGISTERED_USERS_SUCCESS;
  payload: UserPayload;
}

export type RegisterdUsersDispatchTypes =
  | RegisteredUsersLoading
  | RegisteredUsersFail
  | RegisteredUsersSuccess;
