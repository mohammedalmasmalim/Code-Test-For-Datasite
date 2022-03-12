import axios from "axios";
import { Dispatch } from "react";
import {
  RegisterdUsersDispatchTypes,
  REGISTERED_USERS_FAIL,
  REGISTERED_USERS_LOADING,
  REGISTERED_USERS_SUCCESS,
} from "./RegisteredUsersActionType";

export const GetRegisterdUsers =
  () => async (dispatch: Dispatch<RegisterdUsersDispatchTypes>) => {
    try {
      dispatch({
        type: REGISTERED_USERS_LOADING,
      });

      const res: any = await axios.get(
        "https://5c3ce12c29429300143fe570.mockapi.io/api/registeredusers"
      );

      dispatch({
        type: REGISTERED_USERS_SUCCESS,
        payload: {users: res.data, isRegisteredUser: true},
      });
    } catch (error) {
      dispatch({
        type: REGISTERED_USERS_FAIL
      })
    }
  };
