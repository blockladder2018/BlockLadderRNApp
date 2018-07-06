import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  activeTab: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setActiveTab: ['activeTab'],
  clear: null,
});

export default Creators;

/* ------------- Reducers ------------- */
export const setActiveTabReducer = (state = INITIAL_STATE, { activeTab }) => {
  return state.merge({ activeTab });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ACTIVE_TAB]: setActiveTabReducer,
  [Types.CLEAR]: clearReducer,
});
