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
      .then(profile => ToastAndroid.show(`Hei, ${profile['first_name']}!`, ToastAndroid.LONG))
      .catch(error => ToastAndroid.show(error.message, ToastAndroid.LONG))
  }

  handleSkipPress() {
    FBLogin.logOut()
      .then(value => ToastAndroid.show(value, ToastAndroid.LONG))
  }

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
              color='#4267B2'
              icon={require('./img/fb-logo-white.png')}
              raised>
            Logg inn med Facebook
          </Button>
          <Text style={styles.info}>
            Vi deler ikke informasjon om deg med andre.
          </Text>
          <Button handleButtonPress={this.handleSkipPress}
              color='#FFF'>
            Fortsett uten å logge inn
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(71, 191, 236)',
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
})

export default LoginView
