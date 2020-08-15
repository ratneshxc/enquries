/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';
import Navigation from './Navigation';

const App = () => {
  const primaryTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1996FF',
      accent: '#1996FF',
    },
  };
  return (
    <Provider theme={primaryTheme}>
        <Navigation />
    </Provider>
  );
};

export default App;