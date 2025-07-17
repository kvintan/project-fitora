import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";

// Screens tanpa bottom tabs
import FirstPage from "./FirstPage";
import Login from "./Login";

// Detail & halaman tambahan
import ArticleDetail from "./ArticleDetail";
import EditProfile from "./EditProfile";
import ExerciseDetail from "./ExerciseDetail";
import ExerciseListPage from "./ExerciseListPage";
import FoodDetail from "./FoodDetail";
import FoodList from "./FoodList";
import MyPlan from "./MyPlan";
import MyPlanPage from "./MyPlanPage";
import NutritionTips from "./NutritionTips";
import Profile from "./Profile";
import WorkoutType from "./WorkoutType";
import WorkoutTypeDetail from "./WorkoutTypeDetail";
import YourPlan from "./YourPlan";
import YourWorkout from "./YourWorkout";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Halaman awal tanpa navbar */}
      <Stack.Screen name="FirstPage" component={FirstPage} />
      <Stack.Screen name="Login" component={Login} />

      {/* Halaman utama dengan bottom tabs */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Detail/detail page lainnya */}
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
      <Stack.Screen name="ExerciseListPage" component={ExerciseListPage} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
      <Stack.Screen name="FoodList" component={FoodList} />
      <Stack.Screen name="MyPlan" component={MyPlan} />
      <Stack.Screen name="MyPlanPage" component={MyPlanPage} />
      <Stack.Screen name="NutritionTips" component={NutritionTips} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="WorkoutType" component={WorkoutType} />
      <Stack.Screen name="WorkoutTypeDetail" component={WorkoutTypeDetail} />
      <Stack.Screen name="YourPlan" component={YourPlan} />
      <Stack.Screen name="YourWorkout" component={YourWorkout} />
    </Stack.Navigator>
  );
}
