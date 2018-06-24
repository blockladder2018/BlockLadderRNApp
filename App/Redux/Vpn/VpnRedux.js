import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';
import _ from 'lodash';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  proxys: {},
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setProxys: ['proxys'],
  clear: null,
});

Creators.fetchProxys = () => {
  return (dispatch) => {
    return axios.get('http://138.197.223.133:8000/api/v1/proxys')
      .then((response) => {
        const arrayOfProxys = response.data.proxys;
        const proxys = _.keyBy(arrayOfProxys, proxy => proxy.id);
        return dispatch(Creators.setProxys(proxys));
      })
      .catch(() => console.log('Error calling fetchProxys'));
  };
};

export default Creators;

/* ------------- Reducers ------------- */
export const setProxysReducer = (state = INITIAL_STATE, { proxys }) => {
  return state.merge({ proxys });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PROXYS]: setProxysReducer,
  [Types.CLEAR]: clearReducer,
});
