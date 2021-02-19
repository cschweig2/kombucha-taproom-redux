import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit } = props;

  function handleBuyPintButton(keg, num) {
    num = parseInt(num);
    props.onChangingKegPintsLeft({
      name: keg.name,
      brand: keg.brand,
      flavor: keg.flavor,
      price: keg.price,
      pintsLeft: keg.pintsLeft === 0 ? 0 : keg.pintsLeft = parseInt(keg.pintsLeft) - num,
      id: keg.id
    });
  }
  return (
    <>
      <h1>Keg Details</h1>
      <h2>{keg.brand} - {keg.name}</h2>
      <h3>flavor profile: {keg.flavor}</h3>
      <h4>price: {keg.price}</h4>
      <h4>pints left: {keg.pintsLeft}</h4>
      <button onClick={ () => onClickingDelete(keg.id) }>Delete Keg</button>
      <button onClick={ () => onClickingEdit(keg.id)}>Edit Keg</button>
      <button onClick={ () => handleBuyPintButton(keg, 1)}>Buy Pint</button>
      <hr />
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onChangingKegPintsLeft: PropTypes.func
}

export default KegDetail;