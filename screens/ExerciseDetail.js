import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image, // ✅ Tambahkan ini
} from "react-native";
import { Video } from "expo-av";

const ExerciseDetail = ({ route, navigation }) => {
  const { title, category, video, hints, breathing, easier } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ExerciseListPage")} 
        style={styles.backButton}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Title & Category */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>

      {/* Video */}
      <Video
        source={video}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
        useNativeControls={true}
        style={styles.video}
      />

      {/* Instruction */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.instructionTitle}>Instruction</Text>

        <Text style={styles.sectionTitle}>Hints</Text>
        <Text style={styles.text}>{hints}</Text>

        <Text style={styles.sectionTitle}>Breathing</Text>
        <Text style={styles.text}>{breathing}</Text>

        <Text style={styles.sectionTitle}>How to Make it Easier?</Text>
        <Text style={styles.text}>{easier}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 55,
    left: 15,
    zIndex: 10,
    padding: 8,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontFamily: "UnboundedSemiBold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  category: {
    fontSize: 15,
    fontFamily: "LexendRegular",
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 10,
  },
  video: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#000",
    marginVertical: 10,
    borderWidth: 2,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  instructionTitle: {
    fontSize: 20,
    fontFamily: "UnboundedSemiBold",
    color: "#D0FF5C",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "UnboundedSemiBold",
    color: "white",
    marginTop: 12,
  },
  text: {
    fontSize: 15,
    fontFamily: "LexendLight",
    color: "white",
    marginTop: 5,
    lineHeight: 22,
    textAlign: "justify",
  },
});
