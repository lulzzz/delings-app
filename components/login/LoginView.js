import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ToastAndroid,
} from 'react-native'

import Button from '../button/Button'
import FBLogin from '../facebook/FBLogin'

class LoginView extends Component {

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
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('./img/delings-logo.png')}/>
        </View>
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>
            Del nyttige ting med folk du kjenner &ndash; trygt og enkelt
          </Text>
        </View>
        <View style={styles.actionsContainer}>
          <Button handleButtonPress={this.handleLoginPress}
            text='Logg inn med Facebook'
            />
          <Text style={styles.info}>
            Vi gir ikke bort informasjon om deg til andre.
          </Text>
          <Text style={styles.link}>
            Fortsett uten å logge inn
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 191, 236)'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  taglineContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tagline: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 25,
    color: '#FFF',
  },
  actionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 14,
    color: 'rgba(255,255,255,0.70)',
  },
  link: {
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
})

export default LoginView
