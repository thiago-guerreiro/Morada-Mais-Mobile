import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedImoveis from './FeedImoveis';
import CadastroImovel from './CadastroImovel';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

export default function Principal() {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#6615dd',
        }}
        >
        <Tab.Screen
            name="Feed"
            component={FeedImoveis}
            options={{
            tabBarLabel: 'Imóveis',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            }}
        />

        <Tab.Screen
            name="CadastroImovel"
            component={CadastroImovel}
            options={{
            tabBarLabel: 'Cadastrar Imóvel',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home-edit" color={color} size={size} />
            ),
            }}
        />

        <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
            ),
            }}
        />

        </Tab.Navigator>
    );
}
