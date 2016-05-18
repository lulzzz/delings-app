import React, {
  PropTypes,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
} from 'react-native'

import Toolbar from '../toolbar/Toolbar'
import FloatingActionButton from '../button/FloatingActionButton'
import cssVar from '../../cssVar'

const SendMessageView = props => {
  const { height, width } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <Toolbar title={props.route.title} navIcon={true}/>
      <Image source={props.image} style={{width: width, height: width}}/>
      <View style={styles.caption}>
        <Text style={styles.title}>
          Trenger du noe til {props.category}?
        </Text>
        <Text style={styles.description}>
          Send bildet med en hyggelig melding, og få hjelp av noen du kjenner.
        </Text>
      </View>
      <View style={styles.sendButtonContainer}>
        <FloatingActionButton handleButtonPress={props.handleSendButtonPress}
            color='#0084ff'
            icon={require('./img/messenger_bubble_large_white.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  caption: {
  },
  title: {
    ...cssVar('fontTitle'),
    textAlign: 'center',
  },
  description: {
    ...cssVar('fontBody1'),
    textAlign: 'center',
  },
  sendButtonContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
})

SendMessageView.propTypes = {
  image: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  handleSendButtonPress: PropTypes.func.isRequired,
}

export default SendMessageView
