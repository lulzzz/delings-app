import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = {
  session: {
    isFirstTimeUse: false,
    isLoggedIn: false,
  }
}

function session(state = initialState.session, action) {
  switch (action.type) {
    case types.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      }
    case types.LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default combineReducers({
  session
})
