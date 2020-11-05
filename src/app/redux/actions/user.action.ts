import { USER_ACTIONS } from "../action-types/user.types";

export const fetchUsers = () => {
  return { type: USER_ACTIONS.LOAD_USERS };
};
