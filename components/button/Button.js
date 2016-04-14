import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native'

const Button = props => {
  const { icon, color, raised, disabled, handleButtonPress } = props

  const buttonColor = color
                        ? raised
                            ? color
                            : 'transparent'
                        : 'rgba(158,158,158,0.2)'

  const textColor = color
                      ? raised
                          ? '#FFF'
                          : color
                      : '#000'

  return (
    <TouchableOpacity onPress={handleButtonPress}
      style={styles.touchableTarget}>
      <View style={[
          styles.button,
          {backgroundColor: buttonColor},
          raised && styles.buttonRaised,
          icon && styles.buttonIcon,
        ]}>
        <Image style={styles.icon} source={icon}/>
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
  buttonRaised: {
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
    fontWeight: 'bold',
    color: '#FFF',
  }
})

Button.propTypes = {
  icon: PropTypes.number,
  color: PropTypes.string,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  handleButtonPress: PropTypes.func.isRequired,
}

export default Button
