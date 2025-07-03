import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function WorkoutTypeDetail() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Tombol kembali */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>

        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Konten sementara */}
      <Text style={styles.title}>Insane Six Pack</Text>
      <Text style={styles.text}>
        This is a placeholder for the workout detail screen. In the future, this page will include:
        {"\n\n"}• List of exercises{"\n"}• Sets & reps{"\n"}• Start button{"\n"}• Progress bar{"\n"}• Timer, etc.
      </Text>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    padding: 20,
    paddingTop: 60,
  },
  // backButton: {
  //   position: "absolute",
  //   top: 40,
  //   left: 20,
  //   zIndex: 10,
  //   backgroundColor: "#00000080",
  //   borderRadius: 20,
  //   padding: 5,
  // },
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
  title: {
    fontSize: 28,
    fontFamily: "Unbounded",
    color: "#D2FF39",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "LexendRegular",
    lineHeight: 22,
  },
});
