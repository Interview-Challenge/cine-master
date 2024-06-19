import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CAlertProvider from '@/components/common/CAlert';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
        <CAlertProvider />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
