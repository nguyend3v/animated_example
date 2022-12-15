import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import { ScreensName } from './types';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import User from '../screens/User';
import DrawerContent from '../components/DrawerContent';
import DrawerToggleButton from '../components/DrawerContent/DrawerToggleButton';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName={ScreensName.Home}
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          drawerType: 'slide',
          drawerStyle: styles.content,
          sceneContainerStyle: styles.transparentBg,
        }}
        drawerContent={(props: DrawerContentComponentProps) => {
          return <DrawerContent {...props} />;
        }}
        useLegacyImplementation={true}>
        <Drawer.Screen name={ScreensName.Home} component={Home} />
        <Drawer.Screen name={ScreensName.Settings} component={Settings} />
        <Drawer.Screen name={ScreensName.User} component={User} />
      </Drawer.Navigator>
      <View style={styles.toggle}>
        <DrawerToggleButton />
      </View>
    </View>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  content: {
    flex: 1,
    width: '50%',
    backgroundColor: 'transparent',
  },
  toggle: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 40,
    right: 20,
    // backgroundColor: 'red',
    borderRadius: 20,
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
});
