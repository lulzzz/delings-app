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
    default:
      return state
  }
}

export default combineReducers({
  session
})
