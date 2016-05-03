import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = {
    navigator: null,
}

function navigator(state = initialState.navigator, action) {
  switch (action.type) {
    case types.SET_NAVIGATOR:
      return action.navigator
    default:
      return state
  }
}

export default combineReducers({
  navigator
})
