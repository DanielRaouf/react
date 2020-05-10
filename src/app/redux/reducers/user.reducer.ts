import { IUserAction, USER_ACTIONS } from "../action-types/user.types";

export interface IUserState {
  loading: boolean;
}

let USER_INITIAL_STATE: IUserState = { loading: false };

function user(
  state: IUserState = USER_INITIAL_STATE,
  action: IUserAction
): IUserState {
  switch (action.type) {
    case USER_ACTIONS.LOAD_USERS:
      return {
        loading: true,
      };
    case USER_ACTIONS.LOAD_USERS_SUCCESS:
      return {
        loading: false,
        ...action.payload,
      };
    case USER_ACTIONS.LOAD_USERS_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
}

export default user;
