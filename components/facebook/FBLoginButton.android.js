import {
    requireNativeComponent,
    PropTypes,
    View,
} from 'react-native'

const iface = {
  name: 'FacebookLoginButton',
  propTypes: {
    ...View.propTypes,
  },
}

module.exports = requireNativeComponent('RCTFacebookLoginButtonAndroid', iface)
