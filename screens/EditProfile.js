import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
  const [profileImage, setProfileImage] = useState(require("../assets/profile-user.png"));

  const [editMode, setEditMode] = useState({
    name: false,
    gender: false,
    birthday: false,
    height: false,
    weight: false,
  });

  const [formData, setFormData] = useState({
    name: "Budi Otot",
    gender: "Male",
    birthday: "03/07/05",
    height: "170 Cm",
    weight: "70 Kg",
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage({ uri: result.assets[0].uri });
    }
  };
  const renderInfoBox = (label, key) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{label}</Text>
      <View style={styles.infoValueContainer}>
        {editMode[key] ? (
          <TextInput
            style={styles.infoInput}
            value={formData[key]}
            onChangeText={(text) => setFormData({ ...formData, [key]: text })}
            onBlur={() => setEditMode({ ...editMode, [key]: false })}
            autoFocus
            placeholder={`Enter ${label}`}
            placeholderTextColor="#888"
          />
        ) : (
          <TouchableOpacity onPress={() => setEditMode({ ...editMode, [key]: true })}>
            <Text style={styles.infoValue}>{formData[key]}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("../assets/background-login-page.png")}
      style={styles.image}
    >
      <View style={styles.overlay}></View>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.backButton}>
        <Image source={require("../assets/backButton.png")} style={styles.backIcon} />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.profileContainer}
      >
        <View style={styles.imageWrapper}>
          <Image source={profileImage} style={styles.profileImage} />
          <TouchableOpacity style={styles.editButton} onPress={pickImage}>
            <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
        </View>

        {renderInfoBox("Name", "name")}
        {renderInfoBox("Gender", "gender")}
        {renderInfoBox("Birthday", "birthday")}
        {renderInfoBox("Height", "height")}
        {renderInfoBox("Weight", "weight")}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  infoValueContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  infoInput: {
    fontFamily: "Lexend",
    fontSize: 15,
    color: "#fff",
    textAlign: "right",
    borderBottomWidth: 1,
    borderColor: "#888",
    paddingVertical: 2,
    minWidth: 100,
  },
  image: {
    width,
    height,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 2,
  },
  backIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  profileContainer: {
    marginTop: 100,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  imageWrapper: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: -5,
    backgroundColor: "#B7F65C",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  editText: {
    fontFamily: "Unbounded",
    fontWeight: "bold",
    fontSize: 12,
    color: "#000",
  },
  infoBox: {
    backgroundColor: "#2F2F2F",
    width: "100%",
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  infoLabel: {
    fontFamily: "Unbounded",
    fontSize: 15,
    color: "#fff",
  },
  infoValue: {
    fontFamily: "Lexend",
    fontSize: 15,
    color: "#fff",
    minWidth: "40%",
    textAlign: "right",
  },
});
