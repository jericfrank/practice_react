
import { fromJS } from 'immutable';
import trashReducer from '../reducer';

describe('trashReducer', () => {
  it('returns the initial state', () => {
    expect(trashReducer(undefined, {})).toEqual(fromJS({}));
  });
});
