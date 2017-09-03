/**
 * Index - this is where everything
 *  starts - but offloads to app.js
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Router, Tabs, Drawer, Scene, Stack, Lightbox } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from './constants/';
import Launch from './scenes/Launch';
import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import DrawerMenu from './scenes/DrawerMenu';
import userStore from './stores/userStore';
import ListingView from './scenes/ListingView';
import RecipeView from './scenes/RecipeView';
import UpdateProfile from './scenes/UpdateProfile';
import PasswordReset from './scenes/ResetPassword';
import { TabIcon } from '@ui/';
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from './scenes/StyleGuideView';
import Icon from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react/native';

const drawerIcon = () => <Icon name={userStore.uid ? 'ios-contact' : 'ios-contact-outline'} size={30} color={'#FFF'} />;
export default () => (
  <Router wrapBy={observer}>
    <Lightbox>
      <Stack {...AppConfig.navbarProps} headerMode="screen">
        <Scene component={Launch} on={userStore.load} success="doCheck" failure="loginForm" />
        <Scene key="login" component={Login} type="reset" title="Login"
               onLogin="doAuth"
               onSignUp="signUp"
               onForgotPassword="passwordReset"/>
        <Scene key="signUp" component={SignUp} title="Sign Up" />
        <Scene key="passwordReset" component={PasswordReset} title="Password Reset" />
        <Drawer key="app" contentComponent={DrawerMenu} hideNavBar type="reset" drawerIcon={drawerIcon}>
          <Tabs hideNavBar>
            <Stack title="Recipes" icon={TabIcon('search')} headerMode="float">
              <Scene component={ListingView} />
              <Scene key="recipeView" component={RecipeView} back />
            </Stack>
            <Scene title="Coming Soon" component={Placeholder} icon={TabIcon('timeline')} />
            <Scene title="Example Error" component={Error} icon={TabIcon('error')} />
            <Scene title="Style Guide" component={StyleGuide} icon={TabIcon('speaker-notes')} />
          </Tabs>
        </Drawer>
        <Scene key="updateProfile" title="Update Profile" back component={UpdateProfile} />
      </Stack>
      <Scene key="doCheck" on={userStore.hasCredentials} success="doAuth" failure="login" />
      <Scene key="doAuth" on={userStore.login} success="app" failure="login" />
      <Scene key="doSignUp" on={userStore.signUp} success="app" failure="signUp" />
      <Scene key="logout" on={userStore.logout} success="login" />
    </Lightbox>
  </Router>
);
