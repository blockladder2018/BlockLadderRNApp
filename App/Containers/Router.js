import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import NewsScreen from './NewsScreen';
import ConnectScreen from './ConnectScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene
          key="connect"
          component={ConnectScreen}
          title="Connect"
          initial
        />

        <Scene
          key="login"
          component={LoginScreen}
          title="Login"
        />

        <Scene
          key="register"
          component={RegisterScreen}
          title="Register"
        />

        <Scene
          key="news"
          component={NewsScreen}
          title="News"
          rightTitle="Log out"
          onRight={() => console.log('Log out pressed')}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
