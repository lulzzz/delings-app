import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = {}

function toolbar(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  toolbar
})
