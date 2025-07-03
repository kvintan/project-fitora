import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screens/FirstPage";
import Login from "./screens/Login";
import WorkoutPage from "./screens/WorkoutPage";
import WorkoutType from "./screens/WorkoutType";
import { useFonts } from "expo-font";
import NutritionTips from "./screens/NutritionTips";
import ArticleDetail from "./screens/ArticleDetail";


const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require("./assets/Unbounded/static/Unbounded-Black.ttf"),
    UnboundedSemiBold: require("./assets/Unbounded/static/Unbounded-SemiBold.ttf"),
    UnboundedLight: require("./assets/Unbounded/static/Unbounded-Light.ttf"),
    UnboundedRegular: require("./assets/Unbounded/static/Unbounded-Regular.ttf"),
    Lexend: require("./assets/Lexend/static/Lexend-Black.ttf"),
    LexendSemiBold: require("./assets/Lexend/static/Lexend-SemiBold.ttf"),
    LexendLight: require("./assets/Lexend/static/Lexend-Light.ttf"),
    LexendRegular: require("./assets/Lexend/static/Lexend-Regular.ttf")
  });

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="NutritionTips">
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
        <stack.Screen
          name="WorkoutPage"
          component={WorkoutPage}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="WorkoutType"
          component={WorkoutType}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="NutritionTips"
          component={NutritionTips}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ArticleDetail"
          component={ArticleDetail}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
