import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';
import Termos from './screens/Termos';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Principal" component={Principal} options={{headerShown:false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
      <Stack.Screen name="Termos" component={Termos} 
        options={{
          title: 'Voltar',
          headerStyle: {
            backgroundColor: '#6615dd',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={specificStyle.safe}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const specificStyle = StyleSheet.create({
  safe: {
    flex: 1,
  },
})