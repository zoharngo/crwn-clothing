import { SET_CUREENT_USER } from "./user.actions.types";

export const setUserAction = currentUser => ({
  type: SET_CUREENT_USER,
  payload: currentUser
});
