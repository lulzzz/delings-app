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
      //.catch(ToastAndroid.show(error.message, ToastAndroid.LONG))
      .then(navigation.goForward(routes.Gallery))
    }
}

export function continueWithoutLogin() {
  return (dispatch, getState) => {
    dispatch(navigation.goForward(routes.Gallery))
  }
}
