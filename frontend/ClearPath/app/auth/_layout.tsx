import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Shows a header for authentication screens
        animation: 'fade', // Adds a smooth fade animation
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Login', // Title for the Login screen
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: 'Register', // Title for the Register screen
        }}
      />
    </Stack>
  );
}
