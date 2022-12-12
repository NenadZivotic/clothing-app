import { UserWithId } from "../../App";
import { UserActionEnum } from "./UserAction.enum";

const INITIAL_STATE: { currentUser: UserWithId | null } = {
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: UserWithId }
): { currentUser: UserWithId | null } => {
  switch (action.type) {
    case UserActionEnum.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
