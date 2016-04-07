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
} from 'react-native';

import MessengerAndroid from './components/MessengerAndroid';

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
      <View style={styles.container}>
          <Image source={{uri: 'spacecat'}} style={{width: 576, height: 318}} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
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
