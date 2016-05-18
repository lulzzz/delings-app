import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'
import routes from '../../routes'

const FBSDK = require('react-native-fbsdk')
const {
  LoginManager,
} = FBSDK

function loggedIn(profile) {
  return {
    type: types.LOGGED_IN,
    profile
  }
}

export function logIntoFacebook() {
  return (dispatch, getState) => {
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then(result => {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          alert('Login was successful with permissions: '
            + result.grantedPermissions.toString());
        }
      })
      .catch(error => alert('Login failed with error: ' + error))
      .then(profile => dispatch(loggedIn(profile)))
      .then(dispatch(navigation.goForward(routes.Gallery)))
      //.then(ToastAndroid.show(`Hei, ${profile['first_name']}!`, ToastAndroid.LONG))
      //.catch(ToastAndroid.show(error.message, ToastAndroid.LONG))
  }
}

export function continueWithoutLogin() {
  return (dispatch, getState) => {
    dispatch(navigation.goForward(routes.Gallery))
  }
}
