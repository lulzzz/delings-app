import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native'

import cssVar from '../../cssVar'

const FlatButton = props => {
  const { icon, color, disabled, handleButtonPress } = props

  const backgroundColor = 'transparent'

  const textColor = disabled
                      ? 'rgba(0,0,0,0.26)' //cssVar('textColorDisabled')
                      : color
                          ? color
                          : cssVar('textColorPrimary')

  const iconComponent = icon ? <Image style={styles.icon} source={icon}/> : null

  return (
    <TouchableOpacity onPress={handleButtonPress}
      style={styles.touchableTarget}>
      <View style={[
          styles.button,
          icon && styles.buttonIcon,
          {backgroundColor},
        ]}>
        {iconComponent}
        <Text style={[
            styles.text,
            {color: textColor},
          ]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableTarget: {
    padding: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 8,
  },
  buttonIcon: {
    paddingLeft: 0,
  },
  icon: {
    height: 24,
    width: 24,
    margin: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})

FlatButton.propTypes = {
  icon: PropTypes.number,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  handleButtonPress: PropTypes.func.isRequired,
}

export default FlatButton
