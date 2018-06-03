import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabBarItem = (prop) => (
  <View style={styles.container}>
    <Icon name={props.icon} style={[styles.icon, props.selected && styles.selectedLabel]} />
    <Text style={[styles.label, props.selected && styles.selectedLabel]}>{props.label}</Text>
  </View>
);

TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selected: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#ffffff',
    paddingTop: 5
  },
  label: {
    color: '#ffffff',
    paddingTop: 5
  },
  selectedLabel: {
    color: '#cc976'
  }
});
