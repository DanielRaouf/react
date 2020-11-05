import { IUserAction, USER_ACTIONS } from "../action-types/user.types";

export interface IUserState {
  loading: boolean;
  list: Array<any>;
}

let USER_INITIAL_STATE: IUserState = { loading: false, list: [] };

function user(
  state: IUserState = USER_INITIAL_STATE,
  action: IUserAction
): IUserState {
  switch (action.type) {
    case USER_ACTIONS.LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTIONS.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case USER_ACTIONS.LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default user;
