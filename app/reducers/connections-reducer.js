import * as actions from '../actions/connections-actions';
import { fromJS } from 'immutable';

const handleRequestConnectionsDeparturingNext = (state) => {
  return state.merge({isLoading: true});
};

const actionHandlers = {
  [actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT]: handleRequestConnectionsDeparturingNext
};

export const initialState = fromJS({
  isLoading: false,
  departuringNext: []
});

export function connections(state = initialState, action) {
  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state);
  }
  return state;
}
