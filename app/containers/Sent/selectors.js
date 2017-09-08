import { createSelector } from 'reselect';

/**
 * Direct selector to the sent state domain
 */
const selectSentDomain = () => (state) => state.get('sent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Sent
 */

const makeSelectSent = () => createSelector(
  selectSentDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSent;
export {
  selectSentDomain,
};
