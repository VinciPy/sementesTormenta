import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Preloader from './pages/preloader';
import Home from './pages/home';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

export default () => {
 
  const Stack = createStackNavigator();
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Preloader" component={Preloader}  />
        <Stack.Screen name="Home" component={Home}  />
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
  )
}

