import { connect } from 'react-redux'

import {
  sendMessage,
} from './SendMessageActions'

import SendMessageView from './SendMessageView'

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.sendMessage.message.image,
    category: state.sendMessage.message.category,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSendButtonPress: () => {
      dispatch(sendMessage())
    },
  }
}

const SendMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessageView)

export default SendMessage
