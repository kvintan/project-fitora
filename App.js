import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screens/FirstPage";
import Login from "./screens/Login";
import ExerciseListPage from "./screens/ExerciseListPage";
import { useFonts } from "expo-font";


const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require("./assets/Unbounded/static/Unbounded-Black.ttf"),
    UnboundedSemiBold: require("./assets/Unbounded/static/Unbounded-SemiBold.ttf"),
    UnboundedLight: require("./assets/Unbounded/static/Unbounded-Light.ttf"),
    Lexend: require("./assets/Lexend/static/Lexend-Regular.ttf"),
    LexendBold: require("./assets/Lexend/static/Lexend-Bold.ttf"),
  });

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="ExerciseListPage">
        <stack.Screen
          name="ExerciseListPage"
          component={ExerciseListPage}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
