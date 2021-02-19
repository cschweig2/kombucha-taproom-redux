export default (state = {}, action) => {
  // const { name, brand, flavor, price, pintsLeft, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return state;
    default:
      return !state;
  }
};