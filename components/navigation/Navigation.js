import { connect } from 'react-redux'

import {
  setNavigator,
  goBack
} from './NavigationActions'

import NavigationView from './NavigationView'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setNavigator: navigator => {
      dispatch(setNavigator(navigator))
    },
    handleHardwareBackPress: () => {
      return dispatch(goBack())
    }
  }
}

const Navigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationView)

export default Navigation
