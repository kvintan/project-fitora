import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "expo-checkbox";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remindMe, setRemindMe] = useState(false);

  const validateEmail = (email) => {
    return email.endsWith("@gmail.com");
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert("Invalid Email", "Email must end with @gmail.com");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters and include letters, numbers, and symbols"
      );
      return;
    }

    navigation.navigate("MainTabs");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

          <Image source={require("../assets/logo.png")} style={styles.logo} />

          <Text style={styles.loginText}>Login</Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <View style={styles.reminderRow}>
              <View style={styles.remindMeContainer}>
                <CheckBox
                  value={remindMe}
                  onValueChange={setRemindMe}
                  tintColors={{ true: "#fff", false: "#ccc" }}
                />
                <Text style={styles.remindMeText}>Remind me later</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <LinearGradient
              colors={["#f2ff00", "#affa01"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.loginButton}
            >
              <TouchableOpacity
                style={styles.loginButtonInner}
                onPress={handleLogin}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
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
  logo: {
    width: "80%",
    height: "35%",
    marginTop: "30%",
    resizeMode: "contain",
  },
  loginText: {
    fontSize: 39,
    fontFamily: "Unbounded",
    color: "#FFFFFF",
    alignSelf: "flex-start",
    marginLeft: "7%",
    marginTop: "5%",
  },
  formContainer: {
    width: "85%",
    marginTop: 20,
    marginBottom: 60,
  },
  input: {
    backgroundColor: "#343434",
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    fontSize: 12,
    color: "#fff",
    fontFamily: "UnboundedLight",
  },
  reminderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  remindMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  remindMeText: {
    color: "#fff",
    marginLeft: 8,
    fontFamily: "UnboundedLight",
    fontSize: 9,
  },
  forgotPassword: {
    color: "#fff",
    textDecorationLine: "underline",
    fontFamily: "UnboundedLight",
    fontSize: 9,
    marginRight: "2%",
  },
  loginButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 12,
    borderRadius: 33,
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    marginLeft: "28%",
    marginTop: "6%",
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 5,
    marginLeft: 4,
    fontFamily: "UnboundedSemiBold",
  },
});
