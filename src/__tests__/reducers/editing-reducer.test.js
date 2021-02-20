import toggleEditReducer from '../../reducers/editing-reducer';
import * as c from '../../actions/ActionTypes';

describe('toggleEditReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(toggleEditReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle edit state to true', () => {
    expect(toggleEditReducer(false, { type: c.TOGGLE_EDIT })).toEqual(true);
  });

});