import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routes from './src/Routes';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
