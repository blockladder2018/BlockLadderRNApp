import React, { Component } from 'react';
import { View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import NavigationRedux from 'App/Redux/Navigation/NavigationRedux';

class RootScreenNavigation extends Component {
  tabs = [
    {
      key: 'connect',
      icon: 'wifi',
      label: 'Connect',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'news',
      icon: 'newspaper-o',
      label: 'News',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'account',
      icon: 'user',
      label: 'Account',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ];

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="black" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      labelStyle={{ color: '#000000' }}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    return (
      <View style={{ position: 'absolute', bottom: 10 }}>
        <BottomNavigation
          onTabPress={newTab => this.props.setActiveTab(newTab.key)}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
};

const mapStateToProps = ({ navigation }) => {
  return {
    activeTab: navigation.activeTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTab: (activeTabKey) => {
      dispatch(NavigationRedux.setActiveTab(activeTabKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootScreenNavigation);
