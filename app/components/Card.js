import React from 'react';
import ReactNative from 'react-native';

const {
  View,
  StyleSheet,
} = ReactNative;

const Card = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 5,
  }
});
