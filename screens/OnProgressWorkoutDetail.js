import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const workoutData = [
  {
    title: "Shanella's Workout",
    workouts: [
      {
        name: "One-Arm Deadlift",
        duration: "40s",
        sets: 3,
        reps: 15,
        image: "one-arm-deadlift",
        videoSource: require("../assets/video/one-arm-deadlift-potrait.mp4"),
      },
      {
        name: "Mason Twist",
        duration: "30s",
        sets: 3,
        reps: 20,
        image: "mason-twist",
        videoSource: require("../assets/video/mason-twist-potrait.mp4"),
      },
      {
        name: "Weighted Crunches",
        duration: "30s",
        sets: 3,
        reps: 20,
        image: "weighted-crunches",
        videoSource: require("../assets/video/weighted-crunches-potrait.mp4"),
      },
      {
        name: "Russian Twist",
        duration: "30s",
        sets: 3,
        reps: 30,
        image: "russian-twist",
        videoSource: require("../assets/video/russian-twist-potrait.mp4"),
      },
      {
        name: "Weighted Leg Lifts",
        duration: "30s",
        sets: 3,
        reps: 15,
        image: "weighted-leg-lifts",
        videoSource: require("../assets/video/weighted-leg-lifts-potrait.mp4"),
      },
      {
        name: "Knee Raises",
        duration: "30s",
        sets: 3,
        reps: 20,
        image: "knee-raises",
        videoSource: require("../assets/video/pull-up-potrait.mp4"),
      },
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
        <Text style={styles.headerTitle}>Your Workout</Text>
      </View>

      {workoutData.map((item, index) => (
        <LinearGradient
          key={index}
          colors={["#2F2F2F", "#393939"]}
          style={styles.gradientCard}
        >
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>

            {/* REPS & SET header */}
            <View style={styles.subtitleRow}>
              <View style={{ flex: 1 }} />
              <Text style={styles.subtitle}>REPS</Text>
              <Text style={styles.subtitle}>SET</Text>
            </View>

            {item.workouts.map((w, idx) => (
              <View key={idx} style={styles.workoutRow}>
                <View style={styles.workoutNameBox}>
                  <Text style={styles.workoutName}>{w.name}</Text>
                </View>
                <View style={styles.repsBox}>
                  <Text style={styles.boxText}>{w.reps}</Text>
                </View>
                <View style={styles.repsBox}>
                  <Text style={styles.boxText}>{w.sets}</Text>
                </View>
              </View>
            ))}

            {/* Start Workout */}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackingProgress", {
                    exercises: item.workouts,
                  })
                }
              >
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
    alignItems: "center",
    marginBottom: 26,
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: "#fff",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Unbounded",
    color: "#fff",
    fontWeight: "bold",
    marginRight: 40,
  },
  gradientCard: {
    borderRadius: 12,
    marginBottom: 30,
  },
  card: {
    borderRadius: 12,
    padding: 16,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 21,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitleRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 6,
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
  workoutName: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Lexend",
    fontSize: 16,
  },
  repsBox: {
    width: 50,
    height: 45,
    backgroundColor: "#1E1E1E",
    marginLeft: 8,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
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
    fontFamily: "Lexend",
    color: "#000",
    fontSize: 14,
  },
});
