import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

    let action;

    const kegData = {
      name: 'Flower Power',
      brand: 'Dr. Spice',
      flavor: 'Chamomile and Hibiscus',
      price: 90,
      pintsLeft: 124,
      id: 1
    }

    const currentState = {
      1: {
        name: 'Flower Power',
        brand: 'Dr. Spice',
        flavor: 'Chamomile and Hibiscus',
        price: 90,
        pintsLeft: 124,
        id: 1
      },
      2: {
        name: 'CinnaPower',
        brand: 'Dr. Spice',
        flavor: 'Cinnamon and Rooibos',
        price: 100,
        pintsLeft: 124,
        id: 2
      }
    }

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg to masterKegList', () => {
    const { name, brand, flavor, price, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      pintsLeft: 124,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        flavor: flavor,
        price: price,
        pintsLeft: 124,
        id: id
      }
    });

  });

  test('Should successfully delete keg from masterKegList', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };

    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'CinnaPower',
        brand: 'Dr. Spice',
        flavor: 'Cinnamon and Rooibos',
        price: 100,
        pintsLeft: 124,
        id: 2
      }

    });
  });

});