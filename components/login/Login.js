import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ToastAndroid,
} from 'react-native'

import FBLogin from '../facebook/FBLogin'

class Login extends Component {

  handleLoginPress() {
    FBLogin.logIn()
      .then(value => ToastAndroid.show(value, ToastAndroid.LONG))
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG))

    // try {
    //     const value = await FBLogin.logIn()
    //     ToastAndroid.show(value, ToastAndroid.LONG)
    // } catch (error) {
    //     ToastAndroid.show(error.message, ToastAndroid.LONG)
    // }
  }

  handleSkipPress() {}

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('./img/delings-bg.png')}>
          <Text style={styles.heading}>
            Delings
          </Text>
          <Text onPress={this.handleLoginPress}>
            Logg inn med Facebook
          </Text>
          <Text style={styles.subheading}>
            Gjør det personlig
          </Text>
          <Text style={styles.link}>
            Hopp over
          </Text>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  subheading: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  link: {
    textAlign: 'center',
    color: '#FF0000',
    margin: 10,
  },
  button: {

  },
})

export default Login
