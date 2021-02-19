import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

});