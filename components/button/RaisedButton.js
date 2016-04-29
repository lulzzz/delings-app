import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native'

import cssVar from '../../cssVar'

const RaisedButton = props => {
  const { icon, color, disabled, handleButtonPress } = props

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
    borderRadius: 2,
    elevation: 2,
    paddingHorizontal: 16,
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
    fontWeight: '500',
  }
})

RaisedButton.propTypes = {
  icon: PropTypes.number,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  handleButtonPress: PropTypes.func.isRequired,
}

export default RaisedButton
