import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image,
  LayoutAnimation,
  UIManager
} from 'react-native';

import Quote from '../components/Quote';
import NextQuoteButton from '../components/NextQuoteButton';

const bgImage = require('../../assets/bg.png');

// Android fix
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

// Animation
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  }
}

export default class QuoteScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }

  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote
            key={this.props.qId}
            quoteText={this.props.text}
            quoteSource={this.props.source} />
          <NextQuoteButton onPress={this.props.onNextQuotePress}/>
        </View>
      </Image>
    );
  }
}

QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  qId: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    height: undefined,
    width: undefined,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
});
