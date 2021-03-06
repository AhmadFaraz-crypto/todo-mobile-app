import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';

import AuthStackScreen from './AuthScreens';
import MainStackScreen from './MainScreens';

const authStack = createStackNavigator();
const mainStack = createStackNavigator();

const RootNavigationStack = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      {false ? (
        <mainStack.Navigator screenOptions={{headerShown: false}}>
          <mainStack.Screen name="AuthHome" component={MainStackScreen} />
        </mainStack.Navigator>
      ) : (
        <authStack.Navigator screenOptions={{headerShown: false}}>
          <authStack.Screen name="AuthStack" component={AuthStackScreen} />
        </authStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigationStack;
