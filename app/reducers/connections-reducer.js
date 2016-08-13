import * as actions from '../actions/connections-actions';
import { fromJS } from 'immutable';

const handleRequestConnectionsDeparturingNext = (state) => {
  return state.merge({isLoading: true});
};

const handleReceiveConnectionsDeparturingNext = (state, action) => {
  return state.merge({
    isLoading: false,
    departuringNext: action.payload.connections
  });
}

const handleRequestConnectionsByPlaces = (state) => {
  return state.merge({isLoadingByPlaces: true});
}

const handleReceiveConnectionsByPlaces = (state, action) => {
  return state.merge({
    isLoadingByPlaces: false,
    byPlaces: action.payload.connections
  });
}

const actionHandlers = {
  [actions.REQUEST_CONNECTIONS_DEPARTURING_NEXT]: handleRequestConnectionsDeparturingNext,
  [actions.RECEIVE_CONNECTIONS_DEPARTURING_NEXT]: handleReceiveConnectionsDeparturingNext,
  [actions.REQUEST_CONNECTIONS_BY_PLACES]: handleRequestConnectionsByPlaces,
  [actions.RECEIVE_CONNECTIONS_BY_PLACES]: handleReceiveConnectionsByPlaces
};

export const initialState = fromJS({
  isLoading: false,
  isLoadingByPlaces: false,
  departuringNext: [],
  byPlaces: []
});

export function connections(state = initialState, action) {
  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}
