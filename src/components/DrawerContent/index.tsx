import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, useDrawerStatus } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useHandleDrawer } from '../../store/drawer';
import DrawerItem from './DrawerItem';
import VectorIcon from '../VectorIcon';

const headerHeight = 107;

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const { openDrawer, closeDrawer } = useHandleDrawer();

  const status = useDrawerStatus();
  useEffect(() => {
    if (status === 'open') {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [closeDrawer, openDrawer, status]);

  const { top } = useSafeAreaInsets();

  const headerStyle = useMemo(() => {
    const height = Math.max(headerHeight, top + 80);
    return [styles.header, { height: height, paddingTop: top }];
  }, [top]);

  const content = useMemo(() => {
    const { routes, index } = props.state;
    return routes.map((route, i) => {
      const onPress = () => props.navigation.navigate(route.name);
      return <DrawerItem label={route.name} onPress={onPress} forcused={index === i} key={route.key} />;
    });
  }, [props.navigation, props.state]);

  return (
    <View style={styles.container}>
      <View style={headerStyle}>
        <View style={styles.user}>
          <VectorIcon.FontAwesome name={'user-secret'} size={30} />
        </View>
        <Text style={styles.headerText}>I'm Batman</Text>
      </View>
      <DrawerContentScrollView {...props}>{content}</DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    height: 107,
    backgroundColor: 'white',
    borderBottomRightRadius: 107 / 2,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  user: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F1F3F6',
  },
  headerText: {
    color: '#1B1D28',
    marginLeft: 10,
  },
});
