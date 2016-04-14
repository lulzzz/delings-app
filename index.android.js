import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

import FBMessenger from './components/facebook/FBMessenger'
import LoginView from './components/login/LoginView'

/*
MessengerAndroid.shareToMessenger(
    'http://www.visionlearning.com/blog/wp-content/uploads/2015/09/ezgif.com-optimize.gif',
    MessengerAndroid.IMAGE_GIF,
    '{ "image" : "space cat" }'
);
*/

class DelingsApp extends Component {
  render() {
    return (
      <LoginView style={styles.container}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('DelingsApp', () => DelingsApp)
