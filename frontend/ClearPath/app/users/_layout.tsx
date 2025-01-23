import { Stack } from 'expo-router';

export default function UsersLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Enable headers for user-related screens
        animation: 'slide_from_right', // Smooth transition animation
      }}
    >
      {/* Add screens for the users folder */}
      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard', // Title shown on the header
        }}
      />
      <Stack.Screen
        name="fleets"
        options={{
          title: 'Fleets', // Title for the Fleets screen
        }}
      />
      <Stack.Screen
        name="help"
        options={{
          title: 'Help', // Title for the Help screen
        }}
      />
      <Stack.Screen
        name="reports"
        options={{
          title: 'Reports', // Title for the Reports screen
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: 'Settings', // Title for the Settings screen
        }}
      />
    </Stack>
  );
}
