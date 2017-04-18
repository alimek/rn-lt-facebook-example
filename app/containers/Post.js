import React from 'react';
import ReactNative from 'react-native';

import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import CardFooter from '../components/CardFooter';

const {
  StyleSheet,
} = ReactNative;

const Post = ({ post }) => (
  <Card style={styles.container}>
    <CardHeader
      avatarURL={post.author.avatar}
      author={post.author.name}
      date={post.date}
    />
    <CardContent text={post.message} />
    <CardFooter post={post} />
  </Card>
);

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
