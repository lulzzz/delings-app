import React from 'react'
import {
  AppRegistry,
} from 'react-native'

import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import App from './components/App'

const store = configureStore()

// init navigator
// init isFirstTimeUse
// init isLoggedIn?

const Delings = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('Delings', () => Delings)
