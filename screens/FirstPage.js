import React, { useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  Animated,
  Easing,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const backgroundOpacity = useRef(new Animated.Value(0.3)).current;
  const logoPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const logoScale = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current; // opacity for fading in

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoPosition, {
        toValue: { x: -width / 2.9, y: -height / 2.5 },
        duration: 4000,
        delay: 2000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 0.5,
        duration: 4000,
        delay: 2000,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(backgroundOpacity, {
        toValue: 0,
        duration: 4000,
        delay: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();

    // Fade in trackYourProgress and buttons after 2000ms delay
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require("../assets/background-login.png")}
      style={styles.image}
    >
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: backgroundOpacity.interpolate({
              inputRange: [0, 0.3],
              outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.3)"],
            }),
          },
        ]}
      />

      <Animated.Image
        source={require("../assets/logo.png")}
        style={[
          styles.logo,
          {
            transform: [
              { translateX: logoPosition.x },
              { translateY: logoPosition.y },
              { scale: logoScale },
            ],
          },
        ]}
      />

      <Image
        source={require("../assets/background-login-bottom.png")}
        style={styles.backgroundImage}
      />

      {/* Fade-in container */}
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
            position: "absolute",
            width: "100%",
            bottom: 130,
            alignItems: "center",
          },
        ]}
      >
        <Image
          source={require("../assets/track-your-progress.png")}
          style={styles.trackYourProgress}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonTextRegister}>Register</Text>
          </TouchableOpacity>

          <LinearGradient
            colors={["#AFFA01", "#F2FF00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.buttonLogin}
          >
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  backgroundImage: {
    bottom: 0,
    position: "absolute",
    width: width,
  },

  logo: {
    width: 150,
    height: 150,
    position: "absolute",
  },

  trackYourProgress: {
    position: "absolute",
    bottom: "20%",
    marginLeft: "-5%",
  },

  buttonContainer: {
    position: "absolute",
    bottom: "-70",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
  },

  buttonRegister: {
    borderColor: "#BBE40A",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },

  buttonLogin: {
    borderColor: "#BBE40A",
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },

  buttonTextRegister: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
});
