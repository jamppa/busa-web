import * as connectionsApi from '../api/connections-api';

export const REQUEST_CONNECTIONS_DEPARTURING_NEXT = 'REQUEST_CONNECTIONS_DEPARTURING_NEXT';
export const REQUEST_CONNECTIONS_BY_PLACES = 'REQUEST_CONNECTIONS_BY_PLACES';
export const RECEIVE_CONNECTIONS_DEPARTURING_NEXT = 'RECEIVE_CONNECTIONS_DEPARTURING_NEXT';

export function requestConnectionsDeparturingNext() {
  return {
    type: REQUEST_CONNECTIONS_DEPARTURING_NEXT
  };
}

export function requestConnectionsByPlaces(departurePlace, arrivalPlace) {
  return {
    type: REQUEST_CONNECTIONS_BY_PLACES,
    payload: {
      departurePlace,
      arrivalPlace
    }
  };
}

export function receiveConnectionsDeparturingNext(connections) {
  return {
    type: RECEIVE_CONNECTIONS_DEPARTURING_NEXT,
    payload: {
      connections
    }
  };
}

export function fetchConnectionsDeparturingNext() {
  return (dispatch) => {
    dispatch(requestConnectionsDeparturingNext());
    return connectionsApi.getConnectionsDeparturingNext()
      .then(
        response => dispatch(receiveConnectionsDeparturingNext(response.body)),
        err => {});
  }
}
