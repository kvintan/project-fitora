import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function EditProfile({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background-login-page.png")}
      style={styles.image}
    >
      <View style={styles.overlay}></View>

      {/* Back Button - Tetap di pojok kiri atas */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}

        style={styles.backButton}
      >
        <Image
          source={require("../assets/backButton.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Semua Konten Profil */}
      <View style={styles.profileContainer}>
        {/* Foto profil (diturunkan ke bawah) */}
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/profile-user.png")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
        </View>

        {/* Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>Budi Otot</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Gender</Text>
          <Text style={styles.infoValue}>Male</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Birthday</Text>
          <Text style={styles.infoValue}>03/07/05</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>170 Cm</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>70 Kg</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 100, // biar isi agak turun
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
  },
});


// BENERIN EDITAN VALUE NYA DAN EDIT PP