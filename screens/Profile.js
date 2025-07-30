import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Profile({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background-login-page.png")}
      style={styles.image}
    >
      <View style={styles.overlay}></View>

      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
        locations={[0, 0.42, 0.65]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradientRectangle}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Picture */}
        <Image
          source={require("../assets/profile-user.png")}
          style={styles.profilePic}
        />

        {/* Name */}
        <Text style={styles.name}>Budi Otot</Text>

        {/* My Statistic */}
        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => navigation.navigate("Statistic")}
        >
          <Image
            source={require("../assets/profile-statistic.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>My Statistic</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* Settings */}
        <Text style={styles.sectionLabel}>Settings</Text>

        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Image
            source={require("../assets/profile-edit.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Edit Profile</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuBox}>
          <Image
            source={require("../assets/profile-sound.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Sound</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* Feedback */}
        <Text style={styles.sectionLabel}>Feedback</Text>
        <TouchableOpacity style={styles.menuBox}>
          <Image
            source={require("../assets/profile-feedback.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Feedback</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {/* Follow Us */}
        <Text style={styles.sectionLabel}>Follow Us</Text>
        <TouchableOpacity style={styles.menuBox}>
          <Image
            source={require("../assets/profile-instagram.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Instagram</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBox}>
          <Image
            source={require("../assets/profile-facebook.png")}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>Facebook</Text>
          <Image
            source={require("../assets/food-list-arrow.png")}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        <View style={styles.logoutContainer}>
          <TouchableOpacity
            style={styles.menuBox}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              source={require("../assets/profile-logout.png")}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Log Out</Text>
            <Image
              source={require("../assets/food-list-arrow.png")}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  gradientRectangle: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
  },
  scrollContent: {
    paddingTop: 100,
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionLabel: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Unbounded",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
  },
  menuBox: {
    backgroundColor: "#2F2F2F",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 12,
  },
  menuText: {
    color: "#fff",
    fontSize: 15,
    flex: 1,
    fontFamily: "Unbounded",
    fontWeight: "bold",
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#fff",
  },
  feedbackIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  logoutButton: {
    marginTop: 40,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
    fontFamily: "Unbounded",
  },

  logoutContainer: {
    marginTop: 40,
  },
});
