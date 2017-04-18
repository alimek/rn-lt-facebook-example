import React from 'react';
import ReactNative from 'react-native';

import NewPostForm from '../containers/NewPostForm';
import Post from '../containers/Post';

import firebase from '../firebase';

const {
  FlatList,
} = ReactNative;

class FeedsPage extends React.Component {
  state = {
    posts: []
  };

  componentWillMount() {
    firebase
      .database()
      .ref('posts')
      .orderByChild('date')
      .on('value', (posts) => this.setState({ posts: posts.val() }));
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={NewPostForm}
        data={this.state.posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    );
  }
}

export default FeedsPage;