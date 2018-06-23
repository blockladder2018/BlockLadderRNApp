import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import axios from 'axios';
// import BlockLadderService from 'App/Services';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  id: null,
  ip: null,
  port: null,
  password: null,
  encryption: null,
  status: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setProxys: ['proxys'],
  clear: null,
});

Creators.getProxys = () => {
  return (dispatch) => {
    return axios.get('http://138.197.223.133:8000/api/v1/proxys')
      .then((response) => {
        return dispatch(Creators.setProxys(response.data.proxys[0]));
      })
      .catch(() => console.log('Error calling getProxys'));
  };
};

export default Creators;

/* ------------- Reducers ------------- */
export const setProxysReducer = (state = INITIAL_STATE, { proxys }) => {
  return state.merge({
    id: proxys.id,
    ip: proxys.ip,
    port: proxys.port,
    password: proxys.password,
    encryption: proxys.encryption,
    status: proxys.status,
  });
};

const clearReducer = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PROXYS]: setProxysReducer,
  [Types.CLEAR]: clearReducer,
});
