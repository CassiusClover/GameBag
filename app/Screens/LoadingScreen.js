// LoadingScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GameBag</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // Choose your preferred background color
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#000',  // Adjust as per your branding
  },
});

export default LoadingScreen;
