import React, {
  PropTypes,
  StyleSheet,
  ToolbarAndroid,
  ToastAndroid,
} from 'react-native'

import FBLogin from '../facebook/FBLogin'
import cssVar from '../../cssVar'

import * as navigation from './NavigationActions'

const handleActionSelected = position => {
  switch (position) {
    case 0:
      FBLogin.logOut()
        .then(success => ToastAndroid.show(success, ToastAndroid.LONG))
      break;
    default:

  }
}

const Toolbar = props => {

  const navIcon = props.navIcon
                    ? require('./img/ic_arrow_back_white.png')
                    : require('./img/delings-icon.png')

  return (
    <ToolbarAndroid style={styles.toolbar}
        title={props.title}
        titleColor='white'
        navIcon={navIcon}
        onIconClicked={navigation.goBack}
        overflowIcon={require('./img/ic_more_vert_white.png')}
        onActionSelected={handleActionSelected}
        actions={[
          {
            title: 'Logg ut',
            show: 'never',
          }
        ]}/>
  )
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: cssVar('colorPrimary'),
  },
})

Toolbar.propTypes = {
  title: PropTypes.string,
  navIcon: PropTypes.bool,
}

export default Toolbar
