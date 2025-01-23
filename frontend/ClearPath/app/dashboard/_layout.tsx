import { Stack } from 'expo-router';

export default function DashboardLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // Enables headers for dashboard-related screens
        animation: 'slide_from_bottom', // Adds a slide-in animation from the bottom
      }}
    >
      <Stack.Screen
        name="dashboard"
        options={{
          title: 'Dashboard', // Title for the Dashboard screen
        }}
      />
      <Stack.Screen
        name="fleets"
        options={{
          title: 'Fleets', // Title for the Fleets screen
        }}
      />
      <Stack.Screen
        name="reports"
        options={{
          title: 'Reports', // Title for the Reports screen
        }}
      />
    </Stack>
  );
}
