import React, {
  Component,
  Navigator,
  BackAndroid,
  View
} from 'react-native'

import LoginView from './components/login/LoginView'
import GalleryContainer from './components/gallery/GalleryContainer'
import SendMessageView from './components/message/SendMessageView'

var _navigator; // we fill this up upon on first navigation.

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class Navigation extends Component {

  renderScene(route, navigator) {
    _navigator = navigator

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

  render() {
    return (
      <Navigator
          initialRoute={{ name: 'Login' }}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}
        />
    )
  }
}

export default Navigation
