import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Screens
import FirstPage from "./screens/FirstPage";
import Login from "./screens/Login";
import ExerciseListPage from "./screens/ExerciseListPage";
import ExerciseDetail from "./screens/ExerciseDetail"; // ✅ PENTING: Tambahkan ini
import WorkoutPage from "./screens/WorkoutPage";
import WorkoutType from "./screens/WorkoutType";
import WorkoutTypeDetail from "./screens/WorkoutTypeDetail";
import FoodPage from "./screens/FoodPage";
import NutritionTips from "./screens/NutritionTips";
import ArticleDetail from "./screens/ArticleDetail";
import FoodList from "./screens/FoodList";
import Homepage from "./screens/Homepage";
import MyPlanPage from "./screens/MyPlanPage"
import ProfilePage from "./screens/ProfilePage"
import BottomTabs from "./BottomTabs";
import FoodDetail from "./screens/FoodDetail";
import MyPlan from "./screens/MyPlan";
import YourPlan from "./screens/YourPlan";
import YourWorkout from "./screens/YourWorkout";
import Profile from "./screens/Profile";
import EditProfile from "./screens/EditProfile";

const Stack = createNativeStackNavigator(); // ✅ Gunakan huruf kapital: Stack

export default function App() {
  const [fontsLoaded] = useFonts({
    Unbounded: require("./assets/Unbounded/static/Unbounded-Black.ttf"),
    UnboundedSemiBold: require("./assets/Unbounded/static/Unbounded-SemiBold.ttf"),
    UnboundedLight: require("./assets/Unbounded/static/Unbounded-Light.ttf"),
    Lexend: require("./assets/Lexend/static/Lexend-Regular.ttf"),
    LexendBold: require("./assets/Lexend/static/Lexend-Bold.ttf"),
    UnboundedRegular: require("./assets/Unbounded/static/Unbounded-Regular.ttf"),
    LexendSemiBold: require("./assets/Lexend/static/Lexend-SemiBold.ttf"),
    LexendRegular: require("./assets/Lexend/static/Lexend-Regular.ttf"),
    LexendLight: require("./assets/Lexend/static/Lexend-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EditProfile">
        <Stack.Screen
          name="ExerciseListPage"
          component={ExerciseListPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutPage"
          component={WorkoutPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutType"
          component={WorkoutType}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutTypeDetail"
          component={WorkoutTypeDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodPage"
          component={FoodPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NutritionTips"
          component={NutritionTips}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArticleDetail"
          component={ArticleDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodList"
          component={FoodList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="MyPlan"
          component={MyPlan}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="YourPlan"
          component={YourPlan}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="YourWorkout"
          component={YourWorkout}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
