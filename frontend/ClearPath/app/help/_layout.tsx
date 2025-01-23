import { Stack } from 'expo-router';

export default function HelpLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Enables a header for the help screens
        animation: 'slide_from_right', // Smooth slide-in animation from the right
      }}
    >
      <Stack.Screen
        name="help"
        options={{
          title: 'Help Center', // Title displayed in the header for the Help screen
        }}
      />
    </Stack>
  );
}
