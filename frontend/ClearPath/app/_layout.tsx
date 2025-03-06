import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Maps "app/index.tsx" to "index" route */}
      <Stack.Screen
        name="index"
        options={{
          title: "Index",
        }}
      />

      {/* Maps "app/auth/index.tsx" to "auth/index" route */}
      <Stack.Screen
        name="auth/index"
        options={{
          headerShown: false, // e.g., hide header for nested auth screens
        }}
      />

      {/* Maps "app/product/index.tsx" to "product/index" route 
          But sets a custom title, so it won't show "product/index" in the header */}
      <Stack.Screen
        name="product/home"
        options={{
          headerShown: false,
          title: "Product", // <--- This overrides the default label
        }}
      />

      {/* Maps "app/errors/index.tsx" to "errors/index" */}
      <Stack.Screen
        name="errors/index"
        options={{
          headerShown: false,
        }}
      />

      {/* Maps "app/help/index.tsx" to "help/index" */}
      <Stack.Screen
        name="help/index"
        options={{
          title: "Help",
        }}
      />

      {/* Maps "app/settings/index.tsx" to "settings/index" */}
      <Stack.Screen
        name="settings/"
        options={{
          title: "Settings",
        }}
      />

      {/* Maps "app/home.tsx" (or "app/home/index.tsx") to "home" */}
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
