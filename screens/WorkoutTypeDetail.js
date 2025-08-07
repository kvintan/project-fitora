import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// Mapping nama gambar exercise
const exerciseImages = {
  "knee-raises": require("../assets/knee-raises.png"),
  "one-arm-deadlift": require("../assets/one-arm-deadlift.png"),
  "deadlift": require("../assets/deadlift.png"),
  "side-bends": require("../assets/side-bends.png"),
  "weighted-crunches": require("../assets/weighted-crunches.png"),
  "russian-twist": require("../assets/russian-twist.png"),
  "weighted-leg-lifts": require("../assets/weighted-leg-lifts.png"),
  "mason-twist": require("../assets/mason-twist.png"),
  "single-dumbbell-squat": require("../assets/single-dumbbell-squat.png"),
  "push-up": require("../assets/push-up.png"),
  "upper-body": require("../assets/upper-body.png"),
  "lower-body": require("../assets/lower-body.png"),
  "rotation-resistance": require("../assets/rotation-resistance.png"),
  "inchworms": require("../assets/inchworms.png"),
  "front-kicks": require("../assets/front-kicks.png"),
  "running-in-place": require("../assets/running-in-place.png"),
  "ankle-twist": require("../assets/ankle-twist.png"),
  "side-bend": require("../assets/side-bend.png"),
  "supine-marching": require("../assets/supine-marching.png"),
  "side-to-side-reach": require("../assets/side-to-side-reach.png"),
  "triangle-pose": require("../assets/triangle-pose.png"),
};

export default function WorkoutTypeDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { workout } = route.params;

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Banner */}
        <Image source={workout.banner} style={styles.bannerImage} />

        {/* Konten */}
        <View style={styles.contentBox}>
          <Text style={styles.workoutTitle}>{workout.name}</Text>
          <Text style={styles.workoutSubtitle}>{workout.description}</Text>

          {/* Info Section */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Image source={require("../assets/food-detail-time.png")} style={styles.infoIcon} />
              <Text style={styles.infoText}>{workout.duration}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require("../assets/food-detail-kcal.png")} style={styles.infoIcon} />
              <Text style={styles.infoText}>{workout.calories}</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require("../assets/level-icons.png")} style={styles.infoIcon} />
              <Text style={styles.infoText}>{workout.level}</Text>
            </View>
          </View>

          {/* Daftar Latihan */}
          <Text style={styles.exerciseTitle}>Exercise List</Text>
          <View style={styles.exerciseList}>
            {workout.exercises.map((ex, index) =>
              ex.name.toLowerCase() === "rest" ? (
                <Text key={index} style={styles.restText}>
                  Rest: {ex.duration}
                </Text>
              ) : (
                <ExerciseItem
                  key={index}
                  name={ex.name}
                  duration={ex.duration}
                  image={ex.image}
                />
              )
            )}
          </View>

          {/* Tombol Start Session dengan gradasi */}
          <LinearGradient
            colors={["#F2FF00", "#AFFA01"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.startButton}
          >
            <TouchableOpacity
              style={styles.touchable}
              onPress={() =>
                navigation.navigate("TrackingProgress", {
                  exercises: workout.exercises,
                })
              }                      
            >
              <Text style={styles.startButtonText}>Start Session</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

// Komponen Exercise
function ExerciseItem({ image, name, duration }) {
  return (
    <View style={styles.exerciseItem}>
      <View style={styles.imageWrapper}>
        <Image source={exerciseImages[image]} style={styles.exerciseImage} />
      </View>
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{name}</Text>
        <Text style={styles.exerciseDuration}>{duration}</Text>
      </View>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1C1C1C" },
  backButton: {
    position: "absolute",
    top: 30,
    left: 15,
    padding: 8,
    zIndex: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  bannerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  contentBox: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  workoutTitle: {
    fontSize: 24,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  workoutSubtitle: {
    fontSize: 14,
    fontFamily: "LexendRegular",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  infoItem: {
    alignItems: "center",
  },
  infoIcon: {
    width: 40,
    height: 40,
    marginBottom: 6,
    resizeMode: "contain",
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "LexendRegular",
  },
  exerciseTitle: {
    fontSize: 16,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    color: "#CFED89",
    marginBottom: 10,
  },
  exerciseList: {
    marginBottom: 30,
  },
  exerciseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  imageWrapper: {
    backgroundColor: "#FFFFFF",
    width: 75,
    height: 60,
    borderRadius: 12,
    padding: 8,
    marginRight: 15,
  },
  exerciseImage: {
    width: 60,
    height: 52,
    resizeMode: "cover",
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 15,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  exerciseDuration: {
    fontSize: 13,
    fontFamily: "LexendRegular",
    color: "#666",
  },
  restText: {
    fontSize: 15,
    fontFamily: "LexendBold",
    color: "#CFED89",
    textAlign: "center",
    marginVertical: 10,
  },
  startButton: {
    borderRadius: 30,
    paddingVertical: 14,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  touchable: {
    width: "100%",
    alignItems: "center",
  },
  startButtonText: {
    fontSize: 16,
    fontFamily: "LexendBold",
    color: "#000",
  },
});
