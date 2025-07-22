import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[\w-\.]+@gmail\.com$/i;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, one letter, one number, one symbol
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = () => {
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Email must be a valid Gmail address (e.g. example@gmail.com)");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters and include letters, numbers, and symbols"
      );
      return;
    }

    // All validations passed
    navigation.navigate("MainTabs");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/background-login-page.png")}
        style={styles.image}
      >
        <View style={styles.overlay} />
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.5)", "rgba(0,0,0,1)"]}
          locations={[0, 0.42, 0.65]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientRectangle}
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.registerText}>Register</Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#A0A0A0"
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("MyInfo")}
            >
              <LinearGradient
                colors={["#D6FF00", "#3ADF00"]}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    marginTop: "-50%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  gradientRectangle: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: "flex-start",
    marginTop: 50,
    marginLeft: 30,
  },
  registerText: {
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    marginTop: 20,
    marginLeft: 30,
  },
  formContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    paddingBottom: 40,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: "#3D3D3D",
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 20,
    color: "#FFFFFF",
  },
  registerButton: {
    marginTop: 40,
    alignItems: "center",
  },
  buttonGradient: {
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 16,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
