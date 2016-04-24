import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native'

import FBMessenger from '../facebook/FBMessenger'

class SendMessageView extends Component {

  constructor(props) {
    super(props)
    this.sendMessage = this.sendMessage.bind(this)
  }

  sendMessage() {
    const resolveAssetSource = require('resolveAssetSource')
    const source = resolveAssetSource(this.props.image)

    // const AssetRegistry = require('AssetRegistry')
    // const asset = AssetRegistry.getAssetByID(this.props.image);
    // asset.type

    FBMessenger.shareToMessenger(
        'drawable/' + source.uri,
        FBMessenger.IMAGE_JPEG,
        '{ "image" : "space cat" }',
    )
  }

  render() {
    return (
      <View>
        <Image source={this.props.image} style={{width: 200, height: 200}}/>
        <Text onPress={this.sendMessage}>SEND MESSAGE</Text>
      </View>
    )
  }
}

export default SendMessageView
