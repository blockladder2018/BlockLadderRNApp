import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import LoginRedux from 'App/Redux/Login/LoginRedux';
import RootScreenNavigation from 'App/Containers/RootScreenNavigation';

class NewsScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
        <View>
          <Text>This is the Home Screen</Text>
        </View>
          <RootScreenNavigation />
      </View>
    );
  }
}

export default NewsScreen;
