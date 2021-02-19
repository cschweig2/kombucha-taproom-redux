export default (state = {}, action) => {
  const { name, brand, flavor, price, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id] : {
          name: name,
          brand: brand,
          flavor: flavor,
          price: price,
          pintsLeft: 124,
          // id: id
        }
      });
    default:
      return state;
  }
};