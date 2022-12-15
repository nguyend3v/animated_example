import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const User = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text>User</Text>
      </View>
    </ScreenLayout>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
