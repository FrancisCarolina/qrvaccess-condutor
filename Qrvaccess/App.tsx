// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './src/pages/Login';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
