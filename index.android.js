/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

import FBMessenger from './components/facebook/FBMessenger'
import Login from './components/login/Login'

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
      <Login/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DelingsApp', () => DelingsApp);
