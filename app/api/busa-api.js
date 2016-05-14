import request from 'superagent';

export function get(path, params = {}) {
  return request
    .get(API_URL + path)
    .set('Accept', 'application/json')
    .query(params);
}
