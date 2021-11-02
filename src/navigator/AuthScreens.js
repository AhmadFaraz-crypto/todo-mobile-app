import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {Login, Task, NewTask, Location} from 'src/screens';

const authStack = createStackNavigator();

const AuthStackScreen = () => (
  <authStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Login">
    <authStack.Screen name="Login" component={Login} />
    <authStack.Screen name="Task" component={Task} />
    <authStack.Screen name="NewTask" component={NewTask} />
    <authStack.Screen name="Location" component={Location} />
  </authStack.Navigator>
);

export default AuthStackScreen;
