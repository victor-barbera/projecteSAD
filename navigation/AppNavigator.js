import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';

// * Home screen views.
import Home from '../screens/Home';

// * User screen views.
import User from '../screens/User';

// * Sync modal views.
import Sync from '../screens/Sync';
import SyncButton from '../components/SyncButton';

// * Auth views
// import LoadingScreen from '../screens/LoadingScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: Colors.accentColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// * Stack Navigators.
const HomeScreenNavigator = createStackNavigator(
  {
    Home: Home,
  },
  {defaultNavigationOptions: defaultStackNavOptions}
);

const UserScreenNavigator = createStackNavigator(
  {
    User: User,
  },
  {defaultNavigationOptions: defaultStackNavOptions}
);

// * Bottom Navigator.
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <AntDesign name="home" size={26} />;
        },
      },
    },
    Sync: {
      screen: Sync,
      navigationOptions: {
        tabBarButtonComponent: tabInfo => {
          return <SyncButton />;
        },
      }
    },
    User: {
      screen: UserScreenNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <AntDesign name="user" size={26} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      style: {
        backgroundColor: Colors.primaryColor,
      },
    },
  }
);

const AuthNavigator = createSwitchNavigator({
  // Loading: LoadingScreen,
  SignUp: SignupScreen,
  SignIn: SigninScreen,
});

const GeneralNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  App: BottomNavigator,
});

export default createAppContainer(GeneralNavigator);
