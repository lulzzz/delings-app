import React, {
  Component,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import { connect } from 'react-redux'

import NavigationContainer from './navigation/NavigationContainer'

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='black'
            barStyle='light-content'/>
        <NavigationContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect()(App)
