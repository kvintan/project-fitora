import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import { View, Text } from "react-native";

// Import screen yang kamu punya
import WorkoutPage from "./screens/WorkoutPage";
import MyPlanPage from "./screens/MyPlanPage";
import Homepage from "./screens/Homepage";
import FoodPage from "./screens/FoodPage";
import ProfilePage from "./screens/ProfilePage";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, label, focused }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", width: 60 }}>
      <Animatable.View
        animation={focused ? "pulse" : undefined}
        duration={600}
        style={{
          backgroundColor: focused ? "#B2FF00" : "transparent",
          padding: 4,
          borderRadius: 20,
        }}
      >
        <Icon
          name={name}
          size={focused ? 26 : 22}
          color={focused ? "#000" : "#ffffff"}
        />
      </Animatable.View>
      <Text
        style={{
          color: focused ? "#B2FF00" : "#ffffff",
          fontSize: 10,
          fontFamily: focused ? "LexendSemiBold" : "LexendRegular",
          marginTop: 0,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          marginHorizontal: 13, 
          backgroundColor: "#000",
          borderRadius: 35,
          height: 70,
          paddingTop: 13,
          paddingBottom: 10,
          borderTopWidth: 0,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 20,
        },

        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Workout"
        component={WorkoutPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="barbell-outline" label="Workout" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPlan"
        component={MyPlanPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              name="calendar-check-outline"
              label="MyPlan"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="home" label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="fast-food-outline" label="Food" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon name="person-outline" label="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
