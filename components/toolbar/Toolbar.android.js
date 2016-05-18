import { connect } from 'react-redux'

import {
  goBack,
  logOut,
} from './ToolbarActions'

import ToolbarView from './ToolbarView'

const mapStateToProps = (state, ownProps) => {
  return {
    title: ownProps.title,
    navIcon: ownProps.navIcon,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleIconClicked: () => {
      dispatch(goBack())
    },
    handleActionSelected: position => {
      switch (position) {
        case 0:
          dispatch(logOut())
        default:
          // noop
      }
    },
  }
}

const Toolbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarView)

export default Toolbar
