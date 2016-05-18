import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'

const FBSDK = require('react-native-fbsdk')
const {
  LoginManager,
} = FBSDK

export function goBack() {
  return (dispatch, getState) => {
    dispatch(navigation.goBack())
  }
}

function loggedOut(message) {
  return {
    type: types.LOGGED_OUT,
    message
  }
}

export function logOut() {
  return (dispatch, getState) => {
    LoginManager.logOut()
      .then(success => dispatch(loggedOut(success)))
      //.then(success => ToastAndroid.show(success, ToastAndroid.LONG))
  }
}
