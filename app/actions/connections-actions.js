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

// Async actions

export function fetchConnectionsDeparturingNext() {
  return (dispatch) => {
    dispatch(requestConnectionsDeparturingNext());
    return connectionsApi.getConnectionsDeparturingNext()
      .then(
        response => dispatch(receiveConnectionsDeparturingNext(response.body)),
        err => {});
  }
}

export function fetchConnectionsByPlaces(from, to) {
  return (dispatch) => {
    dispatch(requestConnectionsByPlaces());
    return connectionsApi.getConnectionsByPlaces(from, to)
      .then(
        response => dispatch(receiveConnectionsByPlaces(response.body)),
        err => {});
  }
}
