import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editReducer from './editing-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editReducer
});

export default rootReducer;