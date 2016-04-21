import React, {
  View,
} from 'react-native'

import LoginView from './components/login/LoginView'
import GalleryView from './components/gallery/GalleryView'
import SendMessageView from './components/message/SendMessageView'

const initialRoute = {
  name: 'Login'
}

const renderScene = (route, navigator) => {
  switch (route.name) {
    case 'Login':
      return <LoginView navigator={navigator} />
    case 'Gallery':
      return <GalleryView navigator={navigator} />
    case 'SendMessage':
      return <SendMessageView navigator={navigator} image={route.image} />
    default:
      return <View />
  }
}

export default {
  renderScene,
  initialRoute
}
