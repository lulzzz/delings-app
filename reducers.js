import { combineReducers } from 'redux'

import navigation from './components/navigation/NavigationReducers'
import login from './components/login/LoginReducers'
import gallery from './components/gallery/GalleryReducers'

export default combineReducers({
  navigation,
  login,
  gallery,
})
