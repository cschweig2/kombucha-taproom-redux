import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddKegForm(props) {
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText='Add Keg' />
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: parseFloat(event.target.price.value),
      pintsLeft: 124,
      id: v4()});
  }
}

AddKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default AddKegForm;