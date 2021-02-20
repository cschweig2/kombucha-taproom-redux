export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
})

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, flavor, price, pintsLeft, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    flavor: flavor,
    price: price,
    pintsLeft: pintsLeft,
    id: id
  }
};