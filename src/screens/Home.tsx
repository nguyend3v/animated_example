import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenLayout from '../components/ScreenLayout';

const Home = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </ScreenLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
