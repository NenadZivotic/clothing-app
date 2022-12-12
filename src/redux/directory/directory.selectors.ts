import { createSelector } from "reselect";

import { SectionModel } from "../../models";

const selectDirectory = (state: { directory: { sections: SectionModel[] } }) =>
  state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory
);
