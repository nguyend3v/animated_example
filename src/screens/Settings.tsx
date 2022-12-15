import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenLayout from '../components/ScreenLayout';

const Settings = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    </ScreenLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
