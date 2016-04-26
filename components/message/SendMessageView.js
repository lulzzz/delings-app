import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native'

import NavigationBar from '../navigation/NavigationBar'
import FloatingActionButton from '../button/FloatingActionButton'
import FBMessenger from '../facebook/FBMessenger'

class SendMessageView extends Component {

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
    const { height, width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <NavigationBar title='Send melding' navIcon={true}/>
        <Image source={this.props.image} style={{width: width, height: width}}/>
        <View style={styles.caption}>
          <Text style={styles.heading}>
            Trenger du noe til hus og hage?
          </Text>
          <Text style={styles.subheading}>
            Send bildet med en hyggelig melding, og få hjelp av noen du kjenner.
          </Text>
        </View>
        <View style={styles.sendButtonContainer}>
          <FloatingActionButton handleButtonPress={this.sendMessage.bind(this)}
              color='#0084ff'
              icon={require('./img/messenger_bubble_large_white.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  caption: {
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 14,
    textAlign: 'center',
  },
  sendButtonContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
})

export default SendMessageView
