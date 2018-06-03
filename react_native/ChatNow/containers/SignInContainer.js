import { connect } from 'react-redux';

import { updateName, updateAccountNumber } from '../actions';
import SignInScreen from '../components/SignInScreen';

const mapStateToProps = (state, props) => (
  {
    name: state.name,
    accountNumber: state.accountNumber,
    navHandler: props.navHandler
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onNameUpdate: (value) => {
      dispatch(updateName(value));
    },
    onAccountNumberUpdate: (value) => {
      dispatch(updateAccountNumber(value));
    }
  }
);

// Wrapper for component for usage of redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
