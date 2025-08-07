import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function PlanDetailScreen({ navigation }) {
  const [planName, setPlanName] = useState("My Awesome Plan");

  const [workoutDays, setWorkoutDays] = useState([
    {
      title: "First Day Workout",
      exercises: [
        { name: "Knee Raises", reps: 20, sets: 2 },
        { name: "One-Arm Deadlift", reps: 5, sets: 2 },
        { name: "Side Bends", reps: 15, sets: 2 },
      ],
    },
  ]);

  const handleAddWorkoutDay = () => {
    const dayNumber = workoutDays.length + 1;
    const newDay = {
      title: `Day ${dayNumber} Workout`,
      exercises: [],
    };
    setWorkoutDays([...workoutDays, newDay]);
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        style={styles.backWrapper}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.titleRow}>
        <Text style={styles.headerTitle}>{planName}</Text>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("YourPlan")}
        >
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {workoutDays.map((day, index) => (
          <View key={index} style={styles.workoutCard}>
            {/* Workout Day Title */}
            <View style={styles.workoutHeaderRow}>
              <Text style={styles.workoutCardTitle}>{day.title}</Text>
              <TouchableOpacity
                onPress={() => {
                  const updated = [...workoutDays];
                  updated.splice(index, 1);
                  setWorkoutDays(updated);
                }}
              >
                <Ionicons name="trash-outline" size={22} color="#ccc" />
              </TouchableOpacity>
            </View>

            <Text style={styles.dayText}>DAY {index + 1}</Text>

            {/* Header REPS & SET */}
            <View style={styles.headerRow}>
              <View style={{ flex: 1 }} />
              <View style={styles.headerBox}>
                <Text style={styles.headerLabel}>REPS</Text>
              </View>
              <View style={styles.headerBox}>
                <Text style={styles.headerLabel}>SET</Text>
              </View>
            </View>

            {/* Exercises */}
            {day.exercises.length > 0 ? (
              day.exercises.map((exercise, idx) => (
                <View key={idx} style={styles.exerciseRow}>
                  <View style={styles.exerciseName}>
                    <Text style={styles.exerciseText}>{exercise.name}</Text>
                  </View>
                  <View style={styles.repsBox}>
                    <Text style={styles.exerciseText}>{exercise.reps}</Text>
                  </View>
                  <View style={styles.repsBox}>
                    <Text style={styles.exerciseText}>{exercise.sets}</Text>
                  </View>
                </View>
              ))
            ) : (
              <Text
                style={{
                  color: "#aaa",
                  marginBottom: 10,
                  fontFamily: "LexendRegular",
                }}
              >
                No exercises yet...
              </Text>
            )}

            {/* ➕ Add Exercise Button */}
            <TouchableOpacity
              style={styles.addExerciseRow}
              onPress={() => navigation.navigate("CustomWorkoutPlan")} // arahkan ke ExerciseListPage
            >
              <Ionicons name="add-circle-outline" size={20} color="#fff" />
              <Text style={styles.addExerciseText}>Add Exercise</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* ➕ Add Workout Button */}
        <TouchableOpacity
          onPress={handleAddWorkoutDay}
          style={{ marginTop: 20 }}
        >
          <LinearGradient
            colors={["#AFFA01", "#F2FF00"]}
            style={styles.addWorkoutButton}
          >
            <Text style={styles.addWorkoutText}>ADD WORKOUT</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backWrapper: {
    marginBottom: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 12,
    fontFamily: "UnboundedSemiBold",
  },
  saveButton: {
    backgroundColor: "#CFFF04",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "LexendBold",
  },
  workoutCard: {
    backgroundColor: "#2e2e2e",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  workoutHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workoutCardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "UnboundedSemiBold",
  },
  dayText: {
    color: "#aaa",
    marginBottom: 8,
    fontFamily: "LexendBold",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 0,
    gap: 8,
  },
  headerBox: {
    width: 50,
    alignItems: "center",
  },
  headerLabel: {
    color: "#aaa",
    fontFamily: "LexendBold",
    fontSize: 12,
  },
  exerciseRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  exerciseName: {
    flex: 1,
    backgroundColor: "#202020ff",
    padding: 10,
    borderRadius: 8,
  },
  repsBox: {
    width: 50,
    backgroundColor: "#202020ff",
    marginLeft: 8,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  exerciseText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "LexendBold",
  },
  addExerciseRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addExerciseText: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
    fontFamily: "LexendBold",
  },
  addWorkoutButton: {
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addWorkoutText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
    fontFamily: "LexendBold",
  },
});
