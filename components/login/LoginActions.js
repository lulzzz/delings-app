import * as types from '../../actions'

import * as navigation from '../navigation/NavigationActions'
import routes from '../../routes'
import FBLogin from '../facebook/FBLogin'

function logIn(profile) {
  return {
    type: types.LOGGED_IN,
    profile
  }
}

export function logIntoFacebook() {
  return (dispatch, getState) => {
    FBLogin.logIn()
      .then(profile => dispatch(logIn(profile)))
      //.then(ToastAndroid.show(`Hei, ${profile['first_name']}!`, ToastAndroid.LONG))
      .then(navigation.goForward(routes.Gallery))
      //.catch(ToastAndroid.show(error.message, ToastAndroid.LONG))
      .catch(error => console.warn(error))
    }
}

export function continueWithoutLogin() {
  return (dispatch, getState) => {
    dispatch(navigation.goForward(routes.Gallery))
  }
}
