import { StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useMemo } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import { UnstyledButton } from '../Button';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useHandleDrawer } from '../../store/drawer';

const DrawerToggleButton = () => {
  const navigation = useNavigation();

  const { open, toggleDrawer } = useHandleDrawer();

  const animatedValue = useSharedValue(0);

  useEffect(() => {
    if (open) {
      animatedValue.value = withSpring(1);
    } else {
      animatedValue.value = withSpring(0);
    }
  }, [animatedValue, open]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animatedValue.value, [0, 1], [1, 0], { extrapolateRight: Extrapolation.CLAMP });
    return {
      transform: [{ scale }],
    };
  });

  const closeAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animatedValue.value, [1, 0], [1, 0], { extrapolateRight: Extrapolation.CLAMP });
    return {
      transform: [{ scale }],
    };
  });

  const toggle = useCallback(() => {
    toggleDrawer();
    navigation.dispatch(DrawerActions.toggleDrawer());
  }, [navigation, toggleDrawer]);

  const icon = useMemo(() => {
    if (open) {
      return (
        <Animated.View style={closeAnimatedStyle}>
          <Icon name={'close'} size={20} />
        </Animated.View>
      );
    } else {
      return (
        <Animated.View style={animatedStyle}>
          <Icon name={'menufold'} size={20} />
        </Animated.View>
      );
    }
  }, [animatedStyle, closeAnimatedStyle, open]);

  return (
    <UnstyledButton onPress={toggle} style={styles.btn}>
      {icon}
    </UnstyledButton>
  );
};

export default DrawerToggleButton;

const styles = StyleSheet.create({
  btn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
