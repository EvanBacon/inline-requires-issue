import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ghQueueMicrotask } from "./wrap-method";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Throws an illegal invocation when inline requires and experimental import support are enabled.
    ghQueueMicrotask(() => {
      console.log("ghQueueMicrotask");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          ghQueueMicrotask(() => {
            console.log("ghQueueMicrotask");
          });
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
