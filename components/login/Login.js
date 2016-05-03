import { connect } from 'react-redux'

import {
  logIntoFacebook,
  continueWithoutLogin
} from './LoginActions'

import LoginView from './LoginView'

const mapStateToProps = (state, ownProps) => {
  return {
    isFirstTimeUse: state.login.session.isFirstTimeUse,
    isLoggedIn: state.login.session.isLoggedIn,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLoginPress: () => {
      dispatch(logIntoFacebook())
    },
    handleSkipPress: () => {
      dispatch(continueWithoutLogin())
    }
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

export default Login
