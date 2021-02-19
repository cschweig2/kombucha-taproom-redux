import React from 'react';
import KegDetail from './KegDetail';
import KegList from './KegList';
import AddKegForm from './AddKegForm';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false,
      buying: false
    };
  }

  handleAddingKeg = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditingKeg = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, flavor, price, id } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleKegSelection = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleKegDelete = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleBuyPint = (kegToBuyFrom) => {
    const selectedKeg = this.state.selectedKeg;
    if (selectedKeg.pintsLeft > 1) {
      // const newPintCount = Object.assign({}, selectedKeg, { pintsLeft: selectedKeg.pintsLeft - 1});
      // const newMasterKegList = this.props.masterKegList[id];
      // newMasterKegList.pintsLeft = newPintCount;
      // // const newMasterKegList = this.state.masterKegList
      // //   .filter(keg => keg.id !== this.state.selectedKeg.id)
      // //   .concat(newPintCount);

      const { dispatch } = this.props;
      const { pintsLeft } = kegToBuyFrom;
      const action = {
        type: 'ADD_KEG',
        pintsLeft: pintsLeft - 1
      }
      dispatch(action);

      this.setState({
        selectedKeg: null
      });
    } else if (selectedKeg.pintsLeft === 1) {
      const newPintCount = Object.assign({}, selectedKeg, { pintsLeft: selectedKeg.pintsLeft = 'Out of Stock'});
      const newMasterKegList = this.state.masterKegList
        .filter(keg => keg.id !== this.state.selectedKeg.id)
        .concat(newPintCount);
      this.setState({
        masterKegList: newMasterKegList,
        selectedKeg: null
      });
    }
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentVisibleState = <EditKegForm
      keg={this.state.selectedKeg}
      onEditKeg={this.handleEditingKeg} />
      buttonText='Return to Keg List';
    } else if (this.props.formVisibleOnPage)  {
      currentVisibleState = <AddKegForm onNewKegCreation={this.handleAddingKeg} />
      buttonText='Return to Keg List';
    } else if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail
      keg={this.state.selectedKeg}
      onClickingDelete={this.handleKegDelete}
      onClickingEdit={this.handleEditClick}
      onClickingBuy={this.handleBuyPint} />
      buttonText='Return to Keg List';
    } else {
      currentVisibleState = <KegList
      kegList={this.props.masterKegList}
      onKegSelection={this.handleKegSelection} />
      buttonText='Add Keg';
    }

    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }

}

KombuchaControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;