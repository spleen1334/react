import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import StatusScreen from './StatusScreen';
import TabBarContainer from './TabBarContainer';

export default class MainContainer extends Component {

  _renderTab(selected, services) {
    const thisService = services.find((s => s.key === selected));
    return (
      <StatusScreen
        isUp={thisService.isUp}
        lastUpTime={thisService.lastUpTime}
      />
    );
  }

  render() {
    return (
      <LinearGradient colors{['#313d43', '#4a787a']} style={styles.container}>
          {this._renderTab(this.props.selectedService, this.props.services)}
          <TabBarContainer
            onTabChange={this.props.onServiceChange}
            selectedService{this.props.selectedService}
          />
      </LinearGradient>
    );
  }
}

MainContaer.propTypes = {
  selectedService: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  onServiceChange: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
