import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren, useEffect, useMemo } from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useDrawerStatus } from '@react-navigation/drawer';

interface Props {
  headerShown?: boolean;
  title?: string;
}
const ScreenLayout: React.FC<PropsWithChildren<Props>> = ({ title, headerShown = true, children }) => {
  const animatedValue = useSharedValue(0);
  const status = useDrawerStatus();

  useEffect(() => {
    if (status === 'open') {
      animatedValue.value = withTiming(1);
    } else {
      animatedValue.value = withTiming(0);
    }
  }, [animatedValue, status]);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animatedValue.value, [0, 1], [1, 0.7], { extrapolateRight: Extrapolation.CLAMP });
    const rotate = interpolate(animatedValue.value, [0, 1], [0, -10], { extrapolateRight: Extrapolation.CLAMP });
    const borderRadius = interpolate(animatedValue.value, [0, 1], [0, 30], { extrapolateRight: Extrapolation.CLAMP });

    return {
      borderRadius: borderRadius,
      transform: [
        { scale },
        {
          rotateZ: `${rotate}deg`,
        },
      ],
    };
  });

  const header = useMemo(() => {
    if (!headerShown) {
      return null;
    }
    return (
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
    );
  }, [headerShown, title]);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <SafeAreaView>{header}</SafeAreaView>
      {children}
    </Animated.View>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
