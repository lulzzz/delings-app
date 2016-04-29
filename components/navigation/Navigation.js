import React, {
  Component,
  Navigator,
  BackAndroid,
  View
} from 'react-native'

import LoginView from '../login/LoginView'
import GalleryContainer from '../gallery/GalleryContainer'
import SendMessageView from '../message/SendMessageView'

import * as navigation from './NavigationActions'

BackAndroid.addEventListener('hardwareBackPress', () => {
  return navigation.goBack()
});

class Navigation extends Component {

  renderScene(route, navigator) {
    navigation.setNavigator(navigator)

    switch (route.name) {
      case 'Login':
        return <LoginView navigator={navigator} />
      case 'Gallery':
        return <GalleryContainer navigator={navigator} />
      case 'SendMessage':
        return <SendMessageView navigator={navigator} image={route.image} />
      default:
        return <View />
    }
  }

  configureScene(route, routeStack) {
    switch (route.name) {
      case 'Gallery':
        return Navigator.SceneConfigs.FadeAndroid
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  }

  render() {
    return (
      <Navigator
          initialRoute={{ name: 'Login' }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
    )
  }
}

export default Navigation
