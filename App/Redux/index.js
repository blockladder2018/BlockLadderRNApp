import { combineReducers } from 'redux';
import configureStore from './CreateStore';

const createStore = () => {
  const rootReducer = combineReducers({
    login: require('./Login/LoginRedux').reducer,
  });

  return configureStore(rootReducer);
};

const store = createStore();

export default store;
