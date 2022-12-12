import { UserWithId } from "../../App";
import { UserActionEnum } from "./UserAction.enum";

export const setCurrentUser = (
  user: UserWithId
): { type: UserActionEnum; payload: UserWithId } => ({
  type: UserActionEnum.SET_CURRENT_USER,
  payload: user,
});
