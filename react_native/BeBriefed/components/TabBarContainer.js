import React, { PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

import Tabs from 'react-native-tabs';
import TabBarItem from './TabBarItem';

// onSelect handler is passed with component that is tapped (TabBarItem)
// from there you can extract its props (name, labe, icon)
const TabBarContainer = (props) => (
    <Tabs
      style={styles.tabContainer}
      selected={props.selectedService}
      onSelect={comp => {
        props.onTabChange(comp.props.name);
      }}
    >
    <TabBarItem name="web" label="Web Server" icon="server" />
    <TabBarItem name="db" label="DB Server" icon="database" />
    <TabBarItem name="mail" label="Mail Server" icon="envelope-0" />
  </Tabs>
);

TabBarContainer.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  selectedService: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96
  }
});

export default TabBarContainer;
