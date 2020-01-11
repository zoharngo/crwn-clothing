import { createSelector } from "reselect";

const selectDircetory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDircetory],
  directory => directory.sections
);
