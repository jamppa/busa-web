export const REQUEST_CONNECTIONS_DEPARTURING_NEXT = 'REQUEST_CONNECTIONS_DEPARTURING_NEXT';
export const RECEIVE_CONNECTIONS_DEPARTURING_NEXT = 'RECEIVE_CONNECTIONS_DEPARTURING_NEXT';

export function requestConnectionsDeparturingNext() {
  return {
    type: REQUEST_CONNECTIONS_DEPARTURING_NEXT
  };
}

export const receiveConnectionsDeparturingNext = (connections) => {
  return {
    type: RECEIVE_CONNECTIONS_DEPARTURING_NEXT,
    payload: {
      connections
    }
  };
}
