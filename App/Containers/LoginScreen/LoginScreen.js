import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { ButtonLight } from 'App/Components';
import LoginRedux from 'App/Redux/Login/LoginRedux';

class LoginScreen extends Component {

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Text>Block Ladder</Text>

        <ButtonLight
          title="Get Proxys Info"
          onPress={() => this.props.getProxys()}
        />

        <Text>{this.props.ip}</Text>
        <Text>{this.props.port}</Text>
        <Text>{this.props.encryption}</Text>

      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    id: login.id,
    ip: login.ip,
    port: login.port,
    password: login.password,
    encryption: login.encryption,
    status: login.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProxys: () => {
      return dispatch(LoginRedux.getProxys());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
