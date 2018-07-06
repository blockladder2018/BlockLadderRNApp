import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import RootScreenNavigation from 'App/Containers/RootScreenNavigation';
import { ButtonEnableDisable, PickerWithLabel, Spinner } from 'App/Components';
import VpnRedux from 'App/Redux/Vpn/VpnRedux';

class ConnectScreen extends Component {

  componentWillMount() {
    this.props.fetchProxys().then(() => {
      console.log('fetch proxys');
    }).catch(() => {
      console.log('error');
    });
  }

  render() {
    if (!this.props.proxys) {
      return <Spinner />;
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <PickerWithLabel
          label={'Proxy Server'}
          selectedValue={this.props.selectedProxy}
          onValueChange={(itemValue, itemIndex) => this.props.selectProxy(itemValue)}
          data={this.props.proxys}
          enablePicker={true}
        />
        <RootScreenNavigation />
      </View>
    );
  }
}

const mapStateToProps = ({ vpn }) => {
  return {
    proxys: vpn.proxys,
    selectedProxy: vpn.selectedProxy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProxys: () => {
      return dispatch(VpnRedux.fetchProxys());
    },
    selectProxy: (selectedProxy) => {
      dispatch(VpnRedux.selectProxy(selectedProxy));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectScreen);
