import { connect } from 'react-redux'

import {
  logIntoFacebook,
  continueWithoutLogin
} from './LoginActions'

import LoginView from './LoginView'

const mapStateToProps = (state, ownProps) => {
  return {
    isFirstTimeUse: state.login.isFirstTimeUse,
    isLoggedIn: state.login.isLoggedIn,
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
