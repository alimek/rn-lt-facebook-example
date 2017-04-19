import React from 'react';
import ReactNative from 'react-native';

import Card from './Card';
import PlaceholderLine from './PlaceholderLine';

const {
  View,
  StyleSheet,
} = ReactNative;

const CardPlaceholder = () => (
  <Card style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <PlaceholderLine
        height={40}
        width={40}
      />
      <View style={{ marginLeft: 10, marginTop: 5, }}>
        <PlaceholderLine
          height={5}
          percentWidth={0.4}
          margin
        />
        <PlaceholderLine
          height={5}
          percentWidth={0.6}
          margin
        />
      </View>
    </View>
    <View style={{ marginVertical: 10 }}>
      <PlaceholderLine
        height={5}
        percentWidth={0.3}
        margin
      />
      <PlaceholderLine
        height={5}
        percentWidth={0.5}
        margin
      />
      <PlaceholderLine
        height={5}
        percentWidth={0.8}
        margin
      />
      <PlaceholderLine
        height={5}
        percentWidth={0.6}
      />
    </View>
  </Card>
);

export default CardPlaceholder;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
});