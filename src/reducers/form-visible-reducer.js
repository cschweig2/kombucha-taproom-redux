export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FOR':
      return !state;
    default:
      return state;
  }
};