import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = {
  isFirstTimeUse: false,
  isLoggedIn: false,
}

function login(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  login
})
