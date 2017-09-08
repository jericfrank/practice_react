import { createSelector } from 'reselect';

/**
 * Direct selector to the inbox state domain
 */
const selectInboxDomain = () => (state) => state.get('inbox');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Inbox
 */

const makeSelectInbox = () => createSelector(
  selectInboxDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInbox;
export {
  selectInboxDomain,
};
