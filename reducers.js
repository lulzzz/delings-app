import { combineReducers } from 'redux'

import navigation from './components/navigation/NavigationReducers'
import toolbar from './components/toolbar/ToolbarReducers'
import login from './components/login/LoginReducers'
import gallery from './components/gallery/GalleryReducers'
import sendMessage from './components/message/SendMessageReducers'

export default combineReducers({
  navigation,
  toolbar,
  login,
  gallery,
  sendMessage,
})
