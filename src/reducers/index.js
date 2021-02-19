import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: 0
});

export default rootReducer;