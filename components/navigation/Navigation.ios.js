import React, {
  Component,
  PropTypes,
  StyleSheet,
  NavigatorIOS,
} from 'react-native'

import routes from '../../routes'
import cssVar from '../../cssVar'

const Navigation = props => (
  <NavigatorIOS style={styles.container}
      barTintColor={cssVar('colorPrimary')}
      tintColor='white'
      titleTextColor='white'
      shadowHidden={false}
      itemWrapperStyle={styles.itemWrapper}
      initialRoute={routes.Login}
      ref={props.setNavigator}
    />
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: cssVar('windowBackground')
  },
})

Navigation.propTypes = {
  setNavigator: PropTypes.func.isRequired,
}

export default Navigation
