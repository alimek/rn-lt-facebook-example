import { View, Text, StyleSheet } from 'react-native';

const ViewExample = () => (
  <View style={styles.yourComponent}>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Header
      </Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.contentText}>
        YourContent
      </Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Your footer
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  yourComponent: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    background: 'red',
  },
  headerText: {
    fontSize: 18,
  },
  content: {
    flex: 1,
    background: 'blue',
  },
  contentText: {
    fontSize: 14,
  },
  footer: {
    background: 'grey',
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center',
  }
});