import React, {
  PropTypes,
  StyleSheet,
  ToolbarAndroid,
  ToastAndroid,
} from 'react-native'

import FBLogin from '../facebook/FBLogin'
import cssVar from '../../cssVar'

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
    <ToolbarAndroid onActionSelected={handleActionSelected}
        style={styles.toolbar}
        title={props.title}
        titleColor='white'
        navIcon={navIcon}
        overflowIcon={require('./img/ic_more_vert_white.png')}
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
