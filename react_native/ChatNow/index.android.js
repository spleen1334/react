import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import chatNowReducers from './reducers';
import thunk from 'redux-thunk';

import AppContainer from './containers/AppContainer';


let store = createStore(chatNowReducers, applyMiddleware(thunk));

export default class ChatNow extends Component {
  render() {
    console.log('Redux state: ', store.getState());

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ChatNow', () => ChatNow);
