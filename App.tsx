import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CAlertProvider from '@/components/common/CAlert';
import {Provider} from 'react-redux';
import store from '@/stores/store.ts';
import useAppConfiguration from '@/hooks/useAppConfiguration.ts';

const App = () => {
  useAppConfiguration();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
          <CAlertProvider />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
