import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import RootContainer from 'App/Containers/RootContainer';

class App extends React.Component {
  render() {
    return (
      <RootContainer />
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;
