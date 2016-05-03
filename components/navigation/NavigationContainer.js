import { connect } from 'react-redux'

import {
  setNavigator,
  goBack
} from './NavigationActions'

import Navigation from './Navigation'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setNavigator: navigator => {
      dispatch(setNavigator(navigator))
    },
    handleHardwareBackPress: () => {
      dispatch(goBack())
    }
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer
