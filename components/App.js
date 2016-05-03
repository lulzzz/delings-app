import React, {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import { connect } from 'react-redux'

import Navigation from './navigation/Navigation'

const App = () => (
  <View style={styles.container}>
    <StatusBar
        backgroundColor='black'
        barStyle='light-content'/>
    <Navigation />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect()(App)
