import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Video } from "expo-av";
import { useNavigation, useRoute } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

export default function TrackingProgress() {
  const route = useRoute();
  const navigation = useNavigation();
  const { exercises } = route.params;

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [workoutTimer, setWorkoutTimer] = useState(0);
  const videoRef = useRef(null);

  const currentExercise = exercises[currentExerciseIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkoutTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timer;
    if (isPlaying && currentExercise?.duration) {
      timer = setTimeout(() => {
        handleNext();
      }, currentExercise.duration * 1000);
    }
    return () => clearTimeout(timer);
  }, [currentExerciseIndex, isPlaying]);

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      navigation.goBack();
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require("../assets/xButton.png")} style={styles.backIcon} />
      </TouchableOpacity>

      <Text style={styles.workoutTimer}>{formatTime(workoutTimer)}</Text>

      <View style={styles.videoWrapper}>
        {currentExercise?.videoSource ? (
          <Video
            ref={videoRef}
            source={currentExercise.videoSource}
            style={styles.video}
            resizeMode="cover"
            shouldPlay={isPlaying}
            isLooping
          />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>No Video</Text>
          </View>
        )}
      </View>

      <View style={styles.progressBarWrapper}>
        {exercises.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepDot,
              index < currentExerciseIndex
                ? styles.completed
                : index === currentExerciseIndex
                ? styles.active
                : styles.upcoming,
            ]}
          />
        ))}
      </View>

      <View style={styles.bottomSection}>
        <View>
          <Text style={styles.durationText}>{currentExercise?.duration}s</Text>
          <Text style={styles.workoutName}>{currentExercise?.name}</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Image source={require("../assets/nextButton.png")} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1C1C1C" },
  backButton: { position: "absolute", top: 50, left: 20, zIndex: 10 },
  backIcon: { width: 35, height: 35 },
  workoutTimer: {
    alignSelf: "center",
    fontSize: 16,
    color: "#FFF",
    marginTop: 62,
    fontWeight: "bold",
  },
  videoWrapper: {
    width: screenWidth,
    height: (screenWidth / 2) * 3,
    marginTop: 15,
  },
  video: { width: "100%", height: "100%", backgroundColor: "#1C1C1C" },
  placeholder: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  placeholderText: { color: "#888" },
  progressBarWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginHorizontal: 10,
  },
  stepDot: {
    flex: 1,
    height: 6,
    marginHorizontal: 2,
    borderRadius: 3,
  },
  completed: { backgroundColor: "#CFED89" },
  active: { backgroundColor: "#888" },
  upcoming: { backgroundColor: "#444" },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  workoutName: { fontSize: 20, color: "#FFF", marginBottom: 4 },
  durationText: { fontSize: 35, color: "#FFF", fontWeight: "bold" },
  nextButton: { marginTop: 5 },
  nextIcon: { width: 60, height: 60 },
});
