import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = {
  message: {
    image: null,
    category: null,
  }
}

function message(state = initialState.message, action) {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      return {
        ...state,
        image: action.image,
        category: action.category
      }
    default:
      return state
  }
}

export default combineReducers({
  message
})
