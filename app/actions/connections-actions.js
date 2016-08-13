import * as connectionsApi from '../api/connections-api';

export const REQUEST_CONNECTIONS_DEPARTURING_NEXT = 'REQUEST_CONNECTIONS_DEPARTURING_NEXT';
export const REQUEST_CONNECTIONS_BY_PLACES = 'REQUEST_CONNECTIONS_BY_PLACES';
export const RECEIVE_CONNECTIONS_DEPARTURING_NEXT = 'RECEIVE_CONNECTIONS_DEPARTURING_NEXT';
export const RECEIVE_CONNECTIONS_BY_PLACES = 'RECEIVE_CONNECTIONS_BY_PLACES';

export function requestConnectionsDeparturingNext() {
  return {
    type: REQUEST_CONNECTIONS_DEPARTURING_NEXT
  };
}

export function requestConnectionsByPlaces() {
  return {
    type: REQUEST_CONNECTIONS_BY_PLACES
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

export function receiveConnectionsByPlaces(connections) {
  return {
    type: RECEIVE_CONNECTIONS_BY_PLACES,
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
