import { IUserAction, USER_ACTIONS } from "../action-types/user.types";

let USER_INITIAL_STATE = {};
function user(state = USER_INITIAL_STATE, action: IUserAction) {
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
