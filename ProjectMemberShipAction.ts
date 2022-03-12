import axios from "axios";
import { Dispatch } from "react";
import {
  ProjectMembershipDispatchTypes,
  PROJECT_MEMBERSHIP_FAIL,
  PROJECT_MEMBERSHIP_LOADING,
  PROJECT_MEMBERSHIP_SUCCESS,
} from "./ProjectMemberShipActionType";

export const GetProjectMembership =
  () => async (dispatch: Dispatch<ProjectMembershipDispatchTypes>) => {
    try {
      dispatch({
        type: PROJECT_MEMBERSHIP_LOADING,
      });

      const res: any = await axios.get(
        "https://5c3ce12c29429300143fe570.mockapi.io/api/projectmemberships"
      );

      dispatch({
        type: PROJECT_MEMBERSHIP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: PROJECT_MEMBERSHIP_FAIL
      })
    }
  };
