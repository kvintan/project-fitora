import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Video } from "expo-av";

const ExerciseDetail = ({ route, navigation }) => {
  const { title, category, video, hints, breathing, easier } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Konten Scrollable */}
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>Category: {category}</Text>

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
  },
  backButton: {
    position: "absolute",
    top: 50, // sedikit di bawah status bar
    left: 15,
    zIndex: 10,
    padding: 8,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 26,
    fontFamily: "UnboundedSemiBold",
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
  category: {
    fontSize: 15,
    fontFamily: "LexendRegular",
    color: "#B0B0B0",
    textAlign: "center",
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#000",
    marginVertical: 10,
    borderWidth: 2,
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
