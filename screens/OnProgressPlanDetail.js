import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // ✅ wajib import

const workoutData = [
  {
    title: "Abs Plan",
    day: 1,
    workouts: [
      { name: "Knee Raises", reps: 20, sets: 2 },
      { name: "One-Arm Deadlift", reps: 5, sets: 2 },
      { name: "Side Bends", reps: 15, sets: 2 },
    ],
  },
  {
    title: "Leg Day",
    day: 2,
    workouts: [
      { name: "Deadlift", reps: 20, sets: 1 },
      { name: "Weighted Chunches", reps: 20, sets: 2 },
      { name: "Russian Twist", reps: 20, sets: 1 },
    ],
  },
  {
    title: "Muscle Strength",
    day: 3,
    workouts: [
      { name: "Leg Lifts", reps: 20, sets: 1 },
      { name: "Squats", reps: 15, sets: 2 },
      { name: "Plank", reps: 1, sets: 3 },
    ],
  },
  {
    title: "Full Body Workout",
    day: 4,
    workouts: [
      { name: "Push-Ups", reps: 15, sets: 2 },
      { name: "Burpees", reps: 10, sets: 2 },
      { name: "Mountain Climbers", reps: 20, sets: 2 },
    ],
  },
];

export default function YourPlan({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/backButton.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Shanella's Plan</Text>
      </View>

      {/* Workout Cards */}
      {workoutData.map((item, index) => (
        <LinearGradient
          key={index}
          colors={["#2F2F2F", "#393939"]} // ✅ gradient abu-abu gelap
          style={styles.gradientCard}
        >
          <View style={styles.card}>
            {/* Header Card */}
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.dayTitle}>DAY {item.day}</Text>
            </View>

            {/* Subtitle REPS & SET */}
            <View style={styles.subtitleRow}>
              <View style={{ flex: 1 }} />
              <Text style={styles.subtitle}>REPS</Text>
              <Text style={styles.subtitle}>SET</Text>
            </View>

            {/* Workout Items */}
            {item.workouts.map((w, idx) => (
              <View key={idx} style={styles.workoutRow}>
                {/* Nama workout */}
                <View style={styles.workoutNameBox}>
                  <Text style={styles.workoutName}>{w.name}</Text>
                </View>
                {/* Reps */}
                <View style={styles.repsBox}>
                  <Text style={styles.boxText}>{w.reps}</Text>
                </View>
                {/* Set */}
                <View style={styles.repsBox}>
                  <Text style={styles.boxText}>{w.sets}</Text>
                </View>
              </View>
            ))}

            {/* Start Button */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <LinearGradient
                  colors={["#AFFA01", "#F2FF00"]}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>START WORKOUT</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 26,
    position: "relative",
  },

  subtitleRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 1,
    gap: 20,
    marginEnd: 10,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
    width: 35,
    fontFamily: "Lexend",
    fontWeight: "bold",
    textAlign: "center",
  },
  workoutRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  workoutNameBox: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  repsBox: {
    width: 50,
    backgroundColor: "#1E1E1E",
    marginLeft: 8,
    paddingVertical: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
  },
  backIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  headerTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Unbounded",
    color: "#fff",
    fontWeight: "bold",
  },
  gradientCard: {
    borderRadius: 12,
    marginBottom: 30,
  },
  card: {
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "Unbounded",
    color: "#fff",
    fontWeight: "bold",
  },
  dayTitle: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Lexend",
    fontWeight: "bold",
  },
  workoutRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomColor: "#333",
  },
  workoutName: {
    color: "#fff",
    fontFamily: "lexend",
    fontWeight: "bold",
    fontSize: 16,
  },
  repsSets: {
    flexDirection: "row",
    width: 80,
    justifyContent: "space-between",
  },
  reps: {
    color: "#fff",
    textAlign: "center",
  },
  sets: {
    color: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#b3ff00",
    paddingVertical: 15,
    justifyContent: "center",
    width: 200,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontFamily: "lexend",
    color: "#000",
    fontSize: 14,
  },
});
