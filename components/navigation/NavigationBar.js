import React, {
  PropTypes,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native'

import cssVar from '../../cssVar'

const handleActionSelected = position => {
  switch (position) {
    case 0:
      console.warn('logout clicked')
      break;
    default:

  }
}

const NavigationBar = props => {

  const navIcon = props.navIcon
                    ? require('./img/ic_arrow_back_white.png')
                    : require('./img/delings-icon.png')

  return (
    <ToolbarAndroid onActionSelected={handleActionSelected}
        style={styles.toolbar}
        title={props.title}
        titleColor={cssVar('textColorPrimaryLight')}
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

NavigationBar.propTypes = {
  title: PropTypes.string,
  navIcon: PropTypes.bool,
}

export default NavigationBar
