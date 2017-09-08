import { createSelector } from 'reselect';

/**
 * Direct selector to the trash state domain
 */
const selectTrashDomain = () => (state) => state.get('trash');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Trash
 */

const makeSelectTrash = () => createSelector(
  selectTrashDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTrash;
export {
  selectTrashDomain,
};
