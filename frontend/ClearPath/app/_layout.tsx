import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main Tab Navigation */}
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false, // Hide header for the tab layout
          }}
        />
        
        {/* Authentication Screens */}
        <Stack.Screen
          name="auth"
          options={{
            title: 'Authentication',
            headerShown: false, // Hide header for authentication stack
          }}
        />
        
        {/* Dashboard Screens */}
        <Stack.Screen
          name="dashboard"
          options={{
            title: 'Dashboard',
            headerShown: false, // Managed by the dashboard layout
          }}
        />
        
        {/* Error Screens */}
        <Stack.Screen
          name="errors"
          options={{
            title: 'Error Handling',
            headerShown: false, // Managed by the errors layout
          }}
        />

        {/* Help Screens */}
        <Stack.Screen
          name="help"
          options={{
            title: 'Help Center',
            headerShown: false, // Managed by the help layout
          }}
        />

        {/* Catch-All Route for 404 Pages */}
        <Stack.Screen
          name="+not-found"
          options={{
            title: 'Not Found',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
