import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import FBMessenger from '../facebook/FBMessenger'

class SendMessageView extends Component {
  render() {

    FBMessenger.shareToMessenger(
        'android.resource://no.delings.app/res/drawable/baking_cooking.jpg',
        FBMessenger.IMAGE_JPEG,
        '{ "image" : "space cat" }',
    )

    return (
      <View>
        <Text>{this.props.image}</Text>
      </View>
    )
  }
}

export default SendMessageView
