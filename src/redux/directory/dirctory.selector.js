import { createSelector } from "reselect";

const selectDircetory = state => state.directory;

export const selectDirctorySections = createSelector(
  [selectDircetory],
  directory => directory.sections
);
