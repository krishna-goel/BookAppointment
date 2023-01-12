import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {KeyUtility} from 'constent/KeyUtility';
import Login from 'common/Login';
import Getotp from 'common/Getotp';
import {screenOption} from './screenOption';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={KeyUtility.LOGIN}
        screenOptions={screenOption}>
        <Stack.Screen name={KeyUtility.LOGIN} component={Login} />
        <Stack.Screen name={KeyUtility.GETOTP} component={Getotp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
