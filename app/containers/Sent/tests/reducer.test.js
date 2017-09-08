
import { fromJS } from 'immutable';
import sentReducer from '../reducer';

describe('sentReducer', () => {
  it('returns the initial state', () => {
    expect(sentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
