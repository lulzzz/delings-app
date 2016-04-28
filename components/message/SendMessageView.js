import React, {
  Component,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native'

import Toolbar from '../navigation/Toolbar'
import FloatingActionButton from '../button/FloatingActionButton'
import FBMessenger from '../facebook/FBMessenger'
import cssVar from '../../cssVar'

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
        <Toolbar title='Send melding' navIcon={true}/>
        <Image source={this.props.image} style={{width: width, height: width}}/>
        <View style={styles.caption}>
          <Text style={styles.title}>
            Trenger du noe til hus og hage?
          </Text>
          <Text style={styles.description}>
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
    backgroundColor: cssVar('windowBackground'),
  },
  caption: {
  },
  title: {
    textAlign: 'center',
    color: cssVar('textColorPrimary'),
    ...cssVar('fontTitle'),
  },
  description: {
    textAlign: 'center',
    color: cssVar('textColorPrimary'),
    ...cssVar('fontBody1'),
  },
  sendButtonContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
})

export default SendMessageView
