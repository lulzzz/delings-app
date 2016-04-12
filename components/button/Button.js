import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native'

const Button = ({ text, handleButtonPress }) => (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Image style={styles.buttonIcon}
        source={require('../login/img/fb-logo-white.png')}/>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#4267B2',
    borderRadius: 2,
  },
  activeButton: {
    backgroundColor: 'transparent',
    borderColor: 'rgb(235,52,83)',
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonIcon: {
    margin: 5,
  },
  buttonText: {
    marginVertical: 5,
    marginLeft: 5,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
})

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleButtonPress: PropTypes.func.isRequired,
}

export default Button
