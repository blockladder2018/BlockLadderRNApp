import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { ButtonDark, ButtonEnableDisable, Input } from 'App/Components';
import LoginRedux from 'App/Redux/Login/LoginRedux';

class RegisterScreen extends Component {

  render() {
    const {
      country,
      mobile,
      password,
      invitationCode,
      verificationCode,
    } = this.props;

    return (
      <View style={{ alignItems: 'center' }}>
        <Input
          label='Country'
          value={country}
          onChangeText={(text) => {
            this.props.setCountry(text);
          }}
          onSubmitEditing={() => console.log('submitted')}
        />

        <Input
          label='Mobile Number'
          value={mobile}
          onChangeText={(text) => {
            this.props.setMobile(text);
          }}
          onSubmitEditing={() => console.log('submitted')}
        />

        <Input
          label='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            this.props.setPassword(text);
          }}
          onSubmitEditing={() => console.log('submitted')}
        />

        <ButtonEnableDisable
          disabled={_.isEmpty(country) || _.isEmpty(mobile) || _.isEmpty(password)}
          title='Finish'
          onPress={() => {
            console.log('Register, country: ' + country + ' mobile: ' + mobile + '; password: ' + password);
            Actions.pop();
          }}
        />

        <ButtonDark
          title='Cancel'
          onPress={() => {
            console.log('Cancel button pressed');
            Actions.pop();
          }}
        />

      </View>
    );
  }
}

const mapStateToProps = ({ login }) => {
  return {
    country: login.country,
    mobile: login.mobile,
    password: login.password,
    invitationCode: login.invitationCode,
    verificationCode: login.verificationCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCountry: (text) => {
      dispatch(LoginRedux.setCountry(text));
    },
    setMobile: (text) => {
      dispatch(LoginRedux.setMobile(text));
    },
    setPassword: (text) => {
      dispatch(LoginRedux.setPassword(text));
    },
    setInvitationCode: (text) => {
      dispatch(LoginRedux.setInvitationCode(text));
    },
    setVerificationCode: (text) => {
      dispatch(LoginRedux.setVerificationCode(text));
    },

    register: () => {
      return dispatch(LoginRedux.register());
    },
    sentSmsVerification: () => {
      return dispatch(LoginRedux.sentSmsVerification());
    },
    confirmSms: () => {
      return dispatch(LoginRedux.confirmSms());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
