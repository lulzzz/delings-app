import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  ToolbarAndroid,
} from 'react-native'

import routes from './routes'

const DelingsApp = () => (
  <Navigator style={styles.container}
      initialRoute={routes.initialRoute}
      renderScene={routes.renderScene}
    />
)

const styles = StyleSheet.create({
  container: {
  },
})

AppRegistry.registerComponent('DelingsApp', () => DelingsApp)
