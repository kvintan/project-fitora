import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screens/FirstPage";
import Login from "./screens/Login";
import { useFonts } from "expo-font";
import NutritionTips from "./screens/NutritionTips";
import ArticleDetail from "./screens/ArticleDetail";


const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require("./assets/Unbounded/static/Unbounded-Black.ttf"),
    UnboundedSemiBold: require("./assets/Unbounded/static/Unbounded-SemiBold.ttf"),
    UnboundedLight: require("./assets/Unbounded/static/Unbounded-Light.ttf"),
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
