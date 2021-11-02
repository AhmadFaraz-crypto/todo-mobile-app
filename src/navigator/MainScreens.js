import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens';

// screens

const Stack = createStackNavigator();

const MainStackScreen = () => {
    return (
        <Stack.Navigator headerMode='none' initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default MainStackScreen;
