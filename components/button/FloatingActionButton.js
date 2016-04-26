import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native'

import cssVar from '../../cssVar'

const FloatingActionButton = props => {
  const { icon, color, disabled, mini, handleButtonPress } = props

  const backgroundColor = disabled
                            ? 'rgba(0,0,0,0.12)'
                            : color
                                ? color
                                : 'rgba(158,158,158,0.2)'

  const textColor = disabled
                      ? 'rgba(0,0,0,0.26)' //cssVar('textColorDisabled')
                      : color
                          ? '#FFF'
                          : cssVar('textColorPrimary')

  return (
    <TouchableOpacity onPress={handleButtonPress}
      style={styles.touchableTarget}>
      <View style={[
          styles.button,
          mini && styles.miniButton,
          {backgroundColor},
        ]}>
        <Image style={styles.icon} source={icon}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableTarget: {
    padding: 8,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 2,
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
})

FloatingActionButton.propTypes = {
  icon: PropTypes.number.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  mini: PropTypes.bool,
  handleButtonPress: PropTypes.func.isRequired,
}

export default FloatingActionButton
