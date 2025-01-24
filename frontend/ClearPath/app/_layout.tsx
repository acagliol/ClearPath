import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f8f8" },
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="auth/_layout"
        options={{
          headerShown: false, // Hides header for nested auth screens
        }}
      />
      <Stack.Screen
        name="dashboard/_layout"
        options={{
          headerShown: false, // Hides header for dashboard screens
        }}
      />
      <Stack.Screen
        name="errors/_layout"
        options={{
          headerShown: false, // Hides header for error screens
        }}
      />
      <Stack.Screen
        name="help/_layout"
        options={{
          title: "Help",
        }}
      />
      <Stack.Screen
        name="settings/_layout"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
