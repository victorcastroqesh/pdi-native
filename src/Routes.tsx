import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import GameScreen from './pages/GameScreen';
import ConfigScreen from './pages/ConfigScreen';
import {IGameScreenProps} from './pages/GameScreen/Gamescreen.structure';

const Stack = createNativeStackNavigator();
export interface INavigationParams<T> {
  route: {
    params: T;
  };
}
const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        initialParams={{playerX: '', playerO: ''} as IGameScreenProps}
      />
    </Stack.Navigator>
  );
};
export default Routes;
