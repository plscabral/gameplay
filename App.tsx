import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

LogBox.ignoreLogs(["You are not currently signed in to Expo on your development machine."]);

import { Background } from './src/components/Background'
import { Routes } from './src/routes';

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  )
}