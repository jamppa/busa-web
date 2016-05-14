import * as busaApi from './busa-api';

const CONNECTIONS_DEPARTURING_NEXT = '/connections/departuring_next';

export function getConnectionsDeparturingNext() {
  return busaApi.get(CONNECTIONS_DEPARTURING_NEXT);
}
