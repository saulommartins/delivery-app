import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import MainTabScreen from './MainTabScrren';

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  // <AuthStach.Navigator>
  //   <AuthStach.Screen name="Dashboard" component={Dashboard} />
  // </AuthStach.Navigator>

  <Drawer.Navigator drawerContent={(props: any) => <DrawerContent {...props} />}>
    <Drawer.Screen name="HomeDrawner" component={MainTabScreen} />
    {/*
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} /> */}
  </Drawer.Navigator>
);

export default AppRoutes;
