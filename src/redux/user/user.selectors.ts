import { createSelector } from "reselect";

import { UserWithId } from "../../App";

const selectUser = (state: {
  user: { currentUser: UserWithId };
}): { currentUser: UserWithId } => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
