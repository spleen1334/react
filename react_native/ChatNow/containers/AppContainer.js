import { connect } from 'react-redux';

import { rehydrateNameAndAccountNum } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => (
  {
    name: state.name,
    accountNumber: state.accountNumber
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onRehydrateNameAndAccountNum: (name, accountNumber) => {
      dispatch(rehydrateNameAndAccountNum(name, accountNumber));
    }
  }
);

// Wrapper for component for usage of redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
