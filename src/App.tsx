import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigator from './navigation/rootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
