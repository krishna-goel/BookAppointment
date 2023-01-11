import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {KeyUtility} from 'constent/KeyUtility';
import Login from 'common/Login';
import Register from '../screen/Common/Register';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={KeyUtility.LOGIN}>
        <Stack.Screen name={KeyUtility.LOGIN} component={Login} />
        <Stack.Screen name={KeyUtility.REGISTER} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
