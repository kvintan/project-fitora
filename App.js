import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./screens/FirstPage";
import Login from "./screens/Login";
import WorkoutPage from "./screens/WorkoutPage";
import WorkoutType from "./screens/WorkoutType";
import WorkoutTypeDetail from "./screens/WorkoutTypeDetail";
import { useFonts } from "expo-font";
import FoodPage from "./screens/FoodPage";
import NutritionTips from "./screens/NutritionTips";
import ArticleDetail from "./screens/ArticleDetail";
import FoodList from "./screens/FoodList";
import FoodDetail from "./screens/FoodDetail";
import MyPlan from "./screens/MyPlan";
import YourPlan from "./screens/YourPlan";
import YourWorkout from "./screens/YourWorkout";

const stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require("./assets/Unbounded/static/Unbounded-Black.ttf"),
    UnboundedSemiBold: require("./assets/Unbounded/static/Unbounded-SemiBold.ttf"),
    UnboundedLight: require("./assets/Unbounded/static/Unbounded-Light.ttf"),
    UnboundedRegular: require("./assets/Unbounded/static/Unbounded-Regular.ttf"),
    Lexend: require("./assets/Lexend/static/Lexend-Black.ttf"),
    LexendSemiBold: require("./assets/Lexend/static/Lexend-SemiBold.ttf"),
    LexendRegular: require("./assets/Lexend/static/Lexend-Regular.ttf"),
    LexendLight: require("./assets/Lexend/static/Lexend-Light.ttf"),
  });

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="YourPlan">
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
          name="FoodPage"
          component={FoodPage}
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
          name="WorkoutTypeDetail"
          component={WorkoutTypeDetail}
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
        <stack.Screen
          name="FoodList"
          component={FoodList}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="MyPlan"
          component={MyPlan}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="YourPlan"
          component={YourPlan}
          options={{ headerShown: false }}
        ></stack.Screen>
        <stack.Screen
          name="YourWorkout"
          component={YourWorkout}
          options={{ headerShown: false }}
        ></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
