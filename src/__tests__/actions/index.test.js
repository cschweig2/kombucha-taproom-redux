import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('kombucha taproom actions', () => {
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM,
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Flower Power', brand: 'Dr. Spice', flavor: 'Chamomile and Hibiscus', price: 90, pintsLeft: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Flower Power',
      brand: 'Dr. Spice',
      flavor: 'Chamomile and Hibiscus',
      price: 90,
      pintsLeft: 124,
      id: 1
    });
  });

  it('toggleEdit should create TOGGLE_EDIT action', () => {
    expect(actions.toggleEdit()).toEqual({
      type: c.TOGGLE_EDIT
    })
  })

});