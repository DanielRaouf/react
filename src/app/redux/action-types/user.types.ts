export enum USER_ACTIONS {
  LOAD_USERS = "LOAD_USERS",
  LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS",
  LOAD_USERS_FAIL = "LOAD_USERS_FAIL",
}

export interface IUserAction {
  type: USER_ACTIONS;
  payload?: any;
}
