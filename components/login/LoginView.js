import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  ToastAndroid,
  StatusBar,
} from 'react-native'

import RaisedButton from '../button/RaisedButton'
import FlatButton from '../button/FlatButton'
import FBLogin from '../facebook/FBLogin'
import cssVar from '../../cssVar'

import * as navigation from '../navigation/NavigationActions'

class LoginView extends Component {

  async handleLoginPress() {
    try {
      const profile = await FBLogin.logIn()
      ToastAndroid.show(`Hei, ${profile['first_name']}!`, ToastAndroid.LONG)
      navigation.goForward({ name: 'Gallery' })
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.LONG)
    }
  }

  async handleSkipPress() {
    navigation.goForward({ name: 'Gallery' })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
              source={require('./img/delings-logo-transparent.png')}/>
        </View>
        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>
            Del nyttige ting med folk du kjenner &ndash; trygt og enkelt
          </Text>
        </View>
        <View style={styles.actionsContainer}>
          <RaisedButton handleButtonPress={this.handleLoginPress.bind(this)}
              color='#4267B2'
              icon={require('./img/fb-logo-white.png')}>
            Logg inn med Facebook
          </RaisedButton>
          <Text style={styles.info}>
            Vi deler ikke informasjon om deg med andre.
          </Text>
          <FlatButton handleButtonPress={this.handleSkipPress.bind(this)}
              color={cssVar('textColorPrimaryLight')}>
            Fortsett uten å logge inn
          </FlatButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cssVar('colorPrimary'),
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
  },
  tagline: {
    ...cssVar('fontHeadline'),
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    color: cssVar('textColorPrimaryLight'),
  },
  actionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    ...cssVar('fontBody1'),
    marginVertical: 10,
    marginHorizontal: 20,
    textAlign: 'center',
    color: cssVar('textColorSecondaryLight'),
  },
})

export default LoginView
