import * as actions from '../actions/connections-actions';

const handleRequestConnectionsDeparturingNext = (state) => {
  return state.merge({isLoading: true});
};

const actionHandlers = {
  [actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT]: handleRequestConnectionsDeparturingNext
};

export default function connections(state, action) {
  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state);
  }
  return state;
}
