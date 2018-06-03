import { connect } from 'react-redux';

import { updateComposeMessage } from '../actions';
import ChatScreen from '../components/ChatScreen';

const mapStateToProps = (state) => (
  {
    composingMessage: state.composingMessage,
    messages: state.messages
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onComposeMessageUpdate: (value) => {
      dispatch(updateComposeMessage(value));
    },
    onSendMessage: () => {
      dispatch(sendMessage(new Date()));
    },
    onReceivedMessage: (message) => {
      dispatch(receivedMessage(message));
    }
  }
);

// Wrapper for component for usage of redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);
