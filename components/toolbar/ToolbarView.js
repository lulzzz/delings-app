import React, {
  PropTypes,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native'

import cssVar from '../../cssVar'

const ToolbarView = props => {

  const navIcon = props.navIcon
                    ? require('./img/ic_arrow_back_white.png')
                    : require('./img/delings-icon.png')

  return (
    <ToolbarAndroid style={styles.toolbar}
        title={props.title}
        titleColor='white'
        navIcon={navIcon}
        onIconClicked={props.handleIconClicked}
        overflowIcon={require('./img/ic_more_vert_white.png')}
        onActionSelected={props.handleActionSelected}
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

ToolbarView.propTypes = {
  title: PropTypes.string,
  navIcon: PropTypes.bool,
  handleIconClicked: PropTypes.func.isRequired,
  handleActionSelected: PropTypes.func.isRequired,
}

export default ToolbarView
