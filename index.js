import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ marginTop: 50 }}>This is the React Native View</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('BlockLadderReactNative', () => App);
