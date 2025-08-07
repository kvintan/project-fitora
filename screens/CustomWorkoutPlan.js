import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function PlanDetailScreen({ navigation }) {
  const [planName, setPlanName] = useState("Workout Name");

  const [exercises, setExercises] = useState([
    { name: "Knee Raises", reps: 20, sets: 2 },
    { name: "One-Arm Deadlift", reps: 15, sets: 2 },
    { name: "Squat", reps: 12, sets: 2 },
  ]);

  const handleRemoveExercise = (index) => {
    const updated = [...exercises];
    updated.splice(index, 1);
    setExercises(updated);
  };

  const handleRepsChange = (index, value) => {
    const updated = [...exercises];
    updated[index].reps = value.replace(/[^0-9]/g, ""); // hanya angka
    setExercises(updated);
  };

  const handleSetsChange = (index, value) => {
    const updated = [...exercises];
    updated[index].sets = value.replace(/[^0-9]/g, "");
    setExercises(updated);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backWrapper}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Title + Save */}
      <View style={styles.titleRow}>
        <TextInput
          style={styles.headerTitle}
          value={planName}
          onChangeText={setPlanName}
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("CustomPlan")} // kembali ke CustomPlan
        >
          <Text style={styles.saveText}>SAVE</Text>
        </TouchableOpacity>
      </View>

      {/* Exercises List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseCard}>
            <View style={styles.exerciseNameBox}>
              <Text style={styles.exerciseNameText}>{exercise.name}</Text>
            </View>

            {/* Input REPS */}
            <View style={styles.valueBox}>
              <Text style={styles.valueLabel}>REPS</Text>
              <TextInput
                style={styles.valueInput}
                keyboardType="numeric"
                value={String(exercise.reps)}
                onChangeText={(text) => handleRepsChange(index, text)}
              />
            </View>

            {/* Input SETS */}
            <View style={styles.valueBox}>
              <Text style={styles.valueLabel}>SET</Text>
              <TextInput
                style={styles.valueInput}
                keyboardType="numeric"
                value={String(exercise.sets)}
                onChangeText={(text) => handleSetsChange(index, text)}
              />
            </View>

            <TouchableOpacity onPress={() => handleRemoveExercise(index)}>
              <Ionicons
                name="remove-circle-outline"
                size={26}
                color="#ccc"
                style={{ marginLeft: 6 }}
              />
            </TouchableOpacity>
          </View>
        ))}

        {/* Add Exercise Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ExerciseListinCustom")}
          style={{ marginTop: 20 }}
        >
          <LinearGradient
            colors={["#CFFF04", "#A3FF00"]}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>ADD EXERCISE</Text>
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
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "UnboundedSemiBold",
  },
  saveButton: {
    backgroundColor: "#CFFF04",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginLeft: 10,
  },
  saveText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "LexendBold",
  },
  exerciseCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e2e2e",
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  exerciseNameBox: {
    flex: 1,
  },
  exerciseNameText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "LexendBold",
  },
  valueBox: {
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  valueLabel: {
    fontSize: 10,
    color: "#aaa",
    fontFamily: "LexendBold",
  },
  valueInput: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "LexendBold",
    minWidth: 30,
    textAlign: "center",
    padding: 0,
  },
  addButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "LexendBold",
  },
});
