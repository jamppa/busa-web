import * as busaApi from './busa-api';

export function getConnectionsDeparturingNext() {
  return busaApi.get('/connections/departuring_next');
}

export function getConnectionsByPlaces(from, to) {
  return busaApi.get(`/connections/${from}/${to}`);
}
