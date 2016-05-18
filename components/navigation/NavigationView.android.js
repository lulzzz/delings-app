import React, {
  Component,
  PropTypes,
  StyleSheet,
  Navigator,
  BackAndroid,
} from 'react-native'

import * as navigation from './NavigationActions'
import routes from '../../routes'
import cssVar from '../../cssVar'

class NavigationView extends Component {

  constructor(props) {
    super(props)
    BackAndroid.addEventListener('hardwareBackPress',
        props.handleHardwareBackPress)
  }

  renderScene(route, navigator) {
    return <route.component route={route} navigator={navigator} {...route.passProps} />
  }

  configureScene(route, routeStack) {
    switch (route.component) {
      case routes.Gallery.component:
        return Navigator.SceneConfigs.FadeAndroid
      default:
        return Navigator.SceneConfigs.FloatFromRight
    }
  }

  render() {
    return (
      <Navigator
          initialRoute={routes.Login}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
          sceneStyle={styles.scene}
          ref={this.props.setNavigator}
        />
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: cssVar('windowBackground')
  },
})

NavigationView.propTypes = {
  setNavigator: PropTypes.func.isRequired,
  handleHardwareBackPress: PropTypes.func.isRequired,
}

export default NavigationView
