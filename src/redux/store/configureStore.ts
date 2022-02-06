import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import chilliReducer from '../reducers/chilliReducer';

const rootReducer = combineReducers({chilli: chilliReducer});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
};
export default configureStore;
