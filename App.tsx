/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.app_name}>{Config.APP_NAME}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: Config.APP_BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  app_name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
