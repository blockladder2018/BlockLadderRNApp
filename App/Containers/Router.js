import React from 'react';
import { Stack, Scene, Router, Actions } from 'react-native-router-flux';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Stack key="root">
        <Scene
          key="login"
          component={LoginScreen}
          title="Login"
          initial
        />

        <Scene
          key="register"
          component={RegisterScreen}
          title="Register"
        />

        <Scene
          key="home"
          component={HomeScreen}
          title="Home"
          rightTitle="Log out"
          onRight={() => console.log('Log out pressed')}
        />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
