import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import translate from '../resources/lang';
import colors from '../styles/colors';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Purchase from '../screens/Purchase';
import Profile from '../screens/Profile';
import ProfileEdit from '../screens/ProfileEdit';

import {useTheme} from 'react-native-paper';
import { View } from 'react-native-animatable';
import { color } from 'react-native-reanimated';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PurchaseStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.white}
    shifting={false}
    barStyle={{ backgroundColor: colors.primary }}
    >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: translate("home"),
        tabBarColor: colors.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarLabel: translate("search"),
        tabBarColor: colors.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Purchase"
      component={PurchaseStackScreen}
      options={{
        tabBarLabel: translate("purchase"),
        tabBarColor: colors.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-newspaper" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}      
      options={{
        tabBarLabel: translate("profile"),
        tabBarColor: colors.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;


const HomeStackScreen = ({navigation}: any) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: translate("home"),
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = ({navigation}: any) => (
  <SearchStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{
        title: translate("search"),
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SearchStack.Navigator>
);

const PurchaseStackScreen = ({navigation}: any) => (
  <PurchaseStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <PurchaseStack.Screen
      name="Purchase"
      component={Purchase}
      options={{
        title: translate("purchase"),
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PurchaseStack.Navigator>
);

const ProfileStackScreen = ({navigation}: any) => {
  return (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
        shadowColor: colors.secondary, // iOS
        elevation: 0, // Android
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    {/* screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}> */}
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: translate("profile"),
        headerLeft: () => (
          <View style={{marginLeft:10}}>
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor= {colors.primary}
              color={colors.white}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{marginRight:10}}>
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor= {colors.primary}
              color={colors.white}
              onPress={() => navigation.navigate('ProfileEdit')}
            />
          </View>
        ),
      }}
    />
    <ProfileStack.Screen 
      name="ProfileEdit"
      options={{
        title: 'Edit Profile'
      }}
      component={ProfileEdit}
    />
  </ProfileStack.Navigator>
)};
