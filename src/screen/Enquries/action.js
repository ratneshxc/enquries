import * as actionTypes from './actionType';
import * as actionHandlers from '../../helpers/actionHandlers';

export const getQueryData = () => (dispatch) => {
  dispatch(actionHandlers.tryHandle(actionTypes.GET_QUERY_LIST_REQUEST));
  return fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
    .catch((error) => {
      console.log('network', error);
      const json = {
        type: 'error',
        message: 'Please make sure you are connected to internet',
      };
      dispatch(
        actionHandlers.handleError(actionTypes.GET_QUERY_LIST_FAILED, json),
      );
    })
    .then((response) => {
      if (response.status >= 400) {
        const json = {
          type: 'error',
          statusCode: response.status,
        };
        return response.json().then((data) => {
          json.message = data.message || json.message;
          dispatch(
            actionHandlers.handleResponse(
              actionTypes.GET_QUERY_LIST_FAILED,
              json,
            ),
          );
        });
      }
      return response
        .json()
        .then((data) =>
          dispatch(
            actionHandlers.handleResponse(
              actionTypes.GET_QUERY_LIST_SUCCESS,
              data,
            ),
          ),
        );
    })
    .catch((error) => {
      console.log('err', error);
    });
};
