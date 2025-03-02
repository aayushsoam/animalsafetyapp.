import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import InjuryAnalysisScreen from "./screens/InjuryAnalysisScreen";
import VetLocatorScreen from "./screens/VetLocatorScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#3a86ff',
        tabBarInactiveTintColor: '#6c757d',
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'InjuryAnalysisTab') {
            iconName = focused ? 'medkit' : 'medkit-outline';
          } else if (route.name === 'VetLocatorTab') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{ tabBarLabel: 'Home' }} 
      />
      <Tab.Screen 
        name="InjuryAnalysisTab" 
        component={InjuryAnalysisScreen}
        options={{ tabBarLabel: 'Analysis' }}
      />
      <Tab.Screen 
        name="VetLocatorTab" 
        component={VetLocatorScreen}
        options={{ tabBarLabel: 'Find Vets' }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={HomeScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="InjuryAnalysis" component={InjuryAnalysisScreen} />
      <Stack.Screen name="VetLocator" component={VetLocatorScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
