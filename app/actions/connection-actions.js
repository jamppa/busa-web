export const REQUEST_CONNECTIONS_DEPARTURING_NEXT = 'REQUEST_CONNECTIONS_DEPARTURING_NEXT';
export const RECEIVE_CONNECTIONS = 'RECEIVE_CONNECTIONS';

export function requestConnectionsDeparturingNext() {
  return {
    type: REQUEST_CONNECTIONS_DEPARTURING_NEXT
  };
}

export const receiveConnections = (connections) => {
  return {
    type: RECEIVE_CONNECTIONS,
    payload: {
      connections: connections
    }
  };
}
