export const PROJECT_MEMBERSHIP_LOADING = "PROJECT_MEMBERSHIP_LOADING";
export const PROJECT_MEMBERSHIP_SUCCESS = "PROJECT_MEMBERSHIP_SUCCESS";
export const PROJECT_MEMBERSHIP_FAIL = "PROJECT_MEMBERSHIP_FAIL";

export interface ProjectMembership {
  id: string;
  projectId: string;
  userId: string;
}

export interface ProjectMembershipLoading {
  type: typeof PROJECT_MEMBERSHIP_LOADING;
}

export interface ProjectMembershipFail {
  type: typeof PROJECT_MEMBERSHIP_FAIL;
}

export interface ProjectMembershipSuccess {
  type: typeof PROJECT_MEMBERSHIP_SUCCESS;
  payload: ProjectMembership[];
}

export type ProjectMembershipDispatchTypes =
  | ProjectMembershipLoading
  | ProjectMembershipFail
  | ProjectMembershipSuccess;
