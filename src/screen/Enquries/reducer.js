import {combineReducers} from 'redux';
import * as Types from './actionType';

function makeRequestReducer(actionType, initialState = {}) {
  const init = {
    data: [],
    error: false,
    isLoading: false,
    ...initialState,
  };

  return (state = init, {type, payload}) => {
    switch (type) {
        case `${actionType}.request`:
          return {
            ...state,
            isLoading: true,
          };
        case `${actionType}.success`:
          return {
            ...state,
            isLoading: false,
            data: payload.data,
            error: false,
          };
        case `${actionType}.failed`:
          return {
            ...state,
            isLoading: false,
            error: true,
            data: payload.data,
          };
        case `${actionType}.reset`:
          return {
            ...state,
            data: [],
          };
  
        default:
          return state;
      }
  };
}

export default combineReducers({
    getQuery: makeRequestReducer(Types.GET_QUERY_LIST)
});
