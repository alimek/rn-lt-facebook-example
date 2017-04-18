import React from 'react';
import PropTypes from 'prop-types';
import ReactNative from 'react-native';
import moment from 'moment';

import Avatar from './Avatar';
import Icon from './Icon';

const {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} = ReactNative;

const CardHeader = ({ avatarURL, author, date }) => (
  <TouchableOpacity
    activeOpacity={1}
    style={styles.container}
    onPress={() => {}}
  >
    <Avatar uri={avatarURL} circle />
    <View style={styles.content}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.time}>{moment(date).format('L')}</Text>
    </View>
    <TouchableOpacity onPress={() => {}}>
      <Icon name="angle-right" style={styles.navigateIcon} />
    </TouchableOpacity>
  </TouchableOpacity>
);

CardHeader.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: '#eaeaea',
  },
  author: {
    fontSize: 17,
  },
  time: {
    fontSize: 13,
    color: '#d4d4d4',
  },
  content: {
    flex: 1,
  },
  navigateIcon: {
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 10,
    color: '#d4d4d4',
  },
});
