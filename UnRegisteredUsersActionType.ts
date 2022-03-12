import { UserPayload } from "./RegisteredUsersActionType";

export const UNREGISTERED_USERS_LOADING = "UNREGISTERED_USERS_LOADING";
export const UNREGISTERED_USERS_SUCCESS = "UNREGISTERED_USERS_SUCCESS";
export const UNREGISTERED_USERS_FAIL = "UNREGISTERED_USERS_FAIL";

export interface UnRegisteredUsersLoading {
  type: typeof UNREGISTERED_USERS_LOADING;
}

export interface UnRegisteredUsersFail {
  type: typeof UNREGISTERED_USERS_FAIL;
}

export interface UnRegisteredUsersSuccess {
  type: typeof UNREGISTERED_USERS_SUCCESS;
  payload: UserPayload;
}

export type UnRegisterdUsersDispatchTypes =
  | UnRegisteredUsersLoading
  | UnRegisteredUsersFail
  | UnRegisteredUsersSuccess;
