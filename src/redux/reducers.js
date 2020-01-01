import { REQUEST_ROBOT_FAILED, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_SUCCESS, SEARCH_FIELD_CHANGE } from './constants';
import { combineReducers } from 'redux';

const initialSearchState = {
  searchField: ''
}
const setSearchField = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

const initialRobotsState = {
  robots: [],
  isPending: false,
  hasError: false
}

export const requestRobots = (state = initialRobotsState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOT_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, hasError: false, isPending: false})
    case REQUEST_ROBOT_FAILED:
      return Object.assign({}, state, {error: action.payload, hasError: true, isPending: false})
    default:
      return state
  }
}

export const rootReducer = combineReducers({setSearchField, requestRobots});