import {
  ProjectMembership,
  PROJECT_MEMBERSHIP_FAIL,
  PROJECT_MEMBERSHIP_LOADING,
  PROJECT_MEMBERSHIP_SUCCESS,
} from "../actions/ProjectMemberShipActionType";
import {
  REGISTERED_USERS_FAIL,
  REGISTERED_USERS_LOADING,
  REGISTERED_USERS_SUCCESS,
  UserPayload,
} from "../actions/RegisteredUsersActionType";
import {
  UNREGISTERED_USERS_FAIL,
  UNREGISTERED_USERS_LOADING,
  UNREGISTERED_USERS_SUCCESS,
} from "../actions/UnRegisteredUsersActionType";

export interface User {
  id: string;
  city: string;
  company: string;
  country: string;
  firstName: string;
  lastName: string;
  organisation: string;
  phone: string;
  state: string;
  zipCode: string;
  disclaimerAccepted: boolean;
  languageCode: string;
  emailAddress: string;
  isRegisteredUser?: boolean;
  projectIds?: string[];
}

interface DefaultStateI {
  registerdUsersloading?: boolean;
  unregisterdUsersloading?: boolean;
  projectMembershiploading?: boolean;
  users?: User[];
}

const defaultState: DefaultStateI = {
  registerdUsersloading: false,
  unregisterdUsersloading: false,
  projectMembershiploading: false,
  users: [],
};

const usersReducer = (
  state: DefaultStateI = defaultState,
  action: any
): DefaultStateI => {
  switch (action.type) {
    case REGISTERED_USERS_FAIL:
      return { ...state, registerdUsersloading: false };

    case REGISTERED_USERS_LOADING:
      return { ...state, registerdUsersloading: true };

    case REGISTERED_USERS_SUCCESS:
      return {
        ...state,
        registerdUsersloading: false,
        users: addIsRegisterdUser(state.users || [], action.payload),
      };

    case UNREGISTERED_USERS_FAIL:
      return { ...state, unregisterdUsersloading: false };

    case UNREGISTERED_USERS_LOADING:
      return { ...state, unregisterdUsersloading: true };

    case UNREGISTERED_USERS_SUCCESS:
      return {
        ...state,
        unregisterdUsersloading: false,
        users: addIsRegisterdUser(state.users || [], action.payload),
      };

    case PROJECT_MEMBERSHIP_FAIL:
      return { ...state, projectMembershiploading: false };

    case PROJECT_MEMBERSHIP_LOADING:
      return { ...state, projectMembershiploading: true };

    case PROJECT_MEMBERSHIP_SUCCESS:
      return {
        ...state,
        projectMembershiploading: false,
        users: addProjectIdsToUsers(state.users || [], action.payload),
      };
  }
  return state;
};

export default usersReducer;

const addIsRegisterdUser = (users: User[], payload: UserPayload): User[] => [
  ...users,
  ...payload.users.map((user: User) => ({
    ...user,
    isRegisteredUser: payload.isRegisteredUser,
  })),
];

const addProjectIdsToUsers = (
  users: User[],
  projectsPayload: ProjectMembership[]
): User[] =>
  users.map((user: User) => ({
    ...user,
    projectIds: [
      ...(user.projectIds || []),
      ...projectsPayload
        .filter((project) => project.userId === user.id)
        .map((i) => i.projectId)
    ],
  }));
