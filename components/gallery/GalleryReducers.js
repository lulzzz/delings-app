import { combineReducers } from 'redux'

import * as types from '../../actions'

const initialState = [
  {
    name: 'Vintersport',
    image: require('./img/winter-sports.jpg'),
  },
  {
    name: 'Hagearbeid',
    image: require('./img/gardening.jpg'),
  },
  {
    name: 'Baking og matlaging',
    image: require('./img/baking-cooking.jpg'),
  },
  {
    name: 'Oppussing',
    image: require('./img/home-improvement.jpg'),
  },
]

function categories(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_CATEGORY:
      // do something
    default:
      return state
  }
}

export default combineReducers({
  categories
})
