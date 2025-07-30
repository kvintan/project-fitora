// Tetap di bagian atas file kamu
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function MyInfo() {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("Gain Muscle and Lose Weight");
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../assets/background-login-page.png")}
      style={styles.image}
    >
      <View style={styles.overlay} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
        style={styles.container}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>My Info</Text>
        <Text style={styles.subtitle}>Hello, Cecep...</Text>

        {/* DOB */}
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.fullInput}>
          <TextInput
            style={styles.textInput}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#ccc"
            value={dob}
            onChangeText={setDob}
          />
        </View>

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          {["Man", "Woman", "Prefer not to Say"].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.genderOption}
              onPress={() => setGender(option)}
            >
              <View style={styles.genderCircle}>
                {gender === option && <View style={styles.genderDot} />}
              </View>
              <Text style={styles.genderLabel}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Weight */}
        <Text style={styles.label}>Weight</Text>
        <View style={styles.inlineInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter weight"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.unit}>Kg</Text>
        </View>

        {/* Height */}
        <Text style={styles.label}>Height</Text>
        <View style={styles.inlineInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter height"
            placeholderTextColor="#ccc"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <Text style={styles.unit}>cm</Text>
        </View>

        {/* Goal */}
        {/* Goal */}
        <Text style={styles.label}>Goal</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={goal}
            onValueChange={(itemValue) => setGoal(itemValue)}
            style={styles.picker}
            mode={Platform.OS === "ios" ? "dropdown" : "dialog"} // agar android tidak auto buka
            dropdownIconColor="#fff"
          >
            <Picker.Item
              label="Gain Muscle and Lose Weight"
              value="Gain Muscle and Lose Weight"
              style={styles.pickerItem}
            />
            <Picker.Item
              label="Lose Weight"
              value="Lose Weight"
              style={styles.pickerItem}
            />
            <Picker.Item
              label="Build Muscle"
              value="Build Muscle"
              style={styles.pickerItem}
            />
            <Picker.Item
              label="Stay Healthy"
              value="Stay Healthy"
              style={styles.pickerItem}
            />
          </Picker>
          <Image
            source={require("../assets/my-info-dropdown.png")}
            style={styles.dropdownIconImage}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 0,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    zIndex: 2,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "Unbounded",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    fontWeight: "600",
    fontFamily: "Unbounded",
  },
  fullInput: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 48,
    justifyContent: "center",
    marginBottom: 15,
  },
  textInput: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  genderCircle: {
    height: 16,
    width: 16,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  genderDot: {
    height: 6,
    width: 6,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  genderLabel: {
    color: "#fff",
    fontSize: 16,
  },
  inlineInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 48,
    marginBottom: 15,
  },
  unit: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  pickerItem: {
    fontFamily: "Unbounded",
    fontSize: 16,
    color: "#fff",
  },
  pickerWrapper: {
    backgroundColor: "rgba(255,255,255,0.15)", // putih transparan
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 48,
    justifyContent: "center",
    overflow: "hidden",
  },

  picker: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Unbounded",
    width: "100%",
    height: 48,
  },
  nextButton: {
    backgroundColor: "#C6FF00",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  nextText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  dropdownIconImage: {
    position: "absolute",
    right: 20,
    top: Platform.OS === "ios" ? 14 : 12,
    width: 16,
    height: 16,
    resizeMode: "contain",
    pointerEvents: "none",
  },
});
