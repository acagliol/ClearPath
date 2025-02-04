import { useEffect } from "react";
import { Platform, Text, View } from "react-native";


export default function Index() {
useEffect(() => {
  if (Platform.OS === 'web') {
    document.title = "ClearPath Navigation";
  }
},[]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

