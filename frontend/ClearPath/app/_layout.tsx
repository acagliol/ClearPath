import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Index",
        }}
      />
      <Stack.Screen
        name="auth/"
        options={{
          headerShown: false, // Hides header for nested auth screens
        }}
      />
      <Stack.Screen
        name="dashboard/"
        options={{
          headerShown: false, // Hides header for dashboard screens
        }}
      />
      <Stack.Screen
        name="errors/"
        options={{
          headerShown: false, // Hides header for error screens
        }}
      />
      <Stack.Screen
        name="help/"
        options={{
          title: "Help",
        }}
      />
      <Stack.Screen
        name="settings/"
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />
    </Stack>

  );
}
