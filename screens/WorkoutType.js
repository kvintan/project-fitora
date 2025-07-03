import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WorkoutType() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workout Type Page (e.g. Strength)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
