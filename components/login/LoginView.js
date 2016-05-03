import React, {
  PropTypes,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

import RaisedButton from '../button/RaisedButton'
import FlatButton from '../button/FlatButton'
import cssVar from '../../cssVar'

const LoginView = props => (
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
      <RaisedButton handleButtonPress={props.handleLoginPress}
          color='#4267B2'
          icon={require('./img/fb-logo-white.png')}>
        Logg inn med Facebook
      </RaisedButton>
      <Text style={styles.info}>
        Vi deler ikke informasjon om deg med andre.
      </Text>
      <FlatButton handleButtonPress={props.handleSkipPress}
          color={cssVar('textColorPrimaryLight')}>
        Fortsett uten å logge inn
      </FlatButton>
    </View>
  </View>
)

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

LoginView.propTypes = {
  isFirstTimeUse: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  handleLoginPress: PropTypes.func.isRequired,
  handleSkipPress: PropTypes.func.isRequired,
}

export default LoginView
