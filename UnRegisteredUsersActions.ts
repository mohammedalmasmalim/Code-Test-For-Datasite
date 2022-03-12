import axios from "axios";
import { Dispatch } from "react";
import {
  UnRegisterdUsersDispatchTypes,
  UNREGISTERED_USERS_FAIL,
  UNREGISTERED_USERS_LOADING,
  UNREGISTERED_USERS_SUCCESS,
} from "./UnRegisteredUsersActionType";

export const GetUnRegisterdUsers =
  () => async (dispatch: Dispatch<UnRegisterdUsersDispatchTypes>) => {
    try {
      dispatch({
        type: UNREGISTERED_USERS_LOADING,
      });

      const res: any = await axios.get(
        "https://5c3ce12c29429300143fe570.mockapi.io/api/unregisteredusers"
      );

      dispatch({
        type: UNREGISTERED_USERS_SUCCESS,
        payload: {users: res.data, isRegisteredUser: false},
      });
    } catch (error) {
      dispatch({
        type: UNREGISTERED_USERS_FAIL
      })
    }
  };
