import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ArticleDetail({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Hydration Matters: Why Water Is Your Secret Weapon
      </Text>

      <Text style={styles.body}>
        Water is often overlooked, but it's the unsung hero of our daily health.
        Everything from digestion and metabolism to focus and skin health is
        influenced by how much water we drink.
        {"\n\n"}
        <Text style={styles.bold}>Let's dive in!</Text>
        {"\n\n"}
        <Text style={styles.bold}>How Much Water Do You Need?</Text>
        {"\n"}
        Men: ~3.7L/day | Women: ~2.7L/day
        {"\n\n"}
        <Text style={styles.bold}>Signs of Dehydration</Text>
        {"\n"}
        - Fatigue or sluggishness{"\n"}- Dry mouth or dry skin{"\n"}- Headaches
        or dizziness
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    flex: 1,
    padding: 20,
  },
  back: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontFamily: "Unbounded",
    color: "#fff",
    marginBottom: 20,
  },
  body: {
    fontSize: 14,
    fontFamily: "UnboundedLight",
    color: "#ccc",
    lineHeight: 24,
  },
  bold: {
    fontFamily: "UnboundedSemiBold",
    color: "#fff",
  },
});
