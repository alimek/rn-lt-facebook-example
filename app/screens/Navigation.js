import React from 'react';
import ReactNative from 'react-native';

import FeedsPage from './FeedsPage';

const {
  Text,
  TouchableHighlight,
  Navigator,
  StyleSheet,
} = ReactNative;

const renderScene = (route, navigator) => {
  let RouteComponent = route.component;
  return <RouteComponent navigator={navigator} {...route.passProps} />
};

const configureScene = (route, routeStack) => Navigator.SceneConfigs.PushFromRight;

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>)
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
        onPress={ () => route.onPress() }>
        <Text style={ styles.rightNavButtonText }>
          { route.rightText || 'Right Button' }
        </Text>
      </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>{route.title}</Text>
  }
};

const Navigation = () => (
  <Navigator
    configureScene={configureScene}
    style={{ flex:1 }}
    initialRoute={{ component: FeedsPage, title: "Your feeds wall" }}
    renderScene={renderScene}
    sceneStyle={{
      marginTop: 64,
      flex: 1,
      backgroundColor: '#dfdfdf',
    }}
    navigationBar={
      <Navigator.NavigationBar
        style={styles.nav}
        routeMapper={NavigationBarRouteMapper}
      />
    }
  />
);

export default Navigation;

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#3b5998',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginTop: 15,
    fontSize: 15,
  },
  leftNavButtonText: {
    color: 'white',
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  }
});