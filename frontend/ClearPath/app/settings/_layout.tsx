import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Shows a header for the errors screens
        animation: 'fade', // Smooth fade animation for transitions
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings', // Title displayed in the header for the Errors screen
        }}
      />
    </Stack>
  );
}
